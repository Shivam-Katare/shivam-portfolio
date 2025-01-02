import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const Stats = () => {
  const [showDetails, setShowDetails] = useState<number | string | null>(null);

  const stats = [
    { 
      number: "13", 
      label: "Clients Worked With",
      details: [
        { type: "Startups", count: 6 },
        { type: "Communities", count: 5 },
        { type: "Agencies", count: 2 },
      ]
    },
    { number: "3",
      label: "Tech Talks",
      details: [
        { type: "Remote", count: 2 },
        { type: "In-Person", count: 1 },
      ]
    },
    { number: "60+", label: "Blogs Published" },
  ];

  return (
    <div className="grid grid-cols-3 gap-6 my-8">
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="text-center relative"
          onMouseEnter={() => stat.details && setShowDetails(index)} 
          onMouseLeave={() => stat.details && setShowDetails(null)} 
        >
          <motion.div
            className="text-3xl font-bold mb-2"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            {stat.number}
          </motion.div>
          <div className="text-sm text-gray-600">{stat.label}</div>

          {/* Animated Details */}
          <AnimatePresence>
            {showDetails === index && stat.details && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.2 }}
                className="absolute top-full left-1/2 transform -translate-x-1/2 bg-white rounded-lg shadow-md p-4 z-10 w-fit"
              >
                <ul>
                  {stat.details.map((detail, i) => (
                    <li key={i} className="flex justify-between items-center py-1">
                      <span>{detail.type}:</span>
                      <span className="font-bold ml-2">{detail.count}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  );
};

export default Stats;

