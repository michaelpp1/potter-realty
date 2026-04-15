import type { Metadata } from 'next'
import Link from 'next/link'
import Script from 'next/script'
import { SITE } from '@/lib/constants'
import NewsletterSignup from '@/components/NewsletterSignup'

export const metadata: Metadata = {
  title: 'Buy a Home in Northern Colorado',
  description:
    'Browse homes for sale in Fort Collins, Loveland, Windsor, Timnath, Berthoud, and all of Northern Colorado. Get pre-approved and start your search with a local expert.',
}

export default function BuyPage() {
  return (
    <>
      {/* RealScout script — loads the web component */}
      <Script
        src="https://em.realscout.com/widgets/realscout-web-components.umd.js"
        type="module"
        strategy="afterInteractive"
      />

      {/* HEADER */}
      <section className="pt-20 pb-4 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="font-sans text-teal text-sm font-500 uppercase tracking-widest mb-3">
            Buy a Home
          </p>
          <h1 className="font-heading font-800 text-4xl md:text-5xl text-charcoal max-w-2xl leading-tight">
            Find Your Dream Home in Northern Colorado
          </h1>
          <p className="font-sans text-gray-500 text-lg mt-4 max-w-xl">
            Browse current listings across Loveland, Fort Collins, Windsor,
            Timnath, Berthoud, and all of Northern Colorado, with real-time
            updates and local insights.
          </p>
        </div>
      </section>

      {/* REALSCOUT SEARCH WIDGET */}
      <section className="pb-6 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center">
            <div className="w-full max-w-2xl bg-teal/5 border border-teal/20 rounded-2xl px-4 sm:px-8 pt-8 pb-6 shadow-sm">
              <p className="font-sans text-teal text-sm font-500 uppercase tracking-widest mb-2 text-center">
                Search Listings
              </p>
              <h2 className="font-heading font-700 text-xl text-charcoal text-center mb-5">
                Enter a city, neighborhood, or ZIP code to get started
              </h2>
              <style>{`
                realscout-simple-search {
                  --rs-ss-font-primary-color: #6a6d72;
                  --rs-ss-searchbar-border-color: #007ea2;
                  --rs-ss-box-shadow: none;
                  --rs-ss-widget-width: 100% !important;
                }
              `}</style>
              {/* @ts-ignore */}
              <realscout-simple-search agent-encoded-id="QWdlbnQtMjQ0OTE0" />
            </div>
          </div>
        </div>
      </section>

      {/* BUYING PROCESS */}
      <section className="section-sage py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="section-heading">The Buying Process</h2>
            <p className="section-subheading mx-auto">
              Buying a home doesn&apos;t have to be stressful. Here&apos;s how I guide you
              through every step.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: '01',
                title: 'Initial Consultation',
                body: 'We talk through your goals, budget, timeline, and must-haves so I can find the right fit, both for your home and your lifestyle.',
              },
              {
                step: '02',
                title: 'Get Pre-Approved',
                body: 'I\'ll connect you with trusted local lenders so you\'re ready to move quickly when the right home comes up.',
              },
              {
                step: '03',
                title: 'Search & Tour',
                body: 'Browse listings together, tour homes in person or virtually, and get honest insights on each one.',
              },
              {
                step: '04',
                title: 'Offer to Close',
                body: 'My team and I handle negotiations, inspections, and all the paperwork so you can focus on the excitement of your new home.',
              },
            ].map((item) => (
              <div key={item.step} className="card p-7">
                <p className="font-heading font-800 text-4xl text-gold/30 mb-4 leading-none">
                  {item.step}
                </p>
                <h3 className="font-heading font-700 text-base text-charcoal mb-3">
                  {item.title}
                </h3>
                <p className="font-sans text-gray-500 text-sm leading-relaxed">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY WORK WITH ME */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="section-heading mb-5">
                Why Buy with Michael Potter?
              </h2>
              <ul className="space-y-4">
                {[
                  'Strong familiarity with Northern Colorado communities, from the cities to the surrounding areas',
                  'Access to listings before they hit the open market',
                  'Strong relationships with local lenders, inspectors, and title companies',
                  'Experienced in relocation, helping out-of-state buyers navigate the market remotely',
                  'No pressure, honest guidance. My job is to get you the right home, not just any home.',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-teal/10 flex items-center justify-center shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="font-sans text-gray-600 text-sm leading-relaxed">{item}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-charcoal rounded-2xl p-8 text-white">
              <h3 className="font-heading font-700 text-xl mb-3">
                Ready to Start Your Search?
              </h3>
              <p className="font-sans text-gray-400 text-sm leading-relaxed mb-6">
                Let&apos;s connect and I&apos;ll walk you through the current market, what to
                expect, and how to position yourself as a strong buyer.
              </p>
              <div className="flex flex-col gap-3">
                <a
                  href={SITE.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-center py-3.5"
                >
                  Book a Free Buyer Consultation
                </a>
                <Link href="/contact" className="btn-outline-white text-center py-3.5">
                  Send Me a Message
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <NewsletterSignup variant="homepage" />
        </div>
      </section>
    </>
  )
}
