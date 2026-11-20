import type { MetadataRoute } from "next";
import posts from "@/app/blog/data/posts";

export const dynamic = "force-static"; // or: export const revalidate = false;

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://paacs.pro";
  const staticRoutes = [
    "",
    "/about",
    "/terms",
    "/blog",
    "/cookie-policy",
    "/mesh/",
    "/mesh/examples/",
    "/eula",
    "/license",
    "/license/mesh/",
    "/privacy/",
    "/privacy/company/",
    "/privacy/mesh/",
  ].map((p) => ({
    url: `${base}${p || "/"}`,
    lastModified: new Date().toISOString().split("T")[0],
    changeFrequency: "weekly" as const,
    priority: p === "" ? 1 : 0.7,
  }));
  const blogRoutes = posts
    .filter((p) => !p.archived)
    .map((p) => ({
      url: `${base}/blog/${p.slug}/`,
      lastModified: p.date ?? new Date().toISOString().split("T")[0],
      changeFrequency: "monthly" as const,
      priority: 0.6,
    }));
  return [...staticRoutes, ...blogRoutes];
}
