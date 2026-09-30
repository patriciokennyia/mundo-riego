import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import { generalFaqs } from "@/content/catalog";
import { FaqAccordion } from "@/components/FaqAccordion";
import { SectionHeader } from "@/components/SectionHeader";
import { FinalCta } from "@/components/FinalCta";


export const metadata: Metadata = pageMeta(
    "/preguntas-frecuentes",
    "Preguntas frecuentes sobre riego automático",
    "Respuestas sobre instalación de riego automático, presupuesto, plazos, mantenimiento y cobertura en Argentina.",
  );

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: generalFaqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function FaqPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="border-b border-sand-200 bg-sand-100 py-14 sm:py-20">
        <div className="container-page">
          <SectionHeader
            eyebrow="Ayuda"
            title="Preguntas frecuentes"
            as="h1"
            description="Las dudas que más recibimos sobre costos, plazos, garantía y cobertura. Si la tuya no está acá, preguntanos por WhatsApp."
          />
        </div>
      </section>

      <section className="bg-white py-14 sm:py-20">
        <div className="container-page max-w-3xl">
          <FaqAccordion
            items={generalFaqs}
            idPrefix="faq-general"
            defaultOpen={0}
            as="h2"
          />
        </div>
      </section>

      <FinalCta
        title="¿Te quedó una duda?"
        body="Escribinos y te la respondemos. Si es una consulta técnica, mejor contarnos el caso completo por WhatsApp."
      />
    </>
  );
}
