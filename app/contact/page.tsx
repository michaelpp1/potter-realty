import type { Metadata } from 'next'
import Link from 'next/link'
import { SITE } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Contact Michael Potter',
  description:
    'Reach out to Michael Potter, LPT Realty Northern Colorado. Call, email, or book a consultation call to talk about buying, selling, or relocating to Northern Colorado.',
}

export default function ContactPage() {
  return (
    <>
      {/* HEADER */}
      <section className="pt-20 pb-4 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="font-sans text-teal text-sm font-500 uppercase tracking-widest mb-3">
            Let&apos;s Talk
          </p>
          <h1 className="font-heading font-800 text-4xl md:text-5xl text-charcoal max-w-xl leading-tight">
            Get in Touch
          </h1>
          <p className="font-sans text-gray-500 text-lg mt-4 max-w-xl">
            Whether you have a quick question or are ready to start a
            conversation about buying, selling, or relocating. I&apos;m here and
            happy to help.
          </p>
        </div>
      </section>

      {/* CONTACT CONTENT */}
      <section className="pb-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Contact info + booking */}
            <div className="space-y-5">
              {/* Book a call — primary CTA */}
              <div className="bg-teal rounded-2xl p-8 text-white">
                <h2 className="font-heading font-700 text-xl mb-3">
                  Book a Free Consultation
                </h2>
                <p className="font-sans text-white/80 text-sm leading-relaxed mb-6">
                  The best way to get started is a quick call. We&apos;ll talk about
                  your goals, your timeline, and how I can help. No pressure,
                  no obligation.
                </p>
                <a
                  href={SITE.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white text-teal font-heading font-700 text-sm px-6 py-3.5 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  Schedule a Call
                </a>
              </div>

              {/* Direct contact */}
              <div>
                <h3 className="font-heading font-700 text-lg text-charcoal mb-5">
                  Or Reach Me Directly
                </h3>
                <div className="space-y-4">
                  <a
                    href={`tel:${SITE.phone.replace(/\D/g, '')}`}
                    className="flex items-center gap-4 p-5 border border-gray-100 rounded-xl hover:border-teal hover:bg-teal/5 transition-all group"
                  >
                    <div className="w-11 h-11 bg-teal/10 rounded-xl flex items-center justify-center shrink-0">
                      <svg className="w-5 h-5 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-heading font-600 text-sm text-charcoal group-hover:text-teal transition-colors">
                        Call or Text
                      </p>
                      <p className="font-sans text-base text-gray-600 mt-0.5">{SITE.phone}</p>
                    </div>
                  </a>

                  <a
                    href={`mailto:${SITE.email}`}
                    className="flex items-center gap-4 p-5 border border-gray-100 rounded-xl hover:border-teal hover:bg-teal/5 transition-all group"
                  >
                    <div className="w-11 h-11 bg-teal/10 rounded-xl flex items-center justify-center shrink-0">
                      <svg className="w-5 h-5 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-heading font-600 text-sm text-charcoal group-hover:text-teal transition-colors">
                        Send an Email
                      </p>
                      <p className="font-sans text-base text-gray-600 mt-0.5">{SITE.email}</p>
                    </div>
                  </a>
                </div>
              </div>

              {/* Areas served */}
              <div>
                <h3 className="font-heading font-700 text-base text-charcoal mb-4">
                  Areas I Serve
                </h3>
                <div className="flex flex-wrap gap-2">
                  {SITE.cities.map((city) => (
                    <Link
                      key={city}
                      href={`/relocation/${city.toLowerCase().replace(' ', '-')}`}
                      className="px-4 py-1.5 border border-gray-200 rounded-full font-sans text-xs text-charcoal hover:border-teal hover:text-teal transition-colors"
                    >
                      {city}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Right side: What to expect */}
            <div className="space-y-4">
              <div className="section-sage rounded-2xl p-8">
                <h3 className="font-heading font-700 text-lg text-charcoal mb-6">
                  What to Expect When You Reach Out
                </h3>
                <div className="space-y-5">
                  {[
                    {
                      icon: '⚡',
                      title: 'Quick Response',
                      body: 'I typically respond within a few hours during business hours. Texts and calls are always welcome.',
                    },
                    {
                      icon: '🎯',
                      title: 'No Pressure',
                      body: 'Our first conversation is just that: a conversation. There\'s no obligation and no sales pitch.',
                    },
                    {
                      icon: '🗺️',
                      title: 'Real Local Expertise',
                      body: 'I\'ve lived in Northern Colorado for decades. You\'ll get honest, local insights, not generic advice.',
                    },
                    {
                      icon: '📋',
                      title: 'A Clear Plan',
                      body: 'After we connect, you\'ll leave with a clear picture of your options, next steps, and a realistic timeline.',
                    },
                  ].map((item) => (
                    <div key={item.title} className="flex items-start gap-4">
                      <span className="text-xl shrink-0 mt-0.5">{item.icon}</span>
                      <div>
                        <p className="font-heading font-600 text-sm text-charcoal mb-1">
                          {item.title}
                        </p>
                        <p className="font-sans text-gray-500 text-sm leading-relaxed">
                          {item.body}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick links */}
              <div className="card p-6">
                <h3 className="font-heading font-700 text-base text-charcoal mb-4">
                  Not Sure Where to Start?
                </h3>
                <div className="space-y-2">
                  {[
                    { href: '/buy', label: 'Browse homes for sale →', color: 'text-teal' },
                    { href: '/sell', label: 'Get your home\'s value →', color: 'text-amber-600' },
                    { href: '/relocation#guide', label: 'Get the free Relocation Guide →', color: 'text-teal' },
                    { href: '/about', label: 'Learn more about Michael →', color: 'text-sage' },
                  ].map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`block font-sans text-sm font-500 ${link.color} hover:opacity-80 transition-opacity py-1`}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INSTAGRAM */}
      <section className="py-8 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <a
            href={SITE.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-2xl overflow-hidden group"
            style={{ background: 'linear-gradient(135deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)' }}
          >
            <div className="flex flex-col sm:flex-row items-center gap-6 p-8">
              <div className="shrink-0">
                <svg className="w-14 h-14 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" strokeWidth={1.5} />
                  <circle cx="12" cy="12" r="4" strokeWidth={1.5} />
                  <circle cx="17.5" cy="6.5" r="1" fill="white" stroke="none" />
                </svg>
              </div>
              <div className="text-center sm:text-left">
                <p className="font-sans text-white/80 text-sm uppercase tracking-widest mb-1">Follow Along</p>
                <p className="font-heading font-800 text-2xl text-white mb-2">@michaelpotternoco</p>
                <p className="font-sans text-white/90 text-sm leading-relaxed">
                  Property tours, lifestyle content, and features on local coffee shops, restaurants, and businesses around Northern Colorado.
                </p>
              </div>
              <div className="shrink-0 sm:ml-auto">
                <span className="inline-block bg-white text-pink-600 font-heading font-700 text-sm px-5 py-2.5 rounded-full group-hover:scale-105 transition-transform">
                  Follow
                </span>
              </div>
            </div>
          </a>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="bg-charcoal py-8">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading font-800 text-3xl text-white mb-5">
            Ready to Make Your Move?
          </h2>
          <p className="font-sans text-gray-400 text-lg mb-6">
            Let&apos;s start with a simple conversation. No pressure, just a chance
            to talk through what you&apos;re looking for.
          </p>
          <a
            href={SITE.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-base px-10 py-4 text-base"
          >
            Book a Free Call
          </a>
        </div>
      </section>
    </>
  )
}
