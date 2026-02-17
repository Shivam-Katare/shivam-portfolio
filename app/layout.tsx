import "./global.css";
import type { Metadata } from "next";
import { Navbar } from "./components/nav";
import { Analytics } from "@vercel/analytics/react";
import { baseUrl } from "./sitemap";
import { Container } from "./components/container";
import Head from "next/head";
import {  Crimson_Text, Outfit } from "next/font/google";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Shivam Katare",
    template: "Shivam Katare",
  },
  description: "Frontend Engineer, and a Technical Writer.",
  openGraph: {
    title: "Shivam Katare",
    description: "Frontend Engineer, and a Technical Writer.",
    url: baseUrl,
    siteName: "Shivam Katare",
    locale: "en_US",
    type: "website",
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

const crimson = Crimson_Text({
  subsets: ["latin"],
  weight: "400",
  style: "italic",
  variable: "--font-crimson",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-outfit",
});

const cx = (...classes) => classes.filter(Boolean).join(" ");

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cx(
        "text-black bg-white",
        crimson.variable,
        outfit.variable
      )}
    >
      <Head>
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
      </Head>
      <body className="antialiased">
        <div className="sticky top-0 z-50 bg-white border-b border-gray-100">
          <Container className="sm:mx-auto flex max-w-3xl py-4">
            <Navbar />
          </Container>
        </div>
        <Container className="sm:mx-auto flex max-w-3xl flex-col items-stretch py-5 px-5 sm:px-0">
          {children}
          <Analytics />
        </Container>
      </body>
    </html>
  );
}
