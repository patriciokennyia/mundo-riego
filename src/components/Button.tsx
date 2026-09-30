import Link from "next/link";
import { Icon } from "./Icon";

/* ==========================================================================
   BOTONES
   Jerarquia de CTA clara:
   - primary  -> marca, alta conversion (WhatsApp, presupuesto)
   - secondary -> contorno
   - ghost    -> texto, bajo peso
   ========================================================================== */

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-sans font-semibold " +
  "transition-all duration-200 active:scale-[0.98] disabled:opacity-50 " +
  "min-h-[2.875rem] px-6 py-3 text-center text-[0.9375rem] leading-tight";

const variants = {
  primary:
    "bg-brand-700 text-white shadow-soft hover:bg-brand-800 hover:shadow-lift focus-visible:outline-brand-800",
  accent:
    "bg-clay-500 text-brand-950 hover:bg-clay-400 hover:shadow-lift focus-visible:outline-clay-600",
  secondary:
    "border-2 border-brand-700 text-brand-800 hover:bg-brand-700 hover:text-white focus-visible:outline-brand-700",
  onDark:
    "bg-white text-brand-900 hover:bg-aqua-100 shadow-soft hover:shadow-lift focus-visible:outline-white",
  outlineDark:
    "border-2 border-white/70 text-white hover:bg-white hover:text-brand-900 focus-visible:outline-white",
  ghost: "text-brand-800 hover:bg-brand-50 px-4 min-h-[2.5rem]",
} as const;

const sizes = {
  sm: "min-h-[2.5rem] px-4 py-2 text-sm",
  md: "",
  lg: "min-h-[3.25rem] px-8 text-base",
} as const;

type Variant = keyof typeof variants;
type Size = keyof typeof sizes;

function classes(variant: Variant, size: Size, full: boolean) {
  return [base, variants[variant], sizes[size], full ? "w-full" : ""]
    .filter(Boolean)
    .join(" ");
}

/** Boton de enlace interno */
export function ButtonLink({
  href,
  children,
  variant = "primary",
  size = "md",
  full = false,
  className = "",
  ...rest
}: {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  size?: Size;
  full?: boolean;
  className?: string;
} & Omit<React.ComponentProps<typeof Link>, "href" | "className">) {
  return (
    <Link href={href} className={`${classes(variant, size, full)} ${className}`} {...rest}>
      {children}
    </Link>
  );
}

/** Boton de enlace externo (WhatsApp, mailto, tel) */
export function ExternalButtonLink({
  href,
  children,
  variant = "primary",
  size = "md",
  full = false,
  className = "",
  ...rest
}: {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  size?: Size;
  full?: boolean;
  className?: string;
} & Omit<React.ComponentProps<"a">, "href" | "className">) {
  const external = href.startsWith("http");
  return (
    <a
      href={href}
      className={`${classes(variant, size, full)} ${className}`}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      {...rest}
    >
      {children}
    </a>
  );
}

export function Button({
  children,
  variant = "primary",
  size = "md",
  full = false,
  className = "",
  ...rest
}: {
  children: React.ReactNode;
  variant?: Variant;
  size?: Size;
  full?: boolean;
  className?: string;
} & Omit<React.ComponentProps<"button">, "className">) {
  return (
    <button className={`${classes(variant, size, full)} ${className}`} {...rest}>
      {children}
    </button>
  );
}

/** Flecha que acompaña los enlaces de navegacion interna */
export function ArrowLink({
  href,
  children,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`group inline-flex items-center gap-1.5 font-sans font-semibold text-brand-700 link-underline ${className}`}
    >
      {children}
      <Icon
        name="arrow"
        className="size-4 transition-transform duration-200 group-hover:translate-x-1"
      />
    </Link>
  );
}
