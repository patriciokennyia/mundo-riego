import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import Link from "next/link";
import Image from "next/image";
import { services } from "@/content/catalog";
import { ServiceCard } from "@/components/Cards";
import { SectionHeader } from "@/components/SectionHeader";
import { Reveal } from "@/components/Reveal";
import { FinalCta } from "@/components/FinalCta";
import { ProcessSection } from "@/components/ProcessSteps";
import { site } from "@/config/site";

export const metadata: Metadata = pageMeta(
    "/servicios",
    "Servicios de riego | Diseño, instalación y mantenimiento",
    "Todos los servicios de Mundo Riego: instalación de riego automático, aspersión, goteo, automatización, mantenimiento, bombas y diseño de proyecto.",
  );

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Inicio",
          item: site.url,
        },
        { "@type": "ListItem", position: 2, name: "Servicios", item: `${site.url}/servicios` },
      ],
    },
    {
      "@type": "ItemList",
      name: "Servicios de riego",
      itemListElement: services.map((s, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: `${site.url}/servicios/${s.slug}`,
        name: s.title,
      })),
    },
  ],
};

export default function ServiciosPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Encabezado */}
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
                <span className="font-semibold text-brand-800">Servicios</span>
              </li>
            </ol>
          </nav>

          <SectionHeader
            eyebrow="Qué hacemos"
            title="Servicios de riego"
            as="h1"
            description="Un sistema bien instalado tiene que seguir funcionando. Por eso el trabajo no termina cuando el riego corre: incluye diseño, instalación, programación y mantenimiento."
          />
        </div>
      </section>

      {/* Listado */}
      <section className="bg-white py-14 sm:py-20">
        <div className="container-page">
          <ul className="grid list-none gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <Reveal key={service.slug} as="li" delay={(i % 3) * 80} className="h-full">
                <ServiceCard service={service} headingLevel="h2" />
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Imagen de apoyo */}
      <section className="bg-sand-50 py-14 sm:py-16">
        <div className="container-page">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl">
              <Image
                src="/images/hero/manguera.webp"
                alt="Instalación de cañería de riego sobre pasto"
                width={1600}
                height={900}
                sizes="(max-width: 1280px) 100vw, 1280px"
                className="h-64 w-full object-cover sm:h-80 lg:h-96"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-brand-950/85 to-transparent" />
              <div className="absolute inset-0 flex items-center">
                <div className="container-page">
                  <div className="max-w-md">
                    <p className="font-sans text-xs font-semibold tracking-[0.14em] text-aqua-300 uppercase">
                      Un solo responsable
                    </p>
                    <h2 className="mt-3 text-2xl font-bold text-white sm:text-3xl">
                      Diseño, instalación y mantenimiento en la misma empresa
                    </h2>
                    <p className="mt-3 text-sand-200">
                      Si algo falla, no hay que discutir de quién es el problema.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <ProcessSection />
      <FinalCta />
    </>
  );
}
