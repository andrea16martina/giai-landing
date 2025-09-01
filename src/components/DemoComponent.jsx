import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import UrlSection from './UrlSection';
import TopicSection from './TopicSection';
import ProgressBar from './ProgressBar';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

/**
 * DemoComponent - Interactive scroll-hijacked demo orchestrator
 *
 * Main component that creates a scroll-hijacked interactive experience using GSAP ScrollTrigger.
 * Manages the progression through different demo sections (URL input, topic selection, progress)
 * based on scroll position, providing smooth animations and transitions.
 *
 * @component
 * @returns {JSX.Element} Scroll-hijacked demo container with animated sections
 *
 * @example
 * ```jsx
 * <DemoComponent />
 * ```
 */
const DemoComponent = () => {
  /**
   * Reference to the main container element for ScrollTrigger
   * @type {React.RefObject<HTMLDivElement>}
   */
  const containerRef = useRef(null);

  /**
   * Current scroll progress through the demo (0-1)
   * @type {[number, function]}
   */
  const [scrollProgress, setScrollProgress] = useState(0);

  /**
   * Whether the demo section is currently active/visible
   * @type {[boolean, function]}
   */
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const totalDuration = 4000;

    const trigger = ScrollTrigger.create({
      trigger: container,
      start: 'top top',
      end: `+=${totalDuration}`,
      pin: true,
      scrub: 1,
      onUpdate: (self) => {
        const progress = self.progress;
        setScrollProgress(progress);
        setIsActive(true);
      },
      onLeave: () => {
        setIsActive(false);
      },
      onEnterBack: () => {
        setIsActive(true);
      }
    });

    return () => {
      trigger.kill();
    };
  }, []);

  return (
    <div ref={containerRef} className="w-full relative min-h-screen">
      {scrollProgress <= 0.5 && (
        <div className="absolute w-full inset-0 flex items-center justify-center pt-16">
          <UrlSection
            progress={Math.min(scrollProgress * 2, 1)}
            isActive={isActive && scrollProgress <= 0.5}
          />
        </div>
      )}

      {scrollProgress > 0.5 && scrollProgress <= 0.7 && (
        <div className="absolute w-full inset-0 flex items-center justify-center pt-16">
          <TopicSection
            progress={(scrollProgress - 0.5) / 0.2}
            isActive={isActive && scrollProgress > 0.5 && scrollProgress <= 0.7}
          />
        </div>
      )}

      {scrollProgress > 0.7 && (
        <div className="absolute w-full inset-0 flex items-center justify-center pt-16">
          <div className="w-2/3 text-center">
            <ProgressBar
              progress={(scrollProgress - 0.7) / 0.3}
              isActive={isActive && scrollProgress > 0.7}
            />
            {scrollProgress >= 1 && (
              <div className="mt-8 text-2xl font-bold text-gray-800 dark:text-gray-200">
                Analysis Complete!
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default DemoComponent;
