import React from 'react';
import { useScroll, useTransform } from 'framer-motion';
import UrlSection from './UrlSection';
import TopicSection from './TopicSection';
import ProgressBar from './ProgressBar';

/**
 * Main demo component that orchestrates the scroll-driven interactive demo
 * @returns {JSX.Element} The complete demo component with URL and topic sections
 */
const DemoComponent = () => {
  const { scrollYProgress } = useScroll();
  const section1Opacity = useTransform(scrollYProgress, [0, 0.4, 0.41], [0, 1, 0]);
  const section1Y = useTransform(scrollYProgress, [0, 0.4, 0.41], [50, 0, -50]);
  const section2Opacity = useTransform(scrollYProgress, [0.55, 0.6, 0.9], [0, 1, 1]);
  const section2Y = useTransform(scrollYProgress, [0.55, 0.6, 0.9], [50, 0, 0]);

  return (
    <div className="bg-gradient-to-br from-white via-blue-50/80 to-blue-100/60 dark:from-black dark:via-gray-950 dark:to-gray-900 relative">
      <div className="relative">
        <UrlSection opacity={section1Opacity} y={section1Y} />
        <TopicSection opacity={section2Opacity} y={section2Y} scrollYProgress={scrollYProgress} />
        <ProgressBar scrollYProgress={scrollYProgress} />
      </div>
    </div>
  );
};

export default DemoComponent;
