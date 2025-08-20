import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      // block any dynamic/api stuff if it exists on another subdomain
      { userAgent: "*", disallow: ["/api/*"] },
    ],
    sitemap: "https://paacs.pro/sitemap.xml",
    host: "https://paacs.pro",
  };
}
