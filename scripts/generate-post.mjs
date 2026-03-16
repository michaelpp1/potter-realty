/**
 * Generates a new blog post and prepends it to lib/blog.ts
 *
 * Usage:
 *   node scripts/generate-post.mjs                        # auto-picks topic
 *   node scripts/generate-post.mjs "spring selling tips"  # specific topic
 *
 * Requires ANTHROPIC_API_KEY in environment.
 */

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const BLOG_FILE = path.join(__dirname, '..', 'lib', 'blog.ts')
const API_KEY = process.env.ANTHROPIC_API_KEY

if (!API_KEY) {
  console.error('❌  ANTHROPIC_API_KEY is not set.')
  process.exit(1)
}

// Rotate through topic ideas automatically
const AUTO_TOPICS = [
  { category: 'Market Update', topic: 'current Northern Colorado real estate market conditions, inventory, and pricing trends' },
  { category: 'Seller Tips', topic: 'how to price your home correctly in Northern Colorado to sell quickly and for top dollar' },
  { category: 'Buyer Tips', topic: 'how to win in a competitive offer situation when buying a home in Northern Colorado' },
  { category: 'Relocation', topic: 'what it is really like to live in Northern Colorado — outdoor lifestyle, community, and quality of life' },
  { category: 'Market Update', topic: 'Northern Colorado neighborhood spotlight — which areas are seeing the most growth and why' },
  { category: 'Seller Tips', topic: 'home staging tips that actually move the needle when selling in Northern Colorado' },
  { category: 'Buyer Tips', topic: 'the true cost of buying a home in Northern Colorado beyond the purchase price' },
  { category: 'Relocation', topic: 'moving to Northern Colorado from out of state — a step by step guide to making the transition smooth' },
  { category: 'Market Update', topic: 'interest rates and what they mean for buyers and sellers in Northern Colorado right now' },
  { category: 'Seller Tips', topic: 'the best time of year to sell a home in Northern Colorado and how to maximize your timing' },
  { category: 'Buyer Tips', topic: 'how to choose the right neighborhood in Northern Colorado for your lifestyle and budget' },
  { category: 'Relocation', topic: 'comparing Northern Colorado cities — Fort Collins vs Loveland vs Windsor vs Timnath for families' },
]

function pickTopic(existingPosts) {
  // Avoid repeating topics too recently
  const recentCategories = existingPosts.slice(0, 4).map(p => p.category)
  const available = AUTO_TOPICS.filter(t => !recentCategories.includes(t.category))
  const pool = available.length > 0 ? available : AUTO_TOPICS
  return pool[Math.floor(Math.random() * pool.length)]
}

function slugify(title) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .slice(0, 60)
}

function formatDate(date) {
  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
}

function extractExistingPosts(fileContent) {
  const slugMatches = [...fileContent.matchAll(/slug:\s*'([^']+)'/g)]
  const categoryMatches = [...fileContent.matchAll(/category:\s*'([^']+)'/g)]
  return slugMatches.map((m, i) => ({
    slug: m[1],
    category: categoryMatches[i]?.['1'] || '',
  }))
}

async function callClaude(prompt) {
  const res = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'x-api-key': API_KEY,
      'anthropic-version': '2023-06-01',
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      model: 'claude-opus-4-6',
      max_tokens: 4096,
      messages: [{ role: 'user', content: prompt }],
    }),
  })
  if (!res.ok) {
    const err = await res.text()
    throw new Error(`Claude API error ${res.status}: ${err}`)
  }
  const data = await res.json()
  return data.content[0].text
}

function buildPrompt(topic, category, today) {
  return `You are writing a blog post for Michael Potter, a real estate agent with eXp Realty in Northern Colorado (Fort Collins, Loveland, Windsor, Timnath, Berthoud, etc.). His tone is knowledgeable, friendly, honest, and local. He is not salesy.

Write a blog post about: ${topic}
Category: ${category}
Date: ${today}

Return ONLY a valid JSON object with this exact structure — no markdown, no explanation, just the JSON:

{
  "title": "...",
  "excerpt": "...",
  "readTime": "X min read",
  "content": [
    { "type": "paragraph", "text": "..." },
    { "type": "h2", "text": "..." },
    { "type": "paragraph", "text": "..." },
    { "type": "ul", "items": ["...", "..."] }
  ]
}

Rules:
- Title: specific and useful, not generic
- Excerpt: 1–2 sentences, no apostrophes in the text that would break a JS string (use \\u2019 for curly apostrophe or rephrase)
- 600–900 words total across all paragraphs
- 4–7 sections with h2 headings
- Include 1 ul list somewhere natural
- All text strings: use double quotes only, escape any double quotes inside with \\", no unescaped single quotes inside double-quoted strings
- Final paragraph: warm call to action directing readers to contact Michael
- Do not mention specific MLS listings, specific prices, or make up statistics
- Write as Michael in first person where appropriate`
}

