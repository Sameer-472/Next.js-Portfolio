"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";
import { Element } from "react-scroll";



export default function Timeline() {

    const timelineData = [
        {
            type: "work",
            title: "Frontend Developer",
            company: "Transviti Pvt. Ltd.",
            link: "https://www.linkedin.com/company/transviti/",
            duration: "2023 - Present",
            points: [
                "Developed & managed a variety of projects including enterprise solutions.",
                "Built a dynamic dashboard based on the latest plots and charts using g2plots.",
                "Guided interns in frontend development best practices.",
            ],
            skills: ["React", "Redux", "JavaScript", "Antd"],
        },
        {
            type: "work",
            title: "Web3 Frontend Developer",
            company: "SoftSync Dev",
            link: "https://www.linkedin.com/company/softsyncdev/",
            duration: "Jun 2023 - Aug 2023",
            points: [
                "Integrated Openzeppelin libraries for enhanced security.",
                "Achieved 30% faster contract testing with Hardhat.",
                "Developed and deployed secure Ethereum-based smart contracts.",
                "Implemented blockchain integrations using Ether.js.",
            ],
            skills: ["React", "Remix", "Solidity", "Openzeppelin", "Hardhat"],
        },
        {
            type: "work",
            title: "MERN Stack Trainer",
            company: "Saylani Mass IT Training Programming",
            link: "https://www.linkedin.com/company/saylani-welfare-international-trust/",
            duration: "Feb 2023 - May 2023",
            points: [
                "Provided guidance and support to students throughout the training program.",
                "Developed course content for MERN stack training programs.",
                "Conducted workshops and training sessions.",
            ],
            skills: ["React", "Node.js", "HTML", "CSS"],
        },
        {
            type: "education",
            title: "Bachelor of Information Technology",
            company: "University of Sindh",
            link: "https://www.usindh.edu.pk/",
            duration: "2018 - 2022",
            points: ["Graduated with a focus on software development and emerging technologies."],
            skills: ["Information Technology", "Software Engineering"],
        },
    ];

    return (
        <Element name="experience" className="flex flex-col items-center my-20 px-6">
            <h2 className="text-3xl font-bold mb-2 text-white">My Journey</h2>
            <p className="text-gray-400 mb-8">Education and Work Experience</p>

            {/* Timeline Container */}
            <div className="relative w-full max-w-5xl mx-auto">
                {/* Center Line */}
                <div className="absolute left-1/2 transform -translate-x-1/2 top-0 w-[2px] h-full bg-gray-500"></div>

                {/* Timeline Item */}
                {timelineData.map((item, index) => (
                    <div
                        key={index}
                        className={`relative flex items-center mb-16 w-full
                        ${index % 2 === 0 ? "justify-start md:justify-start" : "justify-end md:justify-end"}
                        ${index % 2 !== 0 && "md:flex-row-reverse"}
                        `}
                    >
                        {/* Icon */}
                        <div className="absolute left-1/2 transform -translate-x-1/2 bg-gray-800 rounded-full border border-gray-400 shadow-lg w-10 h-10 items-center justify-center z-10 md:flex hidden">
                            {item.type === "education" ? (
                                <GraduationCap className="w-5 h-5 text-blue-400 md:block hidden" />
                            ) : (
                                <Briefcase className="w-5 h-5 text-blue-400 md:block hidden" />
                            )}
                        </div>

                        {/* Card */}
                        <motion.div
                            whileHover={{
                                scale: 1.01,
                                boxShadow: "0px 4px 25px rgba(80, 130, 255, 0.3)",
                            }}
                            transition={{ type: "spring", stiffness: 200, damping: 10 }}
                            className={`p-6 bg-gray-900 rounded-lg border border-gray-600 shadow-lg
                            w-full md:w-[45%] 
                            ${index % 2 === 0 ? "ml-auto" : "mr-auto"} 
                            md:mt-0 mt-10
                            `}
                        >
                            <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                            <a
                                href={item.link}
                                className="text-blue-400 hover:underline flex items-center"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {item.company} ↗
                            </a>
                            <p className="text-gray-400 text-sm">{item.duration}</p>

                            <ul className="text-gray-300 mt-2 space-y-1">
                                {item.points.map((point, idx) => (
                                    <li key={idx}>• {point}</li>
                                ))}
                            </ul>

                            <div className="flex gap-2 mt-3 flex-wrap">
                                {item.skills.map((skill, idx) => (
                                    <span key={idx} className="px-3 py-1 bg-white/10 text-gray-300 text-xs rounded-full backdrop-blur-md">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                ))}
            </div>
        </Element>
    );
}

