import { FaMastodon, FaReddit, FaCode } from 'react-icons/fa';

/**
 * Footer component with social media links and responsive design.
 * Features dark mode support and hover effects for social icons.
 *
 * @returns {JSX.Element} The footer with social media links
 */
export default function Footer() {
  return (
    <footer className="w-full px-4 py-3 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md text-blue-700 dark:text-blue-300 border-t border-blue-500 transition-colors z-50 relative overflow-hidden">
      <div className="flex justify-center space-x-6 relative z-10">
        <a
          href="https://mastodon.social/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          aria-label="Mastodon"
        >
          <FaMastodon size={24} />
        </a>
        <a
          href="https://reddit.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          aria-label="Reddit"
        >
          <FaReddit size={24} />
        </a>
        <a
          href="https://codeberg.org/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          aria-label="Codeberg"
        >
          <FaCode size={24} />
        </a>
      </div>
    </footer>
  );
}