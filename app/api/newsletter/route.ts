import { NextRequest, NextResponse } from 'next/server'

const ZAPIER_WEBHOOK = 'https://hooks.zapier.com/hooks/catch/21406913/u7aj12g/'

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

export async function POST(req: NextRequest) {
  try {
    const { email, firstName } = await req.json()

    if (!email) {
      return NextResponse.json({ error: 'Email is required.' }, { status: 400 })
    }

    const fubApiKey = process.env.FOLLOW_UP_BOSS_API_KEY
    if (!fubApiKey) {
      console.error('FOLLOW_UP_BOSS_API_KEY is not set')
      await alertZapier('Newsletter Signup', email, firstName ?? '', 'FOLLOW_UP_BOSS_API_KEY env var is not set')
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
      await alertZapier('Newsletter Signup', email, firstName ?? '', `FUB API error ${fubRes.status}: ${err}`)
      return NextResponse.json({ error: 'Could not subscribe. Please try again.' }, { status: 502 })
    }

    return NextResponse.json({ success: true }, { status: 200 })
  } catch (err) {
    console.error('Newsletter signup error:', err)
    return NextResponse.json({ error: 'An unexpected error occurred.' }, { status: 500 })
  }
}
