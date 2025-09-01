import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Search } from 'lucide-react';
import { FaYoutube, FaReddit } from 'react-icons/fa';

/**
 * UrlSection - Animated URL input component with platform detection
 *
 * Interactive component that displays an animated URL input field with automatic
 * platform detection for YouTube and Reddit URLs. Shows typing animation based
 * on scroll progress and provides visual feedback for URL validation.
 *
 * @component
 * @param {Object} props - Component properties
 * @param {number} props.progress - Scroll progress value (0-1) controlling animation
 * @param {boolean} props.isActive - Whether this section is currently active
 * @returns {JSX.Element} Animated URL input with platform detection
 *
 * @example
 * ```jsx
 * <UrlSection progress={0.5} isActive={true} />
 * ```
 */
const UrlSection = ({ progress, isActive }) => {
  /**
   * Current URL text displayed in the input field
   * @type {[string, function]}
   */
  const [url, setUrl] = useState('');

  /**
   * Detected platform name (YouTube, Reddit, or empty)
   * @type {[string, function]}
   */
  const [platform, setPlatform] = useState('');

  /**
   * Whether the current URL is valid and recognized
   * @type {[boolean, function]}
   */
  const [isValid, setIsValid] = useState(false);

  /**
   * Example URL used for animation demonstration
   * @type {string}
   */
  const exampleUrl = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';

  useEffect(() => {
    if (!isActive) return;

    const charsToShow = Math.floor(progress * exampleUrl.length);
    const displayedUrl = exampleUrl.slice(0, charsToShow);

    setUrl(displayedUrl);

    if (displayedUrl.includes('youtube.com')) {
      setPlatform('YouTube');
      setIsValid(true);
    } else if (displayedUrl.includes('reddit.com')) {
      setPlatform('Reddit');
      setIsValid(true);
    } else if (displayedUrl.startsWith('https://')) {
      setPlatform('Detecting...');
      setIsValid(false);
    } else {
      setPlatform('');
      setIsValid(false);
    }
  }, [progress, isActive]);

  useEffect(() => {
    if (url.includes('youtube.com')) {
      setPlatform('YouTube');
      setIsValid(true);
    } else if (url.includes('reddit.com')) {
      setPlatform('Reddit');
      setIsValid(true);
    } else if (url.startsWith('https://')) {
      setPlatform('Detecting...');
      setIsValid(false);
    } else {
      setPlatform('');
      setIsValid(false);
    }
  }, [url]);

  /**
   * Returns the appropriate platform icon based on detected platform
   * @returns {JSX.Element|null} Platform icon or null if no platform detected
   */
  const getPlatformIcon = () => {
    if (platform === 'YouTube') return <FaYoutube className="w-4 h-4 text-red-500" />;
    if (platform === 'Reddit') return <FaReddit className="w-4 h-4 text-orange-500" />;
    return null;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{
        opacity: isActive ? 1 : 0,
        y: isActive ? 0 : 50
      }}
      transition={{ duration: 0.5 }}
      className="min-h-[55vh] w-full mx-auto max-w-5xl px-8 flex items-center justify-center"
      id='url-section'
    >
      <div className="bg-white/10 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200/20 dark:border-gray-700/50 rounded-xl px-6 py-8 shadow-2xl w-full max-w-[98vw] mx-auto">
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
            <Search className="w-4 h-4" />
            Enter a URL to analyze
          </div>
          <div className="relative space-y-2">
            {platform && (
              <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400 mb-2">
                {getPlatformIcon()}
                <span>Platform: {platform}</span>
              </div>
            )}
            <div className="flex items-center gap-2">
              <div className="relative flex-1">
                <input
                  type="url"
                  value={url}
                  readOnly
                  className="w-full px-4 py-4 pr-12 bg-gray-100 dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none text-lg"
                />
                <div className={`absolute right-3 top-1/2 transform -translate-y-1/2 w-3 h-3 rounded-full ${
                  isValid ? 'bg-green-500' : 'bg-red-500'
                }`}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default UrlSection;
