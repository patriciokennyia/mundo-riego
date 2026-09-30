"use client";

import { useState } from "react";
import { contact, waLink } from "@/config/site";

import { WhatsappGlyph } from "./Header";
import { Icon } from "./Icon";

/**
 * Formulario corto que deriva a WhatsApp.
 * Patron del mercado: no manda mail, arma el mensaje y abre WhatsApp
 * con el contexto ya cargado. El lead no tiene que escribir de cero
 * y el equipo recibe el tipo de consulta yaclasificado.
 *
 * Si mas adelante se quiere guardar el lead en un CRM, se agrega un
 * POST a un endpoint en este mismo componente.
 */
export function ContactForm() {
  const [tipo, setTipo] = useState("");
  const [nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState("");
  const [mensaje, setMensaje] = useState("");

  const fallbackWa = waLink();
  const mensajeArmado = [
    tipo ? `Consulta sobre: ${tipo}` : "Consulta sobre riego",
    nombre ? `Nombre: ${nombre}` : "",
    telefono ? `Teléfono: ${telefono}` : "",
    mensaje ? `\n${mensaje}` : "",
  ]
    .filter(Boolean)
    .join("\n");

  const href = waLink(`Hola Mundo Riego.\n${mensajeArmado}`) ?? fallbackWa;
  const deshabilitado = !href;

  return (
    <div className="rounded-3xl border border-sand-200 bg-white p-6 shadow-soft sm:p-8">
      <h2 className="font-sans text-2xl font-bold text-brand-900">
        Contanos qué necesitás
      </h2>
      <p className="mt-2 text-sand-600">
        Completá los datos y abrí WhatsApp con la consulta ya escrita. También podés escribirnos
        directo al mail.
      </p>

      <form
        className="mt-7 space-y-5"
        onSubmit={(e) => {
          e.preventDefault();
          if (deshabilitado) return;
          window.open(href, "_blank", "noopener,noreferrer");
        }}
      >
        <Field label="¿Qué necesitás?" htmlFor="tipo" hint="Nos ayuda a orientarte mejor">
          <select
            id="tipo"
            name="tipo"
            value={tipo}
            onChange={(e) => setTipo(e.target.value)}
            className={inputClass}
          >
            <option value="">Elegí una opción</option>
            <optgroup label="Servicios">
              <option>Instalar un sistema nuevo</option>
              <option>Revisar o reparar un sistema existente</option>
              <option>Mantenimiento</option>
              <option>Automatización y programadores</option>
              <option>Bombas y presión de agua</option>
              <option>Diseño de proyecto</option>
            </optgroup>
            <optgroup label="Tipo de proyecto">
              <option>Casa o jardín</option>
              <option>Country o barrio cerrado</option>
              <option>Empresa o institución</option>
              <option>Huerta o quinta</option>
              <option>Cancha o campo deportivo</option>
              <option>Otro</option>
            </optgroup>
            <optgroup label="Otros">
              <option>Asesoramiento técnico</option>
              <option>Quiero un presupuesto</option>
            </optgroup>
          </select>
        </Field>

        <div className="grid gap-5 sm:grid-cols-2">
          <Field label="Nombre" htmlFor="nombre">
            <input
              id="nombre"
              name="nombre"
              type="text"
              autoComplete="name"
              required
              minLength={2}
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              placeholder="Tu nombre"
              className={inputClass}
            />
          </Field>

          <Field label="Teléfono" htmlFor="telefono" hint="Opcional">
            <input
              id="telefono"
              name="telefono"
              type="tel"
              inputMode="tel"
              autoComplete="tel"
              value={telefono}
              onChange={(e) => setTelefono(e.target.value)}
              placeholder="11 1234-5678"
              className={inputClass}
            />
          </Field>
        </div>

        <Field
          label="Contanos un poco más"
          htmlFor="mensaje"
          hint="Superficie, tipo de jardín, de dónde sale el agua"
        >
          <textarea
            id="mensaje"
            name="mensaje"
            rows={5}
            required
            minLength={10}
            value={mensaje}
            onChange={(e) => setMensaje(e.target.value)}
            placeholder="Ej: tengo un jardín de unos 300 m², el riego actual es por aspersión pero hay sectores que no funcionan y la presión es baja."
            className={`${inputClass} min-h-[9rem] resize-y`}
          />
        </Field>

        {deshabilitado ? (
          <div className="rounded-xl border border-dashed border-sand-300 bg-sand-100 p-5">
            <p className="font-sans font-semibold text-brand-900">
              El formulario se activa al completar el WhatsApp
            </p>
            <p className="mt-1.5 text-[0.9375rem] text-sand-600">
              Está pendiente cargar el número en <code className="text-xs">src/config/site.ts</code>.
              Mientras tanto podés escribirnos por mail.
            </p>
            <a
              href={contact.emailHref}
              className="mt-3 inline-flex items-center gap-2 font-sans text-sm font-semibold text-brand-700 link-underline"
            >
              <Icon name="chat" className="size-4" />
              {contact.email}
            </a>
          </div>
        ) : (
          <button
            type="submit"
            className="inline-flex min-h-[3.25rem] w-full items-center justify-center gap-2.5 rounded-full bg-brand-700 px-8 font-sans text-base font-bold text-white shadow-soft transition-all hover:bg-brand-800 hover:shadow-lift active:scale-[0.98]"
          >
            <WhatsappGlyph className="size-5" />
            Enviar por WhatsApp
          </button>
        )}

        <p className="text-center text-[0.8125rem] leading-relaxed text-sand-600">
          Al enviar se abre WhatsApp con tu consulta escrita. {contact.responseTime}
        </p>
      </form>
    </div>
  );
}

const inputClass =
  "mt-1.5 block w-full rounded-xl border border-sand-300 bg-white px-4 py-3 text-[1rem] text-brand-900 " +
  "placeholder:text-sand-400 transition-colors focus:border-brand-500 focus:outline-none " +
  "focus:ring-2 focus:ring-brand-500/25 min-h-[3rem]";

function Field({
  label,
  htmlFor,
  hint,
  children,
}: {
  label: string;
  htmlFor: string;
  hint?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className="flex items-baseline gap-2 font-sans text-[0.9375rem] font-semibold text-brand-900"
      >
        {label}
        {hint && <span className="text-xs font-normal text-sand-600">{hint}</span>}
      </label>
      {children}
    </div>
  );
}
