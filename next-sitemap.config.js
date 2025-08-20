// next-sitemap.config.js
module.exports = {
  siteUrl: "https://paacs.pro",
  generateRobotsTxt: true,
  generateIndexSitemap: false, // You don't need index sitemap with few pages
  changefreq: "weekly",
  priority: 0.7,
  sitemapSize: 5000,
  exclude: [
    "/profile",
    "/signin",
    "/signup",
    "/reset-password",
    "/forgot-password",
    "/auth/callback",
    "/blog-sidebar",
    "/blog/test-blog",
    "/404",
    "/500",
    "/error",
    "/contact-success",
  ],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          // Authentication pages
          "/profile",
          "/signin",
          "/signup",
          "/reset-password",
          "/forgot-password",
          "/auth/callback",
          "/login",

          // Test/dev pages
          "/blog-sidebar",
          "/blog/test-blog",
          "/blog-details",

          // Error pages
          "/404",
          "/500",
          "/error",
          "/contact-success",

          // Block parameters and files
          "/api/*",

          // Old Jekyll paths
          "/category/*",
          "/simulations/*",
          "/feed.xml",
          "/*.html$",
        ],
      },
    ],
    additionalSitemaps: [],
    transformRobotsTxt: async (_, robotsTxt) => {
      // Remove Host directive
      const withoutHost = robotsTxt
        .split("\n")
        .filter((line) => !line.startsWith("Host:"))
        .join("\n");

      return withoutHost.replace(/\n\n+/g, "\n\n");
    },
  },
  transform: async (config, path) => {
    // Only include canonical versions (no trailing slashes)

    if (path === "/") {
      return {
        loc: path,
        changefreq: "daily",
        priority: 1.0,
        lastmod: new Date().toISOString(),
      };
    }
    if (path === "/about" || path === "/download") {
      return {
        loc: path,
        changefreq: "weekly",
        priority: 0.9,
        lastmod: new Date().toISOString(),
      };
    }
    if (path === "/pricing" || path === "/blog") {
      return {
        loc: path,
        changefreq: "weekly",
        priority: 0.8,
        lastmod: new Date().toISOString(),
      };
    }
    return {
      loc: path,
      changefreq: "monthly",
      priority: 0.6,
      lastmod: new Date().toISOString(),
    };
  },
};
