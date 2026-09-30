import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Image from "next/image";
import { services, solutions } from "@/content/catalog";
import { Icon } from "@/components/Icon";
import { SectionHeader } from "@/components/SectionHeader";
import { Reveal } from "@/components/Reveal";
import { FaqAccordion } from "@/components/FaqAccordion";
import { FinalCta } from "@/components/FinalCta";
import { ButtonLink, ExternalButtonLink, ArrowLink } from "@/components/Button";
import { WhatsappGlyph } from "@/components/Header";
import { cta, site, waLink, waMessageFor } from "@/config/site";
import { metaFor, clampMeta } from "@/lib/seo";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};

  const path = `/servicios/${service.slug}`;

  return {
    title: service.title,
    description: metaFor(service.excerpt),
    alternates: { canonical: path },
    openGraph: {
      title: `${service.title} | Mundo Riego`,
      description: clampMeta(service.excerpt, 200),
      url: `${site.url}${path}`,
      images: [{ url: service.heroImage, alt: service.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${service.title} | Mundo Riego`,
      description: clampMeta(service.excerpt, 200),
      images: [service.heroImage],
    },
  };
}

export default async function ServicioPage({ params }: Params) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  const wa = waLink(waMessageFor(service.title, `${site.url}/servicios/${service.slug}`));
  const related = solutions.filter((s) => service.relatedSolutions.includes(s.slug));
  const others = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${site.url}/servicios/${service.slug}#service`,
        name: service.title,
        serviceType: service.title,
        description: service.excerpt,
        url: `${site.url}/servicios/${service.slug}`,
        image: `${site.url}${service.heroImage}`,
        provider: { "@id": `${site.url}/#organization` },
        areaServed: { "@type": "Country", name: "Argentina" },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Qué incluye",
          itemListElement: service.includes.map((item, i) => ({
            "@type": "Offer",
            position: i + 1,
            itemOffered: { "@type": "Service", name: item },
          })),
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Inicio", item: site.url },
          { "@type": "ListItem", position: 2, name: "Servicios", item: `${site.url}/servicios` },
          {
            "@type": "ListItem",
            position: 3,
            name: service.title,
            item: `${site.url}/servicios/${service.slug}`,
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: service.faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ----------------------------------------------------------------
          ENCABEZADO
      ---------------------------------------------------------------- */}
      <section className="relative isolate overflow-hidden bg-brand-950">
        <div className="absolute inset-0 -z-10">
          <Image
            src={service.heroImage}
            alt={`${service.title}: ${service.short}`}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-950 via-brand-950/85 to-brand-950/60" />
        </div>

        <div className="container-page py-12 sm:py-16 lg:py-24">
          <nav aria-label="Migas de pan" className="mb-7">
            <ol className="flex list-none flex-wrap items-center gap-2 text-sm text-sand-300">
              <li>
                <Link href="/" className="hover:text-white">
                  Inicio
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link href="/servicios" className="hover:text-white">
                  Servicios
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <span className="font-semibold text-white">{service.navTitle}</span>
              </li>
            </ol>
          </nav>

          <div className="max-w-3xl">
            <span className="inline-flex size-12 items-center justify-center rounded-2xl bg-white/15 text-white backdrop-blur-sm">
              <Icon name={service.icon} className="size-6" />
            </span>
            <h1 className="mt-5 text-[2rem] font-extrabold tracking-tight text-white sm:text-5xl">
              {service.title}
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-sand-200 sm:text-xl">
              {service.excerpt}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              {wa && (
                <ExternalButtonLink href={wa} size="lg" className="sm:w-auto">
                  <WhatsappGlyph className="size-5" />
                  {cta.quote}
                </ExternalButtonLink>
              )}
              <ButtonLink
                href="/contacto"
                size="lg"
                variant="outlineDark"
                className="sm:w-auto"
              >
                Enviar consulta
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------------------
          QUÉ INCLUYE
      ---------------------------------------------------------------- */}
      <section className="bg-white py-16 sm:py-20">
        <div className="container-page grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <SectionHeader
              eyebrow="Qué incluye"
              title={`${service.title} de punta a punta`}
              description="Un proyecto de riego no es solo colocar aspersores. Estos son los puntos que cubrimos para que el sistema funcione y siga funcionando."
            />

            <ul className="mt-9 grid list-none gap-x-6 gap-y-4 sm:grid-cols-2">
              {service.includes.map((item, i) => (
                <Reveal key={item} as="li" delay={(i % 2) * 70}>
                  <div className="flex items-start gap-3">
                    <span className="mt-0.5 inline-flex size-6 shrink-0 items-center justify-center rounded-full bg-brand-100 text-brand-700">
                      <Icon name="check" className="size-3.5" strokeWidth={2.6} />
                    </span>
                    <span className="text-[0.9375rem] leading-relaxed text-sand-700">
                      {item}
                    </span>
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>

          {/* Panel lateral: resumen y CTA */}
          <aside className="lg:col-span-5">
            <Reveal>
              <div className="sticky top-[calc(var(--header-h)+1.5rem)] rounded-2xl border border-sand-200 bg-sand-50 p-6 sm:p-7">
                <h2 className="font-sans text-lg font-bold text-brand-900">
                  Pedí tu presupuesto
                </h2>
                <p className="mt-2 text-[0.9375rem] leading-relaxed text-sand-600">
                  Contanos la superficie aproximada, qué tipo de jardín tenés y de dónde sale el
                  agua. Con eso ya podemos darte una estimación.
                </p>

                <ul className="mt-6 space-y-3 border-t border-sand-200 pt-6 text-[0.9375rem] text-sand-700">
                  <li className="flex items-start gap-2.5">
                    <Icon name="check" className="mt-0.5 size-4.5 shrink-0 text-brand-600" strokeWidth={2.2} />
                    Visita técnica sin cargo
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Icon name="check" className="mt-0.5 size-4.5 shrink-0 text-brand-600" strokeWidth={2.2} />
                    Presupuesto desglosado por partida
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Icon name="check" className="mt-0.5 size-4.5 shrink-0 text-brand-600" strokeWidth={2.2} />
                    Sistema probado antes de la entrega
                  </li>
                </ul>

                {wa && (
                  <ExternalButtonLink href={wa} full size="lg" className="mt-6">
                    <WhatsappGlyph className="size-5" />
                    {cta.whatsapp}
                  </ExternalButtonLink>
                )}
                <ButtonLink href="/contacto" full variant="secondary" className="mt-3">
                  Completar formulario
                </ButtonLink>
              </div>
            </Reveal>
          </aside>
        </div>
      </section>

      {/* ----------------------------------------------------------------
          CÓMO SE HACE
      ---------------------------------------------------------------- */}
      <section className="bg-sand-100 py-16 sm:py-20">
        <div className="container-page">
          <SectionHeader
            eyebrow="Cómo se hace"
            title="El trabajo, paso a paso"
            description="Así queda el proceso cuando contratás este servicio."
            align="center"
            className="mb-11"
          />
          <ol className="mx-auto grid max-w-4xl list-none gap-5 sm:grid-cols-2">
            {service.process.map((step, i) => (
              <Reveal key={i} as="li" delay={(i % 2) * 80} className="h-full">
                <div className="flex h-full gap-4 rounded-2xl border border-sand-200 bg-white p-6">
                  <span className="font-sans text-2xl font-extrabold text-brand-200">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-[0.9375rem] leading-relaxed text-sand-700">{step}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* ----------------------------------------------------------------
          FAQ
      ---------------------------------------------------------------- */}
      {service.faqs.length > 0 && (
        <section className="bg-white py-16 sm:py-20">
          <div className="container-page grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <SectionHeader
                eyebrow="Preguntas frecuentes"
                title="Lo que más nos preguntan"
                description="Si te queda alguna duda, escribinos y la respondemos."
              />
              <Reveal>
                <div className="mt-6">
                  <ArrowLink href="/preguntas-frecuentes">Ver todas las preguntas</ArrowLink>
                </div>
              </Reveal>
            </div>
            <div className="lg:col-span-8">
              <FaqAccordion items={service.faqs} idPrefix="faq-servicio" />
            </div>
          </div>
        </section>
      )}

      {/* ----------------------------------------------------------------
          RELACIONADOS
      ---------------------------------------------------------------- */}
      {related.length > 0 && (
        <section className="bg-sand-50 py-16 sm:py-20">
          <div className="container-page">
            <SectionHeader
              eyebrow="Dónde se aplica"
              title="Este servicio en distintos contextos"
              className="mb-9"
            />
            <ul className="grid list-none gap-5 sm:grid-cols-2">
              {related.map((s, i) => (
                <Reveal key={s.slug} as="li" delay={i * 80} className="h-full">
                  <Link
                    href={`/soluciones/${s.slug}`}
                    className="group flex h-full items-start gap-4 rounded-2xl border border-sand-200 bg-white p-6 transition-all hover:-translate-y-0.5 hover:border-brand-300 hover:shadow-soft"
                  >
                    <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                      <Icon name={s.icon} className="size-5.5" />
                    </span>
                    <span>
                      <span className="block font-sans text-[1.0625rem] font-bold text-brand-900">
                        {s.navTitle}
                      </span>
                      <span className="mt-1 block text-[0.9375rem] leading-relaxed text-sand-600">
                        {s.excerpt}
                      </span>
                      <span className="mt-3 inline-flex items-center gap-1.5 font-sans text-sm font-semibold text-brand-700 transition-transform group-hover:translate-x-1">
                        Ver solución
                        <Icon name="arrow" className="size-4" />
                      </span>
                    </span>
                  </Link>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* Otros servicios */}
      <section className="bg-white py-16 sm:py-20">
        <div className="container-page">
          <SectionHeader
            eyebrow="Otros servicios"
            title="También podés necesitar"
            className="mb-9"
          />
          <ul className="grid list-none gap-5 sm:grid-cols-3">
            {others.map((s, i) => (
              <Reveal key={s.slug} as="li" delay={i * 80} className="h-full">
                <Link
                  href={`/servicios/${s.slug}`}
                  className="group flex h-full flex-col rounded-2xl border border-sand-200 bg-white p-6 transition-all hover:-translate-y-0.5 hover:border-brand-300 hover:shadow-soft"
                >
                  <span className="inline-flex size-10 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                    <Icon name={s.icon} className="size-5" />
                  </span>
                  <span className="mt-4 font-sans text-[1.0625rem] font-bold text-brand-900">
                    {s.navTitle}
                  </span>
                  <span className="mt-1.5 flex-1 text-[0.9375rem] leading-relaxed text-sand-600">
                    {s.short}
                  </span>
                  <span className="mt-3 inline-flex items-center gap-1.5 font-sans text-sm font-semibold text-brand-700 transition-transform group-hover:translate-x-1">
                    Ver servicio
                    <Icon name="arrow" className="size-4" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <FinalCta />
    </>
  );
}
