import type { Metadata } from "next";
import { Caveat } from "next/font/google";
import { pageMetadata, sitePages } from "app/lib/seo";

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["500"],
  variable: "--font-caveat",
  display: "swap",
});

export const dynamic = "force-static";

const page = sitePages.find((item) => item.path === "/highlights")!;

export const metadata: Metadata = pageMetadata({
  title: page.title,
  description: page.description,
  path: page.path,
});

export default function HighlightsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className={caveat.variable}>{children}</div>;
}
