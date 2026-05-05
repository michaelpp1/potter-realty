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
          <p className="font-sans text-gray-400 text-sm mb-10">Effective Date: January 1, 2026 &nbsp;·&nbsp; Last updated: May 5, 2026</p>

          <div className="prose prose-gray max-w-none space-y-8 font-sans text-gray-600 text-base leading-relaxed">

            {/* SMS Notice */}
            <div className="bg-teal/5 border border-teal/20 rounded-xl p-6">
              <h2 className="font-heading font-700 text-lg text-charcoal mb-3">Important Notice Regarding Text Messaging</h2>
              <p>
                Michael Potter, LPT Realty (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) does <strong>not</strong> share customer opt-in information — including phone numbers and consent records — with any affiliates or third parties for marketing, promotional, or any other purposes unrelated to providing our direct services. All text messaging originator opt-in data is kept strictly confidential.
              </p>
            </div>

            {/* SMS Compliance */}
            <div>
              <h2 className="font-heading font-700 text-xl text-charcoal mb-4">SMS Messaging Terms &amp; Compliance</h2>

              <div className="space-y-5">
                <div>
                  <p className="font-sans font-600 text-charcoal mb-1">1. Program Description</p>
                  <p>
                    This messaging program sends appointment confirmation and reminder messages to customers who have booked an appointment with Michael Potter, LPT Realty through our website at potterealty.com, or via our scheduling forms, and have explicitly opted in to receive SMS notifications. Opt-in is collected via web forms with a dedicated checkbox for SMS consent. Messages include scheduling confirmations, appointment reminders, rescheduling updates, and customer support communications.
                  </p>
                </div>

                <div>
                  <p className="font-sans font-600 text-charcoal mb-1">2. Cancellation Instructions</p>
                  <p>
                    You can cancel the SMS service at any time. Simply text <strong>STOP</strong> to the same number that sent you messages. Upon sending &ldquo;STOP,&rdquo; we will confirm your unsubscribe status via SMS. Following this confirmation, you will no longer receive SMS messages from us. To rejoin, sign up as you did initially and we will resume sending SMS messages to you.
                  </p>
                </div>

                <div>
                  <p className="font-sans font-600 text-charcoal mb-1">3. Support Information</p>
                  <p>
                    If you experience issues with the messaging program, reply with the keyword <strong>HELP</strong> for assistance, or reach out directly to <a href="mailto:michael@potterealty.com" className="text-teal hover:underline">michael@potterealty.com</a> or call <a href="tel:9702906436" className="text-teal hover:underline">(970) 290-6436</a> during business hours.
                  </p>
                </div>

                <div>
                  <p className="font-sans font-600 text-charcoal mb-1">4. Carrier Liability</p>
                  <p>Carriers are not liable for delayed or undelivered messages.</p>
                </div>

                <div>
                  <p className="font-sans font-600 text-charcoal mb-1">5. Message &amp; Data Rates</p>
                  <p>
                    Message and data rates may apply for messages sent to you from us and to us from you. Message frequency varies based on your service usage and appointment schedule. For questions about your text plan or data plan, contact your wireless provider.
                  </p>
                </div>

                <div>
                  <p className="font-sans font-600 text-charcoal mb-1">6. Supported Carriers</p>
                  <p>Our SMS program works with all major U.S. wireless carriers, including AT&amp;T, T-Mobile, Verizon, Sprint, and most regional carriers.</p>
                </div>

                <div>
                  <p className="font-sans font-600 text-charcoal mb-1">7. Age Restriction</p>
                  <p>You must be 18 years or older to participate in our SMS program.</p>
                </div>

                <div>
                  <p className="font-sans font-600 text-charcoal mb-1">8. Privacy Policy</p>
                  <p>
                    For privacy-related inquiries, please refer to our <Link href="/privacy" className="text-teal hover:underline">Privacy Policy</Link>.
                  </p>
                </div>
              </div>

              <p className="mt-5 text-sm text-gray-500 italic">
                We comply with all applicable laws and regulations, including the Telephone Consumer Protection Act (TCPA) and CTIA guidelines, regarding the use of SMS communications.
              </p>
            </div>

            {/* General Terms */}
            <div>
              <h2 className="font-heading font-700 text-xl text-charcoal mb-3">General Terms</h2>
              <p className="mb-4">
                This website (the &ldquo;Site&rdquo;) is owned and operated by Michael Potter, LPT Realty (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;). By using the Site, you agree to be bound by these Terms of Service and to use the Site in accordance with these Terms of Service, our <Link href="/privacy" className="text-teal hover:underline">Privacy Policy</Link>, and any additional terms that may apply to specific sections of the Site or services available through it.
              </p>
              <p className="mb-4">
                Accessing the Site in any manner, whether automated or otherwise, constitutes use of the Site and your agreement to be bound by these Terms of Service.
              </p>
              <p>
                We reserve the right to change these Terms of Service or impose new conditions on use of the Site from time to time, in which case we will post the revised Terms on this website. By continuing to use the Site after we post any such changes, you accept the Terms of Service as modified.
              </p>
            </div>

            {/* Not Legal or Financial Advice */}
            <div>
              <h2 className="font-heading font-700 text-xl text-charcoal mb-3">Not Legal or Financial Advice</h2>
              <p>
                Nothing on this website constitutes legal, financial, tax, or investment advice. Real estate transactions involve complex legal and financial considerations. You should consult with qualified legal and financial professionals before making any real estate decisions. Information on this site is provided &ldquo;as is&rdquo; without warranty of any kind.
              </p>
            </div>

            {/* Accuracy of Information */}
            <div>
              <h2 className="font-heading font-700 text-xl text-charcoal mb-3">Accuracy of Information</h2>
              <p>
                We strive to keep the information on this site accurate and up to date, but we make no guarantees regarding the completeness, accuracy, or timeliness of any content. Market data, neighborhood information, and real estate insights are subject to change. Always verify information independently before relying on it for any transaction.
              </p>
            </div>

            {/* Intellectual Property */}
            <div>
              <h2 className="font-heading font-700 text-xl text-charcoal mb-3">Intellectual Property Rights</h2>
              <p className="font-600 text-charcoal mb-2">Our Limited License to You</p>
              <p className="mb-4">
                This Site and all materials available on it are the property of Michael Potter, LPT Realty and/or our affiliates or licensors, and are protected by copyright, trademark, and other intellectual property laws. The Site is provided solely for your personal, non-commercial use.
              </p>
              <p className="mb-4">
                You may not use the Site or its materials in a manner that constitutes an infringement of our rights or that has not been authorized by us. Unless explicitly authorized, you may not modify, copy, reproduce, republish, upload, post, transmit, translate, sell, create derivative works from, exploit, or distribute any material from the Site. You may download or print one copy of individual pages for your personal, non-commercial use, provided you keep intact all copyright and other proprietary notices.
              </p>
              <p className="font-600 text-charcoal mb-2">Your License to Us</p>
              <p>
                By posting or submitting any material (including comments, inquiries, photos, or other content) to us via the Site or any associated forms, you represent that you own the material or have obtained the necessary permissions. You grant us a royalty-free, perpetual, irrevocable, non-exclusive, worldwide license to use, modify, transmit, sell, exploit, create derivative works from, distribute, and publicly perform or display such material.
              </p>
            </div>

            {/* Disclaimers */}
            <div>
              <h2 className="font-heading font-700 text-xl text-charcoal mb-3">Disclaimers &amp; Limitation of Liability</h2>
              <p className="mb-4">
                Throughout the Site, we may provide links to third-party websites. Our linking to such sites does not imply an endorsement or sponsorship of those sites or the information, products, or services offered through them.
              </p>
              <p className="mb-4">
                The information, products, and services offered on or through the Site are provided &ldquo;as is&rdquo; and without warranties of any kind, either express or implied. To the fullest extent permissible under applicable law, we disclaim all warranties, including implied warranties of merchantability and fitness for a particular purpose.
              </p>
              <p className="mb-4">
                To the fullest extent permitted by law, Michael Potter and LPT Realty shall not be liable for any indirect, incidental, or consequential damages arising from your use of this website or reliance on any content found here. Your use of this site is at your own risk.
              </p>
              <p>
                You agree at all times to indemnify and hold harmless Michael Potter, LPT Realty, and their respective officers, directors, agents, and employees from any claims, causes of action, damages, liabilities, costs, and expenses arising out of or related to your breach of any obligation, warranty, or representation under these Terms of Service.
              </p>
            </div>

            {/* Use of Website */}
            <div>
              <h2 className="font-heading font-700 text-xl text-charcoal mb-3">Acceptable Use</h2>
              <p className="mb-3">When using this website, you agree not to:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Use the site for any unlawful purpose or in violation of any regulations</li>
                <li>Attempt to gain unauthorized access to any portion of the site or its related systems</li>
                <li>Submit false, misleading, or fraudulent information through any form</li>
                <li>Scrape, copy, or reproduce site content without written permission</li>
                <li>Use automated tools to interact with the site in a way that disrupts normal operation</li>
              </ul>
            </div>

            {/* Online Commerce */}
            <div>
              <h2 className="font-heading font-700 text-xl text-charcoal mb-3">Online Commerce &amp; Third-Party Services</h2>
              <p className="mb-4">
                Certain sections of the Site may allow you to access or purchase products and services from third-party vendors. We are not responsible for the quality, accuracy, timeliness, reliability, or any other aspect of these products and services. If you make a purchase from or share information with a third party linked through the Site, that third party&rsquo;s own policies govern their use of your information.
              </p>
              <p>
                Your participation in any dealings with third-party vendors is solely between you and that third party. Michael Potter, LPT Realty shall not be responsible for any loss or damage incurred as a result of such dealings.
              </p>
            </div>

            {/* No Agency Relationship */}
            <div>
              <h2 className="font-heading font-700 text-xl text-charcoal mb-3">No Agency Relationship</h2>
              <p>
                Submitting a form or contacting us through this website does not create a formal client-agent relationship. A written buyer or listing agreement is required to establish a brokerage relationship. Until such an agreement is signed, Michael Potter is not acting as your agent.
              </p>
            </div>

            {/* Registration */}
            <div>
              <h2 className="font-heading font-700 text-xl text-charcoal mb-3">Registration &amp; Account Security</h2>
              <p className="mb-4">
                To access certain features of the Site, you may be required to provide contact information or create an account. You agree to provide accurate, current, and complete information. You are responsible for maintaining the confidentiality of any login credentials and for all activities conducted under your account.
              </p>
              <p>
                If you suspect unauthorized use of your account or contact information, notify us immediately at <a href="mailto:michael@potterealty.com" className="text-teal hover:underline">michael@potterealty.com</a>. We are not liable for any loss or damage arising from your failure to comply with this obligation.
              </p>
            </div>

            {/* Termination */}
            <div>
              <h2 className="font-heading font-700 text-xl text-charcoal mb-3">Termination</h2>
              <p>
                We reserve the right to terminate or suspend your access to the Site, without notice, if we determine that you have violated these Terms of Service or engaged in conduct that we deem inappropriate or unlawful. Upon termination, you must cease all use of the Site and any content obtained from it.
              </p>
            </div>

            {/* Governing Law */}
            <div>
              <h2 className="font-heading font-700 text-xl text-charcoal mb-3">Governing Law</h2>
              <p>
                These Terms of Service shall be governed by and construed in accordance with the laws of the State of Colorado. Any dispute arising under these Terms shall be resolved exclusively through binding arbitration in that jurisdiction.
              </p>
            </div>

            {/* Changes */}
            <div>
              <h2 className="font-heading font-700 text-xl text-charcoal mb-3">Changes to These Terms</h2>
              <p>
                We may update these Terms of Service from time to time. The latest version will always be available on this page with the updated effective date. Continued use of the site after changes are posted constitutes your acceptance of the revised terms.
              </p>
            </div>

            {/* Contact */}
            <div>
              <h2 className="font-heading font-700 text-xl text-charcoal mb-3">Contact Us</h2>
              <p>If you have any questions about these Terms of Service, please reach out:</p>
              <div className="mt-3 space-y-1">
                <p><strong>Michael Potter</strong> · LPT Realty</p>
                <p>Phone: <a href="tel:9702906436" className="text-teal hover:underline">(970) 290-6436</a></p>
                <p>Email: <a href="mailto:michael@potterealty.com" className="text-teal hover:underline">michael@potterealty.com</a></p>
                <p>Website: <Link href="/" className="text-teal hover:underline">potterealty.com</Link></p>
              </div>
            </div>

            <div className="pt-4 border-t border-gray-100">
              <p className="text-sm text-gray-400">
                By using our website and services, you consent to these Terms of Service. For information on how we handle your data, see our{' '}
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
