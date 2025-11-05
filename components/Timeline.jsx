"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";
import { Element } from "react-scroll";



export default function Timeline() {

    const timelineData = [
        {
            type: "work",
            title: "Mid level Frontend Developer",
            company: "ME Digital Group.",
            link: "https://www.linkedin.com/company/medigitalgroup/",
            duration: "2025 - Present",
            points: [
                "Refactor existing GSP (Groovy Server Pages) templates to align with Tailwind utility classes for maintainable and scalable UI components",
                "Implemented internationalization (i18n) features across the application to support multiple regions, including Riyadh (Saudi Arabia) and Dubai (UAE)",
                "Created new Groovy controllers to define and manage application routes, ensuring smooth integration of RESTful APIs within the Grails framework.",
            ],
            skills: ["React", "Redux", "JavaScript", "Antd" , "Tailwind" , "Grails"],
        },
        {
            type: "work",
            title: "Frontend Developer",
            company: "Transviti Pvt. Ltd.",
            link: "https://www.linkedin.com/company/transviti/",
            duration: "2023 - 2025",
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
        <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 100 }}
            viewport={{ once: false }}
        >
            <Element name="experience" className="flex flex-col items-center my-20">
                <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold mb-2 dark:text-white text-gray-800">
                    My Professional Odyssey 🚀
                </h2>
                <p className="dark:text-gray-400 text-center px-6 text-gray-500 mb-8">
                    A blend of education and hands-on experience shaping my career.
                </p>
                {/* Timeline Container */}
                <div className="relative w-full px-6 mx-auto lg:px-32">
                    {/* Center Line */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 top-0 w-[2px] h-full bg-gray-200 dark:bg-gray-500 "></div>

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
                            <div className="absolute left-1/2 transform -translate-x-1/2 bg-white dark:bg-gray-800 rounded-full border border-gray-400 shadow-lg w-10 h-10 items-center justify-center z-10 md:flex hidden">
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
                                className={`p-6 bg-white dark:bg-[#18181B] rounded-lg dark:border dark:border-gray-600 shadow-lg
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
                                <p className="dark:text-gray-400 text-gray-600 text-sm">{item.duration}</p>

                                <ul className="dark:text-gray-300 text-gray-600 mt-2 space-y-1">
                                    {item.points.map((point, idx) => (
                                        <li key={idx}>• {point}</li>
                                    ))}
                                </ul>

                                <div className="flex gap-2 mt-3 flex-wrap">
                                    {item.skills.map((skill, idx) => (
                                        <span key={idx} className="px-3 py-1 shadow bg-white/10 text-gray-500 dark:text-gray-300 text-xs rounded-full backdrop-blur-md">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </Element>
        </motion.div>
    );
}

