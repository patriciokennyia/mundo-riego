import type { Metadata } from "next";
import Image from "next/image";
import { pageMeta } from "@/lib/seo";
import { ContactForm } from "@/components/ContactForm";
import { SectionHeader, PendingText } from "@/components/SectionHeader";
import { Reveal } from "@/components/Reveal";
import { Icon } from "@/components/Icon";
import { ExternalButtonLink } from "@/components/Button";
import { WhatsappGlyph } from "@/components/Header";
import { contact, site, waLink, isPending } from "@/config/site";
import { generalFaqs } from "@/content/catalog";
import { FaqAccordion } from "@/components/FaqAccordion";

export const metadata: Metadata = pageMeta(
    "/contacto",
    "Contacto | Pedí tu presupuesto de riego por WhatsApp",
    "Contactanos para instalar, mantener o revisar tu sistema de riego. Visita técnica sin cargo y presupuesto por WhatsApp.",
  );

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ContactPage",
      "@id": `${site.url}/contacto#webpage`,
      url: `${site.url}/contacto`,
      name: "Contacto | Mundo Riego",
      isPartOf: { "@id": `${site.url}/#website` },
    },
    {
      "@type": "FAQPage",
      mainEntity: generalFaqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ],
};

export default function ContactoPage() {
  const wa = waLink();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Encabezado */}
      <section className="border-b border-sand-200 bg-brand-950 py-14 sm:py-20">
        <div className="container-page">
          <div className="max-w-3xl">
            <p className="font-sans text-xs font-semibold tracking-[0.14em] text-aqua-300 uppercase">
              Contacto
            </p>
            <h1 className="mt-3 text-[2rem] font-extrabold tracking-tight text-white sm:text-5xl">
              Contanos qué necesitás y te respondemos
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-sand-200">
              La visita técnica y el presupuesto no tienen cargo. Con la superficie aproximada y el
              tipo de jardín ya podemos darte una estimación.
            </p>
          </div>
        </div>
      </section>

      {/* Formulario + datos */}
      <section className="bg-sand-50 py-14 sm:py-20">
        <div className="container-page grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7" id="contacto-form">
            <ContactForm />
          </div>

          <div className="lg:col-span-5">
            <Reveal>
              <div className="rounded-3xl border border-sand-200 bg-white p-6 sm:p-8">
                <h2 className="font-sans text-xl font-bold text-brand-900">
                  También podés contactarnos por
                </h2>

                <ul className="mt-6 space-y-5">
                  <ContactRow icon="chat" label="WhatsApp">
                    {wa ? (
                      <ExternalButtonLink
                        href={wa}
                        className="font-sans text-[1.0625rem] font-semibold text-brand-700 link-underline"
                      >
                        <WhatsappGlyph className="size-4" />
                        Escribinos
                      </ExternalButtonLink>
                    ) : (
                      <PendingText value={contact.whatsappNumber} />
                    )}
                  </ContactRow>

                  <ContactRow icon="phone" label="Teléfono">
                    {isPending(contact.phoneDisplay) ? (
                      <PendingText value={contact.phoneDisplay} />
                    ) : (
                      <a
                        href={`tel:+${contact.phoneHref}`}
                        className="font-sans text-[1.0625rem] font-semibold text-brand-700 link-underline"
                      >
                        {contact.phoneDisplay}
                      </a>
                    )}
                  </ContactRow>

                  <ContactRow icon="arrow" label="Email">
                    <a
                      href={contact.emailHref}
                      className="break-all font-sans text-[1.0625rem] font-semibold text-brand-700 link-underline"
                    >
                      {contact.email}
                    </a>
                  </ContactRow>

                  <ContactRow icon="home" label="Ubicación">
                    <span className="text-sand-700">
                      <PendingText value={contact.city} />
                      <br />
                      {contact.province}, {contact.country}
                    </span>
                  </ContactRow>

                  <ContactRow icon="clock" label="Horarios">
                    <span className="text-sand-700">
                      {contact.hours.weekdays}
                      <br />
                      {contact.hours.saturday}
                      <br />
                      <span className="text-sand-500">{contact.hours.sunday}</span>
                      <br />
                      <span className="text-[0.9375rem] text-sand-500">
                        {contact.hours.note}
                      </span>
                    </span>
                  </ContactRow>
                </ul>

                <div className="mt-7 border-t border-sand-200 pt-6">
                  <p className="text-sm font-semibold text-brand-900">Zonas de atención</p>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {contact.serviceAreas.map((area) => (
                      <li
                        key={area}
                        className="rounded-full border border-sand-200 bg-sand-50 px-3 py-1.5 text-[0.8125rem] text-sand-700"
                      >
                        {area}
                      </li>
                    ))}
                  </ul>
                </div>

                {contact.mapsUrl && !isPending(contact.mapsUrl) && (
                  <a
                    href={contact.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center gap-2 font-sans text-sm font-semibold text-brand-700 link-underline"
                  >
                    <Icon name="gate" className="size-4" />
                    Ver ubicación en el mapa
                  </a>
                )}
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="mt-6 rounded-3xl border border-brand-200 bg-brand-50 p-6">
                <h3 className="flex items-center gap-2 font-sans font-bold text-brand-900">
                  <Icon name="clock" className="size-5" />
                  {contact.responseTime}
                </h3>
                <p className="mt-2 text-[0.9375rem] leading-relaxed text-sand-700">
                  Si tenés una urgencia o el sistema está fallando, escribinos por WhatsApp: es el
                  canal más rápido.
                </p>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <div className="relative mt-6 overflow-hidden rounded-3xl border border-sand-200">
                <Image
                  src="/images/contact/contactenos.webp"
                  alt="Técnico de Mundo Riego revisando una instalación de riego automático"
                  fill
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FAQ general */}
      <section className="bg-white py-16 sm:py-20">
        <div className="container-page grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <SectionHeader
              eyebrow="Antes de escribir"
              title="Preguntas frecuentes"
              description="Estas son las dudas que más recibimos. Si la tuya no está, preguntanos por WhatsApp."
            />
          </div>
          <div className="lg:col-span-8">
            <FaqAccordion items={generalFaqs} idPrefix="faq-contacto" />
          </div>
        </div>
      </section>

      {/* Privacidad */}
      <section id="privacidad" className="bg-sand-100 py-14 sm:py-16">
        <div className="container-page max-w-3xl">
          <h2 className="font-sans text-xl font-bold text-brand-900">
            Política de privacidad
          </h2>
          <div className="mt-4 space-y-3.5 text-[0.9375rem] leading-relaxed text-sand-700">
            <p>
              Los datos que envías a través de este sitio (nombre, teléfono y el contenido de tu
              consulta) se usan únicamente para responderte y, si avanzamos con tu proyecto, para
              gestionar el presupuesto y la obra.
            </p>
            <p>
              No vendemos ni cedemos tus datos a terceros. Podés pedir la eliminación de tu
              información escribiéndonos a{" "}
              <a href={contact.emailHref} className="font-semibold text-brand-700 link-underline">
                {contact.email}
              </a>
              .
            </p>
            <p className="rounded-xl border border-dashed border-sand-300 bg-white p-4 text-sand-600">
              <strong className="font-semibold text-brand-800">Pendiente:</strong> completed con los
              datos fiscales de la empresa (CUIT, domicilio legal) y la mención de analítica o
              cookies si se incorporan en una etapa posterior.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

function ContactRow({
  icon,
  label,
  children,
}: {
  icon: "chat" | "phone" | "arrow" | "home" | "clock";
  label: string;
  children: React.ReactNode;
}) {
  return (
    <li className="flex items-start gap-3.5">
      <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
        <Icon name={icon} className="size-5" />
      </span>
      <div className="min-w-0">
        <p className="text-sm text-sand-500">{label}</p>
        <div className="mt-0.5">{children}</div>
      </div>
    </li>
  );
}
