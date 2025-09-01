import React from 'react';

/**
 * Hero - Main landing section component
 *
 * Displays the primary hero section with title, description, and call-to-action buttons.
 * Features responsive design, smooth scrolling navigation, and interactive elements
 * that guide users to explore the platform's capabilities.
 *
 * @component
 * @returns {JSX.Element} Hero section with branding and navigation
 *
 * @example
 * ```jsx
 * <Hero />
 * ```
 */
const Hero = () => {
  /**
   * Smoothly scrolls to the URL section when "Learn More" is clicked
   */
  const handleScroll = () => {
    const nextSection = document.getElementById('url-section');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full min-h-screen md:mt-[-10vh] overflow-hidden flex items-center justify-center">
      <div className="relative z-10 container mx-auto px-4 py-6 sm:py-8 flex items-center justify-center">
        <div className="text-center max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            <span className="text-blue-700 dark:text-blue-300">Gi AI</span> - Generative Insights
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-200 mb-8 max-w-2xl mx-auto leading-relaxed">
            Transform raw data into actionable intelligence with our advanced AI-powered analytics platform. Generate insights that drive decisions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://andreamartina.vercel.app/tool"
              className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/50"
            >
              Start Generating Insights
            </a>
            <button
              type="button"
              onClick={handleScroll}
              className="border-2 border-cyan-500 dark:border-cyan-400 text-cyan-600 dark:text-cyan-400 hover:bg-cyan-500 dark:hover:bg-cyan-400 hover:text-white dark:hover:text-gray-900 font-semibold py-3 px-8 rounded-lg transition-all duration-300"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;