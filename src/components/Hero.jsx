import React from "react";

const Hero = () => {
    return (
        <section
            className="flex flex-col items-center justify-center min-h-[60vh] px-4 py-16
                bg-white text-gray-800
                dark:bg-gray-900 dark:text-gray-100
                transition-colors duration-300"
        >
            <div className="max-w-xl text-center">
                <h1 className="text-3xl font-bold mb-4">
                    Page Under Renovation
                </h1>
                <p className="text-lg mb-6">
                    We're working hard to improve this page. Please check back soon!
                </p>
                <span className="inline-block px-4 py-2 rounded bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-300 text-sm">
                    Thank you for your patience.
                </span>
            </div>
        </section>
    );
};

export default Hero;