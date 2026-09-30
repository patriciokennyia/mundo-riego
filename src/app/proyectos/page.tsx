import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import Link from "next/link";
import Image from "next/image";
import { projects } from "@/content/catalog";
import { SectionHeader } from "@/components/SectionHeader";
import { Reveal } from "@/components/Reveal";
import { ProjectCard } from "@/components/Cards";
import { FinalCta } from "@/components/FinalCta";


export const metadata: Metadata = pageMeta(
    "/proyectos",
    "Proyectos de riego | Trabajos reales",
    "Galería de proyectos de riego automático: instalación, mantenimiento y diseño en casas, countries, empresas y espacios verdes.",
  );

const published = projects.filter((p) => p.status === "published");
const pending = projects.filter((p) => p.status === "pending");

export default function ProyectosPage() {
  return (
    <>
      {/* Encabezado */}
      <section className="relative isolate overflow-hidden bg-brand-950">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/hero/por-riego.webp"
            alt="Obra de riego automático en una vivienda"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-950 via-brand-950/85 to-brand-950/60" />
        </div>
        <div className="container-page py-14 sm:py-20">
          <nav aria-label="Migas de pan" className="mb-7">
            <ol className="flex list-none flex-wrap items-center gap-2 text-sm text-sand-300">
              <li>
                <Link href="/" className="hover:text-white">
                  Inicio
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <span className="font-semibold text-white">Proyectos</span>
              </li>
            </ol>
          </nav>
          <div className="max-w-3xl">
            <h1 className="text-[2rem] font-extrabold tracking-tight text-white sm:text-5xl">
              Trabajos reales, con fotos reales
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-sand-200">
              Cada proyecto se documenta con fotografías de la obra, el problema que había, el
              sistema que instalamos y cómo quedó. Sin imágenes genéricas.
            </p>
          </div>
        </div>
      </section>

      {/* Proyectos publicados */}
      {published.length > 0 && (
        <section className="bg-white py-16 sm:py-20">
          <div className="container-page">
            <SectionHeader eyebrow="Galería" title="Proyectos publicados" className="mb-11" />
            <ul className="grid list-none gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {published.map((p, i) => (
                <Reveal key={p.slug} as="li" delay={(i % 3) * 80} className="h-full">
                  <ProjectCard
                    title={p.title}
                    location={p.location}
                    clientType={p.clientType}
                    image={p.images[0]}
                  />
                </Reveal>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* Estructura pendiente */}
      <section className="bg-sand-50 py-16 sm:py-20">
        <div className="container-page">
          <SectionHeader
            eyebrow="En carga"
            title="La galería se está armando"
            description="Cada obra que documentamos lleva fotos, ubicación, tipo de sistema y resultado. Preferimos mostrar menos proyectos con información completa que muchos con fotos genéricas."
            className="mb-11"
          />

          <ul className="grid list-none gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {pending.map((p, i) => (
              <Reveal key={p.slug} as="li" delay={(i % 3) * 80} className="h-full">
                <ProjectCard
                  title={p.title}
                  location={p.location}
                  clientType={p.clientType}
                  pending
                />
              </Reveal>
            ))}
          </ul>

          {/* Ficha modelo: muestra que la estructura esta lista */}
          <Reveal delay={150}>
            <div className="mt-10 overflow-hidden rounded-2xl border border-sand-200 bg-white">
              <div className="border-b border-sand-200 bg-sand-50 px-6 py-4">
                <h3 className="font-sans text-[0.9375rem] font-bold text-brand-900">
                  Estructura de ficha de proyecto (lista para cargar)
                </h3>
              </div>
              <dl className="grid gap-x-8 gap-y-4 p-6 sm:grid-cols-2">
                {[
                  ["Nombre del proyecto", "[COMPLETAR]"],
                  ["Ubicación", "[COMPLETAR: barrio o localidad]"],
                  ["Tipo de cliente", "[COMPLETAR: casa / country / empresa / huerta]"],
                  ["Superficie", "[COMPLETAR: m²]"],
                  ["Sistema instalado", "[COMPLETAR: aspersión, goteo, mixto, tipo de aspersor]"],
                  ["Problema", "[COMPLETAR: qué no funcionaba o por qué se llamó]"],
                  ["Solución", "[COMPLETAR: qué se diseñó e instaló]"],
                  ["Resultado", "[COMPLETAR: resultado real medible, si lo hay]"],
                ].map(([label, value]) => (
                  <div key={label} className="border-b border-sand-100 pb-3">
                    <dt className="text-[0.8125rem] font-semibold text-sand-500">{label}</dt>
                    <dd className="mt-1">
                      <span className="pending text-[0.9375rem]">{value}</span>
                    </dd>
                  </div>
                ))}
              </dl>
              <p className="border-t border-sand-200 bg-sand-50 px-6 py-4 text-[0.875rem] text-sand-600">
                Las fotos de cada proyecto se guardan en{" "}
                <code className="rounded bg-sand-200 px-1.5 py-0.5 text-xs">
                  public/images/projects/
                </code>{" "}
                y se referencian desde{" "}
                <code className="rounded bg-sand-200 px-1.5 py-0.5 text-xs">
                  src/content/catalog.ts
                </code>
                .
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <FinalCta
        title="¿Querés ver un trabajo parecido al tuyo?"
        body="Contanos cómo es tu espacio y te mostramos cómo resolvimos casos similares."
      />
    </>
  );
}
