// src/app/privacy/page.tsx

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - Commitment to privacy & data collection practices,",
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
        Last updated: March 31, 2025
      </p>

      <p className="mt-2 text-xs italic text-gray-600 dark:text-gray-400">
        This policy is originally written in English. In case of discrepancies
        in translations, the English version shall prevail.
      </p>

      <p className="mt-4">
        PAACS Software Ltd (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or
        &ldquo;our&rdquo;) is committed to protecting your privacy. This Privacy
        Policy explains how we collect, use, store, and protect your information
        when you use our website, desktop software (Windows, macOS, Linux), and
        related services (&ldquo;Services&rdquo;).
      </p>

      <p className="mt-4">
        For details on how we use cookies, please see our{" "}
        <a href="/cookie-policy" className="underline">
          Cookie Policy
        </a>
        . By using our Services, you also agree to our{" "}
        <a href="/terms" className="underline">
          Terms and Conditions
        </a>{" "}
        and{" "}
        <a href="/eula" className="underline">
          End User License Agreement (EULA)
        </a>{" "}
        where applicable.
      </p>

      <h2 className="mt-6 text-xl font-semibold">Information We Collect</h2>
      <ul className="ml-5 list-disc">
        <li>
          Personal information you provide (e.g. name, email, affiliation when
          signing up, contacting us, or creating a profile)
        </li>
        <li>
          Technical information (e.g. browser type, IP address, operating
          system, device specs)
        </li>
        <li>
          Usage data (e.g. pages visited, downloads, actions within the
          software, time spent)
        </li>
        <li>
          License and activation data (e.g. license key usage, version
          installed, platform)
        </li>
        <li>
          Soon to be implemented – Telemetry or performance data from our
          applications (you will be able to opt out in-app)
        </li>
      </ul>

      <h2 className="mt-6 text-xl font-semibold">
        How We Use Your Information
      </h2>
      <ul className="ml-5 list-disc">
        <li>To provide, maintain, and improve our software and services</li>
        <li>To respond to inquiries and support requests</li>
        <li>To verify license status and manage feature access</li>
        <li>To send service updates (if opted in)</li>
        <li>To monitor usage, detect fraud, and improve user experience</li>
      </ul>

      <h2 className="mt-6 text-xl font-semibold">
        Legal Basis for Processing (GDPR)
      </h2>
      <p>
        We rely on the following legal bases when processing your personal data:
      </p>
      <ul className="ml-5 list-disc">
        <li>
          <strong>Consent</strong> – e.g., email communication, cookie use, or
          optional telemetry
        </li>
        <li>
          <strong>Contractual necessity</strong> – e.g., account access,
          licensing, support
        </li>
        <li>
          <strong>Legitimate interest</strong> – e.g., analytics, fraud
          prevention, service improvement
        </li>
        <li>
          <strong>Legal obligation</strong> – e.g., compliance with tax or data
          protection laws
        </li>
      </ul>

      <h2 className="mt-6 text-xl font-semibold">Cookies</h2>
      <p>
        We use cookies and similar technologies to operate our website and
        improve your experience. You may manage cookie preferences via our
        cookie banner or browser settings. For more details, see our{" "}
        <a href="/cookie-policy" className="underline">
          Cookie Policy
        </a>
        .
      </p>

      <h2 className="mt-6 text-xl font-semibold">Third-Party Services</h2>
      <p>
        We use third-party tools to deliver and secure our services, such as:
      </p>
      <ul className="ml-5 list-disc">
        <li>
          <strong>Google reCAPTCHA</strong> – protects against bots (
          <a href="https://policies.google.com/privacy" className="underline">
            Google Privacy Policy
          </a>{" "}
          and{" "}
          <a href="https://policies.google.com/terms" className="underline">
            Terms of Service
          </a>
          )
        </li>
        <li>
          <strong>Google Analytics</strong> – for non-identifiable behavior
          insights
        </li>
        <li>
          <strong>OAuth Providers</strong> – for login/signup (e.g., Google,
          GitHub)
        </li>
        <li>
          <strong>Supabase</strong> – manages account data and secure user
          storage (mainly US-hosted)
        </li>
      </ul>

      <h2 className="mt-6 text-xl font-semibold">Data Storage & Retention</h2>
      <p>
        We store account data on Supabase (primarily US-hosted). Personal data
        is retained only as long as necessary for service delivery, legal
        compliance, or user-requested deletion.
      </p>

      <h2 className="mt-6 text-xl font-semibold">
        International Data Transfers
      </h2>
      <p>
        Some data may be processed outside the UK/EU via trusted third-party
        tools. We implement safeguards such as Standard Contractual Clauses
        where required.
      </p>

      <h2 className="mt-6 text-xl font-semibold">Children’s Privacy</h2>
      <p>
        Our services are not designed for users under 13 (or under 16 if
        required by law). We do not knowingly collect data from minors. If you
        believe we have, please contact us.
      </p>

      <h2 className="mt-6 text-xl font-semibold">Your Rights</h2>
      <ul className="ml-5 list-disc">
        <li>Access your stored personal data</li>
        <li>Request correction or deletion</li>
        <li>Withdraw consent (e.g., cookies, communications)</li>
        <li>Request data export or restrict certain processing</li>
        <li>File a complaint with a local data protection authority</li>
      </ul>

      <h2 className="mt-6 text-xl font-semibold">Data Breach Notification</h2>
      <p>
        In the event of a breach affecting your rights or freedoms, we will
        inform you promptly and comply with legal reporting obligations.
      </p>

      <h2 className="mt-6 text-xl font-semibold">Data Security</h2>
      <p>
        We use appropriate technical and organizational safeguards (e.g.,
        encryption, role-based access, active monitoring). However, no system is
        100% secure, so we encourage good password practices and logging out on
        shared devices.
      </p>

      <h2 className="mt-6 text-xl font-semibold">
        US Privacy (California, Virginia, etc.)
      </h2>
      <p>
        If you are a resident of California or other US states with privacy
        laws, you may have the right to access, delete, or opt-out of the sale
        of your data (we do not sell data). Requests can be sent via email.
      </p>

      <h2 className="mt-6 text-xl font-semibold">Policy Updates</h2>
      <p>
        We may update this Privacy Policy from time to time. We will post
        changes here and, if significant, notify you via email or dashboard.
        Continued use after changes indicates acceptance.
      </p>

      <h2 className="mt-6 text-xl font-semibold">Accessibility</h2>
      <p>
        If you require this policy in another format or need accessibility
        accommodations, please reach out to us.
      </p>

      <h2 className="mt-6 text-xl font-semibold">Contact</h2>
      <p>
        For questions or concerns about your data, email{" "}
        <a href="mailto:support@paacs.pro" className="underline">
          support@paacs.pro
        </a>
        .
      </p>
    </div>
  );
}
