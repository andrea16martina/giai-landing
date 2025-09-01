import React from 'react';

/**
 * StatisticsSection - Analysis statistics display
 *
 * Shows comprehensive statistics divided into sentiment analysis and analytics dashboard
 * with key metrics and performance indicators.
 *
 * @component
 * @param {Object} props - Component properties
 * @param {number} props.progress - Animation progress (0-1)
 * @param {boolean} props.isActive - Whether section is currently active
 * @returns {JSX.Element} Statistics dashboard with metrics
 */
const StatisticsSection = ({ progress, isActive }) => {
  const sentimentStats = [
    {
      label: 'Positivity',
      value: '78%',
      icon: (
        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      gradient: 'from-green-500 to-emerald-600',
      bgGradient: 'from-green-50 to-emerald-50 dark:from-green-900/30 dark:to-emerald-800/20',
      borderColor: 'border-green-200 dark:border-green-700/50',
      textColor: 'text-green-700 dark:text-green-300',
      subtextColor: 'text-green-600 dark:text-green-400'
    },
    {
      label: 'Negativity',
      value: '12%',
      icon: (
        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      gradient: 'from-red-500 to-rose-600',
      bgGradient: 'from-red-50 to-rose-50 dark:from-red-900/30 dark:to-rose-800/20',
      borderColor: 'border-red-200 dark:border-red-700/50',
      textColor: 'text-red-700 dark:text-red-300',
      subtextColor: 'text-red-600 dark:text-red-400'
    },
    {
      label: 'Polarization',
      value: '0.65',
      icon: (
        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      gradient: 'from-blue-500 to-cyan-600',
      bgGradient: 'from-blue-50 to-cyan-50 dark:from-blue-900/30 dark:to-cyan-800/20',
      borderColor: 'border-blue-200 dark:border-blue-700/50',
      textColor: 'text-blue-700 dark:text-blue-300',
      subtextColor: 'text-blue-600 dark:text-blue-400'
    },
    {
      label: 'Avg Toxicity',
      value: '0.23',
      icon: (
        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
      ),
      gradient: 'from-amber-500 to-yellow-600',
      bgGradient: 'from-amber-50 to-yellow-50 dark:from-amber-900/30 dark:to-yellow-800/20',
      borderColor: 'border-amber-200 dark:border-amber-700/50',
      textColor: 'text-amber-700 dark:text-amber-300',
      subtextColor: 'text-amber-600 dark:text-amber-400'
    },
    {
      label: 'Toxic Comments',
      value: '8',
      icon: (
        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      ),
      gradient: 'from-orange-500 to-red-600',
      bgGradient: 'from-orange-50 to-red-50 dark:from-orange-900/30 dark:to-red-800/20',
      borderColor: 'border-orange-200 dark:border-orange-700/50',
      textColor: 'text-orange-700 dark:text-orange-300',
      subtextColor: 'text-orange-600 dark:text-orange-400'
    }
  ];

  const analyticsStats = [
    {
      label: 'Comments',
      value: '1,247',
      icon: (
        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
      gradient: 'from-blue-500 to-blue-600',
      bgGradient: 'from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/20',
      borderColor: 'border-blue-200 dark:border-blue-700/50',
      textColor: 'text-blue-700 dark:text-blue-300',
      subtextColor: 'text-blue-600 dark:text-blue-400'
    },
    {
      label: 'Engagement',
      value: '23.4%',
      icon: (
        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      gradient: 'from-purple-500 to-purple-600',
      bgGradient: 'from-purple-50 to-purple-100 dark:from-purple-900/30 dark:to-purple-800/20',
      borderColor: 'border-purple-200 dark:border-purple-700/50',
      textColor: 'text-purple-700 dark:text-purple-300',
      subtextColor: 'text-purple-600 dark:text-purple-400'
    },
    {
      label: 'Topic Variation',
      value: '12',
      icon: (
        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
        </svg>
      ),
      gradient: 'from-green-500 to-green-600',
      bgGradient: 'from-green-50 to-green-100 dark:from-green-900/30 dark:to-green-800/20',
      borderColor: 'border-green-200 dark:border-green-700/50',
      textColor: 'text-green-700 dark:text-green-300',
      subtextColor: 'text-green-600 dark:text-green-400'
    },
    {
      label: 'Avg Length',
      value: '142',
      icon: (
        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 00-2-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      gradient: 'from-orange-500 to-orange-600',
      bgGradient: 'from-orange-50 to-orange-100 dark:from-orange-900/30 dark:to-orange-800/20',
      borderColor: 'border-orange-200 dark:border-orange-700/50',
      textColor: 'text-orange-700 dark:text-orange-300',
      subtextColor: 'text-orange-600 dark:text-orange-400'
    }
  ];

  return (
    <div className={`transition-all duration-500 ${isActive ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
      <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-xl p-4 sm:p-6 shadow-xl border border-gray-200 dark:border-gray-700">
        <h3 className="text-lg sm:text-xl font-bold text-gray-800 dark:text-gray-200 mb-4 sm:mb-6 flex items-center gap-2">
          <span className="text-xl sm:text-2xl">📊</span>
          Statistics
        </h3>

        {/* Step 1: Sentiment Statistics - Visible before 50% progress */}
        {progress <= 0.5 && (
          <div className="mb-6 sm:mb-8">
            {/* Header section */}
            <div className="flex items-center gap-3 mb-4 sm:mb-6 transform transition-all duration-500">
              <div className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 00-2-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <div>
                <h4 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-gray-100">
                  Sentiment Analysis
                </h4>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                  Detailed breakdown of community sentiment metrics
                </p>
              </div>
            </div>

            {/* Mobile-first responsive grid */}
            <div className="grid grid-cols-1 gap-3 sm:gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
              {sentimentStats.map((stat, index) => (
                <div
                  key={stat.label}
                  className={`bg-gradient-to-br ${stat.bgGradient} rounded-lg sm:rounded-xl p-3 sm:p-4 border ${stat.borderColor} transition-all duration-500 transform-gpu`}
                  style={{
                    animation: isActive ? `fadeInUp 0.6s ease-out ${index * 0.1}s both` : 'none'
                  }}
                >
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className={`w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r ${stat.gradient} rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300`}>
                      {stat.icon}
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className={`text-lg sm:text-xl font-bold ${stat.textColor} truncate`}>
                        {stat.value}
                      </div>
                      <div className={`text-xs ${stat.subtextColor} font-medium`}>
                        {stat.label}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Step 2: Analytics Dashboard - Replaces sentiment stats after 50% progress */}
        {progress > 0.5 && (
          <div className={`transition-all duration-1000 ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <div className="pt-6 sm:pt-8">
              <h4 className="text-base sm:text-lg font-semibold text-gray-700 dark:text-gray-300 mb-3 flex items-center gap-2">
                <span className="text-base sm:text-lg">📈</span>
                Analytics Dashboard
              </h4>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4 sm:gap-4">
                {analyticsStats.map((stat, index) => (
                  <div
                    key={stat.label}
                    className={`bg-gradient-to-br ${stat.bgGradient} rounded-lg sm:rounded-xl p-3 sm:p-4 border ${stat.borderColor} transition-all duration-500 transform-gpu`}
                    style={{
                      animation: isActive ? `fadeInUp 0.6s ease-out ${index * 0.1}s both` : 'none'
                    }}
                  >
                    <div className="flex items-center gap-2 sm:gap-3">
                      <div className={`w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r ${stat.gradient} rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300`}>
                        {stat.icon}
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className={`text-lg sm:text-xl font-bold ${stat.textColor} truncate`}>
                          {stat.value}
                        </div>
                        <div className={`text-xs ${stat.subtextColor} font-medium`}>
                          {stat.label}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default StatisticsSection;
