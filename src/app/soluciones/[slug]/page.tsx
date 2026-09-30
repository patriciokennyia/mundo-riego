import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Image from "next/image";
import { solutions, services } from "@/content/catalog";
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
  return solutions.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const solution = solutions.find((s) => s.slug === slug);
  if (!solution) return {};

  const path = `/soluciones/${solution.slug}`;

  return {
    title: solution.title,
    description: metaFor(solution.excerpt),
    alternates: { canonical: path },
    openGraph: {
      title: `${solution.title} | Mundo Riego`,
      description: clampMeta(solution.excerpt, 200),
      url: `${site.url}${path}`,
      images: [{ url: solution.heroImage, alt: solution.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${solution.title} | Mundo Riego`,
      description: clampMeta(solution.excerpt, 200),
      images: [solution.heroImage],
    },
  };
}

export default async function SolucionPage({ params }: Params) {
  const { slug } = await params;
  const solution = solutions.find((s) => s.slug === slug);
  if (!solution) notFound();

  const wa = waLink(waMessageFor(solution.title, `${site.url}/soluciones/${solution.slug}`));
  const relatedServices = services.filter((s) => solution.relatedServices.includes(s.slug));
  const others = solutions.filter((s) => s.slug !== solution.slug).slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${site.url}/soluciones/${solution.slug}#service`,
        name: solution.title,
        serviceType: solution.title,
        description: solution.excerpt,
        url: `${site.url}/soluciones/${solution.slug}`,
        image: `${site.url}${solution.heroImage}`,
        provider: { "@id": `${site.url}/#organization` },
        areaServed: { "@type": "Country", name: "Argentina" },
        audience: { "@type": "Audience", audienceType: solution.audience },
      },
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
          {
            "@type": "ListItem",
            position: 3,
            name: solution.title,
            item: `${site.url}/soluciones/${solution.slug}`,
          },
        ],
      },
      ...(solution.faqs.length
        ? [
            {
              "@type": "FAQPage",
              mainEntity: solution.faqs.map((f) => ({
                "@type": "Question",
                name: f.q,
                acceptedAnswer: { "@type": "Answer", text: f.a },
              })),
            },
          ]
        : []),
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Encabezado */}
      <section className="relative isolate overflow-hidden bg-brand-950">
        <div className="absolute inset-0 -z-10">
          <Image
            src={solution.heroImage}
            alt={`${solution.title} — ${solution.short}`}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-950 via-brand-950/85 to-brand-950/55" />
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
                <Link href="/soluciones" className="hover:text-white">
                  Soluciones
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <span className="font-semibold text-white">{solution.navTitle}</span>
              </li>
            </ol>
          </nav>

          <div className="max-w-3xl">
            <p className="font-sans text-xs font-semibold tracking-[0.14em] text-aqua-300 uppercase">
              {solution.audience}
            </p>
            <h1 className="mt-3 text-[2rem] font-extrabold tracking-tight text-white sm:text-5xl">
              {solution.title}
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-sand-200 sm:text-xl">
              {solution.excerpt}
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

      {/* Problema vs solución */}
      <section className="bg-white py-16 sm:py-20">
        <div className="container-page grid gap-10 lg:grid-cols-2 lg:gap-14">
          <Reveal>
            <div className="h-full rounded-2xl border border-sand-200 bg-sand-50 p-7 sm:p-8">
              <span className="inline-flex size-11 items-center justify-center rounded-xl bg-clay-400/20 text-clay-600">
                <Icon name="wrench" className="size-5.5" />
              </span>
              <h2 className="mt-5 text-2xl font-bold text-brand-900">
                Lo que suele pasar
              </h2>
              <p className="mt-2 text-sand-600">
                Estas son las situaciones con las que nos encontramos en este tipo de proyecto.
              </p>
              <ul className="mt-6 space-y-3.5">
                {solution.painPoints.map((p) => (
                  <li key={p} className="flex items-start gap-3 text-[0.9375rem] leading-relaxed text-sand-700">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-clay-500" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="h-full rounded-2xl border border-brand-200 bg-brand-50 p-7 sm:p-8">
              <span className="inline-flex size-11 items-center justify-center rounded-xl bg-brand-700 text-white">
                <Icon name="check" className="size-6" strokeWidth={2.2} />
              </span>
              <h2 className="mt-5 text-2xl font-bold text-brand-900">
                Cómo lo resolvemos
              </h2>
              <p className="mt-2 text-sand-600">
                El enfoque para este tipo de espacio.
              </p>
              <ul className="mt-6 space-y-3.5">
                {solution.solution.map((s) => (
                  <li key={s} className="flex items-start gap-3 text-[0.9375rem] leading-relaxed text-sand-700">
                    <span className="mt-0.5 inline-flex size-5 shrink-0 items-center justify-center rounded-full bg-brand-600 text-white">
                      <Icon name="check" className="size-3" strokeWidth={3} />
                    </span>
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Servicios aplicables */}
      {relatedServices.length > 0 && (
        <section className="bg-sand-100 py-16 sm:py-20">
          <div className="container-page">
            <SectionHeader
              eyebrow="Servicios involucrados"
              title="Qué hacemos en este tipo de proyecto"
              className="mb-9"
            />
            <ul className="grid list-none gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {relatedServices.map((s, i) => (
                <Reveal key={s.slug} as="li" delay={(i % 3) * 80} className="h-full">
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
      )}

      {/* FAQ */}
      {solution.faqs.length > 0 && (
        <section className="bg-white py-16 sm:py-20">
          <div className="container-page grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <SectionHeader
                eyebrow="Preguntas frecuentes"
                title="Dudas de este tipo de proyecto"
              />
              <Reveal>
                <div className="mt-6">
                  <ArrowLink href="/preguntas-frecuentes">Ver todas las preguntas</ArrowLink>
                </div>
              </Reveal>
            </div>
            <div className="lg:col-span-8">
              <FaqAccordion items={solution.faqs} idPrefix="faq-solucion" />
            </div>
          </div>
        </section>
      )}

      {/* Otras soluciones */}
      <section className="bg-sand-50 py-16 sm:py-20">
        <div className="container-page">
          <SectionHeader
            eyebrow="Otras soluciones"
            title="Mirá si tu caso es otro"
            className="mb-9"
          />
          <ul className="grid list-none gap-5 sm:grid-cols-3">
            {others.map((s, i) => (
              <Reveal key={s.slug} as="li" delay={i * 80} className="h-full">
                <Link
                  href={`/soluciones/${s.slug}`}
                  className="group flex h-full flex-col rounded-2xl border border-sand-200 bg-white p-6 transition-all hover:-translate-y-0.5 hover:border-brand-300 hover:shadow-soft"
                >
                  <span className="inline-flex size-10 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                    <Icon name={s.icon} className="size-5" />
                  </span>
                  <span className="mt-4 font-sans text-[1.0625rem] font-bold text-brand-900">
                    {s.navTitle}
                  </span>
                  <span className="mt-1.5 flex-1 text-[0.9375rem] leading-relaxed text-sand-600">
                    {s.excerpt}
                  </span>
                  <span className="mt-3 inline-flex items-center gap-1.5 font-sans text-sm font-semibold text-brand-700 transition-transform group-hover:translate-x-1">
                    Ver solución
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
