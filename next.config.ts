import path from "node:path";
import type { NextConfig } from "next";

// El directorio padre contiene otro proyecto (firebase) con su propio lockfile,
// por eso Next.js infiere mal el workspace root.
const projectRoot = __dirname;

/**
 * Modo exportacion estatica: `NEXT_OUTPUT=export npm run build` genera la carpeta
 * `out/` con HTML plano, para subir a un hosting compartido copiando archivos.
 *
 * Se activa por variable de entorno a proposito, y no siempre, porque `output:"export"`
 * deshabilita `next start`: desarrollo y testing necesitan el servidor de Node.
 */
const isExport = process.env.NEXT_OUTPUT === "export";

const nextConfig: NextConfig = {
  turbopack: {
    root: projectRoot,
  },

  // En exportacion estatica no hay servidor que resuelva el optimizador de imagenes,
  // y `next start` no existe. Ademas `trailingSlash` genera `servicios/x/index.html`
  // en vez de `servicios/x.html`, que es lo que entienden Apache y la maioria de los
  // hostings compartidos sin configuracion extra.
  ...(isExport ? { output: "export" as const, trailingSlash: true } : {}),

  images: isExport
    ? {
        // Sin optimizador: se sirve el archivo de `public/` tal cual. Las imagenes ya
        // estan recomprimidas en WebP, asi que se pierde el srcset responsive pero
        // no la calidad.
        unoptimized: true,
      }
    : {
        // Formatos modernos con fallback
        formats: ["image/avif", "image/webp"],
        deviceSizes: [360, 480, 640, 768, 1024, 1280, 1536, 1920, 2400],
        imageSizes: [64, 96, 128, 200, 256, 320, 384],
        minimumCacheTTL: 60 * 60 * 24 * 30, // 30 dias
      },
  poweredByHeader: false,
  compress: true,
  // Los headers de seguridad de abajo solo aplican con servidor Node.
  // En exportacion estatica los resuelve el `.htaccess` de `public/`.
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
