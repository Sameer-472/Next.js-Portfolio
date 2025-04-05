"use client"

import React from 'react';
import {
    SiReact, SiNextdotjs, SiJavascript, SiHtml5,
    SiTypescript, SiTailwindcss, SiDocker,
    SiJira, SiGit, SiPython, SiNodedotjs, SiRedux, SiAntdesign
} from "react-icons/si";
import { motion } from 'framer-motion';

const Skills = () => {
    const skills = [
        { name: "React", level: "Expert", icon: SiReact, color: "text-sky-500" },
        { name: "Next.js", level: "Expert", icon: SiNextdotjs, color: "text-white" },
        { name: "JavaScript", level: "Expert", icon: SiJavascript, color: "text-yellow-400" },
        { name: "Redux", level: "Expert", icon: SiRedux, color: "text-purple-400" },
        { name: "HTML/CSS", level: "Expert", icon: SiHtml5, color: "text-orange-500" },
        { name: "TypeScript", level: "Professional", icon: SiTypescript, color: "text-blue-500" },
        { name: "Antd", level: "Expert", icon: SiAntdesign, color: 'text-red-200]' },
        { name: "Tailwind CSS", level: "Professional", icon: SiTailwindcss, color: "text-teal-400" },
        { name: "Docker", level: "Beginner", icon: SiDocker, color: "text-sky-400" },
        { name: "Git", level: "Expert", icon: SiGit, color: "text-red-500" },
        { name: "Python", level: "Beginner", icon: SiPython, color: "text-blue-400" },
        { name: "Node.js", level: "Professional", icon: SiNodedotjs, color: "text-green-500" },
    ];

    return (
        <div className='w-full mx-auto px-6 lg:px-32 my-10'>
            <h2 className="text-center text-2xl sm:text-3xl md:text-3xl font-bold mb-2 dark:text-white text-gray-800 ">My Tech Arsenal</h2>
            <p className="dark:text-gray-400 mb-8 text-gray-500 text-center">A collection of cutting-edge tools and technologies that power my development journey.</p>
            <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4  ">
                {skills.map((skill, index) => {
                    const IconComponent = skill.icon;
                    return (
                        <motion.div
                            key={index}
                            whileHover={{ scale: 1.05, boxShadow: "0px 4px 15px rgba(0,0,0,0.3)" }}
                            whileTap={{ scale: 0.97 }}
                            transition={{ type: "spring", stiffness: 300 }}
                            className="flex items-center gap-4 p-4  bg-white dark:bg-gray-900 rounded-lg dark:border dark:border-gray-600 shadow-lg cursor-pointer transition-all duration-300"
                        >
                            {/* Rotating Icon on Hover */}
                            <motion.div
                                whileHover={{ rotate: 360 }}
                                transition={{ type: "spring", stiffness: 150, damping: 10 }}
                            >
                                <IconComponent className={`${skill?.color}`} size={28} />
                            </motion.div>
                            <div>
                                <h4 className="text-gray-800 dark:text-white font-semibold">{skill.name}</h4>
                                <p className="text-sm dark:text-gray-400 text-gray-600">{skill.level}</p>
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </div>
    )
}

export default Skills