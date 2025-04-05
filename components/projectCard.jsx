"use client";
import useModalStore from "@/store/useModalStore";
import { motion } from "framer-motion";
import { Github, PlayCircle } from "lucide-react";

const ProjectCard = ({ title, description, tags, link, img, item }) => {

    const { openModal } = useModalStore();

    return (
        <motion.a
            // href={link}
            target="_blank"
            whileHover={{
                y: -8,
                boxShadow: "0px 4px 25px rgba(80, 130, 255, 0.3)",
            }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="relative block bg-white dark:bg-gray-900 rounded-lg dark:border dark:border-gray-800 shadow-lg w-full overflow-hidden group transition-all duration-300 p-0"
        >
            {/* Background Image */}
            <div className="relative overflow-hidden rounded-t-lg h-40">
                <img
                    src={img}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 dark:bg-black/60 bg:white shadow-lg"></div>
                <div className="flex justify-between gap-3">
                    {/* <PlayCircle className="absolute top-3 left-3 w-8 h-8 text-white/80" /> */}
                    {/* <Github className="absolute top-3 left-3 w-8 h-8 text-white/80" /> */}
                </div>
            </div>

            {/* Card Content */}
            <div className="p-4">
                <h3 className="text-lg font-semibold dark:text-white text-gray-600 mb-2">{title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-3">{description}</p>

                {/* Tech Tags */}
                <div className="flex gap-2 mt-4 flex-wrap">
                    {tags.map((tag, index) => (
                        <span
                            key={index}
                            className="px-3 py-1 bg-white/10 text-gray-500 dark:text-gray-300 text-xs rounded-full backdrop-blur-md"
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                {/* Visit Project Link */}
                <div className="mt-4">
                    <button
                        onClick={() => openModal("projectDetails", item)}
                        className="inline-flex items-center cursor-pointer text-sm text-blue-400 group-hover:underline"
                    >
                        Project Details
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
