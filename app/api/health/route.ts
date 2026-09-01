import { NextRequest, NextResponse } from 'next/server'

const ZAPIER_WEBHOOK = 'https://hooks.zapier.com/hooks/catch/21406913/u7aj12g/'

export async function GET(req: NextRequest) {
  const secret = req.nextUrl.searchParams.get('secret')
  if (secret !== process.env.HEALTH_CHECK_SECRET) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const apiKey = process.env.FOLLOW_UP_BOSS_API_KEY
  if (!apiKey) {
    return NextResponse.json({ ok: false, error: 'FOLLOW_UP_BOSS_API_KEY not set' }, { status: 500 })
  }

  try {
    const credentials = Buffer.from(`${apiKey}:`).toString('base64')

    // Create a test lead
    const createRes = await fetch('https://api.followupboss.com/v1/events', {
      method: 'POST',
      headers: {
        'Authorization': `Basic ${credentials}`,
        'Content-Type': 'application/json',
        'X-System': 'Website',
        'X-System-Key': apiKey,
      },
      body: JSON.stringify({
        source: 'Health Check',
        type: 'Registration',
        person: {
          firstName: 'Health',
          lastName: 'Check',
          emails: [{ value: 'healthcheck@potterealty.com' }],
          tags: ['Health Check'],
        },
        note: 'Automated weekly health check — this lead will be deleted.',
      }),
    })

    if (!createRes.ok) {
      const error = await createRes.text()
      await fetch(ZAPIER_WEBHOOK, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          form: 'Health Check',
          error: `FUB create failed (${createRes.status}): ${error}`,
        }),
      })
      return NextResponse.json({ ok: false, error: `FUB API error: ${createRes.status}` }, { status: 502 })
    }

    // Find and delete the test lead
    const findRes = await fetch(
      'https://api.followupboss.com/v1/people?email=healthcheck%40potterealty.com&limit=1',
      { headers: { 'Authorization': `Basic ${credentials}` } }
    )
    if (findRes.ok) {
      const findData = await findRes.json()
      const personId = findData?.people?.[0]?.id
      if (personId) {
        await fetch(`https://api.followupboss.com/v1/people/${personId}`, {
          method: 'DELETE',
          headers: { 'Authorization': `Basic ${credentials}` },
        })
      }
    }

    return NextResponse.json({ ok: true, message: 'FUB connection healthy' }, { status: 200 })
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Unknown error'
    await fetch(ZAPIER_WEBHOOK, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ form: 'Health Check', error: message }),
    })
    return NextResponse.json({ ok: false, error: message }, { status: 500 })
  }
}
