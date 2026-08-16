"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

type ClickPillProps = {
  x: number;
  y: number;
  visible: boolean;
};

export function ClickPill({ x, y, visible }: ClickPillProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || !visible) return null;

  return createPortal(
    <div
      aria-hidden
      className="pointer-events-none fixed z-[200] rounded-full bg-white px-3 py-1 text-xs font-medium text-[var(--ink)] shadow-[0_1px_6px_rgba(26,26,24,0.12)]"
      style={{ left: x, top: y, transform: "translate(-50%, -50%)" }}
    >
      Click
    </div>,
    document.body,
  );
}
