"use client";

import { useEffect, useState } from "react";
import { waLink } from "@/config/site";
import { WhatsappGlyph } from "./Header";

/**
 * Boton flotante de WhatsApp.
 * Solo mobile: en desktop compite con el CTA del header.
 * Se oculta cuando el CTA final de la pagina esta a la vista,
 * para no tapar el formulario de contacto.
 */
export function WhatsAppFab() {
  const [visible, setVisible] = useState(false);
  const [hidden, setHidden] = useState(false);
  const href = waLink();

  useEffect(() => {
    if (!href) return;

    const show = () => {
      setVisible(true);
      // Si el formulario de contacto esta cerca, no mostrar
      const form = document.getElementById("contacto-form");
      if (form) {
        const rect = form.getBoundingClientRect();
        setHidden(rect.top < window.innerHeight * 0.9);
      }
    };

    const onScroll = () => {
      if (window.scrollY > 400) show();
      else {
        setVisible(false);
        setHidden(false);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [href]);

  if (!href) return null;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Consultar por WhatsApp"
      className={`fixed right-4 bottom-[max(1rem,env(safe-area-inset-bottom))] z-40 flex items-center gap-2.5 rounded-full bg-[#25D366] py-3.5 pr-5 pl-4 font-sans text-[0.9375rem] font-bold whitespace-nowrap text-[#04231a] shadow-float transition-all duration-300 sm:hidden ${
        visible && !hidden
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      <WhatsappGlyph className="size-6" />
      Consultar
    </a>
  );
}
