'use client'

import Link from 'next/link'
import Script from 'next/script'
import { SITE } from '@/lib/constants'

export default function SellPage() {
  return (
    <>
      {/* RealScout script */}
      <Script
        src="https://em.realscout.com/widgets/realscout-web-components.umd.js"
        type="module"
        strategy="afterInteractive"
      />

      {/* HEADER + WIDGET */}
      <section className="pt-20 pb-8" style={{ background: 'linear-gradient(135deg, #3a3a3c 0%, #2a2a2c 60%, #1a2a30 100%)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6">
            <p className="font-sans text-gold text-sm font-500 uppercase tracking-widest mb-3">
              Sell Your Home
            </p>
            <h1 className="font-heading font-800 text-4xl md:text-5xl text-white max-w-2xl mx-auto leading-tight">
              What&apos;s Your Northern Colorado Home Worth?
            </h1>
            <p className="font-sans text-gray-300 text-lg mt-4 max-w-xl mx-auto">
              Get an instant estimate based on real market data, then let&apos;s talk
              strategy to maximize what you walk away with.
            </p>
          </div>
          <style>{`
            realscout-home-value {
              --rs-hvw-background-color: #ffffff;
              --rs-hvw-title-color: #3a3a3c;
              --rs-hvw-subtitle-color: rgba(28, 30, 38, 0.5);
              --rs-hvw-primary-button-text-color: #ffffff;
              --rs-hvw-primary-button-color: #007ea2;
              --rs-hvw-secondary-button-text-color: #007ea2;
              --rs-hvw-secondary-button-color: #ffffff;
              --rs-hvw-widget-width: auto;
            }
          `}</style>
          {/* @ts-ignore */}
          <realscout-home-value agent-encoded-id="QWdlbnQtMjQ0OTE0" />
        </div>
      </section>

      {/* SELLING PROCESS */}
      <section className="section-sage py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="section-heading">The Selling Process</h2>
            <p className="section-subheading mx-auto">
              A well-planned sale means more money, less stress, and a faster close.
              Here&apos;s how I approach every listing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: '01',
                title: 'Home Valuation',
                body: 'My team completes a high volume of monthly CMAs (comparative market analyses) and holds strategic appraisal concept training, so your home is priced with precision from day one, not just to sell, but to maximize your return.',
              },
              {
                step: '02',
                title: 'Preparation & Staging',
                body: 'We review what improvements or staging will move the needle most, so you invest where it actually counts. Pre inspections are also on the table to get ahead of any surprises.',
              },
              {
                step: '03',
                title: 'Professional Marketing',
                body: 'Professional photography, video, floorplans, 3D walkthroughs, and targeted digital marketing put your home in front of the right buyers. Add in 100,000+ monthly Instagram views and a direct relocation buyer database of people actively planning a move to Colorado, and your listing gets exposure most agents simply can\'t offer.',
              },
              {
                step: '04',
                title: 'Negotiate & Close',
                body: 'I negotiate on your behalf, manage inspections and timelines, and guide you to a smooth closing with maximum profit.',
              },
            ].map((item) => (
              <div key={item.step} className="card p-7">
                <p className="font-heading font-800 text-4xl text-gold/40 mb-4 leading-none">
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

      {/* WHY SELL WITH ME */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="section-heading mb-5">Why List with Michael?</h2>
              <ul className="space-y-4">
                {[
                  'Hyper local pricing expertise so your home is positioned to attract the right buyers at the right price',
                  'Professional drone photography included for every listing',
                  'Targeted digital and social media marketing to reach active buyers',
                  'Proven negotiation strategy to protect your bottom line',
                  'Full service team support from prep to close. You\'re never left figuring it out alone.',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-gold/15 flex items-center justify-center shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                Let&apos;s Talk About Your Home
              </h3>
              <p className="font-sans text-gray-400 text-sm leading-relaxed mb-6">
                Whether you&apos;re ready to list now or just exploring your options, a
                free seller consultation costs you nothing and could mean thousands
                more at closing.
              </p>
              <div className="flex flex-col gap-3">
                <a
                  href={SITE.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-center py-3.5"
                >
                  Book a Free Seller Consultation
                </a>
                <Link href="/contact" className="btn-outline-white text-center py-3.5">
                  Send Me a Message
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
