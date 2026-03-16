'use client'

import { useState } from 'react'

type FormState = 'idle' | 'loading' | 'success' | 'error'

interface FormData {
  firstName: string
  lastName: string
  email: string
  phone: string
  movingTimeline: string
}

export default function RelocationForm() {
  const [formState, setFormState] = useState<FormState>('idle')
  const [errorMessage, setErrorMessage] = useState('')
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    movingTimeline: '',
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setFormState('loading')
    setErrorMessage('')

    try {
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (!res.ok) {
        const data = await res.json()
        throw new Error(data.error || 'Something went wrong. Please try again.')
      }

      setFormState('success')
    } catch (err) {
      setFormState('error')
      setErrorMessage(
        err instanceof Error ? err.message : 'Something went wrong. Please try again.'
      )
    }
  }

  if (formState === 'success') {
    return (
      <div className="text-center py-10 px-6">
        <div className="w-16 h-16 bg-teal/10 rounded-full flex items-center justify-center mx-auto mb-5">
          <svg className="w-8 h-8 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="font-heading font-700 text-2xl text-charcoal mb-3">
          You&apos;re all set!
        </h3>
        <p className="font-sans text-gray-500 text-base leading-relaxed max-w-sm mx-auto">
          Your Northern Colorado Relocation Guide is on its way. Michael will also
          personally reach out to help make your move as smooth as possible.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block font-sans text-sm font-500 text-charcoal mb-1.5">
            First Name <span className="text-teal">*</span>
          </label>
          <input
            type="text"
            name="firstName"
            required
            value={formData.firstName}
            onChange={handleChange}
            placeholder="Jane"
            className="input-field"
          />
        </div>
        <div>
          <label className="block font-sans text-sm font-500 text-charcoal mb-1.5">
            Last Name <span className="text-teal">*</span>
          </label>
          <input
            type="text"
            name="lastName"
            required
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Smith"
            className="input-field"
          />
        </div>
      </div>

      <div>
        <label className="block font-sans text-sm font-500 text-charcoal mb-1.5">
          Email Address <span className="text-teal">*</span>
        </label>
        <input
          type="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          placeholder="jane@example.com"
          className="input-field"
        />
      </div>

      <div>
        <label className="block font-sans text-sm font-500 text-charcoal mb-1.5">
          Phone Number{' '}
          <span className="text-gray-400 font-400 text-xs">(optional)</span>
        </label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="(555) 555-5555"
          className="input-field"
        />
      </div>

      <div>
        <label className="block font-sans text-sm font-500 text-charcoal mb-1.5">
          When are you moving to Northern Colorado?{' '}
          <span className="text-teal">*</span>
        </label>
        <div className="relative">
          <select
            name="movingTimeline"
            required
            value={formData.movingTimeline}
            onChange={handleChange}
            className="select-field"
          >
            <option value="" disabled>
              Select your timeline...
            </option>
            <option value="ASAP">ASAP</option>
            <option value="Within the Next 6 Months">Within the Next 6 Months</option>
            <option value="6-12 Months">6–12 Months</option>
            <option value="1 Year or More">1 Year or More</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-400">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </div>

      {formState === 'error' && (
        <p className="text-red-500 text-sm font-sans">{errorMessage}</p>
      )}

      <button
        type="submit"
        disabled={formState === 'loading'}
        className="w-full btn-secondary py-4 text-base disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {formState === 'loading' ? (
          <span className="flex items-center justify-center gap-2">
            <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            Sending...
          </span>
        ) : (
          'Send Me the Free Guide'
        )}
      </button>

      <p className="text-xs text-gray-400 font-sans text-center">
        No spam, ever. Your info is private and only used to send your guide and
        follow up personally.
      </p>
    </form>
  )
}
