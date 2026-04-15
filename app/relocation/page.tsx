import type { Metadata } from 'next'
import Link from 'next/link'
import RelocationForm from '@/components/RelocationForm'
import { cities } from '@/lib/cities'
import NewsletterSignup from '@/components/NewsletterSignup'

export const metadata: Metadata = {
  title: 'Relocate to Northern Colorado',
  description:
    'Relocating to Northern Colorado? Get Michael Potter\'s free Relocation Guide covering Loveland, Fort Collins, Windsor, Timnath, Berthoud, and more. Local expertise for out-of-state and in-state movers.',
  alternates: { canonical: 'https://www.potterealty.com/relocation' },
}

export default function RelocationPage() {
  return (
    <>
      {/* HERO — swap the Unsplash URL for one of your own drone photos anytime */}
      <section
        className="relative pt-28 pb-10 flex items-center"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=1920&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-charcoal/60" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="font-sans text-gold text-sm font-500 uppercase tracking-widest mb-3">
              Northern Colorado Relocation
            </p>
            <h1 className="font-heading font-800 text-4xl md:text-5xl text-white leading-tight mb-5">
              Moving to Northern Colorado?{' '}
              <span className="text-gold">Let&apos;s Make it Easy.</span>
            </h1>
            <p className="font-sans text-white/80 text-lg leading-relaxed">
              Whether you&apos;re coming from across the country or just relocating
              within Colorado, Northern Colorado has a community perfectly suited
              to your lifestyle. I&apos;ve helped dozens of families navigate this exact
              transition, and I&apos;ve put everything I know into a free Relocation
              Guide to help you get started.
            </p>
          </div>
        </div>
      </section>

      {/* WHY NOCO */}
      <section className="section-sage py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-7">
            <h2 className="section-heading">Why Northern Colorado?</h2>
            <p className="section-subheading mx-auto">
              This region keeps showing up on national &quot;best places to live&quot; lists
              for a reason. Here&apos;s what people are discovering.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {[
              {
                icon: '🏔️',
                title: 'Easy Mountain Access',
                body: 'Rocky Mountain National Park is 30 to 60 minutes away. World-class hiking, fishing, camping, rock climbing, and scenic drives are practically in your backyard.',
              },
              {
                icon: '🌞',
                title: '300+ Days of Sunshine',
                body: 'Northern Colorado averages over 300 sunny days per year. Even in winter, you\'ll have clear, blue-sky days that make the cold feel worth it.',
              },
              {
                icon: '🤝',
                title: 'Real Community',
                body: 'People here are genuinely friendly and community-minded. Whether you land in a small town or a larger city, neighbors actually know each other.',
              },
              {
                icon: '💼',
                title: 'Thriving Economy',
                body: 'Northern Colorado has a diverse economy: tech, healthcare, agriculture, energy, education, and remote work are all well-represented.',
              },
              {
                icon: '🏡',
                title: 'Space to Breathe',
                body: 'Compared to Denver and the Front Range metros, Northern Colorado offers more space, less traffic, and a genuinely better quality of life.',
              },
              {
                icon: '🎓',
                title: 'World Class Education',
                body: 'Colorado State University, University of Northern Colorado, and highly rated K12 school districts make NoCo a strong choice for families.',
              },
            ].map((item) => (
              <div key={item.title} className="card p-5 md:p-7">
                <span className="text-2xl md:text-3xl mb-3 md:mb-4 block">{item.icon}</span>
                <h3 className="font-heading font-700 text-sm md:text-base text-charcoal mb-1.5 md:mb-2">
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

      {/* RELOCATION GUIDE LEAD MAGNET */}
      <section className="bg-teal py-8" id="guide">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Left: info */}
            <div>
              <p className="font-sans text-white/70 text-sm font-500 uppercase tracking-widest mb-3">
                Free Download
              </p>
              <h2 className="font-heading font-800 text-3xl md:text-4xl text-white leading-tight mb-5">
                Get the Northern Colorado Relocation Guide
              </h2>
              <p className="font-sans text-white/80 text-base leading-relaxed mb-5">
                I&apos;ve put together a comprehensive guide covering everything you need
                to know about moving to Northern Colorado, from neighborhood
                breakdowns and school districts to what to expect from the real
                estate market and how to plan your timeline.
              </p>
              <ul className="space-y-3 mb-5">
                {[
                  'City by city community breakdowns',
                  'School district overviews',
                  'Cost of living comparison',
                  'Northern Colorado real estate market overview',
                  'Tips for buying from out of state',
                  'Michael\'s personal recommendations',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="font-sans text-white/90 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: form */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="font-heading font-700 text-xl text-charcoal mb-2">
                Send Me the Free Guide
              </h3>
              <p className="font-sans text-gray-500 text-sm mb-6">
                Fill out the form below and Michael will send you the
                Relocation Guide along with a note to answer any questions you
                have about the area.
              </p>
              <RelocationForm />
            </div>
          </div>
        </div>
      </section>

      {/* RELOCATION PROCESS */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="section-heading">How the Relocation Process Works</h2>
            <p className="section-subheading mx-auto">
              Moving from another state or city doesn&apos;t have to be stressful when
              you have the right guide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: '01',
                title: 'Discovery Call',
                body: 'We talk about your lifestyle, budget, must-haves, and timeline so I can match you to the right communities.',
              },
              {
                step: '02',
                title: 'Community Match',
                body: 'Based on your priorities I\'ll identify the best 2-3 communities in Northern Colorado for your situation.',
              },
              {
                step: '03',
                title: 'Virtual or In Person Tour',
                body: 'We tour homes and neighborhoods, in person when you\'re ready to visit, or virtually so you can preview before you travel.',
              },
              {
                step: '04',
                title: 'Move In Ready',
                body: 'From offer to closing, my team and I handle everything and keep you informed every step of the way, no matter where you\'re coming from.',
              },
            ].map((item) => (
              <div key={item.step} className="card p-7">
                <p className="font-heading font-800 text-4xl text-teal/20 mb-4 leading-none">
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

      {/* CITIES GRID */}
      <section className="section-sage py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-7">
            <h2 className="section-heading">Explore Northern Colorado Cities</h2>
            <p className="section-subheading mx-auto">
              Each community in Northern Colorado has its own character, amenities,
              and lifestyle. Click any city to learn more.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {cities.map((city) => (
              <Link
                key={city.slug}
                href={`/relocation/${city.slug}`}
                className="card p-7 group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-heading font-700 text-xl text-charcoal group-hover:text-teal transition-colors">
                      {city.name}
                    </h3>
                    <p className="font-sans text-sm text-sage mt-1">{city.tagline}</p>
                  </div>
                  <svg
                    className="w-5 h-5 text-gray-300 group-hover:text-teal group-hover:translate-x-1 transition-all shrink-0 mt-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
                <p className="font-sans text-gray-500 text-sm leading-relaxed line-clamp-3">
                  {city.description}
                </p>
                <div className="flex items-center gap-4 mt-5 pt-4 border-t border-gray-100">
                  <span className="font-sans text-xs text-gray-400">
                    Pop. {city.population}
                  </span>
                  <span className="font-sans text-xs text-gray-400">
                    {city.elevation} elevation
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-8 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-7">
            <h2 className="section-heading">Relocation FAQ</h2>
          </div>
          <div className="space-y-4">
            {[
              {
                q: 'Can I buy a home in Northern Colorado without visiting in person first?',
                a: 'Yes, I work with remote buyers regularly. We can do virtual tours, video walkthroughs, and I can be your eyes on the ground. Many clients purchase successfully without visiting until closing.',
              },
              {
                q: 'How far in advance should I start the process?',
                a: 'Ideally 3 to 6 months before your target move date. This gives us time to find the right home and navigate the buying process without rushing. If you\'re 12 or more months out, we can still start the conversation and research.',
              },
              {
                q: 'What is the real estate market like in Northern Colorado?',
                a: 'Northern Colorado has a healthy and active market. Demand is strong, especially in Fort Collins, Loveland, and Windsor. Inventory varies by area and price point. I\'ll give you a current, honest market update at our consultation.',
              },
              {
                q: 'Which city in Northern Colorado is right for me?',
                a: 'That depends entirely on your lifestyle, budget, and priorities, which is exactly what we talk through in the discovery call. There\'s no one size fits all answer, but there\'s definitely a right community for you.',
              },
              {
                q: 'Do you charge for the relocation consultation?',
                a: 'No. The consultation, the relocation guide, and my guidance throughout the process are all part of what I do as your agent. I\'m compensated at closing, so there\'s no upfront cost to you.',
              },
            ].map((item, i) => (
              <details
                key={i}
                className="group bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm"
              >
                <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                  <span className="font-heading font-600 text-sm text-charcoal pr-4">
                    {item.q}
                  </span>
                  <svg
                    className="w-5 h-5 text-teal shrink-0 transition-transform group-open:rotate-180"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-6">
                  <p className="font-sans text-gray-500 text-sm leading-relaxed">{item.a}</p>
                </div>
              </details>
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
            Ready to Start Your Northern Colorado Journey?
          </h2>
          <p className="font-sans text-gray-400 text-lg mb-6">
            Let&apos;s find the right community for your lifestyle and start making
            your move a reality.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#guide" className="btn-primary text-base px-8 py-3.5">
              Get the Free Guide
            </a>
            <Link href="/contact" className="btn-outline-white text-base px-8 py-3.5">
              Contact Michael
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
