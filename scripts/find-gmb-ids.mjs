/**
 * Run this once to find your GMB Account ID and Location ID.
 * Usage:
 *   GMB_CLIENT_ID=xxx GMB_CLIENT_SECRET=xxx GMB_REFRESH_TOKEN=xxx node scripts/find-gmb-ids.mjs
 */

const { GMB_CLIENT_ID, GMB_CLIENT_SECRET, GMB_REFRESH_TOKEN } = process.env

if (!GMB_CLIENT_ID || !GMB_CLIENT_SECRET || !GMB_REFRESH_TOKEN) {
  console.error('❌  Set GMB_CLIENT_ID, GMB_CLIENT_SECRET, and GMB_REFRESH_TOKEN before running.')
  process.exit(1)
}

// Step 1: Get access token
const tokenRes = await fetch('https://oauth2.googleapis.com/token', {
  method: 'POST',
  headers: { 'content-type': 'application/x-www-form-urlencoded' },
  body: new URLSearchParams({
    client_id: GMB_CLIENT_ID,
    client_secret: GMB_CLIENT_SECRET,
    refresh_token: GMB_REFRESH_TOKEN,
    grant_type: 'refresh_token',
  }),
})
const tokenData = await tokenRes.json()
if (!tokenData.access_token) {
  console.error('❌  Failed to get access token:', JSON.stringify(tokenData))
  process.exit(1)
}
const accessToken = tokenData.access_token
console.log('✅  Got access token\n')

// Step 2: List accounts
const accountsRes = await fetch('https://mybusinessaccountmanagement.googleapis.com/v1/accounts', {
  headers: { Authorization: `Bearer ${accessToken}` },
})
const accountsData = await accountsRes.json()
if (!accountsData.accounts?.length) {
  console.error('❌  No accounts found:', JSON.stringify(accountsData))
  process.exit(1)
}

console.log('📋  Accounts:')
for (const account of accountsData.accounts) {
  console.log(`   Name: ${account.name}`)
  console.log(`   Account ID: ${account.name.replace('accounts/', '')}`)
  console.log()
}

const accountName = accountsData.accounts[0].name

// Step 3: List locations
const locationsRes = await fetch(
  `https://mybusinessinformation.googleapis.com/v1/${accountName}/locations?readMask=name,title`,
  { headers: { Authorization: `Bearer ${accessToken}` } }
)
const locationsData = await locationsRes.json()
if (!locationsData.locations?.length) {
  console.error('❌  No locations found:', JSON.stringify(locationsData))
  process.exit(1)
}

console.log('📍  Locations:')
for (const loc of locationsData.locations) {
  console.log(`   Title: ${loc.title}`)
  console.log(`   Location ID: ${loc.name.replace(`${accountName}/locations/`, '')}`)
  console.log()
}

console.log('👉  Copy the Account ID and Location ID above into your Vercel + GitHub secrets as:')
console.log('   GMB_ACCOUNT_ID')
console.log('   GMB_LOCATION_ID')
