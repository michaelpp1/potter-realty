import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // Block AI training crawlers — no search/citation benefit, only training data
      { userAgent: 'GPTBot', disallow: '/' },
      { userAgent: 'Bytespider', disallow: '/' },
      // Allow all search crawlers, ChatGPT browsing, Perplexity, Claude, etc.
      { userAgent: '*', allow: '/' },
    ],
    sitemap: 'https://www.potterealty.com/sitemap.xml',
  }
}
