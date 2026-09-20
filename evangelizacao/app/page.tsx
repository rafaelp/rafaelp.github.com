import { InfiniteFeed } from "@/components/InfiniteFeed";
import { getPostCards, getPosts } from "@/lib/content";
import { site } from "@/lib/site";

export default function HomePage() {
  const cards = getPostCards();

  return (
    <>
      <div className="site-cover">
        <div className="container">
          <h1>{site.title}</h1>
          <p>{site.description}</p>
        </div>
      </div>
      <div className="container">
        <InfiniteFeed
          initial={cards.slice(0, site.postsPerPage)}
          total={getPosts().length}
          batchSize={site.postsPerPage}
          nextPageUrl="/pagina/2/"
        />
      </div>
    </>
  );
}
