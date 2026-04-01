"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  SiJavascript,
  SiTypescript,
  SiRedux,
  SiNextdotjs,
  SiMaterialdesign,
  SiNodedotjs,
  SiExpress,
  SiTailwindcss,
  SiFirebase,
  SiMongodb,
  SiMysql,
  SiStorybook,
  SiCypress,
  SiJest,
  SiDocker,
  SiGithub,
  SiSupabase,
} from "react-icons/si";
import { FaJava, FaHtml5, FaCss3Alt, FaReact } from "react-icons/fa";
import { RiBearSmileFill } from "react-icons/ri";

const skillCategories = [
  {
    title: "Languages",
    description: "The core vernaculars I use to build robust applications.",
    skills: [
      {
        name: "JavaScript",
        icon: SiJavascript,
        color: "group-hover/skill:text-[#F7DF1E]",
      },
      {
        name: "TypeScript",
        icon: SiTypescript,
        color: "group-hover/skill:text-[#3178C6]",
      },
      { name: "Java", icon: FaJava, color: "group-hover/skill:text-[#007396]" },
      {
        name: "HTML5",
        icon: FaHtml5,
        color: "group-hover/skill:text-[#E34F26]",
      },
      {
        name: "CSS3",
        icon: FaCss3Alt,
        color: "group-hover/skill:text-[#1572B6]",
      },
    ],
  },
  {
    title: "Frameworks & Libraries",
    description: "My primary tools for crafting interactive user interfaces.",
    skills: [
      {
        name: "React",
        icon: FaReact,
        color: "group-hover/skill:text-[#61DAFB]",
      },
      {
        name: "Next.js",
        icon: SiNextdotjs,
        color: "group-hover/skill:text-white",
      },
      {
        name: "Tailwind CSS",
        icon: SiTailwindcss,
        color: "group-hover/skill:text-[#06B6D4]",
      },
      {
        name: "Node.js",
        icon: SiNodedotjs,
        color: "group-hover/skill:text-[#339933]",
      },
      {
        name: "Express",
        icon: SiExpress,
        color: "group-hover/skill:text-white",
      },
      {
        name: "Redux",
        icon: SiRedux,
        color: "group-hover/skill:text-[#764ABC]",
      },
      {
        name: "Zustand",
        icon: RiBearSmileFill,
        color: "group-hover/skill:text-[#ea580c]",
      },
      {
        name: "Material UI",
        icon: SiMaterialdesign,
        color: "group-hover/skill:text-[#0081CB]",
      },
    ],
  },
  {
    title: "Database & Cloud",
    description: "Managing data and serverless architectures safely.",
    skills: [
      {
        name: "Supabase",
        icon: SiSupabase,
        color: "group-hover/skill:text-[#3ECF8E]",
      },
      {
        name: "Firebase",
        icon: SiFirebase,
        color: "group-hover/skill:text-[#FFCA28]",
      },
      {
        name: "MongoDB",
        icon: SiMongodb,
        color: "group-hover/skill:text-[#47A248]",
      },
      {
        name: "MySQL",
        icon: SiMysql,
        color: "group-hover/skill:text-[#4479A1]",
      },
    ],
  },
  {
    title: "Testing & Architecture",
    description: "Ensuring quality, reliability, and seamless deployments.",
    skills: [
      { name: "Jest", icon: SiJest, color: "group-hover/skill:text-[#C21325]" },
      {
        name: "Cypress",
        icon: SiCypress,
        color: "group-hover/skill:text-[#17202C]",
      },
      {
        name: "Storybook",
        icon: SiStorybook,
        color: "group-hover/skill:text-[#FF4785]",
      },
      {
        name: "Docker",
        icon: SiDocker,
        color: "group-hover/skill:text-[#2496ED]",
      },
      { name: "GitHub", icon: SiGithub, color: "group-hover/skill:text-white" },
    ],
  },
];

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  initial: { opacity: 0, y: 10 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
};

function Skills() {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={staggerContainer}
      className="mx-auto flex w-full max-w-4xl flex-col items-stretch mt-12 md:mt-24 px-4 sm:px-6 mb-24"
    >
      <motion.div variants={pageVariants} className="mb-16">
        <h1 className="text-4xl md:text-5xl font-medium tracking-tight text-white mb-6">
          Technical Toolkit
        </h1>
        <p className="text-lg text-zinc-400 font-light leading-relaxed max-w-3xl">
          I enjoy working with various technologies, but JavaScript and
          TypeScript-based frameworks and libraries are my favorites. They offer
          versatility and flexibility, and I&apos;m always discovering new ways
          to use them. Whether I&apos;m building web applications or
          experimenting with new programming techniques, they&apos;re my go-to
          tools.
        </p>
      </motion.div>

      <motion.div
        variants={staggerContainer}
        className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16"
      >
        {skillCategories.map((category, idx) => (
          <motion.div
            key={idx}
            variants={itemVariants}
            className="group relative flex flex-col p-6 md:p-8 rounded-[2rem] bg-[#303030] border border-white/5 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)] transition-all duration-500 hover:border-white/10 hover:bg-white/[0.22]"
          >
            <div className="mb-8">
              <h2 className="text-zinc-100 font-medium text-lg tracking-tight mb-2">
                {category.title}
              </h2>
              <p className="text-zinc-500 text-sm font-light">
                {category.description}
              </p>
            </div>

            <div className="flex flex-wrap gap-2.5 mt-auto">
              {category.skills.map((skill, skillIdx) => {
                const Icon = skill.icon;
                return (
                  <div
                    key={skillIdx}
                    className="group/skill flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-white/5 border border-white/5 hover:border-white/10 hover:bg-white/10 transition-all duration-300 backdrop-blur-sm cursor-default"
                  >
                    <Icon
                      className={`text-base text-zinc-400 transition-colors duration-300 ${skill.color}`}
                    />
                    <span className="text-sm font-medium text-zinc-300 group-hover/skill:text-zinc-100 transition-colors">
                      {skill.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div variants={pageVariants} className="flex justify-start">
        <Link
          href="/work"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black font-medium hover:bg-zinc-200 transition-colors focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-black"
        >
          <span>Check out my Work</span>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.33333 8H12.6667"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M8 3.33334L12.6667 8L8 12.6667"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
      </motion.div>
    </motion.div>
  );
}

export default Skills;