async function main() {
  const customTopic = process.argv[2]
  const today = formatDate(new Date())

  const fileContent = fs.readFileSync(BLOG_FILE, 'utf8')
  const existingPosts = extractExistingPosts(fileContent)

  let category, topic
  if (customTopic) {
    // Try to detect category from topic keywords
    const t = customTopic.toLowerCase()
    if (t.includes('market') || t.includes('inventory') || t.includes('price') || t.includes('rate')) {
      category = 'Market Update'
    } else if (t.includes('sell') || t.includes('list') || t.includes('staging')) {
      category = 'Seller Tips'
    } else if (t.includes('buy') || t.includes('offer') || t.includes('first-time') || t.includes('first time')) {
      category = 'Buyer Tips'
    } else {
      category = 'Relocation'
    }
    topic = customTopic
  } else {
    const picked = pickTopic(existingPosts)
    category = picked.category
    topic = picked.topic
  }

  console.log(`\n📝 Generating post...`)
  console.log(`   Category: ${category}`)
  console.log(`   Topic: ${topic}\n`)

  const prompt = buildPrompt(topic, category, today)
  const raw = await callClaude(prompt)

  let postData
  try {
    // Strip markdown code fences if present
    const cleaned = raw.replace(/^```json\s*/i, '').replace(/\s*```$/, '').trim()
    postData = JSON.parse(cleaned)
  } catch (e) {
    console.error('❌  Failed to parse Claude response as JSON.')
    console.error('Raw response:', raw)
    process.exit(1)
  }

  const slug = slugify(postData.title)

  // Check for duplicate slug
  if (existingPosts.some(p => p.slug === slug)) {
    const uniqueSlug = `${slug}-${Date.now()}`
    postData.slug = uniqueSlug
  } else {
    postData.slug = slug
  }

  // Build the TypeScript object string
  const contentLines = postData.content.map(section => {
    if (section.type === 'ul') {
      const items = section.items.map(i => `          ${JSON.stringify(i)}`).join(',\n')
      return `      {\n        type: 'ul',\n        items: [\n${items},\n        ],\n      }`
    }
    if (section.type === 'h2') {
      return `      {\n        type: 'h2',\n        text: ${JSON.stringify(section.text)},\n      }`
    }
    return `      {\n        type: 'paragraph',\n        text: ${JSON.stringify(section.text)},\n      }`
  }).join(',\n')

  const newPost = `  {
    slug: '${postData.slug}',
    title: ${JSON.stringify(postData.title)},
    date: '${today}',
    category: '${category}',
    excerpt: ${JSON.stringify(postData.excerpt)},
    readTime: '${postData.readTime}',
    content: [
${contentLines},
    ],
  },`

  // Insert new post at the top of the posts array
  const updated = fileContent.replace(
    /^export const posts: BlogPost\[\] = \[/m,
    `export const posts: BlogPost[] = [\n${newPost}`
  )

  if (updated === fileContent) {
    console.error('❌  Could not find insertion point in lib/blog.ts')
    process.exit(1)
  }

  fs.writeFileSync(BLOG_FILE, updated, 'utf8')

  console.log(`✅  New post added!`)
  console.log(`   Title: ${postData.title}`)
  console.log(`   Slug:  /blog/${postData.slug}`)

  // Post to Google My Business if credentials are present
  await postToGoogleMyBusiness(postData)

  console.log(`\nRun "npm run dev" to preview, then deploy to publish.\n`)
}

async function getGoogleAccessToken() {
  const { GMB_CLIENT_ID, GMB_CLIENT_SECRET, GMB_REFRESH_TOKEN } = process.env
  if (!GMB_CLIENT_ID || !GMB_CLIENT_SECRET || !GMB_REFRESH_TOKEN) return null

  const res = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      client_id: GMB_CLIENT_ID,
      client_secret: GMB_CLIENT_SECRET,
      refresh_token: GMB_REFRESH_TOKEN,
      grant_type: 'refresh_token',
    }),
  })
  if (!res.ok) return null
  const data = await res.json()
  return data.access_token || null
}

async function postToGoogleMyBusiness(postData) {
  const { GMB_ACCOUNT_ID, GMB_LOCATION_ID } = process.env
  if (!GMB_ACCOUNT_ID || !GMB_LOCATION_ID) {
    console.log('ℹ️   Google My Business not configured — skipping GMB post.')
    return
  }

  const accessToken = await getGoogleAccessToken()
  if (!accessToken) {
    console.log('⚠️   Could not get Google access token — skipping GMB post.')
    return
  }

  const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.michaelpotterrealty.com'
  const postUrl = `${SITE_URL}/blog/${postData.slug}`

  // Use the excerpt as the GMB summary (max 1500 chars)
  const summary = `${postData.title}\n\n${postData.excerpt}\n\nRead the full article on our blog.`

  const body = {
    languageCode: 'en-US',
    summary,
    callToAction: {
      actionType: 'LEARN_MORE',
      url: postUrl,
    },
    topicType: 'STANDARD',
  }

  const url = `https://mybusiness.googleapis.com/v4/accounts/${GMB_ACCOUNT_ID}/locations/${GMB_LOCATION_ID}/localPosts`
  const res = await fetch(url, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  })

  if (res.ok) {
    console.log(`✅  Posted to Google My Business!`)
    console.log(`   Link in post: ${postUrl}`)
  } else {
    const err = await res.text()
    console.log(`⚠️   GMB post failed: ${err}`)
  }
}

main().catch(err => {
  console.error('❌ ', err.message)
  process.exit(1)
})
