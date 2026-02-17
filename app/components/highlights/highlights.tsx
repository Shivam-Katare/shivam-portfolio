import React from "react";
import Badge from "../badge";
import Link from "next/link";
import {
  FaTrophy,
  FaUsers,
  FaPenNib,
  FaCode,
  FaStar,
  FaBriefcase,
} from "react-icons/fa";
import TrialliesLogo from "../../../public/triallies.png";

const Highlights = () => {
  return (
    <div className="highlights">
      <h2 className="text-orange-500 text-sm font-bold mb-6 tracking-wider uppercase italic">
        At a Glance
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 bg-orange-50 rounded-lg">
            <FaBriefcase className="text-orange-500 text-lg" />
          </div>
          <div className="flex-1">
            <h3 className="text-gray-900 font-semibold text-base mb-1">
              <span className="text-orange-500 font-bold">Full-time</span>{" "}
              <span className="text-gray-700 font-normal">
                Frontend Engineer
              </span>
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              at{" "}
              <Badge
                icon={TrialliesLogo}
                text="Triallies LLC"
                link="https://triallies.com"
                className="bg-gray-800 text-white transition-colors"
              />{" "}
            </p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 bg-orange-50 rounded-lg">
            <FaTrophy className="text-orange-500 text-lg" />
          </div>
          <div className="flex-1">
            <h3 className="text-gray-900 font-semibold text-base mb-1">
              <span className="text-orange-500 font-bold">3×</span>{" "}
              <span className="text-gray-700 font-normal">
                Hackathon Winner
              </span>
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Recent:{" "}
              <Link
                href="https://hellotria.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold border-b border-orange-300 hover:border-orange-600 transition-colors"
              >
                Tria
              </Link>{" "}
              ($4,000 prize) at{" "}
              <Link
                href="https://x.com/WeMakeDevs/status/2015416867628986601?s=20"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold border-b border-orange-300 hover:border-orange-600 transition-colors"
              >
                WeMakeDevs
              </Link>
            </p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 bg-orange-50 rounded-lg">
            <FaUsers className="text-orange-500 text-lg" />
          </div>
          <div className="flex-1">
            <h3 className="text-gray-900 font-semibold text-base mb-1">
              <span className="text-orange-500 font-bold">3</span>{" "}
              <span className="text-gray-700 font-normal">Tech Talks</span>
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Talks on frontend engineering and developer education
            </p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 bg-orange-50 rounded-lg">
            <FaPenNib className="text-orange-500 text-lg" />
          </div>
          <div className="flex-1">
            <h3 className="text-gray-900 font-semibold text-base mb-1">
              <span className="text-orange-500 font-bold">60+</span>{" "}
              <span className="text-gray-700 font-normal">Technical Blogs</span>
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Frontend, dev tools & AI engineering
            </p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 bg-orange-50 rounded-lg">
            <FaStar className="text-orange-500 text-lg" />
          </div>
          <div className="flex-1">
            <h3 className="text-gray-900 font-semibold text-base mb-1">
              <span className="text-orange-500 font-bold">Featured</span>{" "}
              <span className="text-gray-700 font-normal">Publications</span>
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Articles featured on{" "}
              <Link
                href="https://x.com/Shivamkatare_27/status/1566124327979732992"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold border-b border-orange-300 hover:border-orange-600 transition-colors"
              >
                Testkube
              </Link>
              ,{" "}
              <Link
                href="https://x.com/Shivamkatare_27/status/1599205262690496512/photo/1"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold border-b border-orange-300 hover:border-orange-600 transition-colors"
              >
                Fueler
              </Link>{" "}
              & community platforms
            </p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 bg-orange-50 rounded-lg">
            <FaCode className="text-orange-500 text-lg" />
          </div>
          <div className="flex-1">
            <h3 className="text-gray-900 font-semibold text-base mb-1">
              <span className="text-orange-500 font-bold">Active</span>{" "}
              <span className="text-gray-700 font-normal">Open Source</span>
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Winner of{" "}
              <Link
                href="https://www.linkedin.com/posts/shivam-katare_gdsaugust-activity-6975327385663549440-TaMM?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAACyvvqABVlGw9JGygcIt3dnWAcqY3flqPfU"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold border-b border-orange-300 hover:border-orange-600 transition-colors"
              >
                GDSC Showcase
              </Link>{" "}
              &{" "}
              <Link
                href="https://www.linkedin.com/posts/shivam-katare_2playsamonth-activity-7041829572752941058-SZ1c?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAACyvvqABVlGw9JGygcIt3dnWAcqY3flqPfU"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold border-b border-orange-300 hover:border-orange-600 transition-colors"
              >
                React2Play Hackathon
              </Link>{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Highlights;
