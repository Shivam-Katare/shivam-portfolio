import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const TypeWriter = () => {
  const subtitles = [
    "shipping production apps",
    "Open Source Contributor",
    "Technical Writer",
    "3x Hackathon Winner",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % subtitles.length);
    }, 3000); // Change text every 3 seconds

    return () => clearInterval(interval);
  }, [subtitles.length]);

  return (
    <div className="grid justify-items-center place-items-center text-center">
      <motion.div
        className="flex flex-col items-center gap-2"
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
          A Frontend Engineer
        </h1>
        <div className="relative h-8 sm:h-10 flex items-center justify-end w-full">
          <AnimatePresence mode="wait">
            <motion.p
              key={currentIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5 }}
              className="absolute text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400"
            >
              {subtitles[currentIndex]}
            </motion.p>
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
};

export default TypeWriter;
