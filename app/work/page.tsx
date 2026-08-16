import type { ReactNode } from "react";
import { PageJumpNav } from "app/components/page-jump-nav";
import { SectionHeading } from "app/components/section-heading";
import { TextLink } from "app/components/text-link";
import { WorkEntry } from "app/components/work-entry";
import { workStacks } from "app/lib/work-stacks";

const sections = [
  {
    id: "professional-experience",
    title: "Professional Experience",
    label: "Professional",
  },
  {
    id: "independent-work",
    title: "Independent Work",
    label: "Independent",
  },
  {
    id: "projects",
    title: "Projects",
    label: "Projects",
  },
  {
    id: "open-source",
    title: "Open Source",
    label: "Open Source",
  },
] as const;

function SectionNav() {
  return (
    <header className="mb-10">
      <div className="flex flex-col gap-4">
        <h1 className="text-[1.75rem] md:text-[1.95rem] font-semibold tracking-[-0.03em] leading-[1.2] text-[var(--ink)]">
          Work
        </h1>
        <PageJumpNav
          items={sections.map(({ id, label }) => ({
            href: `/work#${id}`,
            label,
          }))}
        />
      </div>
    </header>
  );
}

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
    <section id={id} className="mt-12 scroll-mt-28">
      <div className="mb-7 flex items-center gap-4">
        <SectionHeading href={`/work#${id}`}>{title}</SectionHeading>
        <div className="h-px min-w-0 flex-1 bg-[var(--line)]" />
      </div>
      <div className="flex flex-col gap-8">{children}</div>
    </section>
  );
}

function BulletList({ items }: { items: readonly string[] }) {
  return (
    <ul className="flex list-disc !list-disc flex-col gap-2 pl-5 [list-style-type:disc] [list-style-position:outside] marker:text-[var(--ink)]">
      {items.map((item) => (
        <li key={item} className="pl-1">
          {item}
        </li>
      ))}
    </ul>
  );
}

export default function Work() {
  return (
    <main className="home-intro mx-auto w-full max-w-[640px] pt-28 pb-20 md:pt-32 md:pb-24">
      <SectionNav />
      <Section id="professional-experience" title="Professional Experience">
        <WorkEntry
          name="Triallies LLC"
          href="https://triallies.com/"
          icon="/triallies.png"
          meta="Software Engineer · Oct 2023 - Present"
          tags={workStacks.triallies}
        >
          <BulletList
            items={[
              "Built a chat tool that lets support reps and AI agents handle 100+ customer conversations at the same time, with replies going out in under 200ms.",
              "Built a tool that sends one WhatsApp message to 5,000+ customers in a single campaign and keeps the contact list updated automatically, so no one gets messaged twice or missed.",
              "Automated the weekly task of calculating staff commissions by hand, cutting that work by 40%.",
            ]}
          />
        </WorkEntry>

        <WorkEntry
          name="Flagright"
          href="https://www.flagright.com/"
          icon="/flagright.svg"
          meta="Software Engineer Intern · Apr 2023 - Jul 2023"
          tags={workStacks.flagright}
        >
          <BulletList
            items={[
              "Built responsive product interfaces with Next.js, Tailwind CSS, and Ant Design, improving page performance from 4.2s to 1.8s and reaching an 89+ PageSpeed score.",
            ]}
          />
        </WorkEntry>

        <WorkEntry
          name="AccuKnox"
          href="https://www.accuknox.com/"
          icon="/accuknox.jpeg"
          meta="React JS Developer · Jun 2022 - Mar 2023"
          tags={workStacks.accuknox}
        >
          <BulletList
            items={[
              "Migrated a cloud-security dashboard from Redux to React Query, shrinking the bundle size by 30%.",
            ]}
          />
        </WorkEntry>
      </Section>

      <Section id="independent-work" title="Independent Work">
        <WorkEntry
          name="Studio1"
          href="https://www.studio1hq.com/"
          icon="/studio1.png"
          meta="Independent Work · 2026 - Present"
          collapsible
        >
          <BulletList
            items={[
              "Built and tested AI agents, MCP applications, AI coding workflows, web-data projects, automation, and real-time applications for software teams.",
              "Provided technical writing and content services, including articles, tutorials, and technical documentation.",
            ]}
          />
        </WorkEntry>

        <WorkEntry
          name="The Humans of Tech"
          href="https://www.thehumansoftech.com/"
          icon="/HOT.jpg"
          meta="Content Writer"
          tags={workStacks.humansOfTech}
          collapsible
        >
          <BulletList
            items={[
              "Wrote Q&A articles based on interviews with developers and tech professionals.",
            ]}
          />
          <p className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2">
            <TextLink href="https://www.thehumansoftech.com/blog/from-blogging-to-paypal-without-cs-degree">
              Blogging to PayPal
            </TextLink>
            <TextLink href="https://www.thehumansoftech.com/blog/from-a-support-engineer-at-microsoft-to-a-developer-advocate-at-appwrite">
              Microsoft to Appwrite
            </TextLink>
          </p>
        </WorkEntry>
      </Section>

      <Section id="projects" title="Projects">
        <WorkEntry
          name="Tria"
          href="https://hellotria.vercel.app/"
          meta="AI Email Intelligence · Project Won $4,000 Hackathon Prize"
          tags={workStacks.tria}
          links={{
            live: "https://hellotria.vercel.app/",
            github: "https://github.com/Shivam-Katare/tria",
          }}
        >
          <BulletList
            items={[
              "Created an AI agent that reads Gmail to classify, summarize, and prioritize emails.",
            ]}
          />
        </WorkEntry>

        <WorkEntry
          name="Moood"
          href="https://github.com/Shivam-Katare/moood"
          meta="AI Recommendation Agent"
          tags={workStacks.moood}
          links={{ github: "https://github.com/Shivam-Katare/moood" }}
        >
          <BulletList
            items={[
              "Developed an agent that recommends movies by combining live movie data with Gemini, based on mood, genre, runtime, language, and platform.",
            ]}
          />
        </WorkEntry>

        <WorkEntry
          name="Security Automation Agent"
          href="https://github.com/Shivam-Katare/kestra_Security_Agent"
          meta="Post-deployment Security"
          tags={workStacks.securityAutomation}
          links={{
            github: "https://github.com/Shivam-Katare/kestra_Security_Agent",
          }}
        >
          <BulletList
            items={[
              "Designed a security agent that scans dependencies, monitors runtime network activity, checks deployments, and auto-fixes issues it finds.",
            ]}
          />
        </WorkEntry>
      </Section>

      <Section id="open-source" title="Open Source">
        <WorkEntry
          name="ReactPlay"
          href="https://reactplay.io/"
          icon="/reactplaylogo.png"
          meta="Core Maintainer"
          tags={workStacks.reactplay}
        >
          <BulletList
            items={[
              "Worked as a Core Maintainer on an open-source React learning platform, reviewing contributions, participating in technical discussions, and helping maintain the project alongside the wider community.",
            ]}
          />
        </WorkEntry>

        <WorkEntry
          name="Kestra"
          href="https://kestra.io/"
          icon="/Kestra.full.logo.dark.svg"
          meta="Contributor"
          tags={workStacks.kestra}
        >
          <BulletList
            items={[
              "Contributed UI fixes to the open-source workflow orchestration platform, including fixes around asynchronous rendering and theme-related regressions in AI tooling.",
            ]}
          />
        </WorkEntry>
      </Section>
    </main>
  );
}
