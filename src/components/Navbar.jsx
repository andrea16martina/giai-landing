import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { createPortal } from 'react-dom';

/**
 * Navbar - Fixed navigation bar component
 *
 * Displays a responsive navigation bar with logo, branding, and call-to-action button.
 * Uses React Portal to render outside the normal DOM hierarchy for proper z-indexing
 * and positioning. Features dark mode support and smooth hover animations.
 *
 * @component
 * @returns {JSX.Element} Fixed navigation bar rendered via portal
 *
 * @example
 * ```jsx
 * <Navbar />
 * ```
 */
export default function Navbar() {
  /**
   * Portal container element for rendering navbar outside normal DOM hierarchy
   * @type {[HTMLElement|null, function]}
   */
  const [portalEl, setPortalEl] = useState(null);

  useEffect(() => {
    const el = document.createElement('div');
    el.setAttribute('id', 'navbar-portal');
    document.body.appendChild(el);
    setPortalEl(el);
    return () => {
      try {
        document.body.removeChild(el);
      } catch (e) {
        // ignore
      }
    };
  }, []);

  const header = (
    <header className="fixed top-0 left-0 right-0 z-[9999] w-full h-12 sm:h-14 px-2 sm:px-4 flex justify-between items-center border-b border-blue-500 shadow-lg transition-colors overflow-visible bg-white/95 dark:bg-gray-900/95 backdrop-blur-md">
      <Link to="/" className="flex items-center h-full relative z-10">
        <img
          src="/logo_toolSVGw.svg"
          alt="Gi AI Logo"
          className="w-12 h-12 sm:w-16 sm:h-16 object-contain flex items-center invert dark:invert-0"
        />
        <span className="text-xs mr-1 sm:mr-2 font-normal text-blue-700 dark:text-blue-300 whitespace-nowrap">
          AI
        </span>
      </Link>
      <div className="flex items-center gap-4 relative z-10">
        <a
          href="https://andreamartina.vercel.app/tool"
          className="group text-sm sm:text-base px-3 py-1 rounded-full font-semibold bg-blue-900 text-blue-100 border border-blue-500 shadow-sm hover:bg-blue-800 hover:text-blue-100 transition-all duration-150 backdrop-blur focus:outline-none focus:ring-2 focus:ring-blue-400 relative overflow-hidden"
        >
          <span className="relative z-10 flex items-center gap-2">
            Launch Tool
            <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </span>
          <span className="absolute inset-0 rounded-full pointer-events-none group-hover:shadow-[0_0_20px_5px_rgba(59,130,246,0.15)] transition-all duration-200"></span>
        </a>
      </div>
    </header>
  );

  if (!portalEl) return null;
  return createPortal(header, portalEl);
}