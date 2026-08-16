import type { ReactNode } from "react";

export function SectionHeading({
  id,
  href,
  children,
}: {
  id?: string;
  href: string;
  children: ReactNode;
}) {
  return (
    <h2 id={id} className="shrink-0">
      <a
        href={href}
        className="text-[1.0025rem] md:text-[1.125rem] font-semibold tracking-[-0.02em] text-[var(--ink)] cursor-pointer transition-colors duration-200 hover:text-[var(--link-mark)]"
      >
        {children}
      </a>
    </h2>
  );
}
