"use client";

import Image from "next/image";
import { useState } from "react";
import { PiArrowUpRight, PiCaretRight } from "react-icons/pi";

export type HomeExperienceRowProps = {
  logo: string;
  title: string;
  subtitle: string;
  period: string;
  href?: string;
  bullets?: readonly string[];
  defaultOpen?: boolean;
};

export function HomeExperienceRow({
  logo,
  title,
  subtitle,
  period,
  href,
  bullets,
  defaultOpen = false,
}: HomeExperienceRowProps) {
  const [open, setOpen] = useState(defaultOpen);
  const hasBullets = Boolean(bullets && bullets.length > 0);
  const isSvg = logo.endsWith(".svg");

  return (
    <div className="group">
      <div
        role={hasBullets ? "button" : undefined}
        tabIndex={hasBullets ? 0 : undefined}
        aria-expanded={hasBullets ? open : undefined}
        onClick={() => {
          if (hasBullets) setOpen((prev) => !prev);
        }}
        onKeyDown={(e) => {
          if (hasBullets && (e.key === "Enter" || e.key === " ")) {
            e.preventDefault();
            setOpen((prev) => !prev);
          }
        }}
        className={`flex items-center justify-between gap-4 ${
          hasBullets ? "cursor-pointer select-none" : ""
        }`}
      >
        <div className="flex min-w-0 items-center gap-3.5">
          <div className="relative flex size-11 shrink-0 items-center justify-center overflow-hidden rounded-full border border-[#E5E5E5] bg-white p-1.5">
            <Image
              src={logo}
              alt={title}
              width={40}
              height={40}
              unoptimized={isSvg}
              className="size-full rounded-full object-contain"
            />
          </div>

          <div className="min-w-0">
            <div className="flex items-center gap-1.5">
              <h3 className="truncate text-[0.875rem] sm:text-[0.9375rem] font-semibold leading-[1.35] text-[#08090A]">
                {title}
              </h3>
              {hasBullets ? (
                <PiCaretRight
                  className={`size-3.5 shrink-0 text-[#5E5E5E] transition-transform duration-200 ease-out ${
                    open
                      ? "rotate-90 opacity-100"
                      : "opacity-0 -translate-x-0.5 group-hover:translate-x-0 group-hover:opacity-100"
                  }`}
                  aria-hidden
                />
              ) : null}
              {href ? (
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit ${title}`}
                  onClick={(e) => e.stopPropagation()}
                  className="inline-flex items-center text-[#5E5E5E] opacity-0 transition-opacity duration-200 hover:text-[#08090A] group-hover:opacity-100"
                >
                  <PiArrowUpRight className="size-3.5" aria-hidden />
                </a>
              ) : null}
            </div>
            <p className="mt-0.5 truncate text-[0.75rem] sm:text-[0.8125rem] font-normal leading-[1.4] text-[#5E5E5E]">
              {subtitle}
            </p>
          </div>
        </div>

        <span className="shrink-0 text-right text-[0.75rem] sm:text-[0.875rem] font-normal tabular-nums leading-[1.4] text-[#5E5E5E]">
          {period}
        </span>
      </div>

      {hasBullets ? (
        <div
          className={`grid transition-[grid-template-rows,opacity,margin] duration-250 ease-out ${
            open
              ? "mt-2.5 grid-rows-[1fr] opacity-100"
              : "mt-0 grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="overflow-hidden">
            <ul className="ml-[3.625rem] space-y-1.5 border-l border-[#E5E5E5] pl-3.5 text-[0.8125rem] sm:text-[0.875rem] leading-[1.6] text-[#5E5E5E]">
              {bullets?.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      ) : null}
    </div>
  );
}

