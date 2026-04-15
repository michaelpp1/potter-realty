import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacy Policy | Michael Potter — LPT Realty',
  description: 'Privacy policy for potterealty.com — how we collect, use, and protect your information.',
  alternates: { canonical: 'https://www.potterealty.com/privacy' },
}

export default function PrivacyPage() {
  return (
    <>
      <section className="pt-24 pb-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="font-sans text-teal text-sm font-500 uppercase tracking-widest mb-3">Legal</p>
          <h1 className="font-heading font-800 text-4xl text-charcoal mb-3">Privacy Policy</h1>
          <p className="font-sans text-gray-400 text-sm mb-10">Last updated: April 10, 2026</p>

          <div className="prose prose-gray max-w-none space-y-8 font-sans text-gray-600 text-base leading-relaxed">

            <div>
              <h2 className="font-heading font-700 text-xl text-charcoal mb-3">Overview</h2>
              <p>
                This Privacy Policy describes how Michael Potter, LPT Realty (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) collects, uses, and protects information you provide when visiting potterealty.com. We take your privacy seriously and will never sell your personal information to third parties.
              </p>
            </div>

            <div>
              <h2 className="font-heading font-700 text-xl text-charcoal mb-3">Information We Collect</h2>
              <p className="mb-3">We collect information you voluntarily provide through our forms, including:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Name and email address (newsletter signup, contact form, relocation guide request)</li>
                <li>Phone number (contact and relocation forms, if provided)</li>
                <li>Details about your real estate needs (buying timeline, current location, home preferences)</li>
              </ul>
              <p className="mt-3">We also collect standard website analytics data such as pages visited, time on site, and general location (city/region level), which is used to improve the site experience.</p>
            </div>

            <div>
              <h2 className="font-heading font-700 text-xl text-charcoal mb-3">How We Use Your Information</h2>
              <ul className="list-disc pl-6 space-y-1">
                <li>To respond to your inquiries and provide real estate services</li>
                <li>To send you our monthly newsletter (only if you opted in)</li>
                <li>To follow up regarding your real estate goals</li>
                <li>To improve the content and experience of our website</li>
              </ul>
            </div>

            <div>
              <h2 className="font-heading font-700 text-xl text-charcoal mb-3">Cookies</h2>
              <p>
                Our website uses cookies — small text files stored on your device — to improve your browsing experience and analyze site traffic. Cookies help us understand how visitors use the site so we can make it better. You can decline cookies using the banner shown on your first visit. Note that some features of the site may not function properly if cookies are declined.
              </p>
            </div>

            <div>
              <h2 className="font-heading font-700 text-xl text-charcoal mb-3">Third-Party Services</h2>
              <p className="mb-3">We use the following third-party services that may process your information:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li><strong>Flodesk</strong> — email newsletter delivery</li>
                <li><strong>Follow Up Boss</strong> — real estate CRM for managing client relationships</li>
                <li><strong>Google reCAPTCHA</strong> — spam protection on forms</li>
                <li><strong>Google Analytics</strong> — website traffic analysis</li>
                <li><strong>Vercel</strong> — website hosting</li>
              </ul>
              <p className="mt-3">Each of these services has their own privacy policy governing how they handle data.</p>
            </div>

            <div>
              <h2 className="font-heading font-700 text-xl text-charcoal mb-3">Data Retention</h2>
              <p>
                We retain your information for as long as necessary to provide our services or as required by law. If you would like your information removed from our records, please contact us and we will honor your request promptly.
              </p>
            </div>

            <div>
              <h2 className="font-heading font-700 text-xl text-charcoal mb-3">Your Rights</h2>
              <p className="mb-3">You have the right to:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Request access to the personal information we hold about you</li>
                <li>Request correction or deletion of your information</li>
                <li>Unsubscribe from our newsletter at any time using the link in any email</li>
                <li>Opt out of cookies using the consent banner on our site</li>
              </ul>
            </div>

            <div>
              <h2 className="font-heading font-700 text-xl text-charcoal mb-3">Contact</h2>
              <p>
                If you have any questions about this Privacy Policy or how your information is handled, please reach out:
              </p>
              <div className="mt-3 space-y-1">
                <p><strong>Michael Potter</strong> · LPT Realty</p>
                <p>Email: <a href="mailto:michael@potterealty.com" className="text-teal hover:underline">michael@potterealty.com</a></p>
                <p>Northern Colorado</p>
              </div>
            </div>

            <div className="pt-4 border-t border-gray-100">
              <p className="text-sm text-gray-400">
                This policy may be updated from time to time. Continued use of the site after changes constitutes acceptance of the updated policy.
              </p>
            </div>

          </div>

          <div className="mt-10">
            <Link href="/" className="btn-primary text-sm px-6 py-3">
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
