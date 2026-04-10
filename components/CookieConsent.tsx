'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function CookieConsent() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent')
    if (!consent) setVisible(true)
  }, [])

  const accept = () => {
    localStorage.setItem('cookie-consent', 'accepted')
    setVisible(false)
  }

  const decline = () => {
    localStorage.setItem('cookie-consent', 'declined')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-6">
      <div className="max-w-4xl mx-auto bg-charcoal rounded-2xl shadow-2xl px-6 py-5 flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <div className="flex-1">
          <p className="font-heading font-700 text-white text-sm mb-1">
            We use cookies
          </p>
          <p className="font-sans text-gray-400 text-xs leading-relaxed">
            This site uses cookies to improve your experience and analyze site traffic.
            By clicking &ldquo;Accept&rdquo; you consent to our use of cookies.{' '}
            <Link href="/privacy" className="text-teal hover:underline">
              Learn more
            </Link>
          </p>
        </div>
        <div className="flex gap-2 shrink-0">
          <button
            onClick={decline}
            className="px-4 py-2 rounded-xl border border-white/20 text-white/70 font-sans text-xs hover:bg-white/10 transition-colors"
          >
            Decline
          </button>
          <button
            onClick={accept}
            className="px-5 py-2 rounded-xl bg-teal text-white font-heading font-700 text-xs hover:bg-teal/90 transition-colors"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  )
}
