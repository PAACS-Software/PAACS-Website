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

  useEffect(() => {
    // Check for existing consent
    const consent = document.cookie
      .split("; ")
      .find((row) => row.startsWith("site_cookie_consent="))
      ?.split("=")[1];

    if (!consent) {
      // No consent decision made yet, show banner
      setShowBanner(true);
    } else if (consent === "true") {
      // Previously accepted, load GA
      loadGoogleAnalytics();
    }
  }, []);

  const loadGoogleAnalytics = () => {
    if (!process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID) return;

    // Check if already loaded
    //if (window.gtag) return;

    // Load GA script
    const script = document.createElement("script");
    script.src = `https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`;
    script.async = true;
    document.head.appendChild(script);

    // Initialize GA
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () {
      window.dataLayer.push(arguments);
    };
    window.gtag("js", new Date());
    window.gtag("config", process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID, {
      anonymize_ip: true,
    });
  };

  const handleChoice = (accepted: boolean) => {
    // Set cookie for 1 year
    const expires = new Date();
    expires.setFullYear(expires.getFullYear() + 1);
    document.cookie = `site_cookie_consent=${accepted}; path=/; expires=${expires.toUTCString()}; SameSite=Lax`;

    // Hide banner
    setShowBanner(false);

    // Load GA if accepted
    if (accepted) {
      loadGoogleAnalytics();
    }
  };

  // Don't render if banner shouldn't be shown
  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-gray-900 p-4 shadow-lg">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-sm text-white">
          We use cookies for analytics to improve your experience. See our{" "}
          <a
            href="/privacy"
            className="hover:text-primary underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            privacy policy
          </a>
          .
        </p>
        <div className="flex gap-2">
          <button
            onClick={() => handleChoice(true)}
            className="bg-primary hover:bg-primary/90 rounded px-4 py-2 text-sm font-medium text-white transition"
          >
            Accept
          </button>
          <button
            onClick={() => handleChoice(false)}
            className="rounded bg-gray-700 px-4 py-2 text-sm font-medium text-white transition hover:bg-gray-600"
          >
            Decline
          </button>
        </div>
      </div>
    </div>
  );
}
