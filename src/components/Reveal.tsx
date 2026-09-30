import type { CSSProperties, ElementType, ReactNode } from "react";

/**
 * Revela el contenido al entrar en viewport.
 * Usa animacion CSS scroll-driven (`animation-timeline: view()`), sin JavaScript,
 * asi que se renderiza en el servidor y no suma hidratacion.
 *
 * Progressive enhancement: si el navegador no soporta scroll-driven animations
 * el contenido se ve directamente (ver `.reveal` en globals.css).
 */
export function Reveal({
  children,
  as: Tag = "div",
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  as?: ElementType;
  delay?: number;
  className?: string;
}) {
  // El delay escalona el comienzo de la animacion dentro de la entrada en viewport.
  const shift = delay ? Math.min(12, Math.round(delay / 20)) : 0;

  return (
    <Tag
      className={`reveal ${className}`}
      style={
        shift
          ? ({
              "--reveal-start": `${shift}%`,
              "--reveal-end": `${70 + shift}%`,
            } as CSSProperties)
          : undefined
      }
    >
      {children}
    </Tag>
  );
}
