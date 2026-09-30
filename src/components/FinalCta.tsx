import Image from "next/image";
import { cta, waLink } from "@/config/site";
import { ExternalButtonLink, ButtonLink } from "./Button";
import { WhatsappGlyph } from "./Header";
import { Reveal } from "./Reveal";
import { Icon } from "./Icon";

/** CTA final: una sola accion clara, imagen de fondo */
export function FinalCta({
  title = "¿Necesitás mejorar tu sistema de riego?",
  body = "Contanos qué tenés hoy en tu jardín y te ayudamos a encontrar la solución. La visita técnica no tiene cargo.",
  variant = "image",
}: {
  title?: string;
  body?: string;
  variant?: "image" | "solid";
}) {
  const wa = waLink();

  if (variant === "solid") {
    return (
      <section className="bg-brand-900 py-16 sm:py-20">
        <div className="container-page">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="text-[1.75rem] font-bold text-white sm:text-4xl">{title}</h2>
            <p className="mt-4 text-lg text-sand-300">{body}</p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              {wa && (
                <ExternalButtonLink href={wa} size="lg" className="sm:w-auto">
                  <WhatsappGlyph className="size-5" />
                  {cta.primary}
                </ExternalButtonLink>
              )}
              <ButtonLink
                href="/contacto"
                size="lg"
                variant="outlineDark"
                className="sm:w-auto"
              >
                <Icon name="chat" className="size-5" />
                Enviar consulta
              </ButtonLink>
            </div>
          </Reveal>
        </div>
      </section>
    );
  }

  return (
    <section className="relative isolate overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/hero/por-riego-2.webp"
          alt="Sistema de riego instalado y funcionando en un espacio verde"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-brand-950/80" />
      </div>

      <div className="container-page py-20 sm:py-24 lg:py-32">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="font-sans text-xs font-semibold tracking-[0.14em] text-aqua-300 uppercase">
            Empecemos
          </p>
          <h2 className="mt-4 text-[1.875rem] font-extrabold text-white sm:text-5xl">
            {title}
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-sand-200">
            {body}
          </p>

          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap">
            {wa && (
              <ExternalButtonLink href={wa} size="lg" className="sm:w-auto">
                <WhatsappGlyph className="size-5" />
                {cta.primary}
              </ExternalButtonLink>
            )}
            <ButtonLink
              href="/contacto"
              size="lg"
              variant="outlineDark"
              className="sm:w-auto"
            >
              <Icon name="chat" className="size-5" />
              Enviar una consulta
            </ButtonLink>
          </div>

          <p className="mt-6 text-sm text-sand-400">
            Respondemos las consultas en el día. Sin compromiso.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
