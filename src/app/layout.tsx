import type { Metadata, Viewport } from "next";
import { Outfit, Source_Sans_3 } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppFab } from "@/components/WhatsAppFab";
import { site, contact } from "@/config/site";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
  weight: ["500", "600", "700", "800"],
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-source-sans",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Riego automático para casas, countries y empresas | Mundo Riego",
    template: "%s | Mundo Riego",
  },
  description:
    "Diseñamos, instalamos y mantenemos sistemas de riego automático para casas, countries, empresas y espacios verdes. Visita técnica sin cargo y presupuesto por WhatsApp.",
  keywords: [
    "riego automático",
    "sistemas de riego",
    "instalación de riego",
    "riego por aspersión",
    "riego por goteo",
    "riego para jardines",
    "riego para countries",
    "mantenimiento de riego",
    "automatización de riego",
    "programador de riego",
    "bombas de riego",
  ],
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  publisher: site.name,
  applicationName: site.name,
  category: "Riego y jardinería",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "es_AR",
    siteName: site.name,
    // title / description / url los define cada pagina con pageMeta().
    // Si se fijan aqui, Next los hereda y todas las subpaginas
    // declararian el mismo og:title y og:url.
    images: [
      {
        url: "/images/hero/fondo-principal.webp",
        width: 1200,
        height: 630,
        alt: "Sistema de riego automático instalado por Mundo Riego",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/images/hero/fondo-principal.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  formatDetection: { telephone: true, email: true, address: false },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/images/brand/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/images/brand/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/images/brand/apple-touch-icon.png", sizes: "180x180" }],
  },
};

export const viewport: Viewport = {
  themeColor: "#0f2a27",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

/** Schema.org: Organization + LocalBusiness como grafo unico */
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${site.url}/#organization`,
      name: site.name,
      legalName: site.legalName,
      url: site.url,
      logo: {
        "@type": "ImageObject",
        url: `${site.url}/images/brand/logo-cuadrado.png`,
        width: 500,
        height: 500,
      },
      image: `${site.url}/images/hero/fondo-principal.webp`,
      email: contact.email,
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer service",
        email: contact.email,
        areaServed: "AR",
        availableLanguage: ["es"],
      },
    },
    {
      "@type": "LocalBusiness",
      "@id": `${site.url}/#localbusiness`,
      name: site.name,
      image: `${site.url}/images/hero/fondo-principal.webp`,
      url: site.url,
      email: contact.email,
      description:
        "Diseño, instalación y mantenimiento de sistemas de riego automático para casas, countries, empresas y espacios verdes.",
      priceRange: "$$",
      areaServed: {
        "@type": "Country",
        name: "Argentina",
      },
      address: {
        "@type": "PostalAddress",
        addressLocality: contact.addressLocality,
        addressRegion: contact.addressRegion,
        addressCountry: "AR",
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
          ],
          opens: "09:00",
          closes: "18:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Saturday"],
          opens: "09:00",
          closes: "13:00",
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es-AR" className={`${outfit.variable} ${sourceSans.variable}`}>
      <body className="flex min-h-dvh flex-col antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <a
          href="#contenido"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:rounded-full focus:bg-brand-800 focus:px-5 focus:py-3 focus:font-sans focus:text-sm focus:font-semibold focus:text-white"
        >
          Saltar al contenido
        </a>
        <Header />
        <main id="contenido" className="flex-1">
          {children}
        </main>
        <Footer />
        <WhatsAppFab />
      </body>
    </html>
  );
}
