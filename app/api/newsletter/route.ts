import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const { email, firstName } = await req.json()

    if (!email) {
      return NextResponse.json({ error: 'Email is required.' }, { status: 400 })
    }

    const apiKey = process.env.FLODESK_API_KEY
    const segmentId = process.env.FLODESK_SEGMENT_ID

    if (!apiKey || !segmentId) {
      console.error('Flodesk env vars not set')
      return NextResponse.json({ error: 'Server configuration error.' }, { status: 500 })
    }

    const credentials = Buffer.from(`${apiKey}:`).toString('base64')

    // Upsert subscriber
    const subscriberRes = await fetch('https://api.flodesk.com/v1/subscribers', {
      method: 'POST',
      headers: {
        'Authorization': `Basic ${credentials}`,
        'Content-Type': 'application/json',
        'User-Agent': 'PotterRealty/1.0',
      },
      body: JSON.stringify({
        email,
        ...(firstName ? { first_name: firstName } : {}),
        status: 'active',
      }),
    })

    if (!subscriberRes.ok) {
      const err = await subscriberRes.text()
      console.error('Flodesk subscriber error:', err)
      return NextResponse.json({ error: 'Could not subscribe. Please try again.' }, { status: 502 })
    }

    // Add to segment
    const segmentRes = await fetch(`https://api.flodesk.com/v1/subscribers/${encodeURIComponent(email)}/segments`, {
      method: 'POST',
      headers: {
        'Authorization': `Basic ${credentials}`,
        'Content-Type': 'application/json',
        'User-Agent': 'PotterRealty/1.0',
      },
      body: JSON.stringify({ segment_ids: [segmentId] }),
    })

    if (!segmentRes.ok) {
      const err = await segmentRes.text()
      console.error('Flodesk segment error:', err)
      // Subscriber was created — not a hard failure
    }

    // Add to Follow Up Boss as a new contact
    const fubApiKey = process.env.FOLLOW_UP_BOSS_API_KEY
    if (fubApiKey) {
      const fubCredentials = Buffer.from(`${fubApiKey}:`).toString('base64')
      const fubRes = await fetch('https://api.followupboss.com/v1/people', {
        method: 'POST',
        headers: {
          'Authorization': `Basic ${fubCredentials}`,
          'Content-Type': 'application/json',
          'X-System': 'Potter Realty Website',
          'X-System-Key': fubApiKey!,
        },
        body: JSON.stringify({
          source: 'Newsletter Signup',
          emails: [{ value: email, type: 'home' }],
          ...(firstName ? { firstName } : {}),
          tags: ['Newsletter'],
        }),
      })
      if (!fubRes.ok) {
        const err = await fubRes.text()
        console.error('FUB contact error:', err)
        // Not a hard failure — Flodesk already succeeded
      }
    }

    return NextResponse.json({ success: true }, { status: 200 })
  } catch (err) {
    console.error('Newsletter signup error:', err)
    return NextResponse.json({ error: 'An unexpected error occurred.' }, { status: 500 })
  }
}
