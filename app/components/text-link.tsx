import type { ReactNode } from "react";
import Link from "next/link";
import { PiArrowUpRight, PiEnvelopeSimple } from "react-icons/pi";

type TextLinkProps = {
  href: string;
  children: ReactNode;
};

export function TextLink({ href, children }: TextLinkProps) {
  const isMail = href.startsWith("mailto:");
  const Icon = isMail ? PiEnvelopeSimple : PiArrowUpRight;

  return (
    <a
      href={href}
      target={isMail ? undefined : "_blank"}
      rel={isMail ? undefined : "noopener noreferrer"}
      className="text-link cursor-pointer"
    >
      {children}
      <Icon className="text-link-icon" aria-hidden />
    </a>
  );
}

export function PageLink({ href, children }: TextLinkProps) {
  return (
    <Link href={href} className="page-link cursor-pointer">
      {children}
      <PiArrowUpRight className="page-link-icon" aria-hidden />
    </Link>
  );
}
