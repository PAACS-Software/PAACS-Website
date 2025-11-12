// src/app/terms/page.tsx

import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions - PAACS Software Legal Terms",
  description:
    "Terms of service for PAACS Software usage. Legal terms, acceptable use policy, and user responsibilities for our simulation platform.",
  alternates: {
    canonical: "https://paacs.pro/terms",
  },
};

export default function TermsAndConditions() {
  return (
    <div className="mx-auto mt-[10vh] max-w-4xl px-4 py-12 text-sm leading-relaxed text-gray-800 dark:text-gray-200">
      <h1 className="mb-6 text-3xl font-bold">Terms and Conditions</h1>

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
        This document is originally written in English. In case of discrepancies
        in translations, the English version shall prevail.
      </p>

      <div className="mt-4 rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20">
        <p className="text-sm font-semibold">IMPORTANT LEGAL NOTICE:</p>
        <p className="mt-2 text-sm">
          These Terms and Conditions (&ldquo;Terms&rdquo;) constitute a legally
          binding agreement between you and PAACS Software Ltd. By accessing or
          using our services, you acknowledge that you have read, understood,
          and agree to be bound by these Terms. If you do not agree, you must
          immediately cease using our services.
        </p>
      </div>

      <h2 className="mt-6 text-xl font-semibold">DEFINITIONS</h2>
      <p>In these Terms, unless the context otherwise requires:</p>
      <ul className="ml-5 mt-2 list-disc">
        <li>
          <strong>&ldquo;Agreement&rdquo;</strong> means these Terms and
          Conditions, including all referenced documents
        </li>
        <li>
          <strong>
            &ldquo;Company,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo;
            &ldquo;our&rdquo;
          </strong>
          refers to PAACS Software Ltd, a company registered in England and
          Wales
        </li>
        <li>
          <strong>&ldquo;Services&rdquo;</strong> means our website, software
          applications, APIs, support services, and all related offerings
        </li>
        <li>
          <strong>&ldquo;Software&rdquo;</strong> means our desktop simulation
          applications and any updates or modifications
        </li>
        <li>
          <strong>
            &ldquo;User,&rdquo; &ldquo;you,&rdquo; &ldquo;your&rdquo;
          </strong>{" "}
          refers to any individual or entity accessing or using our Services
        </li>
        <li>
          <strong>&ldquo;Content&rdquo;</strong> means any data, text, files,
          information, usernames, images, graphics, photos, audio, video, or
          materials
        </li>
        <li>
          <strong>&ldquo;User Content&rdquo;</strong> means Content created,
          uploaded, or transmitted by users through our Services
        </li>
        <li>
          <strong>&ldquo;Intellectual Property&rdquo;</strong> means patents,
          copyrights, trademarks, trade secrets, and other proprietary rights
        </li>
      </ul>

      <h2 className="mt-6 text-xl font-semibold">1. ACCEPTANCE OF TERMS</h2>

      <h3 className="mt-4 text-lg font-medium">1.1 Agreement to Terms</h3>
      <p>
        By accessing or using our Services, you agree to be bound by these
        Terms, our{" "}
        <Link href="/privacy" className="underline">
          Privacy Policy
        </Link>
        ,{" "}
        <Link href="/cookie-policy" className="underline">
          Cookie Policy
        </Link>
        ,{" "}
        <Link href="/eula" className="underline">
          End User License Agreement
        </Link>
        , and{" "}
        <Link href="/license" className="underline">
          Licensing Information
        </Link>
        .
      </p>

      <h3 className="mt-4 text-lg font-medium">1.2 Capacity to Contract</h3>
      <p>You represent and warrant that you:</p>
      <ul className="ml-5 mt-2 list-disc">
        <li>Are at least 13 years of age (16 in certain jurisdictions)</li>
        <li>Have the legal capacity to enter into binding contracts</li>
        <li>Are not prohibited from using our Services under applicable law</li>
        <li>
          If acting on behalf of an organization, have authority to bind that
          organization
        </li>
      </ul>

      <h3 className="mt-4 text-lg font-medium">1.3 Modifications</h3>
      <p>
        We reserve the right to modify these Terms at any time. Material changes
        will be notified via:
      </p>
      <ul className="ml-5 mt-2 list-disc">
        <li>Email notification to registered users</li>
        <li>Prominent notice on our website</li>
        <li>In-application notifications</li>
      </ul>
      <p className="mt-2">
        Continued use after notification constitutes acceptance of modified
        Terms.
      </p>

      <h2 className="mt-6 text-xl font-semibold">2. ACCOUNT REGISTRATION</h2>

      <h3 className="mt-4 text-lg font-medium">2.1 Account Creation</h3>
      <p>
        To access certain Services, you must create an account by providing:
      </p>
      <ul className="ml-5 mt-2 list-disc">
        <li>Accurate and complete information</li>
        <li>A valid email address</li>
        <li>A secure password meeting our requirements</li>
        <li>Verification of academic status (if applicable)</li>
      </ul>

      <h3 className="mt-4 text-lg font-medium">2.2 Account Security</h3>
      <p>You are responsible for:</p>
      <ul className="ml-5 mt-2 list-disc">
        <li>Maintaining the confidentiality of your credentials</li>
        <li>All activities occurring under your account</li>
        <li>Immediately notifying us of unauthorized access</li>
        <li>Ensuring your account information remains current</li>
        <li>Not sharing your account with others</li>
      </ul>

      <h3 className="mt-4 text-lg font-medium">2.3 Account Termination</h3>
      <p>We may suspend or terminate accounts that:</p>
      <ul className="ml-5 mt-2 list-disc">
        <li>Violate these Terms or other agreements</li>
        <li>Engage in fraudulent or illegal activity</li>
        <li>Remain inactive for extended periods</li>
        <li>Pose a security risk to our Services</li>
        <li>Fail to pay applicable fees</li>
      </ul>

      <h2 className="mt-6 text-xl font-semibold">3. USE OF SERVICES</h2>

      <h3 className="mt-4 text-lg font-medium">3.1 License Grant</h3>
      <p>
        Subject to these Terms, we grant you a limited, non-exclusive,
        non-transferable, revocable license to access and use our Services for
        lawful purposes in accordance with these Terms.
      </p>

      <h3 className="mt-4 text-lg font-medium">3.2 Acceptable Use Policy</h3>
      <p>You agree NOT to:</p>
      <ul className="ml-5 mt-2 list-disc">
        <li>Violate any laws, regulations, or third-party rights</li>
        <li>Use the Services for illegal, harmful, or fraudulent purposes</li>
        <li>Transmit viruses, malware, or malicious code</li>
        <li>Attempt to gain unauthorized access to systems or data</li>
        <li>Interfere with or disrupt the Services or servers</li>
        <li>Bypass any security measures or access controls</li>
        <li>Scrape, harvest, or collect data without permission</li>
        <li>Impersonate others or misrepresent your affiliation</li>
        <li>Harass, abuse, or harm other users</li>
        <li>Post offensive, defamatory, or inappropriate content</li>
        <li>Use automated systems without prior written consent</li>
        <li>Reverse engineer or decompile the Software</li>
        <li>Remove or alter proprietary notices</li>
        <li>Exceed authorized usage limits</li>
        <li>Resell or redistribute the Services without authorization</li>
        <li>Use the Services for competitive analysis</li>
        <li>Train AI models on our Services or Content without permission</li>
      </ul>

      <h3 className="mt-4 text-lg font-medium">
        3.3 Professional Use Standards
      </h3>
      <p>When using our Services for professional or commercial purposes:</p>
      <ul className="ml-5 mt-2 list-disc">
        <li>You must maintain appropriate commercial licensing</li>
        <li>You are responsible for the accuracy of your simulations</li>
        <li>We do not guarantee fitness for any specific purpose</li>
        <li>
          You must validate results independently for critical applications
        </li>
        <li>
          You may not use results for safety-critical systems without additional
          verification
        </li>
      </ul>

      <h2 className="mt-6 text-xl font-semibold">4. USER CONTENT</h2>

      <h3 className="mt-4 text-lg font-medium">4.1 Your Content</h3>
      <p>
        You retain ownership of User Content you create. By using our Services,
        you grant us a worldwide, non-exclusive, royalty-free, sublicensable
        license to:
      </p>
      <ul className="ml-5 mt-2 list-disc">
        <li>Host, store, and backup your User Content</li>
        <li>Display your User Content to you and authorized users</li>
        <li>Process your User Content to provide Services</li>
        <li>Use anonymized data for service improvement</li>
        <li>Comply with legal obligations</li>
      </ul>

      <h3 className="mt-4 text-lg font-medium">4.2 Content Responsibilities</h3>
      <p>You represent and warrant that:</p>
      <ul className="ml-5 mt-2 list-disc">
        <li>You own or have rights to use your User Content</li>
        <li>Your User Content doesn&apos;t infringe third-party rights</li>
        <li>Your User Content complies with all applicable laws</li>
        <li>You have necessary consents for any personal data</li>
      </ul>

      <h3 className="mt-4 text-lg font-medium">4.3 Prohibited Content</h3>
      <p>User Content must not contain:</p>
      <ul className="ml-5 mt-2 list-disc">
        <li>Illegal, harmful, or offensive material</li>
        <li>Malware, viruses, or malicious code</li>
        <li>Personal data without proper consent</li>
        <li>Trade secrets or confidential information without authorization</li>
        <li>Content that infringes intellectual property rights</li>
        <li>False or misleading information</li>
      </ul>

      <h3 className="mt-4 text-lg font-medium">4.4 Content Moderation</h3>
      <p>We reserve the right to:</p>
      <ul className="ml-5 mt-2 list-disc">
        <li>Review, monitor, and moderate User Content</li>
        <li>Remove or disable access to violating Content</li>
        <li>Report illegal Content to authorities</li>
        <li>Preserve Content for legal purposes</li>
      </ul>

      <h2 className="mt-6 text-xl font-semibold">5. INTELLECTUAL PROPERTY</h2>

      <h3 className="mt-4 text-lg font-medium">
        5.1 Our Intellectual Property
      </h3>
      <p>
        All Intellectual Property in our Services (except User Content) is owned
        by or licensed to PAACS Software Ltd. This includes:
      </p>
      <ul className="ml-5 mt-2 list-disc">
        <li>Software code and architecture</li>
        <li>User interface designs and graphics</li>
        <li>Logos, trademarks, and branding</li>
        <li>Documentation and tutorials</li>
        <li>Algorithms and methodologies</li>
        <li>Databases and data structures</li>
      </ul>

      <h3 className="mt-4 text-lg font-medium">5.2 Restrictions</h3>
      <p>You may not:</p>
      <ul className="ml-5 mt-2 list-disc">
        <li>Copy, modify, or create derivative works</li>
        <li>Use our trademarks without permission</li>
        <li>Remove copyright or proprietary notices</li>
        <li>Claim ownership of our Intellectual Property</li>
        <li>Use our Intellectual Property except as permitted</li>
      </ul>

      <h3 className="mt-4 text-lg font-medium">5.3 Feedback</h3>
      <p>
        Any feedback, suggestions, or ideas you provide become our property and
        may be used without restriction or compensation. We are not obligated to
        implement feedback or maintain confidentiality.
      </p>

      <h2 className="mt-6 text-xl font-semibold">6. PAYMENT TERMS</h2>

      <h3 className="mt-4 text-lg font-medium">6.1 Fees and Charges</h3>
      <ul className="ml-5 list-disc">
        <li>Fees are as specified on our website or in agreements</li>
        <li>All fees are non-refundable unless stated otherwise</li>
        <li>Prices exclude applicable taxes unless specified</li>
        <li>We may change prices with 30 days notice</li>
      </ul>

      <h3 className="mt-4 text-lg font-medium">6.2 Payment Processing</h3>
      <ul className="ml-5 list-disc">
        <li>Payments processed through secure third-party providers</li>
        <li>You authorize recurring charges for subscriptions</li>
        <li>You are responsible for keeping payment information current</li>
        <li>Failed payments may result in service suspension</li>
      </ul>

      <h3 className="mt-4 text-lg font-medium">6.3 Refund Policy</h3>
      <p>Refunds are available only:</p>
      <ul className="ml-5 mt-2 list-disc">
        <li>Within 30 days for annual subscriptions (first-time purchase)</li>
        <li>If Software is materially defective and cannot be fixed</li>
        <li>As required by applicable law</li>
        <li>At our sole discretion for exceptional circumstances</li>
      </ul>

      <h3 className="mt-4 text-lg font-medium">6.4 Taxes</h3>
      <p>You are responsible for all applicable taxes, including:</p>
      <ul className="ml-5 mt-2 list-disc">
        <li>VAT, GST, or sales tax</li>
        <li>Withholding taxes where applicable</li>
        <li>Import duties for international transactions</li>
      </ul>

      <h2 className="mt-6 text-xl font-semibold">7. THIRD-PARTY SERVICES</h2>

      <h3 className="mt-4 text-lg font-medium">7.1 Third-Party Integration</h3>
      <p>
        Our Services may integrate with third-party services. We are not
        responsible for:
      </p>
      <ul className="ml-5 mt-2 list-disc">
        <li>Third-party service availability or performance</li>
        <li>Content provided by third parties</li>
        <li>Third-party terms and policies</li>
        <li>Data handling by third parties</li>
      </ul>

      <h3 className="mt-4 text-lg font-medium">7.2 Third-Party Links</h3>
      <p>
        Links to third-party websites are provided for convenience. We do not
        endorse or assume responsibility for third-party content or practices.
      </p>

      <h2 className="mt-6 text-xl font-semibold">
        8. PRIVACY AND DATA PROTECTION
      </h2>

      <h3 className="mt-4 text-lg font-medium">8.1 Privacy Policy</h3>
      <p>
        Your use of our Services is subject to our{" "}
        <Link href="/privacy" className="underline">
          Privacy Policy
        </Link>
        , which explains how we collect, use, and protect your personal data.
      </p>

      <h3 className="mt-4 text-lg font-medium">8.2 Data Processing</h3>
      <p>By using our Services, you consent to:</p>
      <ul className="ml-5 mt-2 list-disc">
        <li>Collection of usage data and analytics</li>
        <li>Processing for service provision and improvement</li>
        <li>International data transfers as described in our Privacy Policy</li>
        <li>
          Use of cookies as per our{" "}
          <Link href="/cookie-policy" className="underline">
            Cookie Policy
          </Link>
        </li>
      </ul>

      <h3 className="mt-4 text-lg font-medium">8.3 Data Security</h3>
      <p>While we implement security measures, you acknowledge that:</p>
      <ul className="ml-5 mt-2 list-disc">
        <li>No internet transmission is completely secure</li>
        <li>You use the Services at your own risk</li>
        <li>You should protect your account credentials</li>
        <li>You should report security issues promptly</li>
      </ul>

      <h2 className="mt-6 text-xl font-semibold">
        9. WARRANTIES AND DISCLAIMERS
      </h2>

      <h3 className="mt-4 text-lg font-medium">9.1 Service Provision</h3>
      <p>We will use commercially reasonable efforts to:</p>
      <ul className="ml-5 mt-2 list-disc">
        <li>Provide Services in accordance with these Terms</li>
        <li>Maintain Service availability and performance</li>
        <li>Address reported issues and bugs</li>
        <li>Protect your data as described in our Privacy Policy</li>
      </ul>

      <h3 className="mt-4 text-lg font-medium">9.2 Disclaimers</h3>
      <p className="font-semibold">TO THE MAXIMUM EXTENT PERMITTED BY LAW:</p>
      <ul className="ml-5 mt-2 list-disc">
        <li>
          SERVICES ARE PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot;
        </li>
        <li>WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED</li>
        <li>
          INCLUDING WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
          PURPOSE, AND NON-INFRINGEMENT
        </li>
        <li>WE DO NOT WARRANT UNINTERRUPTED OR ERROR-FREE SERVICE</li>
        <li>WE DO NOT WARRANT ACCURACY OR COMPLETENESS OF CONTENT</li>
        <li>WE DO NOT WARRANT SERVICES WILL MEET YOUR REQUIREMENTS</li>
      </ul>

      <h3 className="mt-4 text-lg font-medium">9.3 No Professional Advice</h3>
      <p>Our Services do not constitute professional advice. You should:</p>
      <ul className="ml-5 mt-2 list-disc">
        <li>Independently verify all simulation results</li>
        <li>Consult qualified professionals for critical decisions</li>
        <li>
          Not rely solely on our Services for safety-critical applications
        </li>
        <li>Accept full responsibility for your use of results</li>
      </ul>

      <h2 className="mt-6 text-xl font-semibold">
        10. LIMITATION OF LIABILITY
      </h2>

      <h3 className="mt-4 text-lg font-medium">10.1 Exclusion of Damages</h3>
      <p className="font-semibold">
        TO THE FULLEST EXTENT PERMITTED BY LAW, WE SHALL NOT BE LIABLE FOR:
      </p>
      <ul className="ml-5 mt-2 list-disc">
        <li>
          INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES
        </li>
        <li>LOSS OF PROFITS, REVENUE, OR BUSINESS OPPORTUNITIES</li>
        <li>LOSS OF DATA OR DATA CORRUPTION</li>
        <li>BUSINESS INTERRUPTION OR SYSTEM FAILURE</li>
        <li>COST OF SUBSTITUTE SERVICES</li>
        <li>RELIANCE ON SERVICE OUTPUT OR RESULTS</li>
        <li>THIRD-PARTY CLAIMS</li>
      </ul>

      <h3 className="mt-4 text-lg font-medium">10.2 Cap on Liability</h3>
      <p>Our total liability for any claims shall not exceed the greater of:</p>
      <ul className="ml-5 mt-2 list-disc">
        <li>£100 GBP, or</li>
        <li>
          The amount paid by you to us in the 12 months preceding the claim
        </li>
      </ul>

      <h3 className="mt-4 text-lg font-medium">10.3 Exceptions</h3>
      <p>These limitations do not apply to liability for:</p>
      <ul className="ml-5 mt-2 list-disc">
        <li>Death or personal injury caused by negligence</li>
        <li>Fraud or fraudulent misrepresentation</li>
        <li>Breaches of implied terms that cannot be excluded by law</li>
        <li>Other liability that cannot be limited under applicable law</li>
      </ul>

      <h2 className="mt-6 text-xl font-semibold">11. INDEMNIFICATION</h2>

      <h3 className="mt-4 text-lg font-medium">11.1 Your Indemnification</h3>
      <p>
        You agree to indemnify, defend, and hold harmless PAACS Software Ltd,
        its officers, directors, employees, agents, and affiliates from and
        against all claims, liabilities, damages, losses, costs, and expenses
        (including reasonable legal fees) arising from:
      </p>
      <ul className="ml-5 mt-2 list-disc">
        <li>Your breach of these Terms</li>
        <li>Your violation of applicable laws or regulations</li>
        <li>Your violation of third-party rights</li>
        <li>Your User Content</li>
        <li>Your use or misuse of the Services</li>
        <li>Your negligence or willful misconduct</li>
      </ul>

      <h3 className="mt-4 text-lg font-medium">11.2 Procedure</h3>
      <p>We will:</p>
      <ul className="ml-5 mt-2 list-disc">
        <li>Promptly notify you of any claim</li>
        <li>Provide reasonable cooperation in defense</li>
        <li>Allow you to control the defense (subject to our approval)</li>
        <li>Not settle without your consent (not unreasonably withheld)</li>
      </ul>

      <h2 className="mt-6 text-xl font-semibold">12. TERMINATION</h2>

      <h3 className="mt-4 text-lg font-medium">12.1 Termination by You</h3>
      <p>You may terminate your account at any time by:</p>
      <ul className="ml-5 mt-2 list-disc">
        <li>Following the account closure process in settings</li>
        <li>Contacting support@paacs.pro</li>
        <li>Ceasing use of the Services</li>
      </ul>

      <h3 className="mt-4 text-lg font-medium">12.2 Termination by Us</h3>
      <p>We may suspend or terminate your access immediately if you:</p>
      <ul className="ml-5 mt-2 list-disc">
        <li>Breach these Terms or other agreements</li>
        <li>Engage in illegal or fraudulent activity</li>
        <li>Fail to pay fees when due</li>
        <li>Abuse or misuse the Services</li>
        <li>Pose a risk to other users or our systems</li>
      </ul>

      <h3 className="mt-4 text-lg font-medium">12.3 Effect of Termination</h3>
      <p>Upon termination:</p>
      <ul className="ml-5 mt-2 list-disc">
        <li>Your license to use Services immediately ends</li>
        <li>You must cease all use of Services</li>
        <li>We may delete your User Content after 90 days</li>
        <li>Fees paid are non-refundable (except as required by law)</li>
        <li>Sections that should survive will remain in effect</li>
      </ul>

      <h3 className="mt-4 text-lg font-medium">12.4 Survival</h3>
      <p>
        The following sections survive termination: Intellectual Property, User
        Content licenses, Disclaimers, Limitation of Liability, Indemnification,
        Governing Law, and any other provisions that by their nature should
        survive.
      </p>

      <h2 className="mt-6 text-xl font-semibold">13. DISPUTE RESOLUTION</h2>

      <h3 className="mt-4 text-lg font-medium">13.1 Informal Resolution</h3>
      <p>
        Before filing any legal claim, you agree to attempt resolution by
        contacting legal@paacs.pro. We will attempt to resolve disputes
        informally for at least 30 days.
      </p>

      <h3 className="mt-4 text-lg font-medium">13.2 Governing Law</h3>
      <p>
        These Terms are governed by the laws of England and Wales, without
        regard to conflict of law principles.
      </p>

      <h3 className="mt-4 text-lg font-medium">13.3 Jurisdiction</h3>
      <p>
        Any disputes shall be subject to the exclusive jurisdiction of the
        courts of England and Wales, and you consent to personal jurisdiction in
        these courts.
      </p>

      <h3 className="mt-4 text-lg font-medium">13.4 Class Action Waiver</h3>
      <p>
        You agree that any disputes will be resolved individually. You waive any
        right to bring or participate in any class, collective, or
        representative action.
      </p>

      <h2 className="mt-6 text-xl font-semibold">14. GENERAL PROVISIONS</h2>

      <h3 className="mt-4 text-lg font-medium">14.1 Entire Agreement</h3>
      <p>
        These Terms, along with our Privacy Policy, Cookie Policy, EULA, and any
        applicable order forms, constitute the entire agreement between you and
        PAACS Software Ltd regarding the Services.
      </p>

      <h3 className="mt-4 text-lg font-medium">14.2 Severability</h3>
      <p>
        If any provision is held invalid or unenforceable, the remaining
        provisions shall continue in full force and effect. The invalid
        provision shall be replaced with a valid provision that comes closest to
        the intent of the original.
      </p>

      <h3 className="mt-4 text-lg font-medium">14.3 Waiver</h3>
      <p>
        No waiver shall be effective unless in writing. Our failure to enforce
        any right or provision shall not constitute a waiver of future
        enforcement.
      </p>

      <h3 className="mt-4 text-lg font-medium">14.4 Assignment</h3>
      <p>
        You may not assign or transfer these Terms or your rights without our
        prior written consent. We may assign our rights and obligations without
        restriction.
      </p>

      <h3 className="mt-4 text-lg font-medium">14.5 Force Majeure</h3>
      <p>
        Neither party shall be liable for delays or failure to perform due to
        causes beyond reasonable control, including but not limited to acts of
        God, natural disasters, war, terrorism, riots, embargoes, acts of civil
        or military authorities, fire, floods, accidents, pandemic, strikes, or
        shortages of transportation, facilities, fuel, energy, labor, or
        materials.
      </p>

      <h3 className="mt-4 text-lg font-medium">14.6 Notices</h3>
      <p>Legal notices to us should be sent to:</p>
      <div className="ml-5 mt-2">
        <p>PAACS Software Ltd</p>
        <p>Legal Department</p>
        <p>Email: legal@paacs.pro</p>
      </div>
      <p className="mt-2">
        Notices to you will be sent to your registered email address and will be
        deemed delivered upon sending.
      </p>

      <h3 className="mt-4 text-lg font-medium">14.7 Relationship</h3>
      <p>
        Nothing in these Terms creates a partnership, joint venture, agency, or
        employment relationship. You have no authority to bind us in any manner.
      </p>

      <h3 className="mt-4 text-lg font-medium">14.8 Export Compliance</h3>
      <p>
        You agree to comply with all applicable export and import laws,
        including economic sanctions and trade embargoes. You represent that you
        are not on any prohibited party list.
      </p>

      <h3 className="mt-4 text-lg font-medium">14.9 Government Users</h3>
      <p>
        If you are a government entity, our Services are &quot;commercial
        items&quot; as defined in applicable regulations, provided with only
        those rights granted to all other users under these Terms.
      </p>

      <h2 className="mt-6 text-xl font-semibold">15. BETA FEATURES</h2>

      <h3 className="mt-4 text-lg font-medium">15.1 Beta Services</h3>
      <p>
        Features labeled as &quot;beta,&quot; &quot;preview,&quot; &quot;early
        access,&quot; or similar:
      </p>
      <ul className="ml-5 mt-2 list-disc">
        <li>Are provided for testing and evaluation</li>
        <li>May be incomplete or contain errors</li>
        <li>May be discontinued at any time</li>
        <li>Are provided &quot;AS IS&quot; with no warranties</li>
        <li>Should not be used for production or critical purposes</li>
      </ul>

      <h3 className="mt-4 text-lg font-medium">15.2 Beta Feedback</h3>
      <p>
        Feedback on beta features is encouraged and becomes our property. We may
        use feedback without restriction or compensation.
      </p>

      <h2 className="mt-6 text-xl font-semibold">16. ACCESSIBILITY</h2>
      <p>
        We strive to make our Services accessible to users with disabilities. If
        you encounter accessibility issues, please contact
        accessibility@paacs.pro.
      </p>

      <h2 className="mt-6 text-xl font-semibold">17. CONTACT INFORMATION</h2>
      <div className="ml-5">
        <p>
          <strong>General Inquiries:</strong>
        </p>
        <p>
          Email:{" "}
          <a href="mailto:info@paacs.pro" className="underline">
            info@paacs.pro
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
          <strong>Privacy:</strong>
        </p>
        <p>
          Email:{" "}
          <a href="mailto:privacy@paacs.pro" className="underline">
            privacy@paacs.pro
          </a>
        </p>

        <p className="mt-3">
          <strong>Licensing:</strong>
        </p>
        <p>
          Email:{" "}
          <a href="mailto:licensing@paacs.pro" className="underline">
            licensing@paacs.pro
          </a>
        </p>
      </div>

      <div className="mt-8 rounded-lg border-2 border-gray-300 bg-gray-50 p-4 dark:border-gray-600 dark:bg-gray-800">
        <p className="text-sm font-semibold">
          BY USING OUR SERVICES, YOU ACKNOWLEDGE THAT YOU HAVE READ, UNDERSTOOD,
          AND AGREE TO BE BOUND BY THESE TERMS AND CONDITIONS.
        </p>
        <p className="mt-2 text-sm">
          If you have any questions about these Terms, please contact our legal
          team before using our Services.
        </p>
      </div>
    </div>
  );
}
