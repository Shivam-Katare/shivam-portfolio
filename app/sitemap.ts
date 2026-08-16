import type { MetadataRoute } from "next";
import { baseUrl, contentUpdatedAt, sitePages } from "app/lib/seo";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return sitePages.map((page) => ({
    url: page.path === "" ? baseUrl : `${baseUrl}${page.path}`,
    lastModified: contentUpdatedAt,
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));
}
