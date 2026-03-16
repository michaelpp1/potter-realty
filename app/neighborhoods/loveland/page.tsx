import type { Metadata } from 'next'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import { SITE } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Loveland, CO Neighborhoods Guide | Michael Potter — eXp Realty NoCo',
  description:
    'Explore every neighborhood in Loveland, Colorado. Get insider info on home prices, schools, outdoor access, commute times, and lifestyle for each area — from Downtown to Mariana Butte to Centerra.',
}

const LovelandNeighborhoodMap = dynamic(
  () => import('@/components/LovelandNeighborhoodMap'),
  {
    ssr: false,
    loading: () => (
      <div
        className="w-full bg-gray-100 animate-pulse flex items-center justify-center"
        style={{ height: '580px' }}
      >
        <p className="font-sans text-sm text-gray-400">Loading map…</p>
      </div>
    ),
  }
)

export default function LovelandNeighborhoodsPage() {
  return (
    <>
      {/* HERO */}
      <section
        className="relative pt-36 pb-16 flex items-end"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=1920&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-charcoal/65" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm font-sans text-white/60 mb-6 flex-wrap">
            <Link href="/relocation" className="hover:text-white transition-colors">
              Relocate to NoCo
            </Link>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <Link href="/relocation/loveland" className="hover:text-white transition-colors">
              Loveland
            </Link>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-white/90">Neighborhoods</span>
          </nav>

          <p className="font-sans text-gold text-sm font-500 uppercase tracking-widest mb-3">
            Loveland, Colorado · Relocation Guide
          </p>
          <h1 className="font-heading font-800 text-4xl md:text-5xl text-white leading-tight mb-4 max-w-2xl">
            Find Your Neighborhood<br />in Loveland
          </h1>
          <p className="font-sans text-white/75 text-lg leading-relaxed max-w-xl mb-8">
            Every corner of Loveland has its own personality. Explore the map to find the area that fits your lifestyle, budget, and priorities.
          </p>

          {/* Stats row */}
          <div className="flex flex-wrap gap-6">
            {[
              { icon: 'M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z', label: '10 Distinct Neighborhoods' },
              { icon: 'M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0zM12 10m-3 0a3 3 0 1 0 6 0 3 3 0 0 0-6 0', label: 'Loveland, CO 80537–80538' },
              { icon: 'M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z', label: 'Updated 2025' },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-2 font-sans text-sm text-white/65">
                <svg className="w-4 h-4 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                </svg>
                {item.label}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INSTRUCTION BAR */}
      <div className="bg-teal text-white text-center py-3 px-4 text-sm font-sans font-500">
        Click any colored zone on the map to explore that neighborhood, or scroll down to browse all areas.
      </div>

      {/* INTERACTIVE MAP + CARDS (client component) */}
      <LovelandNeighborhoodMap />

      {/* MICHAEL CTA */}
      <section className="bg-charcoal py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="font-sans text-gold text-sm font-500 uppercase tracking-widest mb-3">
            Local Expertise
          </p>
          <h2 className="font-heading font-800 text-3xl md:text-4xl text-white mb-5 leading-tight">
            Not Sure Which Neighborhood Fits You?
          </h2>
          <p className="font-sans text-gray-400 text-lg leading-relaxed mb-10">
            I've helped dozens of buyers find the right area in Loveland, including people relocating from across the country who've never set foot here. A 20-minute call can save you months of guesswork.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={SITE.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-base px-8 py-3.5"
            >
              Book a Free Consultation
            </a>
            <Link href="/relocation/loveland" className="btn-outline-white text-base px-8 py-3.5">
              Loveland City Guide
            </Link>
          </div>
        </div>
      </section>

      {/* FOOTER DISCLAIMER */}
      <div className="bg-white border-t border-gray-100 py-4 px-4 text-center">
        <p className="font-sans text-xs text-gray-400 max-w-2xl mx-auto">
          Neighborhood boundaries are approximate and intended for general reference. Home price ranges reflect recent market conditions and will vary.{' '}
          <Link href="/contact" className="text-teal hover:underline">
            Contact Michael
          </Link>{' '}
          · eXp Realty NoCo · Serving all of Northern Colorado
        </p>
      </div>
    </>
  )
}
