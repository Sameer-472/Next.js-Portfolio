"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";

export default function Timeline() {
    return (
        <div className="flex flex-col items-center my-20">
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
                        transition={{ type: "spring", stiffness: 200, damping: 10 }}
                        className="p-6 bg-gray-900 rounded-lg border border-gray-600 shadow-lg w-[45%] ml-auto"
                    >
                        <h3 className="text-xl font-semibold text-white">Frontend Developer</h3>
                        <a
                            href="https://www.linkedin.com/company/transviti/"
                            className="text-blue-400 hover:underline flex items-center"
                            target="_blank"
                        >
                            Transviti Pvt. Ltd. ↗
                        </a>
                        <p className="text-gray-400 text-sm">2023 - Present</p>

                        <ul className="text-gray-300 mt-2">
                            <li> Developed & managed a variety of projects including enterprise solutions.</li>
                            <li>Built a dynamic dashboard based on the latest plots and charts using g2plots, allowing users to dynamically change the layout.</li>
                            <li>Guided interns in frontend development best practices, providing mentorship and technical support.</li>
                        </ul>
                        <div className="flex gap-2 mt-3">
                            <span className="px-2 py-1 bg-blue-500 text-white text-sm rounded">React</span>
                            <span className="px-2 py-1 bg-blue-500 text-white text-sm rounded">Redux</span>
                            <span className="px-2 py-1 bg-blue-500 text-white text-sm rounded">JavaScript</span>
                            <span className="px-2 py-1 bg-blue-500 text-white text-sm rounded">Antd</span>
                        </div>
                    </motion.div>
                </div>

                {/* Timeline Item 2 - Right */}
                <div className="relative flex items-center mb-10 justify-end w-full">
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
                        className="p-6 bg-gray-900 rounded-lg border border-gray-600 shadow-lg w-[45%] mr-auto"
                    >
                        <h3 className="text-xl font-semibold text-white">Web3 Frontend Developer</h3>
                        <a
                            href="https://www.linkedin.com/company/softsyncdev/"
                            className="text-blue-400 hover:underline flex items-center"
                            target="_blank"
                        >
                            SoftSync Dev ↗
                        </a>
                        <p className="text-gray-400 text-sm">Jun 2023 - Aug 2023</p>
                        <ul className="text-gray-300 mt-2">
                            <li>Integrated Openzeppelin libraries for enhanced security, including reentrancy guards and access control mechanisms.</li>
                            <li>Achieved 30% faster contract testing and deployment by utilizing Hardhat for automation.</li>
                            <li>Developed and deployed secure Ethereum-based smart contracts using Solidity</li>
                            <li>Implemented blockchain interactions and integrations using Ether.js.</li>
                        </ul>
                        <div className="flex gap-2 mt-3">
                            <span className="px-2 py-1 bg-blue-500 text-white text-sm rounded">React</span>
                            <span className="px-2 py-1 bg-blue-500 text-white text-sm rounded">Remix</span>
                            <span className="px-2 py-1 bg-blue-500 text-white text-sm rounded">Solidity</span>
                            <span className="px-2 py-1 bg-blue-500 text-white text-sm rounded">Openzeppline</span>
                            <span className="px-2 py-1 bg-blue-500 text-white text-sm rounded">Hardhat</span>
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
                        <h3 className="text-xl font-semibold text-white">MERN Stack Trainer</h3>
                        <a
                            href="https://www.linkedin.com/company/saylani-welfare-international-trust/"
                            className="text-blue-400 hover:underline flex items-center"
                            target="_blank"
                        >
                            Saylani Mass IT Training Programming ↗
                        </a>
                        <p className="text-gray-400 text-sm">Feb 2023 - May 2023</p>
                        <ul className="text-gray-300 mt-2">
                            <li>Providing guidance and support to students throughout the training program. Developing course content and curriculum for MERN stack training programs</li>
                            <li>Responsible for conducting training sessions for individuals or groups of learners.Conducting workshops, and facilitating discussions to ensure effective knowledge transfer and skill development.</li>
                        </ul>
                        <div className="flex gap-2 mt-3">
                            <span className="px-2 py-1 bg-blue-500 text-white text-sm rounded">React</span>
                            <span className="px-2 py-1 bg-blue-500 text-white text-sm rounded">Node.js</span>
                            <span className="px-2 py-1 bg-blue-500 text-white text-sm rounded">HTML</span>
                            <span className="px-2 py-1 bg-blue-500 text-white text-sm rounded">CSS</span>
                        </div>
                    </motion.div>
                </div>

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
                        <h3 className="text-xl font-semibold text-white">Bachelor of Information Technology</h3>
                        <a
                            href="https://www.usindh.edu.pk/"
                            className="text-blue-400 hover:underline flex items-center"
                            target="_blank"
                        >
                            University of Sindh ↗
                        </a>
                        <p className="text-gray-400 text-sm">2019 - 2023</p>
                        <p className="text-gray-300 mt-2">
                            Studied Information Technology with a focus on web technologies and software engineering.
                        </p>
                        <div className="flex gap-2 mt-3">
                            <span className="px-2 py-1 bg-blue-500 text-white text-sm rounded">Data</span>
                            <span className="px-2 py-1 bg-blue-500 text-white text-sm rounded">Algorithms</span>
                            <span className="px-2 py-1 bg-blue-500 text-white text-sm rounded">Web</span>
                        </div>
                    </motion.div>
                </div>
            </div>

        </div>
    );
}
