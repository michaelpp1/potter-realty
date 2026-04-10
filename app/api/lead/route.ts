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

async function verifyRecaptcha(token: string): Promise<boolean> {
  const secretKey = process.env.RECAPTCHA_SECRET_KEY
  if (!secretKey) {
    console.error('RECAPTCHA_SECRET_KEY is not set')
    return false
  }

  const res = await fetch('https://www.google.com/recaptcha/api/siteverify', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({ secret: secretKey, response: token }),
  })

  const data = await res.json()
  // Require score >= 0.5 (0 = bot, 1 = human)
  return data.success === true && data.score >= 0.5
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { firstName, lastName, email, phone, movingTimeline, honeypot, recaptchaToken } = body

    // Honeypot check — bots fill this, humans don't
    if (honeypot) {
      return NextResponse.json({ success: true }, { status: 200 })
    }

    // reCAPTCHA verification
    if (!recaptchaToken || !(await verifyRecaptcha(recaptchaToken))) {
      return NextResponse.json(
        { error: 'Security check failed. Please try again.' },
        { status: 400 }
      )
    }

    if (!firstName || !lastName || !email || !movingTimeline) {
      return NextResponse.json(
        { error: 'Missing required fields.' },
        { status: 400 }
      )
    }

    const apiKey = process.env.FOLLOW_UP_BOSS_API_KEY
    if (!apiKey) {
      console.error('FOLLOW_UP_BOSS_API_KEY is not set')
      await alertZapier('Relocation Form', email, `${firstName} ${lastName}`, 'FOLLOW_UP_BOSS_API_KEY env var is not set')
      return NextResponse.json(
        { error: 'Server configuration error.' },
        { status: 500 }
      )
    }

    const tag = TIMELINE_TAGS[movingTimeline] ?? 'Relocation - Website Lead'
    const credentials = Buffer.from(`${apiKey}:`).toString('base64')

    const person: Record<string, unknown> = {
      firstName,
      lastName,
      emails: [{ value: email }],
      tags: [tag, 'Website Lead'],
    }

    if (phone && phone.trim()) {
      person.phones = [{ value: phone.trim(), type: 'mobile' }]
    }

    const payload = {
      source: 'Website Relocation Form',
      type: 'Registration',
      person,
      note: `Relocation inquiry submitted via website. Moving timeline: ${movingTimeline}.`,
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
      console.error('Follow Up Boss API error:', fubRes.status, errorText)
      await alertZapier('Relocation Form', email, `${firstName} ${lastName}`, `FUB API error ${fubRes.status}: ${errorText}`)
      return NextResponse.json(
        { error: 'Failed to submit lead. Please try again.' },
        { status: 502 }
      )
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
