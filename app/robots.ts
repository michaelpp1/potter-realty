import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // Block ByteDance/TikTok training crawler only
      { userAgent: 'Bytespider', disallow: '/' },
      // Allow all crawlers including GPTBot (ChatGPT search index), PerplexityBot, ClaudeBot, etc.
      { userAgent: '*', allow: '/' },
    ],
    sitemap: 'https://www.potterealty.com/sitemap.xml',
  }
}
