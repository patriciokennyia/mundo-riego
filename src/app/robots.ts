import type { MetadataRoute } from "next";
import { site } from "@/config/site";

// Necesario para `output: "export"`: sin esto Next exige que la ruta se declare estatica.
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        // Etapa 2: cuando exista el catalogo, se Decide si se indexa.
        // Por ahora no hay nada que indexar, asi que no se bloquea nada.
        disallow: [],
      },
    ],
    sitemap: `${site.url}/sitemap.xml`,
    host: site.url,
  };
}
