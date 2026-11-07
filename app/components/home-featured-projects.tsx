import Image from "next/image";
import { PiArrowUpRight, PiGithubLogo } from "react-icons/pi";

const featuredProjects = [
  {
    name: "Koro",
    tagline: "AI Assistant for Local Retailers",
    image: "/koro.png",
    description:
      "Voice and chat assistant that lets shopkeepers check prices, update shelf locations, track stock, and log sales in Hindi, Hinglish, or English.",
    live: "https://koroo.vercel.app/",
    github: "https://github.com/shivam-Katare/koro",
  },
  {
    name: "Tria",
    tagline: "AI Email Intelligence Agent · $4,000 Prize",
    image: "/tria.png",
    description:
      "Autonomous Gmail agent that classifies, summarizes, and prioritizes high-volume inboxes so critical threads never get buried.",
    live: "https://hellotria.vercel.app/",
    github: "https://github.com/Shivam-Katare/tria",
  },
] as const;

export function HomeFeaturedProjects() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      {featuredProjects.map(
        ({ name, tagline, image, description, live, github }) => (
          <article
            key={name}
            className="group flex flex-col overflow-hidden rounded-[12px] border border-[#E5E5E5] bg-white transition-colors duration-200 hover:border-[#08090A]/25"
          >
            <a
              href={live}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open ${name} live preview`}
              className="relative aspect-[16/9] w-full overflow-hidden border-b border-[#E5E5E5] bg-[#F4F3EF] focus:outline-none"
            >
              <Image
                src={image}
                alt={`${name} preview`}
                fill
                sizes="(max-width: 640px) 100vw, 310px"
                className="object-cover object-top transition-transform duration-300 ease-out group-hover:scale-[1.02]"
              />
            </a>

            <div className="flex flex-1 flex-col justify-between p-4">
              <div>
                <div className="flex items-start justify-between gap-2">
                  <div className="min-w-0">
                    <h3 className="text-[0.95rem] font-bold tracking-[-0.015em] leading-[1.3] text-[#08090A]">
                      <a
                        href={live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 decoration-[#D4D4D4] underline-offset-4 hover:underline hover:decoration-[#08090A]"
                      >
                        {name}
                      </a>
                    </h3>
                    <p className="mt-0.5 text-[0.75rem] font-normal text-[#5E5E5E]">
                      {tagline}
                    </p>
                  </div>

                  <div className="flex shrink-0 items-center gap-1">
                    <a
                      href={github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${name} GitHub repository`}
                      className="inline-flex size-7 items-center justify-center rounded-[6px] border border-[#E5E5E5] bg-[#F8F8F6] text-[#5E5E5E] transition-colors hover:border-[#08090A]/25 hover:text-[#08090A]"
                    >
                      <PiGithubLogo className="size-3.5" aria-hidden />
                    </a>
                    <a
                      href={live}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${name} live site`}
                      className="inline-flex size-7 items-center justify-center rounded-[6px] border border-[#E5E5E5] bg-[#F8F8F6] text-[#5E5E5E] transition-colors hover:border-[#08090A]/25 hover:text-[#08090A]"
                    >
                      <PiArrowUpRight className="size-3.5" aria-hidden />
                    </a>
                  </div>
                </div>

                <p className="mt-2.5 text-[0.8125rem] font-normal leading-[1.6] text-[#5E5E5E]">
                  {description}
                </p>
              </div>
            </div>
          </article>
        ),
      )}
    </div>
  );
}
