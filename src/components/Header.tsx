import Link from "next/link";
import Image from "next/image";
import { services, solutions } from "@/content/catalog";
import { contact, cta, waLink } from "@/config/site";
import { Icon } from "./Icon";
import { ExternalButtonLink } from "./Button";
import { MobileMenu } from "./MobileMenu";

type NavItem = {
  label: string;
  href: string;
  description?: string;
  children?: { label: string; href: string; description?: string }[];
};

export const navigation: NavItem[] = [
  {
    label: "Servicios",
    href: "/servicios",
    children: services.map((s) => ({
      label: s.navTitle,
      href: `/servicios/${s.slug}`,
      description: s.short,
    })),
  },
  {
    label: "Soluciones",
    href: "/soluciones",
    children: solutions.map((s) => ({
      label: s.navTitle,
      href: `/soluciones/${s.slug}`,
      description: s.excerpt,
    })),
  },
  { label: "Proyectos", href: "/proyectos" },
  { label: "Nosotros", href: "/nosotros" },
  { label: "Preguntas frecuentes", href: "/preguntas-frecuentes" },
];

export function Header() {
  const wa = waLink();

  return (
    <header className="sticky top-0 z-50 border-b border-sand-200/80 bg-sand-50/85 backdrop-blur-md">
      {/* Barra superior: datos de contacto rapidos */}
      <div className="hidden border-b border-sand-200/70 bg-brand-900 text-sand-200 lg:block">
        <div className="container-page flex h-9 items-center justify-between text-xs">
          <p className="flex items-center gap-2">
            <Icon name="check" className="size-3.5 text-aqua-300" strokeWidth={2} />
            {contact.responseTime}
          </p>
          <div className="flex items-center gap-5">
            <a
              href={`mailto:${contact.email}`}
              className="link-underline transition-colors hover:text-white"
            >
              {contact.email}
            </a>
            <span className="text-brand-500">|</span>
            <span>{contact.city === "[COMPLETAR]" ? "Argentina" : contact.city}, Argentina</span>
          </div>
        </div>
      </div>

      <div className="container-page flex h-[var(--header-h)] items-center justify-between gap-4">
        {/* Logo */}
        <Link
          href="/"
          className="flex shrink-0 items-center gap-2.5"
        >
          <Image
            src="/images/brand/logo-cuadrado.png"
            alt=""
            width={40}
            height={40}
            className="size-10 rounded-lg object-contain"
            priority
          />
          <span className="font-sans text-lg leading-none font-extrabold tracking-tight text-brand-900">
            Mundo<span className="text-brand-600">Riego</span>
          </span>
        </Link>

        {/* Navegacion desktop */}
        <nav aria-label="Navegación principal" className="hidden items-center gap-1 lg:flex">
          {navigation.map((item) =>
            item.children ? (
              <Dropdown key={item.href} item={item} />
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-full px-3.5 py-2 font-sans text-[0.9375rem] font-medium text-brand-800 transition-colors hover:bg-brand-50 hover:text-brand-900"
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>

        {/* CTA */}
        <div className="flex items-center gap-2">
          {wa && (
            <ExternalButtonLink
              href={wa}
              size="sm"
              className="hidden sm:inline-flex"
              aria-label="Hablar por WhatsApp"
            >
              <WhatsappGlyph className="size-4" />
              <span className="hidden md:inline">WhatsApp</span>
            </ExternalButtonLink>
          )}
          <MobileMenu navigation={navigation} ctaPrimary={cta.primary} waHref={wa} />
        </div>
      </div>
    </header>
  );
}

/** Dropdown accesible con teclado y hover */
function Dropdown({ item }: { item: NavItem }) {
  return (
    <div className="group relative">
      <Link
        href={item.href}
        className="flex items-center gap-1 rounded-full px-3.5 py-2 font-sans text-[0.9375rem] font-medium text-brand-800 transition-colors hover:bg-brand-50 hover:text-brand-900"
        aria-haspopup="true"
      >
        {item.label}
        <svg
          viewBox="0 0 12 12"
          className="size-3 fill-current opacity-60 transition-transform group-hover:rotate-180 group-focus-within:rotate-180"
          aria-hidden="true"
        >
          <path d="M6 8.5 2 4.5h8Z" />
        </svg>
      </Link>

      {/* Panel */}
      <div
        className="invisible absolute top-full left-0 z-50 w-[26rem] rounded-2xl border border-sand-200 bg-white p-2 opacity-0 shadow-lift transition-all duration-150 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100"
      >
        <Link
          href={item.href}
          className="mb-1 flex items-center justify-between rounded-xl bg-brand-50 px-3.5 py-2.5 font-sans text-sm font-bold text-brand-800 transition-colors hover:bg-brand-100"
        >
          Ver {item.label.toLowerCase()}
          <Icon name="arrow" className="size-4" />
        </Link>
        {item.children?.map((child) => (
          <Link
            key={child.href}
            href={child.href}
            className="block rounded-xl px-3.5 py-2.5 transition-colors hover:bg-sand-50"
          >
            <span className="block font-sans text-sm font-semibold text-brand-900">
              {child.label}
            </span>
            {child.description && (
              <span className="mt-0.5 block text-[0.8125rem] leading-snug text-sand-600">
                {child.description}
              </span>
            )}
          </Link>
        ))}
      </div>
    </div>
  );
}

/** Glifo de WhatsApp (marca, no se puede usar el set de iconos propio) */
export function WhatsappGlyph({ className = "size-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M17.47 14.38c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.95 1.16-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.48-1.75-1.65-2.05-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.01-1.04 2.47s1.06 2.87 1.21 3.07c.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.69.63.71.22 1.36.19 1.87.12.57-.09 1.75-.72 2-1.41.25-.69.25-1.28.17-1.41-.07-.13-.27-.2-.57-.35Z" />
      <path d="M12.04 2C6.6 2 2.18 6.42 2.18 11.86c0 1.74.46 3.44 1.32 4.94L2 22.5l5.86-1.53a9.83 9.83 0 0 0 4.18.93h.01c5.43 0 9.85-4.42 9.85-9.86A9.79 9.79 0 0 0 12.04 2Zm0 17.98h-.01a8.2 8.2 0 0 1-4.16-1.14l-.3-.18-3.1.81.83-3.02-.2-.31a8.16 8.16 0 0 1-1.25-4.37c0-4.52 3.68-8.2 8.2-8.2 2.19 0 4.24.86 5.79 2.4a8.14 8.14 0 0 1 2.4 5.8c0 4.52-3.68 8.21-8.2 8.21Z" />
    </svg>
  );
}
