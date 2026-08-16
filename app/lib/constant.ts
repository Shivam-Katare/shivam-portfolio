import { FaDev } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import {
  PiCpuFill,
  PiGithubLogo,
  PiLinkedinLogo,
  PiMicrophoneFill,
  PiPencilSimpleFill,
  PiTrophyFill,
} from "react-icons/pi";
import type { IconType } from "react-icons";

type ProofItem = {
  value: string;
  label: string;
  icon: IconType;
  href?: string;
};

export const socials = [
    {
      href: "https://github.com/Shivam-Katare",
      label: "GitHub",
      icon: PiGithubLogo,
    },
    {
      href: "https://www.linkedin.com/in/shivam-katare/",
      label: "LinkedIn",
      icon: PiLinkedinLogo,
    },
    {
      href: "https://x.com/Shivamkatare_27",
      label: "X",
      icon: FaXTwitter,
    },
    {
      href: "https://dev.to/shivamkatare",
      label: "DEV",
      icon: FaDev,
    },
  ] as const;

 export  const proof: readonly ProofItem[] = [
    {
      value: "12",
      label: "AI projects delivered",
      icon: PiCpuFill,
    },
    {
      value: "4",
      label: "hackathon wins",
      icon: PiTrophyFill,
    },
    {
      value: "70+",
      label: "technical pieces written for 10+ software companies",
      icon: PiPencilSimpleFill,
    },
    {
      value: "3",
      label: "technical talks given",
      icon: PiMicrophoneFill,
      href: "/highlights#talks",
    },
  ];
