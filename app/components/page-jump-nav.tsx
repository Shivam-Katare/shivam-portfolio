import { PiCaretDown } from "react-icons/pi";

type JumpItem = {
  href: string;
  label: string;
};

export function PageJumpNav({ items }: { items: readonly JumpItem[] }) {
  return (
    <nav
      aria-label="On this page"
      className="flex flex-wrap items-center gap-x-1 gap-y-2"
    >
      <span className="mr-2.5 text-[0.65rem] font-medium uppercase tracking-[0.16em] text-[var(--ink-muted)]">
        Jump to
      </span>
      {items.map(({ href, label }, index) => (
        <span key={href} className="inline-flex items-center">
          {index > 0 ? (
            <span
              className="mx-2.5 h-3.5 w-px bg-[var(--line)]"
              aria-hidden
            />
          ) : null}
          <a
            href={href}
            className="inline-flex items-center gap-1 py-1 text-[0.9375rem] leading-none text-[var(--ink-secondary)] cursor-pointer transition-colors duration-200 hover:text-[var(--ink)]"
          >
            {label}
            <PiCaretDown className="size-3 opacity-45" aria-hidden />
          </a>
        </span>
      ))}
    </nav>
  );
}
