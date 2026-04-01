import Link from 'next/link'
import Image from 'next/image'
import { SITE } from '@/lib/constants'
import Reviews from '@/components/Reviews'
import NewsletterSignup from '@/components/NewsletterSignup'

export default function HomePage() {
  return (
    <>
      {/* HERO — drone video background */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        {/* Full 1080p video — all screen sizes */}
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="/videos/hero-poster.jpg"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
        {/* Left-to-right gradient — dark behind text, transparent on right */}
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/85 via-charcoal/50 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
          <div className="max-w-2xl">
            <p className="font-sans text-gold text-sm font-500 uppercase tracking-widest mb-4">
              Northern Colorado Real Estate
            </p>
            <h1 className="font-heading font-800 text-4xl sm:text-5xl lg:text-6xl text-white leading-tight mb-6">
              Find Your Home in <span className="text-gold">Northern Colorado</span>
            </h1>
            <p className="font-sans text-gray-300 text-lg leading-relaxed mb-6 max-w-xl">
              Whether you&apos;re buying, selling, or relocating, I&apos;ll guide you through
              every step of the process with local expertise and genuine care.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/buy" className="btn-primary text-base px-7 py-3.5">
                Browse Homes
              </Link>
              <Link href="/sell" className="btn-outline-white text-base px-7 py-3.5">
                Get Your Home&apos;s Value
              </Link>
              <Link href="/relocation" className="btn-outline-white text-base px-7 py-3.5">
                Relocating to Colorado?
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50 z-10">
          <span className="font-sans text-xs tracking-widest uppercase">Scroll</span>
          <svg className="w-4 h-4 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="section-heading">How Can I Help You?</h2>
            <p className="section-subheading mx-auto">
              Whether you&apos;re buying your first home, selling a property, or
              relocating to Northern Colorado. I&apos;m here to make it happen.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-8">
            {[
              {
                title: 'Buy a Home',
                description:
                  "Search homes across Northern Colorado with up-to-date listings and local market insights. I'll help you find the right home in the right community.",
                icon: (
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                ),
                href: '/buy',
                cta: 'Search Homes',
                color: 'teal',
              },
              {
                title: 'Sell Your Home',
                description:
                  "Get a comprehensive market analysis and find out what your home is worth in today's Northern Colorado market. No guesswork. Just a clear strategy to get your home sold.",
                icon: (
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                ),
                href: '/sell',
                cta: 'Get Home Value',
                color: 'gold',
              },
              {
                title: 'Relocate to NoCo',
                description:
                  'Moving to Northern Colorado? I specialize in out-of-state and in-state relocations. Get my free Relocation Guide to start planning your move.',
                icon: (
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                ),
                href: '/relocation#guide',
                cta: 'Get Free Guide',
                color: 'sage',
              },
            ].map((service) => (
              <div key={service.title} className="card p-5 md:p-8 group">
                <div
                  className={`w-10 h-10 md:w-14 md:h-14 rounded-xl flex items-center justify-center mb-4 md:mb-5 ${
                    service.color === 'teal'
                      ? 'bg-teal/10 text-teal'
                      : service.color === 'gold'
                      ? 'bg-gold/15 text-amber-600'
                      : 'bg-sage/15 text-sage'
                  }`}
                >
                  {service.icon}
                </div>
                <h3 className="font-heading font-700 text-base md:text-xl text-charcoal mb-2 md:mb-3">
                  {service.title}
                </h3>
                <p className="font-sans text-gray-500 text-sm leading-relaxed mb-4 md:mb-6">
                  {service.description}
                </p>
                <Link
                  href={service.href}
                  className={`font-heading font-600 text-sm flex items-center gap-1.5 group-hover:gap-2.5 transition-all ${
                    service.color === 'teal'
                      ? 'text-teal'
                      : service.color === 'gold'
                      ? 'text-amber-600'
                      : 'text-sage'
                  }`}
                >
                  {service.cta}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT TEASER */}
      <section className="section-sage py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="relative">
              <div className="relative w-full max-w-md mx-auto lg:mx-0">
                {/* Accent border behind image */}
                <div className="absolute -bottom-4 -right-4 w-full h-full rounded-2xl border-2 border-gold/40" />
                <div className="relative w-full aspect-square rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src="/images/headshot.jpg"
                    alt="Michael Potter — Northern Colorado Realtor"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            <div>
              <p className="font-sans text-teal text-sm font-500 uppercase tracking-widest mb-3">
                Your Northern Colorado Advisor
              </p>
              <h2 className="section-heading mb-5">Hi, I&apos;m Michael Potter</h2>
              <p className="font-sans text-gray-600 text-base leading-relaxed mb-5">
                I&apos;m a real estate advisor with eXp Realty serving Northern Colorado,
                helping people buy, sell, and relocate to communities like Loveland,
                Fort Collins, Windsor, Timnath, and the surrounding areas.
              </p>
              <p className="font-sans text-gray-600 text-base leading-relaxed mb-5">
                A large part of my business focuses on helping people move to Northern
                Colorado from out of state. Relocating can be overwhelming, so my goal
                is to make the process clear, organized, and as smooth as possible while
                helping my clients find the right home and the right community.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/about" className="btn-primary">
                  Learn More About Me
                </Link>
                <Link href="/contact" className="btn-outline">
                  Get in Touch
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NORTHERN COLORADO HIGHLIGHT */}
      <section className="bg-teal py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="font-sans text-white/70 text-sm font-500 uppercase tracking-widest mb-3">
            The Area
          </p>
          <h2 className="font-heading font-800 text-3xl md:text-4xl text-white mb-5">
            Life is Better in Northern Colorado
          </h2>
          <p className="font-sans text-white/80 text-lg max-w-2xl mx-auto mb-7 leading-relaxed">
            Mountain views, world-class trails, vibrant communities, and an
            outdoor lifestyle you can actually live every day. Discover why
            people are moving here from across the country.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-7">
            {[
              { stat: '300+', label: 'Days of Sunshine' },
              { stat: '9', label: 'Cities & Towns Served' },
              { stat: '60 min', label: 'To Denver International' },
              { stat: '~1 hr', label: 'To Rocky Mountain NP' },
            ].map((item) => (
              <div key={item.label} className="bg-white/10 rounded-2xl p-6">
                <p className="font-heading font-800 text-3xl text-white mb-1">
                  {item.stat}
                </p>
                <p className="font-sans text-white/70 text-sm">{item.label}</p>
              </div>
            ))}
          </div>

          <Link href="/relocation" className="btn-outline-white text-base px-8 py-3.5">
            Explore Northern Colorado
          </Link>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <NewsletterSignup variant="homepage" />
        </div>
      </section>

      {/* AREAS */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-7">
            <h2 className="section-heading">Areas I Serve</h2>
            <p className="section-subheading mx-auto">
              From Fort Collins to Greeley and everywhere in between. I know
              Northern Colorado inside and out.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {SITE.cities.map((city) => (
              <Link
                key={city}
                href={`/relocation/${city.toLowerCase().replace(' ', '-')}`}
                className="px-5 py-2.5 border border-gray-200 rounded-full font-heading font-500 text-sm text-charcoal hover:border-teal hover:text-teal hover:bg-teal/5 transition-all duration-150"
              >
                {city}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="bg-charcoal py-8">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading font-800 text-3xl md:text-4xl text-white mb-5">
            Ready to Make a Move?
          </h2>
          <p className="font-sans text-gray-400 text-lg mb-6">
            Whether you&apos;re months away or ready right now, let&apos;s start the
            conversation. I&apos;m here to help.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="btn-primary text-base px-8 py-3.5">
              Let&apos;s Connect
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

      {/* REVIEWS */}
      <Reviews />
    </>
  )
}
