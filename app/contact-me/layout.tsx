import type { Metadata } from "next";
import { pageMetadata, sitePages } from "app/lib/seo";

export const dynamic = "force-static";

const page = sitePages.find((item) => item.path === "/contact-me")!;

export const metadata: Metadata = pageMetadata({
  title: page.title,
  description: page.description,
  path: page.path,
});

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
