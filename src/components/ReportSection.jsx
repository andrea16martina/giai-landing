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
 * ReportSection - AI-generated YouTube comments analysis report
 *
 * Displays comprehensive AI-generated report for YouTube video comments analysis.
 * Shows sentiment breakdown, toxicity levels, community insights, and actionable
 * recommendations based on comment analysis. Includes progressive animation
 * and interactive elements.
 *
 * @component
 * @param {Object} props - Component properties
 * @param {number} props.progress - Animation progress (0-1)
 * @param {boolean} props.isActive - Whether section is currently active
 * @returns {JSX.Element} YouTube comments analysis report interface
 */
const ReportSection = ({ progress, isActive }) => {
  const [currentStep, setCurrentStep] = useState(0);

  // Simulate progressive report generation based on progress
  useEffect(() => {
    if (progress < 0.1) setCurrentStep(0);
    else if (progress < 0.3) setCurrentStep(1);
    else if (progress < 0.5) setCurrentStep(2);
    else setCurrentStep(3);
  }, [progress]);

  return (
    <div className={`transition-all duration-500 ${isActive ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
      {isActive && (
        <ModernCard variant="accent" className="border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-900/20">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/50 rounded-lg flex items-center justify-center flex-shrink-0">
              <span className="text-blue-600 dark:text-blue-400 text-lg">🎯</span>
            </div>
            <div className="flex-1">
              <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-4 text-base">AI ANALYSIS REPORT</h4>
              <div className="text-blue-700 dark:text-blue-300 leading-relaxed space-y-4">
                
                <div className="bg-white/60 dark:bg-gray-800/60 p-3 rounded-lg border border-blue-100 dark:border-gray-700">
                  <h5 className="font-semibold text-blue-800 dark:text-blue-200 mb-2 text-sm flex items-center gap-2">
                    <span className="text-base">🎯</span>
                    How to improve engagement by 40%?
                  </h5>
                  <div className="space-y-1">
                    <p className="text-xs"><strong>📊 Insight:</strong> 2,847 comments analyzed - 72.3% mention camera quality with 84% positive sentiment.</p>
                    <p className="text-xs"><strong>💡 Strategy:</strong> Create 3 video tutorials for Pro camera vs Samsung S24 Ultra for professional videomaking.</p>
                    <p className="text-xs"><strong>📈 Result:</strong> +40% engagement, +28% watch time, +42% retention rate.</p>
                  </div>
                </div>

                <div className="bg-white/60 dark:bg-gray-800/60 p-3 rounded-lg border border-blue-100 dark:border-gray-700">
                  <h5 className="font-semibold text-blue-800 dark:text-blue-200 mb-2 text-sm flex items-center gap-2">
                    <span className="text-base">📉</span>
                    How to reduce negative sentiment by 60%?
                  </h5>
                  <div className="space-y-1">
                    <p className="text-xs"><strong>📊 Insight:</strong> 31.8% negative comments about battery, 156 toxic comments (8.9%). Sentiment increased 23% in 3 months.</p>
                    <p className="text-xs"><strong>💡 Strategy:</strong> Respond within 12 hours + educational content for iOS 17 battery optimization.</p>
                    <p className="text-xs"><strong>📈 Result:</strong> -60% negative sentiment, +52% conversation quality, +35% user satisfaction.</p>
                  </div>
                </div>

                <div className="bg-white/60 dark:bg-gray-800/60 p-3 rounded-lg border border-blue-100 dark:border-gray-700">
                  <h5 className="font-semibold text-blue-800 dark:text-blue-200 mb-2 text-sm flex items-center gap-2">
                    <span className="text-base">💰</span>
                    How to increase conversions by 25%?
                  </h5>
                  <div className="space-y-1">
                    <p className="text-xs"><strong>📊 Insight:</strong> 28.4% comments discuss value-price ratio, 48% negative sentiment. $1,199 price as main barrier.</p>
                    <p className="text-xs"><strong>💡 Strategy:</strong> Creator case studies +300% ROI + value comparisons + Apple Store CTAs.</p>
                    <p className="text-xs"><strong>📈 Result:</strong> +25% conversions, +45% average order value, -38% bounce rate.</p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </ModernCard>
      )}
    </div>
  );
};
export default ReportSection;
