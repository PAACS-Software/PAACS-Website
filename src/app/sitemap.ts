import type { MetadataRoute } from "next";
import posts from "@/app/blog/data/posts"; // your existing posts array

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://paacs.pro";

  // Add your top-level static routes here
  const staticRoutes = ["", "/about", "/pricing", "/contact", "/blog"].map(
    (p) => ({
      url: `${base}${p || "/"}`,
      lastModified: new Date().toISOString().split("T")[0],
      changeFrequency: "weekly" as const,
      priority: p === "" ? 1 : 0.7,
    }),
  );

  const blogRoutes = posts.map((p) => ({
    url: `${base}/blog/${p.slug}/`,
    lastModified: p.date ?? new Date().toISOString().split("T")[0],
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...blogRoutes];
}
