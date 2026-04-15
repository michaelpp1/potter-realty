// Pings IndexNow after every production build so Bing, Yandex, and Naver
// index updated pages immediately instead of waiting for a crawl.
// Runs automatically via the "postbuild" npm script on every Vercel deploy.

const KEY = '3b3aa4d3826a4e128f3ac419900efa04'
const HOST = 'www.potterealty.com'

const URLS = [
  `https://${HOST}/`,
  `https://${HOST}/buy`,
  `https://${HOST}/sell`,
  `https://${HOST}/relocation`,
  `https://${HOST}/blog`,
  `https://${HOST}/about`,
  `https://${HOST}/contact`,
  `https://${HOST}/relocation/fort-collins`,
  `https://${HOST}/relocation/loveland`,
  `https://${HOST}/relocation/windsor`,
  `https://${HOST}/relocation/timnath`,
  `https://${HOST}/relocation/berthoud`,
  `https://${HOST}/relocation/johnstown`,
  `https://${HOST}/relocation/wellington`,
  `https://${HOST}/relocation/greeley`,
  `https://${HOST}/relocation/severance`,
]

async function ping() {
  try {
    const res = await fetch('https://api.indexnow.org/indexnow', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      body: JSON.stringify({
        host: HOST,
        key: KEY,
        keyLocation: `https://${HOST}/${KEY}.txt`,
        urlList: URLS,
      }),
    })
    console.log(`[IndexNow] Pinged ${URLS.length} URLs — status ${res.status}`)
  } catch (err) {
    // Non-fatal — don't fail the build if IndexNow is unreachable
    console.warn('[IndexNow] Ping failed (non-fatal):', err.message)
  }
}

ping()
