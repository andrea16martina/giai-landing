import React from 'react';

/**
 * Hero section component displaying the main title, description, and call-to-action buttons.
 * Features responsive design with optimized typography and interactive elements.
 *
 * @returns {JSX.Element} The hero section with title, description, and buttons
 */
const Hero = () => {
  return (
    <section className="relative w-full min-h-[80vh] overflow-hidden flex items-center justify-center">
      <div className="relative z-10 container mx-auto px-4 py-8 flex items-center justify-center">
        <div className="text-center max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            <span className="text-blue-700 dark:text-blue-300">Gi AI</span> - Generative Insights
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-200 mb-8 max-w-2xl mx-auto leading-relaxed">
            Transform raw data into actionable intelligence with our advanced AI-powered analytics platform. Generate insights that drive decisions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/50">
              Start Generating Insights
            </button>
            <button className="border-2 border-cyan-500 dark:border-cyan-400 text-cyan-600 dark:text-cyan-400 hover:bg-cyan-500 dark:hover:bg-cyan-400 hover:text-white dark:hover:text-gray-900 font-semibold py-3 px-8 rounded-lg transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;