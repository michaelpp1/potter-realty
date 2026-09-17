import type { Metadata } from 'next'
import { Inter, Montserrat } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import Navbar from '@/components/Navbar'
import CookieConsent from '@/components/CookieConsent'
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
    'LPT Realty Northern Colorado',
    'Michael Potter realtor',
    'Michael Potter LPT Realty',
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
    images: [{ url: 'https://www.potterealty.com/images/og-default.jpg', width: 1200, height: 630, alt: 'Michael Potter — Northern Colorado Real Estate' }],
  },
}

const sameAsProfiles = [
  SITE.instagramUrl,
  'https://www.zillow.com/profile/mpotterealty',
  'https://www.realtor.com/realestateagents/5c775dfdc5bb830012007c2d',
  'https://www.homes.com/real-estate-agents/michael-potter/6wy4xes/',
]

const areaServedCities = [
  { '@type': 'City', name: 'Loveland', containedInPlace: { '@type': 'State', name: 'Colorado' } },
  { '@type': 'City', name: 'Fort Collins', containedInPlace: { '@type': 'State', name: 'Colorado' } },
  { '@type': 'City', name: 'Windsor', containedInPlace: { '@type': 'State', name: 'Colorado' } },
  { '@type': 'City', name: 'Timnath', containedInPlace: { '@type': 'State', name: 'Colorado' } },
  { '@type': 'City', name: 'Berthoud', containedInPlace: { '@type': 'State', name: 'Colorado' } },
  { '@type': 'City', name: 'Longmont', containedInPlace: { '@type': 'State', name: 'Colorado' } },
  { '@type': 'City', name: 'Greeley', containedInPlace: { '@type': 'State', name: 'Colorado' } },
  { '@type': 'City', name: 'Johnstown', containedInPlace: { '@type': 'State', name: 'Colorado' } },
  { '@type': 'City', name: 'Wellington', containedInPlace: { '@type': 'State', name: 'Colorado' } },
  { '@type': 'City', name: 'Severance', containedInPlace: { '@type': 'State', name: 'Colorado' } },
]

const structuredData = [
  // WebSite — enables sitelinks search box + entity clarity for AI systems
  {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Michael Potter — Northern Colorado Real Estate',
    url: 'https://www.potterealty.com',
    description: 'Northern Colorado relocation specialist helping out-of-state buyers find homes in Fort Collins, Loveland, Windsor, Timnath, and Berthoud.',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://www.potterealty.com/blog?q={search_term_string}',
      },
      'query-input': 'required name=search_term_string',
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': ['RealEstateAgent', 'LocalBusiness'],
    name: 'Michael Potter – LPT Realty',
    description: 'Northern Colorado relocation specialist helping out-of-state buyers from California, Texas, and the Midwest find their ideal home in Fort Collins, Loveland, Windsor, Timnath, Berthoud, and surrounding NoCo communities.',
    url: 'https://www.potterealty.com',
    telephone: SITE.phone,
    email: SITE.email,
    image: 'https://www.potterealty.com/images/headshot.jpg',
    logo: {
      '@type': 'ImageObject',
      url: 'https://www.potterealty.com/images/lpt-logo.png',
    },
    priceRange: '$$',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5',
      reviewCount: '15',
      bestRating: '5',
      worstRating: '1',
    },
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
      longitude: -105.0747,
    },
    areaServed: areaServedCities,
    knowsAbout: [
      'Northern Colorado real estate',
      'Relocation consulting',
      'Out-of-state buyer representation',
      'Fort Collins neighborhoods',
      'Loveland neighborhoods',
      'Remote worker relocation',
      'California to Colorado relocation',
      'Texas to Colorado relocation',
      'NoCo lifestyle',
    ],
    sameAs: sameAsProfiles,
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Michael Potter',
    description: 'Licensed Colorado REALTOR® and relocation specialist with LPT Realty, serving buyers and sellers across Northern Colorado since 2019.',
    jobTitle: 'Relocation Specialist – Northern Colorado Real Estate',
    worksFor: {
      '@type': 'Organization',
      name: 'LPT Realty',
    },
    url: 'https://www.potterealty.com',
    image: 'https://www.potterealty.com/images/headshot.jpg',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Loveland',
      addressRegion: 'CO',
      postalCode: '80537',
      addressCountry: 'US',
    },
    knowsAbout: [
      'Northern Colorado real estate',
      'Relocation consulting',
      'Fort Collins lifestyle',
      'Loveland neighborhoods',
      'Remote worker relocation',
      'Out-of-state buyer representation',
      'California to Colorado relocation',
    ],
    areaServed: 'Northern Colorado',
    sameAs: sameAsProfiles,
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Northern Colorado Relocation Consulting',
    description: 'Concierge relocation guidance for out-of-state buyers moving to Northern Colorado, including neighborhood matching, lifestyle consulting, school district research, and full buyer representation from search through closing.',
    provider: {
      '@type': 'Person',
      name: 'Michael Potter',
      worksFor: {
        '@type': 'Organization',
        name: 'LPT Realty',
      },
    },
    areaServed: areaServedCities,
    serviceType: 'Real Estate Relocation Consulting',
    audience: {
      '@type': 'Audience',
      audienceType: 'Out-of-state home buyers relocating to Northern Colorado',
    },
  },
]

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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <CookieConsent />
        <Script
          src={`https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`}
          strategy="afterInteractive"
        />
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-R8R5C87GW2"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-R8R5C87GW2');
          `}
        </Script>
        {/* Meta Pixel */}
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1123582745874062');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <img height="1" width="1" style={{display:'none'}}
            src="https://www.facebook.com/tr?id=1123582745874062&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
      </body>
    </html>
  )
}
