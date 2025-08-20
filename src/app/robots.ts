import type { MetadataRoute } from "next";

export const dynamic = "force-static"; // or: export const revalidate = false;

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: "https://paacs.pro/sitemap.xml",
    host: "https://paacs.pro",
  };
}
// src/app/robots.ts
// This file generates a robots.txt for the PAACS website, allowing all user agents to access
