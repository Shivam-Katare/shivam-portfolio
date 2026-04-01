import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const TypeWriter = () => {
  const subtitles = [
    "Frontend Engineer",
    "Creative Developer",
    "Open Source Contributor",
    "Technical Writer",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % subtitles.length);
    }, 3500);

    return () => clearInterval(interval);
  }, [subtitles.length]);

  return (
    <div className="flex flex-col items-start gap-1">
      <div className="relative h-10 sm:h-12 flex items-center justify-start w-full overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -20, filter: "blur(4px)" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="absolute text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-white/80"
          >
            {subtitles[currentIndex]}
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
              className="ml-1 inline-block w-[3px] h-[0.8em] bg-indigo-500 align-middle"
            />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};
export default TypeWriter;
