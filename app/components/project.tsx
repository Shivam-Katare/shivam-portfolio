import React from "react";
import Image from "next/image";
import { PiArrowUpRightThin, PiGithubLogoThin } from "react-icons/pi";

type Project = {
  id: number;
  title: string;
  description: string;
  meta: React.ReactNode;
  image: string;
  viewUrl: string;
  sourceUrl: string;
  ribbonText?: string;
  ribbonSubtext?: string;
};

export default function Project() {
  const projects: Project[] = [
    {
      id: 1,
      title: "Tria",
      description:
        "AI-powered email intelligence tool that sorts, summarizes, and prioritizes Gmail using AI agents and workflows. 2nd place finish.",
      meta: "500+ project submissions",
      image: "/tria.png",
      viewUrl: "https://hellotria.vercel.app/",
      sourceUrl: "https://github.com/Shivam-Katare/tria",
      ribbonText: "Hackathon Winner · $4k Prize",
    },
    {
      id: 2,
      title: "Re-Card",
      description:
        "Generate and customize shareable profile cards for Hashnode bloggers to showcase their tech identity.",
      meta: <>Community-driven · Loved by Hashnode</>,
      image: "/recard.png",
      viewUrl: "https://re-card.vercel.app",
      sourceUrl: "https://github.com/Shivam-Katare/re-card",
      ribbonText: "Featured",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full mt-8">
      {projects.map((project) => (
        <article
          key={project.id}
          className="group relative flex flex-col overflow-hidden rounded-[2.5rem] bg-[#303030] border border-white/5 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:border-white/15 hover:shadow-[0_0_50px_rgba(255,255,255,0.03)]"
        >
          {/* Inner glass reflection */}
          <div className="absolute inset-0 rounded-[2.5rem] border border-white/[0.02] shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] pointer-events-none" />

          {/* Project Image */}
          <div className="relative w-full h-[280px] overflow-hidden border-b border-white/5 bg-zinc-900/50 p-6 flex flex-col items-center justify-end">
            {/* Subtle Gradient Bloom */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/[0.02] to-transparent z-0" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#303030] to-transparent z-10 opacity-90" />

            <div className="relative w-full h-[120%] mt-8 rounded-t-xl overflow-hidden shadow-2xl border border-white/10 transform transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-4 group-hover:scale-105 z-20">
              <Image
                src={project.image}
                alt={`${project.title} screenshot`}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover object-top"
                priority
              />
            </div>

            {project.ribbonText && (
              <div className="absolute top-6 right-6 z-30 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-xl border border-white/10 text-[10px] uppercase tracking-[0.15em] text-white/90 font-medium">
                {project.ribbonText}
              </div>
            )}
          </div>

          <div className="flex flex-col flex-1 p-8 relative z-20">
            <h3 className="text-2xl font-medium tracking-tight text-white mb-3">
              {project.title}
            </h3>

            <p className="text-zinc-400 leading-relaxed text-sm mb-6 font-light">
              {project.description}
            </p>

            <div className="flex items-end justify-between mt-auto">
              <p className="text-xs uppercase tracking-widest text-zinc-500 font-medium max-w-[60%]">
                {project.meta}
              </p>

              <div className="flex gap-2">
                <a
                  href={project.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full flex items-center justify-center bg-white/5 border border-white/10 text-zinc-400 hover:text-white hover:border-white/30 hover:bg-white/10 transition-all duration-300 hover:-translate-y-0.5 active:scale-95"
                  aria-label="Source Code"
                >
                  <PiGithubLogoThin className="text-xl" />
                </a>
                <a
                  href={project.viewUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full flex items-center justify-center bg-white text-black hover:bg-zinc-200 transition-all duration-300 hover:-translate-y-0.5 active:scale-95"
                  aria-label="Live Demo"
                >
                  <PiArrowUpRightThin className="text-xl" />
                </a>
              </div>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
