import Image from "next/image";
import Link from "next/link";
import type { Service, Solution } from "@/types";
import { Icon } from "./Icon";

/** Tarjeta de servicio: imagen, nombre, descripcion corta y CTA */
export function ServiceCard({
  service,
  headingLevel: H = "h3",
}: {
  service: Service;
  headingLevel?: "h2" | "h3";
}) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-sand-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-brand-300 hover:shadow-lift focus-within:-translate-y-1 focus-within:shadow-lift">
      <div className="relative aspect-[4/3] overflow-hidden bg-sand-100">
        <Image
          src={service.heroImage}
          alt={`${service.title}: ${service.short}`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-950/30 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        <span className="absolute top-3 left-3 inline-flex size-10 items-center justify-center rounded-xl bg-white/95 text-brand-700 shadow-soft backdrop-blur-sm">
          <Icon name={service.icon} className="size-5" />
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <H className="text-lg font-bold text-brand-900">
          <Link href={`/servicios/${service.slug}`} className="after:absolute after:inset-0">
            {service.navTitle}
          </Link>
        </H>
        <p className="mt-2 flex-1 text-[0.9375rem] leading-relaxed text-sand-600">
          {service.short}
        </p>
        <span className="mt-4 inline-flex items-center gap-1.5 font-sans text-sm font-semibold text-brand-700 transition-transform duration-200 group-hover:translate-x-1">
          Ver servicio
          <Icon name="arrow" className="size-4" />
        </span>
      </div>
    </article>
  );
}

/** Tarjeta de solucion por tipo de cliente */
export function SolutionCard({
  solution,
  headingLevel: H = "h3",
}: {
  solution: Solution;
  headingLevel?: "h2" | "h3";
}) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl bg-brand-900 text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lift focus-within:-translate-y-1 focus-within:shadow-lift">
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={solution.heroImage}
          alt={`${solution.title} — ${solution.short}`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover opacity-85 transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-950 via-brand-950/40 to-transparent" />
        <span className="absolute top-3 left-3 inline-flex size-10 items-center justify-center rounded-xl bg-white/15 text-white backdrop-blur-sm">
          <Icon name={solution.icon} className="size-5" />
        </span>
      </div>

      <div className="relative flex flex-1 flex-col p-5 sm:p-6">
        <p className="text-[0.6875rem] font-semibold tracking-[0.12em] text-aqua-300 uppercase">
          {solution.audience}
        </p>
        <H className="mt-1.5 text-lg font-bold text-white">
          <Link href={`/soluciones/${solution.slug}`} className="after:absolute after:inset-0">
            {solution.navTitle}
          </Link>
        </H>
        <p className="mt-2 flex-1 text-[0.9375rem] leading-relaxed text-sand-300">
          {solution.excerpt}
        </p>
        <span className="mt-4 inline-flex items-center gap-1.5 font-sans text-sm font-semibold text-aqua-300 transition-transform duration-200 group-hover:translate-x-1">
          Conocer la solución
          <Icon name="arrow" className="size-4" />
        </span>
      </div>
    </article>
  );
}

/** Tarjeta de proyecto */
export function ProjectCard({
  title,
  location,
  clientType,
  image,
  pending = false,
}: {
  title: string;
  location: string;
  clientType: string;
  image?: string;
  pending?: boolean;
}) {
  if (pending) {
    return (
      <div className="flex h-full flex-col rounded-2xl border-2 border-dashed border-sand-300 bg-sand-100 p-6">
        <span className="inline-flex size-11 items-center justify-center rounded-xl bg-white text-sand-400">
          <Icon name="gate" className="size-5" />
        </span>
        <h3 className="mt-4 text-lg font-bold text-sand-700">Proyecto pendiente de carga</h3>
        <p className="mt-2 text-[0.9375rem] leading-relaxed text-sand-600">
          {clientType}. La ficha se completa con fotos reales de la obra, ubicación, sistema
          instalado y resultado.
        </p>
        <span className="pending mt-auto self-start text-xs">
          {location}
        </span>
      </div>
    );
  }

  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-sand-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
      <div className="relative aspect-[4/3] overflow-hidden bg-sand-100">
        {image && (
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        )}
        <span className="absolute bottom-3 left-3 rounded-full bg-white/95 px-3 py-1 font-sans text-xs font-semibold text-brand-800 backdrop-blur-sm">
          {clientType}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-lg font-bold text-brand-900">{title}</h3>
        <p className="mt-1.5 text-sm text-sand-600">{location}</p>
      </div>
    </article>
  );
}
