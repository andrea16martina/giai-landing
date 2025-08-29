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
            className="relative flex flex-col justify-center items-center min-h-[87vh] px-4 text-center bg-white dark:bg-gray-900 transition-colors"
        >
            {/* Logo as Background */}
            <div className="absolute inset-0 flex justify-center items-center">
                <img
                    src="/logo_toolSVG.svg"
                    alt="Gi AI Logo"
                    className="w-96 h-96 md:w-[35rem] md:h-[35rem] opacity-15 dark:invert"
                />
            </div>
            {/* Content */}
            <div className="relative z-10 flex flex-col justify-center items-center h-full backdrop-blur-[1px] rounded-lg p-8 max-w-2xl">
                {/* Title */}
                <h1 className="text-4xl md:text-6xl font-extrabold bg-gradient-to-t from-blue-200 via-blue-400 to-blue-900 bg-clip-text text-transparent mb-4 tracking-tight leading-relaxed animate-[fade-in-up_1s_ease-out_0.3s_forwards] motion-safe:animate-[fade-in-up_1s_ease-out_0.3s_forwards] motion-reduce:animate-none drop-shadow-lg">
                    Gi AI – Generative Insights
                </h1>
                {/* Description */}
                <p className="text-base md:text-lg text-gray-800 dark:text-gray-300 mb-6 max-w-md mx-auto leading-relaxed animate-[fade-in-up_1s_ease-out_0.5s_forwards] motion-safe:animate-[fade-in-up_1s_ease-out_0.5s_forwards] motion-reduce:animate-none drop-shadow-md">
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