import type { Metadata } from 'next'
import Link from 'next/link'
import { posts, categoryColors, type BlogCategory } from '@/lib/blog'
import NewsletterSignup from '@/components/NewsletterSignup'

export const metadata: Metadata = {
  title: 'Real Estate Blog, Northern Colorado',
  description:
    'Market updates, seller tips, buyer guides, and relocation insights for Northern Colorado from local real estate expert Michael Potter.',
}

const categories: BlogCategory[] = ['Market Update', 'Seller Tips', 'Buyer Tips', 'Relocation']

export default function BlogPage({
  searchParams,
}: {
  searchParams: { category?: string }
}) {
  const activeCategory = searchParams.category as BlogCategory | undefined
  const filtered = activeCategory
    ? posts.filter((p) => p.category === activeCategory)
    : posts

  return (
    <>
      {/* HEADER */}
      <section className="pt-24 pb-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="font-sans text-teal text-sm font-500 uppercase tracking-widest mb-3">
            Insights & Advice
          </p>
          <h1 className="font-heading font-800 text-4xl md:text-5xl text-charcoal leading-tight max-w-2xl">
            Northern Colorado Real Estate Blog
          </h1>
          <p className="font-sans text-gray-500 text-lg mt-4 max-w-xl">
            Market updates, seller tips, buyer guides, and everything you need
            to know about moving to Northern Colorado.
          </p>
        </div>
      </section>

      {/* CATEGORY FILTER */}
      <section className="pb-6 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2">
            <Link
              href="/blog"
              className={`px-5 py-2 rounded-full font-heading font-500 text-sm transition-all duration-150 ${
                !activeCategory
                  ? 'bg-charcoal text-white'
                  : 'border border-gray-200 text-charcoal hover:border-teal hover:text-teal'
              }`}
            >
              All Posts
            </Link>
            {categories.map((cat) => (
              <Link
                key={cat}
                href={`/blog?category=${encodeURIComponent(cat)}`}
                className={`px-5 py-2 rounded-full font-heading font-500 text-sm transition-all duration-150 ${
                  activeCategory === cat
                    ? 'bg-charcoal text-white'
                    : 'border border-gray-200 text-charcoal hover:border-teal hover:text-teal'
                }`}
              >
                {cat}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* POSTS GRID */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filtered.length === 0 ? (
            <p className="font-sans text-gray-400 text-base">No posts in this category yet.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filtered.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="card p-7 group flex flex-col"
                >
                  <div className="mb-4">
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-xs font-heading font-600 uppercase tracking-wide ${categoryColors[post.category]}`}
                    >
                      {post.category}
                    </span>
                  </div>
                  <h2 className="font-heading font-700 text-lg text-charcoal leading-snug mb-3 group-hover:text-teal transition-colors">
                    {post.title}
                  </h2>
                  <p className="font-sans text-gray-500 text-sm leading-relaxed mb-5 flex-1">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <span className="font-sans text-xs text-gray-400">{post.date}</span>
                    <span className="font-sans text-xs text-gray-400">{post.readTime}</span>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <NewsletterSignup variant="homepage" />
        </div>
      </section>

      {/* CTA */}
      <section className="bg-charcoal py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading font-800 text-3xl text-white mb-5">
            Questions About the Northern Colorado Market?
          </h2>
          <p className="font-sans text-gray-400 text-lg mb-10">
            I&apos;m always happy to talk through what&apos;s happening in a
            specific neighborhood or price range.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="btn-primary text-base px-8 py-3.5">
              Get in Touch
            </Link>
            <Link href="/relocation#guide" className="btn-outline-white text-base px-8 py-3.5">
              Get the Free Relocation Guide
            </Link>

          </div>
        </div>
      </section>
    </>
  )
}
