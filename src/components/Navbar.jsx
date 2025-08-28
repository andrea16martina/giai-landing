import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function Navbar() {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        const match = window.matchMedia('(prefers-color-scheme: dark)');
        setIsDark(match.matches);
        const handler = (e) => setIsDark(e.matches);
        match.addEventListener('change', handler);
        return () => match.removeEventListener('change', handler);
    }, []);

    return (
        <header className="sticky top-0 z-50 w-full h-12 sm:h-14 px-2 sm:px-4 flex justify-between items-center border-b bg-white dark:bg-[#18181b] border-gray-200 dark:border-[#23232a] shadow-lg transition-colors">
            <Link to="/" className="flex items-center h-full">
                <img
                    src={isDark ? "/logo_toolSVGw.svg" : "/logo_toolSVG.svg"}
                    alt="Gi AI Logo"
                    className="w-12 h-12 sm:w-16 sm:h-16 object-contain flex items-center"
                />
                <span className="text-xs mr-1 sm:mr-2 font-normal text-gray-700 dark:text-gray-300 whitespace-nowrap">
                    AI
                </span>
            </Link>
            <div className="flex items-center gap-4">
                <a
                    href="https://andreamartina.vercel.app/tool"
                    className="group text-sm sm:text-base px-3 py-1 rounded-full font-semibold bg-gray-100 dark:bg-[#23232a] text-gray-900 dark:text-white border border-gray-300 dark:border-white shadow-sm hover:bg-gray-200 dark:hover:bg-white hover:text-[#23232a] dark:hover:text-[#23232a] transition-all duration-150 backdrop-blur focus:outline-none focus:ring-2 focus:ring-gray-300 dark:focus:ring-white relative overflow-hidden"
                >
                    <span className="relative z-10 flex items-center gap-2">
                        Try Gi AI
                        <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7"/></svg>
                    </span>
                    <span className="absolute inset-0 rounded-full pointer-events-none group-hover:shadow-[0_0_20px_5px_rgba(0,0,0,0.08)] dark:group-hover:shadow-[0_0_20px_5px_rgba(255,255,255,0.4)] transition-all duration-200"></span>
                </a>
            </div>
        </header>
    );
}