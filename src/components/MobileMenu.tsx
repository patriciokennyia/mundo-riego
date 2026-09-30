"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Icon } from "./Icon";
import { ExternalButtonLink } from "./Button";
import { WhatsappGlyph } from "./Header";

type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string; description?: string }[];
};

export function MobileMenu({
  navigation,
  ctaPrimary,
  waHref,
}: {
  navigation: NavItem[];
  ctaPrimary: string;
  waHref: string | null;
}) {
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const btnRef = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();

  // Cerrar al cambiar de ruta
  useEffect(() => {
    setOpen(false);
    setExpanded(null);
  }, [pathname]);

  // Bloquear scroll + Escape + devolver foco
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    // Mover el foco dentro del dialog al abrir (aria-modal exige empezar dentro)
    const first = panelRef.current?.querySelector<HTMLElement>(
      "button:not([tabindex='-1']), a[href]",
    );
    first?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        btnRef.current?.focus();
      }
      if (e.key === "Tab" && panelRef.current) {
        // El overlay del fondo tiene tabindex="-1": no es enfocable y no cuenta
        // para calcular el primero/ultimo del ciclo.
        const focusables = panelRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]):not([tabindex="-1"])',
        );
        if (!focusables.length) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <>
      <button
        ref={btnRef}
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls="menu-movil"
        aria-label={open ? "Cerrar menú" : "Abrir menú"}
        className="inline-flex size-11 items-center justify-center rounded-full border border-sand-300 bg-white text-brand-800 transition-colors hover:bg-sand-100 lg:hidden"
      >
        <span className="sr-only">Menú</span>
        <span aria-hidden="true" className="relative block h-4 w-5">
          <span
            className={`absolute left-0 block h-[2px] w-5 rounded-full bg-current transition-all duration-200 ${
              open ? "top-1.5 rotate-45" : "top-0"
            }`}
          />
          <span
            className={`absolute top-1.5 left-0 block h-[2px] w-5 rounded-full bg-current transition-opacity duration-200 ${
              open ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`absolute left-0 block h-[2px] w-5 rounded-full bg-current transition-all duration-200 ${
              open ? "top-1.5 -rotate-45" : "top-3"
            }`}
          />
        </span>
      </button>

      {open && (
        <div
          id="menu-movil"
          ref={panelRef}
          role="dialog"
          aria-modal="true"
          aria-label="Menú de navegación"
          className="fixed inset-0 z-50 lg:hidden"
        >
          <button
            tabIndex={-1}
            aria-hidden="true"
            onClick={() => setOpen(false)}
            className="absolute inset-0 h-full w-full animate-fade-in bg-brand-950/50 backdrop-blur-sm"
          />

          <div className="animate-fade-up absolute inset-x-0 top-0 max-h-[100dvh] overflow-y-auto overscroll-contain rounded-b-3xl bg-sand-50 pb-[max(1.5rem,env(safe-area-inset-bottom))] shadow-float">
            <div className="container-page flex h-[var(--header-h)] items-center justify-between">
              <span className="font-sans text-base font-extrabold text-brand-900">
                Menú
              </span>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="inline-flex size-11 items-center justify-center rounded-full border border-sand-300 bg-white text-brand-800"
              >
                <span className="sr-only">Cerrar menú</span>
                <svg
                  viewBox="0 0 24 24"
                  className="size-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  aria-hidden="true"
                >
                  <path d="m5 5 14 14M19 5 5 19" />
                </svg>
              </button>
            </div>

            <nav aria-label="Navegación móvil" className="container-page">
              <ul className="divide-y divide-sand-200 border-y border-sand-200">
                {navigation.map((item) => {
                  const isOpen = expanded === item.href;
                  return (
                    <li key={item.href}>
                      <div className="flex items-center">
                        <Link
                          href={item.href}
                          className="flex-1 py-4 font-sans text-lg font-semibold text-brand-900"
                        >
                          {item.label}
                        </Link>
                        {item.children && (
                          <button
                            type="button"
                            onClick={() => setExpanded(isOpen ? null : item.href)}
                            aria-expanded={isOpen}
                            aria-controls={`sub-${item.href}`}
                            className="inline-flex size-11 items-center justify-center text-brand-700"
                          >
                            <span className="sr-only">
                              {isOpen ? `Ocultar ${item.label}` : `Ver ${item.label}`}
                            </span>
                            <svg
                              viewBox="0 0 24 24"
                              className={`size-5 transition-transform duration-200 ${
                                isOpen ? "rotate-180" : ""
                              }`}
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              aria-hidden="true"
                            >
                              <path d="m6 9 6 6 6-6" />
                            </svg>
                          </button>
                        )}
                      </div>

                      {item.children && (
                        <ul
                          id={`sub-${item.href}`}
                          hidden={!isOpen}
                          className="animate-fade-in space-y-1 pb-3 pl-3"
                        >
                          {item.children.map((c) => (
                            <li key={c.href}>
                              <Link
                                href={c.href}
                                className="block rounded-xl px-3 py-2.5 text-[0.9375rem] text-brand-800 transition-colors hover:bg-white"
                              >
                                {c.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  );
                })}
                <li>
                  <Link
                    href="/contacto"
                    className="block py-4 font-sans text-lg font-semibold text-brand-900"
                  >
                    Contacto
                  </Link>
                </li>
              </ul>

              <div className="mt-6 space-y-3">
                {waHref && (
                  <ExternalButtonLink href={waHref} full size="lg" variant="primary">
                    <WhatsappGlyph className="size-5" />
                    {ctaPrimary}
                  </ExternalButtonLink>
                )}
                <Link
                  href="/contacto"
                  className="inline-flex min-h-[3.25rem] w-full items-center justify-center gap-2 rounded-full border-2 border-brand-700 px-6 font-sans text-base font-semibold text-brand-800"
                >
                  <Icon name="chat" className="size-5" />
                  Enviar una consulta
                </Link>
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
