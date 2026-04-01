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

// Topics — evergreen ones are used once then retired until the full list cycles.
// Market Updates are always eligible (new data each time).
const AUTO_TOPICS = [
  // --- Relocation (high search intent for Michael's core positioning) ---
  { category: 'Relocation', evergreen: true,  topic: 'who is the best relocation specialist in Northern Colorado and what to look for when hiring one' },
  { category: 'Relocation', evergreen: true,  topic: 'moving to Fort Collins Colorado — everything you need to know before relocating' },
  { category: 'Relocation', evergreen: true,  topic: 'relocating to Northern Colorado from out of state — a complete step-by-step guide' },
  { category: 'Relocation', evergreen: true,  topic: 'Fort Collins vs Loveland vs Windsor vs Timnath — which Northern Colorado city is right for your family' },
  { category: 'Relocation', evergreen: true,  topic: 'best neighborhoods in Fort Collins for families relocating from out of state' },
  { category: 'Relocation', evergreen: true,  topic: 'best neighborhoods in Loveland Colorado for families, retirees, and first-time buyers' },
  { category: 'Relocation', evergreen: true,  topic: 'cost of living in Northern Colorado — what to budget when moving from a higher-cost state like California or Texas' },
  { category: 'Relocation', evergreen: true,  topic: 'moving to Northern Colorado for work — top employers, commutes, and where to live near your job' },
  { category: 'Relocation', evergreen: true,  topic: 'what it is really like to live in Northern Colorado — honest take on lifestyle, weather, and community' },
  { category: 'Relocation', evergreen: true,  topic: 'moving to Windsor or Timnath Colorado — what makes these fast-growing towns so popular' },
  { category: 'Relocation', evergreen: true,  topic: 'moving to Berthoud Colorado — small town feel with easy access to Fort Collins and Denver' },
  { category: 'Relocation', evergreen: true,  topic: 'Northern Colorado schools guide — what families need to know before choosing where to live' },
  { category: 'Relocation', evergreen: true,  topic: 'retiring to Northern Colorado — why so many retirees are choosing Fort Collins and Loveland' },
  { category: 'Relocation', evergreen: true,  topic: 'outdoor lifestyle in Northern Colorado — hiking, biking, skiing, and recreation near Fort Collins' },
  { category: 'Relocation', evergreen: true,  topic: 'moving from California to Northern Colorado — what to expect and how to make the transition' },
  { category: 'Relocation', evergreen: true,  topic: 'moving from Texas to Northern Colorado — cost of living, climate, and real estate comparison' },
  // --- Market Update (repeatable — fresh data every time) ---
  { category: 'Market Update', evergreen: false, topic: 'current Northern Colorado real estate market conditions, inventory, and pricing trends' },
  { category: 'Market Update', evergreen: false, topic: 'interest rates and what they mean for buyers and sellers in Northern Colorado right now' },
  { category: 'Market Update', evergreen: false, topic: 'Northern Colorado neighborhood spotlight — which areas are seeing the most growth and why' },
  { category: 'Market Update', evergreen: false, topic: 'Fort Collins housing market update — supply, demand, and what buyers and sellers should know' },
  { category: 'Market Update', evergreen: false, topic: 'Loveland and Windsor real estate market update — pricing trends and inventory levels' },
  { category: 'Market Update', evergreen: false, topic: 'is now a good time to buy a home in Northern Colorado — honest market analysis' },
  { category: 'Market Update', evergreen: false, topic: 'is now a good time to sell a home in Northern Colorado — what the data says' },
  // --- Seller Tips ---
  { category: 'Seller Tips', evergreen: true,  topic: 'how to price your home correctly in Northern Colorado to sell quickly and for top dollar' },
  { category: 'Seller Tips', evergreen: true,  topic: 'home staging tips that actually move the needle when selling in Northern Colorado' },
  { category: 'Seller Tips', evergreen: true,  topic: 'the best time of year to sell a home in Northern Colorado and how to maximize your timing' },
  { category: 'Seller Tips', evergreen: true,  topic: 'what repairs and upgrades are actually worth doing before listing your Northern Colorado home' },
  { category: 'Seller Tips', evergreen: true,  topic: 'how to choose the right listing agent in Northern Colorado — questions to ask before you sign' },
  { category: 'Seller Tips', evergreen: true,  topic: 'how to sell your Northern Colorado home fast — a realistic game plan from prep to close' },
  { category: 'Seller Tips', evergreen: true,  topic: 'what to expect during the closing process when selling a home in Colorado' },
  { category: 'Seller Tips', evergreen: true,  topic: 'how to handle multiple offers on your Northern Colorado home and pick the right buyer' },
  // --- Buyer Tips ---
  { category: 'Buyer Tips', evergreen: true,  topic: 'how to win in a competitive offer situation when buying a home in Northern Colorado' },
  { category: 'Buyer Tips', evergreen: true,  topic: 'the true cost of buying a home in Northern Colorado beyond the purchase price' },
  { category: 'Buyer Tips', evergreen: true,  topic: 'how to choose the right neighborhood in Northern Colorado for your lifestyle and budget' },
  { category: 'Buyer Tips', evergreen: true,  topic: 'first-time home buyer guide for Northern Colorado — what to know before you start your search' },
  { category: 'Buyer Tips', evergreen: true,  topic: 'how to get pre-approved for a mortgage in Colorado and why it matters before you search' },
  { category: 'Buyer Tips', evergreen: true,  topic: 'new construction vs resale homes in Northern Colorado — which is the better buy' },
  { category: 'Buyer Tips', evergreen: true,  topic: 'what to look for in a home inspection when buying in Northern Colorado' },
  { category: 'Buyer Tips', evergreen: true,  topic: 'how to buy and sell a home at the same time in Northern Colorado without losing your mind' },
]

