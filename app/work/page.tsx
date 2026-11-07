import Image from "next/image";
import type { ReactNode } from "react";
import { FaXTwitter } from "react-icons/fa6";
import { PiArrowUpRight, PiGithubLogo, PiGlobe } from "react-icons/pi";
import { PageJumpNav } from "app/components/page-jump-nav";
import { TextLink } from "app/components/text-link";
import { workStacks } from "app/lib/work-stacks";

const sections = [
  {
    id: "projects",
    title: "Projects",
    label: "Projects",
  },
  {
    id: "professional-experience",
    title: "Professional Experience",
    label: "Experience",
  },
  {
    id: "open-source",
    title: "Open Source",
    label: "Open Source",
  },
  {
    id: "independent-work",
    title: "Independent Work",
    label: "Independent",
  },
] as const;

type ProjectItem = {
  name: string;
  category: string;
  badge?: string;
  description: string;
  tags: readonly string[];
  live?: string;
  github?: string;
  post?: string;
};

const projects: readonly ProjectItem[] = [
  {
    name: "CursorBlossom",
    category: "3D Desktop Companion for Windows",
    badge: "Latest Experiment",
    description:
      "Built an interactive 3D character that lives directly on the Windows desktop as a transparent, always-on-top overlay—tracking cursor physics in real time, reacting to movement, and staying persistent across app switches.",
    tags: workStacks.cursorBlossom,
    post: "https://x.com/Shivamkatare_27/status/2118326293389533576?a=by4-_46YImejtoQ7d-8&s=20",
  },
  {
    name: "Moood",
    category: "AI Recommendation Agent",
    description:
      "Developed an agent that recommends movies by combining live streaming catalog data with Gemini, tailored to mood, genre, runtime, language, and platform.",
    tags: workStacks.moood,
    github: "https://github.com/Shivam-Katare/moood",
  },
  {
    name: "Security Automation Agent",
    category: "Post-deployment Security",
    description:
      "Designed an automated security workflow that scans dependencies, monitors runtime network activity, checks deployments, and triggers rollbacks or fixes.",
    tags: workStacks.securityAutomation,
    github: "https://github.com/Shivam-Katare/kestra_Security_Agent",
  },
] as const;

function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-28">
      <div className="mb-5 flex items-center gap-4">
        <h2 className="shrink-0 text-[1.125rem] sm:text-[1.25rem] font-bold tracking-[-0.02em] leading-[1.3] text-[#08090A]">
          <a href={`/work#${id}`} className="transition-opacity hover:opacity-75">
            {title}
          </a>
        </h2>
        <div className="h-px min-w-0 flex-1 bg-[#E5E5E5]" />
      </div>
      {children}
    </section>
  );
}

function StackPills({ tags }: { tags: readonly string[] }) {
  return (
    <ul className="mt-3.5 flex flex-wrap gap-1.5" aria-label="Technologies used">
      {tags.map((tag) => (
        <li
          key={tag}
          className="rounded-[5px] border border-[#E5E5E5] bg-[#F8F8F6] px-2 py-0.5 text-[0.75rem] font-medium leading-[1.3] text-[#08090A]/80"
        >
          {tag}
        </li>
      ))}
    </ul>
  );
}

