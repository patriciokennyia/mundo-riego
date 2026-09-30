import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import Link from "next/link";
import Image from "next/image";
import { SectionHeader, PendingText } from "@/components/SectionHeader";
import { Reveal } from "@/components/Reveal";
import { ProcessSection } from "@/components/ProcessSteps";
import { FinalCta } from "@/components/FinalCta";
import { Icon } from "@/components/Icon";
import { differentiators, contact } from "@/config/site";

export const metadata: Metadata = pageMeta(
    "/nosotros",
    "Quiénes somos | Riego con criterio",
    "Diseñamos, instalamos y mantenemos sistemas de riego automático. Conocé nuestro enfoque, nuestro proceso y en qué creemos.",
  );

const values = [
  {
    icon: "ruler" as const,
    title: "Criterio técnico",
    body: "Cada sistema se calcula. No se vende un paquete estándar: se diseña para la superficie, la presión disponible y lo que hay que regar.",
  },
  {
    icon: "shield" as const,
    title: "Obra prolija",
    body: "La cañería va por debajo, los aspersores a nivel del césped y el trabajo se termina limpio. Terminar bien es parte del trabajo.",
  },
  {
    icon: "chat" as const,
    title: "Explicación clara",
    body: "Te explicamos qué se hizo, por qué y cómo operarlo. Un sistema que el cliente no entiende es un sistema que va a fallar.",
  },
  {
    icon: "clock" as const,
    title: "Respuesta concreta",
    body: "Contestamos con una estimación, no con un 'depende'. Si falta un dato, te decimos cuál y por qué lo necesitamos.",
  },
];

