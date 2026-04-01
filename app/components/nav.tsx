"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { RxExternalLink } from "react-icons/rx";

const navItems = {
  "/": {
    name: "Home",
    newTab: false,
  },
  "/skills": {
    name: "Skills",
    newTab: false,
  },
  "/work": {
    name: "Work",
    newTab: false,
  },
  "/contact-me": {
    name: "Contact",
    newTab: false,
  }
};

export function Navbar() {
  const pathname = usePathname();
  return (
    <div className="fixed top-6 z-[100] left-1/2 -translate-x-1/2 pointer-events-none">
      <nav
        className="pointer-events-auto flex items-center gap-1 p-1.5 rounded-full bg-black/40 backdrop-blur-xl border border-white/10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] transition-all duration-500 hover:border-white/20"
        id="nav"
      >
        {Object.entries(navItems).map(([path, { name, newTab }]) => {
          const isActive = pathname === path;
          return (
            <Link
              key={path}
              href={path}
              className={`relative flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                isActive
                  ? "text-white bg-white/10"
                  : "text-zinc-400 hover:text-white hover:bg-white/5"
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
