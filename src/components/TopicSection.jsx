import React, { useState, useEffect } from 'react';
import { Sparkles, Zap } from 'lucide-react';

/**
 * AI Topic Section component that displays topic generation with scroll-driven animations
 * @param {Object} props - Component props
 * @param {Object} props.scrollYProgress - Scroll progress value for animations
 * @returns {JSX.Element} The AI topic section with input and topic list
 */
const TopicSection = ({ scrollYProgress }) => {
  const [topic, setTopic] = useState('');
  const [suggestedTopics, setSuggestedTopics] = useState([]);
  const [selectedTopicIndex, setSelectedTopicIndex] = useState(-1);
  const [currentProgress, setCurrentProgress] = useState(0);

  const exampleTopics = [
    'AI',
    'Web',
    'Cybersecurity',
    'Cloud',
    'Mobile'
  ];

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (progress) => {
      if (progress > 0.4) {
        // Initialize topics when section becomes visible
        if (!suggestedTopics.length) {
          setSuggestedTopics(exampleTopics);
        }

        // Auto-select topic based on scroll with smoother transitions
        const selectedIndex = Math.floor((progress - 0.4) / 0.06);
        if (selectedIndex >= 0 && selectedIndex < exampleTopics.length) {
          setSelectedTopicIndex(selectedIndex);
          setTopic(exampleTopics[selectedIndex]);
        }
      } else {
        // Reset when scrolling back before 0.4
        setSelectedTopicIndex(-1);
        setTopic('');
      }

      setCurrentProgress(progress);
    });
    return unsubscribe;
  }, [scrollYProgress, suggestedTopics.length]);

  return (
    <div
      style={{
        opacity: currentProgress > 0.85 ? 0 : 1,
        transform: currentProgress > 0.85 ? 'translateY(-30px)' : 'translateY(0px)'
      }}
      className="min-h-screen flex items-start justify-center px-4 pt-8 transition-all duration-500 ease-out"
    >
      <div className="bg-white/20 dark:bg-gray-800/60 backdrop-blur-md border border-gray-300/30 dark:border-gray-600/50 rounded-xl p-6 shadow-2xl max-w-4xl w-full">
        <div className="space-y-6">
          <div className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-200 font-medium">
            <Sparkles className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            Generate AI-powered topics
          </div>

          <div className="space-y-2">
            <div className="relative">
              <input
                className="w-full px-4 py-2.5 border rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-600 dark:placeholder-gray-400 border-gray-400 dark:border-gray-500 focus:border-blue-500 dark:focus:border-blue-400 focus:ring-2 focus:ring-blue-500/20 dark:focus:ring-blue-400/20 transition-colors"
                type="text"
                placeholder="Analysis topic (optional)"
                value={topic}
                readOnly
              />
            </div>

            <p className="text-xs text-gray-600 dark:text-gray-300 flex items-center gap-1 font-medium">
              <Zap size={12} className="text-blue-600 dark:text-blue-400" />
              Examples: "sentiment analysis", "main themes", "user concerns"
            </p>
          </div>

          {currentProgress > 0.4 && currentProgress <= 0.85 && (
            <div className="bg-white/30 dark:bg-gray-800/70 backdrop-blur-md border border-gray-300/40 dark:border-gray-600/60 rounded-xl p-4 shadow-xl animate-in slide-in-from-top-2 duration-500 opacity-100">
              <div className="flex items-center gap-2 mb-3">
                <Sparkles size={16} className="text-blue-700 dark:text-blue-300" />
                <span className="font-semibold text-gray-800 dark:text-gray-100 text-sm">
                  AI Suggestions
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {exampleTopics.map((suggestion, idx) => {
                  // Simple delay calculation with initial offset
                  const baseDelay = Math.max(0, (currentProgress - 0.5 - idx * 0.05) * 1000); // Ritardo iniziale aumentato
                  const delay = baseDelay > 0 ? baseDelay : 0;

                  // Alternate between left and right slide
                  const slideDirection = idx % 2 === 0 ? 'slide-in-from-left-2' : 'slide-in-from-right-2';

                  return (
                    <div
                      key={suggestion}
                      className={`px-4 py-3 rounded-xl text-sm font-medium text-left border-2 bg-white/80 dark:bg-gray-700/80 text-gray-800 dark:text-gray-100 border-gray-400 dark:border-gray-500 transition-all duration-300 ${
                        delay > 0 ? `animate-in ${slideDirection}` : 'opacity-0 translate-x-4'
                      }`}
                      style={{
                        animationDelay: `${delay}ms`,
                        animationFillMode: 'both'
                      }}
                    >
                      <div className="flex items-center justify-between">
                        <span className="truncate font-medium">{suggestion}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TopicSection;
