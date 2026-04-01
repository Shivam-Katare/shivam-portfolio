import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Professional Work Experience & Projects",
  description: "Explore my professional work experience, freelance projects, and contributions to open-source communities as a Senior Frontend Developer.",
  openGraph: {
    title: "Professional Work Experience & Projects",
    description: "Explore my professional work experience, freelance projects, and contributions to open-source communities as a Senior Frontend Developer.",
    images: [
      {
        url: "/og?title=Work Experience & Projects",
        width: 1200,
        height: 630,
        alt: "Work Experience & Projects - Shivam Katare",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Professional Work Experience & Projects",
    description: "Explore my professional work experience, freelance projects, and contributions to open-source communities as a Senior Frontend Developer.",
    images: ["/og?title=Work Experience & Projects"],
  },
};

export default function WorkLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
