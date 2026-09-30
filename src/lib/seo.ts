/** Utilidades de SEO compartidas */
import type { Metadata } from "next";
import { site } from "@/config/site";

const OG_IMAGE = {
  url: "/images/hero/fondo-principal.webp",
  width: 1200,
  height: 630,
  alt: "Sistema de riego automático instalado por Mundo Riego",
};

/**
 * Recorta una meta description a `max` caracteres sin cortar palabras
 * a la mitad. Si excede, corta en el ultimo espacio y agrega "...".
 * Google muestra ~155-160 caracteres en desktop.
 */
export function clampMeta(text: string, max = 155): string {
  const clean = text.replace(/\s+/g, " ").trim();
  if (clean.length <= max) return clean;

  const slice = clean.slice(0, max - 3);
  const lastSpace = slice.lastIndexOf(" ");
  const body = lastSpace > max * 0.6 ? slice.slice(0, lastSpace) : slice;
  return `${body.replace(/[\s,.;:]+$/, "")}...`;
}

/**
 * Arma la meta description de una ficha (servicio o solucion):
 * resumen + llamado a la accion, recortada a un largo que Google no corta.
 */
export function metaFor(base: string, cta = "Visita técnica sin cargo. Pedí presupuesto por WhatsApp.") {
  return clampMeta(`${base} ${cta}`);
}

/**
 * Metadata completa y consistente para una pagina interna.
 * Genera canonical y og:url propios, que si no quedan apuntando al home
 * porque se heredan del layout.
 *
 * @param path  ruta interna con slash inicial, ej. "/contacto"
 * @param title titulo SIN el sufijo de marca (lo agrega el template del layout)
 */
export function pageMeta(path: string, title: string, description: string): Metadata {
  const url = `${site.url}${path}`;
  return {
    title,
    description: clampMeta(description),
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: "es_AR",
      url,
      siteName: site.name,
      title,
      description: clampMeta(description),
      images: [OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: clampMeta(description),
      images: [OG_IMAGE.url],
    },
  };
}
