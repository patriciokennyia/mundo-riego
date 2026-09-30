import path from "node:path";
import type { NextConfig } from "next";

// El directorio padre contiene otro proyecto (firebase) con su propio lockfile,
// por eso Next.js infiere mal el workspace root.
const projectRoot = __dirname;

const nextConfig: NextConfig = {
  turbopack: {
    root: projectRoot,
  },
  images: {
    // Formatos modernos con fallback
    formats: ["image/avif", "image/webp"],
    deviceSizes: [360, 480, 640, 768, 1024, 1280, 1536, 1920, 2400],
    imageSizes: [64, 96, 128, 200, 256, 320, 384],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 dias
  },
  poweredByHeader: false,
  compress: true,
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
      {
        source: "/images/:path*",
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

export default nextConfig;
