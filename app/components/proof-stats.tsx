import Link from "next/link";
import { PiArrowRight } from "react-icons/pi";
import { proof } from "app/lib/constant";

export function ProofStats() {
  return (
    <ul
      className="mt-8 grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2"
      aria-label="Highlights"
    >
      {proof.map(({ value, label, href, icon: Icon }) => {
        const body = (
          <>
            <Icon
              className="mt-0.5 size-5 shrink-0 text-[var(--ink)]"
              aria-hidden
            />
            <span className="min-w-0">
              <span className="block text-[1.35rem] font-semibold tabular-nums tracking-[-0.04em] leading-none text-[var(--ink)]">
                {value}
              </span>
              <span className="mt-1 flex items-start gap-1 text-[0.875rem] leading-snug text-[var(--ink-secondary)]">
                {label}
                {href ? (
                  <PiArrowRight
                    className="mt-0.5 size-3.5 shrink-0 text-[var(--link-mark)]"
                    aria-hidden
                  />
                ) : null}
              </span>
            </span>
          </>
        );

        return (
          <li key={label}>
            {href ? (
              <Link
                href={href}
                className="flex items-start gap-3 no-underline cursor-pointer transition-opacity duration-200 hover:opacity-75"
              >
                {body}
              </Link>
            ) : (
              <div className="flex items-start gap-3">{body}</div>
            )}
          </li>
        );
      })}
    </ul>
  );
}
