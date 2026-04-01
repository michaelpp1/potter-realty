import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { SITE } from '@/lib/constants'
import NewsletterSignup from '@/components/NewsletterSignup'

export const metadata: Metadata = {
  title: 'About Michael Potter',
  description:
    'Learn about Michael Potter, eXp Realty real estate advisor serving Northern Colorado. Local expertise, modern approach, and a passion for helping clients find their perfect community.',
}

export default function AboutPage() {
  return (
    <>
      {/* HEADER */}
      <section className="pt-20 pb-4 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="font-sans text-teal text-sm font-500 uppercase tracking-widest mb-3">
            About
          </p>
          <h1 className="font-heading font-800 text-4xl md:text-5xl text-charcoal max-w-xl leading-tight">
            Michael Potter
          </h1>
          <p className="font-sans text-gray-500 text-lg mt-3">
            Real Estate Advisor · eXp Realty · Northern Colorado
          </p>
        </div>
      </section>

      {/* BIO SECTION */}
      <section className="pb-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Photo */}
            <div className="relative">
              <div className="relative w-full max-w-md mx-auto lg:mx-0">
                <div className="absolute -bottom-5 -right-5 w-full h-full rounded-2xl border-2 border-gold/40" />
                <div className="relative w-full aspect-square rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src="/images/headshot.jpg"
                    alt="Michael Potter — eXp Realty Northern Colorado"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>

              {/* Contact card */}
              <div className="mt-8 bg-charcoal rounded-2xl p-6 text-white max-w-md mx-auto lg:mx-0">
                <p className="font-heading font-700 text-base mb-4">Get in Touch</p>
                <div className="space-y-3">
                  <a
                    href={`tel:${SITE.phone.replace(/\D/g, '')}`}
                    className="flex items-center gap-3 text-gray-300 hover:text-gold transition-colors"
                  >
                    <svg className="w-4 h-4 text-gold shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span className="font-sans text-sm">{SITE.phone}</span>
                  </a>
                  <a
                    href={`mailto:${SITE.email}`}
                    className="flex items-center gap-3 text-gray-300 hover:text-gold transition-colors"
                  >
                    <svg className="w-4 h-4 text-gold shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span className="font-sans text-sm">{SITE.email}</span>
                  </a>
                </div>
                <a
                  href={SITE.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 mt-4 rounded-xl px-4 py-3 group"
                  style={{ background: 'linear-gradient(135deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)' }}
                >
                  <svg className="w-5 h-5 text-white shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" strokeWidth={1.75} />
                    <circle cx="12" cy="12" r="4" strokeWidth={1.75} />
                    <circle cx="17.5" cy="6.5" r="1" fill="white" stroke="none" />
                  </svg>
                  <div>
                    <p className="font-heading font-700 text-sm text-white leading-tight">Follow on Instagram</p>
                    <p className="font-sans text-white/80 text-xs">@michaelpotternoco</p>
                  </div>
                </a>
                <div className="mt-5 flex gap-3">
                  <Link href="/contact" className="btn-primary flex-1 text-center text-sm py-2.5">
                    Contact Me
                  </Link>
                  <a
                    href={SITE.bookingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline-white flex-1 text-center text-sm py-2.5"
                  >
                    Book a Call
                  </a>
                </div>
              </div>
            </div>

            {/* Bio text */}
            <div className="space-y-4">
              <div className="prose prose-lg max-w-none">
                <p className="font-sans text-gray-600 text-lg leading-relaxed">
                  I&apos;m a real estate advisor with eXp Realty serving Northern Colorado,
                  helping people buy, sell, and relocate to communities like Loveland,
                  Fort Collins, Windsor, Timnath, and the surrounding areas.
                </p>
                <p className="font-sans text-gray-600 text-base leading-relaxed mt-5">
                  A large part of my business focuses on helping people move to Northern
                  Colorado from out of state or other parts of Colorado. Relocating can
                  be overwhelming, so my goal is to make the process clear, organized,
                  and as smooth as possible while helping my clients find the right home
                  and the right community for their lifestyle.
                </p>
                <p className="font-sans text-gray-600 text-base leading-relaxed mt-5">
                  I&apos;ve lived in Northern Colorado for decades and genuinely love sharing
                  what makes this area special. Through local insight, strong
                  communication, and a modern approach to real estate, I help my clients
                  make confident decisions whether they&apos;re buying, selling, or relocating.
                </p>
                <p className="font-sans text-gray-600 text-base leading-relaxed mt-5">
                  Outside of real estate, I spend most of my time outdoors. You&apos;ll find
                  me hiking, camping, hitting hot springs, or road tripping to other
                  corners of Colorado with my dog and friends. Traveling outside of
                  Colorado is a big part of my life too. And wherever I end up, food is
                  a priority. Cooking, barbecuing, and tracking down great restaurants
                  are hobbies I genuinely enjoy.
                </p>
                <p className="font-sans text-gray-600 text-base leading-relaxed mt-5">
                  Northern Colorado offers an incredible lifestyle with great communities,
                  access to nature, and beautiful mountain views. I love helping
                  people make the move here.
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="pb-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                title: 'Local Expertise',
                body: 'I\'ve spent nearly my entire life in Northern Colorado. That kind of roots gives you a feel for each community that you simply can\'t get from data alone.',
                color: 'teal',
                icon: (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                ),
              },
              {
                title: 'Clear Communication',
                body: 'You\'ll always know where things stand. I work with a dedicated team that keeps communication consistent and makes sure nothing falls through the cracks.',
                color: 'gold',
                icon: (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                ),
              },
              {
                title: 'Modern Approach',
                body: 'From strategic video marketing to a strong social media presence, I leverage technology and audience reach to market properties further and serve clients better.',
                color: 'sage',
                icon: (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M15 10l4.553-2.069A1 1 0 0121 8.87v6.26a1 1 0 01-1.447.894L15 14M3 8a2 2 0 012-2h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z" />
                  </svg>
                ),
              },
            ].map((value) => (
              <div
                key={value.title}
                className={`flex items-start gap-4 rounded-xl p-6 border-l-4 ${
                  value.color === 'teal'
                    ? 'bg-teal/5 border-teal'
                    : value.color === 'gold'
                    ? 'bg-gold/10 border-gold'
                    : 'bg-sage/10 border-sage'
                }`}
              >
                <div className={`shrink-0 mt-0.5 ${
                  value.color === 'teal'
                    ? 'text-teal'
                    : value.color === 'gold'
                    ? 'text-amber-600'
                    : 'text-sage'
                }`}>
                  {value.icon}
                </div>
                <div>
                  <h3 className="font-heading font-700 text-sm text-charcoal mb-1">
                    {value.title}
                  </h3>
                  <p className="font-sans text-sm text-gray-600 leading-relaxed">
                    {value.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT I LOVE ABOUT NOCO */}
      <section className="section-sage py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="section-heading mb-5">Why I Love Northern Colorado</h2>
            <p className="font-sans text-gray-500 text-base leading-relaxed">
              I&apos;ve explored countless trails, photographed the area from above with
              my drone, and helped clients discover communities they never knew existed.
              Northern Colorado isn&apos;t just where I work; it&apos;s where I choose to live
              every single day.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-8">
            {[
              { emoji: '🏔️', label: 'Mountain Access' },
              { emoji: '🛤️', label: 'World-Class Trails' },
              { emoji: '🌅', label: '300+ Sunny Days' },
              { emoji: '🤝', label: 'Strong Communities' },
            ].map((item) => (
              <div
                key={item.label}
                className="bg-white rounded-2xl p-6 text-center shadow-sm border border-gray-100"
              >
                <span className="text-3xl mb-3 block">{item.emoji}</span>
                <p className="font-heading font-600 text-sm text-charcoal">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <NewsletterSignup variant="homepage" />
        </div>
      </section>

      {/* CTA */}
      <section className="bg-charcoal py-8">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading font-800 text-3xl text-white mb-5">
            Let&apos;s Work Together
          </h2>
          <p className="font-sans text-gray-400 text-lg mb-6">
            Ready to buy, sell, or start planning your move to Northern Colorado?
            I&apos;d love to connect.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="btn-primary text-base px-8 py-3.5">
              Contact Me
            </Link>
            <a
              href={SITE.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-white text-base px-8 py-3.5"
            >
              Book a Call
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
