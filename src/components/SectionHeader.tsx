import { Reveal } from "./Reveal";

/** Encabezado de seccion: eyebrow + titulo + descripcion */
export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "light",
  className = "",
  as: Heading = "h2",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
  className?: string;
  /** Nivel del titular. Usar "h1" solo en el encabezado principal de la pagina. */
  as?: "h1" | "h2" | "h3";
}) {
  const centered = align === "center";
  return (
    <Reveal
      className={`${centered ? "mx-auto max-w-2xl text-center" : "max-w-2xl"} ${className}`}
    >
      {eyebrow && (
        <p
          className={`mb-3 font-sans text-xs font-semibold tracking-[0.14em] uppercase ${
            tone === "dark" ? "text-aqua-300" : "text-brand-600"
          }`}
        >
          {eyebrow}
        </p>
      )}
      <Heading
        className={`text-[1.75rem] leading-[1.15] font-bold sm:text-4xl lg:text-[2.5rem] ${
          tone === "dark" ? "text-white" : "text-brand-900"
        }`}
      >
        {title}
      </Heading>
      {description && (
        <p
          className={`mt-4 text-lg leading-relaxed ${
            tone === "dark" ? "text-sand-200" : "text-sand-700"
          }`}
        >
          {description}
        </p>
      )}
    </Reveal>
  );
}

/** Reemplaza los placeholders [COMPLETAR: ...] por texto marcado visualmente */
export function PendingText({ value }: { value: string }) {
  if (value.startsWith("[COMPLETAR")) {
    return <span className="pending">{value}</span>;
  }
  return <>{value}</>;
}
