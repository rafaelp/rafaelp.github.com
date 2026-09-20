import Link from "next/link";
import { formatDate, joinMeta, readingTime, type Post } from "@/lib/content";

function categorySlug(categories: Category[], name: string) {
  return categories.find((category) => category.name === name)?.slug;
}

type Category = { slug: string; name: string };

export function PostFeed({
  posts,
  categories,
  commentCounts,
}: {
  posts: Post[];
  categories: Category[];
  commentCounts: Record<string, number>;
}) {
  if (posts.length === 0) {
    return <p style={{ textAlign: "center", padding: "48px 0" }}>Nenhum post encontrado.</p>;
  }

  return (
    <ul className="post-feed">
      {posts.map((post) => {
        const primary = post.categories[0];
        const slug = primary ? categorySlug(categories, primary) : undefined;
        const comments = commentCounts[post.wordpressId] ?? 0;

        return (
          <li key={post.permalink}>
            <article className="post-card">
              {primary &&
                (slug ? (
                  <Link href={`/categoria/${slug}/`} className="post-card-tag">
                    {primary}
                  </Link>
                ) : (
                  <span className="post-card-tag">{primary}</span>
                ))}
              <h2 className="post-card-title">
                <Link href={`${post.permalink}/`}>{post.title}</Link>
              </h2>
              <p className="post-card-excerpt">{post.excerpt}</p>
              <p className="post-card-meta">
                <time dateTime={post.date}>{formatDate(post.date)}</time>
                {joinMeta([
                  `${readingTime(post.body)} min de leitura`,
                  comments > 0
                    ? `${comments} ${comments === 1 ? "comentário" : "comentários"}`
                    : null,
                ])}
              </p>
            </article>
          </li>
        );
      })}
    </ul>
  );
}
