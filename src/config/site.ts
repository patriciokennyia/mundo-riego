/**
 * CONFIGURACION CENTRAL DE MUNDO RIEGO
 * ====================================
 *
 * Este es el UNICO archivo donde tenes que completar los datos de la empresa.
 * Todos los valores marcados como "[COMPLETAR]" aparecen en el sitio.
 *
 * Revisá ademas:
 *  - src/content/*.ts        -> textos de servicios, soluciones y FAQ
 *  - src/app/sitemap.ts      -> URLs del sitio
 *
 * IMPORTANTE: si un valor queda como "[COMPLETAR]", el sitio lo muestra
 * en gris con la etiqueta visible, para que se note que falta.
 */

// ---------------------------------------------------------------------------
// IDENTIDAD
// ---------------------------------------------------------------------------
export const site = {
  name: "Mundo Riego",
  legalName: "Mundo Riego",
  url: "https://mundo-riego.com.ar",
  locale: "es_AR",
  lang: "es-AR",
  tagline: "Riego automático para casas, countries y espacios verdes",
  foundedYear: null, // [COMPLETAR] año de inicio, si se quiere publicar
} as const;

// ---------------------------------------------------------------------------
// CONTACTO  >>> COMPLETAR TODOS LOS [COMPLETAR] DE ESTA SECCION <<<
// ---------------------------------------------------------------------------
export const contact = {
  whatsappNumber: "[COMPLETAR]", // solo numeros con codigo pais, sin + ni espacios. Ej: 5491112345678
  whatsappDefaultMessage:
    "Hola Mundo Riego, quisiera consultar por una solución de riego para mi propiedad.",

  phoneDisplay: "[COMPLETAR]", // como se muestra. Ej: 011 1234-5678
  phoneHref: "[COMPLETAR]", // solo numeros. Ej: 541112345678
  phoneSecondaryDisplay: "", // opcional, segundo teléfono
  phoneSecondaryHref: "",

  email: "info@mundo-riego.com.ar",
  emailHref: "mailto:info@mundo-riego.com.ar",

  city: "[COMPLETAR]", // Ej: Pilar, Buenos Aires
  province: "Buenos Aires",
  country: "Argentina",
  address: "[COMPLETAR]", // calle y numero, si hay domicilio fiscal/operativo
  addressLocality: "[COMPLETAR]",
  addressRegion: "Buenos Aires",
  postalCode: "[COMPLETAR]",
  mapsUrl: "[COMPLETAR]", // link a Google Maps del punto o zona
  coordinates: null as null | { lat: number; lng: number },

  hours: {
    weekdays: "Lunes a viernes de 9 a 18 h",
    saturday: "Sábado de 9 a 13 h",
    sunday: "Cerrado",
    note: "Visitas técnicas coordinadas con anticipación.",
  },

  responseTime: "Respondemos las consultas en el día.",

  // Zonas de atención. Solo poner zonas donde realmente se puede trabajar.
  serviceAreas: [
    "[COMPLETAR: definir zonas de cobertura, ej. CABA, Zona Norte GBA, Zona Oeste]",
  ] as string[],

  social: {
    instagram: "[COMPLETAR]",
    facebook: "[COMPLETAR]",
    linkedin: "[COMPLETAR]",
  },
} as const;

// ---------------------------------------------------------------------------
// CTA
// ---------------------------------------------------------------------------
export const cta = {
  primary: "Solicitar asesoramiento",
  whatsapp: "Hablar por WhatsApp",
  quote: "Quiero un presupuesto",
  services: "Ver servicios",
  projects: "Ver proyectos",
  call: "Llamar ahora",
} as const;

// ---------------------------------------------------------------------------
// DIFERENCIALES
// Solo afirmaciones verificables. Si no se puede sostener, no va.
// ---------------------------------------------------------------------------
export const differentiators = [
  {
    title: "Diseño antes que instalación",
    body: "Relevamos el espacio, calculamos caudales y presión, y recién ahí instalamos. El sistema se proyecta en el plano, no se improvisa en el terreno.",
  },
  {
    title: "Un solo responsable, de punta a punta",
    body: "Diseño, instalación, programación y mantenimiento los resuelve la misma empresa. Si algo falla, no hay que discutir de quién es el problema.",
  },
  {
    title: "Obra prolija y reversible",
    body: "Cañerías por debajo del césped, soterradas donde corresponde, y trabajo limpio al terminar. El jardín se ve terminado, no en obra.",
  },
  {
    title: "Ahorro de agua real, no teórico",
    body: "Sectorización, programming por zonas y sensores de lluvia para que el sistema no riegue lo que ya está húmedo.",
  },
  {
    title: "Sistemas que se pueden reparar",
    body: "Instalamos componentes estándar y documentamos el recorrido de las cañerías, para que cualquier trabajo futuro sea posible.",
  },
  {
    title: "Mantenimiento disponible todo el año",
    body: "Un sistema de riego sin mantenimiento se tapa, se rompe y pierde uniformidad. El service es parte del trabajo, no un extra.",
  },
] as const;

// ---------------------------------------------------------------------------
// PROCESO
// ---------------------------------------------------------------------------
export const processSteps = [
  {
    n: "01",
    title: "Nos contás qué necesitás",
    body: "Por WhatsApp o por el formulario. Con superficie, tipo de jardín y de dónde sale el agua alcanza para arrancar.",
  },
  {
    n: "02",
    title: "Relevamos el espacio",
    body: "Visitamos el lugar, medimos, revisamos presión y puntos de agua, y vemos cómo está hoy el riego si ya existe.",
  },
  {
    n: "03",
    title: "Diseñamos la solución",
    body: "Sectorización, selección de aspersores, cálculo de caudal y un plano. Lo aprobás antes de que se toque una pala.",
  },
  {
    n: "04",
    title: "Instalamos y probamos",
    body: "Cañerías, aspersores, válvulas, programador y sensor. Al terminar probamos sector por sector y queda funcionando.",
  },
  {
    n: "05",
    title: "Te acompañamos",
    body: "Te explicamos cómo operarlo, cuándo regar y qué revisar. Después, mantenimiento disponible cuando lo necesites.",
  },
] as const;

/** Helper: arma el link de WhatsApp con mensaje preconfigurado */
export function waLink(message?: string) {
  const raw = contact.whatsappNumber;
  if (!raw || raw.startsWith("[COMPLETAR]")) return null;
  const num = raw.replace(/\D/g, "");
  const text = message || contact.whatsappDefaultMessage;
  return `https://wa.me/${num}?text=${encodeURIComponent(text)}`;
}

/** Helper: mensaje de WhatsApp con contexto de la página de origen */
export function waMessageFor(service: string, origin?: string) {
  const base = `Hola Mundo Riego, quiero consultar por: ${service}.`;
  if (!origin) return base;
  return `${base}\n\n(Consulta desde: ${origin})`;
}

/** true si un dato sigue sin completarse */
export function isPending(value: string) {
  return !value || value.includes("[COMPLETAR]");
}