export default function NosotrosPage() {
  return (
    <>
      {/* Encabezado */}
      <section className="relative isolate overflow-hidden bg-brand-950">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/about/encabezado.webp"
            alt="Instalación de riego automático en curso en un terreno"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-950 via-brand-950/85 to-brand-950/60" />
        </div>

        <div className="container-page py-14 sm:py-20 lg:py-24">
          <nav aria-label="Migas de pan" className="mb-7">
            <ol className="flex list-none flex-wrap items-center gap-2 text-sm text-sand-300">
              <li>
                <Link href="/" className="hover:text-white">
                  Inicio
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <span className="font-semibold text-white">Nosotros</span>
              </li>
            </ol>
          </nav>

          <div className="max-w-3xl">
            <h1 className="text-[2rem] font-extrabold tracking-tight text-white sm:text-5xl">
              Somos especialistas en riego, no vendedores de aspersores
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-sand-200 sm:text-xl">
              Mundo Riego diseña, instala y mantiene sistemas de riego automático para casas,
              countries, empresas y espacios verdes. Un solo equipo responsable de todo el proceso.
            </p>
          </div>
        </div>
      </section>

      {/* Historia */}
      <section className="bg-white py-16 sm:py-20">
        <div className="container-page grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl">
              <Image
                src="/images/about/nosotros.webp"
                alt="Equipo de Mundo Riego trabajando en una instalación de riego"
                width={1440}
                height={736}
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div>
              <p className="font-sans text-xs font-semibold tracking-[0.14em] text-brand-600 uppercase">
                Qué hacemos
              </p>
              <h2 className="mt-3 text-[1.75rem] font-bold text-brand-900 sm:text-4xl">
                Un sistema de riego es un proyecto, no una compra
              </h2>
              <div className="mt-5 space-y-4 text-[1.0625rem] leading-relaxed text-sand-700">
                <p>
                  El riego automático se vende en dos etapas. La primera es la instalación, y ahí
                  muchos competidores parecen iguales. La diferencia aparece después: al primer
                  verano, al primer invierno, cuando un aspersor se tapa, cuando la presión baja o
                  cuando hay que cambiar un programador.
                </p>
                <p>
                  Por eso hacemos las dos cosas. Tenemos el conocimiento técnico para diseñar e
                  instalar, y también la capacidad de mantener y reparar lo que instalamos y lo que
                  instalaron otros. Si algo falla dentro o fuera de la garantía, no hay a quién
                  pasarle el problema.
                </p>
                <p>
                  Nuestro trabajo termina cuando el sistema sigue funcionando. Por eso la
                  instalación se prueba sector por sector antes de la entrega, y por eso el
                  mantenimiento no es un extra que hay que contratar aparte: es parte de que el
                  inversión se mantenga.
                </p>
              </div>

              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                <InfoRow label="Años de experiencia">
                  <PendingText value="[COMPLETAR: años de actividad en el rubro]" />
                </InfoRow>
                <InfoRow label="Base">
                  <PendingText value={contact.city} />, {contact.province}
                </InfoRow>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Valores */}
      <section className="bg-sand-100 py-16 sm:py-20 lg:py-24">
        <div className="container-page">
          <SectionHeader
            eyebrow="Cómo trabajamos"
            title="Cuatro principios que no negociamos"
            align="center"
            className="mb-12"
          />
          <ul className="grid list-none gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <Reveal key={v.title} as="li" delay={i * 80} className="h-full">
                <div className="flex h-full flex-col rounded-2xl border border-sand-200 bg-white p-6">
                  <span className="inline-flex size-11 items-center justify-center rounded-xl bg-brand-700 text-white">
                    <Icon name={v.icon} className="size-5.5" />
                  </span>
                  <h3 className="mt-5 text-[1.0625rem] font-bold text-brand-900">{v.title}</h3>
                  <p className="mt-2 text-[0.9375rem] leading-relaxed text-sand-600">
                    {v.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Diferenciales */}
      <section className="bg-brand-950 py-16 sm:py-20 lg:py-24">
        <div className="container-page">
          <SectionHeader
            tone="dark"
            eyebrow="Diferenciales"
            title="Por qué Mundo Riego"
            description="Lo que nos diferencia de un instalador que solo coloca aspersores."
            align="center"
            className="mb-12"
          />
          <ul className="grid list-none gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
            {differentiators.map((d, i) => (
              <Reveal key={d.title} as="li" delay={(i % 3) * 80} className="h-full">
                <div className="flex h-full gap-4">
                  <span className="inline-flex size-9 shrink-0 items-center justify-center rounded-lg bg-aqua-400/20 text-aqua-300">
                    <Icon name="check" className="size-5" strokeWidth={2.4} />
                  </span>
                  <div>
                    <h3 className="font-sans text-[1.0625rem] font-bold text-white">
                      {d.title}
                    </h3>
                    <p className="mt-1.5 text-[0.9375rem] leading-relaxed text-sand-400">
                      {d.body}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <ProcessSection />

      {/* Marcas: pendiente */}
      <section className="bg-white py-16 sm:py-20">
        <div className="container-page">
          <SectionHeader
            eyebrow="Materiales"
            title="Con qué sistemas trabajamos"
            description="Recomendamos equipos de fabricantes con repuestos disponibles en el país, para que el mantenimiento no dependa de un importador."
            align="center"
            className="mb-10"
          />
          <Reveal>
            <div className="rounded-2xl border-2 border-dashed border-sand-300 bg-sand-50 p-8 text-center">
              <p className="font-sans font-semibold text-brand-900">
                Marcas y fabricantes — pendiente de completar
              </p>
              <p className="mx-auto mt-2 max-w-xl text-[0.9375rem] leading-relaxed text-sand-600">
                Esta sección se completa con los logos de los fabricantes con los que trabajamos
                efectivamente (Hunter, Rain Bird, Toro, K-Rain, Netafim u otros, según corresponda)
                y con los datos de distribuidor autorizado si corresponde.
              </p>
              <span className="pending mt-5 inline-block text-sm">
                [COMPLETAR: marcas y fabricantes]
              </span>
            </div>
          </Reveal>
        </div>
      </section>

      <FinalCta />
    </>
  );
}

function InfoRow({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="rounded-xl border border-sand-200 bg-sand-50 p-4">
      <p className="text-[0.8125rem] text-sand-500">{label}</p>
      <p className="mt-1 font-sans text-[0.9375rem] font-semibold text-brand-900">
        {children}
      </p>
    </div>
  );
}
