import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import Link from "next/link";
import Image from "next/image";
import { solutions } from "@/content/catalog";
import { SolutionCard } from "@/components/Cards";
import { SectionHeader } from "@/components/SectionHeader";
import { Reveal } from "@/components/Reveal";
import { FinalCta } from "@/components/FinalCta";
import { site } from "@/config/site";

export const metadata: Metadata = pageMeta(
    "/soluciones",
    "Soluciones de riego por tipo de proyecto",
    "Riego automático para casas y jardines, countries y barrios cerrados, empresas, huertas y canchas. Elegí tu tipo de proyecto.",
  );

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Inicio", item: site.url },
        {
          "@type": "ListItem",
          position: 2,
          name: "Soluciones",
          item: `${site.url}/soluciones`,
        },
      ],
    },
    {
      "@type": "ItemList",
      name: "Soluciones de riego",
      itemListElement: solutions.map((s, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: `${site.url}/soluciones/${s.slug}`,
        name: s.title,
      })),
    },
  ],
};

export default function SolucionesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="border-b border-sand-200 bg-sand-100 py-14 sm:py-20">
        <div className="container-page">
          <nav aria-label="Migas de pan" className="mb-6">
            <ol className="flex list-none flex-wrap items-center gap-2 text-sm text-sand-600">
              <li>
                <Link href="/" className="hover:text-brand-800">
                  Inicio
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <span className="font-semibold text-brand-800">Soluciones</span>
              </li>
            </ol>
          </nav>

          <SectionHeader
            eyebrow="Por tipo de proyecto"
            title="Soluciones de riego según el espacio"
            as="h1"
            description="Un jardín de una casa, las áreas comunes de un country y el predio de una empresa tienen necesidades distintas. Elegí la que se parezca a tu caso."
          />
        </div>
      </section>

      <section className="bg-white py-14 sm:py-20">
        <div className="container-page">
          <ul className="grid list-none gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {solutions.map((solution, i) => (
              <Reveal key={solution.slug} as="li" delay={(i % 3) * 80} className="h-full">
                <SolutionCard solution={solution} headingLevel="h2" />
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-sand-50 py-14 sm:py-16">
        <div className="container-page">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl">
              <Image
                src="/images/hero/fondo-principal.webp"
                alt="Riego automático en un jardín: aspersores y cañería sectorizada"
                width={1600}
                height={900}
                sizes="(max-width: 1280px) 100vw, 1280px"
                className="h-56 w-full object-cover sm:h-72"
              />
              <div className="absolute inset-0 bg-brand-950/80" />
              <div className="absolute inset-0 flex items-center">
                <div className="container-page">
                  <p className="max-w-lg font-sans text-xl font-bold text-white sm:text-2xl">
                    ¿Tu caso no está en esta lista? Contanos cómo es el espacio y te decimos cómo
                    lo resolvemos.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <FinalCta />
    </>
  );
}
