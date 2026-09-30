import type { MetadataRoute } from "next";
import { services, solutions } from "@/content/catalog";
import { site } from "@/config/site";

// Necesario para `output: "export"`: sin esto Next exige que la ruta se declare estatica.
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const estaticas: { path: string; priority: number; freq: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
    { path: "/", priority: 1, freq: "weekly" },
    { path: "/servicios", priority: 0.9, freq: "monthly" },
    { path: "/soluciones", priority: 0.9, freq: "monthly" },
    { path: "/proyectos", priority: 0.7, freq: "monthly" },
    { path: "/nosotros", priority: 0.7, freq: "yearly" },
    { path: "/preguntas-frecuentes", priority: 0.6, freq: "monthly" },
    { path: "/contacto", priority: 0.9, freq: "yearly" },
  ];

  return [
    ...estaticas.map((r) => ({
      url: `${site.url}${r.path}`,
      lastModified: now,
      changeFrequency: r.freq,
      priority: r.priority,
    })),
    ...services.map((s) => ({
      url: `${site.url}/servicios/${s.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...solutions.map((s) => ({
      url: `${site.url}/soluciones/${s.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
