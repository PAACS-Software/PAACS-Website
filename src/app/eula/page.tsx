// src/app/eula/page.tsx

import Link from "next/link";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "End User License Agreement (EULA)",
  description:
    "Read the PAACS End User License Agreement (EULA) covering usage rights, restrictions, intellectual property, and legal responsibilities for all users.",
  alternates: {
    canonical: "https://paacs.pro/eula",
  },
};

export default function EULA() {
  return (
    <div className="mx-auto mt-[10vh] max-w-4xl px-4 py-12 text-sm leading-relaxed text-gray-800 dark:text-gray-200">
      <h1 className="mb-6 text-3xl font-bold">
        End User License Agreement (EULA)
      </h1>

      <p className="mt-2 text-xs italic text-gray-600 dark:text-gray-400">
        Last updated: Macrh 31, 2025
      </p>

      <p className="mt-2 text-xs italic text-gray-600 dark:text-gray-400">
        This EULA is originally drafted in English. In case of conflicting
        translations, the English text shall control.
      </p>

      <p className="mt-4">
        This End User License Agreement (&ldquo;EULA&rdquo;) is a legal
        agreement between you (the &ldquo;User&rdquo;) and PAACS Software Ltd
        (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) for the use
        of our software, documentation, and related materials (collectively, the
        &ldquo;Software&rdquo;). By installing, copying, or otherwise using the
        Software, you agree to be bound by this EULA.
      </p>

      <p className="mt-4">
        If you have not done so, please also review our{" "}
        <Link href="/terms" className="underline">
          Terms and Conditions
        </Link>{" "}
        and{" "}
        <Link href="/privacy" className="underline">
          Privacy Policy
        </Link>
        . These documents apply to your overall use of our Services, including
        the Software.
      </p>

      {/* 1. License Grant */}
      <h2 className="mt-6 text-xl font-semibold">1. License Grant</h2>
      <ul className="ml-5 list-disc">
        <li>
          We grant you a non-exclusive, non-transferable, revocable license to
          install and use the Software in accordance with this EULA.
        </li>
        <li>
          All usage is also subject to our{" "}
          <Link href="/license" className="underline">
            Licensing Information
          </Link>{" "}
          page, which outlines Non-Commercial vs. Commercial usage.
        </li>
      </ul>

      {/* 2. License Types */}
      <h2 className="mt-6 text-xl font-semibold">2. License Types</h2>
      <ul className="ml-5 list-disc">
        <li>
          <strong>Non-Commercial License:</strong> Free for personal,
          educational, and academic use. No commercial or revenue-generating
          activities allowed.
        </li>
        <li>
          <strong>Commercial License:</strong> Required for any business-related
          or profit-driven activity, with added support and premium features.
        </li>
        <li>
          <strong>Beta Access (0.9.x):</strong> Currently, all commercial
          features are free to everyone, but this EULA still governs usage.
        </li>
      </ul>

      {/* 3. Prohibited Actions */}
      <h2 className="mt-6 text-xl font-semibold">3. Prohibited Actions</h2>
      <ul className="ml-5 list-disc">
        <li>
          Reverse engineering, decompiling, or disassembling the Software.
        </li>
        <li>Removing or obscuring any proprietary notices or branding.</li>
        <li>Renting, leasing, sublicensing, or selling the Software.</li>
        <li>Bypassing or disabling license checks or activation mechanisms.</li>
      </ul>

      {/* 4. Ownership & Intellectual Property */}
      <h2 className="mt-6 text-xl font-semibold">
        4. Ownership & Intellectual Property
      </h2>
      <p>
        The Software is licensed, not sold. All rights, title, and interest
        (including intellectual property rights) remain with PAACS Software Ltd
        or its licensors. No rights are granted except as expressly set forth
        here.
      </p>

      {/* 5. Updates & Upgrades */}
      <h2 className="mt-6 text-xl font-semibold">5. Updates & Upgrades</h2>
      <ul className="ml-5 list-disc">
        <li>
          We may provide patches, updates, or new releases at our discretion.
        </li>
        <li>
          Additional terms may apply to updated versions. Continued use implies
          acceptance of those terms.
        </li>
      </ul>

      {/* 6. License Activation & Verification */}
      <h2 className="mt-6 text-xl font-semibold">
        6. License Activation & Verification
      </h2>
      <ul className="ml-5 list-disc">
        <li>
          Activation may require an account or valid license key. Each license
          is generally tied to one user or machine, unless otherwise agreed.
        </li>
        <li>
          Automated checks may validate license compliance. Non-compliance may
          lead to suspension or revocation of the license.
        </li>
      </ul>

      {/* 7. Consent to Data Collection */}
      <h2 className="mt-6 text-xl font-semibold">
        7. Consent to Data Collection
      </h2>
      <p>
        By using the Software, you consent to limited data collection for
        authentication, usage analytics, and support, consistent with our{" "}
        <Link href="/privacy" className="underline">
          Privacy Policy
        </Link>
        .
      </p>

      {/* 8. Warranty Disclaimer */}
      <h2 className="mt-6 text-xl font-semibold">8. Warranty Disclaimer</h2>
      <ul className="ml-5 list-disc">
        <li>
          The Software is provided &ldquo;as is&rdquo; without any warranty of
          any kind.
        </li>
        <li>
          We disclaim all implied warranties, including merchantability, fitness
          for a particular purpose, and non-infringement.
        </li>
        <li>
          You bear all risk associated with the use or performance of the
          Software.
        </li>
      </ul>

      {/* 9. Limitation of Liability */}
      <h2 className="mt-6 text-xl font-semibold">9. Limitation of Liability</h2>
      <ul className="ml-5 list-disc">
        <li>
          To the maximum extent permitted by law, PAACS Software Ltd will not be
          liable for indirect, incidental, or consequential damages (including
          loss of profits, data, or business) arising out of the use of the
          Software.
        </li>
        <li>
          If liability cannot be fully excluded, it is limited to the amount you
          paid for the license (if any).
        </li>
      </ul>

      {/* 10. Indemnification */}
      <h2 className="mt-6 text-xl font-semibold">10. Indemnification</h2>
      <p>
        You agree to indemnify and hold harmless PAACS Software Ltd and its
        affiliates from any claims or damages arising from your breach of this
        EULA or unlawful use of the Software.
      </p>

      {/* 11. Export Compliance */}
      <h2 className="mt-6 text-xl font-semibold">11. Export Compliance</h2>
      <p>
        The Software may be subject to export controls. You agree not to export
        or re-export the Software in violation of applicable laws, including
        those of the UK, US, or EU.
      </p>

      {/* 12. Termination */}
      <h2 className="mt-6 text-xl font-semibold">12. Termination</h2>
      <ul className="ml-5 list-disc">
        <li>This EULA is effective until terminated.</li>
        <li>
          We may terminate your license if you fail to comply with any term of
          this EULA.
        </li>
        <li>
          Upon termination, you must cease use and delete all copies of the
          Software.
        </li>
      </ul>

      {/* 13. Governing Law & Jurisdiction */}
      <h2 className="mt-6 text-xl font-semibold">
        13. Governing Law & Jurisdiction
      </h2>
      <p>
        This EULA shall be governed by the laws of the United Kingdom. Disputes
        shall be resolved exclusively in the courts of England and Wales.
      </p>

      {/* 14. Entire Agreement */}
      <h2 className="mt-6 text-xl font-semibold">14. Entire Agreement</h2>
      <p>
        This EULA, together with our{" "}
        <Link href="/license" className="underline">
          Licensing Information
        </Link>
        ,{" "}
        <Link href="/terms" className="underline">
          Terms &amp; Conditions
        </Link>
        , and{" "}
        <Link href="/privacy" className="underline">
          Privacy Policy
        </Link>{" "}
        constitutes the entire agreement regarding the Software.
      </p>

      {/* 15. Severability */}
      <h2 className="mt-6 text-xl font-semibold">15. Severability</h2>
      <p>
        If any provision of this EULA is found invalid or unenforceable, the
        remaining provisions shall remain in full force and effect.
      </p>

      {/* 16. Contact */}
      <h2 className="mt-6 text-xl font-semibold">16. Contact</h2>
      <p>
        For questions related to this EULA, reach us at{" "}
        <a href="mailto:legal@paacs.pro" className="underline">
          legal@paacs.pro
        </a>
        . Note that software support is currently community-based with no
        guaranteed response times.
      </p>
    </div>
  );
}
