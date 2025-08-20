"use client";

import { useEffect, useState } from "react";

declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    // Check for existing consent
    const consent = document.cookie
      .split("; ")
      .find((row) => row.startsWith("site_cookie_consent="))
      ?.split("=")[1];

    if (!consent) {
      // No consent decision made yet, show banner after short delay
      const timer = setTimeout(() => setShowBanner(true), 1000);
      return () => clearTimeout(timer);
    } else if (consent === "true") {
      // Previously accepted, load GA
      loadGoogleAnalytics();
    }
  }, []);

  const loadGoogleAnalytics = () => {
    // Check if GA ID is provided
    if (!process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID) {
      console.warn("Google Analytics measurement ID not found");
      return;
    }

    // Check if already loaded to prevent duplicates
    if (window.gtag) return;

    // Load GA script
    const script = document.createElement("script");
    script.src = `https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`;
    script.async = true;
    script.onload = () => {
      // Initialize GA only after script loads
      window.dataLayer = window.dataLayer || [];
      window.gtag = function () {
        window.dataLayer.push(arguments);
      };
      window.gtag("js", new Date());
      window.gtag("config", process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID, {
        anonymize_ip: true,
        page_path: window.location.pathname,
      });
    };
    document.head.appendChild(script);
  };

  const handleChoice = (accepted: boolean) => {
    // Set cookie for 1 year
    const expires = new Date();
    expires.setFullYear(expires.getFullYear() + 1);
    document.cookie = `site_cookie_consent=${accepted}; path=/; expires=${expires.toUTCString()}; SameSite=Lax${
      window.location.protocol === "https:" ? "; Secure" : ""
    }`;

    // Hide banner
    setShowBanner(false);

    // Load GA if accepted
    if (accepted) {
      loadGoogleAnalytics();
    }
  };

  // Don't render if banner shouldn't be shown or not mounted yet (SSR)
  if (!showBanner || !mounted) return null;

  return (
    <div className="animate-fade-in-up fixed bottom-0 left-0 right-0 z-50 bg-gray-900 p-4 shadow-lg">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-sm text-white">
          We use cookies for analytics to improve your experience. See our{" "}
          <a
            href="/privacy"
            className="text-primary hover:text-primary/80 underline transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            privacy policy
          </a>
          .
        </p>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => handleChoice(true)}
            className="bg-primary hover:bg-primary/90 rounded px-4 py-2 text-sm font-medium text-white transition"
          >
            Accept
          </button>
          <button
            onClick={() => handleChoice(false)}
            className="rounded border border-gray-600 bg-transparent px-4 py-2 text-sm font-medium text-white transition hover:bg-gray-800"
          >
            Decline
          </button>
          <button
            onClick={() => setShowBanner(false)}
            className="rounded px-3 py-2 text-sm text-gray-400 hover:text-white"
            aria-label="Close banner"
          >
            ×
          </button>
        </div>
      </div>
    </div>
  );
}
