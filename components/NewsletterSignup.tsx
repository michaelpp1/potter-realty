'use client'

import { useState } from 'react'

type SignupState = 'idle' | 'loading' | 'success' | 'error'

interface Props {
  variant?: 'blog' | 'homepage'
}

export default function NewsletterSignup({ variant = 'blog' }: Props) {
  const [email, setEmail] = useState('')
  const [firstName, setFirstName] = useState('')
  const [state, setState] = useState<SignupState>('idle')
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setState('loading')
    setError('')

    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, firstName }),
      })

      if (!res.ok) {
        const data = await res.json()
        throw new Error(data.error || 'Something went wrong. Please try again.')
      }

      setState('success')
    } catch (err) {
      setState('error')
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.')
    }
  }

  if (state === 'success') {
    return (
      <div className={`rounded-2xl p-6 text-center ${variant === 'homepage' ? 'bg-teal/5 border border-teal/20' : 'bg-teal/5 border border-teal/20'}`}>
        <div className="w-12 h-12 bg-teal/10 rounded-full flex items-center justify-center mx-auto mb-3">
          <svg className="w-6 h-6 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <p className="font-heading font-700 text-base text-charcoal mb-1">You&apos;re in!</p>
        <p className="font-sans text-sm text-gray-500">
          You&apos;ll get the Northern Colorado market update every month. No spam, ever.
        </p>
      </div>
    )
  }

  if (variant === 'homepage') {
    return (
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 max-w-xl mx-auto">
        <div className="text-center mb-6">
          <p className="font-sans text-teal text-sm font-500 uppercase tracking-widest mb-2">
            Free Weekly Newsletter
          </p>
          <h3 className="font-heading font-700 text-2xl text-charcoal mb-2">
            Stay Informed on the Northern Colorado Market
          </h3>
          <p className="font-sans text-gray-500 text-sm leading-relaxed">
            Market updates, local events, buyer and seller tips, and relocation insights — delivered monthly. No spam, unsubscribe any time.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <input
              type="text"
              placeholder="First name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="input-field"
            />
            <input
              type="email"
              placeholder="Email address"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input-field"
            />
          </div>
          {state === 'error' && (
            <p className="text-red-500 text-sm font-sans">{error}</p>
          )}
          <button
            type="submit"
            disabled={state === 'loading'}
            className="w-full btn-secondary py-3.5 text-base disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {state === 'loading' ? 'Subscribing...' : 'Get the Weekly Update'}
          </button>
          <p className="text-xs text-gray-400 font-sans text-center">
            No spam. Unsubscribe any time.
          </p>
        </form>
      </div>
    )
  }

  // Blog variant — compact inline
  return (
    <div className="my-10 rounded-2xl bg-charcoal p-6 sm:p-8">
      <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
        <div className="shrink-0 w-10 h-10 rounded-xl bg-teal/20 flex items-center justify-center">
          <svg className="w-5 h-5 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </div>
        <div className="flex-1">
          <p className="font-heading font-700 text-white text-base mb-1">
            Get the Monthly Northern Colorado Market Update
          </p>
          <p className="font-sans text-gray-400 text-sm leading-relaxed">
            Market news, local events, and relocation insights every month. Free, no spam.
          </p>
        </div>
      </div>
      <form onSubmit={handleSubmit} className="mt-5 flex flex-col sm:flex-row gap-2">
        <input
          type="text"
          placeholder="First name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          className="flex-1 px-4 py-3 rounded-xl bg-white/10 border border-white/10 text-white placeholder-gray-500 font-sans text-sm focus:outline-none focus:border-teal/50"
        />
        <input
          type="email"
          placeholder="Your email address"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-1 px-4 py-3 rounded-xl bg-white/10 border border-white/10 text-white placeholder-gray-500 font-sans text-sm focus:outline-none focus:border-teal/50"
        />
        <button
          type="submit"
          disabled={state === 'loading'}
          className="btn-primary px-6 py-3 text-sm whitespace-nowrap disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {state === 'loading' ? 'Subscribing...' : 'Subscribe'}
        </button>
      </form>
      {state === 'error' && (
        <p className="text-red-400 text-sm font-sans mt-2">{error}</p>
      )}
    </div>
  )
}
