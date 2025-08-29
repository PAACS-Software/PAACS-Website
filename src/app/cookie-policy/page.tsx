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
        Last updated: March 31, 2025
      </p>

      <p className="mt-4">
        This Cookie Policy explains how PAACS Software Ltd (&ldquo;we&rdquo;,
        &ldquo;us&rdquo;, or &ldquo;our&rdquo;) uses cookies and related
        technologies on our website. It complements our{" "}
        <a href="/privacy" className="underline">
          Privacy Policy
        </a>
        , which further describes how we protect your personal data.
      </p>

      <h2 className="mt-6 text-xl font-semibold">What Are Cookies?</h2>
      <p>
        Cookies are small text files placed on your device when you visit a
        website. They help the site recognize your device, remember your
        preferences, and enhance your browsing experience. Some cookies last
        only for the duration of your session and are deleted when you close
        your browser (“session cookies”), while others may remain on your device
        for a set period of time (“persistent cookies”).
      </p>

      <h2 className="mt-6 text-xl font-semibold">Types of Cookies We Use</h2>
      <ul className="ml-5 list-disc">
        <li>
          <strong>Essential Cookies</strong>: These are necessary for the
          website’s core features, such as user authentication, security, and
          remembering items in your cart (if applicable). Without these cookies,
          our site may not function properly.
        </li>
        <li>
          <strong>Analytics Cookies</strong>: These cookies collect information
          about how you interact with our site (e.g., pages visited, time on
          site). We use this data to improve site performance and understand
          user behavior. A common tool here is <strong>Google Analytics</strong>
          .
        </li>
        <li>
          <strong>Security & Anti-Spam Cookies</strong>: For example,{" "}
          <strong>Google reCAPTCHA</strong> places cookies to differentiate
          human users from bots (
          <a href="https://policies.google.com/privacy" className="underline">
            Google Privacy Policy
          </a>{" "}
          and{" "}
          <a href="https://policies.google.com/terms" className="underline">
            Terms of Service
          </a>
          ). This helps protect our forms and other site features from spam or
          abuse.
        </li>
        <li>
          <strong>Functional Cookies (Soon to be implemented)</strong>: Cookies
          that remember your preferences (e.g., language selection, theme).
          While not essential, they enhance usability.
        </li>
      </ul>

      <h2 className="mt-6 text-xl font-semibold">Why We Use Cookies</h2>
      <p>We use cookies to:</p>
      <ul className="ml-5 list-disc">
        <li>Provide a secure login process</li>
        <li>Save your cookie preferences and other settings</li>
        <li>Improve site performance and user experience</li>
        <li>Protect against spam, bots, and unauthorized access</li>
        <li>
          Analyze how the site is used so we can enhance content and
          functionality
        </li>
      </ul>

      <h2 className="mt-6 text-xl font-semibold">
        Managing Your Cookie Preferences
      </h2>
      <p>You can manage or disable cookies at any time via:</p>
      <ul className="ml-5 list-disc">
        <li>
          Our cookie banner or “Manage Cookies” link (if provided) to
          accept/decline certain categories of cookies.
        </li>
        <li>
          Your browser settings, where you can block or delete cookies. Note
          that blocking essential cookies may limit some core functionality of
          our site.
        </li>
      </ul>

      <h2 className="mt-6 text-xl font-semibold">Third-Party Cookies</h2>
      <p>
        Some features on our site may use cookies from third-party providers
        (e.g., Google, GitHub). These providers may have their own cookie
        policies. We encourage you to review their policies for more
        information:
      </p>
      <ul className="ml-5 list-disc">
        <li>
          <a
            href="https://policies.google.com/technologies/cookies"
            className="underline"
          >
            Google Cookie Policy
          </a>
        </li>
        <li>Other providers as relevant (e.g. GitHub, OAuth providers)</li>
      </ul>

      <h2 className="mt-6 text-xl font-semibold">Cookie Retention</h2>
      <p>
        The duration a cookie stays on your device depends on whether it is
        “session” or “persistent.” Session cookies are deleted once you close
        your browser. Persistent cookies remain stored even after a browser is
        closed, up to their set expiration date or until manually removed.
      </p>

      <h2 className="mt-6 text-xl font-semibold">
        Changes to This Cookie Policy
      </h2>
      <p>
        We may update this Cookie Policy periodically to reflect changes in our
        practices or relevant laws. We’ll notify you of any significant changes
        via our site or your user dashboard. Continued use of our site after
        such updates indicates acceptance of the new policy.
      </p>

      <h2 className="mt-6 text-xl font-semibold">Contact Us</h2>
      <p>
        If you have questions or concerns about our Cookie Policy, please email
        us at{" "}
        <a href="mailto:support@paacs.pro" className="underline">
          support@paacs.pro
        </a>
        . You can also refer to our{" "}
        <a href="/privacy" className="underline">
          Privacy Policy
        </a>{" "}
        for more details on how we handle your personal data.
      </p>
    </div>
  );
}
