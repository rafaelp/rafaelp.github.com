import Link from "next/link";
import type { Metadata } from "next";
import { getCategories } from "@/lib/content";

export const metadata: Metadata = {
  title: "Categorias",
  description: "Todas as categorias do blog.",
  alternates: { canonical: "/categorias/" },
};

export default function CategoriesPage() {
  return (
    <>
      <header className="page-head">
        <div className="container">
          <h1>Categorias</h1>
          <p>Navegue pelos assuntos do blog.</p>
        </div>
      </header>
      <div className="container">
        <ul className="chip-list">
          {getCategories().map((category) => (
            <li key={category.slug}>
              <Link href={`/categoria/${category.slug}/`} className="chip">
                {category.name} <span>{category.count}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
