import React from "react";
import Image from "next/image";
import Link from "next/link";

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

function Project() {
  const projects: Project[] = [
    {
      id: 1,
      title: "Tria",
      description:
        "AI-powered email intelligence tool that sorts, summarizes, and prioritizes Gmail using AI agents and workflows.",
      meta: "🥈 2nd place · 500+ project submissions",
      image: "/tria.png",
      viewUrl: "https://hellotria.vercel.app/",
      sourceUrl: "https://github.com/Shivam-Katare/tria",
      ribbonText: "Hackathon Winner",
      ribbonSubtext: "$4,000 Prize",
    },
    {
      id: 2,
      title: "Re-Card",
      description:
        "Generate and customize shareable profile cards for Hashnode bloggers to showcase their tech identity.",
      meta: (
        <>
          Community-driven tool · Loved by
          {" "}
          <Link
            href="https://x.com/Shivamkatare_27/status/1769266304475611342"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-gray-900 underline"
          >
            Hashnode Team Members & Community
          </Link>
        </>
      ),
      image: "/recard.png",
      viewUrl: "https://re-card.vercel.app",
      sourceUrl: "https://github.com/Shivam-Katare/re-card",
      ribbonText: "Loved by Hashnode",
    },
  ];

  return (
    <section className="w-full">
      <style jsx>{`
        @keyframes shimmer {
          0% {
            background-position: -1000px 0;
          }
          100% {
            background-position: 1000px 0;
          }
        }

        .shimmer-effect::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            rgba(255, 255, 255, 0) 0%,
            rgba(255, 255, 255, 0.3) 50%,
            rgba(255, 255, 255, 0) 100%
          );
          background-size: 1000px 100%;
          animation: shimmer 3s infinite;
          pointer-events: none;
          z-index: 1;
        }
      `}</style>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <article
            key={project.id}
            className={`group relative bg-gradient-to-br from-white via-gray-50 to-gray-100 rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:scale-[1.02] ${
              index === 2 ? "md:col-span-2 md:max-w-2xl md:mx-auto" : ""
            } ${
              project.id === 1
                ? "shadow-xl border-2 border-amber-200/50"
                : "shadow-lg border border-gray-200/60"
            }`}
          >
            {/* Premium corner ribbon - wraps around top corner */}
            {project.ribbonText && (
              <div className="absolute top-0 right-0 z-20 pointer-events-none">
                {/* Main ribbon part */}
                <div
                  className={`relative ${
                    project.id === 1
                      ? "bg-gradient-to-br from-amber-500 to-amber-600"
                      : "bg-gradient-to-br from-purple-600 to-purple-700"
                  } text-white px-6 py-2 shadow-xl`}
                  style={{
                    clipPath: "polygon(0 0, 100% 0, 100% 100%, 15% 100%)",
                  }}
                >
                  <div className="flex flex-col items-start pr-2">
                    <span className="font-bold text-xs leading-tight drop-shadow-md whitespace-nowrap">
                      {project.ribbonText}
                    </span>
                    {project.ribbonSubtext && (
                      <span className="font-extrabold text-[11px] leading-tight drop-shadow-md whitespace-nowrap">
                        {project.ribbonSubtext}
                      </span>
                    )}
                  </div>
                </div>

                {/* Folded part shadow */}
                <div
                  className={`absolute top-0 right-0 w-0 h-0 ${
                    project.id === 1
                      ? "border-t-[45px] border-t-amber-800/60 border-l-[45px] border-l-transparent"
                      : "border-t-[45px] border-t-purple-900/60 border-l-[45px] border-l-transparent"
                  }`}
                  style={{
                    transform: "translateY(0)",
                    filter: "blur(2px)",
                  }}
                />
              </div>
            )}

            {/* Image Container with Shimmer */}
            <div
              className={`relative w-full h-56 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden ${
                project.id === 1 ? "shimmer-effect" : ""
              }`}
            >
              <Image
                src={project.image}
                alt={`${project.title} screenshot`}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                priority
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>

            {/* Content */}
            <div className="relative p-6 bg-white">
              {/* Title */}
              <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-gray-700 leading-relaxed mb-3 text-sm">
                {project.description}
              </p>

              {/* Meta */}
              <p className="text-xs text-gray-500 mb-5 font-medium">
                {project.meta}
              </p>

              {/* Links with premium styling */}
              <div className="flex gap-6 items-center">
                <a
                  href={project.viewUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative text-sm font-semibold text-gray-900 hover:text-gray-600 transition-colors after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-gray-900 after:left-0 after:bottom-0 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
                >
                  View Project →
                </a>
                <a
                  href={project.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative text-sm font-semibold text-gray-700 hover:text-gray-900 transition-colors after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-gray-700 after:left-0 after:bottom-0 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
                >
                  Source Code →
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Project;
