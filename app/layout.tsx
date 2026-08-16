import "./global.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Navbar } from "./components/nav";
import { Analytics } from "@vercel/analytics/react";
import { Container } from "./components/container";
import { StretchyFooter } from "@/components/ui/stretchy-footer";
import Script from "next/script";
import {
  baseUrl,
  defaultDescription,
  defaultTitle,
  jsonLd,
  keywords,
  siteName,
  twitterHandle,
} from "app/lib/seo";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: defaultTitle,
    template: "%s | Shivam Katare",
  },
  description: defaultDescription,
  keywords,
  authors: [{ name: siteName, url: baseUrl }],
  creator: siteName,
  alternates: {
    canonical: baseUrl,
    types: {
      "application/rss+xml": `${baseUrl}/rss`,
    },
  },
  openGraph: {
    title: defaultTitle,
    description: defaultDescription,
    url: baseUrl,
    siteName,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og.png",
        width: 801,
        height: 505,
        alt: defaultTitle,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: defaultDescription,
    creator: twitterHandle,
    images: ["/og.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const cx = (...classes) => classes.filter(Boolean).join(" ");

const paperAurora = [
  "#f8f8f6", // exact --paper
  "#EBF4F8", // pale sky
  "#A8D4EE", // soft blue
  "#5CB8E6", // bright sky
  "#4A90E2", // peak blue
  "#E2A76F", // sunlit peach
  "#5CB8E6",
  "#EBF4F8",
  "#f8f8f6",
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cx(
        "bg-[var(--paper)] text-[var(--ink)] font-sans",
        inter.variable,
        inter.className,
      )}
    >
      <head>
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
        <Script
          src="https://t.raah.dev/script.js"
          data-pid="proj_9li6c2ututjsnbre"
          data-domain="shivamkatare.vercel.app"
          strategy="afterInteractive"
        />
      </head>
      <body className="antialiased min-h-[100dvh] relative bg-[var(--paper)] text-[var(--ink)]">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Viewport-fixed so overscroll lift does not take the paper grain with it. */}
        <div
          className="paper-noise pointer-events-none fixed inset-0 z-[1]"
          aria-hidden
        />
        <Navbar />
        <div data-stretchy-page className="relative z-10 w-full overflow-x-clip">
          <div className="relative z-10 w-full flex flex-col items-center">
            <Container className="w-full flex max-w-[1200px] flex-col items-stretch px-6 sm:px-12">
              {children}
              <Analytics />
            </Container>
          </div>
        </div>
        <StretchyFooter windowScroll colors={paperAurora} />
      </body>
    </html>
  );
}
