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
    'Northern Colorado relocation specialist',
    'relocating to Northern Colorado',
    'moving to Fort Collins Colorado',
    'moving to Northern Colorado',
    'Fort Collins relocation specialist',
    'Fort Collins realtor',
    'Loveland homes for sale',
    'Loveland Colorado real estate agent',
    'Windsor Colorado homes',
    'Timnath Colorado real estate',
    'Berthoud Colorado homes for sale',
    'eXp Realty Northern Colorado',
    'Michael Potter realtor',
    'Michael Potter eXp Realty',
    'buy a home Northern Colorado',
    'sell my home Fort Collins',
    'out of state relocation Colorado',
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
  '@type': ['RealEstateAgent', 'LocalBusiness'],
  name: 'Michael Potter, eXp Realty Northern Colorado',
  alternateName: 'Potter Realty — Northern Colorado',
  image: 'https://www.potterealty.com/images/headshot.jpg',
  url: 'https://www.potterealty.com',
  telephone: SITE.phone,
  email: SITE.email,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Loveland',
    addressRegion: 'CO',
    postalCode: '80537',
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 40.3978,
    longitude: -105.0749,
  },
  areaServed: SITE.cities.map((city) => ({
    '@type': 'City',
    name: `${city}, Colorado`,
    containedInPlace: { '@type': 'State', name: 'Colorado' },
  })),
  description: SITE.description,
  priceRange: '$$',
  sameAs: [
    SITE.instagramUrl,
    'https://www.google.com/maps?cid=potterealty',
  ],
  knowsAbout: [
    'Northern Colorado real estate',
    'relocation to Northern Colorado',
    'Fort Collins homes for sale',
    'Loveland Colorado real estate',
    'Windsor Colorado homes',
    'first-time home buyers',
    'out-of-state relocation',
    'home selling strategies',
    'Northern Colorado neighborhoods',
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Real Estate Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Home Buyer Representation', areaServed: 'Northern Colorado' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Home Seller Representation', areaServed: 'Northern Colorado' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Relocation Specialist Services', areaServed: 'Northern Colorado' } },
    ],
  },
  founder: {
    '@type': 'Person',
    name: 'Michael Potter',
    jobTitle: 'Northern Colorado Relocation Specialist & REALTOR®',
    worksFor: { '@type': 'Organization', name: 'eXp Realty' },
    url: 'https://www.potterealty.com/about',
    image: 'https://www.potterealty.com/images/headshot.jpg',
    telephone: SITE.phone,
    email: SITE.email,
    sameAs: [SITE.instagramUrl],
  },
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
