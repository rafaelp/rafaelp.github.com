import Link from "next/link";
import { PostFeed } from "@/components/PostFeed";
import { getCategories, getCommentCounts, getPosts, paginate } from "@/lib/content";
import { site } from "@/lib/site";

export default function HomePage() {
  const { items, totalPages } = paginate(getPosts(), 1, site.postsPerPage);

  return (
    <>
      <div className="site-cover">
        <div className="container">
          <h1>{site.title}</h1>
          <p>{site.description}</p>
        </div>
      </div>
      <div className="container">
        <PostFeed posts={items} categories={getCategories()} commentCounts={getCommentCounts()} />
        {totalPages > 1 && (
          <nav className="pagination" aria-label="Paginação">
            <span>
              Página 1 de {totalPages}
            </span>
            <Link href="/pagina/2/">Posts mais antigos →</Link>
          </nav>
        )}
      </div>
    </>
  );
}
