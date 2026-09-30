import Image from "next/image";
import type { Metadata, Viewport } from "next";
import { pageMeta } from "@/lib/seo";
import { Hero } from "@/components/Hero";
import { SectionHeader } from "@/components/SectionHeader";
import { Reveal } from "@/components/Reveal";
import { ServiceCard, SolutionCard, ProjectCard } from "@/components/Cards";
import { ProcessSection } from "@/components/ProcessSteps";
import { FinalCta } from "@/components/FinalCta";
import { ArrowLink } from "@/components/Button";
import { Icon } from "@/components/Icon";
import { services, solutions, projects } from "@/content/catalog";
import { differentiators } from "@/config/site";

const HOME_TITLE = "Riego automático para casas, countries y empresas | Mundo Riego";
const HOME_DESC =
  "Diseñamos, instalamos y mantenemos riego automático para casas, countries, empresas y espacios verdes. Visita técnica sin cargo y presupuesto por WhatsApp.";

export const metadata: Metadata = {
  ...pageMeta("/", "Riego automático para casas, countries y empresas", HOME_DESC),
  // El home ya es la portada: el titulo va completo, sin el sufijo del template.
  title: { absolute: HOME_TITLE },
};

export const viewport: Viewport = {
  themeColor: "#0f2a27",
};

const painPoints = [
  {
    icon: "sprinkler" as const,
    title: "El riego quedó irregular",
    body: "Hay zonas secas y zonas encharcadas porque los sectores no están bien calculados o la presión no alcanza.",
  },
  {
    icon: "water" as const,
    title: "Se desperdicia agua",
    body: "Regar en el calor del mediodía o sin sensor de lluvia hace que la mayor parte del agua se evapore sin llegar a la planta.",
  },
  {
    icon: "clock" as const,
    title: "No tenés tiempo",
    body: "El riego manual son todos los días, todos los días. Un sistema automático resuelve eso.",
  },
  {
    icon: "leaf" as const,
    title: "Las plantas se deterioran",
    body: "Riego excesivo en canteros y déficit en el césped. Cada zona necesita su frecuencia y su caudal.",
  },
  {
    icon: "wrench" as const,
    title: "La instalación quedó mal",
    body: "Cañerías a la vista, aspersores que rompen el pasto o aspersores que no emergen y quedan tapados.",
  },
  {
    icon: "pump" as const,
    title: "Problemas de presión",
    body: "El sistema no riega parejo porque a la red le falta presión o el caudal no alcanza para la superficie.",
  },
];

const tips = [
  {
    q: "Regá de noche o muy temprano",
    a: "Entre las 10 de la noche y las 6 de la mañana se pierde mínima evaporación y el agua llega a la raíz. Es el cambio más barato que podés hacer.",
  },
  {
    q: "Rotá la posición de los aspersores",
    a: "Si dejás siempre el mismo aspersor apuntando al mismo lado, ese sector se desgasta y se forma un patrón. Rotá la cabeza cada tanto y el desgaste se reparte.",
  },
  {
    q: "Revisá los aspersores una vez por año",
    a: "Los aspersores se tapan con polvo, hojas y minerales del agua. Un aspersor tapado riega menos y deja zonas secas. La limpieza anual es barata y evita recambios.",
  },
  {
    q: "Instalá un sensor de lluvia",
    a: "Corta el riego cuando llueve. Es el desperdicio más caro y más silencioso de un sistema automático sin sensor.",
  },
];

