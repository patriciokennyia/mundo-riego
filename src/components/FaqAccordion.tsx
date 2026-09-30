"use client";

import { useState } from "react";
import type { FaqItem } from "@/types";
import { Icon } from "./Icon";

/** Acordeon de preguntas frecuentes, accesible con teclado */
export function FaqAccordion({
  items,
  defaultOpen = 0,
  idPrefix = "faq",
  as: H = "h3",
}: {
  items: FaqItem[];
  defaultOpen?: number | null;
  idPrefix?: string;
  /** Nivel del titular. h2 cuando el acordeon cuelga directamente del h1 de la pagina. */
  as?: "h2" | "h3";
}) {
  const [open, setOpen] = useState<number | null>(defaultOpen);

  return (
    <div className="divide-y divide-sand-200 overflow-hidden rounded-2xl border border-sand-200 bg-white">
      {items.map((item, i) => {
        const isOpen = open === i;
        const btnId = `${idPrefix}-btn-${i}`;
        const panelId = `${idPrefix}-panel-${i}`;
        return (
          <div key={item.q}>
            <H>
              <button
                type="button"
                id={btnId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-sans text-[1.0625rem] font-semibold text-brand-900 transition-colors hover:bg-sand-50 sm:px-6 sm:py-5"
              >
                <span>{item.q}</span>
                <span
                  className={`inline-flex size-8 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-700 transition-transform duration-200 ${
                    isOpen ? "rotate-45" : ""
                  }`}
                  aria-hidden="true"
                >
                  <Icon name="arrow" className="size-4 -rotate-45" />
                </span>
              </button>
            </H>
            <div
              id={panelId}
              role="region"
              aria-labelledby={btnId}
              hidden={!isOpen}
              className="animate-fade-in bg-sand-50/60 px-5 pb-5 sm:px-6 sm:pb-6"
            >
              <p className="text-[0.9375rem] leading-relaxed text-sand-700">{item.a}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
