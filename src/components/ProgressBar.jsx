import React, { useEffect, useState } from 'react';
import { useTransform } from 'framer-motion';

/**
 * Progress bar component that shows section-specific scroll progress
 * @param {Object} props - Component props
 * @param {Object} props.scrollYProgress - Global scroll progress value from framer-motion
 * @returns {JSX.Element} The section-specific animated progress bar
 */
const ProgressBar = ({ scrollYProgress }) => {
  // Transform global scroll progress to section-specific progress (0.55-0.9 range)
  const sectionProgress = useTransform(
    scrollYProgress,
    [0.55, 0.9], // TopicSection range
    [0, 1]       // Bar progress range
  );

  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (sectionProgress) {
      const unsubscribe = sectionProgress.on("change", (value) => {
        setProgress(Math.max(0, Math.min(1, value)));
      });

      // Set initial value
      setProgress(Math.max(0, Math.min(1, sectionProgress.get())));

      return unsubscribe;
    }
  }, [sectionProgress]);

return (
    <div className="mt-12 mb-8 w-full max-w-4xl mx-auto px-4">
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden shadow-lg">
            <div
                className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full transition-all duration-200 ease-out"
                style={{
                    width: `${progress * 100}%`,
                    transform: 'translateZ(0)' // Force hardware acceleration
                }}
            />
        </div>
        <div className="text-center text-xs text-gray-600 dark:text-gray-400 mt-2 font-medium">
            Analyzing... {Math.round(progress * 100)}%
        </div>
    </div>
);
};

export default ProgressBar;
