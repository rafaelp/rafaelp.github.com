import type { Metadata } from "next";
import { SearchClient } from "./SearchClient";

export const metadata: Metadata = {
  title: "Busca",
  description: "Busque entre todos os posts e páginas do blog.",
  alternates: { canonical: "/busca/" },
};

export default function SearchPage() {
  return (
    <>
      <header className="page-head">
        <div className="container">
          <h1>Busca</h1>
          <p>Procure por título, categoria ou qualquer trecho do texto.</p>
        </div>
      </header>
      <div className="container" style={{ paddingTop: 32 }}>
        <SearchClient />
      </div>
    </>
  );
}
