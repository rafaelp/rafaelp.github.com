import Link from "next/link";
import type { PostCard } from "@/lib/content";

export function PostCardItem({ card }: { card: PostCard }) {
  return (
    <li>
      <article className="post-card">
        {card.category &&
          (card.categoryUrl ? (
            <Link href={card.categoryUrl} className="post-card-tag">
              {card.category}
            </Link>
          ) : (
            <span className="post-card-tag">{card.category}</span>
          ))}
        <h2 className="post-card-title">
          <Link href={card.url}>{card.title}</Link>
        </h2>
        <p className="post-card-excerpt">{card.excerpt}</p>
        <p className="post-card-meta">
          <time dateTime={card.date}>{card.dateLabel}</time>
          {card.meta}
        </p>
      </article>
    </li>
  );
}

export function PostFeed({ cards }: { cards: PostCard[] }) {
  if (cards.length === 0) {
    return <p style={{ textAlign: "center", padding: "48px 0" }}>Nenhum post encontrado.</p>;
  }

  return (
    <ul className="post-feed">
      {cards.map((card) => (
        <PostCardItem key={card.url} card={card} />
      ))}
    </ul>
  );
}
