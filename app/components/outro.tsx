import React from "react";
import Link from "next/link";
import {
  PiGithubLogoThin,
  PiLinkedinLogoThin,
  PiArrowRightThin,
} from "react-icons/pi";
import { FaXTwitter } from "react-icons/fa6";

function Outro() {
  return (
    <div className="w-full flex flex-col items-center text-center space-y-10 py-12">
      <div className="space-y-6">
        <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-white mb-4">
          Let's talk.
        </h2>

        <p className="text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed font-light">
          I help teams and individuals build and ship reliable, high-performance
          interfaces. If you have a project, role, or collaboration in mind, I'm
          always open to discussing new opportunities.
        </p>
      </div>

      <div className="pt-4 flex flex-col items-center gap-12 w-full">
        {/* Button-in-button nested pattern from high-end-visual-design skill */}
        <Link
          href="mailto:katare27451@gmail.com"
          className="group relative inline-flex items-center gap-4 bg-white text-black font-medium px-6 py-2.5 rounded-full transition-all duration-300 hover:scale-[1.02] active:scale-95 shadow-[0_0_40px_rgba(255,255,255,0.1)]"
        >
          <span>Send an Email</span>
          <div className="w-8 h-8 rounded-full bg-black/5 flex items-center justify-center -mr-2 transition-transform duration-300 group-hover:translate-x-1">
            <PiArrowRightThin className="text-xl" />
          </div>
        </Link>
      </div>

      {/* Footer social links */}
      <div className="flex items-center gap-6 text-zinc-500 w-full justify-center border-t border-white/5 pt-12">
        <a
          href="https://x.com/Shivamkatare_27"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition-colors duration-300"
          aria-label="Twitter"
        >
          <FaXTwitter className="text-2xl" />
        </a>
        <a
          href="https://github.com/Shivam-Katare"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition-colors duration-300"
          aria-label="GitHub"
        >
          <PiGithubLogoThin className="text-2xl" />
        </a>
        <a
          href="https://www.linkedin.com/in/shivam-katare/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition-colors duration-300"
          aria-label="LinkedIn"
        >
          <PiLinkedinLogoThin className="text-2xl" />
        </a>
      </div>
    </div>
  );
}

export default Outro;
