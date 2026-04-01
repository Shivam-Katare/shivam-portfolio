import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact for Freelance & Developer Roles",
  description: "Get in touch for freelance development collaborations, technical writing opportunities, or full-time frontend engineering roles. Let's connect.",
  openGraph: {
    title: "Contact for Freelance & Developer Roles",
    description: "Get in touch for freelance development collaborations, technical writing opportunities, or full-time frontend engineering roles. Let's connect.",
    images: [
      {
        url: "/og?title=Contact Me",
        width: 1200,
        height: 630,
        alt: "Contact Me - Shivam Katare",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact for Freelance & Developer Roles",
    description: "Get in touch for freelance development collaborations, technical writing opportunities, or full-time frontend engineering roles. Let's connect.",
    images: ["/og?title=Contact Me"],
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
