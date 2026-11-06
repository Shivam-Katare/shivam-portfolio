import Link from "next/link";
import { HomeExperienceRow } from "./components/home-experience-row";
import { Portrait } from "./components/portrait";
import { PageLink, TextLink } from "./components/text-link";

export const dynamic = "force-static";

const workExperience = [
  {
    logo: "/triallies.png",
    title: "Triallies",
    subtitle: "Software Engineer",
    period: "Oct 2023 - Present",
    href: "https://triallies.com/",
    bullets: [
      "Built a real-time chat system enabling support reps and AI agents to handle 100+ concurrent customer conversations with under 200ms latency.",
      "Engineered automated WhatsApp campaign tooling reaching 5,000+ customers per run with automatic contact deduplication.",
      "Automated weekly staff commission workflows, reducing manual operations time by 40%.",
    ],
  },
  {
    logo: "/studio1.png",
    title: "Studio1",
    subtitle: "Independent Engineer & Technical Writer",
    period: "2024 - Present",
    href: "https://www.studio1hq.com/",
    bullets: [
      "Built and tested AI agents, MCP integrations, AI coding workflows, and developer tools for software teams.",
      "Authored deep-dive technical guides, tutorials, and product documentation across 10+ engineering organizations.",
    ],
  },
  {
    logo: "/flagright.svg",
    title: "Flagright",
    subtitle: "Software Engineer Intern",
    period: "Apr 2023 - Jul 2023",
    href: "https://www.flagright.com/",
    bullets: [
      "Built responsive product interfaces with Next.js, TypeScript, and Tailwind CSS, cutting load time from 4.2s to 1.8s (89+ PageSpeed).",
    ],
  },
  {
    logo: "/accuknox.jpeg",
    title: "AccuKnox",
    subtitle: "React JS Developer",
    period: "Jun 2022 - Mar 2023",
    href: "https://www.accuknox.com/",
    bullets: [
      "Migrated the cloud-security dashboard state layer from Redux to React Query, reducing bundle size by 30%.",
    ],
  },
] as const;

const openSourceAndSelected = [
  {
    logo: "/reactplaylogo.png",
    title: "ReactPlay",
    subtitle: "Core Maintainer · Open-source React learning platform",
    period: "Core Maintainer",
    href: "https://github.com/reactplay/react-play",
    bullets: [
      "Reviewed community pull requests, led technical discussions, and maintained core platform architecture alongside the open-source community.",
    ],
  },
  {
    logo: "/Kestra.full.logo.dark.svg",
    title: "Kestra",
    subtitle: "Open Source Contributor · Workflow orchestration platform",
    period: "Contributor",
    href: "https://github.com/kestra-io/kestra",
    bullets: [
      "Contributed UI engineering fixes for asynchronous rendering and theme regressions across Kestra's AI workflow tooling.",
    ],
  },
  {
    logo: "/hackathon.png",
    title: "Tria",
    subtitle: "AI Email Intelligence Agent · Won $4,000 Hackathon Prize",
    period: "1st Place",
    href: "https://hellotria.vercel.app/",
    bullets: [
      "Built an autonomous Gmail intelligence agent using Next.js, TypeScript, and Kestra to classify, summarize, and prioritize high-volume inboxes.",
    ],
  },
] as const;

const proofMetrics = [
  {
    value: "12+",
    label: "AI projects delivered",
    href: "/work#projects",
  },
  {
    value: "4",
    label: "Hackathon wins",
    href: "/work#projects",
  },
  {
    value: "70+",
    label: "Technical articles for 10+ companies",
    href: "https://dev.to/shivamkatare",
    external: true,
  },
  {
    value: "3",
    label: "Technical talks given",
    href: "/highlights#talks",
  },
] as const;

export default function Page() {
  return (
    <main className="home-intro mx-auto w-full max-w-[640px] space-y-10 pt-28 pb-12 md:pt-32 md:pb-14">
      {/* Hero + Intro + Proof Numbers */}
      <section id="hero">
        <div className="flex items-start justify-between gap-5">
          <div className="min-w-0">
            <h1 className="text-[2rem] sm:text-[2.5rem] font-bold tracking-[-0.03em] leading-[1.12] text-[#08090A]">
              Hey, I&apos;m Shivam!
            </h1>
            <p className="mt-2 text-[0.975rem] sm:text-[1.0625rem] font-normal italic leading-[1.55] text-[#5E5E5E]">
              Software engineer working across web products, AI agents, and
              developer tooling.
            </p>
          </div>
          <Portrait />
        </div>

        <p className="mt-6 text-[0.875rem] sm:text-[0.9375rem] font-normal leading-[1.7] text-[#5E5E5E]">
          Right now I build real-time customer and AI workflows at{" "}
          <TextLink href="https://triallies.com/">Triallies</TextLink>, and take
          on independent engineering and technical writing through{" "}
          <TextLink href="https://www.studio1hq.com/">Studio1</TextLink>. Most
          of my time goes into shipping product interfaces, testing how AI tools
          hold up in production, and{" "}
          <TextLink href="https://dev.to/shivamkatare">writing</TextLink> about
          what I learn.
        </p>

        {/* Proof of Work Strip */}
        <div
          className="mt-7 grid grid-cols-2 gap-x-6 gap-y-4 border-y border-[#E5E5E5] py-4 sm:grid-cols-4"
          aria-label="Key achievements"
        >
          {proofMetrics.map((item) => {
            const content = (
              <>
                <span className="block text-[1.4375rem] font-bold tabular-nums tracking-[-0.03em] leading-[1.2] text-[#08090A]">
                  {item.value}
                </span>
                <span className="mt-0.5 block text-[0.75rem] font-normal leading-[1.35] text-[#5E5E5E]">
                  {item.label}
                </span>
              </>
            );

            if ("external" in item && item.external) {
              return (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block transition-opacity duration-150 hover:opacity-75"
                >
                  {content}
                </a>
              );
            }

            return (
              <Link
                key={item.label}
                href={item.href}
                className="group block transition-opacity duration-150 hover:opacity-75"
              >
                {content}
              </Link>
            );
          })}
        </div>
      </section>

      {/* Work Experience */}
      <section id="work-experience">
        <h2 className="text-[1.125rem] sm:text-[1.25rem] font-bold tracking-[-0.02em] leading-[1.3] text-[#08090A]">
          Work Experience
        </h2>
        <div className="mt-4 flex flex-col gap-5">
          {workExperience.map((item) => (
            <HomeExperienceRow key={item.title} {...item} />
          ))}
        </div>
      </section>

      {/* Open Source & Highlights */}
      <section id="open-source">
        <div className="flex items-baseline justify-between gap-4">
          <h2 className="text-[1.125rem] sm:text-[1.25rem] font-bold tracking-[-0.02em] leading-[1.3] text-[#08090A]">
            Open Source &amp; Highlights
          </h2>
          <PageLink href="/work">View all work</PageLink>
        </div>
        <div className="mt-4 flex flex-col gap-5">
          {openSourceAndSelected.map((item) => (
            <HomeExperienceRow key={item.title} {...item} />
          ))}
        </div>
      </section>

      {/* Closing Note */}
      <section id="closing" className="pt-2">
        <p className="text-[0.875rem] sm:text-[0.9375rem] font-normal leading-[1.7] text-[#5E5E5E]">
          I&apos;m currently exploring my next role across frontend engineering,
          AI products, and technical writing. If you&apos;re working on
          something interesting,{" "}
          <TextLink href="mailto:katare27451@gmail.com">say hi</TextLink>.
        </p>
      </section>
    </main>
  );
}
