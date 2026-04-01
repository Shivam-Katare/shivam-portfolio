import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Frontend Engineering Skills & Tech Stack",
  description: "Comprehensive overview of my technical toolkit, including React, Next.js, TypeScript, Tailwind CSS, and various modern web development technologies.",
  openGraph: {
    title: "Frontend Engineering Skills & Tech Stack",
    description: "Comprehensive overview of my technical toolkit, including React, Next.js, TypeScript, Tailwind CSS, and various modern web development technologies.",
    images: [
      {
        url: "/og?title=Skills & Tech Stack",
        width: 1200,
        height: 630,
        alt: "Skills & Tech Stack - Shivam Katare",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Frontend Engineering Skills & Tech Stack",
    description: "Comprehensive overview of my technical toolkit, including React, Next.js, TypeScript, Tailwind CSS, and various modern web development technologies.",
    images: ["/og?title=Skills & Tech Stack"],
  },
};

export default function SkillsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
