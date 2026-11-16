import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import localFont from "next/font/local";
import "../styles/index.css";
import { Metadata } from "next";
import StructuredData from "@/components/StructuredData";
import CookieBanner from "@/components/Banner/CookieBanner"; // tiny, consent-gates GA

import { Providers } from "./providers";

export const dynamic = "error";
export const revalidate = false;

const inter = localFont({
  src: "./fonts/inter-latin.woff2",
  weight: "100 900",
  display: "swap",
});

const siteDescription =
  "PAACS Software is developing PAACS Mesh for surface and volume meshing, mesh checks, and export. Multiphysics modelling is planned for a later stage.";

export const metadata: Metadata = {
  metadataBase: new URL("https://paacs.pro"),
  applicationName: "PAACS Software",
  category: "technology",
  title: {
    default: "PAACS Software | Engineering Tools",
    template: "%s | PAACS Software",
  },
  description: siteDescription,
  keywords: [
    "PAACS Software",
    "PAACS Mesh",
    "mesh generation",
    "surface meshing",
    "tetrahedral meshing",
    "finite element meshes",
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
    title: "PAACS Mesh | PAACS Software",
    description: siteDescription,
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
    title: "PAACS Mesh | PAACS Software",
    description: siteDescription,
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
