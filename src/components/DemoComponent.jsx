import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import UrlSection from './UrlSection';
import TopicSection from './TopicSection';
import ProgressBar from './ProgressBar';
import ActionsSection from './ActionsSection';
import StatisticsSection from './StatisticsSection';
import ChartsSection from './ChartsSection';
import ReportSection from './ReportSection'

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

/**
 * DemoComponent - Interactive scroll-hijacked demo orchestrator
 *
 * Main component that creates a scroll-hijacked interactive experience using GSAP ScrollTrigger.
 * Manages the progression through different demo sections in sequence: URL input, topic selection,
 * progress bar, actions panel, statistics dashboard, charts visualization, and AI report.
 * Each section appears and disappears based on scroll position with smooth transitions.
 *
 * @component
 * @returns {JSX.Element} Scroll-hijacked demo container with sequential animated sections
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

    // Extended duration for sequential sections (7 sections total)
    const totalDuration = 14000;

    const trigger = ScrollTrigger.create({
      trigger: container,
      start: 'top top',
      end: `+=${totalDuration}`,
      pin: true,
      scrub: 1.5,
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
    <div
      ref={containerRef}
      className="w-full relative min-h-screen z-10"
    >
      {/* URL Section - ridotto per dare spazio alle nuove sezioni */}
      {scrollProgress <= 0.3 && (
        <div className="absolute w-full inset-0 flex items-center justify-center pt-16 z-20">
          <UrlSection
            progress={Math.min(scrollProgress * 3.33, 1)} // Normalizza 0-0.3 a 0-1
            isActive={isActive && scrollProgress <= 0.3}
          />
        </div>
      )}

      {/* Topic Section - ridotto per dare spazio alle nuove sezioni */}
      {scrollProgress > 0.3 && scrollProgress <= 0.5 && (
        <div className="absolute w-full inset-0 flex items-center justify-center pt-16 z-20">
          <TopicSection
            progress={(scrollProgress - 0.3) / 0.2} // Normalizza 0.3-0.5 a 0-1
            isActive={isActive && scrollProgress > 0.3 && scrollProgress <= 0.5}
          />
        </div>
      )}

      {/* Progress Bar - ridotto per dare spazio alle nuove sezioni */}
      {scrollProgress > 0.5 && scrollProgress <= 0.6 && (
        <div className="absolute w-full inset-0 flex items-center justify-center pt-16 z-20">
          <div className="w-full mx-auto max-w-5xl text-center">
            <ProgressBar
              progress={(scrollProgress - 0.5) / 0.1} // Normalizza 0.5-0.6 a 0-1
              isActive={isActive && scrollProgress > 0.5 && scrollProgress <= 0.6}
            />
          </div>
        </div>
      )}

      {/* Actions Section */}
      {scrollProgress > 0.6 && scrollProgress <= 0.7 && (
        <div className="absolute w-full inset-0 flex items-start justify-center px-8 pt-24 z-20">
          <div className="w-full max-w-4xl mt-12">
            <ActionsSection
              progress={(scrollProgress - 0.6) / 0.1} 
              isActive={isActive && scrollProgress > 0.6 && scrollProgress <= 0.7}
            />
          </div>
        </div>
      )}

      {/* Statistics Section */}
      {scrollProgress > 0.7 && scrollProgress <= 0.8 && (
        <div className="absolute w-full inset-0 flex items-center px-8 justify-center pt-16 z-20">
          <div className="w-full max-w-4xl">
            <StatisticsSection
              progress={(scrollProgress - 0.7) / 0.1} // Normalizza 0.7-0.8 a 0-1
              isActive={isActive && scrollProgress > 0.7 && scrollProgress <= 0.8}
            />
          </div>
        </div>
      )}

      {/* Charts Section */}
      {scrollProgress > 0.8 && scrollProgress < 0.9 && (
        <div className="absolute w-full inset-0 px-8 flex items-center justify-center pt-16 z-20">
          <div className="w-full max-w-4xl">
            <ChartsSection
              progress={(scrollProgress - 0.8) / 0.1} 
              isActive={isActive && scrollProgress > 0.8 && scrollProgress < 0.9}
            />
          </div>
        </div>
      )}

      {/* Report Section */}
      {scrollProgress >= 0.9 && (
        <div className="absolute w-full inset-0 flex items-center pb-4 px-8 justify-center pt-16 z-20">
          <div className="w-full max-w-4xl">
            <ReportSection
              progress={(scrollProgress - 0.9) / 0.1} 
              isActive={isActive && scrollProgress >= 0.9}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default DemoComponent;
