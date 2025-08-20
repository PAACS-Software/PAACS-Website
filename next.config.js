/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // build to /out for static hosting (GitHub Pages, etc.)
  images: { unoptimized: true }, // needed for static export
  trailingSlash: true, // (nice-to-have) generates .../index.html pages
};
module.exports = nextConfig;
