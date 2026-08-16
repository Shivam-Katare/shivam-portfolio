"use client";

import { useId, useState, type ReactNode } from "react";
import { PiArrowSquareOut, PiCaretDoubleDown, PiGithubLogo } from "react-icons/pi";
import Badge from "app/components/badge";
import { stackTagTone } from "app/lib/stack-tag-colors";

type ProjectLinks = {
  live?: string;
  github?: string;
};

type WorkEntryProps = {
  name: string;
  href: string;
  icon?: string;
  meta: string;
  tags?: readonly string[];
  collapsible?: boolean;
  defaultOpen?: boolean;
  links?: ProjectLinks;
  children: ReactNode;
};

function StackTags({ tags }: { tags: readonly string[] }) {
  return (
    <ul className="mt-3 flex flex-wrap gap-1.5">
      {tags.map((tag) => {
        const tone = stackTagTone(tag);
        return (
          <li
            key={tag}
            className="rounded-[5px] border px-2 py-[3px] text-[0.7rem] leading-none"
            style={{
              backgroundColor: tone.bg,
              borderColor: tone.border,
              color: tone.text,
            }}
          >
            {tag}
          </li>
        );
      })}
    </ul>
  );
}

function ExtraLinks({ name, links }: { name: string; links?: ProjectLinks }) {
  if (!links?.live && !links?.github) return null;

  return (
    <span className="inline-flex items-center gap-1.5">
      {links.live ? (
        <a
          href={links.live}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${name} live site`}
          className="inline-flex size-8 items-center justify-center rounded-[6px] text-[var(--ink-muted)] transition-colors duration-200 hover:bg-[#f4f4f1] hover:text-[var(--ink)]"
        >
          <PiArrowSquareOut className="size-4" aria-hidden />
        </a>
      ) : null}
      {links.github ? (
        <a
          href={links.github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${name} GitHub`}
          className="inline-flex size-8 items-center justify-center rounded-[6px] text-[var(--ink-muted)] transition-colors duration-200 hover:bg-[#f4f4f1] hover:text-[var(--ink)]"
        >
          <PiGithubLogo className="size-4" aria-hidden />
        </a>
      ) : null}
    </span>
  );
}

export function WorkEntry({
  name,
  href,
  icon,
  meta,
  tags,
  collapsible,
  defaultOpen = false,
  links,
  children,
}: WorkEntryProps) {
  const panelId = useId();
  const canCollapse = collapsible ?? Boolean(tags?.length);
  const [open, setOpen] = useState(defaultOpen);

  return (
    <article className="min-w-0">
      <div className="flex min-w-0 flex-wrap items-center gap-2">
        <h3 className="min-w-0">
          <Badge icon={icon} text={name} link={href} size="lg" />
        </h3>
        <ExtraLinks name={name} links={links} />
      </div>

      {canCollapse ? (
        <button
          type="button"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => setOpen((value) => !value)}
          className="group mt-2 ml-3 flex w-[calc(100%-0.75rem)] cursor-pointer items-start gap-3 rounded-[6px] text-left sm:ml-4 sm:w-[calc(100%-1rem)]"
        >
          <p className="min-w-0 flex-1 text-[0.9375rem] leading-snug text-[var(--ink-muted)]">
            {meta}
          </p>
          <span className="inline-flex size-7 shrink-0 items-center justify-center rounded-[5px] bg-[var(--ink)]/55 text-white transition-colors duration-200 group-hover:bg-[var(--ink)]/70">
            <PiCaretDoubleDown
              className={`size-3.5 transition-transform duration-300 ease-out motion-reduce:transition-none ${
                open ? "rotate-180" : "rotate-0"
              }`}
              aria-hidden
            />
          </span>
        </button>
      ) : (
        <p className="mt-2 ml-3 text-[0.9375rem] leading-snug text-[var(--ink-muted)] sm:ml-4">
          {meta}
        </p>
      )}

      {canCollapse ? (
        <div className="ml-3 min-w-0 sm:ml-4">
          <div id={panelId} className="relative">
            <div
              className={`overflow-hidden transition-[max-height] duration-300 ease-out motion-reduce:transition-none ${
                open ? "max-h-[80rem]" : "max-h-[4.25rem]"
              }`}
            >
              <div className="pt-3 text-[1.0025rem] leading-[1.7] text-[var(--ink-secondary)] [&>p]:mt-0 [&>ul]:mt-0">
                {children}
              </div>
            </div>
            {!open ? (
              <button
                type="button"
                aria-expanded={false}
                aria-controls={panelId}
                aria-label={`Show more about ${name}`}
                onClick={() => setOpen(true)}
                className="absolute inset-0 cursor-pointer"
              >
                <span
                  aria-hidden
                  className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-[var(--paper)] from-10% to-transparent"
                />
              </button>
            ) : null}
          </div>
          {tags?.length ? <StackTags tags={tags} /> : null}
        </div>
      ) : (
        <div className="ml-3 text-[1.0025rem] leading-[1.7] text-[var(--ink-secondary)] sm:ml-4 [&>p]:mt-3 [&>ul]:mt-3">
          {children}
        </div>
      )}
    </article>
  );
}
