import { FaMastodon, FaReddit, FaCode } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer
            className="w-full px-4 py-3 bg-white text-gray-600 border-t border-gray-200 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-800 transition-colors z-50"
        >
            <div className="flex justify-center space-x-6">
                <a
                    href="https://mastodon.social/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-500 dark:hover:text-blue-400"
                    aria-label="Mastodon"
                >
                    <FaMastodon size={24} />
                </a>
                <a
                    href="https://reddit.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-orange-500 dark:hover:text-orange-400"
                    aria-label="Reddit"
                >
                    <FaReddit size={24} />
                </a>
                <a
                    href="https://codeberg.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#144b49] dark:hover:text-[#144b49]"
                    aria-label="Codeberg"
                >
                    <FaCode size={24} />
                </a>
            </div>
        </footer>
    );
}