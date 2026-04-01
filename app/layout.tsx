import "./global.css";
import type { Metadata } from "next";
import { Navbar } from "./components/nav";
import { Analytics } from "@vercel/analytics/react";
import { baseUrl } from "./sitemap";
import { Container } from "./components/container";
import Head from "next/head";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Frontend Developer & Technical Writer | Shivam Katare",
    template: "%s | Shivam Katare",
  },
  description: "Senior Frontend Engineer and Technical Writer specializing in React, Next.js, and crafting high-performance user interfaces with meticulous haptic depth and scalable architecture.",
  openGraph: {
    title: "Shivam Katare - Senior Frontend Developer",
    description: "Senior Frontend Engineer and Technical Writer specializing in React, Next.js, and crafting high-performance user interfaces with meticulous haptic depth.",
    url: baseUrl,
    siteName: "Shivam Katare Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og?title=Shivam Katare - Frontend Developer",
        width: 1200,
        height: 630,
        alt: "Shivam Katare - Senior Frontend Developer & Technical Writer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shivam Katare - Senior Frontend Developer",
    description: "Senior Frontend Engineer and Technical Writer specializing in React, Next.js, and crafting high-performance user interfaces.",
    creator: "@Shivamkatare_27",
    images: ["/og?title=Shivam Katare - Frontend Developer"],
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cx(
        "bg-[#050505] text-zinc-300 selection:bg-white/90 selection:text-black",
        GeistSans.variable,
        GeistMono.variable,
      )}
    >
      <Head>
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
      </Head>
      <body className="antialiased min-h-[100dvh] font-sans relative overflow-x-hidden">
        {/* Cinematic Ethereal Glass Background Elements */}
        <div className="fixed inset-0 z-[-1] pointer-events-none bg-[#050505]">
          {/* Subtle glowing mesh */}
          <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] rounded-full bg-indigo-500/5 blur-[120px]" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-emerald-500/5 blur-[100px]" />
        </div>

        {/* Noise Texture Overlay */}
        <div
          className="fixed inset-0 z-50 pointer-events-none opacity-[0.03]"
          style={{
            backgroundImage:
              'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")',
          }}
        />

        <div className="relative z-10 w-full pt-8 flex flex-col items-center">
          <Navbar />
          <Container className="w-full flex max-w-[1200px] flex-col items-stretch py-16 px-6 sm:px-12 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]">
            {children}
            <Analytics />
          </Container>
        </div>
      </body>
    </html>
  );
}
