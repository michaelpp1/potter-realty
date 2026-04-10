import Link from 'next/link'
import Image from 'next/image'
import { SITE } from '@/lib/constants'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-charcoal text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="relative w-28 h-12 mb-4 brightness-0 invert">
              <Image
                src="/images/lpt-logo.png"
                alt="LPT Realty"
                fill
                className="object-contain object-left"
                quality={100}
              />
            </div>
            <p className="font-heading font-700 text-lg text-white mb-1">Michael Potter</p>
            <p className="font-sans text-sage text-sm mb-4">Real Estate Advisor · Northern Colorado</p>
            <p className="font-sans text-gray-400 text-sm leading-relaxed max-w-sm">
              Helping buyers, sellers, and relocators find their perfect home and community across Northern Colorado.
            </p>
            <div className="flex gap-3 mt-5">
              <a
                href={`tel:${SITE.phone.replace(/\D/g, '')}`}
                className="flex items-center gap-2 text-sm text-gray-300 hover:text-gold transition-colors font-sans"
              >
                <svg className="w-4 h-4 text-gold shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                {SITE.phone}
              </a>
            </div>
            <div className="flex gap-3 mt-2">
              <a
                href={`mailto:${SITE.email}`}
                className="flex items-center gap-2 text-sm text-gray-300 hover:text-gold transition-colors font-sans"
              >
                <svg className="w-4 h-4 text-gold shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                {SITE.email}
              </a>
            </div>
            <div className="flex gap-3 mt-4 pt-4 border-t border-white/10">
              <a
                href={SITE.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-gray-300 hover:text-gold transition-colors font-sans"
              >
                <svg className="w-4 h-4 text-gold shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" strokeWidth={2} />
                  <circle cx="12" cy="12" r="4" strokeWidth={2} />
                  <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
                </svg>
                Follow on Instagram
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-heading font-700 text-sm uppercase tracking-widest text-gold mb-4">
              Navigate
            </h4>
            <ul className="space-y-2">
              {[
                { href: '/', label: 'Home' },
                { href: '/about', label: 'About Michael' },
                { href: '/buy', label: 'Buy a Home' },
                { href: '/sell', label: 'Sell Your Home' },
                { href: '/relocation', label: 'Relocate to NoCo' },
                { href: '/blog', label: 'Blog' },
                { href: '/contact', label: 'Contact' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-sans text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Cities */}
          <div>
            <h4 className="font-heading font-700 text-sm uppercase tracking-widest text-gold mb-4">
              Areas Served
            </h4>
            <ul className="space-y-2">
              {SITE.cities.map((city) => (
                <li key={city}>
                  <Link
                    href={`/relocation/${city.toLowerCase().replace(' ', '-')}`}
                    className="font-sans text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {city}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-sans text-xs text-gray-500">
            © {year} Michael Potter · LPT Realty · All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <p className="font-sans text-xs text-gray-500 text-center">
              Licensed Colorado Real Estate Broker · Northern Colorado
            </p>
            <Link href="/privacy" className="font-sans text-xs text-gray-500 hover:text-teal transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
