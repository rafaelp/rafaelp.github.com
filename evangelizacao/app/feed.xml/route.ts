import { getPosts } from "@/lib/content";
import { renderMarkdown } from "@/lib/markdown";
import { site, siteUrl } from "@/lib/site";

export const dynamic = "force-static";

function escapeXml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function GET() {
  const base = siteUrl();
  const posts = getPosts().slice(0, 20);

  const items = await Promise.all(
    posts.map(async (post) => {
      const url = `${base}${post.permalink}/`;
      const html = await renderMarkdown(post.body);
      return [
        "    <item>",
        `      <title>${escapeXml(post.title)}</title>`,
        `      <link>${url}</link>`,
        `      <guid isPermaLink="true">${url}</guid>`,
        `      <pubDate>${new Date(`${post.date}T12:00:00Z`).toUTCString()}</pubDate>`,
        `      <dc:creator>${escapeXml(post.author || site.author)}</dc:creator>`,
        ...post.categories.map((name) => `      <category>${escapeXml(name)}</category>`),
        `      <description>${escapeXml(post.excerpt)}</description>`,
        `      <content:encoded><![CDATA[${html.replace(/]]>/g, "]]]]><![CDATA[>")}]]></content:encoded>`,
        "    </item>",
      ].join("\n");
    }),
  );

  const xml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<rss version="2.0" xmlns:content="http://purl.org/rss/1.0/modules/content/" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:atom="http://www.w3.org/2005/Atom">',
    "  <channel>",
    `    <title>${escapeXml(site.title)}</title>`,
    `    <link>${base}/</link>`,
    `    <description>${escapeXml(site.description)}</description>`,
    `    <language>${site.locale}</language>`,
    `    <atom:link href="${base}/feed.xml" rel="self" type="application/rss+xml" />`,
    ...items,
    "  </channel>",
    "</rss>",
  ].join("\n");

  return new Response(xml, {
    headers: { "Content-Type": "application/rss+xml; charset=utf-8" },
  });
}
