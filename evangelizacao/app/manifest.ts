import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export const dynamic = "force-static";

/* Mesmos ícones do site principal, com o nome e as cores deste blog. */
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: site.title,
    short_name: site.title,
    description: site.description,
    lang: site.locale,
    dir: "ltr",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#ffffff",
    icons: [
      {
        src: "/favicon/icon-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/favicon/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
    ],
  };
}
