import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import { Inter } from "next/font/google";
import "../styles/index.css";
import { Metadata } from "next";
import StructuredData from "@/components/StructuredData";
import CookieBanner from "@/components/Banner/CookieBanner"; // tiny, consent-gates GA

import { Providers } from "./providers";

export const dynamic = "error";
export const revalidate = false;

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://paacs.pro"),
  applicationName: "PAACS Software",
  category: "technology",
  title: {
    default: "PAACS Software - Engineering Simulation Tools",
    template: "%s | PAACS Software",
  },
  description:
    "PAACS Software delivers powerful, intuitive simulation tools for engineers and researchers. FEA, CFD, and multiphysics simulations in one seamless environment.",
  keywords: [
    "PAACS Software",
    "simulation software",
    "FEA software",
    "CFD software",
    "engineering simulation",
    "computational modeling",
    "multiphysics simulation",
    "finite element analysis",
    "computational fluid dynamics",
  ],
  authors: [{ name: "PAACS Software Ltd" }],
  creator: "PAACS Software Ltd",
  publisher: "PAACS Software Ltd",
  alternates: { canonical: "https://paacs.pro" },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "PAACS Software",
    title: "PAACS Software - Advanced Simulation Tools",
    description: "Powerful simulation tools for engineering and research",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "PAACS Software",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@PAACS_Software",
    creator: "@PAACS_Software",
    title: "PAACS Software",
    description: "Advanced simulation tools for engineers",
    images: ["/images/og-image.jpg"],
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "PAACS Software",
  },

  formatDetection: {
    telephone: false,
    date: false,
    address: false,
    email: false,
    url: false,
  },
  referrer: "origin-when-cross-origin",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head>
        <meta name="apple-mobile-web-app-title" content="PAACS" />
        <StructuredData />
      </head>
      <body className={`bg-[#FCFCFC] dark:bg-black ${inter.className}`}>
        <Providers>
          {/* Theme provider for dark mode */}
          <Header />
          {children}
          <Footer />
          <ScrollToTop />
          {/* Minimal consent banner that injects GA only after accept */}
          <CookieBanner />
        </Providers>
      </body>
    </html>
  );
}
