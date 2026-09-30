import type { IconName } from "@/types";

/**
 * Set de iconos propio, trazo 1.5, 24x24.
 * Se dibujan en linea para que hereden color y grosor del contexto.
 */
const paths: Record<IconName, React.ReactNode> = {
  // --- servicios ---
  wrench: (
    <>
      <path d="M14.7 6.3a4 4 0 0 0 5 5l-9.6 9.6a2.1 2.1 0 0 1-3-3L16.7 8.3" />
      <path d="M14.7 6.3 17.6 3.4a4 4 0 0 1 2.1 5 4 4 0 0 1-5 5" />
    </>
  ),
  sprinkler: (
    <>
      <path d="M12 3v3.5" />
      <path d="M12 6.5 7.5 4" />
      <path d="M12 6.5 16.5 4" />
      <path d="M6 13a6 6 0 0 1 12 0" />
      <path d="M12 13v3.5" />
      <path d="M9 16.5 6.5 20" />
      <path d="M15 16.5 17.5 20" />
      <path d="M12 16.5V21" />
      <path d="M3 9.5 5.5 8" />
      <path d="M21 9.5 18.5 8" />
    </>
  ),
  droplet: (
    <>
      <path d="M12 2.7 6.9 9.2A7 7 0 1 0 17.1 9.2Z" />
      <path d="M12 17.5a3.2 3.2 0 0 1-3.2-3.2" />
    </>
  ),
  chip: (
    <>
      <rect x="7" y="7" width="10" height="10" rx="1.5" />
      <rect x="3.5" y="3.5" width="17" height="17" rx="3" />
      <path d="M12 1.5v2M12 20.5v2M22.5 12h-2M3.5 12h-2" />
    </>
  ),
  tools: (
    <>
      <path d="M14.7 6.3a4 4 0 0 0 5 5l-9.6 9.6a2.1 2.1 0 0 1-3-3Z" />
      <path d="m6.5 4.5 13 13" />
      <path d="M3 6.5 6.5 3l3 3L3 9.5Z" />
    </>
  ),
  pump: (
    <>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 8V2.5M12 16v5.5" />
      <path d="M12 2.5a3 3 0 0 1 3 3M12 21.5a3 3 0 0 0 3-3" />
      <path d="M2.5 12H7M17 12h4.5" />
    </>
  ),
  ruler: (
    <>
      <path d="M3.5 15.5 15.5 3.5l5 5-12 12Z" />
      <path d="m7 12 2 2M10 9l2 2M13 6l2 2" />
    </>
  ),
  chat: (
    <>
      <path d="M21 11.5a7.5 7.5 0 0 1-8 7.5c-1 0-2-.2-2.9-.6L4 20l1.6-4.6A7.4 7.4 0 0 1 4.5 12 7.5 7.5 0 0 1 12.5 4.5h.6A7.5 7.5 0 0 1 21 11Z" />
      <path d="M9 11.5h6" />
    </>
  ),

  // --- soluciones ---
  home: (
    <>
      <path d="m3 10.5 9-7 9 7V20a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 20Z" />
      <path d="M9.5 21.5v-7h5v7" />
    </>
  ),
  gate: (
    <>
      <path d="M3 21V4.5M21 21V4.5" />
      <path d="M3 4.5h18" />
      <path d="M7 21V11h10v10" />
      <path d="M7 15.5h10" />
    </>
  ),
  building: (
    <>
      <path d="M4 21V5.5A1.5 1.5 0 0 1 5.5 4h7A1.5 1.5 0 0 1 14 5.5V21" />
      <path d="M14 10h4.5A1.5 1.5 0 0 1 20 11.5V21" />
      <path d="M2.5 21h19" />
      <path d="M7 8h4M7 12h4M7 16h4" />
    </>
  ),
  leaf: (
    <>
      <path d="M4 20c0-8 5-14 16-15 .5 9-4 15-11 15-2 0-3.5-.5-5 0Z" />
      <path d="M4.5 19.5C8 15 11 12 16 9.5" />
    </>
  ),
  field: (
    <>
      <path d="M3 8.5h18v3H3zM3 15h18v3H3z" />
      <path d="M12 8.5v-5M12 18v3" />
    </>
  ),

  // --- varios ---
  water: (
    <>
      <path d="M12 2.7 6.9 9.2A7 7 0 1 0 17.1 9.2Z" />
      <path d="M3 12.5c1.5 0 1.5 1.5 3 1.5s1.5-1.5 3-1.5 1.5 1.5 3 1.5 1.5-1.5 3-1.5 1.5 1.5 3 1.5" />
      <path d="M3 17.5c1.5 0 1.5 1.5 3 1.5s1.5-1.5 3-1.5 1.5 1.5 3 1.5 1.5-1.5 3-1.5 1.5 1.5 3 1.5" />
    </>
  ),
  check: <path d="m4.5 12.5 5 5 10-11" />,
  arrow: (
    <>
      <path d="M4 12h15" />
      <path d="m13 6 6 6-6 6" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5.5l3.5 2" />
    </>
  ),
  shield: (
    <>
      <path d="M12 2.5 4 5.5v6c0 5 3.4 8.6 8 10 4.6-1.4 8-5 8-10v-6Z" />
      <path d="m9 12 2 2 4-4" />
    </>
  ),
  phone: (
    <path d="M6.5 3h3l1.5 4-2 1.5a12 12 0 0 0 5.5 5.5L16 12l4 1.5v3a2 2 0 0 1-2.2 2A17 17 0 0 1 3.5 5.2 2 2 0 0 1 5.5 3Z" />
  ),
};

export function Icon({
  name,
  className = "size-6",
  strokeWidth = 1.5,
}: {
  name: IconName;
  className?: string;
  strokeWidth?: number;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      {paths[name]}
    </svg>
  );
}
