import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Comments } from "@/components/Comments";
import {
  formatDate,
  getCategories,
  getComments,
  getPageBySlug,
  getPages,
  getPostByPermalink,
  getPosts,
  joinMeta,
  readingTime,
} from "@/lib/content";
import { renderMarkdown } from "@/lib/markdown";
import { site } from "@/lib/site";

export const dynamicParams = false;

type Params = { params: Promise<{ slug: string[] }> };

export function generateStaticParams() {
  return [
    ...getPosts().map((post) => ({ slug: post.permalink.slice(1).split("/") })),
    ...getPages().map((page) => ({ slug: [page.slug] })),
  ];
}

/** Resolve os permalinks do WordPress: /AAAA/MM/DD/slug para posts, /slug para páginas. */
function resolve(slug: string[]) {
  const permalink = `/${slug.join("/")}`;
  const post = getPostByPermalink(permalink);
  if (post) return { kind: "post" as const, post };
  if (slug.length === 1) {
    const page = getPageBySlug(slug[0]);
    if (page) return { kind: "page" as const, page };
  }
  return null;
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const found = resolve(slug);
  if (!found) return {};

  const entry = found.kind === "post" ? found.post : found.page;
  return {
    title: entry.title,
    description: entry.excerpt,
    alternates: { canonical: `${entry.permalink}/` },
    openGraph: {
      type: found.kind === "post" ? "article" : "website",
      title: entry.title,
      description: entry.excerpt,
      url: `${entry.permalink}/`,
      ...(found.kind === "post" ? { publishedTime: found.post.date } : {}),
    },
  };
}

export default async function EntryPage({ params }: Params) {
  const { slug } = await params;
  const found = resolve(slug);
  if (!found) notFound();

  if (found.kind === "page") {
    const { page } = found;
    const html = await renderMarkdown(page.body);
    return (
      <article className="article container">
        <header className="article-header">
          <h1 className="article-title">{page.title}</h1>
        </header>
        <div className="gh-content" dangerouslySetInnerHTML={{ __html: html }} />
      </article>
    );
  }

  const { post } = found;
  const html = await renderMarkdown(post.body);
  const comments = getComments(post.wordpressId);
  const categories = getCategories();

  const posts = getPosts();
  const index = posts.findIndex((candidate) => candidate.permalink === post.permalink);
  const newer = index > 0 ? posts[index - 1] : undefined;
  const older = index < posts.length - 1 ? posts[index + 1] : undefined;

  return (
    <article className="article container">
      <header className="article-header">
        {post.categories.length > 0 && (
          <div className="article-tags">
            {post.categories.map((name) => {
              const category = categories.find((candidate) => candidate.name === name);
              return category ? (
                <Link key={name} href={`/categoria/${category.slug}/`}>
                  {name}
                </Link>
              ) : (
                <span key={name}>{name}</span>
              );
            })}
          </div>
        )}
        <h1 className="article-title">{post.title}</h1>
        <p className="article-meta">
          <span>{post.author || site.author}</span>
          {joinMeta([formatDate(post.date), `${readingTime(post.body)} min de leitura`])}
        </p>
      </header>

      <div className="gh-content" dangerouslySetInnerHTML={{ __html: html }} />

      {(newer || older) && (
        <nav className="post-nav" aria-label="Outros posts">
          {older && (
            <Link href={`${older.permalink}/`}>
              <span>Post anterior</span>
              <strong>{older.title}</strong>
            </Link>
          )}
          {newer && (
            <Link href={`${newer.permalink}/`} className="next">
              <span>Próximo post</span>
              <strong>{newer.title}</strong>
            </Link>
          )}
        </nav>
      )}

      <Comments comments={comments} />
    </article>
  );
}
