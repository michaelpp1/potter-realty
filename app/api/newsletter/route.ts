import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const { email, firstName } = await req.json()

    if (!email) {
      return NextResponse.json({ error: 'Email is required.' }, { status: 400 })
    }

    const fubApiKey = process.env.FOLLOW_UP_BOSS_API_KEY
    if (!fubApiKey) {
      console.error('FOLLOW_UP_BOSS_API_KEY is not set')
      return NextResponse.json({ error: 'Server configuration error.' }, { status: 500 })
    }

    const fubCredentials = Buffer.from(`${fubApiKey}:`).toString('base64')
    const fubRes = await fetch('https://api.followupboss.com/v1/people', {
      method: 'POST',
      headers: {
        'Authorization': `Basic ${fubCredentials}`,
        'Content-Type': 'application/json',
        'X-System': 'Potter Realty Website',
        'X-System-Key': fubApiKey,
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
      return NextResponse.json({ error: 'Could not subscribe. Please try again.' }, { status: 502 })
    }

    return NextResponse.json({ success: true }, { status: 200 })
  } catch (err) {
    console.error('Newsletter signup error:', err)
    return NextResponse.json({ error: 'An unexpected error occurred.' }, { status: 500 })
  }
}
