export const site = {
  title: "Evangelização Espírita",
  description:
    "Recursos sobre evangelização infantil e de jovens e sobre espiritismo para evangelizadores",
  locale: "pt-BR",
  author: "Rafael Lima",
  authorUrl: "https://rafael.adm.br",
  postsPerPage: 12,
};

/**
 * URL absoluta do site. A Vercel expõe o host do deploy em tempo de build; o
 * domínio de produção tem precedência quando está configurado.
 */
export function siteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL;
  if (explicit) return explicit.replace(/\/$/, "");
  const vercel = process.env.VERCEL_PROJECT_PRODUCTION_URL || process.env.VERCEL_URL;
  if (vercel) return `https://${vercel}`;
  return "http://localhost:3000";
}
