import React, { useState } from 'react';

/**
 * ChartsSection - Progressive data visualization components
 *
 * Displays charts in progressive steps based on scroll progress:
 * Step 1: Sentiment Distribution (0-25%)
 * Step 2: Sentiment Timeline (25-50%)
 * Step 3: Comment Length Distribution (50-75%)
 * Step 4: Word Cloud (75%+)
 *
 * @component
 * @param {Object} props - Component properties
 * @param {number} props.progress - Animation progress (0-1)
 * @param {boolean} props.isActive - Whether section is currently active
 * @returns {JSX.Element} Progressive charts dashboard
 */
const ChartsSection = ({ progress, isActive }) => {
  const [wordCloudFilter, setWordCloudFilter] = useState('all');

  const getCurrentStep = () => {
    if (progress <= 0.25) return 0;
    if (progress <= 0.5) return 1;
    if (progress <= 0.75) return 2;
    return 3;
  };

  const currentStep = getCurrentStep();

  const getWordCloudData = (filter) => {
    const allWords = [
      { text: 'love', size: 24, sentiment: 'positive' },
      { text: 'amazing', size: 28, sentiment: 'positive' },
      { text: 'great', size: 22, sentiment: 'positive' },
      { text: 'awesome', size: 20, sentiment: 'positive' },
      { text: 'excellent', size: 18, sentiment: 'positive' },
      { text: 'fantastic', size: 16, sentiment: 'positive' },
      
      { text: 'good', size: 20, sentiment: 'neutral' },
      { text: 'nice', size: 18, sentiment: 'neutral' },
      { text: 'cool', size: 16, sentiment: 'neutral' },
      { text: 'best', size: 18, sentiment: 'neutral' },
      { text: 'perfect', size: 16, sentiment: 'neutral' },
      { text: 'okay', size: 12, sentiment: 'neutral' },
      { text: 'fine', size: 12, sentiment: 'neutral' },
      { text: 'average', size: 10, sentiment: 'neutral' },
      
      { text: 'bad', size: 16, sentiment: 'negative' },
      { text: 'terrible', size: 18, sentiment: 'negative' },
      { text: 'worst', size: 16, sentiment: 'negative' },
      { text: 'horrible', size: 14, sentiment: 'negative' },
      { text: 'awful', size: 12, sentiment: 'negative' },
    ];

    if (filter === 'all') return allWords;
    return allWords.filter(word => word.sentiment === filter);
  };

  /**
   * Get comment count for a specific length range
   * @param {number} min - Minimum length
   * @param {number} max - Maximum length
   * @returns {number} Number of comments in range
   */
  const getCommentCount = (min, max) => {
    const totalComments = 1247;
    const ranges = [
      { min: 0, max: 50 },
      { min: 51, max: 100 },
      { min: 101, max: 200 },
      { min: 201, max: 500 },
      { min: 501, max: Infinity }
    ];

    const rangeIndex = ranges.findIndex(range => range.min === min && range.max === max);
    if (rangeIndex === -1) return 0;

    return Math.round(totalComments / ranges.length);
  };

  const chartTypes = [
    {
      title: 'Sentiment Distribution',
      type: 'pie',
      icon: (
        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
        </svg>
      ),
      description: 'Visual breakdown of positive, negative, and neutral sentiments',
      gradient: 'from-blue-500 to-blue-600',
      bgGradient: 'from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/20',
      borderColor: 'border-blue-200 dark:border-blue-700/50',
      textColor: 'text-blue-700 dark:text-blue-300',
      subtextColor: 'text-blue-600 dark:text-blue-400'
    },
    {
      title: 'Sentiment Timeline',
      type: 'line',
      icon: (
        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
        </svg>
      ),
      description: 'Sentiment evolution over time',
      gradient: 'from-green-500 to-green-600',
      bgGradient: 'from-green-50 to-green-100 dark:from-green-900/30 dark:to-green-800/20',
      borderColor: 'border-green-200 dark:border-green-700/50',
      textColor: 'text-green-700 dark:text-green-300',
      subtextColor: 'text-green-600 dark:text-green-400'
    },
    {
      title: 'Comment Length Distribution',
      type: 'bar',
      icon: (
        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 00-2-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      description: 'Distribution of comment lengths',
      gradient: 'from-purple-500 to-purple-600',
      bgGradient: 'from-purple-50 to-purple-100 dark:from-purple-900/30 dark:to-purple-800/20',
      borderColor: 'border-purple-200 dark:border-purple-700/50',
      textColor: 'text-purple-700 dark:text-purple-300',
      subtextColor: 'text-purple-600 dark:text-purple-400'
    },
    {
      title: 'Word Cloud',
      type: 'wordcloud',
      icon: (
        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
        </svg>
      ),
      description: 'Most frequent words by sentiment',
      gradient: 'from-orange-500 to-orange-600',
      bgGradient: 'from-orange-50 to-orange-100 dark:from-orange-900/30 dark:to-orange-800/20',
      borderColor: 'border-orange-200 dark:border-orange-700/50',
      textColor: 'text-orange-700 dark:text-orange-300',
      subtextColor: 'text-orange-600 dark:text-orange-400'
    }
  ];

  return (
    <div className={`transition-all duration-500 ${isActive ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
      <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-xl p-3 sm:p-4 shadow-xl border border-gray-200 dark:border-gray-700">
        <h3 className="text-lg sm:text-xl font-bold text-gray-800 dark:text-gray-200 mb-3 sm:mb-4 flex items-center gap-2">
          <span className="text-xl sm:text-2xl">📊</span>
          Data Visualizations
        </h3>

        <div className="flex items-center justify-between mb-4">
          <div className="flex space-x-2">
            {chartTypes.map((_, index) => (
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
            Chart {currentStep + 1} of {chartTypes.length}
          </span>
        </div>

        {/* Step 1: Sentiment Distribution */}
        {progress <= 0.25 && (
          <div className="mb-3 sm:mb-4">
            <div className="flex items-center gap-3 mb-3 sm:mb-4 transform transition-all duration-500">
              <div className={`w-8 h-8 ${chartTypes[0].gradient} rounded-lg flex items-center justify-center`}>
                {chartTypes[0].icon}
              </div>
              <div>
                <h4 className={`text-base sm:text-lg font-semibold ${chartTypes[0].textColor}`}>
                  {chartTypes[0].title}
                </h4>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                  {chartTypes[0].description}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-3 sm:gap-4">
              {/* Pie Chart */}
              <div className="mt-4 h-64 bg-white dark:bg-gray-700 rounded-lg flex items-center justify-center shadow-inner">
                <svg viewBox="0 0 200 200" className="w-full h-full">

                  <path d="M100,100 L100,30 A70,70 0 0,1 170.2,100 Z" fill="#ef4444" stroke="#fff" strokeWidth="2"/>

                  <path d="M100,100 L29.8,100 A70,70 0 0,1 100,30 Z" fill="#6b7280" stroke="#fff" strokeWidth="2"/>

                  <path d="M100,100 L170.2,100 A70,70 0 0,1 29.8,100 Z" fill="#10b981" stroke="#fff" strokeWidth="2"/>

                  <g transform="translate(-20, 20)">
                    <circle cx="5" cy="5" r="4" fill="#ef4444"/>
                    <text x="15" y="9" className="text-xs fill-gray-700 dark:fill-gray-300">Negative </text>
                    
                    <circle cx="5" cy="20" r="4" fill="#6b7280"/>
                    <text x="15" y="24" className="text-xs fill-gray-700 dark:fill-gray-300">Neutral </text>
                    
                    <circle cx="5" cy="35" r="4" fill="#10b981"/>
                    <text x="15" y="39" className="text-xs fill-gray-700 dark:fill-gray-300">Positive</text>
                  </g>
                </svg>
              </div>
            </div>
          </div>
        )}

        {/* Step 2: Sentiment Timeline */}
        {progress > 0.25 && progress <= 0.5 && (
          <div className="mb-3 sm:mb-4">
            <div className="flex items-center gap-3 mb-3 sm:mb-4 transform transition-all duration-500">
              <div className={`w-8 h-8 ${chartTypes[1].gradient} rounded-lg flex items-center justify-center`}>
                {chartTypes[1].icon}
              </div>
              <div>
                <h4 className={`text-base sm:text-lg font-semibold ${chartTypes[1].textColor}`}>
                  {chartTypes[1].title}
                </h4>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                  {chartTypes[1].description}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-3 sm:gap-4">
              {/* Multi-Line Chart */}
              <div className="mt-4 h-64 bg-white dark:bg-gray-700 rounded-lg flex items-center justify-center shadow-inner">
                <svg viewBox="0 0 400 200" className="w-full h-full">
                  <defs>
                    <pattern id="timeline-grid" width="20" height="20" patternUnits="userSpaceOnUse">
                      <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#f3f4f6" strokeWidth="0.5"/>
                    </pattern>
                  </defs>
                  
                  <rect width="400" height="200" fill="url(#timeline-grid)" />
                  
                  <line x1="50" y1="160" x2="350" y2="160" stroke="#6b7280" strokeWidth="2"/>
                  <line x1="50" y1="20" x2="50" y2="160" stroke="#6b7280" strokeWidth="2"/>
                  
                  <line x1="50" y1="140" x2="350" y2="140" stroke="#e5e7eb" strokeWidth="1" strokeDasharray="2,2"/>
                  <line x1="50" y1="120" x2="350" y2="120" stroke="#e5e7eb" strokeWidth="1" strokeDasharray="2,2"/>
                  <line x1="50" y1="100" x2="350" y2="100" stroke="#e5e7eb" strokeWidth="1" strokeDasharray="2,2"/>
                  <line x1="50" y1="80" x2="350" y2="80" stroke="#e5e7eb" strokeWidth="1" strokeDasharray="2,2"/>
                  <line x1="50" y1="60" x2="350" y2="60" stroke="#e5e7eb" strokeWidth="1" strokeDasharray="2,2"/>
                  <line x1="50" y1="40" x2="350" y2="40" stroke="#e5e7eb" strokeWidth="1" strokeDasharray="2,2"/>
                  
                  <line x1="110" y1="20" x2="110" y2="160" stroke="#e5e7eb" strokeWidth="1" strokeDasharray="2,2"/>
                  <line x1="170" y1="20" x2="170" y2="160" stroke="#e5e7eb" strokeWidth="1" strokeDasharray="2,2"/>
                  <line x1="230" y1="20" x2="230" y2="160" stroke="#e5e7eb" strokeWidth="1" strokeDasharray="2,2"/>
                  <line x1="290" y1="20" x2="290" y2="160" stroke="#e5e7eb" strokeWidth="1" strokeDasharray="2,2"/>
                  
                  <polyline 
                    points="70,120 90,100 110,110 130,80 150,90 170,70 190,85 210,65 230,75 250,55 270,65 290,45 310,55 330,35"
                    fill="none" 
                    stroke="#10b981" 
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  
                  <polyline 
                    points="70,150 90,145 110,140 130,135 150,130 170,125 190,120 210,115 230,110 250,105 270,100 290,95 310,90 330,85"
                    fill="none" 
                    stroke="#ef4444" 
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  
                  <polyline 
                    points="70,135 90,125 110,130 130,115 150,120 170,105 190,110 210,95 230,100 250,85 270,90 290,75 310,80 330,70"
                    fill="none" 
                    stroke="#6b7280" 
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  
                  <circle cx="70" cy="120" r="3" fill="#10b981" stroke="#ffffff" strokeWidth="2"/>
                  <circle cx="90" cy="100" r="3" fill="#10b981" stroke="#ffffff" strokeWidth="2"/>
                  <circle cx="110" cy="110" r="3" fill="#10b981" stroke="#ffffff" strokeWidth="2"/>
                  <circle cx="130" cy="80" r="3" fill="#10b981" stroke="#ffffff" strokeWidth="2"/>
                  <circle cx="150" cy="90" r="3" fill="#10b981" stroke="#ffffff" strokeWidth="2"/>
                  <circle cx="170" cy="70" r="3" fill="#10b981" stroke="#ffffff" strokeWidth="2"/>
                  <circle cx="190" cy="85" r="3" fill="#10b981" stroke="#ffffff" strokeWidth="2"/>
                  <circle cx="210" cy="65" r="3" fill="#10b981" stroke="#ffffff" strokeWidth="2"/>
                  <circle cx="230" cy="75" r="3" fill="#10b981" stroke="#ffffff" strokeWidth="2"/>
                  <circle cx="250" cy="55" r="3" fill="#10b981" stroke="#ffffff" strokeWidth="2"/>
                  <circle cx="270" cy="65" r="3" fill="#10b981" stroke="#ffffff" strokeWidth="2"/>
                  <circle cx="290" cy="45" r="3" fill="#10b981" stroke="#ffffff" strokeWidth="2"/>
                  <circle cx="310" cy="55" r="3" fill="#10b981" stroke="#ffffff" strokeWidth="2"/>
                  <circle cx="330" cy="35" r="3" fill="#10b981" stroke="#ffffff" strokeWidth="2"/>
                  
                  <circle cx="70" cy="150" r="3" fill="#ef4444" stroke="#ffffff" strokeWidth="2"/>
                  <circle cx="90" cy="145" r="3" fill="#ef4444" stroke="#ffffff" strokeWidth="2"/>
                  <circle cx="110" cy="140" r="3" fill="#ef4444" stroke="#ffffff" strokeWidth="2"/>
                  <circle cx="130" cy="135" r="3" fill="#ef4444" stroke="#ffffff" strokeWidth="2"/>
                  <circle cx="150" cy="130" r="3" fill="#ef4444" stroke="#ffffff" strokeWidth="2"/>
                  <circle cx="170" cy="125" r="3" fill="#ef4444" stroke="#ffffff" strokeWidth="2"/>
                  <circle cx="190" cy="120" r="3" fill="#ef4444" stroke="#ffffff" strokeWidth="2"/>
                  <circle cx="210" cy="115" r="3" fill="#ef4444" stroke="#ffffff" strokeWidth="2"/>
                  <circle cx="230" cy="110" r="3" fill="#ef4444" stroke="#ffffff" strokeWidth="2"/>
                  <circle cx="250" cy="105" r="3" fill="#ef4444" stroke="#ffffff" strokeWidth="2"/>
                  <circle cx="270" cy="100" r="3" fill="#ef4444" stroke="#ffffff" strokeWidth="2"/>
                  <circle cx="290" cy="95" r="3" fill="#ef4444" stroke="#ffffff" strokeWidth="2"/>
                  <circle cx="310" cy="90" r="3" fill="#ef4444" stroke="#ffffff" strokeWidth="2"/>
                  <circle cx="330" cy="85" r="3" fill="#ef4444" stroke="#ffffff" strokeWidth="2"/>
                  
                  <circle cx="70" cy="135" r="3" fill="#6b7280" stroke="#ffffff" strokeWidth="2"/>
                  <circle cx="90" cy="125" r="3" fill="#6b7280" stroke="#ffffff" strokeWidth="2"/>
                  <circle cx="110" cy="130" r="3" fill="#6b7280" stroke="#ffffff" strokeWidth="2"/>
                  <circle cx="130" cy="115" r="3" fill="#6b7280" stroke="#ffffff" strokeWidth="2"/>
                  <circle cx="150" cy="120" r="3" fill="#6b7280" stroke="#ffffff" strokeWidth="2"/>
                  <circle cx="170" cy="105" r="3" fill="#6b7280" stroke="#ffffff" strokeWidth="2"/>
                  <circle cx="190" cy="110" r="3" fill="#6b7280" stroke="#ffffff" strokeWidth="2"/>
                  <circle cx="210" cy="95" r="3" fill="#6b7280" stroke="#ffffff" strokeWidth="2"/>
                  <circle cx="230" cy="100" r="3" fill="#6b7280" stroke="#ffffff" strokeWidth="2"/>
                  <circle cx="250" cy="85" r="3" fill="#6b7280" stroke="#ffffff" strokeWidth="2"/>
                  <circle cx="270" cy="90" r="3" fill="#6b7280" stroke="#ffffff" strokeWidth="2"/>
                  <circle cx="290" cy="75" r="3" fill="#6b7280" stroke="#ffffff" strokeWidth="2"/>
                  <circle cx="310" cy="80" r="3" fill="#6b7280" stroke="#ffffff" strokeWidth="2"/>
                  <circle cx="330" cy="70" r="3" fill="#6b7280" stroke="#ffffff" strokeWidth="2"/>
                  
                  <text x="70" y="175" className="text-xs fill-gray-600 text-center font-medium">Jan 1</text>
                  <text x="110" y="175" className="text-xs fill-gray-600 text-center font-medium">Jan 8</text>
                  <text x="150" y="175" className="text-xs fill-gray-600 text-center font-medium">Jan 15</text>
                  <text x="190" y="175" className="text-xs fill-gray-600 text-center font-medium">Jan 22</text>
                  <text x="230" y="175" className="text-xs fill-gray-600 text-center font-medium">Jan 29</text>
                  <text x="270" y="175" className="text-xs fill-gray-600 text-center font-medium">Feb 5</text>
                  <text x="310" y="175" className="text-xs fill-gray-600 text-center font-medium">Feb 12</text>
                  
                  <text x="40" y="25" className="text-xs fill-gray-600 font-medium">80</text>
                  <text x="40" y="45" className="text-xs fill-gray-600 font-medium">60</text>
                  <text x="40" y="65" className="text-xs fill-gray-600 font-medium">40</text>
                  <text x="40" y="85" className="text-xs fill-gray-600 font-medium">20</text>
                  <text x="40" y="105" className="text-xs fill-gray-600 font-medium">0</text>
                  
                  <text x="200" y="190" className="text-sm fill-gray-700 text-center font-semibold">Date</text>
                  <text x="10" y="90" className="text-sm fill-gray-700 font-semibold" transform="rotate(-90 20,90)">Comments</text>

                  <g transform="translate(70, 25)">
                    <line x1="0" y1="0" x2="12" y2="0" stroke="#10b981" strokeWidth="2" strokeLinecap="round"/>
                    <text x="15" y="4" className="text-xs fill-gray-600 font-medium">Pos</text>
                    
                    <line x1="0" y1="12" x2="12" y2="12" stroke="#ef4444" strokeWidth="2" strokeLinecap="round"/>
                    <text x="15" y="16" className="text-xs fill-gray-600 font-medium">Neg</text>
                    
                    <line x1="0" y1="24" x2="12" y2="24" stroke="#6b7280" strokeWidth="2" strokeLinecap="round"/>
                    <text x="15" y="28" className="text-xs fill-gray-600 font-medium">Neu</text>
                  </g>
                </svg>
              </div>
            </div>
          </div>
        )}

        {/* Step 3: Comment Length Distribution */}
        {progress > 0.5 && progress <= 0.75 && (
          <div className="mb-3 sm:mb-4">
            <div className="flex items-center gap-3 mb-3 sm:mb-4 transform transition-all duration-500">
              <div className={`w-8 h-8 ${chartTypes[2].gradient} rounded-lg flex items-center justify-center`}>
                {chartTypes[2].icon}
              </div>
              <div>
                <h4 className={`text-base sm:text-lg font-semibold ${chartTypes[2].textColor}`}>
                  {chartTypes[2].title}
                </h4>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                  {chartTypes[2].description}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-3 sm:gap-4">
              {/* Bar Chart */}
              <div className="h-56 bg-white dark:bg-gray-700 rounded-lg flex items-center justify-center shadow-inner">
                <svg viewBox="0 0 500 200" className="w-full h-full">
                  <defs>
                    <pattern id="grid-bg" width="20" height="20" patternUnits="userSpaceOnUse">
                      <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#f3f4f6" strokeWidth="0.5"/>
                    </pattern>
                  </defs>
                  <rect width="500" height="200" fill="url(#grid-bg)" />
                  
                  <line x1="70" y1="170" x2="430" y2="170" stroke="#6b7280" strokeWidth="2"/>
                  <line x1="70" y1="20" x2="70" y2="170" stroke="#6b7280" strokeWidth="2"/>
                  
                  <rect x="90" y="130" width="35" height="40" fill="#3b82f6" rx="5"/>
                  <rect x="150" y="110" width="35" height="60" fill="#8b5cf6" rx="5"/>
                  <rect x="210" y="90" width="35" height="80" fill="#10b981" rx="5"/>
                  <rect x="270" y="100" width="35" height="70" fill="#f59e0b" rx="5"/>
                  <rect x="330" y="120" width="35" height="50" fill="#ef4444" rx="5"/>
                  
                  <text x="107.5" y="185" className="text-xs fill-gray-600 text-center font-medium">0-50</text>
                  <text x="167.5" y="185" className="text-xs fill-gray-600 text-center font-medium">51-100</text>
                  <text x="227.5" y="185" className="text-xs fill-gray-600 text-center font-medium">101-200</text>
                  <text x="287.5" y="185" className="text-xs fill-gray-600 text-center font-medium">201-500</text>
                  <text x="347.5" y="185" className="text-xs fill-gray-600 text-center font-medium">500+</text>
                  
                  <text x="55" y="25" className="text-xs fill-gray-600 font-medium">100</text>
                  <text x="55" y="55" className="text-xs fill-gray-600 font-medium">80</text>
                  <text x="55" y="85" className="text-xs fill-gray-600 font-medium">60</text>
                  <text x="55" y="115" className="text-xs fill-gray-600 font-medium">40</text>
                  <text x="55" y="145" className="text-xs fill-gray-600 font-medium">20</text>
                  <text x="55" y="175" className="text-xs fill-gray-600 font-medium">0</text>
                  
                  <text x="250" y="195" className="text-sm fill-gray-700 text-center font-semibold">Comment Length (words)</text>
                  <text x="30" y="95" className="text-sm fill-gray-700 font-semibold" transform="rotate(-90, 30, 95)">Count</text>
                </svg>
              </div>
            </div>
          </div>
        )}

        {/* Step 4: Word Cloud */}
        {progress > 0.75 && (
          <div className={`transition-all duration-1000 ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <div className="pt-4 sm:pt-6">
              <h4 className={`text-base sm:text-lg font-semibold ${chartTypes[3].textColor} mb-2 flex items-center gap-2`}>
                <span className="text-base sm:text-lg">☁️</span>
                {chartTypes[3].title}
              </h4>

              <div className="grid grid-cols-1 gap-1.5 sm:gap-2">
                <div className="flex justify-center gap-1 mb-1">
                  {[
                    { key: 'all', label: 'All', color: 'bg-gray-500' },
                    { key: 'positive', label: 'Pos', color: 'bg-green-500' },
                    { key: 'neutral', label: 'Neu', color: 'bg-blue-500' },
                    { key: 'negative', label: 'Neg', color: 'bg-red-500' }
                  ].map(({ key, label, color }) => (
                    <button
                      key={key}
                      onClick={() => setWordCloudFilter(key)}
                      className={`px-1.5 py-0.5 rounded-full text-xs font-medium transition-all duration-200 ${
                        wordCloudFilter === key
                          ? `${color} text-white shadow-sm`
                          : 'bg-gray-200 text-gray-600 dark:bg-gray-700 dark:text-gray-300'
                      }`}
                    >
                      {label}
                    </button>
                  ))}
                </div>

                {wordCloudFilter === 'all' ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1 sm:gap-1.5">
                    {['positive', 'neutral', 'negative'].map((sentiment, index) => {
                      const words = getWordCloudData(sentiment);
                      return (
                        <div
                          key={sentiment}
                          className={`rounded-md p-1.5 transition-all duration-200 ${
                            sentiment === 'positive'
                              ? 'bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border border-green-200 dark:border-green-800'
                              : sentiment === 'negative'
                              ? 'bg-gradient-to-br from-red-50 to-rose-50 dark:from-red-900/20 dark:to-rose-900/20 border border-red-200 dark:border-red-800'
                              : 'bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 border border-blue-200 dark:border-blue-800'
                          }`}
                          style={{ animationDelay: `${index * 50}ms` }}
                        >
                          <div className="text-center mb-0.5">
                            <h5 className={`text-xs font-semibold capitalize ${
                              sentiment === 'positive'
                                ? 'text-green-700 dark:text-green-300'
                                : sentiment === 'negative'
                                ? 'text-red-700 dark:text-red-300'
                                : 'text-blue-700 dark:text-blue-300'
                            }`}>
                              {sentiment}
                            </h5>
                            <div className={`inline-flex items-center px-1 py-0.5 rounded-full text-xs font-medium ${
                              sentiment === 'positive'
                                ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300'
                                : sentiment === 'negative'
                                ? 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300'
                                : 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300'
                            }`}>
                              {words.length}
                            </div>
                          </div>

                          <div className="h-16 flex items-center justify-center">
                            <svg viewBox="0 0 140 70" className="w-full h-full">
                              <rect width="140" height="70" fill="transparent"/>
                              {words.slice(0, 3).map((word, idx) => (
                                <text
                                  key={idx}
                                  x={10 + (idx % 2) * 60}
                                  y={18 + Math.floor(idx / 2) * 20}
                                  className={`font-medium ${
                                    sentiment === 'positive' ? 'fill-green-600' :
                                    sentiment === 'negative' ? 'fill-red-600' : 'fill-blue-600'
                                  }`}
                                  style={{ fontSize: `${Math.min(word.size * 0.6, 14)}px` }}
                                >
                                  {word.text}
                                </text>
                              ))}
                            </svg>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  <div className="bg-white dark:bg-gray-800 rounded-md p-2 border border-gray-200 dark:border-gray-700">
                    <div className="text-center mb-1.5">
                      <h5 className={`text-sm font-semibold capitalize mb-0.5 ${
                        wordCloudFilter === 'positive'
                          ? 'text-green-700 dark:text-green-300'
                          : wordCloudFilter === 'negative'
                          ? 'text-red-700 dark:text-red-300'
                          : 'text-blue-700 dark:text-blue-300'
                      }`}>
                        {wordCloudFilter} Words
                      </h5>
                      <div className={`inline-flex items-center px-1.5 py-0.5 rounded-full text-xs font-medium ${
                        wordCloudFilter === 'positive'
                          ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300'
                          : wordCloudFilter === 'negative'
                          ? 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300'
                          : 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300'
                      }`}>
                        {getWordCloudData(wordCloudFilter).length}
                      </div>
                    </div>

                    <div className="h-28 flex items-center justify-center">
                      <svg viewBox="0 0 200 80" className="w-full h-full">
                        <rect width="200" height="80" fill="transparent"/>
                        {getWordCloudData(wordCloudFilter).slice(0, 6).map((word, idx) => (
                          <text
                            key={idx}
                            x={15 + (idx % 3) * 60}
                            y={18 + Math.floor(idx / 3) * 18}
                            className={`font-medium ${
                              wordCloudFilter === 'positive' ? 'fill-green-600' :
                              wordCloudFilter === 'negative' ? 'fill-red-600' : 'fill-blue-600'
                            }`}
                            style={{ fontSize: `${Math.min(word.size * 0.7, 16)}px` }}
                          >
                            {word.text}
                          </text>
                        ))}
                      </svg>
                    </div>
                  </div>
                )}

                <div className="mt-2 flex items-center justify-center gap-2 text-xs text-gray-600 dark:text-gray-400">
                  <div className="flex items-center gap-0.5">
                    <div className="w-1.5 h-1.5 bg-gradient-to-r from-green-400 to-green-600 rounded-full"></div>
                    <span>High</span>
                  </div>
                  <div className="flex items-center gap-0.5">
                    <div className="w-1.5 h-1.5 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full"></div>
                    <span>Med</span>
                  </div>
                  <div className="flex items-center gap-0.5">
                    <div className="w-1.5 h-1.5 bg-gradient-to-r from-gray-400 to-gray-600 rounded-full"></div>
                    <span>Low</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChartsSection;
