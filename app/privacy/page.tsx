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
          <p className="font-sans text-gray-400 text-sm mb-10">Effective Date: January 1, 2026 &nbsp;·&nbsp; Last updated: May 5, 2026</p>

          <div className="prose prose-gray max-w-none space-y-8 font-sans text-gray-600 text-base leading-relaxed">

            {/* SMS Notice */}
            <div className="bg-teal/5 border border-teal/20 rounded-xl p-6">
              <h2 className="font-heading font-700 text-lg text-charcoal mb-3">Important Notice Regarding Text Messaging</h2>
              <p>
                Michael Potter, LPT Realty (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) does <strong>not</strong> share customer opt-in information — including phone numbers and consent records — with any affiliates or third parties for marketing, promotional, or any other purposes unrelated to providing our direct services. All text messaging originator opt-in data is kept strictly confidential.
              </p>
            </div>

            <div>
              <h2 className="font-heading font-700 text-xl text-charcoal mb-3">Overview</h2>
              <p>
                This Privacy Policy describes how Michael Potter, LPT Realty collects, uses, and protects information you provide when visiting potterealty.com or engaging with our services. We take your privacy seriously and will never sell your personal information to third parties.
              </p>
            </div>

            <div>
              <h2 className="font-heading font-700 text-xl text-charcoal mb-3">1. Information We Collect</h2>
              <p className="mb-3"><strong>Personal Information:</strong></p>
              <ul className="list-disc pl-6 space-y-1 mb-4">
                <li>Name, email address, phone number, and physical address</li>
                <li>Details about your real estate needs (buying timeline, current location, home preferences)</li>
                <li>Payment information when applicable</li>
                <li>Opt-in records and timestamps for all communication channels (SMS, email, etc.)</li>
              </ul>
              <p className="mb-3"><strong>Non-Personal Information:</strong></p>
              <ul className="list-disc pl-6 space-y-1 mb-4">
                <li>IP address, browser type, and device information</li>
                <li>Website usage patterns and analytics</li>
                <li>Cookies and similar technologies</li>
              </ul>
              <p className="mb-3"><strong>Customer Communication:</strong></p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Records of inquiries and service requests</li>
                <li>Appointment details and preferences</li>
                <li>Service history and feedback</li>
              </ul>
            </div>

            <div>
              <h2 className="font-heading font-700 text-xl text-charcoal mb-3">2. How We Use Your Information</h2>
              <ul className="list-disc pl-6 space-y-1">
                <li>To respond to your inquiries and provide real estate services</li>
                <li>To send you our monthly newsletter (only if you opted in)</li>
                <li>To follow up regarding your real estate goals</li>
                <li>To process transactions and service requests</li>
                <li>To communicate with you about appointments, updates, and promotions</li>
                <li>To improve the content and experience of our website</li>
                <li>To ensure security and fraud prevention</li>
                <li>To maintain records of your communication preferences and consent</li>
              </ul>
            </div>

            <div>
              <h2 className="font-heading font-700 text-xl text-charcoal mb-3">3. SMS Messaging &amp; Compliance</h2>
              <p className="mb-4">
                By opting into our SMS messaging services, you agree to receive text messages related to our services, including appointment reminders, customer support, and important updates.
              </p>

              <p className="mb-2"><strong>Opt-In &amp; Consent:</strong></p>
              <ul className="list-disc pl-6 space-y-1 mb-4">
                <li>You will only receive messages if you have explicitly opted in</li>
                <li>We maintain timestamped records of all opt-in actions</li>
                <li>We comply with the Telephone Consumer Protection Act (TCPA) and all applicable laws</li>
              </ul>

              <p className="mb-2"><strong>Opt-Out Instructions:</strong></p>
              <ul className="list-disc pl-6 space-y-1 mb-4">
                <li>You can cancel SMS notifications at any time by replying <strong>STOP</strong></li>
                <li>You will receive a final confirmation message, and no further messages will be sent unless you re-opt in</li>
                <li>All opt-out requests are processed immediately</li>
              </ul>

              <p className="mb-2"><strong>Message Frequency &amp; Content:</strong></p>
              <ul className="list-disc pl-6 space-y-1 mb-4">
                <li>Message frequency varies based on your interactions with our business</li>
                <li>Messages will be directly related to the services you have requested</li>
                <li>We do not send promotional content without specific consent</li>
              </ul>

              <p className="mb-2"><strong>Help &amp; Support:</strong></p>
              <ul className="list-disc pl-6 space-y-1 mb-4">
                <li>Reply <strong>HELP</strong> for assistance or contact us at <a href="mailto:michael@potterealty.com" className="text-teal hover:underline">michael@potterealty.com</a></li>
                <li>Customer support is available during regular business hours</li>
              </ul>

              <p className="mb-2"><strong>Carrier Information:</strong></p>
              <ul className="list-disc pl-6 space-y-1 mb-4">
                <li>Standard message and data rates may apply</li>
                <li>Carriers are not liable for delayed or undelivered messages</li>
                <li>Supported carriers include AT&amp;T, Verizon, T-Mobile, and most regional carriers</li>
              </ul>

              <div className="bg-gray-50 rounded-lg p-4 mt-4">
                <p className="font-sans text-sm text-gray-600">
                  <strong>SMS Data Protection Statement:</strong> No mobile information will be shared with third parties or affiliates for marketing or promotional purposes. Information sharing with subcontractors in support of services (such as customer service) is permitted. All other use case categories exclude text messaging originator opt-in data and consent — this information will not be shared with any third parties.
                </p>
              </div>
            </div>

            <div>
              <h2 className="font-heading font-700 text-xl text-charcoal mb-3">4. Information Sharing &amp; Disclosure</h2>
              <p className="mb-4">We do not sell, rent, or trade your personal information. We may share information only in the following limited circumstances:</p>

              <p className="mb-2"><strong>Service Providers:</strong></p>
              <ul className="list-disc pl-6 space-y-1 mb-4">
                <li><strong>Flodesk</strong> — email newsletter delivery</li>
                <li><strong>Follow Up Boss</strong> — real estate CRM for managing client relationships</li>
                <li><strong>Google reCAPTCHA</strong> — spam protection on forms</li>
                <li><strong>Google Analytics</strong> — website traffic analysis</li>
                <li><strong>Vercel</strong> — website hosting</li>
                <li>SMS aggregators and providers, solely for the purpose of delivering messages you have consented to receive</li>
              </ul>
              <p className="mb-4">All service providers are contractually obligated to maintain confidentiality and security. Each has their own privacy policy governing how they handle data.</p>

              <p className="mb-2"><strong>Legal Compliance:</strong></p>
              <ul className="list-disc pl-6 space-y-1 mb-4">
                <li>If required by law, legal process, or to protect our rights</li>
                <li>In response to valid law enforcement requests or court orders</li>
              </ul>

              <p className="mb-2"><strong>Business Transfers:</strong></p>
              <ul className="list-disc pl-6 space-y-1 mb-4">
                <li>In the case of a merger, acquisition, or sale of assets, your data remains protected under the terms of this policy</li>
              </ul>

              <p className="text-sm text-gray-500 italic">
                All categories above exclude text messaging originator opt-in data and consent. This information will not be shared with any third parties, excluding aggregators and providers of our text message services.
              </p>
            </div>

            <div>
              <h2 className="font-heading font-700 text-xl text-charcoal mb-3">5. Data Security</h2>
              <p className="mb-4">We implement and maintain reasonable security measures to protect your personal information, including:</p>
              <ul className="list-disc pl-6 space-y-1 mb-4">
                <li>Encryption of sensitive data in transit and at rest</li>
                <li>Secure access controls and authentication mechanisms</li>
                <li>Regular security assessments and updates</li>
                <li>Employee and vendor training on data protection</li>
                <li>Breach notification protocols in accordance with applicable laws</li>
                <li>Secure backup systems and recovery procedures</li>
              </ul>
              <p>
                Despite these measures, no method of transmission over the internet or electronic storage is 100% secure. We strive to use commercially acceptable means to protect your personal information but cannot guarantee absolute security.
              </p>
            </div>

            <div>
              <h2 className="font-heading font-700 text-xl text-charcoal mb-3">6. Cookies &amp; Tracking Technologies</h2>
              <p className="mb-4">
                Our website uses cookies — small text files stored on your device — to improve your browsing experience and analyze site traffic. We use cookies and similar technologies to:
              </p>
              <ul className="list-disc pl-6 space-y-1 mb-4">
                <li>Analyze site traffic and user behavior</li>
                <li>Remember your preferences</li>
                <li>Improve website functionality and user experience</li>
                <li>Measure the effectiveness of our services</li>
              </ul>
              <p>
                You can decline cookies using the banner shown on your first visit, or control them through your browser settings. Note that disabling cookies may limit your ability to use certain features of the site.
              </p>
            </div>

            <div>
              <h2 className="font-heading font-700 text-xl text-charcoal mb-3">7. Data Retention</h2>
              <p>
                We retain your information for as long as necessary to provide our services or as required by law. If you would like your information removed from our records, please contact us and we will honor your request promptly.
              </p>
            </div>

            <div>
              <h2 className="font-heading font-700 text-xl text-charcoal mb-3">8. Your Rights &amp; Choices</h2>
              <p className="mb-3">You have the right to:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Access, update, or delete your personal information</li>
                <li>Request information on how we process your data</li>
                <li>Opt out of marketing emails by clicking &ldquo;unsubscribe&rdquo; in any email we send</li>
                <li>Opt out of SMS messages at any time by replying <strong>STOP</strong></li>
                <li>Opt out of cookies using the consent banner on our site</li>
                <li>Withdraw consent at any time for future communications</li>
                <li>Lodge a complaint with a supervisory authority if you believe your rights have been violated</li>
              </ul>
            </div>

            <div>
              <h2 className="font-heading font-700 text-xl text-charcoal mb-3">9. Third-Party Links</h2>
              <p>
                This website may contain links to third-party websites. We are not responsible for their privacy practices and encourage you to review their individual policies. This Privacy Policy applies only to information collected by potterealty.com.
              </p>
            </div>

            <div>
              <h2 className="font-heading font-700 text-xl text-charcoal mb-3">10. Changes to This Privacy Policy</h2>
              <p>
                We may update this policy periodically. The latest version will always be available on this page with the updated effective date. For significant changes, we will notify you by email or through a notice on our website. Continued use of the site after changes are posted constitutes your acceptance of the updated policy.
              </p>
            </div>

            <div>
              <h2 className="font-heading font-700 text-xl text-charcoal mb-3">11. Contact</h2>
              <p>
                If you have any questions about this Privacy Policy or how your information is handled, please reach out:
              </p>
              <div className="mt-3 space-y-1">
                <p><strong>Michael Potter</strong> · LPT Realty</p>
                <p>Phone: <a href="tel:9702906436" className="text-teal hover:underline">(970) 290-6436</a></p>
                <p>Email: <a href="mailto:michael@potterealty.com" className="text-teal hover:underline">michael@potterealty.com</a></p>
                <p>Website: <Link href="/" className="text-teal hover:underline">potterealty.com</Link></p>
                <p>Northern Colorado</p>
              </div>
            </div>

            <div className="pt-4 border-t border-gray-100">
              <p className="text-sm text-gray-400">
                By using our website and services, you consent to this Privacy Policy.
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
