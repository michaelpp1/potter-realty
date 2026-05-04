import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Terms of Service | Michael Potter — LPT Realty',
  description: 'Terms of service for potterealty.com — the conditions governing your use of this website.',
  alternates: { canonical: 'https://www.potterealty.com/terms' },
}

export default function TermsPage() {
  return (
    <>
      <section className="pt-24 pb-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="font-sans text-teal text-sm font-500 uppercase tracking-widest mb-3">Legal</p>
          <h1 className="font-heading font-800 text-4xl text-charcoal mb-3">Terms of Service</h1>
          <p className="font-sans text-gray-400 text-sm mb-10">Last updated: May 4, 2026</p>

          <div className="prose prose-gray max-w-none space-y-8 font-sans text-gray-600 text-base leading-relaxed">

            <div>
              <h2 className="font-heading font-700 text-xl text-charcoal mb-3">Agreement to Terms</h2>
              <p>
                By accessing or using potterealty.com, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, please do not use this website. These terms apply to all visitors and users of the site.
              </p>
            </div>

            <div>
              <h2 className="font-heading font-700 text-xl text-charcoal mb-3">About This Website</h2>
              <p>
                This website is operated by Michael Potter, a licensed Colorado Real Estate Broker affiliated with LPT Realty. The content on this site is provided for general informational purposes related to real estate services in Northern Colorado, including buying, selling, and relocating.
              </p>
            </div>

            <div>
              <h2 className="font-heading font-700 text-xl text-charcoal mb-3">Not Legal or Financial Advice</h2>
              <p>
                Nothing on this website constitutes legal, financial, tax, or investment advice. Real estate transactions involve complex legal and financial considerations. You should consult with qualified legal and financial professionals before making any real estate decisions. Information on this site is provided &ldquo;as is&rdquo; without warranty of any kind.
              </p>
            </div>

            <div>
              <h2 className="font-heading font-700 text-xl text-charcoal mb-3">Accuracy of Information</h2>
              <p>
                We strive to keep the information on this site accurate and up to date, but we make no guarantees regarding the completeness, accuracy, or timeliness of any content. Market data, neighborhood information, and real estate insights are subject to change. Always verify information independently before relying on it for any transaction.
              </p>
            </div>

            <div>
              <h2 className="font-heading font-700 text-xl text-charcoal mb-3">Use of This Website</h2>
              <p className="mb-3">When using this website, you agree not to:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Use the site for any unlawful purpose or in violation of any regulations</li>
                <li>Attempt to gain unauthorized access to any portion of the site or its related systems</li>
                <li>Submit false, misleading, or fraudulent information through any form</li>
                <li>Scrape, copy, or reproduce site content without written permission</li>
                <li>Use automated tools to interact with the site in a way that disrupts normal operation</li>
              </ul>
            </div>

            <div>
              <h2 className="font-heading font-700 text-xl text-charcoal mb-3">Intellectual Property</h2>
              <p>
                All content on this website — including text, images, logos, blog posts, and graphics — is the property of Michael Potter or used with permission. You may not reproduce, distribute, or create derivative works from this content without prior written consent.
              </p>
            </div>

            <div>
              <h2 className="font-heading font-700 text-xl text-charcoal mb-3">Third-Party Links</h2>
              <p>
                This site may contain links to third-party websites. These links are provided for convenience only. We have no control over the content of those sites and accept no responsibility for them or for any loss or damage that may arise from your use of them.
              </p>
            </div>

            <div>
              <h2 className="font-heading font-700 text-xl text-charcoal mb-3">No Agency Relationship</h2>
              <p>
                Submitting a form or contacting us through this website does not create a formal client-agent relationship. A written buyer or listing agreement is required to establish a brokerage relationship. Until such an agreement is signed, Michael Potter is not acting as your agent.
              </p>
            </div>

            <div>
              <h2 className="font-heading font-700 text-xl text-charcoal mb-3">Limitation of Liability</h2>
              <p>
                To the fullest extent permitted by law, Michael Potter and LPT Realty shall not be liable for any indirect, incidental, or consequential damages arising from your use of this website or reliance on any content found here. Your use of this site is at your own risk.
              </p>
            </div>

            <div>
              <h2 className="font-heading font-700 text-xl text-charcoal mb-3">Governing Law</h2>
              <p>
                These terms are governed by the laws of the State of Colorado. Any disputes arising from your use of this website shall be resolved in the courts of Larimer County, Colorado.
              </p>
            </div>

            <div>
              <h2 className="font-heading font-700 text-xl text-charcoal mb-3">Changes to These Terms</h2>
              <p>
                We reserve the right to update these Terms of Service at any time. Changes will be posted on this page with an updated date. Continued use of the site after changes are posted constitutes your acceptance of the revised terms.
              </p>
            </div>

            <div>
              <h2 className="font-heading font-700 text-xl text-charcoal mb-3">Contact</h2>
              <p>If you have any questions about these Terms of Service, please reach out:</p>
              <div className="mt-3 space-y-1">
                <p><strong>Michael Potter</strong> · LPT Realty</p>
                <p>Email: <a href="mailto:michael@potterealty.com" className="text-teal hover:underline">michael@potterealty.com</a></p>
                <p>Northern Colorado</p>
              </div>
            </div>

            <div className="pt-4 border-t border-gray-100">
              <p className="text-sm text-gray-400">
                These terms apply to your use of potterealty.com. For information on how we handle your data, see our{' '}
                <Link href="/privacy" className="text-teal hover:underline">Privacy Policy</Link>.
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
