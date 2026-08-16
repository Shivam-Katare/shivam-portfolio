"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { RxExternalLink } from "react-icons/rx";

const navItems = {
  "/": {
    name: "Home",
    newTab: false,
  },
  "/work": {
    name: "Work",
    newTab: false,
  },
  "/highlights": {
    name: "Highlights",
    newTab: false,
  },
  "/contact-me": {
    name: "Contact",
    newTab: false,
  },
};

export function Navbar() {
  const pathname = usePathname();
  return (
    <div className="fixed top-6 z-[100] left-1/2 -translate-x-1/2 pointer-events-none">
      <nav
        className="pointer-events-auto flex items-center gap-1 p-1.5 rounded-full bg-[var(--paper)]/80 backdrop-blur-xl border border-[var(--ink)]/10 shadow-[0_1px_0_rgba(26,26,24,0.03)]"
        id="nav"
      >
        {Object.entries(navItems).map(([path, { name, newTab }]) => {
          const isActive = pathname === path;
          return (
            <Link
              key={path}
              href={path}
              className={`relative flex items-center gap-1.5 px-2.5 sm:px-4 py-2 rounded-full text-[13px] sm:text-sm font-medium transition-colors duration-200 ${
                isActive
                  ? "text-[var(--ink)] bg-[var(--ink)]/[0.06]"
                  : "text-[var(--ink-muted)] hover:text-[var(--ink)] hover:bg-[var(--ink)]/[0.04]"
              }`}
              prefetch={true}
              target={newTab ? "_blank" : "_self"}
            >
              {name}
              {path === "https://shivamkatareblog.vercel.app/" && (
                <RxExternalLink className="w-3.5 h-3.5 opacity-70" />
              )}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
