import Image from "next/image";
import { SectionHeading } from "app/components/section-heading";
import { TextLink } from "app/components/text-link";
import { talks, type Talk } from "app/lib/talks";

function TalkRow({ talk }: { talk: Talk }) {
  return (
    <article className="flex gap-4 py-5 first:pt-0 last:pb-0">
      <div className="relative h-16 w-24 shrink-0 overflow-hidden rounded-[2px] border border-[var(--line)] bg-[#f4f4f0] sm:h-[4.5rem] sm:w-28">
        <Image
          src={talk.image}
          alt=""
          fill
          sizes="112px"
          quality={65}
          className="object-cover object-center"
        />
      </div>
      <div className="min-w-0 flex-1">
        <h3 className="text-[0.975rem] font-medium leading-snug text-[var(--ink)]">
          {talk.title}
        </h3>
        <p className="mt-1 text-[0.8125rem] text-[var(--ink-muted)]">
          {talk.event}
          <span className="mx-1.5 text-[var(--line)]">·</span>
          {talk.date}
        </p>
        <ul className="mt-2 flex list-disc !list-disc flex-col gap-1 pl-5 text-[0.875rem] leading-relaxed text-[var(--ink-secondary)] [list-style-type:disc] [list-style-position:outside] marker:text-[var(--ink)]">
          {talk.points.map((point) => (
            <li key={point} className="pl-1">
              {point}
            </li>
          ))}
        </ul>
        {talk.href ? (
          <p className="mt-2">
            <TextLink href={talk.href}>{talk.linkLabel ?? "Open"}</TextLink>
          </p>
        ) : null}
      </div>
    </article>
  );
}

export function TalksList() {
  return (
    <section id="talks" className="mt-20 scroll-mt-28" aria-labelledby="talks-heading">
      <div className="mb-6 flex items-center gap-4">
        <SectionHeading id="talks-heading" href="/highlights#talks">
          Talks
        </SectionHeading>
        <div className="h-px min-w-0 flex-1 bg-[var(--line)]" />
      </div>
      <div className="divide-y divide-[var(--line)]">
        {talks.map((talk) => (
          <TalkRow key={talk.id} talk={talk} />
        ))}
      </div>
    </section>
  );
}
