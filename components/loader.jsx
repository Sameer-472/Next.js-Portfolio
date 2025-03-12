"use client"; // Ensure it's a client component

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function LoaderWrapper({ children }) {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const handleStop = () => setLoading(false);

        // Listen for route changes (useful for single-page apps)
        if (document.readyState === "complete") {
            // If the page is already loaded, remove the loader
            handleStop();
        } else {
            // Otherwise, listen for the load event
            window.addEventListener("load", handleStop);
        }

        // Fallback: Hide the loader after 2 seconds in case 'load' event is delayed
        const timeout = setTimeout(handleStop, 2000);

        return () => {
            window.removeEventListener("load", handleStop);
            clearTimeout(timeout);
        };
    }, []);

    return loading ?
        <div className="fixed inset-0 flex items-center justify-center bg-white dark:bg-gray-900 z-50">
            <div className="loader"></div>
        </div>
        : <>{children}</>; // Show loader until loading is false
}


