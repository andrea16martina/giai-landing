import React, { useState, useEffect } from 'react';

/**
 * Modern card component with multiple variants and styling options
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Card content
 * @param {string} props.className - Additional CSS classes
 * @param {string} props.variant - Card style variant (default, elevated, glass, accent)
 * @param {string} props.padding - Padding size (none, sm, default, lg)
 * @returns {JSX.Element} Styled card component
 */
function ModernCard({
  children,
  className = '',
  variant = 'default',
  padding = 'default'
}) {
  const variants = {
    default: 'bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800',
    elevated: 'bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-xl',
    glass: 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg border border-gray-200/50 dark:border-gray-800/50',
    accent: 'bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-gray-900 dark:to-gray-900 border border-blue-200 dark:border-gray-800'
  };

  const paddings = {
    none: '',
    sm: 'p-4',
    default: 'p-6',
    lg: 'p-8'
  };

  return (
    <div className={`
      rounded-xl transition-all duration-300
      ${variants[variant]}
      ${paddings[padding]}
      ${className}
    `}>
      {children}
    </div>
  );
}

/**
 * ReportSection - Interactive AI analysis report with scroll-driven insights
 *
 * Displays AI-generated YouTube comments analysis with a fixed "AI ANALYSIS REPORT" title
 * and 3 insights that appear based on scroll progress with typewriter animation.
 *
 * @component
 * @param {Object} props - Component properties
 * @param {number} props.progress - Scroll progress (0-1) controlling insight progression
 * @param {boolean} props.isActive - Whether section is currently visible
 * @param {Function} [props.onComplete] - Callback fired when all insights are shown
 * @returns {JSX.Element} Interactive AI analysis report with scroll-driven insights
 */
const ReportSection = ({ progress, isActive, onComplete }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);

  // Define 3 steps - one for each insight
  const steps = [
    {
      title: 'How to improve engagement by 40%?',
      content: `📊 Insight: 2,847 comments analyzed - 72.3% mention camera quality with 84% positive sentiment.
💡 Strategy: Create 3 video tutorials for Pro camera vs Samsung S24 Ultra for professional videomaking.
📈 Result: +40% engagement, +28% watch time, +42% retention rate.`,
      icon: '🎯'
    },
    {
      title: 'How to reduce negative sentiment by 60%?',
      content: `📊 Insight: 31.8% negative comments about battery, 156 toxic comments (8.9%). Sentiment increased 23% in 3 months.
💡 Strategy: Respond within 12 hours + educational content for iOS 17 battery optimization.
📈 Result: -60% negative sentiment, +52% conversation quality, +35% user satisfaction.`,
      icon: '📉'
    },
    {
      title: 'How to increase conversions by 25%?',
      content: `📊 Insight: 28.4% comments discuss value-price ratio, 48% negative sentiment. $1,199 price as main barrier.
💡 Strategy: Creator case studies +300% ROI + value comparisons + Apple Store CTAs.
📈 Result: +25% conversions, +45% average order value, -38% bounce rate.`,
      icon: '💰'
    }
  ];

  // Determine current step based on scroll progress
  useEffect(() => {
    if (!isActive) {
      setCurrentStep(0);
      setDisplayedText('');
      setIsTyping(false);
      return;
    }

    let newStep = 0;
    if (progress >= 0.66) newStep = 2;
    else if (progress >= 0.33) newStep = 1;
    else newStep = 0;

    setCurrentStep(newStep);

    // Call onComplete when reaching the last step
    if (newStep === 2 && progress >= 0.95 && onComplete) {
      onComplete();
    }
  }, [progress, isActive, onComplete]);

  // Typewriter effect controlled by scroll progress within current step
  useEffect(() => {
    if (!isActive) {
      setDisplayedText('');
      setIsTyping(false);
      return;
    }

    const step = steps[currentStep];
    if (!step) {
      setDisplayedText('');
      setIsTyping(false);
      return;
    }

    const fullContent = `${step.title}\n\n${step.content}`;

    // Calculate progress within current step
    let stepProgress = 0;
    if (currentStep === 0) {
      stepProgress = Math.min(progress / 0.33, 1);
    } else if (currentStep === 1) {
      stepProgress = Math.min((progress - 0.33) / 0.33, 1);
    } else {
      stepProgress = Math.min((progress - 0.66) / 0.34, 1);
    }

    const charsToShow = Math.floor(stepProgress * fullContent.length);
    const newText = fullContent.slice(0, charsToShow);

    setDisplayedText(newText);
    setIsTyping(charsToShow < fullContent.length && charsToShow > 0);
  }, [progress, isActive, currentStep, steps]);

  const formatDisplayedText = (text) => {
    if (!text || text.trim() === '') return null;

    const lines = text.split('\n');
    return lines.map((line, index) => {
      // First line is the question/title
      if (index === 0 && line.trim()) {
        return <h4 key={index} className="font-semibold text-blue-800 dark:text-blue-200 mb-3 text-base">{line}</h4>;
      }

      // Empty lines
      if (line.trim() === '') {
        return <br key={index} />;
      }

      // Content lines
      if (line.trim()) {
        return <p key={index} className="text-xs text-blue-700 dark:text-blue-300 mb-1 leading-relaxed">{line}</p>;
      }

      return null;
    }).filter(Boolean);
  };

  return (
    <div className={`transition-all duration-500 ${isActive ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
      {isActive && (
        <ModernCard variant="accent" className="border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-900/20">
          <div className="space-y-4">
            {/* Fixed title */}
            <div className="text-center mb-6">
              <h3 className="text-xl font-bold text-blue-800 dark:text-blue-200 mb-2">
                AI ANALYSIS REPORT
              </h3>
              <div className="w-16 h-1 bg-blue-500 dark:bg-blue-400 mx-auto rounded-full"></div>
            </div>

            {/* Progress indicator */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex space-x-2">
                {steps.map((_, index) => (
                  <div
                    key={index}
                    className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                      index <= currentStep
                        ? 'bg-blue-500 dark:bg-blue-400'
                        : 'bg-gray-300 dark:bg-gray-600'
                    }`}
                  />
                ))}
              </div>
              <span className="text-xs text-gray-500 dark:text-gray-400">
                Insight {currentStep + 1} of {steps.length}
              </span>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/50 rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-blue-600 dark:text-blue-400 text-lg">{steps[currentStep].icon}</span>
              </div>
              <div className="flex-1">
                {/* Dynamic content with typewriter effect for current step */}
                <div className="text-blue-700 dark:text-blue-300 leading-relaxed min-h-[120px]">
                  {displayedText ? formatDisplayedText(displayedText) : (
                    <div className="text-gray-400 dark:text-gray-500 italic">
                      Scroll to reveal insights...
                    </div>
                  )}
                  {isTyping && displayedText && <span className="animate-pulse">|</span>}
                </div>
              </div>
            </div>

            {/* Step navigation hint */}
            <div className="text-center">
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Scroll to reveal insights
              </p>
            </div>
          </div>
        </ModernCard>
      )}
    </div>
  );
};

export default ReportSection;
