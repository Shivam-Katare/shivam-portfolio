"use client";

import {
  FaGithub,
  FaHashnode,
  FaLinkedin,
  FaSquareXTwitter,
} from "react-icons/fa6";
import Link from "next/link";
import { FloatButton } from "antd";
import Project from "./components/project";
import { Container } from "./components/container";
import { MdEmail } from "react-icons/md";
import { SiPeerlist } from "react-icons/si";
import Outro from "./components/outro";
import TypeWriter from "./components/typewriter";
import Highlights from "./components/highlights/highlights";

export default function Page() {
  return (
    <Container className="flex max-w-3xl flex-col items-stretch gap-10">
      <div className="w-full grid justify-items-center gap-y-3 sm:grid-cols-2 sm:justify-self-stretch sm:gap-y-0 sm:justify-items-start">
        <p className="mb-2 text-2xl tracking-tighter font-crimson">{`Hi, I'm Shivam 👋`}</p>
        <div className="grid w-full justify-center sm:justify-end">
          <div className="w-full grid grid-cols-[0.2fr_0.2fr_0.2fr_0.2fr_0.2fr_0.2fr] justify-items-end gap-3">
            <Link href="https://github.com/Shivam-Katare" target="_blank">
              <FaGithub className="text-2xl" />
            </Link>

            <Link href="https://twitter.com/Shivamkatare_27" target="_blank">
              <FaSquareXTwitter className="text-2xl" />
            </Link>

            <Link
              href="https://www.linkedin.com/in/shivam-katare/"
              target="_blank"
            >
              <FaLinkedin className="text-2xl" style={{ color: "blue" }} />
            </Link>

            <Link href="https://hashnode.com/@ShivamKatare" target="_blank">
              <FaHashnode className="text-2xl text-blue-500" />
            </Link>

            <Link href="mailto:katare27451@gmail.com" target="_blank">
              <MdEmail className="text-2xl" style={{ color: "red" }} />
            </Link>

            <Link href="https://peerlist.io/shivamkatare" target="_blank">
              <SiPeerlist className="text-2xl" style={{ color: "green" }} />
            </Link>
          </div>
        </div>
      </div>
      <TypeWriter />
      <p>
        I work with startups and product teams, contribute to open source, build
        GenAI applications and write technical content for developers.
      </p>
      <div className="space-y-6">
        <Highlights />
      </div>

      <h2 className="text-[30px] text-center font-semibold tracking-tighter">
        Selected Work
      </h2>
      <Project />

      <div className="w-full grid place-items-center">
        <Link
          href="https://github.com/Shivam-Katare?tab=repositories"
          target="_blank"
          className="text-sm font-medium text-gray-900 hover:text-gray-600 transition-colors flex items-center gap-1"
        >
          View all projects →
        </Link>
      </div>
      <Outro />
      <FloatButton.BackTop />
    </Container>
  );
}
