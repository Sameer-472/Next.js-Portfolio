"use client"
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const ProjectCard = ({ title, description, tags, link }) => {
    return (
        <motion.a
            href={link}
            target="_blank"
            whileHover={{
                y: -8,
                boxShadow: "0px 4px 25px rgba(80, 130, 255, 0.3)",
            }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="relative block p-6 bg-gray-900 rounded-2xl border border-gray-700 shadow-lg w-full overflow-hidden group transition-all duration-300"
        >
            {/* Play icon top-left */}
            <div className="absolute top-4 left-4 bg-white/10 p-3 rounded-full backdrop-blur-sm">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="white"
                    className="w-5 h-5"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 12l-7.5 4.33V7.67L15.75 12z"
                    />
                </svg>
            </div>

            {/* Title with arrow */}
            <h3 className="text-xl font-semibold text-white mb-2 flex justify-between items-center">
                {title}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5 text-blue-400 group-hover:translate-x-1 transition-transform"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 4.5H19.5V10.5M19.5 4.5L10.5 13.5"
                    />
                </svg>
            </h3>

            {/* Description */}
            <p className="text-gray-400 text-sm line-clamp-3">{description}</p>

            {/* Tech Tags */}
            <div className="flex gap-2 mt-4 flex-wrap">
                {tags.map((tag, index) => (
                    <span
                        key={index}
                        className="px-3 py-1 bg-white/10 text-gray-300 text-xs rounded-full backdrop-blur-md"
                    >
                        {tag}
                    </span>
                ))}
            </div>

            {/* Visit link */}
            <div className="mt-4">
                <span className="inline-flex items-center text-sm text-blue-400 group-hover:underline">
                    Visit Project
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-4 h-4 ml-1"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M13.5 4.5H19.5V10.5M19.5 4.5L10.5 13.5"
                        />
                    </svg>
                </span>
            </div>
        </motion.a>
    );
};

export default ProjectCard;

