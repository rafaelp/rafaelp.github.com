import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { site, siteUrl } from "@/lib/site";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl()),
  title: {
    default: `${site.title} | ${site.description}`,
    template: `%s | ${site.title}`,
  },
  description: site.description,
  alternates: {
    canonical: "/",
    types: { "application/rss+xml": "/feed.xml" },
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: site.title,
    title: site.title,
    description: site.description,
  },
  // Mesmo conjunto de ícones do site principal (assets/favicon/ na raiz do repo).
  icons: {
    icon: [
      { url: "/favicon/favicon-96x96.png", type: "image/png", sizes: "96x96" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: "/favicon/apple-touch-icon.png",
  },
  manifest: "/manifest.webmanifest",
};

/* Acompanha as cores de fundo dos dois modos do tema. */
export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#131417" },
  ],
};

/*
 * Aplica o tema guardado antes da primeira pintura. Precisa ser síncrono e
 * inline no <head>, senão a página pisca no tema errado ao carregar.
 */
const themeScript = `(function(){try{var t=localStorage.getItem("tema");if(t==="light"||t==="dark"){document.documentElement.dataset.theme=t}}catch(e){}})()`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang={site.locale} className={inter.variable}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <a className="skip-link" href="#conteudo">
          Pular para o conteúdo
        </a>
        <SiteHeader />
        <main id="conteudo">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
