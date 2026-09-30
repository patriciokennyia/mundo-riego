import Image from "next/image";
import Link from "next/link";
import { cta, contact, waLink } from "@/config/site";
import { ExternalButtonLink } from "./Button";
import { WhatsappGlyph } from "./Header";
import { Icon } from "./Icon";

/**
 * HERO
 * Mobile first: imagen de fondo + overlay, contenido en columna.
 * En desktop el texto se apoya sobre un degradado lateral para
 * mantener contraste AA sin apagar la fotografia.
 */
export function Hero() {
  const wa = waLink();

  return (
    <section className="relative isolate overflow-hidden bg-brand-950">
      {/* Fondo */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/hero/fondo-principal.webp"
          alt="Sistema de riego automático por aspersión en un jardín residencial, instalado y funcionando"
          fill
          priority
          fetchPriority="high"
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-950 via-brand-950/75 to-brand-950/45" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-950/85 via-brand-950/40 to-transparent" />
      </div>

      <div className="container-page flex min-h-[calc(100svh-var(--header-h))] items-center py-16 sm:py-20 lg:py-24">
        <div className="max-w-2xl">
          {/* Etiqueta de ubicacion */}
          <p className="flex items-center gap-2 text-[0.8125rem] font-semibold tracking-[0.12em] text-aqua-300 uppercase">
            <Icon name="water" className="size-4" strokeWidth={1.8} />
            Diseño · Instalación · Mantenimiento
          </p>

          <h1 className="mt-5 text-[2.125rem] leading-[1.08] font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Cada gota en su lugar.
            <span className="block text-aqua-300">Cada zona bien regada.</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-sand-200 sm:text-xl">
            Diseñamos, instalamos y mantenemos sistemas de riego automático para casas,
            countries, empresas y espacios verdes. Relevamos tu espacio, calculamos la solución
            y la instalamos prolija.
          </p>

          {/* CTAs */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            {wa && (
              <ExternalButtonLink href={wa} size="lg" className="sm:w-auto">
                <WhatsappGlyph className="size-5" />
                {cta.primary}
              </ExternalButtonLink>
            )}
            <Link
              href="/servicios"
              className="inline-flex min-h-[3.25rem] items-center justify-center gap-2 rounded-full border-2 border-white/70 px-8 font-sans text-base font-semibold text-white transition-colors hover:bg-white hover:text-brand-900 sm:w-auto"
            >
              {cta.services}
              <Icon name="arrow" className="size-4" />
            </Link>
          </div>

          {/* Señales de confianza */}
          <ul className="mt-10 grid grid-cols-2 gap-x-6 gap-y-4 border-t border-white/15 pt-8 sm:flex sm:flex-wrap sm:gap-x-10">
            {[
              "Visita técnica sin cargo",
              "Presupuesto claro",
              "Instalación prolija y documentada",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-[0.9375rem] text-sand-200">
                <Icon
                  name="check"
                  className="mt-0.5 size-5 shrink-0 text-aqua-300"
                  strokeWidth={2.2}
                />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Franja de contacto rapida, solo mobile */}
      <div className="border-t border-white/10 bg-brand-950/80 py-3 backdrop-blur-sm lg:hidden">
        <div className="container-page flex items-center justify-between text-sm">
          <span className="flex items-center gap-1.5 text-sand-300">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-aqua-400 opacity-75" />
              <span className="relative inline-flex size-2 rounded-full bg-aqua-400" />
            </span>
            {contact.responseTime}
          </span>
          {contact.serviceAreas[0] && !contact.serviceAreas[0].startsWith("[COMPLETAR") && (
            <span className="text-sand-400">{contact.serviceAreas[0]}</span>
          )}
        </div>
      </div>
    </section>
  );
}
