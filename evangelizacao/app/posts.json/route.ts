import { getPostCards } from "@/lib/content";

export const dynamic = "force-static";

/**
 * Todos os cartões do feed, como arquivo estático. A home carrega isto só
 * quando o leitor chega ao fim da primeira leva, em vez de embutir os 83 posts
 * no HTML de quem talvez nem role a página.
 */
export function GET() {
  return Response.json(getPostCards());
}
