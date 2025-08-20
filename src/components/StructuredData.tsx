// src/components/StructuredData.tsx
export default function StructuredData() {
  const ids = {
    org: "https://paacs.pro/#organization",
    site: "https://paacs.pro/#website",
    home: "https://paacs.pro/#webpage",
    sw: "https://paacs.pro/#software",
    logo: "https://paacs.pro/#logo",
    og: "https://paacs.pro/#og-image",
    breadcrumbs: "https://paacs.pro/#breadcrumbs",
  };

  // --- ImageObjects ---
  const logoImage = {
    "@context": "https://schema.org",
    "@type": "ImageObject",
    "@id": ids.logo,
    url: "https://paacs.pro/images/logo/PAACS_logo_main_1024.png", // <-- your real logo
    width: 1024,
    height: 1024,
    caption: "PAACS logo",
    contentUrl: "https://paacs.pro/images/logo/PAACS_logo_main_1024.png",
    encodingFormat: "image/png",
  };

  const ogImage = {
    "@context": "https://schema.org",
    "@type": "ImageObject",
    "@id": ids.og,
    url: "https://paacs.pro/images/og-image.jpg", // your OG image
    width: 1200,
    height: 630,
    caption: "PAACS multiphysics simulation",
    contentUrl: "https://paacs.pro/images/og-image.jpg",
    encodingFormat: "image/jpeg",
  };

  // --- Organization ---
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": ids.org,
    legalName: "PAACS Software Ltd",
    name: "PAACS",
    url: "https://paacs.pro",
    logo: { "@id": ids.logo },
    image: { "@id": ids.og },
    description:
      "PAACS Software Ltd specializes in computational software for multiphysics simulation.",
    email: "support@paacs.pro",
    foundingDate: "2024",
    sameAs: [
      // Add when ready:
      "https://www.linkedin.com/company/paacs-software/",
      "https://github.com/PAACS-Software",
      // "https://x.com/paacs"
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "Customer Support",
        email: "support@paacs.pro",
        url: "https://user.paacs.pro/contact",
        availableLanguage: ["en"],
      },
    ],
  };

  // --- SoftwareApplication ---
  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "@id": ids.sw,
    name: "PAACS Software",
    applicationCategory: "EngineeringApplication",
    applicationSubCategory: "Simulation Software",
    operatingSystem: "Windows, macOS, Linux",
    inLanguage: "en",
    isAccessibleForFree: true, // academic free tier
    license: "https://paacs.pro/license", // your license page
    description:
      "Professional FEA, CFD, and multiphysics simulation software for engineers and researchers.",
    url: "https://paacs.pro",
    downloadUrl: "https://paacs.pro/download",
    softwareHelp: "https://docs.paacs.pro",
    screenshot: { "@id": ids.og },
    image: { "@id": ids.og },
    creator: { "@id": ids.org },
    publisher: { "@id": ids.org },
    maintainer: { "@id": ids.org },
    softwareVersion: "0.1.0", // <-- put your real version here
    softwareRequirements: "8 GB RAM minimum; dedicated GPU recommended.",
    featureList: [
      "Finite Element Analysis (FEA)",
      "Computational Fluid Dynamics (CFD)",
      "Multiphysics Simulation",
      "Thermal Analysis",
      "Electromagnetic Simulation",
      "Structural Analysis",
    ],
    // datePublished: "2025-08-13", // use your real first-release date
    dateModified: "2025-08-13",
    potentialAction: [
      {
        "@type": "DownloadAction",
        target: "https://paacs.pro/download",
      },
      {
        "@type": "InstallAction",
        target: "https://paacs.pro/download",
      },
    ],
    // Model free academic + paid commercial clearly:
    offers: [
      {
        "@type": "Offer",
        name: "Academic",
        price: "0.00",
        priceCurrency: "USD",
        url: "https://paacs.pro/pricing#academic",
        category: "Educational",
        availability: "https://schema.org/InStock",
      },
      {
        "@type": "Offer",
        name: "Commercial",
        url: "https://paacs.pro/pricing#commercial",
        priceSpecification: {
          "@type": "PriceSpecification",
          priceCurrency: "USD",
          // price: "99.00", // if/when you want to surface a price
        },
        availability: "https://schema.org/InStock",
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      ratingCount: "1",
      bestRating: "5",
      worstRating: "5",
    },
  };

  // --- WebSite ---
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": ids.site,
    name: "PAACS Software",
    url: "https://paacs.pro",
    inLanguage: "en",
    publisher: { "@id": ids.org },
  };

  // --- WebPage (homepage) ---
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": ids.home,
    url: "https://paacs.pro",
    name: "PAACS — Multiphysics Simulation Software",
    isPartOf: { "@id": ids.site },
    about: { "@id": ids.sw },
    primaryImageOfPage: { "@id": ids.og },
    breadcrumb: { "@id": ids.breadcrumbs },
    inLanguage: "en",
  };

  // --- Breadcrumbs (optional on homepage) ---
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": ids.breadcrumbs,
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://paacs.pro",
      },
    ],
  };

  // --- FAQ ---
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Is PAACS Software free?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "PAACS is free for academic and research use. Commercial licenses are available.",
        },
      },
      {
        "@type": "Question",
        name: "What operating systems does PAACS support?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "PAACS runs on Windows, macOS, and Linux.",
        },
      },
      {
        "@type": "Question",
        name: "What types of simulations can PAACS perform?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "PAACS supports FEA, CFD, thermal, electromagnetic, and multiphysics simulations.",
        },
      },
    ],
  };

  const graphs = [
    logoImage,
    ogImage,
    organizationSchema,
    softwareSchema,
    websiteSchema,
    webPageSchema,
    breadcrumbSchema,
    faqSchema,
  ];

  return (
    <>
      {graphs.map((node, i) => (
        <script
          key={i}
          type="application/ld+json"
          // Avoid whitespace differences by stable stringify
          dangerouslySetInnerHTML={{ __html: JSON.stringify(node) }}
        />
      ))}
    </>
  );
}
