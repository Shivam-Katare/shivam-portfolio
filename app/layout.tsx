import "./global.css";
import type { Metadata, Viewport } from "next";
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

export const viewport: Viewport = {
  themeColor: "#f8f8f6",
};

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: defaultTitle,
    template: "%s | Shivam Katare",
  },
  description: defaultDescription,
  applicationName: siteName,
  keywords,
  authors: [{ name: siteName, url: baseUrl }],
  creator: siteName,
  appleWebApp: {
    capable: true,
    title: siteName,
    statusBarStyle: "default",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  manifest: "/site.webmanifest",
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
        width: 1200,
        height: 630,
        alt: `${defaultTitle}. View work.`,
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: defaultDescription,
    creator: twitterHandle,
    site: twitterHandle,
    images: [
      {
        url: "/og.png",
        alt: `${defaultTitle}. View work.`,
      },
    ],
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
