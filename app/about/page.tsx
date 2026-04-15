import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { SITE } from '@/lib/constants'
import NewsletterSignup from '@/components/NewsletterSignup'

export const metadata: Metadata = {
  title: 'About Michael Potter',
  description:
    'Learn about Michael Potter, LPT Realty real estate advisor serving Northern Colorado. Local expertise, modern approach, and a passion for helping clients find their perfect community.',
  alternates: { canonical: 'https://www.potterealty.com/about' },
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
            Real Estate Advisor · LPT Realty · Northern Colorado
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
                    alt="Michael Potter — LPT Realty Northern Colorado"
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
                  I&apos;m a Colorado native and a Northern Colorado real estate advisor with LPT Realty. I was born in Denver and moved to Loveland when I was two, and with the exception of a few years in Denver for college, I&apos;ve called Northern Colorado home ever since.
                </p>
                <p className="font-sans text-gray-600 text-base leading-relaxed mt-5">
                  I graduated from Thompson Valley High School in Loveland in 2007 and went on to earn my bachelor&apos;s degree in Business Administration from CU Denver. After graduating I worked in accounting at a telecom company, then was recruited back to Northern Colorado by a pediatric home healthcare agency where I spent several years in HR management, business development, and marketing.
                </p>
                <p className="font-sans text-gray-600 text-base leading-relaxed mt-5">
                  In 2017 I purchased my first home in downtown Loveland, a milestone that quietly planted the seed for what was ahead. A career coach helped me find alignment in real estate, and in 2019 I left my job to travel abroad and explore the idea of working remotely. Two months in, I was homesick and missing my dog. I came home, dove headfirst into getting my real estate license, and never looked back.
                </p>
                <p className="font-sans text-gray-600 text-base leading-relaxed mt-5">
                  Today I specialize in helping people relocate to Northern Colorado, primarily from out of state, and I find and serve most of my clients through content I create on Instagram. The people I work with tend to be couples or families who are drawn to the outdoor lifestyle, sense of community, and slower pace of life that this area offers. Some want to be in town, close to coffee shops, yoga studios, farmers markets, and walkable downtowns. Others are dreaming of life on acreage west of town with horses, chickens, a shop, and a greenhouse. Both are my kind of client.
                </p>
                <p className="font-sans text-gray-600 text-base leading-relaxed mt-5">
                  Growing up here, nature was woven into everything. My grandparents from New Jersey would come every summer in their RV and take us on camping adventures through Rocky Mountain National Park, hiking, watching the elk bugle, and driving over Trail Ridge Road. My other grandparents had a pontoon boat and we spent summers on Horsetooth Reservoir, Carter Lake, and Boyd Lake. I still spend my summers paddleboarding on the lakes, swimming in the rivers, and watching sunsets over the water. My dog and I hit the trails constantly, including Devil&apos;s Backbone, Horsetooth, the Poudre, and Lory State Park, and I still love camping up the Poudre Canyon whenever I get the chance.
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
              { emoji: '🏔️', label: 'Rocky Mountain NP — 1 hr away' },
              { emoji: '🛶', label: 'Horsetooth, Carter & Boyd Lakes' },
              { emoji: '🥾', label: "Devil's Backbone & Poudre Trails" },
              { emoji: '🌅', label: '300+ Sunny Days a Year' },
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
