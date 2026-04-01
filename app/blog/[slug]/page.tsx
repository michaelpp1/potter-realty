import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Script from 'next/script'
import { posts, getPostBySlug, categoryColors, type BlogCategory } from '@/lib/blog'
import { SITE } from '@/lib/constants'

const inlineCta: Record<BlogCategory, { headline: string; body: string; cta: string; href: string; color: string }> = {
  'Relocation': {
    headline: 'Thinking About Moving to Northern Colorado?',
    body: 'Get the free Northern Colorado Relocation Guide — neighborhoods, schools, lifestyle, and everything you need to plan your move.',
    cta: 'Get the Free Relocation Guide',
    href: '/relocation',
    color: 'border-teal/30 bg-teal/5',
  },
  'Buyer Tips': {
    headline: 'Ready to Start Your Home Search?',
    body: "Browse up-to-date listings across Fort Collins, Loveland, Windsor, and the rest of Northern Colorado. I'll help you find the right home.",
    cta: 'Browse Homes',
    href: '/buy',
    color: 'border-teal/30 bg-teal/5',
  },
  'Seller Tips': {
    headline: 'Curious What Your Home Is Worth?',
    body: "Get a free, no-pressure market analysis for your Northern Colorado home. I'll show you exactly what it's worth in today's market.",
    cta: 'Get My Home\u2019s Value',
    href: '/sell',
    color: 'border-gold/30 bg-gold/5',
  },
  'Market Update': {
    headline: 'Have Questions About the Market?',
    body: "Whether you're thinking about buying, selling, or just keeping tabs on Northern Colorado real estate, I'm happy to talk through what the data means for you.",
    cta: 'Let\u2019s Connect',
    href: '/contact',
    color: 'border-teal/30 bg-teal/5',
  },
}

interface Props {
  params: { slug: string }
}

export async function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getPostBySlug(params.slug)
  if (!post) return {}
  return {
    title: `${post.title} | Michael Potter Real Estate`,
    description: post.excerpt,
  }
}

