import Link from "next/link";
import Badge from "./components/badge";
import { Portrait } from "./components/portrait";
import { ProofStats } from "./components/proof-stats";
import { PageLink, TextLink } from "./components/text-link";
import { socials } from "./lib/constant";

export const dynamic = "force-static";

export default function Page() {
  return (
    <main className="home-intro mx-auto w-full max-w-[640px] pt-28 pb-20 md:pt-32 md:pb-24">
      <div className="flex items-start justify-between gap-5">
        <div className="min-w-0">
          <h1 className="text-[1.75rem] md:text-[1.95rem] font-semibold tracking-[-0.03em] leading-[1.2] text-[var(--ink)]">
            Hey, I&apos;m Shivam!
          </h1>
          <p className="mt-2 text-[1.0025rem] leading-[1.6] italic text-[var(--ink-secondary)]">
            A software engineer who builds products and the systems behind them.
          </p>
        </div>
        <Portrait />
      </div>

      <p className="mt-7 text-[1.0025rem] leading-[1.7] text-[var(--ink-secondary)]">
        A lot of my work sits around web products, AI tools, automation, and
        developer tooling. I like building things, testing how they work in
        practice, and{" "}
        <TextLink href="https://dev.to/shivamkatare">writing</TextLink> about
        what I learn along the way.
      </p>

      <ProofStats />

      <p className="mt-9 text-[1.0025rem] leading-[1.7] text-[var(--ink-secondary)]">
        I&apos;m currently a Software Engineer at{" "}
        <Badge
          icon="/triallies.png"
          text="Triallies"
          link="https://triallies.com/"
        />
        , where I work on product systems involving real-time communication,
        automation, and AI-assisted workflows. Outside my full-time role, I also
        take on independent work through{" "}
        <Badge
          icon="/studio1.png"
          text="Studio1"
          link="https://www.studio1hq.com/"
        />
        , building and testing AI tools, agents, developer tooling, and other
        prototypes for software teams.
      </p>

      <p className="mt-7 text-[1.0025rem] leading-[1.7] text-[var(--ink-secondary)]">
        I&apos;ve also worked on{" "}
        <PageLink href="/work#open-source">open-source projects</PageLink>{" "}
        including{" "}
        <Badge
          icon="/Kestra.full.logo.dark.svg"
          text="Kestra"
          link="https://github.com/kestra-io/kestra"
        />{" "}
        and{" "}
        <Badge
          icon="/reactplaylogo.png"
          text="ReactPlay"
          link="https://github.com/reactplay/react-play"
        />
        , where I was a Core Maintainer. Apart from that, {" "}
        <PageLink href="/work#projects">you can see the projects I&apos;ve built</PageLink>
      </p>

      <p className="mt-8 text-[1.0025rem] leading-[1.7] text-[var(--ink-secondary)]">
        I&apos;m currently exploring my next role across frontend engineering,
        AI products, and technical writing. If you&apos;re working on something
        interesting,{" "}
        <TextLink href="mailto:katare27451@gmail.com">say hi</TextLink>.
      </p>

      <p className="mt-5 flex flex-wrap items-center gap-x-3.5 gap-y-2 text-[1.0025rem] leading-[1.7] text-[var(--ink-secondary)]">
        You can find me here too
        <span className="inline-flex items-center gap-3.5">
          {socials.map(({ href, label, icon: Icon }) => (
            <Link
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="text-[var(--ink)] cursor-pointer transition-colors duration-200 hover:text-[var(--link-mark)]"
            >
              <Icon className="size-6" />
            </Link>
          ))}
        </span>
      </p>
    </main>
  );
}
