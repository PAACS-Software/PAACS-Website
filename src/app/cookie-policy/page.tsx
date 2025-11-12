// src/app/cookie-policy/page.tsx

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy - How PAACS Software Uses Cookies",
  description:
    "Understand how PAACS Software Ltd uses cookies, including Google Analytics and reCAPTCHA, and your rights regarding cookie usage and preferences.",
  alternates: {
    canonical: "https://paacs.pro/cookie-policy",
  },
};

export default function CookiePolicy() {
  return (
    <div className="mx-auto mt-[10vh] max-w-4xl px-4 py-12 text-sm leading-relaxed text-gray-800 dark:text-gray-200">
      <h1 className="mb-6 text-3xl font-bold">Cookie Policy</h1>

      <p className="mt-2 text-xs italic text-gray-600 dark:text-gray-400">
        Effective Date: November 1, 2025
      </p>
      <p className="mt-1 text-xs italic text-gray-600 dark:text-gray-400">
        Last Updated: November 1, 2025
      </p>
      <p className="mt-1 text-xs italic text-gray-600 dark:text-gray-400">
        Version: 1.0.0
      </p>

      <div className="mt-4 rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20">
        <p className="text-sm font-medium">
          This Cookie Policy is legally binding and forms part of our website
          terms of use. By continuing to use our website, you consent to our use
          of cookies as described herein.
        </p>
      </div>

      <h2 className="mt-6 text-xl font-semibold">1. Introduction</h2>
      <p>
        PAACS Software Ltd (&ldquo;PAACS&rdquo;, &ldquo;we&rdquo;,
        &ldquo;us&rdquo;, or &ldquo;our&rdquo;), a company registered in England
        and Wales, uses cookies and similar tracking technologies on our website
        located at https://paacs.pro and all subdomains (the
        &ldquo;Website&rdquo;). This Cookie Policy explains what cookies are,
        how we use them, and your rights and choices regarding their use.
      </p>
      <p className="mt-2">
        This Policy should be read in conjunction with our{" "}
        <a href="/privacy" className="underline">
          Privacy Policy
        </a>
        , which provides additional information about how we collect, use, and
        protect your personal data.
      </p>

      <h2 className="mt-6 text-xl font-semibold">2. What Are Cookies?</h2>
      <p>
        Cookies are small text files consisting of letters and numbers that are
        placed on your computer, mobile device, or other equipment when you
        access our Website. The web server sends cookies to your browser, which
        stores them and sends them back to the server each time you visit our
        Website.
      </p>
      <p className="mt-2">
        Cookies enable websites to recognize your device and remember
        information about your visit, such as your preferred settings, login
        status, and browsing behavior. They cannot harm your computer, spread
        viruses, or access personal information stored on your hard drive.
      </p>

      <h2 className="mt-6 text-xl font-semibold">
        3. Categories of Cookies We Use
      </h2>

      <h3 className="mt-4 text-lg font-medium">
        3.1 Strictly Necessary Cookies
      </h3>
      <ul className="ml-5 list-disc">
        <li>
          <strong>Purpose:</strong> Essential for website operation and security
        </li>
        <li>
          <strong>Function:</strong> Enable core functionality including user
          authentication, session management, security features, and load
          balancing
        </li>
        <li>
          <strong>Examples:</strong> Session ID cookies, authentication tokens,
          CSRF protection cookies
        </li>
        <li>
          <strong>Retention:</strong> Session duration or up to 24 hours
        </li>
        <li>
          <strong>Legal Basis:</strong> Legitimate interests (Article 6(1)(f)
          GDPR)
        </li>
      </ul>

      <h3 className="mt-4 text-lg font-medium">
        3.2 Performance/Analytics Cookies
      </h3>
      <ul className="ml-5 list-disc">
        <li>
          <strong>Purpose:</strong> Collect aggregated information about website
          usage
        </li>
        <li>
          <strong>Function:</strong> Help us understand visitor behavior,
          identify technical issues, and improve website performance
        </li>
        <li>
          <strong>Provider:</strong> Google Analytics (GA4)
        </li>
        <li>
          <strong>Data Collected:</strong> Page views, session duration, bounce
          rates, traffic sources, anonymized IP addresses
        </li>
        <li>
          <strong>Retention:</strong> Up to 26 months
        </li>
        <li>
          <strong>Legal Basis:</strong> Consent (Article 6(1)(a) GDPR)
        </li>
      </ul>

      <h3 className="mt-4 text-lg font-medium">3.3 Functionality Cookies</h3>
      <ul className="ml-5 list-disc">
        <li>
          <strong>Purpose:</strong> Remember your preferences and choices
        </li>
        <li>
          <strong>Function:</strong> Store settings such as language preference,
          theme selection (light/dark mode), cookie consent status
        </li>
        <li>
          <strong>Retention:</strong> Up to 12 months
        </li>
        <li>
          <strong>Legal Basis:</strong> Consent (Article 6(1)(a) GDPR)
        </li>
      </ul>

      <h3 className="mt-4 text-lg font-medium">3.4 Security Cookies</h3>
      <ul className="ml-5 list-disc">
        <li>
          <strong>Purpose:</strong> Protect against automated abuse and spam
        </li>
        <li>
          <strong>Provider:</strong> Google reCAPTCHA v3
        </li>
        <li>
          <strong>Function:</strong> Distinguish between human users and bots
        </li>
        <li>
          <strong>Data Processing:</strong> Subject to{" "}
          <a href="https://policies.google.com/privacy" className="underline">
            Google&apos;s Privacy Policy
          </a>{" "}
          and{" "}
          <a href="https://policies.google.com/terms" className="underline">
            Terms of Service
          </a>
        </li>
        <li>
          <strong>Retention:</strong> Up to 6 months
        </li>
        <li>
          <strong>Legal Basis:</strong> Legitimate interests (Article 6(1)(f)
          GDPR)
        </li>
      </ul>

      <h2 className="mt-6 text-xl font-semibold">4. Third-Party Cookies</h2>
      <p>
        We use services from trusted third-party providers that may set their
        own cookies:
      </p>
      <ul className="ml-5 mt-2 list-disc">
        <li>
          <strong>Google Analytics:</strong> For website analytics.{" "}
          <a
            href="https://policies.google.com/technologies/cookies"
            className="underline"
          >
            Google&apos;s Cookie Policy
          </a>
        </li>
        <li>
          <strong>Google reCAPTCHA:</strong> For security and spam prevention.{" "}
          <a href="https://policies.google.com/privacy" className="underline">
            Google Privacy Policy
          </a>
        </li>
        <li>
          <strong>OAuth Providers:</strong> When you choose to authenticate
          using GitHub or Google, these providers may set cookies for
          authentication purposes
        </li>
        <li>
          <strong>Cloudflare:</strong> For content delivery and DDoS protection.{" "}
          <a
            href="https://www.cloudflare.com/cookie-policy/"
            className="underline"
          >
            Cloudflare Cookie Policy
          </a>
        </li>
      </ul>

      <h2 className="mt-6 text-xl font-semibold">
        5. Cookie Management and Your Rights
      </h2>

      <h3 className="mt-4 text-lg font-medium">5.1 Cookie Consent</h3>
      <p>
        Upon your first visit to our Website, you will be presented with a
        cookie banner that allows you to:
      </p>
      <ul className="ml-5 mt-2 list-disc">
        <li>Accept all cookies</li>
        <li>Reject non-essential cookies</li>
        <li>Customize your cookie preferences by category</li>
      </ul>
      <p className="mt-2">
        Your preferences are stored for 12 months, after which you will be asked
        to confirm them again.
      </p>

      <h3 className="mt-4 text-lg font-medium">5.2 Browser Controls</h3>
      <p>
        Most web browsers allow you to control cookies through their settings.
        You can:
      </p>
      <ul className="ml-5 mt-2 list-disc">
        <li>View what cookies are stored on your device</li>
        <li>Delete cookies individually or entirely</li>
        <li>Block third-party cookies</li>
        <li>Block all cookies from specific websites</li>
        <li>Block all cookies from being set</li>
        <li>Enable &quot;Do Not Track&quot; signals</li>
      </ul>

      <h3 className="mt-4 text-lg font-medium">
        5.3 Impact of Disabling Cookies
      </h3>
      <p className="font-medium">
        Please note that disabling certain cookies may impact your use of our
        Website:
      </p>
      <ul className="ml-5 mt-2 list-disc">
        <li>
          <strong>Strictly Necessary Cookies:</strong> Disabling these will
          prevent you from accessing secure areas, maintaining login sessions,
          or using core functionality
        </li>
        <li>
          <strong>Performance Cookies:</strong> We will be unable to gather
          analytics to improve our services
        </li>
        <li>
          <strong>Functionality Cookies:</strong> Your preferences will not be
          remembered between visits
        </li>
      </ul>

      <h2 className="mt-6 text-xl font-semibold">
        6. Data Protection and Security
      </h2>
      <p>
        We implement appropriate technical and organizational measures to
        protect cookie data:
      </p>
      <ul className="ml-5 mt-2 list-disc">
        <li>All cookies containing sensitive data are encrypted</li>
        <li>Secure flags are set on all authentication cookies</li>
        <li>
          HttpOnly flags prevent client-side script access where appropriate
        </li>
        <li>SameSite attributes protect against CSRF attacks</li>
        <li>Regular security audits and updates</li>
      </ul>

      <h2 className="mt-6 text-xl font-semibold">
        7. International Data Transfers
      </h2>
      <p>
        Some of our third-party cookie providers process data outside the
        European Economic Area (EEA) and United Kingdom. Where this occurs, we
        ensure appropriate safeguards are in place, such as:
      </p>
      <ul className="ml-5 mt-2 list-disc">
        <li>EU-approved Standard Contractual Clauses</li>
        <li>Adequacy decisions by the European Commission</li>
        <li>Privacy Shield certification (where applicable)</li>
      </ul>

      <h2 className="mt-6 text-xl font-semibold">8. Children&apos;s Privacy</h2>
      <p>
        Our Website is not intended for children under 13 years of age. We do
        not knowingly collect personal information from children under 13
        through cookies. If you believe we have inadvertently collected such
        information, please contact us immediately.
      </p>

      <h2 className="mt-6 text-xl font-semibold">9. Updates to This Policy</h2>
      <p>
        We reserve the right to update this Cookie Policy at any time to reflect
        changes in our practices, technologies, legal requirements, or for other
        operational reasons. Updates will be posted on this page with a revised
        &quot;Last Updated&quot; date. Material changes will be communicated
        through:
      </p>
      <ul className="ml-5 mt-2 list-disc">
        <li>A prominent notice on our Website</li>
        <li>Email notification to registered users (where applicable)</li>
        <li>A renewed request for cookie consent</li>
      </ul>

      <h2 className="mt-6 text-xl font-semibold">10. Contact Information</h2>
      <p>
        For questions, concerns, or requests regarding this Cookie Policy or our
        use of cookies, please contact us:
      </p>
      <div className="ml-5 mt-2">
        <p>
          <strong>PAACS Software Ltd</strong>
        </p>
        <p>Data Protection Officer</p>
        <p>
          Email:{" "}
          <a href="mailto:privacy@paacs.pro" className="underline">
            privacy@paacs.pro
          </a>
        </p>
        <p>
          Alternative:{" "}
          <a href="mailto:support@paacs.pro" className="underline">
            support@paacs.pro
          </a>
        </p>
      </div>

      <h2 className="mt-6 text-xl font-semibold">11. Regulatory Information</h2>
      <p>
        You have the right to lodge a complaint with a supervisory authority if
        you believe our use of cookies infringes applicable data protection
        laws:
      </p>
      <div className="ml-5 mt-2">
        <p>
          <strong>UK Information Commissioner&apos;s Office (ICO)</strong>
        </p>
        <p>
          Website:{" "}
          <a href="https://ico.org.uk/" className="underline">
            ico.org.uk
          </a>
        </p>
        <p>Phone: 0303 123 1113</p>
      </div>
    </div>
  );
}
