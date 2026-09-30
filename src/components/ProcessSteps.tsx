import { processSteps } from "@/config/site";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

/** Proceso de trabajo: 5 pasos, generador de confianza */
export function ProcessSteps({ compact = false }: { compact?: boolean }) {
  return (
    <>
      {processSteps.map((step, i) => (
        <Reveal key={step.n} delay={i * 90} as="li" className="h-full">
          <div className="flex h-full flex-col rounded-2xl border border-sand-200 bg-white p-6 transition-all duration-300 hover:border-brand-300 hover:shadow-soft">
            <span className="font-sans text-4xl leading-none font-extrabold text-brand-200">
              {step.n}
            </span>
            <h3 className="mt-4 text-lg font-bold text-brand-900">{step.title}</h3>
            {!compact && (
              <p className="mt-2 text-[0.9375rem] leading-relaxed text-sand-600">
                {step.body}
              </p>
            )}
          </div>
        </Reveal>
      ))}
    </>
  );
}

export function ProcessSection() {
  return (
    <section className="bg-sand-100 py-16 sm:py-20 lg:py-28">
      <div className="container-page">
        <SectionHeader
          eyebrow="Cómo trabajamos"
          title="Un proceso claro, de principio a fin"
          description="Sabés qué pasa en cada etapa, cuándo y qué necesitás de vos. Sin sorpresas cuando llega la factura."
          align="center"
          className="mb-12"
        />
        <ol className="grid list-none gap-6 sm:grid-cols-2 lg:grid-cols-5 lg:gap-5">
          <ProcessSteps />
        </ol>
      </div>
    </section>
  );
}
