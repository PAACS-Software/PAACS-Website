import Link from "next/link";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions - PAACS Software",
  description:
    "Terms of service for PAACS Software usage. Legal terms, acceptable use policy, and user responsibilities for our simulation platform.",
  alternates: {
    canonical: "https://paacs.pro/terms",
  },
  openGraph: {
    url: "https://paacs.pro/terms",
  },
};

export default function TermsAndConditions() {
  return (
    <div className="mx-auto mt-[10vh] max-w-4xl px-4 py-12 text-sm leading-relaxed text-gray-800 dark:text-gray-200">
      <h1 className="mb-6 text-3xl font-bold">Terms and Conditions</h1>

      <p className="mt-2 text-xs italic text-gray-600 dark:text-gray-400">
        Last updated: March 31, 2025
      </p>

      <p className="mt-2 text-xs italic text-gray-600 dark:text-gray-400">
        This document is originally written in English. In case of discrepancies
        in translations, the English version shall prevail.
      </p>

      <p className="mt-4">
        These Terms and Conditions (&ldquo;Terms&rdquo;) govern your access to
        and use of PAACS Software Ltd’s (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or
        &ldquo;our&rdquo;) website, simulation software
        (&ldquo;Software&rdquo;), and related services (together, the
        &ldquo;Services&rdquo;). By using our Services, you agree to be bound by
        these Terms.
      </p>

      <p className="mt-4">
        For additional details on licensing for our Software, please see our{" "}
        <Link href="/license" className="underline">
          Licensing Information
        </Link>{" "}
        page. If you install or otherwise use our Software, you are also bound
        by our{" "}
        <Link href="/eula" className="underline">
          End User License Agreement (EULA)
        </Link>
        .
      </p>

      <h2 className="mt-6 text-xl font-semibold">1. Eligibility</h2>
      <ul className="ml-5 list-disc">
        <li>You must be at least 13 years old to use our Services.</li>
        <li>
          If you are under 16, you may need parental consent depending on your
          jurisdiction.
        </li>
      </ul>

      <h2 className="mt-6 text-xl font-semibold">2. License and Ownership</h2>
      <ul className="ml-5 list-disc">
        <li>
          We grant you a limited, non-exclusive, non-transferable, revocable
          license to use our Software solely in accordance with these Terms and
          any applicable license agreement.
        </li>
        <li>
          All intellectual property rights remain with PAACS Software Ltd.
        </li>
      </ul>

      <h2 className="mt-6 text-xl font-semibold">3. Acceptable Use</h2>
      <ul className="ml-5 list-disc">
        <li>
          You agree not to use our Services in any way that is illegal, harmful,
          or interferes with others&rsquo use.
        </li>
        <li>
          You may not reverse engineer, decompile, modify, or attempt to derive
          the source code of the Software.
        </li>
      </ul>

      <h2 className="mt-6 text-xl font-semibold">4. Accounts and Profiles</h2>
      <ul className="ml-5 list-disc">
        <li>
          You are responsible for maintaining the confidentiality of your login
          credentials.
        </li>
        <li>You agree to provide accurate and up-to-date information.</li>
        <li>You are responsible for all activity under your account.</li>
      </ul>

      <h2 className="mt-6 text-xl font-semibold">5. Software Updates</h2>
      <p>
        We may release updates, patches, or new versions. These Terms will apply
        to any updates unless they are accompanied by new terms.
      </p>

      <h2 className="mt-6 text-xl font-semibold">6. Beta Features</h2>
      <p>
        Some features may be labeled as experimental or beta. These features may
        be incomplete, buggy, or subject to change without notice and are
        provided &ldquo;as-is&rdquo; without guarantees of stability or
        performance.
      </p>

      <h2 className="mt-6 text-xl font-semibold">7. Privacy</h2>
      <p>
        By using our Services, you acknowledge and agree to our{" "}
        <Link href="/privacy" className="underline">
          Privacy Policy
        </Link>
        . This includes how we process personal data collected through cookies
        or account usage.
      </p>

      <h2 className="mt-6 text-xl font-semibold">8. No Warranty</h2>
      <ul className="ml-5 list-disc">
        <li>
          Our Services are provided &ldquo;as-is&rdquo; and
          &ldquo;as-available&rdquo; without warranties of any kind, express or
          implied.
        </li>
        <li>
          This includes, but is not limited to, warranties of merchantability,
          fitness for a particular purpose, or non-infringement.
        </li>
        <li>
          We do not guarantee the accuracy, reliability, or availability of the
          Services.
        </li>
      </ul>

      <h2 className="mt-6 text-xl font-semibold">9. Limitation of Liability</h2>
      <ul className="ml-5 list-disc">
        <li>
          We are not liable for indirect, incidental, consequential, or special
          damages.
        </li>
        <li>
          This includes loss of data, profits, or business, arising from the use
          or inability to use our Services.
        </li>
      </ul>

      <h2 className="mt-6 text-xl font-semibold">10. Indemnification</h2>
      <p>
        You agree to indemnify and hold us harmless from any claims, damages,
        liabilities, and expenses arising from your use of the Services or
        violation of these Terms.
      </p>

      <h2 className="mt-6 text-xl font-semibold">11. Export Controls</h2>
      <p>
        You agree to comply with all applicable export laws and regulations,
        including those of the UK, US, and EU.
      </p>

      <h2 className="mt-6 text-xl font-semibold">12. Changes to Terms</h2>
      <p>
        We may modify these Terms at any time. Material changes will be notified
        via our website or user dashboard. Continued use after changes means
        acceptance of the new Terms.
      </p>

      <h2 className="mt-6 text-xl font-semibold">13. Termination</h2>
      <ul className="ml-5 list-disc">
        <li>
          We reserve the right to suspend or terminate your access to the
          Services at any time.
        </li>
        <li>
          Reasons include, but are not limited to, violation of these Terms or
          misuse of our Services.
        </li>
      </ul>

      <h2 className="mt-6 text-xl font-semibold">
        14. Feedback and Submissions
      </h2>
      <p>
        Any feedback, suggestions, or ideas you submit become our property and
        may be used without restriction or compensation.
      </p>

      <h2 className="mt-6 text-xl font-semibold">15. Entire Agreement</h2>
      <p>
        These Terms, along with our{" "}
        <Link href="/privacy" className="underline">
          Privacy Policy
        </Link>{" "}
        and any license agreements (including the{" "}
        <Link href="/eula" className="underline">
          EULA
        </Link>
        ), represent the entire agreement between you and PAACS Software Ltd.
      </p>

      <h2 className="mt-6 text-xl font-semibold">16. Severability</h2>
      <p>
        If any provision is deemed invalid or unenforceable, the remainder will
        remain in full force and effect.
      </p>

      <h2 className="mt-6 text-xl font-semibold">17. Governing Law</h2>
      <p>
        These Terms are governed by the laws of England and Wales. Disputes will
        be resolved in the courts of the United Kingdom.
      </p>

      <h2 className="mt-6 text-xl font-semibold">18. Contact</h2>
      <p>
        If you have any questions, contact us at{" "}
        <a href="mailto:support@paacs.pro" className="underline">
          support@paacs.pro
        </a>
        . Please note that support for the software is community-based at this
        stage, with no guaranteed response times.
      </p>
    </div>
  );
}
