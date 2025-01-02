import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const TypeWriter = () => {
  const titles = ["A Frontend Engineer", "Technical Writer", "Community Contributor"];
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typingSpeed = 150; // Adjust typing speed (lower = faster)
    const deletingSpeed = 100; // Adjust deleting speed (lower = faster)
    const pauseDuration = 2000; // How long to pause at complete text

    const handleTyping = () => {
      const currentTitle = titles[currentTitleIndex];
      
      if (!isDeleting) {
        if (currentText !== currentTitle) {
          setCurrentText(currentTitle.substring(0, currentText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), pauseDuration);
        }
      } else {
        if (currentText === "") {
          setIsDeleting(false);
          setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
        } else {
          setCurrentText(currentTitle.substring(0, currentText.length - 1));
        }
      }
    };

    const timer = setTimeout(
      handleTyping,
      isDeleting ? deletingSpeed : typingSpeed
    );

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentTitleIndex]);

  return (
    <div className='grid justify-items-center place-items-center'>
      <motion.div
      className="min-h-[60px] flex items-center min-w-screen text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-6xl font-bold">
        {currentText}
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
          className="ml-1 inline-block w-[3px] h-[44px] bg-black"
        />
      </h1>
    </motion.div>
    </div>
    
  );
};

export default TypeWriter;
