import React from "react";
import Badge from "../badge";
import Link from "next/link";
import {
  PiTrophyThin,
  PiUsersThin,
  PiPenNibThin,
  PiCodeThin,
  PiStarThin,
  PiBriefcaseThin,
} from "react-icons/pi";
import TrialliesLogo from "../../../public/triallies.png";

const HighlightCard = ({
  icon: Icon,
  title,
  highlight,
  description,
  children,
}: any) => (
  <div className="flex flex-col p-6 rounded-[2.5rem] bg-[#303030] border border-white/5 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)] hover:border-white/10 hover:bg-white/[0.02] transition-colors duration-500 min-h-[160px] group">
    <div className="flex items-start justify-between w-full mb-4">
      <div className="flex items-center justify-center p-3 rounded-full bg-white/5 group-hover:bg-white/10 transition-colors duration-500">
        <Icon className="text-2xl text-zinc-300" />
      </div>
      <div className="text-xs uppercase tracking-widest text-zinc-300 font-medium whitespace-nowrap">
        {highlight}
      </div>
    </div>
    <div className="mt-auto">
      <h3 className="text-zinc-100 font-medium text-lg mb-1 tracking-tight">
        {title}
      </h3>
      <div className="text-zinc-400 text-sm leading-relaxed font-light">
        {description}
        {children}
      </div>
    </div>
  </div>
);

const Highlights = () => {
  return (
    <div className="w-full mt-10">
      <div className="flex items-center gap-4 mb-8">
        <div className="h-px bg-white/10 flex-1" />
        <h2 className="text-zinc-500 text-xs font-semibold tracking-[0.2em] uppercase">
          At a Glance
        </h2>
        <div className="h-px bg-white/10 flex-1" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <HighlightCard
          icon={PiBriefcaseThin}
          highlight="Full-Time"
          title="Frontend Engineer"
          description="at "
        >
          <span className="inline-flex mt-1">
            <Badge
              icon={TrialliesLogo}
              text="Triallies LLC"
              link="https://triallies.com"
              className="bg-white/10 border border-white/10 text-white hover:bg-white/20 transition-all font-medium py-1 px-2 !rounded-md"
            />
          </span>
        </HighlightCard>

        <HighlightCard
          icon={PiTrophyThin}
          highlight="3x Winner"
          title="Hackathon"
          description="Recent: "
        >
          <Link
            href="https://hellotria.vercel.app/"
            target="_blank"
            className="text-zinc-200 border-b border-white/20 hover:border-white transition-colors"
          >
            Tria
          </Link>{" "}
          ($4k) at{" "}
          <Link
            href="https://x.com/WeMakeDevs/status/2015416867628986601?s=20"
            target="_blank"
            className="text-zinc-200 border-b border-white/20 hover:border-white transition-colors"
          >
            WeMakeDevs
          </Link>
        </HighlightCard>

        <HighlightCard
          icon={PiPenNibThin}
          highlight="60+ Articles"
          title="Technical Writer"
        >
          Covering advanced frontend patterns, dev tools, and GenAI engineering.
        </HighlightCard>

        <HighlightCard
          icon={PiStarThin}
          highlight="Featured"
          title="Publications"
          description="Featured on "
        >
          <Link
            href="https://x.com/Shivamkatare_27/status/1566124327979732992"
            target="_blank"
            className="text-zinc-200 border-b border-white/20 hover:border-white transition-colors"
          >
            Testkube
          </Link>
          {", "}
          <Link
            href="https://x.com/Shivamkatare_27/status/1599205262690496512/photo/1"
            target="_blank"
            className="text-zinc-200 border-b border-white/20 hover:border-white transition-colors"
          >
            Fueler
          </Link>{" "}
          & leading tech communities.
        </HighlightCard>

        <HighlightCard
          icon={PiCodeThin}
          highlight="Active"
          title="Open Source"
          description="Recognized by "
        >
          <Link
            href="https://www.linkedin.com/posts/shivam-katare_gdsaugust-activity-6975327385663549440-TaMM"
            target="_blank"
            className="text-zinc-200 border-b border-white/20 hover:border-white transition-colors"
          >
            GDSC
          </Link>{" "}
          &{" "}
          <Link
            href="https://www.linkedin.com/posts/shivam-katare_2playsamonth-activity-7041829572752941058-SZ1c"
            target="_blank"
            className="text-zinc-200 border-b border-white/20 hover:border-white transition-colors"
          >
            React2Play
          </Link>
          .
        </HighlightCard>

        <HighlightCard
          icon={PiUsersThin}
          highlight="3 Talks"
          title="Tech Speaker"
        >
          Presenting insights on frontend software architecture and open source
          contribution.
        </HighlightCard>
      </div>
    </div>
  );
};

export default Highlights;
