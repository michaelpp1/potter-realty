import type { Metadata } from 'next'
import RelocationForm from '@/components/RelocationForm'

export const metadata: Metadata = {
  title: 'Free Northern Colorado Relocation Guide | Michael Potter',
  description: 'Get the free Northern Colorado Relocation Guide from Michael Potter, LPT Realty.',
  robots: { index: false, follow: false },
}

export default function RelocationGuidePage() {
  return (
    <div className="min-h-screen bg-teal flex items-center justify-center px-4 py-16">
      <div className="w-full max-w-5xl">

        {/* Header */}
        <div className="text-center mb-10">
          <p className="font-sans text-white/70 text-sm font-500 uppercase tracking-widest mb-3">
            Free Download
          </p>
          <h1 className="font-heading font-800 text-4xl md:text-5xl text-white leading-tight mb-4">
            Get the Northern Colorado<br />Relocation Guide
          </h1>
          <p className="font-sans text-white/80 text-lg max-w-xl mx-auto leading-relaxed">
            Everything you need to know about moving to Northern Colorado — neighborhoods, schools, lifestyle, and the real estate market.
          </p>
        </div>

        {/* Two column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">

          {/* Left: what's inside */}
          <div>
            <p className="font-sans text-white/70 text-sm font-500 uppercase tracking-widest mb-4">
              What&apos;s inside
            </p>
            <ul className="space-y-4">
              {[
                'City by city community breakdowns',
                'School district overviews',
                'Cost of living comparison',
                'Northern Colorado real estate market overview',
                'Tips for buying from out of state',
                "Michael's personal recommendations",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                    <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="font-sans text-white/90 text-base">{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <div>
                <p className="font-heading font-700 text-white text-sm">Michael Potter</p>
                <p className="font-sans text-white/70 text-xs">LPT Realty · Northern Colorado Relocation Specialist</p>
              </div>
            </div>
          </div>

          {/* Right: form */}
          <div className="bg-white rounded-2xl shadow-2xl p-8">
            <h2 className="font-heading font-700 text-xl text-charcoal mb-2">
              Send Me the Free Guide
            </h2>
            <p className="font-sans text-gray-500 text-sm mb-6">
              Fill out the form and Michael will personally send you the Relocation Guide along with a note to answer any questions you have about the area.
            </p>
            <RelocationForm />
          </div>
        </div>

        {/* Footer */}
        <p className="text-center font-sans text-white/40 text-xs mt-10">
          © {new Date().getFullYear()} Michael Potter · LPT Realty · Northern Colorado
        </p>

      </div>
    </div>
  )
}
