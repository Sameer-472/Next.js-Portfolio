"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";

export default function Timeline() {
    return (
        <div className="flex flex-col items-center py-10">
            <h2 className="text-3xl font-bold mb-2 text-white">My Journey</h2>
            <p className="text-gray-400 mb-8">Education and Work Experience</p>

            {/* Timeline Container */}
            <div className="relative w-full max-w-4xl mx-auto">
                {/* Timeline Line in Center */}
                <div className="absolute left-1/2 transform -translate-x-1/2 top-0 w-[4px] h-full bg-gray-500"></div>
                {/* Timeline Item 1 - Left */}
                <div className="relative flex items-center mb-10 justify-start w-full">
                    {/* Icon */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 bg-gray-800 rounded-full border border-gray-400 shadow-lg w-10 h-10 flex items-center justify-center">
                        <Briefcase className="w-5 h-5 text-blue-400" />
                    </div>
                    {/* Card */}
                    <motion.div
                        whileHover={{
                            scale: 1.01, // Slight zoom
                            boxShadow: "0px 0px 15px #51a2ff"
                        }}
                        className="p-6 bg-gray-900 rounded-lg border border-gray-600 shadow-lg w-[45%] ml-auto"
                    >
                        <h3 className="text-xl font-semibold text-white">Frontend Developer</h3>
                        <a
                            href="https://3embed.com"
                            className="text-blue-400 hover:underline flex items-center"
                            target="_blank"
                        >
                            Transviti Pvt. Ltd. ↗
                        </a>
                        <p className="text-gray-400 text-sm">2023 - Present</p>
                        <p className="text-gray-300 mt-2">
                            Led development of multiple applications using React and Next.js.
                        </p>
                        <div className="flex gap-2 mt-3">
                            <span className="px-2 py-1 bg-blue-500 text-white text-sm rounded">React</span>
                            <span className="px-2 py-1 bg-blue-500 text-white text-sm rounded">Next.js</span>
                            <span className="px-2 py-1 bg-blue-500 text-white text-sm rounded">JavaScript</span>
                        </div>
                    </motion.div>
                </div>

                {/* Timeline Item 2 - Right */}
                <div className="relative flex items-center mb-10 justify-end w-full">
                    {/* Icon */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 bg-gray-800 rounded-full border border-gray-400 shadow-lg w-10 h-10 flex items-center justify-center">
                        <GraduationCap className="w-5 h-5 text-blue-400" />
                    </div>

                    {/* Card */}
                    <motion.div
                        whileHover={{
                            scale: 1.01, // Slight zoom
                            boxShadow: "0px 0px 15px #51a2ff"
                        }}
                        transition={{ type: "spring", stiffness: 200, damping: 10 }}
                        className="p-6 bg-gray-900 rounded-lg border border-gray-600 shadow-lg w-[45%] mr-auto"
                    >
                        <h3 className="text-xl font-semibold text-white">Bachelor of Computer Applications</h3>
                        <a
                            href="https://ignou.ac.in"
                            className="text-blue-400 hover:underline flex items-center"
                            target="_blank"
                        >
                            Indira Gandhi National Open University ↗
                        </a>
                        <p className="text-gray-400 text-sm">2021 - 2024</p>
                        <p className="text-gray-300 mt-2">
                            Studied computer science with a focus on web technologies and software engineering.
                        </p>
                        <div className="flex gap-2 mt-3">
                            <span className="px-2 py-1 bg-blue-500 text-white text-sm rounded">Data</span>
                            <span className="px-2 py-1 bg-blue-500 text-white text-sm rounded">Algorithms</span>
                            <span className="px-2 py-1 bg-blue-500 text-white text-sm rounded">Web</span>
                        </div>
                    </motion.div>
                </div>

                <div className="relative flex items-center mb-10 justify-start w-full">
                    {/* Icon */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 bg-gray-800 rounded-full border border-gray-400 shadow-lg w-10 h-10 flex items-center justify-center">
                        <Briefcase className="w-5 h-5 text-blue-400" />
                    </div>

                    {/* Card */}
                    <motion.div
                        whileHover={{
                            scale: 1.01, // Slight zoom
                            boxShadow: "0px 0px 15px #51a2ff"
                        }}
                        transition={{ type: "spring", stiffness: 200, damping: 10 }}
                        className="p-6 bg-gray-900 rounded-lg border border-gray-600 shadow-lg w-[45%] ml-auto"
                    >
                        <h3 className="text-xl font-semibold text-white">Frontend Developer</h3>
                        <a
                            href="https://3embed.com"
                            className="text-blue-400 hover:underline flex items-center"
                            target="_blank"
                        >
                            3Embed Software Technologies Pvt. Ltd. ↗
                        </a>
                        <p className="text-gray-400 text-sm">2021 - Present</p>
                        <p className="text-gray-300 mt-2">
                            Led development of multiple applications using React and Next.js.
                        </p>
                        <div className="flex gap-2 mt-3">
                            <span className="px-2 py-1 bg-blue-500 text-white text-sm rounded">React</span>
                            <span className="px-2 py-1 bg-blue-500 text-white text-sm rounded">Next.js</span>
                            <span className="px-2 py-1 bg-blue-500 text-white text-sm rounded">JavaScript</span>
                        </div>
                    </motion.div>
                </div>
            </div>

        </div>
    );
}
