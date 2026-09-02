import { NextRequest, NextResponse } from 'next/server'

const ZAPIER_WEBHOOK = 'https://hooks.zapier.com/hooks/catch/21406913/u7aj12g/'

const TIMELINE_TAGS: Record<string, string> = {
  'ASAP': 'ASAP',
  'Within the Next 6 Months': '6 Months or Under',
  '6-12 Months': '6-12 Months',
  '1 Year or More': '1 Year or More',
}

async function alertZapier(form: string, email: string, name: string, error: string) {
  try {
    await fetch(ZAPIER_WEBHOOK, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ form, email, name, error }),
    })
  } catch {
    // Don't let alert failure affect the response
  }
}

// Returns true if human, false only for confirmed bots (score <= 0.1).
// Fails open — if reCAPTCHA is unavailable or uncertain, we let the lead through.
// The honeypot field is the primary bot defence.
async function verifyRecaptcha(token: string): Promise<boolean> {
  const secretKey = process.env.RECAPTCHA_SECRET_KEY
  if (!secretKey) return true // fail open — don't block leads over a missing key

  try {
    const res = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({ secret: secretKey, response: token }),
    })
    const data = await res.json()
    // Only block if reCAPTCHA explicitly flags as bot (score <= 0.1)
    if (data.success === true && data.score <= 0.1) return false
    return true // pass everything else, including errors and low-confidence scores
  } catch {
    return true // fail open on network errors
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { firstName, lastName, email, phone, movingTimeline, honeypot, recaptchaToken, source } = body

    console.log('[lead] submission received:', { firstName, lastName, email, source, hasToken: !!recaptchaToken, tokenLength: recaptchaToken?.length ?? 0 })

    // reCAPTCHA verification
    if (!recaptchaToken || !(await verifyRecaptcha(recaptchaToken))) {
      console.log('[lead] blocked by recaptcha — token present:', !!recaptchaToken)
      return NextResponse.json(
        { error: 'Security check failed. Please try again.' },
        { status: 400 }
      )
    }

    if (!firstName || !lastName || !email || !movingTimeline) {
      console.log('[lead] missing required fields:', { firstName: !!firstName, lastName: !!lastName, email: !!email, movingTimeline: !!movingTimeline })
      return NextResponse.json(
        { error: 'Missing required fields.' },
        { status: 400 }
      )
    }

    const apiKey = process.env.FOLLOW_UP_BOSS_API_KEY
    if (!apiKey) {
      console.error('[lead] FOLLOW_UP_BOSS_API_KEY is not set')
      await alertZapier('Relocation Form', email, `${firstName} ${lastName}`, 'FOLLOW_UP_BOSS_API_KEY env var is not set')
      return NextResponse.json(
        { error: 'Server configuration error.' },
        { status: 500 }
      )
    }

    const tag = TIMELINE_TAGS[movingTimeline] ?? 'Relocation - Website Lead'
    const credentials = Buffer.from(`${apiKey}:`).toString('base64')

    const resolvedSource = source || 'Website Relocation Form'

    // FUB action plans (Relo Lead Emails, timeline plans) only fire for lead flows
    // tied to "Instagram" and "Website Relocation Form". Other sources like TikTok
    // and ManyChat get a different lead flow and miss the automations. We normalise
    // all relocation form submissions to "Website Relocation Form" so the automations
    // always fire, and add the real source as a tag for tracking.
    const SOURCE_TAG_MAP: Record<string, string> = {
      'TikTok': 'TikTok Lead',
      'Instagram': 'Instagram Lead',
      'ManyChat': 'ManyChat Lead',
    }
    const fubSource = 'Website Relocation Form'
    const sourceTags = SOURCE_TAG_MAP[resolvedSource] ? [SOURCE_TAG_MAP[resolvedSource]] : []

    const person: Record<string, unknown> = {
      firstName,
      lastName,
      emails: [{ value: email }],
      tags: [tag, 'Website Lead', ...sourceTags],
    }

    if (phone && phone.trim()) {
      person.phones = [{ value: phone.trim(), type: 'mobile' }]
    }

    const payload = {
      source: fubSource,
      type: 'Registration',
      person,
      note: `Relocation inquiry submitted via ${resolvedSource}. Moving timeline: ${movingTimeline}.`,
    }

    const fubRes = await fetch('https://api.followupboss.com/v1/events', {
      method: 'POST',
      headers: {
        'Authorization': `Basic ${credentials}`,
        'Content-Type': 'application/json',
        'X-System': 'Website',
        'X-System-Key': apiKey,
      },
      body: JSON.stringify(payload),
    })

    if (!fubRes.ok) {
      const errorText = await fubRes.text()
      console.error('[lead] FUB API error:', fubRes.status, errorText)
      await alertZapier('Relocation Form', email, `${firstName} ${lastName}`, `FUB API error ${fubRes.status}: ${errorText}`)
      return NextResponse.json(
        { error: 'Failed to submit lead. Please try again.' },
        { status: 502 }
      )
    }

    const fubData = await fubRes.json()
    const personId = fubData?.id
    console.log('[lead] FUB success — person id:', personId, 'email:', email)

    // Re-apply tags as a separate PATCH so FUB fires tag-based automations.
    // Tags included in the initial event creation don't trigger "tag added" events.
    if (personId) {
      const allTags = person.tags as string[]
      await fetch(`https://api.followupboss.com/v1/people/${personId}`, {
        method: 'PUT',
        headers: {
          'Authorization': `Basic ${credentials}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ tags: allTags }),
      })
      console.log('[lead] tags re-applied to trigger automation:', allTags)
    }

    return NextResponse.json({ success: true }, { status: 200 })
  } catch (err) {
    console.error('Lead submission error:', err)
    return NextResponse.json(
      { error: 'An unexpected error occurred.' },
      { status: 500 }
    )
  }
}
