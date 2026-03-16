import type { MetadataRoute } from 'next'
import { cities } from '@/lib/cities'
import { posts } from '@/lib/blog'

const BASE_URL = 'https://www.michaelpotterrealty.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE_URL, lastModified: new Date(), changeFrequency: 'weekly', priority: 1.0 },
    { url: `${BASE_URL}/about`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/buy`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE_URL}/sell`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/relocation`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/contact`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/blog`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
  ]

  const cityPages: MetadataRoute.Sitemap = cities.map((city) => ({
    url: `${BASE_URL}/relocation/${city.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  const blogPages: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: new Date(),
    changeFrequency: 'never' as const,
    priority: 0.6,
  }))

  return [...staticPages, ...cityPages, ...blogPages]
}
