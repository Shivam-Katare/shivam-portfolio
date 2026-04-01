"use client";

import { motion } from "framer-motion";
import {
  PiGithubLogoThin,
  PiLinkedinLogoThin,
  PiEnvelopeThin,
} from "react-icons/pi";
import { SiPeerlist } from "react-icons/si";
import Link from "next/link";
import Project from "./components/project";
import Outro from "./components/outro";
import TypeWriter from "./components/typewriter";
import Highlights from "./components/highlights/highlights";
import { FaXTwitter } from "react-icons/fa6";
import { FaDev } from "react-icons/fa";

export default function Page() {
  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, filter: "blur(8px)" },
    show: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { type: "spring", stiffness: 80, damping: 20 },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className="flex flex-col gap-24 w-full"
    >
      {/* Hero Section - Asymmetrical Split / Glass Vibe */}
      <motion.section
        variants={itemVariants}
        className="w-full flex flex-col md:flex-row gap-12 md:items-end justify-between min-h-[40vh] pt-12"
      >
        <div className="flex flex-col gap-6 max-w-2xl">
          <div className="inline-flex items-center gap-3">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
            </span>
            <span className="text-xs uppercase tracking-[0.2em] text-zinc-400 font-medium">
              Available for new opportunities
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-semibold tracking-tighter leading-[1.1] text-zinc-100">
            Shivam Katare.
          </h1>
          <TypeWriter />
          <p className="text-lg md:text-xl text-zinc-400 leading-relaxed max-w-[65ch] font-light">
            I build interfaces that feel fast and make sense{" "}
            <span className="text-zinc-200 font-medium">
              when you use them.
            </span>{" "}
            I build AI-driven applications, write technical content for
            engineering teams & Focus on{" "}
            <span className="text-zinc-200 font-medium">haptic depth</span>.
          </p>
        </div>

        {/* Floating Social Island */}
        <div className="flex gap-4 p-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md w-fit">
          {[
            {
              href: "https://github.com/Shivam-Katare",
              icon: PiGithubLogoThin,
            },
            {
              href: "https://x.com/Shivamkatare_27",
              icon: FaXTwitter,
            },
            {
              href: "https://www.linkedin.com/in/shivam-katare/",
              icon: PiLinkedinLogoThin,
            },
            {
              href: "https://www.dev.to/shivamkatare",
              icon: FaDev,
            },
            { href: "mailto:katare27451@gmail.com", icon: PiEnvelopeThin },
          ].map((social, idx) => (
            <Link
              key={idx}
              href={social.href}
              target="_blank"
              className="p-3 rounded-full hover:bg-white/10 transition-colors group relative overflow-hidden"
            >
              <social.icon className="text-2xl text-zinc-400 group-hover:text-white transition-colors group-active:scale-95 duration-300" />
            </Link>
          ))}
          <Link
            href="https://peerlist.io/shivamkatare"
            target="_blank"
            className="p-3 rounded-full hover:bg-white/10 transition-colors group relative overflow-hidden"
          >
            <SiPeerlist className="text-xl text-zinc-400 group-hover:text-[#00BA70] transition-colors group-active:scale-95 duration-300 m-[2px]" />
          </Link>
        </div>
      </motion.section>

      {/* Highlights - Bento Style */}
      <section className="w-full">
        <Highlights />
      </section>

      {/* Selected Work */}
      <section className="w-full flex flex-col gap-12">
        <div className="flex w-full items-end justify-between border-b border-white/10 pb-6">
          <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-zinc-100">
            Selected Work.
          </h2>
          <Link
            href="https://github.com/Shivam-Katare?tab=repositories"
            target="_blank"
            className="text-sm uppercase tracking-widest text-zinc-500 hover:text-zinc-200 transition-colors pb-1 border-b border-transparent hover:border-zinc-200"
          >
            View Archive
          </Link>
        </div>
        <Project />
      </section>

      <section className="w-full">
        <Outro />
      </section>
    </motion.div>
  );
}
