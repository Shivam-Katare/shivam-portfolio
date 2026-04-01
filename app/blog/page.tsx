import { BlogPosts } from "app/components/posts";

export const metadata = {
  title: "Frontend Development & Technical Writing Blog",
  description:
    "Articles on React, Next.js, modern CSS, web performance, and software engineering. Explore thoughts from a Senior Frontend Developer.",
  openGraph: {
    title: "Frontend Development & Technical Writing Blog",
    description:
      "Articles on React, Next.js, modern CSS, web performance, and software engineering. Explore thoughts from a Senior Frontend Developer.",
    images: [
      {
        url: "/og?title=Frontend Web Development Blog",
        width: 1200,
        height: 630,
        alt: "Frontend Development & Technical Writing Blog - Shivam Katare",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Frontend Development & Technical Writing Blog",
    description:
      "Articles on React, Next.js, modern CSS, web performance, and software engineering. Explore thoughts from a Senior Frontend Developer.",
    images: ["/og?title=Frontend Web Development Blog"],
  },
};

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">My Blog</h1>
      <BlogPosts />
    </section>
  );
}
