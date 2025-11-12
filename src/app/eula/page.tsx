// src/app/eula/page.tsx

import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "End User License Agreement (EULA) - PAACS Software",
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
        Effective Date: November 1, 2025
      </p>
      <p className="mt-1 text-xs italic text-gray-600 dark:text-gray-400">
        Last Updated: November 1, 2025
      </p>
      <p className="mt-1 text-xs italic text-gray-600 dark:text-gray-400">
        Version: 1.0.0
      </p>
      <p className="mt-1 text-xs italic text-gray-600 dark:text-gray-400">
        This EULA is originally drafted in English. In case of conflicting
        translations, the English version shall prevail and be legally binding.
      </p>

      <div className="mt-4 rounded-lg bg-red-50 p-4 dark:bg-red-900/20">
        <p className="text-sm font-semibold">IMPORTANT NOTICE:</p>
        <p className="mt-2 text-sm">
          This is a legally binding agreement. By installing, copying,
          downloading, accessing, or otherwise using the Software, you
          acknowledge that you have read, understood, and agree to be bound by
          the terms of this EULA. If you do not agree, do not use the Software.
        </p>
      </div>

      <div className="bg-yellow-50 dark:bg-yellow-900/20 mt-4 rounded-lg p-4">
        <p className="text-sm font-semibold">
          Beta Period Notice (Versions 0.1.0 - 0.9.x):
        </p>
        <p className="mt-2 text-sm">
          During the beta period (all versions prior to 1.0.0), commercial
          features are available free of charge for evaluation purposes.
          However, this EULA remains in full effect, and upon release of version
          1.0.0, ALL versions of the Software (including previously installed
          beta versions) will require appropriate commercial licensing for any
          commercial use.
        </p>
      </div>

      <h2 className="mt-6 text-xl font-semibold">DEFINITIONS</h2>
      <p>For the purposes of this Agreement:</p>
      <ul className="ml-5 mt-2 list-disc">
        <li>
          <strong>&ldquo;Agreement&rdquo;</strong> means this End User License
          Agreement
        </li>
        <li>
          <strong>&ldquo;Company&rdquo;</strong> means PAACS Software Ltd, a
          company registered in England and Wales
        </li>
        <li>
          <strong>&ldquo;Software&rdquo;</strong> means the PAACS simulation
          software, including all programs, libraries, documentation, updates,
          and modifications
        </li>
        <li>
          <strong>&ldquo;Commercial Use&rdquo;</strong> means any use that
          generates revenue, is part of business operations, or provides
          commercial advantage
        </li>
        <li>
          <strong>&ldquo;Non-Commercial Use&rdquo;</strong> means personal,
          educational, or academic research use with no revenue generation
        </li>
        <li>
          <strong>&ldquo;License Key&rdquo;</strong> means the unique activation
          code provided for commercial licenses
        </li>
        <li>
          <strong>&ldquo;User&rdquo; or &ldquo;You&rdquo;</strong> means the
          individual or entity using the Software
        </li>
        <li>
          <strong>&ldquo;Effective Date&rdquo;</strong> means the date you first
          install or use the Software
        </li>
      </ul>

      <h2 className="mt-6 text-xl font-semibold">1. GRANT OF LICENSE</h2>

      <h3 className="mt-4 text-lg font-medium">1.1 License Grant</h3>
      <p>
        Subject to your compliance with this Agreement, the Company grants you a
        limited, non-exclusive, non-transferable, revocable license to install
        and use the Software according to the license type you have obtained.
      </p>

      <h3 className="mt-4 text-lg font-medium">1.2 License Types</h3>
      <ul className="ml-5 mt-2 list-disc">
        <li>
          <strong>Non-Commercial License:</strong> Free license for personal
          use, education, academic research, and non-profit activities. Strictly
          prohibits any commercial use, redistribution, or integration into
          commercial products.
        </li>
        <li>
          <strong>Commercial License:</strong> Paid license required for any
          business use, commercial research, consulting, or revenue-generating
          activities. Includes premium features and priority support.
        </li>
        <li>
          <strong>Trial/Evaluation License:</strong> Time-limited license for
          commercial entities to evaluate the Software before purchase.
        </li>
        <li>
          <strong>Enterprise License:</strong> Custom licensing for
          organizations requiring multiple seats, on-premise deployment, or
          special terms.
        </li>
      </ul>

      <h3 className="mt-4 text-lg font-medium">1.3 Beta Period Terms</h3>
      <p>
        For Software versions 0.1.0 through 0.9.x (&ldquo;Beta Versions&rdquo;):
      </p>
      <ul className="ml-5 mt-2 list-disc">
        <li>
          Commercial features are temporarily available without a commercial
          license
        </li>
        <li>This is for evaluation and testing purposes only</li>
        <li>
          The Company reserves the right to disable commercial features at any
          time
        </li>
        <li>
          Upon release of version 1.0.0, all Beta Versions will require
          appropriate licensing
        </li>
        <li>
          Retroactive commercial licenses will be required for continued
          commercial use of any version
        </li>
      </ul>

      <h2 className="mt-6 text-xl font-semibold">2. LICENSE RESTRICTIONS</h2>
      <p>You may NOT:</p>
      <ul className="ml-5 mt-2 list-disc">
        <li>
          Reverse engineer, decompile, disassemble, or attempt to derive source
          code from the Software
        </li>
        <li>
          Modify, adapt, translate, or create derivative works based on the
          Software
        </li>
        <li>
          Remove, alter, or obscure any proprietary notices, labels, or marks
        </li>
        <li>
          Rent, lease, lend, sell, sublicense, or transfer the Software or your
          license rights
        </li>
        <li>
          Use the Software for any illegal purposes or in violation of any laws
        </li>
        <li>
          Bypass, disable, or circumvent any licensing, activation, or
          copy-protection mechanisms
        </li>
        <li>
          Use automated tools to extract data or functionality from the Software
        </li>
        <li>Share, publish, or distribute License Keys</li>
        <li>Use the Software to develop competing products or services</li>
        <li>
          Exceed the scope of your licensed use (e.g., using a Non-Commercial
          License for commercial purposes)
        </li>
        <li>
          Use the Software in life-critical or safety-critical systems where
          failure could cause harm
        </li>
      </ul>

      <h2 className="mt-6 text-xl font-semibold">
        3. INTELLECTUAL PROPERTY RIGHTS
      </h2>

      <h3 className="mt-4 text-lg font-medium">3.1 Ownership</h3>
      <p>
        The Software is licensed, not sold. The Company and its licensors retain
        all right, title, and interest in and to the Software, including all
        intellectual property rights. No rights are granted except those
        expressly set forth in this Agreement.
      </p>

      <h3 className="mt-4 text-lg font-medium">3.2 Proprietary Rights</h3>
      <p>
        The Software contains proprietary and confidential information protected
        by intellectual property laws, including but not limited to copyright,
        patent, trademark, and trade secret laws.
      </p>

      <h3 className="mt-4 text-lg font-medium">3.3 Feedback</h3>
      <p>
        Any feedback, suggestions, or ideas you provide regarding the Software
        become the property of the Company and may be used without restriction
        or compensation to you.
      </p>

      <h2 className="mt-6 text-xl font-semibold">
        4. ACTIVATION AND VALIDATION
      </h2>

      <h3 className="mt-4 text-lg font-medium">4.1 Activation Required</h3>
      <p>
        The Software requires activation through a valid user account and, for
        commercial licenses, a valid License Key. Activation associates the
        Software with specific hardware and/or user account.
      </p>

      <h3 className="mt-4 text-lg font-medium">4.2 Validation Checks</h3>
      <p>
        The Software performs periodic validation to verify license compliance.
        These checks may:
      </p>
      <ul className="ml-5 mt-2 list-disc">
        <li>Verify the authenticity and validity of your license</li>
        <li>Detect unauthorized use or license violations</li>
        <li>Collect limited system information for license enforcement</li>
        <li>Disable functionality if violations are detected</li>
      </ul>

      <h3 className="mt-4 text-lg font-medium">4.3 Internet Connection</h3>
      <p>
        Periodic internet connection is required for license validation.
        Extended offline use may result in reduced functionality or
        deactivation.
      </p>

      <h2 className="mt-6 text-xl font-semibold">5. UPDATES AND SUPPORT</h2>

      <h3 className="mt-4 text-lg font-medium">5.1 Updates</h3>
      <p>
        The Company may provide updates, patches, or new versions at its
        discretion. Updates may:
      </p>
      <ul className="ml-5 mt-2 list-disc">
        <li>Add, modify, or remove features</li>
        <li>Fix bugs or security vulnerabilities</li>
        <li>Improve performance or compatibility</li>
        <li>Include additional terms or licensing requirements</li>
      </ul>

      <h3 className="mt-4 text-lg font-medium">5.2 Automatic Updates</h3>
      <p>
        The Software may automatically download and install updates. You consent
        to receive such updates as part of your use of the Software.
      </p>

      <h3 className="mt-4 text-lg font-medium">5.3 Support</h3>
      <ul className="ml-5 mt-2 list-disc">
        <li>
          <strong>Non-Commercial Users:</strong> Community-based support through
          forums and documentation
        </li>
        <li>
          <strong>Commercial Users:</strong> Priority email support with defined
          response times
        </li>
        <li>
          <strong>Enterprise Users:</strong> Dedicated support channels as per
          agreement
        </li>
      </ul>

      <h2 className="mt-6 text-xl font-semibold">
        6. DATA COLLECTION AND PRIVACY
      </h2>

      <h3 className="mt-4 text-lg font-medium">6.1 Data Collection</h3>
      <p>By using the Software, you consent to the collection of:</p>
      <ul className="ml-5 mt-2 list-disc">
        <li>License validation data</li>
        <li>System configuration information</li>
        <li>Usage statistics and analytics</li>
        <li>Error reports and diagnostic information</li>
        <li>Feature usage patterns</li>
      </ul>

      <h3 className="mt-4 text-lg font-medium">6.2 Privacy Policy</h3>
      <p>
        Data collection and processing are governed by our{" "}
        <Link href="/privacy" className="underline">
          Privacy Policy
        </Link>
        , which is incorporated by reference into this Agreement.
      </p>

      <h2 className="mt-6 text-xl font-semibold">
        7. WARRANTIES AND DISCLAIMERS
      </h2>

      <h3 className="mt-4 text-lg font-medium">7.1 Disclaimer of Warranties</h3>
      <p className="font-semibold">
        THE SOFTWARE IS PROVIDED &ldquo;AS IS&rdquo; WITHOUT WARRANTY OF ANY
        KIND. THE COMPANY DISCLAIMS ALL WARRANTIES, EXPRESS OR IMPLIED,
        INCLUDING BUT NOT LIMITED TO:
      </p>
      <ul className="ml-5 mt-2 list-disc">
        <li>MERCHANTABILITY</li>
        <li>FITNESS FOR A PARTICULAR PURPOSE</li>
        <li>NON-INFRINGEMENT</li>
        <li>ACCURACY OR RELIABILITY OF RESULTS</li>
        <li>QUIET ENJOYMENT</li>
        <li>ERROR-FREE OR UNINTERRUPTED OPERATION</li>
      </ul>

      <h3 className="mt-4 text-lg font-medium">7.2 No Guarantee</h3>
      <p>
        The Company does not guarantee that the Software will meet your
        requirements or that defects will be corrected. You assume all risk of
        use.
      </p>

      <h2 className="mt-6 text-xl font-semibold">8. LIMITATION OF LIABILITY</h2>

      <h3 className="mt-4 text-lg font-medium">8.1 Exclusion of Damages</h3>
      <p className="font-semibold">
        TO THE MAXIMUM EXTENT PERMITTED BY LAW, THE COMPANY SHALL NOT BE LIABLE
        FOR ANY:
      </p>
      <ul className="ml-5 mt-2 list-disc">
        <li>INDIRECT, INCIDENTAL, SPECIAL, OR CONSEQUENTIAL DAMAGES</li>
        <li>LOSS OF PROFITS, REVENUE, OR BUSINESS</li>
        <li>LOSS OF DATA OR DATA CORRUPTION</li>
        <li>BUSINESS INTERRUPTION</li>
        <li>PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES</li>
        <li>DAMAGES EXCEEDING THE LICENSE FEE PAID (IF ANY)</li>
      </ul>

      <h3 className="mt-4 text-lg font-medium">8.2 Essential Purpose</h3>
      <p>
        These limitations apply even if the Company has been advised of the
        possibility of such damages and even if any remedy fails of its
        essential purpose.
      </p>

      <h2 className="mt-6 text-xl font-semibold">9. INDEMNIFICATION</h2>
      <p>
        You agree to defend, indemnify, and hold harmless the Company, its
        affiliates, officers, directors, employees, and agents from and against
        all claims, damages, losses, expenses, and costs (including reasonable
        attorneys' fees) arising from:
      </p>
      <ul className="ml-5 mt-2 list-disc">
        <li>Your breach of this Agreement</li>
        <li>Your violation of any law or third-party rights</li>
        <li>Your use or misuse of the Software</li>
        <li>Any content or data you process using the Software</li>
      </ul>

      <h2 className="mt-6 text-xl font-semibold">10. TERMINATION</h2>

      <h3 className="mt-4 text-lg font-medium">10.1 Term</h3>
      <p>
        This Agreement is effective upon installation or first use of the
        Software and continues until terminated.
      </p>

      <h3 className="mt-4 text-lg font-medium">10.2 Termination by You</h3>
      <p>
        You may terminate this Agreement by ceasing use and uninstalling all
        copies of the Software.
      </p>

      <h3 className="mt-4 text-lg font-medium">10.3 Termination by Company</h3>
      <p>The Company may terminate your license immediately if you:</p>
      <ul className="ml-5 mt-2 list-disc">
        <li>Breach any term of this Agreement</li>
        <li>Fail to pay applicable license fees</li>
        <li>Use the Software beyond your licensed scope</li>
        <li>Engage in fraud or misrepresentation</li>
      </ul>

      <h3 className="mt-4 text-lg font-medium">10.4 Effect of Termination</h3>
      <p>Upon termination:</p>
      <ul className="ml-5 mt-2 list-disc">
        <li>All rights granted under this Agreement immediately cease</li>
        <li>You must stop using the Software</li>
        <li>You must delete all copies of the Software</li>
        <li>Sections 3, 7, 8, 9, 11, 12, and 13 survive termination</li>
      </ul>

      <h2 className="mt-6 text-xl font-semibold">11. EXPORT COMPLIANCE</h2>
      <p>
        You acknowledge that the Software may be subject to export controls and
        sanctions laws of the United Kingdom, European Union, United States, and
        other jurisdictions. You agree to:
      </p>
      <ul className="ml-5 mt-2 list-disc">
        <li>Comply with all applicable export and import laws</li>
        <li>
          Not export or re-export the Software to prohibited countries or
          entities
        </li>
        <li>
          Not use the Software for prohibited end-uses including nuclear,
          missile, chemical, or biological weapons
        </li>
        <li>Obtain all necessary licenses or authorizations</li>
      </ul>

      <h2 className="mt-6 text-xl font-semibold">
        12. GOVERNING LAW AND DISPUTES
      </h2>

      <h3 className="mt-4 text-lg font-medium">12.1 Governing Law</h3>
      <p>
        This Agreement shall be governed by and construed in accordance with the
        laws of England and Wales, without regard to conflict of law principles.
      </p>

      <h3 className="mt-4 text-lg font-medium">12.2 Jurisdiction</h3>
      <p>
        Any disputes arising from or relating to this Agreement shall be subject
        to the exclusive jurisdiction of the courts of England and Wales.
      </p>

      <h3 className="mt-4 text-lg font-medium">12.3 Arbitration</h3>
      <p>
        At the Company's option, disputes may be resolved through binding
        arbitration under the rules of the London Court of International
        Arbitration (LCIA).
      </p>

      <h2 className="mt-6 text-xl font-semibold">13. GENERAL PROVISIONS</h2>

      <h3 className="mt-4 text-lg font-medium">13.1 Entire Agreement</h3>
      <p>
        This Agreement, together with our Terms and Conditions, Privacy Policy,
        and any applicable Order Forms or Invoices, constitutes the entire
        agreement between you and the Company.
      </p>

      <h3 className="mt-4 text-lg font-medium">13.2 Severability</h3>
      <p>
        If any provision is held invalid or unenforceable, the remaining
        provisions shall continue in full force and effect.
      </p>

      <h3 className="mt-4 text-lg font-medium">13.3 Waiver</h3>
      <p>
        No waiver shall be effective unless in writing. Failure to enforce any
        provision shall not constitute a waiver of future enforcement.
      </p>

      <h3 className="mt-4 text-lg font-medium">13.4 Assignment</h3>
      <p>
        You may not assign or transfer this Agreement or your rights hereunder.
        The Company may assign this Agreement without restriction.
      </p>

      <h3 className="mt-4 text-lg font-medium">13.5 Force Majeure</h3>
      <p>
        Neither party shall be liable for delays or failures due to causes
        beyond their reasonable control, including acts of God, natural
        disasters, war, terrorism, labor disputes, or government actions.
      </p>

      <h3 className="mt-4 text-lg font-medium">13.6 Notices</h3>
      <p>
        Notices to the Company should be sent to{" "}
        <a href="mailto:legal@paacs.pro" className="underline">
          legal@paacs.pro
        </a>
        . Notices to you will be sent to your registered email address.
      </p>

      <h2 className="mt-6 text-xl font-semibold">14. CONTACT INFORMATION</h2>
      <div className="ml-5 mt-2">
        <p>
          <strong>PAACS Software Ltd</strong>
        </p>
        <p>Legal Department</p>
        <p>
          Email:{" "}
          <a href="mailto:legal@paacs.pro" className="underline">
            legal@paacs.pro
          </a>
        </p>
        <p>
          Support:{" "}
          <a href="mailto:support@paacs.pro" className="underline">
            support@paacs.pro
          </a>
        </p>
        <p>
          Licensing:{" "}
          <a href="mailto:licensing@paacs.pro" className="underline">
            licensing@paacs.pro
          </a>
        </p>
      </div>

      <div className="mt-8 rounded-lg border-2 border-gray-300 bg-gray-50 p-4 dark:border-gray-600 dark:bg-gray-800">
        <p className="text-sm font-semibold">
          BY USING THE SOFTWARE, YOU ACKNOWLEDGE THAT YOU HAVE READ THIS
          AGREEMENT, UNDERSTAND IT, AND AGREE TO BE BOUND BY ITS TERMS.
        </p>
      </div>
    </div>
  );
}