export default function HomePage() {
  const featuredServices = services.filter((s) => s.featured).slice(0, 6);

  return (
    <>
      <Hero />

      {/* ------------------------------------------------------------------
          NECESIDAD / PROBLEMAS
      ------------------------------------------------------------------ */}
      <section className="bg-sand-50 py-16 sm:py-20 lg:py-28">
        <div className="container-page">
          <SectionHeader
            eyebrow="El punto de partida"
            title="El riego deja de ser un problema cuando el sistema está bien diseñado"
            description="La mayoría de las consultas que recibimos empiezan con alguna de estas situaciones. Todas tienen solución, y casi siempre se corrige sin rehacer la instalación."
          />

          <ul className="mt-12 grid list-none gap-x-8 gap-y-9 sm:grid-cols-2 lg:grid-cols-3">
            {painPoints.map((item, i) => (
              <Reveal key={item.title} as="li" delay={i * 60} className="h-full">
                <div className="flex h-full gap-4">
                  <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                    <Icon name={item.icon} className="size-5.5" />
                  </span>
                  <div>
                    <h3 className="text-[1.0625rem] font-bold text-brand-900">{item.title}</h3>
                    <p className="mt-1.5 text-[0.9375rem] leading-relaxed text-sand-600">
                      {item.body}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* ------------------------------------------------------------------
          SERVICIOS
      ------------------------------------------------------------------ */}
      <section className="bg-white py-16 sm:py-20 lg:py-28">
        <div className="container-page">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeader
              eyebrow="Qué hacemos"
              title="Servicios de riego"
              description="Desde el diseño hasta el mantenimiento. Todo resuelto por la misma empresa."
            />
            <Reveal className="shrink-0">
              <ArrowLink href="/servicios">Ver todos los servicios</ArrowLink>
            </Reveal>
          </div>

          <ul className="mt-12 grid list-none gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredServices.map((service, i) => (
              <Reveal key={service.slug} as="li" delay={(i % 3) * 90} className="h-full">
                <ServiceCard service={service} />
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* ------------------------------------------------------------------
          SOLUCIONES POR TIPO DE CLIENTE
      ------------------------------------------------------------------ */}
      <section className="relative isolate overflow-hidden bg-brand-950 py-16 sm:py-20 lg:py-28">
        <div className="absolute inset-0 -z-10 opacity-25">
          <Image
            src="/images/hero/fondo-2.webp"
            alt="Riego por aspersión funcionando en un jardín residencial"
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-brand-950/70" />
        </div>

        <div className="container-page">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeader
              tone="dark"
              eyebrow="Por tipo de proyecto"
              title="Soluciones según el tipo de espacio"
              description="Cada contexto pide un sistema distinto. Elegí el tuyo para ver cómo lo resolvemos."
            />
            <Reveal className="shrink-0">
              <ArrowLink
                href="/soluciones"
                className="text-aqua-300"
              >
                Ver todas las soluciones
              </ArrowLink>
            </Reveal>
          </div>

          <ul className="mt-12 grid list-none gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {solutions.map((solution, i) => (
              <Reveal key={solution.slug} as="li" delay={(i % 3) * 90} className="h-full">
                <SolutionCard solution={solution} />
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* ------------------------------------------------------------------
          DIFERENCIALES
      ------------------------------------------------------------------ */}
      <section className="bg-sand-100 py-16 sm:py-20 lg:py-28">
        <div className="container-page grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div>
            <SectionHeader
              eyebrow="Por qué Mundo Riego"
              title="No vendemos aspersores. Resolvemos el riego."
              description="Cualquiera puede comprar aspersores. Lo que cuesta es que el sistema funcione bien, se mantenga y siga funcionando en cinco años."
            />
            <Reveal delay={120}>
              <div className="mt-8">
                <ArrowLink href="/nosotros">Conocé cómo trabajamos</ArrowLink>
              </div>
            </Reveal>
          </div>

          <ul className="grid list-none gap-x-8 gap-y-7 sm:grid-cols-2">
            {differentiators.map((d, i) => (
              <Reveal key={d.title} as="li" delay={(i % 2) * 80} className="h-full">
                <div className="flex h-full flex-col">
                  <span className="mb-3 inline-flex size-9 items-center justify-center rounded-lg bg-brand-700 text-white">
                    <Icon name="check" className="size-5" strokeWidth={2.4} />
                  </span>
                  <h3 className="text-[1.0625rem] font-bold text-brand-900">{d.title}</h3>
                  <p className="mt-1.5 text-[0.9375rem] leading-relaxed text-sand-600">
                    {d.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* ------------------------------------------------------------------
          PROCESO
      ------------------------------------------------------------------ */}
      <ProcessSection />

      {/* ------------------------------------------------------------------
          PROYECTOS
      ------------------------------------------------------------------ */}
      <section className="bg-white py-16 sm:py-20 lg:py-28">
        <div className="container-page">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeader
              eyebrow="Trabajos reales"
              title="Proyectos reales"
              description="Cada proyecto se documenta con fotos de la obra, el problema que había y cómo quedó resuelto."
            />
            <Reveal className="shrink-0">
              <ArrowLink href="/proyectos">Ver la galería</ArrowLink>
            </Reveal>
          </div>

          <ul className="mt-12 grid list-none gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((p, i) => (
              <Reveal key={p.slug} as="li" delay={(i % 3) * 90} className="h-full">
                <ProjectCard
                  title={p.title}
                  location={p.location}
                  clientType={p.clientType}
                  pending={p.status === "pending"}
                />
              </Reveal>
            ))}
          </ul>

          <Reveal delay={150}>
            <p className="mt-8 rounded-2xl border border-dashed border-sand-300 bg-sand-50 p-5 text-[0.9375rem] leading-relaxed text-sand-600">
              <strong className="font-semibold text-brand-800">Estamos cargando la galería.</strong>{" "}
              La sección de proyectos se completa con fotografías reales de las obras, la
              ubicación y el sistema instalado. No usamos imágenes genéricas como reemplazo: preferimos
              mostrar el espacio vacío antes que una foto que no sea de este trabajo.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ------------------------------------------------------------------
          CONTENIDO EDUCATIVO
      ------------------------------------------------------------------ */}
      <section className="bg-sand-50 py-16 sm:py-20 lg:py-28">
        <div className="container-page">
          <SectionHeader
            eyebrow="Consejos"
          title="Cuatro cosas que Podés hacer hoy mismo"
            description="Sin gastar nada y sin llamar a nadie. Si el problema no se resuelve, ahí sí conversamos."
            align="center"
            className="mb-12"
          />

          <ul className="mx-auto grid max-w-5xl list-none gap-6 sm:grid-cols-2">
            {tips.map((tip, i) => (
              <Reveal key={tip.q} as="li" delay={(i % 2) * 90} className="h-full">
                <div className="flex h-full flex-col rounded-2xl border border-sand-200 bg-white p-6 transition-shadow hover:shadow-soft">
                  <span className="mb-3 inline-flex size-9 items-center justify-center rounded-lg bg-aqua-100 text-aqua-700">
                    <Icon name="droplet" className="size-5" />
                  </span>
                  <h3 className="text-[1.0625rem] font-bold text-brand-900">{tip.q}</h3>
                  <p className="mt-2 text-[0.9375rem] leading-relaxed text-sand-600">
                    {tip.a}
                  </p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <FinalCta />
    </>
  );
}
