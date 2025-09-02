import React, { useState, useEffect } from 'react';

/**
 * ActionsSection - User actions panel for analysis results
 *
 * Provides action buttons for interacting with analysis results including
 * copy summary, share URL, export options, and local storage save functionality.
 *
 * @component
 * @param {Object} props - Component properties
 * @param {number} props.progress - Animation progress (0-1)
 * @param {boolean} props.isActive - Whether section is currently active
 * @returns {JSX.Element} Actions panel with interactive buttons
 */
const ActionsSection = ({ progress, isActive }) => {
  /**
   * Menu open state
   * @type {[boolean, React.Dispatch<React.SetStateAction<boolean>>]}
   */
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  /**
   * Selected export option
   * @type {[string, React.Dispatch<React.SetStateAction<string>>]}
   */
  const [selectedOption, setSelectedOption] = useState('');

  /**
   * Export loading state
   * @type {[boolean, React.Dispatch<React.SetStateAction<boolean>>]}
   */
  const [isExporting, setIsExporting] = useState(false);

  const exportOptions = [
    { format: 'pdf', name: 'PDF Document', description: 'Professional PDF report', icon: '📄' },
    { format: 'html', name: 'HTML Page', description: 'Interactive web page', icon: '🌐' },
    { format: 'markdown', name: 'Markdown', description: 'Text format for docs', icon: '📝' },
    { format: 'csv', name: 'CSV Data', description: 'Spreadsheet format', icon: '📊' }
  ];

  /**
   * Handles animation states based on progress
   */
  useEffect(() => {
    if (progress > 0.3 && progress < 0.7) {
      if (!isMenuOpen) {
        setIsMenuOpen(true);
      }
    } else if (progress >= 0.7 && progress < 0.9) {
      if (!selectedOption) {
        setSelectedOption('pdf');
      }
    } else if (progress >= 0.9) {
      if (!isExporting) {
        setIsExporting(true);
      }
    }
  }, [progress, isMenuOpen, selectedOption, isExporting]);

  /**
   * Resets states when section becomes inactive
   */
  useEffect(() => {
    if (!isActive) {
      setIsMenuOpen(false);
      setSelectedOption('');
      setIsExporting(false);
    }
  }, [isActive]);

  return (
    <div className={`transition-all duration-500 ${isActive ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
      <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-xl p-6 shadow-xl border border-gray-200 dark:border-gray-700">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-0">
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center flex-shrink-0">
              <span className="text-white text-lg">✓</span>
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white leading-tight">
                Analysis Complete
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">1,247 comments analyzed</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 w-full sm:w-auto mt-2 sm:mt-0 justify-end sm:justify-start">
            <div className="flex flex-wrap gap-2 p-3 bg-white/50 dark:bg-gray-800/50 rounded-lg border border-gray-200 dark:border-gray-600">
              <div className="flex items-center gap-2 px-3 py-2 bg-blue-100 hover:bg-blue-200 dark:bg-blue-900/30 dark:hover:bg-blue-900/50 rounded-lg text-sm font-medium transition-all duration-200">
                📋 Copy Summary
              </div>

              <div className="flex items-center gap-2 px-3 py-2 bg-green-100 hover:bg-green-200 dark:bg-green-900/30 dark:hover:bg-green-900/50 rounded-lg text-sm font-medium transition-all duration-200">
                🔗 Share URL
              </div>

              <div className="relative">
                <div className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  isMenuOpen
                    ? 'bg-red-200 dark:bg-red-900/50 shadow-lg transform scale-105'
                    : 'bg-red-100 dark:bg-red-900/30 hover:bg-red-200 dark:hover:bg-red-900/50'
                }`}>
                  <svg className={`w-4 h-4 transition-all duration-300 ${isMenuOpen ? 'scale-110 text-red-600 dark:text-red-400' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <span className="transition-all duration-300">Export</span>
                  <svg className={`w-4 h-4 transition-all duration-500 ${isMenuOpen ? 'rotate-180 scale-110' : 'rotate-0'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>

                <div className={`absolute top-full left-0 mt-2 z-20 transition-all duration-500 ease-out ${
                  isMenuOpen
                    ? 'opacity-100 translate-y-0 scale-100'
                    : 'opacity-0 -translate-y-2 scale-95 pointer-events-none'
                }`}>
                  <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-600 overflow-hidden backdrop-blur-sm min-w-[280px] max-w-[320px]">
                    <div className="border-b border-gray-200 dark:border-gray-700 px-3 py-2 bg-gradient-to-r from-gray-50 to-white dark:from-gray-800 dark:to-gray-700">
                      <h4 className="font-medium text-gray-900 dark:text-gray-100 text-xs flex items-center gap-2">
                        <svg className="w-3 h-3 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        Export Analysis
                      </h4>
                    </div>

                    <div className="p-2">
                      {exportOptions.map((option, index) => (
                        <div
                          key={option.format}
                          className={`w-full transition-all duration-400 ease-out text-left p-2 rounded-md mb-1 ${
                            selectedOption === option.format
                              ? 'bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800'
                              : 'hover:bg-gray-50 dark:hover:bg-gray-800/50'
                          }`}
                          style={{
                            animationDelay: isMenuOpen ? `${index * 80}ms` : '0ms',
                            transform: isMenuOpen ? 'translateX(0)' : 'translateX(-8px)',
                            opacity: isMenuOpen ? 1 : 0
                          }}
                        >
                          <div className="flex items-center gap-2">
                            <span className={`flex-shrink-0 text-base transition-all duration-300 ${
                              selectedOption === option.format ? 'scale-110 text-blue-500' : ''
                            }`}>
                              {option.icon}
                            </span>

                            <div className="flex-1 min-w-0">
                              <div className="flex items-center justify-between">
                                <h4 className={`font-medium transition-all duration-300 text-xs leading-tight ${
                                  selectedOption === option.format
                                    ? 'text-blue-700 dark:text-blue-300'
                                    : 'text-gray-900 dark:text-gray-100'
                                }`}>
                                  {option.name}
                                </h4>
                                {selectedOption === option.format && (
                                  <span className="text-green-500 text-xs font-bold">✓</span>
                                )}
                              </div>
                              <p className={`text-xs transition-all duration-300 leading-tight ${
                                selectedOption === option.format
                                  ? 'text-blue-600 dark:text-blue-400'
                                  : 'text-gray-500 dark:text-gray-400'
                              }`}>
                                {option.description}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    {isExporting && (
                      <div className="px-3 py-2 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border-t border-gray-200 dark:border-gray-700">
                        <div className="flex items-center justify-center gap-2 text-xs">
                          <div className="relative">
                            <div className="w-4 h-4 border-2 border-green-500 border-t-transparent rounded-full animate-spin"></div>
                          </div>
                          <span className="text-green-700 dark:text-green-400 font-medium">
                            Exporting {selectedOption.toUpperCase()}...
                          </span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 px-3 py-2 bg-orange-100 hover:bg-orange-200 dark:bg-orange-900/30 dark:hover:bg-orange-900/50 rounded-lg text-sm font-medium transition-all duration-200">
                💾 Save Complete
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActionsSection;