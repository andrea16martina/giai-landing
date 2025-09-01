import React from "react";

/**
 * Renovation - Under development placeholder section
 *
 * Displays a maintenance/under construction message when content is being
 * developed or renovated. Features responsive typography, dark mode support,
 * and clear user communication about ongoing work.
 *
 * @component
 * @returns {JSX.Element} Placeholder section with renovation messaging
 *
 * @example
 * ```jsx
 * <Renovation />
 * ```
 */
const Renovation = () => (
  <section
    id="explore"
    className="relative w-full min-h-screen overflow-hidden flex items-center justify-center"
  >
    <div className="relative z-10 text-center px-4">
      <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
        <span className="text-blue-700 dark:text-blue-300">🚧</span> Page Under Renovation
      </h2>
      <p className="text-lg md:text-xl mb-4 text-gray-700 dark:text-gray-200 max-w-2xl mx-auto leading-relaxed">
        We're working hard to improve this page. Please check back soon!
      </p>
      <p className="text-sm md:text-base text-gray-600 dark:text-gray-300">
        Thank you for your patience.
      </p>
    </div>
  </section>
);

export default Renovation;