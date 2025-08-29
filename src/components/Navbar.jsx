import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <header className="sticky top-0 z-50 w-full h-12 sm:h-14 px-2 sm:px-4 flex justify-between items-center border-b bg-white dark:bg-gray-900 border-blue-200 dark:border-gray-800 shadow-lg transition-colors">
            <Link to="/" className="flex items-center h-full">
                <img
                    src="/logo_toolSVG.svg"
                    alt="Gi AI Logo"
                    className="w-12 h-12 sm:w-16 sm:h-16 object-contain flex items-center dark:invert"
                />
                <span className="text-xs mr-1 sm:mr-2 font-normal text-blue-700 dark:text-gray-300 whitespace-nowrap">
                    AI
                </span>
            </Link>
            <div className="flex items-center gap-4">
                <a
                    href="https://andreamartina.vercel.app/tool"
                    className="group text-sm sm:text-base px-3 py-1 rounded-full font-semibold bg-blue-100 text-blue-900 border border-blue-200 dark:bg-white dark:text-black dark:border-blue-700 shadow-sm hover:bg-blue-200 hover:text-blue-900 dark:hover:bg-blue-100 dark:hover:text-blue-900 transition-all duration-150 backdrop-blur focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-600 relative overflow-hidden"
                >
                    <span className="relative z-10 flex items-center gap-2">
                        Try Gi AI
                        <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7"/></svg>
                    </span>
                    <span className="absolute inset-0 rounded-full pointer-events-none group-hover:shadow-[0_0_20px_5px_rgba(59,130,246,0.15)] dark:group-hover:shadow-[0_0_20px_5px_rgba(59,130,246,0.3)] transition-all duration-200"></span>
                </a>
            </div>
        </header>
    );
}