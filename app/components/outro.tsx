import React from "react";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaSquareXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

function Outro() {
  return (
    <div className="w-full text-center space-y-6">
      <h2 className="text-3xl font-bold">Let's work together</h2>

      <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
        I help teams and individuals build and ship reliable frontend products.
        If you have a project, role, or collaboration in mind, let's talk.
      </p>

      <div className="pt-2">
        <Link
          href="mailto:katare27451@gmail.com"
          className="inline-block bg-orange-500 text-white font-medium px-6 py-3 rounded-lg hover:bg-orange-600 transition-colors"
        >
          Mail me →
        </Link>
      </div>

      <div className="flex justify-center items-center gap-6 pt-4">
        <a
          href="https://twitter.com/Shivamkatare_27"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-black transition-colors text-xl"
          aria-label="Twitter"
        >
          <FaSquareXTwitter />
        </a>
        <a
          href="https://github.com/Shivam-Katare"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-black transition-colors text-xl"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/shivam-katare/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-black transition-colors text-xl"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>
      </div>
    </div>
  );
}

export default Outro;
