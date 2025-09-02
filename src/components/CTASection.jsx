import React from "react";

/**
 * CTASection - Call to Action section for GIAI tool
 *
 * Final call-to-action section that encourages users to try the GIAI YouTube comments
 * analysis tool. Features completion messaging, feature highlights, and direct link
 * to the application. Designed for mobile-first with clean, conversion-focused design.
 *
 * @component
 * @returns {JSX.Element} Conversion-optimized CTA section with feature highlights
 */
const CTASection = () => {
  return (
    <section
      id="cta"
      className="relative w-full overflow-hidden py-12"
    >
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-cyan-500 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-purple-500 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-green-100 dark:bg-green-900/30 rounded-full mb-8">
            <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-green-800 dark:text-green-200 font-medium">
              You've explored GIAI's capabilities!
            </span>
          </div>

          <h2 className="text-2xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent leading-tight md:leading-[1.35]">
            Ready to Start Analyzing?
          </h2>

          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            You've seen how GIAI can transform your YouTube comments into actionable insights.
            Now it's time to try it yourself - completely free, no registration required.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="text-center p-6 bg-white/50 dark:bg-gray-800/50 rounded-xl backdrop-blur-sm">
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/50 rounded-lg flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🎯</span>
            </div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Instant Analysis</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">Get insights in seconds, not hours</p>
          </div>

          <div className="text-center p-6 bg-white/50 dark:bg-gray-800/50 rounded-xl backdrop-blur-sm">
            <div className="w-12 h-12 bg-cyan-100 dark:bg-cyan-900/50 rounded-lg flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🔒</span>
            </div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">100% Private</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">Your data stays on your device</p>
          </div>

          <div className="text-center p-6 bg-white/50 dark:bg-gray-800/50 rounded-xl backdrop-blur-sm">
            <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/50 rounded-lg flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🚀</span>
            </div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Free Forever</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">No limits, no subscriptions</p>
          </div>
        </div>

        <div className="text-center mb-8">
          <a
            href="https://andreamartina.vercel.app"
            rel="noopener noreferrer"
            className="group relative inline-block px-12 py-5 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold text-xl rounded-2xl shadow-2xl hover:shadow-blue-500/50 transform hover:scale-105 transition-all duration-300 overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-3">
              🚀 Launch GIAI Now
              <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </a>
        </div>

        <div className="text-center">
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
            ✓ No account needed • ✓ Export results for offline use • ✓ Instant results
          </p>

          <div className="flex items-center justify-center space-x-8 opacity-70">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">247</div>
              <div className="text-xs text-gray-500 dark:text-gray-400">Beta Users</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-cyan-600 dark:text-cyan-400">4.8/5</div>
              <div className="text-xs text-gray-500 dark:text-gray-400">User Rating</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">∞</div>
              <div className="text-xs text-gray-500 dark:text-gray-400">Free Forever</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
