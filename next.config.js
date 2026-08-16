/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  reactStrictMode: true,
  compress: true,
  compiler: {
    removeConsole:
      process.env.NODE_ENV === "production" ? { exclude: ["error"] } : false,
  },
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 60 * 60 * 24 * 30,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ik.imagekit.io",
      },
      {
        protocol: "https",
        hostname: "cdn.hashnode.com",
      },
    ],
  },
  experimental: {
    optimizePackageImports: ["react-icons", "motion", "framer-motion"],
  },
  async redirects() {
    return [
      {
        source: "/blog",
        destination: "https://dev.to/shivamkatare",
        permanent: true,
      },
      {
        source: "/blog/:path*",
        destination: "https://dev.to/shivamkatare",
        permanent: true,
      },
      {
        source: "/skills",
        destination: "/work",
        permanent: true,
      },
      {
        source: "/skills/:path*",
        destination: "/work",
        permanent: true,
      },
      {
        source: "/isr",
        destination: "/",
        permanent: true,
      },
      {
        source: "/isr/:path*",
        destination: "/",
        permanent: true,
      },
      {
        source: "/learning",
        destination: "/",
        permanent: true,
      },
      {
        source: "/learning/:path*",
        destination: "/",
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
        ],
      },
      {
        source: "/:all*(svg|jpg|jpeg|png|webp|avif|ico|woff2)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
