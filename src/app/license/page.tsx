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
        Effective Date: November 1, 2025
      </p>
      <p className="mt-1 text-xs italic text-gray-600 dark:text-gray-400">
        Last Updated: November 1, 2025
      </p>
      <p className="mt-1 text-xs italic text-gray-600 dark:text-gray-400">
        Version: 1.0.0
      </p>
      <p className="mt-1 text-xs italic text-gray-600 dark:text-gray-400">
        This document is originally written in English. In case of any conflict
        in translations, the English version shall prevail.
      </p>

      <div className="bg-yellow-50 dark:bg-yellow-900/20 mt-4 rounded-lg p-4">
        <p className="text-sm font-semibold">
          ⚠️ Beta Period Notice (Current Status):
        </p>
        <p className="mt-2 text-sm">
          Currently, PAACS Software is in beta (versions 0.1.0 through 0.9.x).
          During this period, ALL features, including commercial features, are
          available free of charge for evaluation and testing purposes. However,
          all users remain bound by our{" "}
          <Link href="/eula" className="underline">
            End User License Agreement (EULA)
          </Link>
          .
        </p>
        <p className="mt-2 text-sm font-semibold">
          IMPORTANT: Upon release of version 1.0.0, the full licensing structure
          described below will take effect. This includes retroactive licensing
          requirements - any commercial use of ANY version (including beta
          versions 0.1.x - 0.9.x) will require a valid commercial license once
          version 1.0.0 is released.
        </p>
      </div>

      <h2 className="mt-6 text-xl font-semibold">Overview</h2>
      <p>
        PAACS Software operates under a dual-licensing model designed to support
        both academic research and commercial applications. Our licensing
        structure ensures that educational institutions and researchers have
        free access while maintaining sustainable development through commercial
        licensing.
      </p>

      <p className="mt-3">
        This document outlines our licensing options, terms, and compliance
        requirements. For complete legal terms, refer to our{" "}
        <Link href="/eula" className="underline">
          End User License Agreement (EULA)
        </Link>{" "}
        and{" "}
        <Link href="/terms" className="underline">
          Terms & Conditions
        </Link>
        .
      </p>

      <h2 className="mt-6 text-xl font-semibold">License Types</h2>

      <h3 className="mt-4 text-lg font-medium">
        1. Non-Commercial License (Free)
      </h3>
      <div className="ml-5 mt-2">
        <p className="font-medium">Permitted Uses:</p>
        <ul className="ml-5 list-disc">
          <li>Personal projects and hobbyist use</li>
          <li>Educational purposes (students and educators)</li>
          <li>Academic research and publications</li>
          <li>Non-profit organizations (proof of status required)</li>
          <li>Open-source projects (with attribution)</li>
          <li>Learning and skill development</li>
        </ul>

        <p className="mt-3 font-medium">Restrictions:</p>
        <ul className="ml-5 list-disc">
          <li>No commercial or for-profit use</li>
          <li>No consulting or contract work</li>
          <li>No integration into commercial products or services</li>
          <li>No redistribution or resale</li>
          <li>Cannot be used by commercial entities, even for internal R&D</li>
          <li>
            No use in government contracts or funded projects with commercial
            deliverables
          </li>
        </ul>

        <p className="mt-3 font-medium">Features:</p>
        <ul className="ml-5 list-disc">
          <li>Full access to core simulation features</li>
          <li>Community support via forums and documentation</li>
          <li>Access to updates during the license period</li>
          <li>Limited to single-user installation</li>
          <li>Watermark on outputs (removable in commercial version)</li>
        </ul>

        <p className="mt-3 font-medium">Verification:</p>
        <p>
          You may be required to verify your non-commercial status by providing:
        </p>
        <ul className="ml-5 list-disc">
          <li>Valid .edu or .ac.uk email address</li>
          <li>Student ID or academic affiliation proof</li>
          <li>Non-profit organization registration</li>
        </ul>
      </div>

      <h3 className="mt-4 text-lg font-medium">2. Commercial License (Paid)</h3>
      <div className="ml-5 mt-2">
        <p className="font-medium">Required For:</p>
        <ul className="ml-5 list-disc">
          <li>Any business or commercial entity use</li>
          <li>Revenue-generating activities</li>
          <li>Consulting or contract work</li>
          <li>Commercial research and development</li>
          <li>Integration into commercial products/services</li>
          <li>Government or military contracts</li>
          <li>Commercial training or certification programs</li>
        </ul>

        <p className="mt-3 font-medium">License Options:</p>

        <p className="mt-2 text-base font-medium">
          2.1 Individual Commercial License
        </p>
        <ul className="ml-5 list-disc">
          <li>Single named user</li>
          <li>Installation on up to 2 devices</li>
          <li>Annual or perpetual licensing available</li>
          <li>Email support with 48-hour response SLA</li>
          <li>Pricing: £999/year or £2,999 perpetual (with 1-year updates)</li>
        </ul>

        <p className="mt-2 text-base font-medium">2.2 Team License</p>
        <ul className="ml-5 list-disc">
          <li>5 named users</li>
          <li>Floating license server option</li>
          <li>Priority email support with 24-hour response SLA</li>
          <li>Volume discount pricing</li>
          <li>Pricing: £3,999/year or £11,999 perpetual</li>
        </ul>

        <p className="mt-2 text-base font-medium">2.3 Enterprise License</p>
        <ul className="ml-5 list-disc">
          <li>Unlimited users within organization</li>
          <li>On-premise deployment options</li>
          <li>Dedicated support channel</li>
          <li>Custom integrations available</li>
          <li>Training and onboarding included</li>
          <li>Pricing: Contact sales@paacs.pro</li>
        </ul>

        <p className="mt-3 font-medium">Commercial Features:</p>
        <ul className="ml-5 list-disc">
          <li>No watermarks on outputs</li>
          <li>Advanced simulation features</li>
          <li>API access for automation</li>
          <li>Priority compute resources</li>
          <li>Commercial use rights</li>
          <li>Technical support</li>
          <li>Early access to new features</li>
        </ul>
      </div>

      <h3 className="mt-4 text-lg font-medium">
        3. Academic Institution License
      </h3>
      <div className="ml-5 mt-2">
        <p className="font-medium">
          Special Pricing for Educational Institutions:
        </p>
        <ul className="ml-5 list-disc">
          <li>50% discount on commercial licenses for teaching purposes</li>
          <li>Site licenses available for departments or universities</li>
          <li>Mixed-use licenses for academic and commercial research</li>
          <li>Contact academic@paacs.pro for pricing</li>
        </ul>
      </div>

      <h3 className="mt-4 text-lg font-medium">4. Trial License</h3>
      <div className="ml-5 mt-2">
        <ul className="ml-5 list-disc">
          <li>30-day full-featured commercial trial</li>
          <li>No credit card required</li>
          <li>Includes technical support</li>
          <li>Automatic conversion to free non-commercial after expiry</li>
          <li>One trial per organization</li>
        </ul>
      </div>

      <h2 className="mt-6 text-xl font-semibold">
        License Activation and Management
      </h2>

      <h3 className="mt-4 text-lg font-medium">Activation Process</h3>
      <ol className="ml-5 list-decimal">
        <li>Create an account at paacs.pro/register</li>
        <li>Select your license type</li>
        <li>
          For commercial licenses, complete payment and receive license key
        </li>
        <li>Enter license key in software or account dashboard</li>
        <li>Software validates license and activates features</li>
      </ol>

      <h3 className="mt-4 text-lg font-medium">License Validation</h3>
      <ul className="ml-5 list-disc">
        <li>Online validation required every 30 days</li>
        <li>Offline grace period of 7 days</li>
        <li>Hardware fingerprinting to prevent unauthorized sharing</li>
        <li>License transfer available through support (commercial only)</li>
      </ul>

      <h3 className="mt-4 text-lg font-medium">Multi-User Management</h3>
      <ul className="ml-5 list-disc">
        <li>Centralized license management portal</li>
        <li>Add/remove users dynamically</li>
        <li>Usage reporting and analytics</li>
        <li>License compliance monitoring</li>
      </ul>

      <h2 className="mt-6 text-xl font-semibold">Compliance and Enforcement</h2>

      <h3 className="mt-4 text-lg font-medium">License Compliance</h3>
      <p>We employ various methods to ensure license compliance:</p>
      <ul className="ml-5 mt-2 list-disc">
        <li>Automated detection of commercial use patterns</li>
        <li>Periodic license audits</li>
        <li>Telemetry data analysis (privacy-compliant)</li>
        <li>Community reporting of violations</li>
      </ul>

      <h3 className="mt-4 text-lg font-medium">Violations and Consequences</h3>
      <p className="font-medium">First Violation:</p>
      <ul className="ml-5 list-disc">
        <li>Warning notice and 30-day grace period to obtain proper license</li>
        <li>Temporary restriction to non-commercial features</li>
      </ul>

      <p className="mt-2 font-medium">Repeated Violations:</p>
      <ul className="ml-5 list-disc">
        <li>Immediate license termination</li>
        <li>Account suspension</li>
        <li>Legal action for damages</li>
        <li>Permanent ban from all services</li>
      </ul>

      <p className="mt-2 font-medium">Examples of Violations:</p>
      <ul className="ml-5 list-disc">
        <li>Using non-commercial license for paid consulting</li>
        <li>Sharing or distributing license keys</li>
        <li>Bypassing license checks or validation</li>
        <li>Reverse engineering or modifying the software</li>
        <li>False representation of non-commercial status</li>
      </ul>

      <h2 className="mt-6 text-xl font-semibold">
        Retroactive Licensing Policy
      </h2>
      <div className="rounded-lg bg-red-50 p-4 dark:bg-red-900/20">
        <p className="font-semibold">Important Notice:</p>
        <p className="mt-2">
          Upon release of version 1.0.0, ALL versions of PAACS Software
          (including all beta versions 0.1.0 - 0.9.x) will require appropriate
          licensing for continued use. Commercial users who have been using beta
          versions must obtain a commercial license to continue using ANY
          version of the software for commercial purposes.
        </p>
        <p className="mt-2">
          This retroactive requirement ensures fairness and sustainability. Beta
          users who have contributed feedback may be eligible for discounted
          commercial licenses.
        </p>
      </div>

      <h2 className="mt-6 text-xl font-semibold">Special Programs</h2>

      <h3 className="mt-4 text-lg font-medium">Startup Program</h3>
      <ul className="ml-5 list-disc">
        <li>50% discount for companies less than 2 years old</li>
        <li>Must have less than £1M in annual revenue</li>
        <li>Limited to first year only</li>
        <li>Apply at startups@paacs.pro</li>
      </ul>

      <h3 className="mt-4 text-lg font-medium">Open Source Program</h3>
      <ul className="ml-5 list-disc">
        <li>Free commercial license for qualified open-source projects</li>
        <li>Project must be under OSI-approved license</li>
        <li>Requires attribution and link to PAACS</li>
        <li>Apply at opensource@paacs.pro</li>
      </ul>

      <h3 className="mt-4 text-lg font-medium">Beta Tester Rewards</h3>
      <ul className="ml-5 list-disc">
        <li>Active beta testers receive 25% lifetime discount</li>
        <li>Bug bounty program for critical issues</li>
        <li>Early access to new features</li>
      </ul>

      <h2 className="mt-6 text-xl font-semibold">Warranty and Disclaimers</h2>

      <h3 className="mt-4 text-lg font-medium">Limited Warranty</h3>
      <p>
        Commercial licenses include a 30-day warranty period during which we
        will:
      </p>
      <ul className="ml-5 mt-2 list-disc">
        <li>Fix critical bugs preventing normal operation</li>
        <li>Provide workarounds for known issues</li>
        <li>Offer full refund if software is materially defective</li>
      </ul>

      <h3 className="mt-4 text-lg font-medium">Disclaimers</h3>
      <ul className="ml-5 list-disc">
        <li>Software provided &ldquo;as-is&rdquo; after warranty period</li>
        <li>No guarantee of fitness for particular purpose</li>
        <li>No liability for consequential damages</li>
        <li>Results dependent on user input and configuration</li>
        <li>Not suitable for safety-critical applications</li>
      </ul>

      <h2 className="mt-6 text-xl font-semibold">Export Control</h2>
      <p>
        PAACS Software may be subject to export control laws and regulations.
        Users are responsible for compliance with:
      </p>
      <ul className="ml-5 mt-2 list-disc">
        <li>UK Export Control Act</li>
        <li>EU Dual-Use Regulation</li>
        <li>US Export Administration Regulations (EAR)</li>
        <li>Local export/import laws</li>
      </ul>

      <p className="mt-3">
        The software may not be exported or re-exported to:
      </p>
      <ul className="ml-5 list-disc">
        <li>Embargoed countries</li>
        <li>Prohibited end-users or entities</li>
        <li>
          For prohibited end-uses (nuclear, missile, chemical/biological
          weapons)
        </li>
      </ul>

      <h2 className="mt-6 text-xl font-semibold">Governing Law</h2>
      <p>
        This licensing agreement is governed by the laws of England and Wales.
        Any disputes shall be subject to the exclusive jurisdiction of the
        courts of England and Wales. By using the software, you consent to these
        terms regardless of your location.
      </p>

      <h2 className="mt-6 text-xl font-semibold">Frequently Asked Questions</h2>

      <h3 className="mt-4 text-lg font-medium">
        Can I use the non-commercial license for freelance work?
      </h3>
      <p className="ml-5">
        No. Any paid work, including freelance or consulting, requires a
        commercial license.
      </p>

      <h3 className="mt-4 text-lg font-medium">
        Can a company use the software for internal R&D without commercial
        license?
      </h3>
      <p className="ml-5">
        No. Commercial entities must use commercial licenses even for internal
        research.
      </p>

      <h3 className="mt-4 text-lg font-medium">
        What happens to my beta version when 1.0.0 is released?
      </h3>
      <p className="ml-5">
        You must obtain appropriate licensing. Commercial features will be
        disabled after a grace period if no commercial license is obtained.
      </p>

      <h3 className="mt-4 text-lg font-medium">
        Can I transfer my license to another user?
      </h3>
      <p className="ml-5">
        Commercial licenses can be transferred once per year through support.
        Non-commercial licenses are non-transferable.
      </p>

      <h3 className="mt-4 text-lg font-medium">
        Do I need internet connection to use the software?
      </h3>
      <p className="ml-5">
        Internet is required for initial activation and periodic validation
        (every 30 days). Offline grace period of 7 days is provided.
      </p>

      <h2 className="mt-6 text-xl font-semibold">Contact Information</h2>
      <div className="ml-5 mt-2">
        <p>
          <strong>Sales and Licensing:</strong>
        </p>
        <p>
          Email:{" "}
          <a href="mailto:licensing@paacs.pro" className="underline">
            licensing@paacs.pro
          </a>
        </p>
        <p>
          Sales:{" "}
          <a href="mailto:sales@paacs.pro" className="underline">
            sales@paacs.pro
          </a>
        </p>

        <p className="mt-3">
          <strong>Support:</strong>
        </p>
        <p>
          Email:{" "}
          <a href="mailto:support@paacs.pro" className="underline">
            support@paacs.pro
          </a>
        </p>

        <p className="mt-3">
          <strong>Legal:</strong>
        </p>
        <p>
          Email:{" "}
          <a href="mailto:legal@paacs.pro" className="underline">
            legal@paacs.pro
          </a>
        </p>

        <p className="mt-3">
          <strong>Special Programs:</strong>
        </p>
        <p>
          Academic:{" "}
          <a href="mailto:academic@paacs.pro" className="underline">
            academic@paacs.pro
          </a>
        </p>
        <p>
          Startups:{" "}
          <a href="mailto:startups@paacs.pro" className="underline">
            startups@paacs.pro
          </a>
        </p>
        <p>
          Open Source:{" "}
          <a href="mailto:opensource@paacs.pro" className="underline">
            opensource@paacs.pro
          </a>
        </p>
      </div>

      <div className="mt-8 rounded-lg border-2 border-gray-300 bg-gray-50 p-4 dark:border-gray-600 dark:bg-gray-800">
        <p className="text-sm">
          <strong>Note:</strong> This document provides an overview of our
          licensing structure. The{" "}
          <Link href="/eula" className="underline">
            End User License Agreement (EULA)
          </Link>{" "}
          contains the complete legal terms that govern your use of PAACS
          Software.
        </p>
      </div>
    </div>
  );
}
