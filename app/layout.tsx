import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SITE_NAME, SITE_DESCRIPTION, SITE_URL } from "@/config/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — Créez votre entreprise dans les métiers manuels`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  keywords: [
    "créer entreprise bâtiment",
    "entrepreneuriat métiers manuels",
    "auto entrepreneur artisan",
    "lancer sa boîte électricien",
    "créer entreprise plombier",
    "démarches création entreprise",
    "premiers clients artisan",
    "régime micro entreprise artisan",
    "bugey sud entreprendre",
  ],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} — Votre guide pour créer votre boîte`,
    description:
      "Tout savoir pour entreprendre dans les métiers manuels : du projet à la facturation, guides et conseils pratiques.",
    images: [
      {
        url: "/images/hero-artisan.jpeg",
        width: 1200,
        height: 630,
        alt: "Artisan confiant dans son atelier — BugeySud Entreprendre",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} — Créez votre entreprise dans le bâtiment`,
    description: SITE_DESCRIPTION,
  },
  alternates: {
    canonical: SITE_URL,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/icon.svg",
  },
  verification: {},
  other: {
    "og:site_name": SITE_NAME,
    "og:locale": "fr_FR",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <meta name="theme-color" content="#1e3a5f" />
      </head>
      <body>
        <a href="#main-content" className="visually-hidden">
          Aller au contenu principal
        </a>
        <Header />
        <main id="main-content">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
