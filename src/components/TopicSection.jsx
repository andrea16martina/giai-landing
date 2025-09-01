import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Zap } from 'lucide-react';

/**
 * TopicSection - Interactive AI topic generation component with scroll-driven animations
 *
 * Displays an animated interface for AI-powered topic generation with progressive topic
 * suggestions that appear based on scroll progress. Features smooth animations and
 * visual feedback for topic selection.
 *
 * @component
 * @param {Object} props - Component properties
 * @param {number} props.progress - Scroll progress value between 0 and 1 that controls animation timing
 * @param {boolean} props.isActive - Whether this section is currently visible and active
 * @returns {JSX.Element} Animated topic selection interface
 *
 * @example
 * ```jsx
 * <TopicSection progress={0.5} isActive={true} />
 * ```
 */
const TopicSection = ({ progress, isActive }) => {
  /**
   * Current topic text displayed in the input field
   * @type {string}
   */
  const [topic, setTopic] = useState('');

  /**
   * Array of suggested topics available for selection
   * @type {string[]}
   */
  const [suggestedTopics, setSuggestedTopics] = useState([]);

  /**
   * Index of the currently selected topic (-1 when no topic is selected)
   * @type {number}
   */
  const [selectedTopicIndex, setSelectedTopicIndex] = useState(-1);

  /**
   * Predefined list of example topics for AI suggestions
   * @type {string[]}
   */
  const exampleTopics = [
    'AI',
    'Web',
    'Cybersecurity',
    'Cloud',
    'Mobile'
  ];

  useEffect(() => {
    if (!isActive) {
      setSelectedTopicIndex(-1);
      setTopic('');
      return;
    }

    if (!suggestedTopics.length) {
      setSuggestedTopics(exampleTopics);
    }

    const smoothProgress = Math.min(progress * 1.3, 1);
    const topicsToShow = Math.min(Math.floor(smoothProgress * exampleTopics.length), exampleTopics.length);
    const currentSelectedIndex = Math.max(0, topicsToShow - 1);

    if (currentSelectedIndex !== selectedTopicIndex && currentSelectedIndex < exampleTopics.length) {
      setSelectedTopicIndex(currentSelectedIndex);
      const targetTopic = exampleTopics[currentSelectedIndex];
      setTopic(targetTopic);
    }

    if (topicsToShow === 0) {
      setSelectedTopicIndex(-1);
      setTopic('');
    }
  }, [progress, isActive]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{
        opacity: isActive ? 1 : 0,
        y: isActive ? 0 : 30
      }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="min-h-screen flex items-start justify-center pt-8"
    >
      <div className="bg-white/20 dark:bg-gray-800/60 backdrop-blur-md border border-gray-300/30 dark:border-gray-600/50 rounded-xl px-6 py-8 shadow-2xl w-full max-w-[98vw] mx-auto">
        <div className="space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{
              opacity: progress > 0.01 ? 1 : 0,
              y: progress > 0.01 ? 0 : 15
            }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
            className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-200 font-medium"
          >
            <Sparkles className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            Generate AI-powered topics
          </motion.div>

          <div className="space-y-2">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{
                opacity: progress > 0.03 ? 1 : 0,
                y: progress > 0.03 ? 0 : 15
              }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
              className="relative"
            >
              <input
                className="w-full px-4 py-2.5 border rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-600 dark:placeholder-gray-400 border-gray-400 dark:border-gray-500 focus:border-blue-500 dark:focus:border-blue-400 focus:ring-2 focus:ring-blue-500/20 dark:focus:ring-blue-400/20 transition-colors"
                type="text"
                placeholder="Analysis topic (optional)"
                value={topic}
                readOnly
              />
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: progress > 0.04 ? 1 : 0 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
              className="text-xs text-gray-600 dark:text-gray-300 flex items-center gap-1 font-medium"
            >
              <Zap size={12} className="text-blue-600 dark:text-blue-400" />
              Examples: "sentiment analysis", "main themes", "user concerns"
            </motion.p>
          </div>

          {progress > 0.02 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: progress > 0.05 ? 1 : 0,
                y: progress > 0.05 ? 0 : 20
              }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="bg-white/30 dark:bg-gray-800/70 backdrop-blur-md border border-gray-300/40 dark:border-gray-600/60 rounded-xl px-4 py-4 shadow-xl"
            >
              <div className="flex items-center gap-2 mb-3">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{
                    opacity: progress > 0.08 ? 1 : 0,
                    scale: progress > 0.08 ? 1 : 0.8
                  }}
                  transition={{ duration: 0.4, ease: "easeOut", delay: 0.6 }}
                >
                  <Sparkles size={16} className="text-blue-700 dark:text-blue-300" />
                </motion.div>
                <motion.span
                  initial={{ opacity: 0, x: -10 }}
                  animate={{
                    opacity: progress > 0.08 ? 1 : 0,
                    x: progress > 0.08 ? 0 : -10
                  }}
                  transition={{ duration: 0.4, ease: "easeOut", delay: 0.7 }}
                  className="font-semibold text-gray-800 dark:text-gray-100 text-sm"
                >
                  AI Suggestions
                </motion.span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {exampleTopics.map((suggestion, idx) => {
                  const topicThreshold = (idx + 1) / exampleTopics.length;
                  const isVisible = progress >= topicThreshold * 0.8;
                  const isSelected = idx === selectedTopicIndex;

                  return (
                    <motion.div
                      key={suggestion}
                      initial={{ opacity: 0, y: 20, scale: 1 }}
                      animate={{
                        opacity: isVisible ? 1 : 0,
                        y: isVisible ? 0 : 20,
                        scale: isSelected ? 1.05 : 1
                      }}
                      transition={{
                        duration: 0.4,
                        ease: "easeOut",
                        delay: isVisible ? idx * 0.12 : 0,
                        scale: { duration: 0.3, ease: "easeOut" }
                      }}
                      className={`px-4 py-3 rounded-xl text-sm font-medium text-left border-2 ${
                        isSelected
                          ? 'bg-blue-500/25 border-blue-500 text-blue-700 dark:text-blue-300 shadow-lg'
                          : 'bg-white/80 dark:bg-gray-700/80 text-gray-800 dark:text-gray-100 border-gray-400 dark:border-gray-500'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="truncate font-medium">{suggestion}</span>
                        {isSelected && <Zap size={14} className="text-blue-600 dark:text-blue-400" />}
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default TopicSection;
