// src/app/privacy/page.tsx

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - PAACS Software Data Protection & Privacy",
  description:
    "How PAACS Software protects your data. Our commitment to privacy, data collection practices, and your rights under GDPR and privacy laws.",
  alternates: {
    canonical: "https://paacs.pro/privacy",
  },
};

export default function PrivacyPolicy() {
  return (
    <div className="mx-auto mt-[10vh] max-w-4xl px-4 py-12 text-sm leading-relaxed text-gray-800 dark:text-gray-200">
      <h1 className="mb-6 text-3xl font-bold">Privacy Policy</h1>

      <p className="mt-2 text-xs italic text-gray-600 dark:text-gray-400">
        Effective Date: November 1, 2025
      </p>
      <p className="mt-1 text-xs italic text-gray-600 dark:text-gray-400">
        Last Updated: November 1, 2025
      </p>
      <p className="mt-1 text-xs italic text-gray-600 dark:text-gray-400">
        Version: 1.0.0
      </p>
      <p className="mt-1 text-xs italic text-gray-600 dark:text-gray-400">
        This policy is originally written in English. In case of discrepancies
        in translations, the English version shall prevail.
      </p>

      <div className="mt-4 rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20">
        <p className="text-sm font-medium">
          PAACS Software Ltd is committed to protecting your privacy and
          complying with applicable data protection laws including the UK GDPR,
          EU GDPR, and international privacy regulations. This Privacy Policy
          forms a binding agreement regarding our data practices.
        </p>
      </div>

      <h2 className="mt-6 text-xl font-semibold">
        1. DATA CONTROLLER INFORMATION
      </h2>
      <div className="ml-5 mt-2">
        <p>
          <strong>Company:</strong> PAACS Software Ltd
        </p>
        <p>
          <strong>Registered Address:</strong> [To be provided]
        </p>
        <p>
          <strong>Company Number:</strong> [To be provided]
        </p>
        <p>
          <strong>Data Protection Officer:</strong> privacy@paacs.pro
        </p>
        <p>
          <strong>ICO Registration:</strong> [To be provided]
        </p>
      </div>

      <h2 className="mt-6 text-xl font-semibold">2. SCOPE AND APPLICATION</h2>
      <p>
        This Privacy Policy applies to all personal data processed by PAACS
        Software Ltd through:
      </p>
      <ul className="ml-5 mt-2 list-disc">
        <li>Our website (https://paacs.pro and all subdomains)</li>
        <li>Our desktop software applications (Windows, macOS, Linux)</li>
        <li>Our mobile applications (when available)</li>
        <li>Our APIs and web services</li>
        <li>Customer support and communications</li>
        <li>Marketing and sales activities</li>
      </ul>

      <h2 className="mt-6 text-xl font-semibold">3. DATA WE COLLECT</h2>

      <h3 className="mt-4 text-lg font-medium">
        3.1 Information You Provide Directly
      </h3>
      <ul className="ml-5 list-disc">
        <li>
          <strong>Account Information:</strong> Name, email address, username,
          password (hashed), profile picture, organization name, job title
        </li>
        <li>
          <strong>Contact Information:</strong> Mailing address, phone number
          (optional)
        </li>
        <li>
          <strong>Payment Information:</strong> Billing address, payment method
          details (processed via secure payment processors)
        </li>
        <li>
          <strong>Academic Verification:</strong> Educational institution,
          student/faculty ID, academic email address
        </li>
        <li>
          <strong>Communications:</strong> Support tickets, feedback, survey
          responses, forum posts
        </li>
        <li>
          <strong>User Content:</strong> Files, simulations, projects created
          within our software
        </li>
      </ul>

      <h3 className="mt-4 text-lg font-medium">
        3.2 Information Collected Automatically
      </h3>
      <ul className="ml-5 list-disc">
        <li>
          <strong>Device Information:</strong> Operating system, hardware
          specifications, device identifiers, screen resolution
        </li>
        <li>
          <strong>Usage Data:</strong> Features used, frequency of use,
          performance metrics, error logs, crash reports
        </li>
        <li>
          <strong>Network Information:</strong> IP address, ISP, geographic
          location (country/region), browser type and version
        </li>
        <li>
          <strong>Cookies and Tracking:</strong> See our{" "}
          <a href="/cookie-policy" className="underline">
            Cookie Policy
          </a>{" "}
          for details
        </li>
        <li>
          <strong>License Validation:</strong> License key usage, activation
          data, machine fingerprint
        </li>
      </ul>

      <h3 className="mt-4 text-lg font-medium">
        3.3 Information from Third Parties
      </h3>
      <ul className="ml-5 list-disc">
        <li>
          <strong>OAuth Providers:</strong> Basic profile information from
          Google, GitHub when you use social login
        </li>
        <li>
          <strong>Payment Processors:</strong> Transaction confirmations,
          subscription status
        </li>
        <li>
          <strong>Analytics Services:</strong> Aggregated usage statistics
        </li>
        <li>
          <strong>Public Sources:</strong> Company information for B2B customers
        </li>
      </ul>

      <h2 className="mt-6 text-xl font-semibold">4. HOW WE USE YOUR DATA</h2>

      <h3 className="mt-4 text-lg font-medium">4.1 Primary Purposes</h3>
      <table className="mt-2 w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-50 dark:bg-gray-800">
            <th className="border border-gray-300 p-2 text-left">Purpose</th>
            <th className="border border-gray-300 p-2 text-left">
              Legal Basis (GDPR)
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-300 p-2">
              Provide and maintain services
            </td>
            <td className="border border-gray-300 p-2">Contract performance</td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2">Process payments</td>
            <td className="border border-gray-300 p-2">Contract performance</td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2">
              Verify license compliance
            </td>
            <td className="border border-gray-300 p-2">Legitimate interests</td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2">Send service updates</td>
            <td className="border border-gray-300 p-2">Contract performance</td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2">
              Marketing communications
            </td>
            <td className="border border-gray-300 p-2">
              Consent / Legitimate interests
            </td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2">Improve products</td>
            <td className="border border-gray-300 p-2">Legitimate interests</td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2">
              Security and fraud prevention
            </td>
            <td className="border border-gray-300 p-2">Legitimate interests</td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2">Legal compliance</td>
            <td className="border border-gray-300 p-2">Legal obligation</td>
          </tr>
        </tbody>
      </table>

      <h3 className="mt-4 text-lg font-medium">
        4.2 Detailed Processing Activities
      </h3>

      <p className="mt-2 font-medium">Service Delivery:</p>
      <ul className="ml-5 list-disc">
        <li>Creating and managing user accounts</li>
        <li>Authenticating users and maintaining sessions</li>
        <li>Providing software functionality and features</li>
        <li>Saving user preferences and settings</li>
        <li>Syncing data across devices</li>
      </ul>

      <p className="mt-2 font-medium">Customer Support:</p>
      <ul className="ml-5 list-disc">
        <li>Responding to inquiries and support requests</li>
        <li>Troubleshooting technical issues</li>
        <li>Providing documentation and guidance</li>
        <li>Following up on reported problems</li>
      </ul>

      <p className="mt-2 font-medium">Product Improvement:</p>
      <ul className="ml-5 list-disc">
        <li>Analyzing usage patterns and trends</li>
        <li>Identifying and fixing bugs</li>
        <li>Developing new features based on user needs</li>
        <li>Conducting A/B testing and experiments</li>
        <li>Performance optimization</li>
      </ul>

      <p className="mt-2 font-medium">Security Purposes:</p>
      <ul className="ml-5 list-disc">
        <li>Detecting and preventing fraud</li>
        <li>Identifying unauthorized access attempts</li>
        <li>Protecting against malware and abuse</li>
        <li>Maintaining system integrity</li>
        <li>Investigating security incidents</li>
      </ul>

      <h2 className="mt-6 text-xl font-semibold">
        5. DATA SHARING AND DISCLOSURE
      </h2>

      <h3 className="mt-4 text-lg font-medium">5.1 We DO NOT Sell Your Data</h3>
      <p className="font-semibold">
        PAACS Software Ltd does not sell, rent, or trade your personal data to
        third parties for their marketing purposes.
      </p>

      <h3 className="mt-4 text-lg font-medium">5.2 Authorized Sharing</h3>
      <p>We may share your data with:</p>

      <p className="mt-2 font-medium">Service Providers:</p>
      <ul className="ml-5 list-disc">
        <li>
          <strong>Supabase:</strong> Database and authentication services
          (US-based)
        </li>
        <li>
          <strong>Stripe/PayPal:</strong> Payment processing
        </li>
        <li>
          <strong>SendGrid:</strong> Email delivery
        </li>
        <li>
          <strong>AWS/Google Cloud:</strong> Cloud infrastructure
        </li>
        <li>
          <strong>Cloudflare:</strong> CDN and DDoS protection
        </li>
      </ul>

      <p className="mt-2 font-medium">Legal Requirements:</p>
      <ul className="ml-5 list-disc">
        <li>Law enforcement agencies with valid legal requests</li>
        <li>Courts or tribunals with proper jurisdiction</li>
        <li>Regulatory authorities for compliance</li>
        <li>To protect our legal rights or prevent harm</li>
      </ul>

      <p className="mt-2 font-medium">Business Transfers:</p>
      <ul className="ml-5 list-disc">
        <li>In case of merger, acquisition, or sale of assets</li>
        <li>During due diligence (under confidentiality agreements)</li>
        <li>To successor entities</li>
      </ul>

      <p className="mt-2 font-medium">With Your Consent:</p>
      <ul className="ml-5 list-disc">
        <li>When you explicitly agree to sharing</li>
        <li>For testimonials or case studies</li>
        <li>In community forums (public posts)</li>
      </ul>

      <h2 className="mt-6 text-xl font-semibold">6. DATA RETENTION</h2>

      <h3 className="mt-4 text-lg font-medium">6.1 Retention Periods</h3>
      <table className="mt-2 w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-50 dark:bg-gray-800">
            <th className="border border-gray-300 p-2 text-left">
              Data Category
            </th>
            <th className="border border-gray-300 p-2 text-left">
              Retention Period
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-300 p-2">Account information</td>
            <td className="border border-gray-300 p-2">
              Duration of account + 30 days
            </td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2">Payment records</td>
            <td className="border border-gray-300 p-2">
              7 years (legal requirement)
            </td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2">Support tickets</td>
            <td className="border border-gray-300 p-2">
              2 years after resolution
            </td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2">Usage analytics</td>
            <td className="border border-gray-300 p-2">26 months</td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2">Security logs</td>
            <td className="border border-gray-300 p-2">6 months</td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2">
              Marketing preferences
            </td>
            <td className="border border-gray-300 p-2">
              Until withdrawn + 3 years
            </td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2">User content</td>
            <td className="border border-gray-300 p-2">
              90 days after deletion request
            </td>
          </tr>
        </tbody>
      </table>

      <h3 className="mt-4 text-lg font-medium">6.2 Deletion Process</h3>
      <ul className="ml-5 list-disc">
        <li>Automated deletion after retention period expires</li>
        <li>Secure overwriting of deleted data</li>
        <li>Removal from backups within 90 days</li>
        <li>Anonymization where deletion not possible</li>
      </ul>

      <h2 className="mt-6 text-xl font-semibold">
        7. INTERNATIONAL DATA TRANSFERS
      </h2>

      <h3 className="mt-4 text-lg font-medium">7.1 Transfer Mechanisms</h3>
      <p>
        When we transfer data outside the UK/EEA, we ensure protection through:
      </p>
      <ul className="ml-5 mt-2 list-disc">
        <li>EU-approved Standard Contractual Clauses (SCCs)</li>
        <li>UK International Data Transfer Agreement (IDTA)</li>
        <li>Adequacy decisions (e.g., EU-US Data Privacy Framework)</li>
        <li>Your explicit consent for specific transfers</li>
      </ul>

      <h3 className="mt-4 text-lg font-medium">7.2 Primary Data Locations</h3>
      <ul className="ml-5 list-disc">
        <li>
          <strong>United Kingdom:</strong> Primary servers and backups
        </li>
        <li>
          <strong>European Union:</strong> CDN and edge servers
        </li>
        <li>
          <strong>United States:</strong> Supabase database, payment processing
        </li>
      </ul>

      <h2 className="mt-6 text-xl font-semibold">8. DATA SECURITY</h2>

      <h3 className="mt-4 text-lg font-medium">8.1 Technical Measures</h3>
      <ul className="ml-5 list-disc">
        <li>AES-256 encryption for data at rest</li>
        <li>TLS 1.3 for data in transit</li>
        <li>Bcrypt hashing for passwords</li>
        <li>Multi-factor authentication (MFA) available</li>
        <li>Regular security audits and penetration testing</li>
        <li>Intrusion detection and prevention systems</li>
        <li>DDoS protection via Cloudflare</li>
      </ul>

      <h3 className="mt-4 text-lg font-medium">8.2 Organizational Measures</h3>
      <ul className="ml-5 list-disc">
        <li>Access control on need-to-know basis</li>
        <li>Employee confidentiality agreements</li>
        <li>Regular security training</li>
        <li>Incident response procedures</li>
        <li>Vendor security assessments</li>
        <li>Data processing agreements with sub-processors</li>
      </ul>

      <h3 className="mt-4 text-lg font-medium">8.3 Breach Notification</h3>
      <p>In the event of a personal data breach, we will:</p>
      <ul className="ml-5 mt-2 list-disc">
        <li>Notify the ICO within 72 hours (if required)</li>
        <li>Inform affected users without undue delay</li>
        <li>Document the breach and our response</li>
        <li>Take measures to mitigate harm</li>
        <li>Review and improve security measures</li>
      </ul>

      <h2 className="mt-6 text-xl font-semibold">9. YOUR RIGHTS</h2>

      <h3 className="mt-4 text-lg font-medium">9.1 Rights Under GDPR</h3>
      <p>You have the right to:</p>
      <ul className="ml-5 mt-2 list-disc">
        <li>
          <strong>Access:</strong> Request a copy of your personal data
        </li>
        <li>
          <strong>Rectification:</strong> Correct inaccurate or incomplete data
        </li>
        <li>
          <strong>Erasure:</strong> Request deletion (&ldquo;right to be
          forgotten&rdquo;)
        </li>
        <li>
          <strong>Restriction:</strong> Limit processing of your data
        </li>
        <li>
          <strong>Portability:</strong> Receive your data in machine-readable
          format
        </li>
        <li>
          <strong>Object:</strong> Oppose certain processing activities
        </li>
        <li>
          <strong>Automated Decisions:</strong> Not be subject to solely
          automated decisions
        </li>
        <li>
          <strong>Withdraw Consent:</strong> Where processing is based on
          consent
        </li>
      </ul>

      <h3 className="mt-4 text-lg font-medium">9.2 Exercising Your Rights</h3>
      <p>To exercise your rights:</p>
      <ol className="ml-5 mt-2 list-decimal">
        <li>Email privacy@paacs.pro with your request</li>
        <li>Provide proof of identity</li>
        <li>Specify which right(s) you wish to exercise</li>
        <li>We will respond within 30 days</li>
        <li>Complex requests may take up to 90 days</li>
      </ol>

      <h3 className="mt-4 text-lg font-medium">
        9.3 California Privacy Rights (CCPA/CPRA)
      </h3>
      <p>California residents have additional rights to:</p>
      <ul className="ml-5 mt-2 list-disc">
        <li>Know what personal information is collected</li>
        <li>Know if information is sold or disclosed (we do not sell)</li>
        <li>Opt-out of sale (not applicable as we don&apos;t sell)</li>
        <li>Non-discrimination for exercising rights</li>
        <li>Limit use of sensitive personal information</li>
      </ul>

      <h2 className="mt-6 text-xl font-semibold">10. COOKIES AND TRACKING</h2>
      <p>
        We use cookies and similar technologies for functionality, analytics,
        and security. For detailed information, please see our{" "}
        <a href="/cookie-policy" className="underline">
          Cookie Policy
        </a>
        .
      </p>

      <h3 className="mt-4 text-lg font-medium">10.1 Managing Preferences</h3>
      <ul className="ml-5 list-disc">
        <li>Cookie banner on first visit</li>
        <li>Granular consent options</li>
        <li>Browser settings for cookie control</li>
        <li>Do Not Track signal respect (optional)</li>
      </ul>

      <h2 className="mt-6 text-xl font-semibold">
        11. CHILDREN&apos;S PRIVACY
      </h2>
      <p>
        Our services are not intended for children under 13 (or 16 in certain
        jurisdictions). We do not knowingly collect data from children. If we
        discover such collection, we will:
      </p>
      <ul className="ml-5 mt-2 list-disc">
        <li>Delete the data immediately</li>
        <li>Terminate any associated account</li>
        <li>Notify parents/guardians if possible</li>
      </ul>

      <p className="mt-3">
        Educational institutions using our software for students must:
      </p>
      <ul className="ml-5 list-disc">
        <li>Obtain parental consent where required</li>
        <li>Act as data controller for student data</li>
        <li>Ensure compliance with COPPA/FERPA (US) or equivalent</li>
      </ul>

      <h2 className="mt-6 text-xl font-semibold">
        12. AUTOMATED DECISION-MAKING
      </h2>
      <p>We use limited automated processing for:</p>
      <ul className="ml-5 mt-2 list-disc">
        <li>Fraud detection and prevention</li>
        <li>License compliance verification</li>
        <li>Service recommendations</li>
        <li>Content moderation in forums</li>
      </ul>
      <p className="mt-2">
        You have the right to request human review of automated decisions that
        significantly affect you.
      </p>

      <h2 className="mt-6 text-xl font-semibold">13. THIRD-PARTY LINKS</h2>
      <p>
        Our services may contain links to third-party websites. We are not
        responsible for their privacy practices. We encourage you to read their
        privacy policies before providing any data.
      </p>

      <h2 className="mt-6 text-xl font-semibold">14. CHANGES TO THIS POLICY</h2>

      <h3 className="mt-4 text-lg font-medium">14.1 Update Process</h3>
      <p>We may update this policy to reflect:</p>
      <ul className="ml-5 mt-2 list-disc">
        <li>Changes in our practices</li>
        <li>New legal requirements</li>
        <li>New features or services</li>
        <li>User feedback</li>
      </ul>

      <h3 className="mt-4 text-lg font-medium">14.2 Notification</h3>
      <p>For material changes, we will:</p>
      <ul className="ml-5 mt-2 list-disc">
        <li>Email registered users</li>
        <li>Display prominent website notice</li>
        <li>Request renewed consent where required</li>
        <li>Provide 30-day notice before changes take effect</li>
      </ul>

      <h2 className="mt-6 text-xl font-semibold">15. LEGAL COMPLIANCE</h2>
      <p>This policy is designed to comply with:</p>
      <ul className="ml-5 mt-2 list-disc">
        <li>UK General Data Protection Regulation (UK GDPR)</li>
        <li>EU General Data Protection Regulation (EU GDPR)</li>
        <li>Data Protection Act 2018 (UK)</li>
        <li>Privacy and Electronic Communications Regulations (PECR)</li>
        <li>California Consumer Privacy Act (CCPA/CPRA)</li>
        <li>Other applicable privacy laws</li>
      </ul>

      <h2 className="mt-6 text-xl font-semibold">16. CONTACT INFORMATION</h2>

      <h3 className="mt-4 text-lg font-medium">16.1 Data Protection Officer</h3>
      <div className="ml-5">
        <p>PAACS Software Ltd</p>
        <p>Attention: Data Protection Officer</p>
        <p>
          Email:{" "}
          <a href="mailto:privacy@paacs.pro" className="underline">
            privacy@paacs.pro
          </a>
        </p>
        <p>
          Alternative:{" "}
          <a href="mailto:dpo@paacs.pro" className="underline">
            dpo@paacs.pro
          </a>
        </p>
      </div>

      <h3 className="mt-4 text-lg font-medium">16.2 Supervisory Authority</h3>
      <p>You have the right to lodge a complaint with:</p>
      <div className="ml-5 mt-2">
        <p>
          <strong>UK Information Commissioner&apos;s Office (ICO)</strong>
        </p>
        <p>Wycliffe House, Water Lane, Wilmslow, Cheshire, SK9 5AF</p>
        <p>Phone: 0303 123 1113</p>
        <p>
          Website:{" "}
          <a href="https://ico.org.uk/" className="underline">
            ico.org.uk
          </a>
        </p>
      </div>

      <h3 className="mt-4 text-lg font-medium">16.3 EU Representative</h3>
      <p className="ml-5">[To be appointed if required]</p>

      <h2 className="mt-6 text-xl font-semibold">17. ACCESSIBILITY</h2>
      <p>
        If you need this Privacy Policy in an alternative format due to
        disability, please contact us at{" "}
        <a href="mailto:accessibility@paacs.pro" className="underline">
          accessibility@paacs.pro
        </a>
        .
      </p>

      <div className="mt-8 rounded-lg border-2 border-blue-300 bg-blue-50 p-4 dark:border-blue-600 dark:bg-blue-900/20">
        <p className="text-sm font-semibold">Your Privacy Matters</p>
        <p className="mt-2 text-sm">
          We are committed to protecting your privacy and handling your data
          responsibly. If you have any questions or concerns about our privacy
          practices, please don&apos;t hesitate to contact our Data Protection
          Officer.
        </p>
      </div>
    </div>
  );
}
