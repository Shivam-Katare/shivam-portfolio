import type { Metadata } from "next";
import { pageMetadata, sitePages } from "app/lib/seo";

export const dynamic = "force-static";

const page = sitePages.find((item) => item.path === "/work")!;

export const metadata: Metadata = pageMetadata({
  title: page.title,
  description: page.description,
  path: page.path,
});

export default function WorkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
