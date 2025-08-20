// src/app/license/page.tsx

import Link from "next/link";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "PAACS Software Licensing - Academic & Commercial Options",
  description:
    "Understand PAACS Software licensing options. Free for academic research, competitive commercial licensing. Compare features and choose your plan.",
  alternates: {
    canonical: "https://paacs.pro/license",
  },
};

export default function Licenses() {
  return (
    <div className="mx-auto mt-[10vh] max-w-4xl px-4 py-12 text-sm leading-relaxed text-gray-800 dark:text-gray-200">
      <h1 className="mb-6 text-3xl font-bold">Licensing Information</h1>

      <p className="mt-2 text-xs italic text-gray-600 dark:text-gray-400">
        Last updated: March 31, 2025
      </p>

      <p className="mt-2 text-xs italic text-gray-600 dark:text-gray-400">
        This document is originally written in English. In case of any conflict
        in translations, the English version shall prevail.
      </p>

      <p className="mt-4 font-semibold text-red-600 dark:text-red-400">
        ⚠️ Note: As of version 0.9.x (beta), all users have free access to
        commercial features. However, all users are still bound by our{" "}
        <Link href="/eula" className="underline">
          End User License Agreement (EULA)
        </Link>
        . Once version 1.0 is released, the licensing structure outlined below
        will take full effect.
      </p>

      <p className="mt-4">
        PAACS Software is available under both a non-commercial license for
        personal, educational, and research use, as well as a commercial license
        for businesses and organizations.
      </p>

      <p className="mt-2">
        For full legal terms, please see our{" "}
        <Link href="/eula" className="underline">
          End User License Agreement (EULA)
        </Link>{" "}
        and{" "}
        <Link href="/terms" className="underline">
          Terms &amp; Conditions
        </Link>
        .
      </p>

      {/* Non-Commercial License */}
      <h2 className="mt-6 text-xl font-semibold">
        Non-Commercial License (Free)
      </h2>
      <ul className="ml-5 list-disc">
        <li>Free for students, educators, and researchers.</li>
        <li>
          Permitted for personal projects, education, and academic publications.
        </li>
        <li>
          No commercial use, redistribution, or integration in proprietary
          software allowed.
        </li>
        <li>Support is community-based (no guaranteed response times).</li>
      </ul>

      <p className="mt-4">
        You may be asked to verify your non-commercial status when activating
        your license.
      </p>

      {/* Commercial License */}
      <h2 className="mt-6 text-xl font-semibold">Commercial License (Paid)</h2>
      <ul className="ml-5 list-disc">
        <li>
          Intended for businesses, organizations, and for-profit or revenue-
          generating activities.
        </li>
        <li>
          Includes access to premium features and email support (still primarily
          community-driven).
        </li>
        <li>
          One license per active user or machine (unless otherwise agreed).
        </li>
        <li>
          Available as subscription or perpetual license, depending on plan.
        </li>
      </ul>

      <p className="mt-4">
        For commercial licensing inquiries, contact{" "}
        <a href="mailto:licensing@paacs.pro" className="underline">
          licensing@paacs.pro
        </a>{" "}
        or visit your{" "}
        <Link href="/profile" className="underline">
          profile page
        </Link>{" "}
        to activate a key.
      </p>

      {/* License Activation */}
      <h2 className="mt-6 text-xl font-semibold">License Activation</h2>
      <p>
        Licenses can be activated via your account dashboard. Each license is
        tied to your account and may be revoked if terms are violated.
        Commercial license features may be automatically disabled or restricted
        if unauthorized use is detected.
      </p>

      {/* Violations */}
      <h2 className="mt-6 text-xl font-semibold">Violations</h2>
      <ul className="ml-5 list-disc">
        <li>
          Misuse of the free license for commercial purposes is a violation of
          our terms.
        </li>
        <li>
          Reverse engineering, tampering with the software, or bypassing license
          checks is strictly prohibited.
        </li>
        <li>
          Automated checks may detect unauthorized usage; violators may have
          access revoked or face legal action.
        </li>
        <li>
          See our{" "}
          <Link href="/eula" className="underline">
            EULA
          </Link>{" "}
          and{" "}
          <Link href="/terms" className="underline">
            Terms &amp; Conditions
          </Link>{" "}
          for further details.
        </li>
      </ul>

      {/* Disclaimer */}
      <h2 className="mt-6 text-xl font-semibold">Disclaimer</h2>
      <ul className="ml-5 list-disc">
        <li>The software is provided “as-is,” with no warranties.</li>
        <li>
          We disclaim all implied warranties, including merchantability and
          fitness for a particular purpose.
        </li>
        <li>
          You assume all risk when using the software, including for business
          decisions.
        </li>
      </ul>

      {/* Export Compliance */}
      <h2 className="mt-6 text-xl font-semibold">Export Compliance</h2>
      <p>
        You agree not to use or export the software in violation of any export
        regulations of the UK, EU, US, or other applicable jurisdictions.
      </p>

      {/* Governing Law */}
      <h2 className="mt-6 text-xl font-semibold">Governing Law</h2>
      <p>
        This license is governed by the laws of the United Kingdom. Disputes
        arising from its enforcement or interpretation shall be subject to the
        exclusive jurisdiction of courts in England and Wales.
      </p>

      {/* Contact */}
      <h2 className="mt-6 text-xl font-semibold">Contact</h2>
      <p>
        Questions about licensing? Contact{" "}
        <a href="mailto:support@paacs.pro" className="underline">
          support@paacs.pro
        </a>
        .
      </p>
    </div>
  );
}
