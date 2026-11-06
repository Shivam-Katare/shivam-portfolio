import Link from "next/link";
import { socials } from "app/lib/constant";

export function Footer() {
  return (
    <footer className="mx-auto w-full max-w-[640px] pb-14">
      <div className="flex flex-col gap-4 border-t border-[#E5E5E5] pt-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-[0.8125rem] font-normal leading-none text-[#5E5E5E]">
          &copy; {new Date().getFullYear()} Shivam Katare
        </p>

        <ul
          className="flex items-center gap-4"
          aria-label="Social links"
        >
          {socials.map(({ href, label, icon: Icon }) => (
            <li key={label}>
              <Link
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="inline-flex items-center text-[#5E5E5E] transition-colors duration-200 hover:text-[#08090A]"
              >
                <Icon className="size-[18px]" aria-hidden />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}

