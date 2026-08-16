"use client";

import Image from "next/image";
import { useState } from "react";

export function Portrait() {
  const [side, setSide] = useState<"left" | "right" | null>(null);

  const tilt =
    side === "left"
      ? "-translate-x-0.5 -rotate-[7deg]"
      : side === "right"
        ? "translate-x-0.5 rotate-[1deg]"
        : "-rotate-[4deg]";

  return (
    <div
      className="mt-0.5 shrink-0 origin-bottom"
      onPointerMove={(event) => {
        const box = event.currentTarget.getBoundingClientRect();
        setSide(event.clientX < box.left + box.width / 2 ? "left" : "right");
      }}
      onPointerLeave={() => setSide(null)}
    >
      <div
        className={`rounded-[3px] border border-[var(--ink)]/12 bg-white p-[3px] pb-1.5 shadow-[0_1px_4px_rgba(26,26,24,0.08)] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none motion-reduce:transform-none ${tilt}`}
      >
        <Image
          src="/me.jpeg"
          alt="Shivam Katare"
          width={72}
          height={90}
          priority
          className="h-[4.35rem] w-[3.45rem] rounded-[1px] object-cover object-[center_20%] sm:h-[4.75rem] sm:w-[3.75rem]"
        />
      </div>
    </div>
  );
}
