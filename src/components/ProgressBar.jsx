import React from 'react';
import { motion } from 'framer-motion';

/**
 * ProgressBar - Animated progress indicator component
 *
 * Displays a visually appealing progress bar with gradient colors and percentage
 * text. Shows analysis progress with smooth animations and hardware acceleration
 * for optimal performance. Only renders when active.
 *
 * @component
 * @param {Object} props - Component properties
 * @param {number} [props.progress=0] - Progress value between 0 and 1
 * @param {boolean} props.isActive - Whether the progress bar should be visible
 * @returns {JSX.Element|null} Animated progress bar or null if inactive
 *
 * @example
 * ```jsx
 * <ProgressBar progress={0.75} isActive={true} />
 * ```
 */
const ProgressBar = ({ progress = 0, isActive }) => {
  if (!isActive) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="mt-12 mb-8 w-full mx-auto px-8"
    >
      <div className="w-full rounded-full h-6 overflow-hidden shadow-lg border-2 border-gray-300 dark:border-gray-600">
        <motion.div
          className="h-full w-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full"
          style={{
            width: `${progress * 100}%`,
            transform: 'translateZ(0)' // Force hardware acceleration
          }}
          initial={{ width: 0 }}
          animate={{ width: `${progress * 100}%` }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        />
      </div>
      <motion.div
        className="text-center w-full text-sm text-gray-600 dark:text-gray-400 mt-3 font-semibold"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.3 }}
      >
        Analyzing... {Math.round(progress * 100)}%
      </motion.div>
    </motion.div>
  );
};

export default ProgressBar;
