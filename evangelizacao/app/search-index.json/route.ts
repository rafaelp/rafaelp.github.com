import { getPages, getPosts } from "@/lib/content";
import { toPlainText } from "@/lib/markdown";

export const dynamic = "force-static";

/**
 * Índice de busca servido como arquivo estático: a página /busca o baixa uma
 * única vez, em vez de embutir o texto de todos os posts no HTML.
 */
export function GET() {
  const entries = [
    ...getPosts().map((post) => ({
      title: post.title,
      url: `${post.permalink}/`,
      excerpt: post.excerpt,
      meta: post.categories.join(", "),
      text: toPlainText(`${post.title} ${post.body}`),
    })),
    ...getPages().map((page) => ({
      title: page.title,
      url: `${page.permalink}/`,
      excerpt: page.excerpt,
      meta: "Página",
      text: toPlainText(`${page.title} ${page.body}`),
    })),
  ];

  return Response.json(entries);
}
