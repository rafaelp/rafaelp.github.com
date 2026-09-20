"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { PostCardItem } from "@/components/PostFeed";
import type { PostCard } from "@/lib/content";

/**
 * O feed da home. Começa com o lote que veio pronto do servidor e vai
 * acrescentando os próximos conforme o leitor chega ao fim da página.
 *
 * O botão é um link de verdade para /pagina/2/: sem JavaScript ele continua
 * levando aos posts mais antigos, e com JavaScript vira o "carregar mais".
 */
export function InfiniteFeed({
  initial,
  total,
  batchSize,
  nextPageUrl,
}: {
  initial: PostCard[];
  total: number;
  batchSize: number;
  nextPageUrl: string;
}) {
  const [cards, setCards] = useState(initial);
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");

  // A lista completa é buscada uma vez só, na primeira vez que precisar dela.
  const allRef = useRef<PostCard[] | null>(null);
  const sentinel = useRef<HTMLDivElement | null>(null);

  // Trava de carga em andamento. Precisa ser ref, e não o status: o clique no
  // botão e o observador podem disparar no mesmo tique, antes de qualquer
  // re-render, e aí dois lotes entrariam de uma vez.
  const loading = useRef(false);

  const done = cards.length >= total;

  const loadMore = useCallback(async () => {
    if (done || loading.current) return;
    loading.current = true;
    setStatus("loading");
    try {
      if (!allRef.current) {
        const response = await fetch("/posts.json");
        if (!response.ok) throw new Error(String(response.status));
        allRef.current = (await response.json()) as PostCard[];
      }
      const all = allRef.current;
      setCards((current) => all.slice(0, current.length + batchSize));
      setStatus("idle");
    } catch {
      setStatus("error");
    } finally {
      loading.current = false;
    }
  }, [batchSize, done]);

  // Dispara um pouco antes do fim, para o próximo lote já estar lá quando o
  // leitor chegar. Em erro o observador para e o botão assume.
  useEffect(() => {
    const node = sentinel.current;
    if (!node || done || status === "error") return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) void loadMore();
      },
      { rootMargin: "600px 0px" },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [done, loadMore, status]);

  return (
    <>
      <ul className="post-feed">
        {cards.map((card) => (
          <PostCardItem key={card.url} card={card} />
        ))}
      </ul>

      <div ref={sentinel} className="feed-more">
        <p aria-live="polite" className="feed-more-status">
          {done
            ? `${total} posts. Você chegou ao fim.`
            : `${cards.length} de ${total} posts`}
        </p>

        {!done && (
          <a
            href={nextPageUrl}
            className="button"
            onClick={(event) => {
              // Só intercepta o clique comum: ctrl/cmd/meio continuam abrindo
              // a página em uma nova aba, como qualquer link.
              if (event.metaKey || event.ctrlKey || event.shiftKey || event.button !== 0) {
                return;
              }
              event.preventDefault();
              void loadMore();
            }}
          >
            {status === "loading" ? "Carregando…" : "Carregar mais"}
          </a>
        )}

        {status === "error" && (
          <p className="feed-more-status">
            Não foi possível carregar mais posts. Tente de novo ou use o{" "}
            <a href="/arquivo/">arquivo</a>.
          </p>
        )}
      </div>
    </>
  );
}
