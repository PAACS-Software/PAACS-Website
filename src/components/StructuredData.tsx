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
    caption: "PAACS Software",
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
      "PAACS Software Ltd develops engineering tools and is focused on PAACS Mesh.",
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
        availableLanguage: ["en"],
      },
    ],
  };

  // --- SoftwareApplication ---
  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "@id": ids.sw,
    name: "PAACS Mesh",
    applicationCategory: "EngineeringApplication",
    applicationSubCategory: "Mesh generation",
    inLanguage: "en",
    description:
      "Pre-release software for surface and volume meshing, mesh quality checks, and export.",
    url: "https://paacs.pro/mesh/",
    creator: { "@id": ids.org },
    publisher: { "@id": ids.org },
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
    name: "PAACS Software | Understanding the Complex",
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

  const graphs = [
    logoImage,
    ogImage,
    organizationSchema,
    softwareSchema,
    websiteSchema,
    webPageSchema,
    breadcrumbSchema,
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
