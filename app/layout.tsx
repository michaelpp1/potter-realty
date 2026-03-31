import type { Metadata } from 'next'
import { Inter, Montserrat } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { SITE } from '@/lib/constants'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: SITE.title,
    template: `%s | Michael Potter, Northern Colorado Real Estate`,
  },
  description: SITE.description,
  keywords: [
    'Northern Colorado real estate',
    'Loveland homes for sale',
    'Fort Collins realtor',
    'Windsor Colorado homes',
    'relocating to Northern Colorado',
    'eXp Realty Northern Colorado',
    'Michael Potter realtor',
  ],

  other: {
    'google-site-verification': 'rI6UziQd8pquZ2-9x4',
  },
  openGraph: {
    type: 'website',
    title: SITE.title,
    description: SITE.description,
  },
}

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'RealEstateAgent',
  name: 'Michael Potter, eXp Realty Northern Colorado',
  image: 'https://www.potterealty.com/images/headshot.jpg',
  url: 'https://www.potterealty.com',
  telephone: SITE.phone,
  email: SITE.email,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Loveland',
    addressRegion: 'CO',
    addressCountry: 'US',
  },
  areaServed: SITE.cities.map((city) => ({
    '@type': 'City',
    name: city,
    containedInPlace: { '@type': 'State', name: 'Colorado' },
  })),
  description: SITE.description,
  priceRange: '$$',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${montserrat.variable}`}>
      <head>
        <meta name="google-site-verification" content="rI6UziQd8pquZ2-9x4" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Script
          src={`https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`}
          strategy="afterInteractive"
        />
      </body>
    </html>
  )
}
