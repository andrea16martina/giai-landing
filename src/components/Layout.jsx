import React from 'react';
import MatrixRain from './MatrixRain';

/**
 * Layout - Main application layout wrapper
 *
 * Provides the global structure and visual effects for the entire application.
 * Includes Matrix rain animation background, neon grid overlay, system status
 * indicators, and responsive spacing. Features full dark mode support and
 * layered visual effects for an immersive tech experience.
 *
 * @component
 * @param {Object} props - Component properties
 * @param {React.ReactNode} props.children - Child components to render within layout
 * @returns {JSX.Element} Layout wrapper with visual effects and structure
 *
 * @example
 * ```jsx
 * <Layout>
 *   <App />
 * </Layout>
 * ```
 */
const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50/80 to-blue-100/60 dark:from-black dark:via-gray-950 dark:to-gray-900 relative overflow-visible">
      {/* Matrix Rain Background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <MatrixRain />
      </div>

      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(59,130,246,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.06)_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none z-10" />

      {/* System Status Indicators */}
      <div className="absolute top-14 sm:top-16 left-2 text-blue-700 dark:text-blue-300 font-mono text-xs animate-pulse opacity-90 pointer-events-none z-30 drop-shadow-lg">
        SYSTEM ONLINE
      </div>
      <div className="absolute top-14 sm:top-16 right-2 text-cyan-500 dark:text-cyan-400 font-mono text-xs animate-pulse opacity-90 pointer-events-none z-30 drop-shadow-lg">
        v0.1.0-beta
      </div>

      {/* Main Content */}
      <div className="relative z-20 pt-15 sm:pt-16">
        {children}
      </div>
    </div>
  );
};

export default Layout;
