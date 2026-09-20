import Link from "next/link";
import { ThemeToggle } from "@/components/ThemeToggle";
import { getPages } from "@/lib/content";
import { site } from "@/lib/site";

export function SiteHeader() {
  const pages = getPages();

  return (
    <header className="site-head">
      <div className="container site-head-inner">
        <Link href="/" className="site-head-brand">
          {site.title}
        </Link>
        <nav className="site-nav" aria-label="Navegação principal">
          <Link href="/">Inicial</Link>
          {pages.map((page) => (
            <Link key={page.slug} href={`${page.permalink}/`}>
              {page.title}
            </Link>
          ))}
          <Link href="/arquivo/">Arquivo</Link>
          <Link href="/busca/">Busca</Link>
        </nav>
        <ThemeToggle />
      </div>
    </header>
  );
}
