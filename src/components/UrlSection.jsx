import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Search } from 'lucide-react';
import { FaYoutube, FaReddit } from 'react-icons/fa';

/**
 * URL Section component that displays an animated URL input with platform detection
 * @param {Object} props - Component props
 * @param {number} props.opacity - Opacity animation value
 * @param {number} props.y - Y translation animation value
 * @returns {JSX.Element} The URL section with input and platform detection
 */
const UrlSection = ({ opacity, y }) => {
  const [url, setUrl] = useState('');
  const [platform, setPlatform] = useState('');
  const [isValid, setIsValid] = useState(false);

  const exampleUrls = [
    'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    'https://www.reddit.com/r/technology/comments/xyz123/',
    'https://www.youtube.com/watch?v=9bZkp7q19f0'
  ];

  useEffect(() => {
    let currentUrlIndex = 0;
    let currentCharIndex = 0;
    let isPaused = false;

    const typingInterval = setInterval(() => {
      if (isPaused) return;

      const currentUrl = exampleUrls[currentUrlIndex];
      if (currentCharIndex < currentUrl.length) {
        setUrl(currentUrl.slice(0, currentCharIndex + 1));
        currentCharIndex++;
      } else {
        isPaused = true;
        setTimeout(() => {
          currentUrlIndex = (currentUrlIndex + 1) % exampleUrls.length;
          currentCharIndex = 0;
          isPaused = false;
        }, 1500);
      }
    }, 50);

    return () => clearInterval(typingInterval);
  }, []);

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

  const getPlatformIcon = () => {
    if (platform === 'YouTube') return <FaYoutube className="w-4 h-4 text-red-500" />;
    if (platform === 'Reddit') return <FaReddit className="w-4 h-4 text-orange-500" />;
    return null;
  };

  return (
    <motion.div
      style={{ opacity, y }}
      className="min-h-[55vh] flex items-center justify-center px-4"
      id='url-section'
    >
      <div className="bg-white/10 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200/20 dark:border-gray-700/50 rounded-xl p-6 shadow-2xl max-w-4xl w-full">
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
                  className="w-full px-4 py-3 pr-12 bg-gray-100 dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none"
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
