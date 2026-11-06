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
      <span className="mr-2.5 text-[0.6875rem] font-medium uppercase tracking-[0.14em] text-[#5E5E5E]">
        Jump to
      </span>
      {items.map(({ href, label }, index) => (
        <span key={href} className="inline-flex items-center">
          {index > 0 ? (
            <span className="mx-2.5 h-3.5 w-px bg-[#E5E5E5]" aria-hidden />
          ) : null}
          <a
            href={href}
            className="inline-flex cursor-pointer items-center gap-1 py-1 text-[0.875rem] font-medium leading-none text-[#5E5E5E] transition-colors duration-200 hover:text-[#08090A]"
          >
            {label}
            <PiCaretDown className="size-3 opacity-55" aria-hidden />
          </a>
        </span>
      ))}
    </nav>
  );
}
