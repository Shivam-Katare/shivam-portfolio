import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";

const Stats = () => {
  const [showDetails, setShowDetails] = useState<number | null>(null);
  const [showHackathonCard, setShowHackathonCard] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const stats = [
    {
      number: "13+",
      label: "clients",
      subtitle: "Worldwide across various industries",
      details: [
        { type: "Startups", count: 6 },
        { type: "Communities", count: 5 },
        { type: "Agencies", count: 2 },
      ],
    },
    {
      number: "3",
      label: "tech talks",
      subtitle: "Conducted at various developer events",
      details: [
        { type: "Remote", count: 2 },
        { type: "In-Person", count: 1 },
      ],
    },
    {
      number: "60+",
      label: "blogs",
      subtitle: "Technical articles on web development",
    },
    {
      number: "3×",
      label: "hackathon winner",
      subtitle: "Top submissions among 500+ projects",
      isInteractive: true,
    },
  ];

  const linkedInUrl =
    "https://www.linkedin.com/posts/shivam-katare_ai-hackathon-aiagents-activity-7290281886073401344-IUIE";

  // Close card when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (cardRef.current && !cardRef.current.contains(event.target as Node)) {
        setShowHackathonCard(false);
        setShowConfirmation(false);
      }
    };

    if (showHackathonCard) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showHackathonCard]);

  const handleCardClick = () => {
    setShowConfirmation(true);
  };

  const handleOpen = () => {
    window.open(linkedInUrl, "_blank");
    setShowConfirmation(false);
    setShowHackathonCard(false);
  };

  const handleCancel = () => {
    setShowConfirmation(false);
  };

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 my-8">
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="text-center relative"
          onMouseEnter={() => {
            if (stat.isInteractive) {
              setShowHackathonCard(true);
            } else if (stat.details) {
              setShowDetails(index);
            }
          }}
          onMouseLeave={() => {
            if (stat.isInteractive) {
              setShowHackathonCard(false);
            } else if (stat.details) {
              setShowDetails(null);
            }
          }}
          onClick={() => stat.isInteractive && setShowHackathonCard(true)}
        >
          <motion.div
            className="text-3xl sm:text-4xl font-bold mb-1"
            whileHover={!stat.isInteractive ? { scale: 1.1 } : {}}
            transition={{ type: "spring", stiffness: 400 }}
          >
            {stat.number}
          </motion.div>
          <div className="text-sm text-gray-600">{stat.label}</div>
          {stat.subtitle && (
            <div className="text-xs text-gray-500 mt-1 italic">
              {stat.subtitle}
            </div>
          )}

          {/* Details for non-interactive stats */}
          {stat.details && (
            <AnimatePresence>
              {showDetails === index && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full left-1/2 transform -translate-x-1/2 bg-white rounded-lg shadow-md px-4 py-2 z-10 w-fit mt-2 whitespace-nowrap"
                >
                  <ul className="space-y-1">
                    {stat.details.map((detail, i) => (
                      <li
                        key={i}
                        className="flex justify-between items-center gap-3 text-sm"
                      >
                        <span className="text-gray-700">{detail.type}:</span>
                        <span className="font-bold">{detail.count}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          )}

          {/* Hackathon Card */}
          {stat.isInteractive && (
            <AnimatePresence>
              {showHackathonCard && (
                <motion.div
                  ref={cardRef}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 bg-white rounded-lg shadow-lg z-50 w-[280px] sm:w-[320px] overflow-hidden"
                  onClick={handleCardClick}
                >
                  <div className="cursor-pointer">
                    {/* Image */}
                    <div className="relative w-full h-40 bg-gray-100">
                      <Image
                        src="/hackathon.png"
                        alt="Tria - AI Email Intelligence Tool"
                        fill
                        className="object-cover"
                      />
                    </div>

                    {/* Content */}
                    <div className="p-4">
                      <h3 className="text-sm font-semibold mb-2">
                        🥈 2nd Place — AI Agents Assemble 2025
                      </h3>
                      <p className="text-xs text-gray-700 mb-3 leading-relaxed">
                        Built <span className="italic">Tria</span>, an
                        AI-powered email intelligence tool that sorts,
                        summarizes, and prioritizes Gmail using AI agents and
                        workflows.
                      </p>
                      <div className="text-xs text-gray-500">
                        $4,000 prize · 500+ project submissions
                      </div>
                    </div>

                    {/* Confirmation */}
                    <AnimatePresence>
                      {showConfirmation && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="absolute inset-0 bg-white bg-opacity-95 flex flex-col items-center justify-center p-4"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <p className="text-sm font-medium mb-4">
                            Open LinkedIn post?
                          </p>
                          <div className="flex gap-3">
                            <button
                              onClick={handleOpen}
                              className="px-4 py-2 bg-black text-white text-sm rounded hover:bg-gray-800 transition-colors"
                            >
                              Open
                            </button>
                            <button
                              onClick={handleCancel}
                              className="px-4 py-2 bg-gray-100 text-gray-700 text-sm rounded hover:bg-gray-200 transition-colors"
                            >
                              Cancel
                            </button>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          )}
        </motion.div>
      ))}
    </div>
  );
};

export default Stats;
