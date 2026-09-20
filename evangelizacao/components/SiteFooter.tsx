import Link from "next/link";
import { site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="site-foot">
      <div className="container site-foot-inner">
        <p style={{ margin: 0 }}>
          {site.title} &copy; {new Date().getFullYear()} &middot; por{" "}
          <a href={site.authorUrl} rel="me">
            {site.author}
          </a>
        </p>
        <nav aria-label="Rodapé">
          <Link href="/arquivo/">Arquivo</Link>
          <Link href="/busca/">Busca</Link>
          <a href="/feed.xml">RSS</a>
        </nav>
      </div>
    </footer>
  );
}
