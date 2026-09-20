import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const CONTENT_DIR = path.join(process.cwd(), "content");

export type Post = {
  title: string;
  slug: string;
  date: string;
  permalink: string;
  categories: string[];
  excerpt: string;
  author: string;
  wordpressId: string;
  body: string;
};

export type Page = {
  title: string;
  slug: string;
  date: string;
  permalink: string;
  excerpt: string;
  wordpressId: string;
  body: string;
};

export type Comment = {
  id: number;
  parent: number | null;
  date: string;
  author: string;
  authorUrl: string | null;
  html: string;
};

export type Category = {
  slug: string;
  name: string;
  count: number;
};

function readDir(dir: string): { name: string; raw: string }[] {
  const full = path.join(CONTENT_DIR, dir);
  return fs
    .readdirSync(full)
    .filter((name) => name.endsWith(".md"))
    .map((name) => ({ name, raw: fs.readFileSync(path.join(full, name), "utf8") }));
}

function readJson<T>(name: string): T {
  return JSON.parse(fs.readFileSync(path.join(CONTENT_DIR, "data", name), "utf8")) as T;
}

let postCache: Post[] | null = null;

/** Todos os posts, do mais recente ao mais antigo. */
export function getPosts(): Post[] {
  if (postCache) return postCache;
  postCache = readDir("posts")
    .map(({ raw }) => {
      const { data, content } = matter(raw);
      return { ...(data as Omit<Post, "body">), body: content };
    })
    .sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0));
  return postCache;
}

export function getPostByPermalink(permalink: string): Post | undefined {
  return getPosts().find((post) => post.permalink === permalink);
}

let pageCache: Page[] | null = null;

export function getPages(): Page[] {
  if (pageCache) return pageCache;
  pageCache = readDir("pages").map(({ raw }) => {
    const { data, content } = matter(raw);
    return { ...(data as Omit<Page, "body">), body: content };
  });
  return pageCache;
}

export function getPageBySlug(slug: string): Page | undefined {
  return getPages().find((page) => page.slug === slug);
}

/** Categorias que têm posts, ordenadas pelo nome. */
export function getCategories(): Category[] {
  const names = readJson<Record<string, string>>("categories.json");
  const counts = new Map<string, number>();
  for (const post of getPosts()) {
    for (const name of post.categories) {
      counts.set(name, (counts.get(name) ?? 0) + 1);
    }
  }
  return Object.entries(names)
    .map(([slug, name]) => ({ slug, name, count: counts.get(name) ?? 0 }))
    .filter((category) => category.count > 0)
    .sort((a, b) => a.name.localeCompare(b.name, "pt-BR"));
}

export function getCategoryBySlug(slug: string): Category | undefined {
  return getCategories().find((category) => category.slug === slug);
}

export function getPostsByCategory(name: string): Post[] {
  return getPosts().filter((post) => post.categories.includes(name));
}

export function getComments(wordpressId: string): Comment[] {
  const all = readJson<Record<string, Comment[]>>("comments.json");
  return all[wordpressId] ?? [];
}

export function getCommentCounts(): Record<string, number> {
  const all = readJson<Record<string, Comment[]>>("comments.json");
  return Object.fromEntries(Object.entries(all).map(([id, list]) => [id, list.length]));
}

/** Arquivo de posts agrupado por ano, do mais recente ao mais antigo. */
export function getArchive(): { year: string; posts: Post[] }[] {
  const byYear = new Map<string, Post[]>();
  for (const post of getPosts()) {
    const year = post.date.slice(0, 4);
    byYear.set(year, [...(byYear.get(year) ?? []), post]);
  }
  return [...byYear.entries()]
    .map(([year, posts]) => ({ year, posts }))
    .sort((a, b) => b.year.localeCompare(a.year));
}

export function paginate<T>(items: T[], page: number, perPage: number) {
  const totalPages = Math.max(1, Math.ceil(items.length / perPage));
  return {
    items: items.slice((page - 1) * perPage, page * perPage),
    page,
    totalPages,
  };
}

const dateFormatter = new Intl.DateTimeFormat("pt-BR", {
  day: "2-digit",
  month: "long",
  year: "numeric",
  timeZone: "UTC",
});

export function formatDate(date: string): string {
  return dateFormatter.format(new Date(`${date.slice(0, 10)}T12:00:00Z`));
}

/** Tempo de leitura aproximado, a ~200 palavras por minuto. */
export function readingTime(body: string): number {
  return Math.max(1, Math.round(body.split(/\s+/).length / 200));
}

/**
 * Junta itens de metadados com "·". O separador é colado ao item anterior por
 * espaço inquebrável, para que nunca comece uma linha sozinho.
 */
export function joinMeta(parts: (string | null)[]): string {
  return parts.filter(Boolean).map((part) => `\u00a0· ${part}`).join("");
}
