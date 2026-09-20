import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { PostFeed } from "@/components/PostFeed";
import { getCategories, getCommentCounts, getPosts, paginate } from "@/lib/content";
import { site } from "@/lib/site";

export const dynamicParams = false;

type Params = { params: Promise<{ page: string }> };

function totalPages() {
  return Math.max(1, Math.ceil(getPosts().length / site.postsPerPage));
}

export function generateStaticParams() {
  // A página 1 é a home; só as seguintes ganham rota própria.
  return Array.from({ length: totalPages() - 1 }, (_, i) => ({ page: String(i + 2) }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { page } = await params;
  return { title: `Página ${page}`, alternates: { canonical: `/pagina/${page}/` } };
}

export default async function PaginatedPage({ params }: Params) {
  const { page } = await params;
  const current = Number(page);
  if (!Number.isInteger(current) || current < 2 || current > totalPages()) notFound();

  const { items, totalPages: total } = paginate(getPosts(), current, site.postsPerPage);

  return (
    <>
      <header className="page-head">
        <div className="container">
          <h1>{site.title}</h1>
          <p>
            Página {current} de {total}
          </p>
        </div>
      </header>
      <div className="container">
        <PostFeed posts={items} categories={getCategories()} commentCounts={getCommentCounts()} />
        <nav className="pagination" aria-label="Paginação">
          <Link href={current === 2 ? "/" : `/pagina/${current - 1}/`}>← Posts mais recentes</Link>
          {current < total && <Link href={`/pagina/${current + 1}/`}>Posts mais antigos →</Link>}
        </nav>
      </div>
    </>
  );
}
