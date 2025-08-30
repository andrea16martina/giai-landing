import React from "react";

const Hero = () => {
    // Scroll to explore section
    const handleExploreClick = () => {
        const el = document.getElementById('explore');
        if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section
            className="relative flex flex-col justify-center items-center min-h-[80vh] md:min-h-[65vh] lg:min-h-[60vh] px-4 text-center bg-gradient-to-br from-blue-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors overflow-hidden"
        >
            {/* Geometric Pattern Background */}
            <div className="absolute inset-0 opacity-5 dark:opacity-10">
                <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <defs>
                        <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                            <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5"/>
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>
            </div>
            {/* Logo as Background */}
            <div className="absolute inset-0 flex justify-center items-center">
                <img
                    src="/logo_toolSVG.svg"
                    alt="Gi AI Logo"
                    className="w-96 h-96 md:w-[35rem] md:h-[35rem] opacity-15 dark:invert"
                />
            </div>
            {/* Content */}
            <div className="relative z-10 flex flex-col justify-center items-center h-full backdrop-blur-[1px] rounded-lg p-10 max-w-2xl">
                {/* Title */}
                <div className="flex flex-col items-center mb-6">
                    <h1 className="text-6xl md:text-7xl font-extrabold bg-gradient-to-t from-blue-200 via-blue-400 to-blue-900 bg-clip-text text-transparent tracking-tight leading-relaxed animate-[fade-in-up_1s_ease-out_0.3s_forwards] motion-safe:animate-[fade-in-up_1s_ease-out_0.3s_forwards] motion-reduce:animate-none drop-shadow-lg">
                        Gi AI
                    </h1>
                    <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-t from-blue-300 via-blue-500 to-blue-800 bg-clip-text text-transparent tracking-wide leading-loose animate-[fade-in-up_1s_ease-out_0.4s_forwards] motion-safe:animate-[fade-in-up_1s_ease-out_0.4s_forwards] motion-reduce:animate-none drop-shadow-md mt-2 pb-2">
                        Generative Insights
                    </h2>
                </div>
                {/* Description */}
                <p className="text-base md:text-lg text-gray-800 dark:text-gray-300 mb-6 max-w-md mx-auto leading-relaxed animate-[fade-in-up_1s_ease-out_0.5s_forwards] motion-safe:animate-[fade-in-up_1s_ease-out_0.5s_forwards] motion-reduce:animate-none drop-shadow-md whitespace-nowrap">
                    Unlock the power of generative AI for actionable insights.
                </p>
                {/* Explore Button */}
                <button
                    onClick={handleExploreClick}
                    className="group inline-flex items-center justify-center px-6 py-2 text-lg font-semibold rounded-full border shadow-sm hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 transition-all duration-300 animate-[fade-in-up_1s_ease-out_0.7s_forwards] motion-safe:animate-[fade-in-up_1s_ease-out_0.7s_forwards] motion-reduce:animate-none relative overflow-hidden bg-blue-100 text-blue-900 border-blue-200 focus:ring-blue-400 dark:bg-white dark:text-black dark:border-blue-700 dark:focus:ring-blue-600"
                >
                    <span className="relative z-10 mr-2">Start Exploring</span>
                    <svg
                        className="w-5 h-5 group-hover:translate-y-1 transition-transform duration-300 animate-bounce relative z-10"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                    <span className="absolute inset-0 rounded-full pointer-events-none group-hover:shadow-[0_0_20px_5px_rgba(59,130,246,0.15)] dark:group-hover:shadow-[0_0_20px_5px_rgba(59,130,246,0.3)] transition-all duration-200"></span>
                </button>
            </div>
        </section>
    );
};

export default Hero;