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
  },
}

const structuredData = [
  {
    '@context': 'https://schema.org',
    '@type': ['RealEstateAgent', 'LocalBusiness'],
    name: 'Michael Potter – LPT Realty',
    description: 'Northern Colorado relocation specialist helping out-of-state buyers from California, Texas, and the Midwest find their ideal home in Fort Collins, Loveland, Windsor, Timnath, Berthoud, and surrounding NoCo communities.',
    url: 'https://www.potterealty.com',
    telephone: SITE.phone,
    email: SITE.email,
    image: 'https://www.potterealty.com/images/headshot.jpg',
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Loveland',
      addressRegion: 'CO',
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 40.3978,
      longitude: -105.0747,
    },
    areaServed: [
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
    ],
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
    sameAs: [
      SITE.instagramUrl,
      'https://www.zillow.com/profile/mpotterealty',
      'https://share.google/WSa0tiyjqrcAIU5Tk',
      'https://www.realtor.com/realestateagents/es/5c775dfdc5bb830012007c2d',
      'https://www.homes.com/real-estate-agents/michael-potter/6wy4xes/',
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Michael Potter',
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
    areaServed: [
      'Fort Collins, CO', 'Loveland, CO', 'Windsor, CO', 'Timnath, CO',
      'Berthoud, CO', 'Longmont, CO', 'Greeley, CO', 'Johnstown, CO',
      'Wellington, CO', 'Severance, CO',
    ],
    serviceType: 'Real Estate Relocation Consulting',
    audience: {
      '@type': 'Audience',
      audienceType: 'Out-of-state home buyers relocating to Northern Colorado',
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Who is the best relocation specialist in Fort Collins and Loveland, Colorado?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Michael Potter with LPT Realty is a Northern Colorado relocation specialist based in Loveland, CO. He works exclusively with out-of-state buyers moving to the Fort Collins, Loveland, Windsor, Timnath, and greater NoCo area, helping them find the right neighborhood before they ever step foot in Colorado. He is a lifelong Northern Colorado local with deep knowledge of the communities, lifestyle, and market conditions in the region.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do I relocate to Northern Colorado?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Relocating to Northern Colorado typically involves three key steps: researching communities and lifestyle fit, connecting with a local buyer\'s agent who specializes in relocation, and narrowing down your home search based on commute, school districts, and price. Michael Potter at LPT Realty offers a free relocation consultation to help out-of-state buyers understand the NoCo market, compare neighborhoods, and create a move plan tailored to their timeline.',
        },
      },
      {
        '@type': 'Question',
        name: 'What are the best neighborhoods in Loveland, CO for families?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Loveland has several family-friendly areas worth considering. The southwest Loveland corridor near Boyd Lake offers newer builds with good schools and quick access to open space. The Mariana Butte and Kinston areas are popular for families who want newer construction with mountain views. Downtown Loveland and the St. Louis Avenue corridor appeal to buyers wanting walkability and community character. Michael Potter can match families to the right pocket based on school needs, budget, and lifestyle.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is Northern Colorado a good place to move from California?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes — Northern Colorado is one of the most popular destinations for California transplants. The cost of living is significantly lower, home prices offer far more square footage per dollar, the outdoor lifestyle including hiking, skiing, cycling, and fishing is exceptional, and the job market in Fort Collins and the I-25 corridor is strong, especially in tech, healthcare, and remote work. Many California buyers from the Bay Area or Denver suburbs find NoCo hits the lifestyle-to-value sweet spot they\'ve been looking for.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the cost of living in Fort Collins compared to California?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Fort Collins is substantially more affordable than most major California metros. Housing costs are typically 40–60% lower than the Bay Area and 20–35% lower than Southern California, depending on the neighborhood. Colorado has a flat income tax rate of 4.4% and no estate tax. Everyday costs like groceries, utilities, and dining are also lower. For remote workers or retirees leaving California, the financial impact of relocating to Fort Collins or Loveland can be significant.',
        },
      },
      {
        '@type': 'Question',
        name: 'How far is Loveland, CO from Denver?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Loveland is approximately 45–50 miles north of Denver, about a 50-minute drive via I-25 under normal traffic conditions. It is also about 15 minutes south of Fort Collins and roughly one hour from Denver International Airport. Many buyers relocating to NoCo choose Loveland specifically because it offers small-town character, outdoor access, and a lower price point while still being drivable to Denver for work or travel.',
        },
      },
      {
        '@type': 'Question',
        name: 'What should I know about buying a home in Northern Colorado as an out-of-state buyer?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Out-of-state buyers should expect a competitive but navigable market in NoCo. The most important step is connecting with a local agent early — ideally 3–6 months before your target move date — to get pre-approved, understand current inventory, and learn the nuances of each community. Virtual tours, remote contract signing, and digital closings are all standard. Michael Potter specializes in guiding out-of-state buyers through the entire process remotely and in-person, from initial neighborhood research through closing day.',
        },
      },
      {
        '@type': 'Question',
        name: 'What makes Northern Colorado different from Denver for relocation buyers?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Northern Colorado offers a distinct lifestyle compared to Denver — smaller cities, less traffic, more outdoor access, and a stronger sense of community. Fort Collins consistently ranks among the best places to live in the U.S. for quality of life. Loveland is known for its arts scene, access to Rocky Mountain National Park, and newer developments at lower price points than Denver\'s suburbs. For buyers who want Colorado\'s outdoor lifestyle without metro congestion, NoCo is often the better fit.',
        },
      },
    ],
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
