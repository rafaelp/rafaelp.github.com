import type { MetadataRoute } from "next";
import { getCategories, getPages, getPosts } from "@/lib/content";
import { site, siteUrl } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteUrl();
  const posts = getPosts();
  const pageCount = Math.max(1, Math.ceil(posts.length / site.postsPerPage));

  return [
    { url: `${base}/`, priority: 1, changeFrequency: "weekly" },
    ...Array.from({ length: pageCount - 1 }, (_, i) => ({
      url: `${base}/pagina/${i + 2}/`,
      priority: 0.4,
    })),
    ...posts.map((post) => ({
      url: `${base}${post.permalink}/`,
      lastModified: new Date(`${post.date}T12:00:00Z`),
      priority: 0.8,
    })),
    ...getPages().map((page) => ({ url: `${base}${page.permalink}/`, priority: 0.6 })),
    { url: `${base}/categorias/`, priority: 0.5 },
    ...getCategories().map((category) => ({
      url: `${base}/categoria/${category.slug}/`,
      priority: 0.5,
    })),
    { url: `${base}/arquivo/`, priority: 0.5 },
    { url: `${base}/busca/`, priority: 0.3 },
  ];
}
