import type { Metadata } from "next";

export const baseUrl = "https://shivamkatare.vercel.app";
export const siteName = "Shivam Katare";
export const twitterHandle = "@Shivamkatare_27";
export const contentUpdatedAt = "2026-08-16";

export const defaultTitle = "Shivam Katare | Software Engineer";

export const defaultDescription =
  "Software engineer building web products, AI applications, automation, developer tooling, and technical writing. Works with AI agents, MCP, coding workflows, and orchestration. Open to frontend engineering, AI product, and technical writing roles.";

export const keywords = [
  "Shivam Katare",
  "Software Engineer",
  "web products",
  "AI applications",
  "automation",
  "developer tooling",
  "AI agents",
  "MCP",
  "technical writing",
  "orchestration",
  "developer advocacy",
];

export const profileUrls = [
  "https://github.com/Shivam-Katare",
  "https://www.linkedin.com/in/shivam-katare/",
  "https://x.com/Shivamkatare_27",
  "https://dev.to/shivamkatare",
] as const;

export const sitePages = [
  {
    path: "",
    title: defaultTitle,
    description: defaultDescription,
    changeFrequency: "weekly" as const,
    priority: 1,
  },
  {
    path: "/work",
    title: "Work",
    description:
      "Product engineering, independent work, and projects across web products, AI applications, automation, and developer tooling.",
    changeFrequency: "monthly" as const,
    priority: 0.9,
  },
  {
    path: "/highlights",
    title: "Highlights",
    description:
      "Talks, meetups, hackathons, and community work from a software engineer building products and developer tools.",
    changeFrequency: "monthly" as const,
    priority: 0.8,
  },
  {
    path: "/contact-me",
    title: "Contact",
    description:
      "Open to frontend engineering, AI product, and technical writing roles. Send a note about a project, role, or idea.",
    changeFrequency: "yearly" as const,
    priority: 0.7,
  },
] as const;

export const publicRoutes = sitePages.map((page) => page.path);

type PageMetaInput = {
  title: string;
  description: string;
  path: string;
};

export function pageMetadata({
  title,
  description,
  path,
}: PageMetaInput): Metadata {
  const url = path === "/" || path === "" ? baseUrl : `${baseUrl}${path}`;
  const ogTitle = title.includes(siteName) ? title : `${title} | ${siteName}`;
  const imagePath = `/og?title=${encodeURIComponent(ogTitle)}`;

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: url,
      types: {
        "application/rss+xml": `${baseUrl}/rss`,
      },
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
    openGraph: {
      title: ogTitle,
      description,
      url,
      siteName,
      locale: "en_US",
      type: "website",
      images: [
        {
          url: imagePath,
          width: 1200,
          height: 630,
          alt: ogTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description,
      creator: twitterHandle,
      images: [imagePath],
    },
  };
}

export const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${baseUrl}/#person`,
      name: siteName,
      url: baseUrl,
      image: `${baseUrl}/me.jpeg`,
      email: "mailto:katare27451@gmail.com",
      jobTitle: "Software Engineer",
      description: defaultDescription,
      sameAs: [...profileUrls],
      knowsAbout: [
        "Web products",
        "AI applications",
        "Automation",
        "Developer tooling",
        "AI agents",
        "MCP",
        "AI coding workflows",
        "Orchestration",
        "Technical writing",
        "Developer advocacy",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${baseUrl}/#website`,
      url: baseUrl,
      name: siteName,
      description: defaultDescription,
      inLanguage: "en-US",
      publisher: {
        "@id": `${baseUrl}/#person`,
      },
    },
    {
      "@type": "ProfilePage",
      "@id": `${baseUrl}/#profile`,
      url: baseUrl,
      name: defaultTitle,
      isPartOf: {
        "@id": `${baseUrl}/#website`,
      },
      about: {
        "@id": `${baseUrl}/#person`,
      },
      mainEntity: {
        "@id": `${baseUrl}/#person`,
      },
    },
  ],
};
