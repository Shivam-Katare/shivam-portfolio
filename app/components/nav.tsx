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
    <div className="pointer-events-none fixed top-6 left-1/2 z-[100] -translate-x-1/2">
      <nav
        className="pointer-events-auto flex items-center gap-1 rounded-full border border-[#E5E5E5] bg-[var(--paper)]/85 p-1.5 backdrop-blur-xl shadow-[0_2px_12px_rgba(8,9,10,0.04)]"
        id="nav"
      >
        {Object.entries(navItems).map(([path, { name, newTab }]) => {
          const isActive =
            path === "/" ? pathname === "/" : pathname?.startsWith(path);
          return (
            <Link
              key={path}
              href={path}
              className={`relative flex items-center gap-1.5 rounded-full px-3 sm:px-4 py-1.5 text-[13px] sm:text-[14px] font-medium transition-colors duration-200 ${
                isActive
                  ? "bg-[#08090A]/[0.07] text-[#08090A]"
                  : "text-[#5E5E5E] hover:bg-[#08090A]/[0.04] hover:text-[#08090A]"
              }`}
              prefetch={true}
              target={newTab ? "_blank" : "_self"}
            >
              {name}
              {path === "https://shivamkatareblog.vercel.app/" && (
                <RxExternalLink className="h-3.5 w-3.5 opacity-70" />
              )}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