function DetailedRoleItem({
  logo,
  company,
  role,
  period,
  href,
  bullets,
  tags,
  footer,
}: {
  logo: string;
  company: string;
  role: string;
  period?: string;
  href: string;
  bullets: readonly string[];
  tags?: readonly string[];
  footer?: ReactNode;
}) {
  const isSvg = logo.endsWith(".svg");

  return (
    <article className="group">
      <div className="flex items-start justify-between gap-4">
        <div className="flex min-w-0 items-center gap-3.5">
          <div className="relative flex size-11 shrink-0 items-center justify-center overflow-hidden rounded-full border border-[#E5E5E5] bg-white p-1.5">
            <Image
              src={logo}
              alt={company}
              width={40}
              height={40}
              unoptimized={isSvg}
              className="size-full rounded-full object-contain"
            />
          </div>

          <div className="min-w-0">
            <div className="flex items-center gap-1.5">
              <h3 className="truncate text-[0.9375rem] sm:text-[1rem] font-semibold leading-[1.3] text-[#08090A]">
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 decoration-[#D4D4D4] underline-offset-4 hover:underline hover:decoration-[#08090A]"
                >
                  {company}
                  <PiArrowUpRight
                    className="size-3.5 text-[#5E5E5E] transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#08090A]"
                    aria-hidden
                  />
                </a>
              </h3>
            </div>
            <p className="mt-0.5 text-[0.8125rem] font-normal leading-[1.4] text-[#5E5E5E]">
              {role}
            </p>
          </div>
        </div>

        {period ? (
          <span className="shrink-0 pt-0.5 text-right text-[0.75rem] sm:text-[0.8125rem] font-normal tabular-nums leading-[1.4] text-[#5E5E5E]">
            {period}
          </span>
        ) : null}
      </div>

      <div className="mt-3 ml-[3.625rem]">
        <ul className="space-y-2 border-l border-[#E5E5E5] pl-3.5 text-[0.875rem] leading-[1.65] text-[#5E5E5E]">
          {bullets.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        {footer ? <div className="mt-3">{footer}</div> : null}
        {tags?.length ? <StackPills tags={tags} /> : null}
      </div>
    </article>
  );
}

export default function Work() {
  return (
    <main className="home-intro mx-auto w-full max-w-[640px] space-y-12 pt-28 pb-12 md:pt-32 md:pb-14">
      <header>
        <h1 className="text-[2rem] sm:text-[2.35rem] font-bold tracking-[-0.03em] leading-[1.12] text-[#08090A]">
          Work
        </h1>
        <p className="mt-2 text-[0.875rem] sm:text-[0.9375rem] font-normal leading-[1.65] text-[#5E5E5E]">
          A closer look at the products I&apos;ve built, engineering roles, and
          open-source contributions.
        </p>
        <div className="mt-4">
          <PageJumpNav
            items={sections.map(({ id, label }) => ({
              href: `/work#${id}`,
              label,
            }))}
          />
        </div>
      </header>

      {/* 1. Projects Showcase */}
      <Section id="projects" title="Projects">
        <div className="grid grid-cols-1 gap-4">
          {projects.map(
            ({ name, category, badge, description, tags, live, github, post }) => {
              const primaryHref = post ?? live ?? github;

              return (
                <article
                  key={name}
                  className="rounded-[12px] border border-[#E5E5E5] bg-white p-5 transition-colors duration-200 hover:border-[#08090A]/25"
                >
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div className="min-w-0">
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="text-[1rem] font-bold tracking-[-0.015em] leading-[1.3] text-[#08090A]">
                          {primaryHref ? (
                            <a
                              href={primaryHref}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 decoration-[#D4D4D4] underline-offset-4 hover:underline hover:decoration-[#08090A]"
                            >
                              {name}
                            </a>
                          ) : (
                            name
                          )}
                        </h3>
                        {badge ? (
                          <span className="rounded-[5px] bg-[#171717] px-2 py-0.5 text-[0.6875rem] font-medium leading-[1.2] text-white">
                            {badge}
                          </span>
                        ) : null}
                      </div>
                      <p className="mt-0.5 text-[0.8125rem] font-normal text-[#5E5E5E]">
                        {category}
                      </p>
                    </div>

                    <div className="flex items-center gap-1.5">
                      {post ? (
                        <a
                          href={post}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 rounded-[6px] border border-[#E5E5E5] bg-[#F8F8F6] px-2.5 py-1 text-[0.75rem] font-medium text-[#08090A] transition-colors hover:border-[#08090A]/30 hover:bg-[#EFEFEC]"
                        >
                          <FaXTwitter className="size-3" aria-hidden />
                          Demo
                        </a>
                      ) : null}
                      {live ? (
                        <a
                          href={live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 rounded-[6px] border border-[#E5E5E5] bg-[#F8F8F6] px-2.5 py-1 text-[0.75rem] font-medium text-[#08090A] transition-colors hover:border-[#08090A]/30 hover:bg-[#EFEFEC]"
                        >
                          <PiGlobe className="size-3.5" aria-hidden />
                          Live
                        </a>
                      ) : null}
                      {github ? (
                        <a
                          href={github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 rounded-[6px] border border-[#E5E5E5] bg-[#F8F8F6] px-2.5 py-1 text-[0.75rem] font-medium text-[#08090A] transition-colors hover:border-[#08090A]/30 hover:bg-[#EFEFEC]"
                        >
                          <PiGithubLogo className="size-3.5" aria-hidden />
                          Code
                        </a>
                      ) : null}
                    </div>
                  </div>

                  <p className="mt-3 text-[0.875rem] leading-[1.65] text-[#5E5E5E]">
                    {description}
                  </p>

                  <StackPills tags={tags} />
                </article>
              );
            },
          )}
        </div>
      </Section>

      {/* 2. Professional Experience */}
      <Section id="professional-experience" title="Professional Experience">
        <div className="flex flex-col gap-8">
          <DetailedRoleItem
            logo="/triallies.png"
            company="Triallies LLC"
            role="Software Engineer"
            period="Oct 2023 - Present"
            href="https://triallies.com/"
            tags={workStacks.triallies}
            bullets={[
              "Built a chat tool that lets support reps and AI agents handle 100+ customer conversations at the same time, with replies going out in under 200ms.",
              "Built a tool that sends one WhatsApp message to 5,000+ customers in a single campaign and keeps the contact list updated automatically, so no one gets messaged twice or missed.",
              "Automated the weekly task of calculating staff commissions by hand, cutting that work by 40%.",
            ]}
          />

          <DetailedRoleItem
            logo="/flagright.svg"
            company="Flagright"
            role="Software Engineer Intern"
            period="Apr 2023 - Jul 2023"
            href="https://www.flagright.com/"
            tags={workStacks.flagright}
            bullets={[
              "Built responsive product interfaces with Next.js, Tailwind CSS, and Ant Design, improving page performance from 4.2s to 1.8s and reaching an 89+ PageSpeed score.",
            ]}
          />

          <DetailedRoleItem
            logo="/accuknox.jpeg"
            company="AccuKnox"
            role="React JS Developer"
            period="Jun 2022 - Mar 2023"
            href="https://www.accuknox.com/"
            tags={workStacks.accuknox}
            bullets={[
              "Migrated a cloud-security dashboard from Redux to React Query, shrinking the bundle size by 30%.",
            ]}
          />
        </div>
      </Section>

      {/* 3. Open Source */}
      <Section id="open-source" title="Open Source">
        <div className="flex flex-col gap-8">
          <DetailedRoleItem
            logo="/reactplaylogo.png"
            company="ReactPlay"
            role="Core Maintainer"
            href="https://reactplay.io/"
            tags={workStacks.reactplay}
            bullets={[
              "Worked as a Core Maintainer on an open-source React learning platform, reviewing contributions, participating in technical discussions, and helping maintain the project alongside the wider community.",
            ]}
          />

          <DetailedRoleItem
            logo="/Kestra.full.logo.dark.svg"
            company="Kestra"
            role="Open Source Contributor"
            href="https://kestra.io/"
            tags={workStacks.kestra}
            bullets={[
              "Contributed UI fixes to the open-source workflow orchestration platform, including fixes around asynchronous rendering and theme-related regressions in AI tooling.",
            ]}
          />
        </div>
      </Section>

      {/* 4. Independent Work */}
      <Section id="independent-work" title="Independent Work">
        <div className="flex flex-col gap-8">
          <DetailedRoleItem
            logo="/studio1.png"
            company="Studio1"
            role="Independent Engineer & Technical Writer"
            period="2024 - Present"
            href="https://www.studio1hq.com/"
            bullets={[
              "Built and tested AI agents, MCP applications, AI coding workflows, web-data projects, automation, and real-time applications for software teams.",
              "Provided technical writing and content services, including articles, tutorials, and technical documentation.",
            ]}
          />

          <DetailedRoleItem
            logo="/HOT.jpg"
            company="The Humans of Tech"
            role="Content Writer"
            href="https://www.thehumansoftech.com/"
            tags={workStacks.humansOfTech}
            bullets={[
              "Wrote Q&A articles based on interviews with developers and tech professionals.",
            ]}
            footer={
              <p className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[0.8125rem]">
                <TextLink href="https://www.thehumansoftech.com/blog/from-blogging-to-paypal-without-cs-degree">
                  Blogging to PayPal
                </TextLink>
                <TextLink href="https://www.thehumansoftech.com/blog/from-a-support-engineer-at-microsoft-to-a-developer-advocate-at-appwrite">
                  Microsoft to Appwrite
                </TextLink>
              </p>
            }
          />
        </div>
      </Section>
    </main>
  );
}
