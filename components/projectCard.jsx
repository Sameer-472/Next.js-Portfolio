"use client";
import useModalStore from "@/store/useModalStore";
import { motion } from "framer-motion";

const ProjectCard = ({ title, description, tags, link, img, item }) => {

    const { openModal } = useModalStore();

    return (
        <motion.a
            href={link}
            target="_blank"
            whileHover={{
                y: -8,
                boxShadow: "0px 4px 25px rgba(80, 130, 255, 0.3)",
            }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="relative block p-6 bg-gray-900 rounded-lg border border-gray-700 shadow-lg w-full overflow-hidden group transition-all duration-300"
        >
            {/* Background Image with hover zoom */}
            <div className="absolute inset-0 overflow-hidden rounded-lg">
                <img
                    src={img}
                    alt={title}
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/60"></div> {/* Dark overlay */}
            </div>

            {/* Play icon top-left */}
            <div className="w-full mx-3 bg-[red]">
                {/* Title with arrow */}
                <h3 className="relative z-10 text-xl font-semibold text-white mb-2 flex justify-between items-center">
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
                <p className="relative z-10 text-gray-300 text-sm line-clamp-3">{description}</p>

                {/* Tech Tags */}
                <div className="relative z-10 flex gap-2 mt-4 flex-wrap">
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
                <div className="relative z-10 mt-4">
                    <button onClick={() => openModal("projectDetails", item)} className="inline-flex items-center text-sm text-blue-400 group-hover:underline">
                        See Details
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
                    </button>
                </div>
            </div>
        </motion.a>
    );
};

export default ProjectCard;
