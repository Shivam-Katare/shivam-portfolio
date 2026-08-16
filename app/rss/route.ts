import {
  baseUrl,
  contentUpdatedAt,
  defaultDescription,
  siteName,
  sitePages,
} from "app/lib/seo";

export const dynamic = "force-static";

export function GET() {
  const itemsXml = sitePages
    .map((page) => {
      const url = page.path === "" ? baseUrl : `${baseUrl}${page.path}`;
      return `<item>
          <title>${escapeXml(page.title)}</title>
          <link>${url}</link>
          <guid>${url}</guid>
          <description>${escapeXml(page.description)}</description>
          <pubDate>${new Date(`${contentUpdatedAt}T00:00:00.000Z`).toUTCString()}</pubDate>
        </item>`;
    })
    .join("\n");

  const rssFeed = `<?xml version="1.0" encoding="UTF-8" ?>
  <rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
    <channel>
        <title>${escapeXml(siteName)}</title>
        <link>${baseUrl}</link>
        <description>${escapeXml(defaultDescription)}</description>
        <language>en-us</language>
        <lastBuildDate>${new Date(`${contentUpdatedAt}T00:00:00.000Z`).toUTCString()}</lastBuildDate>
        <atom:link href="${baseUrl}/rss" rel="self" type="application/rss+xml" />
        ${itemsXml}
    </channel>
  </rss>`;

  return new Response(rssFeed, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}

function escapeXml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}