export default function BlogPostPage({ params }: Props) {
  const post = getPostBySlug(params.slug)
  if (!post) notFound()

  const related = posts
    .filter((p) => p.slug !== post.slug && p.category === post.category)
    .slice(0, 2)

  const otherPosts = posts
    .filter((p) => p.slug !== post.slug && p.category !== post.category)
    .slice(0, 2)

  const suggestions = [...related, ...otherPosts].slice(0, 3)

  const faqSections = post.content.filter((s) => s.type === 'faq' && s.faqs?.length)
  const allFaqs = faqSections.flatMap((s) => s.faqs ?? [])

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: {
      '@type': 'Person',
      name: 'Michael Potter',
      jobTitle: 'Northern Colorado Relocation Specialist & REALTOR®',
      worksFor: { '@type': 'Organization', name: 'eXp Realty' },
      url: 'https://www.potterealty.com',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Potter Realty — Michael Potter, eXp Realty',
      url: 'https://www.potterealty.com',
    },
    mainEntityOfPage: `https://www.potterealty.com/blog/${post.slug}`,
  }

  const faqJsonLd = allFaqs.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: allFaqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  } : null

  return (
    <>
      <Script
        id="article-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      {faqJsonLd && (
        <Script
          id="faq-jsonld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}
      {/* HEADER */}
      <section className="pt-24 pb-10 bg-white border-b border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm font-sans text-gray-400 mb-8">
            <Link href="/blog" className="hover:text-teal transition-colors">
              Blog
            </Link>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-gray-500 truncate">{post.category}</span>
          </nav>

          <span
            className={`inline-block px-3 py-1 rounded-full text-xs font-heading font-600 uppercase tracking-wide mb-5 ${categoryColors[post.category]}`}
          >
            {post.category}
          </span>

          <h1 className="font-heading font-800 text-3xl md:text-4xl text-charcoal leading-tight mb-5">
            {post.title}
          </h1>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-teal/10 flex items-center justify-center">
                <span className="font-heading font-700 text-teal text-sm">MP</span>
              </div>
              <div>
                <p className="font-heading font-600 text-sm text-charcoal">Michael Potter</p>
                <p className="font-sans text-xs text-gray-400">eXp Realty · Northern Colorado</p>
              </div>
            </div>
            <div className="h-4 w-px bg-gray-200" />
            <span className="font-sans text-sm text-gray-400">{post.date}</span>
            <div className="h-4 w-px bg-gray-200" />
            <span className="font-sans text-sm text-gray-400">{post.readTime}</span>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-12 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose-custom space-y-6">
            {post.content.map((section, i) => {
              const cta = inlineCta[post.category]
              const ctaBlock = i === 3 && cta ? (
                <div className={`my-8 rounded-2xl border p-6 ${cta.color}`}>
                  <p className="font-heading font-700 text-base text-charcoal mb-2">{cta.headline}</p>
                  <p className="font-sans text-gray-600 text-sm leading-relaxed mb-4">{cta.body}</p>
                  <Link href={cta.href} className="btn-primary text-sm px-5 py-2.5 inline-block">
                    {cta.cta}
                  </Link>
                </div>
              ) : null

              if (section.type === 'h2') {
                return (
                  <div key={i}>
                    {ctaBlock}
                    <h2 className="font-heading font-700 text-xl text-charcoal mt-10 mb-3">
                      {section.text}
                    </h2>
                  </div>
                )
              }
              if (section.type === 'ul') {
                return (
                  <div key={i}>
                    {ctaBlock}
                    <ul className="space-y-2 my-4">
                      {section.items?.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <div className="w-5 h-5 rounded-full bg-teal/10 flex items-center justify-center shrink-0 mt-0.5">
                            <svg className="w-3 h-3 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <p className="font-sans text-gray-600 text-base leading-relaxed">{item}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                )
              }
              if (section.type === 'faq' && section.faqs?.length) {
                return (
                  <div key={i}>
                    {ctaBlock}
                    <div className="space-y-4 mt-10">
                      <h2 className="font-heading font-700 text-xl text-charcoal mb-5">
                        Frequently Asked Questions
                      </h2>
                      {section.faqs.map((faq, j) => (
                        <details key={j} className="group border border-gray-200 rounded-xl p-5 cursor-pointer">
                          <summary className="font-heading font-600 text-base text-charcoal list-none flex items-center justify-between gap-3">
                            {faq.question}
                            <svg className="w-4 h-4 text-teal shrink-0 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                          </summary>
                          <p className="font-sans text-gray-600 text-base leading-relaxed mt-3">{faq.answer}</p>
                        </details>
                      ))}
                    </div>
                  </div>
                )
              }
              return (
                <div key={i}>
                  {ctaBlock}
                  <p className="font-sans text-gray-600 text-base leading-relaxed">
                    {section.text}
                  </p>
                </div>
              )
            })}
          </div>

          {/* Author card */}
          <div className="mt-14 p-7 bg-teal/5 border border-teal/20 rounded-2xl flex flex-col sm:flex-row gap-5 items-start">
            <div className="w-14 h-14 rounded-full bg-teal/10 flex items-center justify-center shrink-0">
              <span className="font-heading font-700 text-teal text-lg">MP</span>
            </div>
            <div>
              <p className="font-heading font-700 text-base text-charcoal mb-1">
                Michael Potter, eXp Realty, Northern Colorado
              </p>
              <p className="font-sans text-gray-500 text-sm leading-relaxed mb-4">
                I help buyers, sellers, and people relocating to Northern Colorado find the right home and community. Have a question about this article or the local market? I&apos;m happy to talk.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href={SITE.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-sm px-5 py-2.5"
                >
                  Book a Free Call
                </a>
                <Link href="/contact" className="btn-outline text-sm px-5 py-2.5">
                  Send a Message
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MORE POSTS */}
      {suggestions.length > 0 && (
        <section className="section-sage py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-heading font-700 text-xl text-charcoal mb-7">More from the Blog</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {suggestions.map((p) => (
                <Link
                  key={p.slug}
                  href={`/blog/${p.slug}`}
                  className="card p-6 group"
                >
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-xs font-heading font-600 uppercase tracking-wide mb-3 ${categoryColors[p.category]}`}
                  >
                    {p.category}
                  </span>
                  <h3 className="font-heading font-700 text-base text-charcoal leading-snug mb-2 group-hover:text-teal transition-colors">
                    {p.title}
                  </h3>
                  <p className="font-sans text-gray-500 text-sm leading-relaxed line-clamp-2">
                    {p.excerpt}
                  </p>
                  <p className="font-sans text-xs text-gray-400 mt-4">{p.date}</p>
                </Link>
              ))}
            </div>
            <div className="mt-8 text-center">
              <Link href="/blog" className="btn-outline text-sm px-6 py-3">
                View All Posts
              </Link>
            </div>
          </div>
        </section>
      )}
    </>
  )
}
