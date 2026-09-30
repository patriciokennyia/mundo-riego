"use client";

import { useEffect } from "react";
import { ButtonLink, ExternalButtonLink } from "@/components/Button";
import { WhatsappGlyph } from "@/components/Header";
import { waLink } from "@/config/site";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Hook para conectar en una etapa posterior (Sentry, etc.)
    console.error(error);
  }, [error]);

  const wa = waLink();

  return (
    <div className="flex min-h-[70svh] items-center py-20">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-[2rem] font-extrabold text-brand-900 sm:text-4xl">
            Algo salió mal al cargar esta página
          </h1>
          <p className="mt-4 text-lg text-sand-600">
            Volvé a intentar. Si el problema sigue, escribinos y lo resolvemos.
          </p>

          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <ButtonLink href="/" size="lg" className="sm:w-auto">
              Volver al inicio
            </ButtonLink>
            <ButtonLink
              href="/contacto"
              size="lg"
              variant="secondary"
              className="sm:w-auto"
              onClick={reset}
            >
              Contactanos
            </ButtonLink>
            {wa && (
              <ExternalButtonLink href={wa} size="lg" variant="ghost" className="sm:w-auto">
                <WhatsappGlyph className="size-5" />
                WhatsApp
              </ExternalButtonLink>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
