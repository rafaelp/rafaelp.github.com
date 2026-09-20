/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,

  // URLs que o WordPress servia e que não existem mais neste projeto.
  // Os permalinks dos posts (/AAAA/MM/DD/slug) foram preservados e não passam por aqui.
  async redirects() {
    return [
      { source: "/feed", destination: "/feed.xml", permanent: true },
      { source: "/feed/atom", destination: "/feed.xml", permanent: true },
      { source: "/comments/feed", destination: "/feed.xml", permanent: true },
      { source: "/category/:slug", destination: "/categoria/:slug/", permanent: true },
      { source: "/tag/:slug", destination: "/categoria/:slug/", permanent: true },
      { source: "/page/:number(\\d+)", destination: "/pagina/:number/", permanent: true },
      // Arquivos mensais e anuais do WordPress.
      { source: "/:year(\\d{4})", destination: "/arquivo/", permanent: true },
      { source: "/:year(\\d{4})/:month(\\d{2})", destination: "/arquivo/", permanent: true },
    ];
  },
};

export default nextConfig;
