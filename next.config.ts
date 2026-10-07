import type { NextConfig } from "next";

/**
 * Redirect map from the old GoDaddy site.
 *
 * Old URLs: /practice-areas, /contact-us, /privacy-policy, /terms-and-conditions.
 * Only /contact-us changes. The other three keep the same path on the new
 * site, so they keep working with no redirect.
 *
 * `statusCode: 301` is used instead of `permanent: true`, which sends a 308.
 */
const nextConfig: NextConfig = {
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [{ source: "/contact-us", destination: "/contact", statusCode: 301 }];
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
        ],
      },
    ];
  },
};

export default nextConfig;