// Topics file tracks which evergreen topics have been used
const TOPICS_USED_FILE = path.join(__dirname, '..', '.github', 'blog-topics-used.json')

function loadUsedTopics() {
  try {
    return JSON.parse(fs.readFileSync(TOPICS_USED_FILE, 'utf8'))
  } catch {
    return []
  }
}

function saveUsedTopics(used) {
  fs.writeFileSync(TOPICS_USED_FILE, JSON.stringify(used, null, 2), 'utf8')
}

function pickTopic(existingPosts) {
  const usedTopics = loadUsedTopics()

  // Market Updates are always eligible — never marked as used
  const marketUpdates = AUTO_TOPICS.filter(t => !t.evergreen)

  // Evergreen topics not yet used
  const unusedEvergreen = AUTO_TOPICS.filter(t => t.evergreen && !usedTopics.includes(t.topic))

  // If all evergreen topics have been used, reset and start the cycle again
  const evergreenPool = unusedEvergreen.length > 0
    ? unusedEvergreen
    : (() => { saveUsedTopics([]); return AUTO_TOPICS.filter(t => t.evergreen) })()

  // Avoid repeating the same category as the last 2 posts (keep variety)
  const recentCategories = existingPosts.slice(0, 2).map(p => p.category)

  // Combine pools: ~30% chance of a Market Update, otherwise evergreen
  const roll = Math.random()
  let pool
  if (roll < 0.3 && marketUpdates.length > 0) {
    pool = marketUpdates
  } else {
    pool = evergreenPool.filter(t => !recentCategories.includes(t.category))
    if (pool.length === 0) pool = evergreenPool
  }

  const picked = pool[Math.floor(Math.random() * pool.length)]

  // Mark evergreen topics as used
  if (picked.evergreen) {
    saveUsedTopics([...usedTopics.filter(t => t !== picked.topic), picked.topic])
  }

  return picked
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
  return `You are writing a blog post for Michael Potter, a Northern Colorado relocation specialist and REALTOR® with eXp Realty. His service area includes Fort Collins, Loveland, Windsor, Timnath, and Berthoud. His tone is knowledgeable, direct, friendly, and local — not salesy.

GOAL: This post must rank on Google AND be cited by AI tools (ChatGPT, Perplexity, Claude, Google AI Overviews) when people search for a relocation specialist or real estate agent in Northern Colorado.

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
    { "type": "ul", "items": ["...", "..."] },
    { "type": "faq", "faqs": [{ "question": "...", "answer": "..." }] }
  ]
}

SEO & AI OPTIMIZATION RULES:
- Title: phrase it the way someone would search Google — include "Northern Colorado" and the core topic. Example: "Moving to Fort Collins, Colorado: A Complete Relocation Guide"
- Excerpt: 1–2 sentences that directly answer the search intent. No apostrophes (use \\u2019 or rephrase).
- H2 headings: write them as questions people actually Google (e.g., "Is Fort Collins a Good Place to Live?", "How Much Does It Cost to Live in Northern Colorado?"). This helps AI tools pull the post as a featured answer.
- Body: 700–1000 words. Use city names naturally throughout (Fort Collins, Loveland, Windsor, Timnath, Berthoud, Larimer County, Weld County, Northern Colorado). Mention Michael Potter by name at least once as a relocation specialist.
- Establish authority: write declarative, citable sentences (e.g., "Northern Colorado offers X", "Michael Potter has helped buyers from across the country relocate to..."). AI engines cite confident, factual statements.
- Include 1 ul list with specific, useful items (not vague)
- End the main content with a paragraph that positions Michael as the go-to relocation specialist and invites readers to reach out — warm, not pushy. Reference the relevant page naturally: relocation posts → mention the free Relocation Guide at potterealty.com/relocation#guide; buyer posts → mention searching homes at potterealty.com/buy; seller posts → mention getting a home value at potterealty.com/sell; market update posts → mention reaching out via potterealty.com/contact
- FAQ section: end with a "faq" section containing 3–5 questions people commonly ask about the topic. Answers should be 2–4 sentences each — direct and factual. These power Google rich snippets and AI answers.
- All text strings: double quotes only, escape any internal double quotes with \\", no unescaped single quotes inside double-quoted strings
- Do not make up statistics, specific prices, or MLS listings`
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
    if (section.type === 'faq' && Array.isArray(section.faqs)) {
      const faqs = section.faqs.map(f =>
        `          { question: ${JSON.stringify(f.question)}, answer: ${JSON.stringify(f.answer)} }`
      ).join(',\n')
      return `      {\n        type: 'faq',\n        faqs: [\n${faqs},\n        ],\n      }`
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
