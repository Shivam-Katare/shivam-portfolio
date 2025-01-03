"use client";

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FaExternalLinkSquareAlt } from 'react-icons/fa';

const navItems = {
  '/': {
    name: 'Home',
    newTab: false
  },
  '/skills': {
    name: 'Skills',
    newTab: false
  },
  '/work': {
    name: 'Work',
    newTab: false
  },
  '/contact-me': {
    name: 'Contact me',
    newTab: false
  },
  'https://shivamkatareblog.vercel.app/': {
    name: 'Blog',
    newTab: true,
  }
}

export function Navbar() {
  const pathname = usePathname();
  return (
    <aside className="-ml-[8px] tracking-tight">
      <div className="lg:sticky lg:top-20">
        <nav
          className="flex flex-row items-start relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
          id="nav"
        >
          <div className="flex flex-row space-x-0 pr-10">
            {Object.entries(navItems).map(([path, { name, newTab }]) => {
              const isActive = pathname === path;
              return (
                <Link
                  key={path}
                  href={path}
                  className={`transition-all hover:text-neutral-400 flex align-middle relative py-1 px-2 m-1 ${isActive ? 'text-blue-500 font-bold' : ''}`}
                  prefetch={true}
                  target={newTab ? '_blank' : '_self'}
                >
                  {name}
                  {path === 'https://shivamkatareblog.vercel.app/' && (
                    <FaExternalLinkSquareAlt className="ml-1 h-4 w-4" />
                  )}
                </Link>
              )
            })}
          </div>
        </nav>
      </div>
    </aside>
  )
}