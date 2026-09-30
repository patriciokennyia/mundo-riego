import Link from "next/link";
import Image from "next/image";
import { services, solutions } from "@/content/catalog";
import { contact, site, waLink } from "@/config/site";
import { Icon } from "./Icon";
import { ExternalButtonLink } from "./Button";
import { WhatsappGlyph } from "./Header";
import { PendingText } from "./SectionHeader";

export function Footer() {
  const year = new Date().getFullYear();
  const wa = waLink();

  return (
    <footer className="mt-auto bg-brand-950 text-sand-300">
      <div className="container-page py-14 lg:py-20">
        {/* Llamado a la accion previo al pie */}
        <div className="mb-14 flex flex-col gap-6 rounded-3xl border border-brand-800 bg-brand-900/60 p-7 sm:flex-row sm:items-center sm:justify-between sm:p-9">
          <div className="max-w-xl">
            <h2 className="text-2xl font-bold text-white sm:text-[1.75rem]">
              ¿Necesitás instalar o revisar tu sistema de riego?
            </h2>
            <p className="mt-2 text-[1.0625rem] text-sand-300">
              Contanos qué tenés hoy y te decimos qué conviene hacer. La visita técnica no
              tiene cargo.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row sm:shrink-0">
            {wa && (
              <ExternalButtonLink href={wa} size="lg" className="sm:w-auto">
                <WhatsappGlyph className="size-5" />
                Hablar por WhatsApp
              </ExternalButtonLink>
            )}
            <Link
              href="/contacto"
              className="inline-flex min-h-[3.25rem] items-center justify-center rounded-full border-2 border-white/70 px-8 font-sans text-base font-semibold text-white transition-colors hover:bg-white hover:text-brand-900 sm:w-auto"
            >
              Enviar consulta
            </Link>
          </div>
        </div>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          {/* Marca */}
          <div className="lg:col-span-4">
            <Link href="/" className="inline-flex items-center gap-2.5">
              <Image
                src="/images/brand/logo-cuadrado.png"
                alt=""
                width={44}
                height={44}
                className="size-11 rounded-lg bg-white/95 object-contain p-0.5"
              />
              <span className="font-sans text-xl font-extrabold tracking-tight text-white">
                Mundo<span className="text-aqua-300">Riego</span>
              </span>
            </Link>
            <p className="mt-5 max-w-sm text-[0.9375rem] leading-relaxed text-sand-400">
              Diseñamos, instalamos y mantenemos sistemas de riego para casas, countries,
              empresas y espacios verdes. Un solo responsable de punta a punta.
            </p>

            <div className="mt-6 flex gap-2.5">
              <SocialLink href={contact.social.instagram} label="Instagram" path="M12 2.2c3.2 0 3.6 0 4.9.1 3.3.2 4.8 1.7 5 5 .1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.2 3.3-1.7 4.8-5 5-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-3.3-.2-4.8-1.7-5-5-.1-1.3-.1-1.7-.1-4.9s0-3.6.1-4.9c.2-3.3 1.7-4.8 5-5 1.3-.1 1.7-.1 4.9-.1Zm0 5.4a4.4 4.4 0 1 0 0 8.8 4.4 4.4 0 0 0 0-8.8Zm0 7.3a2.9 2.9 0 1 1 0-5.8 2.9 2.9 0 0 1 0 5.8Zm5.6-7.5a1 1 0 1 1-2.1 0 1 1 0 0 1 2.1 0Z" />
              <SocialLink href={contact.social.facebook} label="Facebook" path="M14 9V7.2c0-.8.2-1.2 1.4-1.2H17V3h-2.6C11.6 3 10.5 4.5 10.5 7v2H8.5v3h2v9h3.5v-9h2.4l.4-3H14Z" />
              <SocialLink href={contact.social.linkedin} label="LinkedIn" path="M6.9 20H3.4V9.4h3.5V20ZM5.1 7.9A2 2 0 1 1 5.1 3.8a2 2 0 0 1 0 4.1ZM20.6 20h-3.5v-5.2c0-1.2 0-2.8-1.7-2.8s-2 1.3-2 2.7V20H9.9V9.4h3.3v1.5h.1a3.6 3.6 0 0 1 3.2-1.8c3.5 0 4.1 2.3 4.1 5.3V20Z" />
            </div>
          </div>

          {/* Servicios */}
          <nav aria-labelledby="footer-servicios" className="lg:col-span-3">
            <h3
              id="footer-servicios"
              className="font-sans text-sm font-bold tracking-wider text-white uppercase"
            >
              Servicios
            </h3>
            <ul className="mt-4 space-y-2.5 text-[0.9375rem]">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/servicios/${s.slug}`}
                    className="text-sand-400 transition-colors hover:text-white"
                  >
                    {s.navTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Soluciones */}
          <nav aria-labelledby="footer-soluciones" className="lg:col-span-2">
            <h3
              id="footer-soluciones"
              className="font-sans text-sm font-bold tracking-wider text-white uppercase"
            >
              Soluciones
            </h3>
            <ul className="mt-4 space-y-2.5 text-[0.9375rem]">
              {solutions.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/soluciones/${s.slug}`}
                    className="text-sand-400 transition-colors hover:text-white"
                  >
                    {s.navTitle}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/proyectos" className="text-sand-400 hover:text-white">
                  Proyectos
                </Link>
              </li>
            </ul>
          </nav>

          {/* Contacto */}
          <div className="lg:col-span-3">
            <h3 className="font-sans text-sm font-bold tracking-wider text-white uppercase">
              Contacto
            </h3>
            <ul className="mt-4 space-y-4 text-[0.9375rem]">
              {wa && (
                <li>
                  <a
                    href={wa}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-2.5 text-sand-300 transition-colors hover:text-white"
                  >
                    <WhatsappGlyph className="mt-0.5 size-4 shrink-0 text-aqua-300" />
                    WhatsApp
                    <PendingText value={contact.whatsappNumber} />
                  </a>
                </li>
              )}
              <li className="flex items-start gap-2.5">
                <Icon name="phone" className="mt-0.5 size-4 shrink-0 text-aqua-300" />
                <span>
                  <PendingText value={contact.phoneDisplay} />
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <Icon name="chat" className="mt-0.5 size-4 shrink-0 text-aqua-300" />
                <a
                  href={contact.emailHref}
                  className="break-all text-sand-300 transition-colors hover:text-white"
                >
                  {contact.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Icon name="home" className="mt-0.5 size-4 shrink-0 text-aqua-300" />
                <span>
                  <PendingText value={contact.city} />
                  <br />
                  {contact.province}, {contact.country}
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <Icon name="clock" className="mt-0.5 size-4 shrink-0 text-aqua-300" />
                <span>
                  {contact.hours.weekdays}
                  <br />
                  {contact.hours.saturday}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Zonas de atencion */}
        <div className="mt-12 border-t border-brand-800 pt-8">
          <h3 className="font-sans text-sm font-bold tracking-wider text-white uppercase">
            Zonas de atención
          </h3>
          <ul className="mt-3 flex flex-wrap gap-2">
            {contact.serviceAreas.map((area) => (
              <li
                key={area}
                className="rounded-full border border-brand-700 bg-brand-900 px-3.5 py-1.5 text-[0.8125rem] text-sand-300"
              >
                {area}
              </li>
            ))}
          </ul>
        </div>

        {/* Legal */}
        <div className="mt-10 flex flex-col gap-4 border-t border-brand-800 pt-8 text-[0.8125rem] text-sand-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.legalName}. Todos los derechos reservados.
          </p>
          <nav aria-label="Enlaces legales" className="flex flex-wrap gap-x-5 gap-y-2">
            <Link href="/contacto#privacidad" className="hover:text-sand-300">
              Política de privacidad
            </Link>
            <Link href="/contacto#privacidad" className="hover:text-sand-300">
              Términos y condiciones
            </Link>
            <a
              href={site.url}
              className="hover:text-sand-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              {site.url.replace("https://", "")}
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({
  href,
  label,
  path,
}: {
  href: string;
  label: string;
  path: string;
}) {
  const pending = !href || href.startsWith("[COMPLETAR");

  if (pending) {
    return (
      <span
        aria-hidden="true"
        title={`${label}: pendiente de completar`}
        className="inline-flex size-10 cursor-not-allowed items-center justify-center rounded-full border border-dashed border-brand-700 text-brand-700"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" className="size-4.5">
          <path d={path} />
        </svg>
        <span className="sr-only">{label}: pendiente de completar</span>
      </span>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="inline-flex size-10 items-center justify-center rounded-full border border-brand-700 text-sand-300 transition-colors hover:border-aqua-300 hover:text-aqua-300"
    >
      <svg viewBox="0 0 24 24" fill="currentColor" className="size-4.5" aria-hidden="true">
        <path d={path} />
      </svg>
    </a>
  );
}
