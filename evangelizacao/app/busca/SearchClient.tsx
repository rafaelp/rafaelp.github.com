"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";

export type SearchEntry = {
  title: string;
  url: string;
  excerpt: string;
  meta: string;
  text: string;
};

function normalize(value: string) {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "");
}

export function SearchClient() {
  const [query, setQuery] = useState("");
  const [entries, setEntries] = useState<SearchEntry[] | null>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    let active = true;
    fetch("/search-index.json")
      .then((response) => {
        if (!response.ok) throw new Error(String(response.status));
        return response.json();
      })
      .then((data: SearchEntry[]) => {
        if (active) setEntries(data);
      })
      .catch(() => {
        if (active) setFailed(true);
      });
    return () => {
      active = false;
    };
  }, []);

  const index = useMemo(
    () => (entries ?? []).map((entry) => ({ entry, haystack: normalize(entry.text) })),
    [entries],
  );

  const results = useMemo(() => {
    const terms = normalize(query).split(/\s+/).filter(Boolean);
    if (terms.length === 0) return [];
    return index
      .filter(({ haystack }) => terms.every((term) => haystack.includes(term)))
      .map(({ entry }) => entry);
  }, [index, query]);

  const typed = query.trim().length > 0;

  return (
    <div className="search">
      <label htmlFor="busca" className="skip-link">
        Termo de busca
      </label>
      <input
        id="busca"
        type="search"
        className="search-input"
        placeholder="Buscar no blog…"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        autoComplete="off"
        autoFocus
      />

      {failed && <p className="search-count">Não foi possível carregar o índice de busca.</p>}

      {!failed && typed && (
        <p className="search-count" aria-live="polite">
          {entries === null
            ? "Carregando…"
            : results.length === 0
              ? "Nenhum resultado."
              : `${results.length} ${results.length === 1 ? "resultado" : "resultados"}`}
        </p>
      )}

      <ul className="search-results">
        {results.map((entry) => (
          <li key={entry.url}>
            <Link href={entry.url}>
              <strong>{entry.title}</strong>
              <p>{entry.excerpt}</p>
              {entry.meta && <em>{entry.meta}</em>}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
