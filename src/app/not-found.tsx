import Link from "next/link";
import { ButtonLink } from "@/components/Button";
import { Icon } from "@/components/Icon";
import { navigation } from "@/components/Header";

export default function NotFound() {
  return (
    <div className="flex min-h-[70svh] items-center py-20">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex size-14 items-center justify-center rounded-2xl bg-brand-50 text-brand-600">
            <Icon name="droplet" className="size-7" />
          </span>

          <p className="mt-6 font-sans text-sm font-semibold tracking-[0.14em] text-brand-600 uppercase">
            Error 404
          </p>
          <h1 className="mt-3 text-[2rem] font-extrabold text-brand-900 sm:text-5xl">
            Esta página no existe
          </h1>
          <p className="mt-4 text-lg text-sand-600">
            Puede que el enlace haya cambiado o que la dirección esté mal escrita. Te dejamos
            los caminos más usados.
          </p>

          <nav aria-label="Ir a" className="mt-9">
            <ul className="flex flex-wrap justify-center gap-2.5">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="inline-flex min-h-[2.75rem] items-center rounded-full border border-sand-300 bg-white px-5 font-sans text-sm font-semibold text-brand-800 transition-colors hover:border-brand-400 hover:bg-brand-50"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <ButtonLink href="/" size="lg" className="sm:w-auto">
              Volver al inicio
            </ButtonLink>
            <ButtonLink href="/contacto" size="lg" variant="secondary" className="sm:w-auto">
              Contactanos
            </ButtonLink>
          </div>
        </div>
      </div>
    </div>
  );
}
