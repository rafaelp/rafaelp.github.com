import Link from "next/link";
import type { Metadata } from "next";
import { formatDate, getArchive, getPosts } from "@/lib/content";

export const metadata: Metadata = {
  title: "Arquivo",
  description: "Todos os posts do blog, do mais recente ao mais antigo.",
  alternates: { canonical: "/arquivo/" },
};

export default function ArchivePage() {
  const archive = getArchive();
  const posts = getPosts();
  const total = posts.length;
  const last = posts[0].date.slice(0, 4);
  const first = posts[total - 1].date.slice(0, 4);

  return (
    <>
      <header className="page-head">
        <div className="container">
          <h1>Arquivo</h1>
          <p>
            {total} posts publicados entre {first} e {last}.
          </p>
        </div>
      </header>
      <div className="container" style={{ paddingTop: 48 }}>
        {archive.map(({ year, posts }) => (
          <section key={year} className="archive-year">
            <h2>{year}</h2>
            <ul className="archive-list">
              {posts.map((post) => (
                <li key={post.permalink}>
                  <Link href={`${post.permalink}/`}>
                    <span>{post.title}</span>
                    <time dateTime={post.date}>{formatDate(post.date)}</time>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </>
  );
}
