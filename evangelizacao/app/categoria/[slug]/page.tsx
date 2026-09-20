import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { PostFeed } from "@/components/PostFeed";
import {
  getCategories,
  getCategoryBySlug,
  getCommentCounts,
  getPostsByCategory,
} from "@/lib/content";

export const dynamicParams = false;

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getCategories().map((category) => ({ slug: category.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) return {};
  return {
    title: category.name,
    description: `Posts da categoria ${category.name}.`,
    alternates: { canonical: `/categoria/${slug}/` },
  };
}

export default async function CategoryPage({ params }: Params) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) notFound();

  const posts = getPostsByCategory(category.name);

  return (
    <>
      <header className="page-head">
        <div className="container">
          <h1>{category.name}</h1>
          <p>
            {posts.length} {posts.length === 1 ? "post" : "posts"}
          </p>
        </div>
      </header>
      <div className="container">
        <PostFeed posts={posts} categories={getCategories()} commentCounts={getCommentCounts()} />
      </div>
    </>
  );
}
