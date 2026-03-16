import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { cities, getCityBySlug } from '@/lib/cities'
import { SITE } from '@/lib/constants'

interface Props {
  params: { city: string }
}

export async function generateStaticParams() {
  return cities.map((city) => ({ city: city.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const city = getCityBySlug(params.city)
  if (!city) return {}
  return {
    title: `Living in ${city.name}, Colorado`,
    description: `Thinking about moving to ${city.name}, Colorado? Discover what makes ${city.name} a great place to live, covering neighborhoods, schools, lifestyle, and real estate market insights from local expert Michael Potter.`,
  }
}

export default function CityPage({ params }: Props) {
  const city = getCityBySlug(params.city)
  if (!city) notFound()

  return (
    <>
      {/* HEADER — swap heroPhoto in lib/cities.ts for your own drone shots anytime */}
      <section
        className="relative pt-28 pb-10 flex items-end"
        style={{
          backgroundImage: `url(${city.heroPhoto})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-charcoal/60" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm font-sans text-white/60 mb-6">
            <Link href="/relocation" className="hover:text-white transition-colors">
              Relocate to NoCo
            </Link>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-white/90">{city.name}</span>
          </nav>

          <p className="font-sans text-gold text-sm font-500 uppercase tracking-widest mb-3">
            Northern Colorado · {city.name}
          </p>
          <h1 className="font-heading font-800 text-4xl md:text-5xl text-white leading-tight mb-3">
            Living in {city.name}, Colorado
          </h1>
          <p className="font-sans text-xl text-white/70 font-500 mb-5">{city.tagline}</p>
          <div className="flex flex-wrap gap-4">
            <span className="flex items-center gap-1.5 text-sm font-sans text-white/70">
              <svg className="w-4 h-4 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Population: {city.population}
            </span>
            <span className="flex items-center gap-1.5 text-sm font-sans text-white/70">
              <svg className="w-4 h-4 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 11l7-7 7 7M5 19l7-7 7 7" />
              </svg>
              Elevation: {city.elevation}
            </span>
          </div>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="py-6 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-12 bg-gold" />
            <span className="font-heading text-base text-sage uppercase tracking-widest font-700">
              About {city.name}
            </span>
            <div className="h-px w-12 bg-gold" />
          </div>
          <p className="font-sans text-gray-600 text-lg leading-relaxed">
            {city.description}
          </p>
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section className="section-sage py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-heading mb-6">{city.name} Highlights</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {city.highlights.map((h) => (
              <div key={h.label} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <span className="text-2xl mb-3 block">{h.icon}</span>
                <p className="font-heading font-700 text-sm text-charcoal mb-1">{h.label}</p>
                <p className="font-sans text-gray-500 text-sm">{h.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LIFESTYLE + COMMUTE + SCHOOLS + MARKET */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {[
              {
                title: 'Lifestyle',
                icon: '🌄',
                content: city.lifestyle,
                color: 'teal',
              },
              {
                title: 'Schools & Education',
                icon: '🏫',
                content: city.schools,
                color: 'gold',
              },
              {
                title: 'Commute & Access',
                icon: '🚗',
                content: city.commute,
                color: 'sage',
              },
              {
                title: 'Real Estate Market',
                icon: '🏠',
                content: city.marketOverview,
                color: 'teal',
              },
            ].map((section) => (
              <div key={section.title} className="card p-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl">{section.icon}</span>
                  <h3 className="font-heading font-700 text-lg text-charcoal">
                    {section.title}
                  </h3>
                </div>
                <p className="font-sans text-gray-600 text-sm leading-relaxed">
                  {section.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* THINGS TO KNOW */}
      <section className="section-sage py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div>
              <h2 className="section-heading mb-5">
                Things to Know About {city.name}
              </h2>
              <ul className="space-y-4">
                {city.thingsToKnow.map((item) => (
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

            <div>
              <h2 className="section-heading mb-5">Neighborhoods & Areas</h2>
              <div className="flex flex-wrap gap-2">
                {city.neighborhoods.map((n) => (
                  <span
                    key={n}
                    className="px-4 py-2 bg-white border border-gray-200 rounded-full font-sans text-sm text-charcoal shadow-sm"
                  >
                    {n}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OTHER CITIES */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-heading mb-5">Explore Other NoCo Communities</h2>
          <div className="flex flex-wrap gap-3">
            {cities
              .filter((c) => c.slug !== city.slug)
              .map((c) => (
                <Link
                  key={c.slug}
                  href={`/relocation/${c.slug}`}
                  className="px-5 py-2.5 border border-gray-200 rounded-full font-heading font-500 text-sm text-charcoal hover:border-teal hover:text-teal hover:bg-teal/5 transition-all duration-150"
                >
                  {c.name}
                </Link>
              ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-teal py-8">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading font-800 text-3xl text-white mb-5">
            Thinking About Moving to {city.name}?
          </h2>
          <p className="font-sans text-white/80 text-lg mb-6">
            I&apos;d love to walk you through what the market looks like, what
            neighborhoods fit your lifestyle, and how to make the move as smooth
            as possible.
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
            <Link href="/relocation#guide" className="btn-outline-white text-base px-8 py-3.5">
              Get the Free Relocation Guide
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
