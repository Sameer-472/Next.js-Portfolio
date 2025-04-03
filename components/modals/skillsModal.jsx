"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { CustomModal } from '../customModal';
import useModalStore from '@/store/useModalStore';
import {
    SiReact, SiNextdotjs, SiJavascript, SiHtml5,
    SiTypescript, SiTailwindcss, SiDocker,
    SiJira, SiGit, SiPython, SiNodedotjs, SiRedux, SiAntdesign
} from "react-icons/si";

const SKillsModal = () => {
    const { isOpen, type, closeModal} = useModalStore();

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
        <CustomModal
            open={isOpen && type == "SkillModal"}
            title={"My Skills"}
            onClose={closeModal}
        >
            <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 sm:p-6 overflow-y-auto max-h-[70vh]">
                {skills.map((skill, index) => {
                    const IconComponent = skill.icon;
                    return (
                        <motion.div
                            key={index}
                            whileHover={{ scale: 1.05, boxShadow: "0px 4px 15px rgba(0,0,0,0.3)" }}
                            whileTap={{ scale: 0.97 }}
                            transition={{ type: "spring", stiffness: 300 }}
                            className="flex items-center gap-4 p-4 bg-neutral-800 rounded-lg shadow-md cursor-pointer transition-all duration-300"
                        >
                            {/* Rotating Icon on Hover */}
                            <motion.div
                                whileHover={{ rotate: 360 }}
                                transition={{ type: "spring", stiffness: 150, damping: 10 }}
                            >
                                <IconComponent className={`${skill?.color}`} size={28} />
                            </motion.div>
                            <div>
                                <h4 className="text-white font-semibold">{skill.name}</h4>
                                <p className="text-sm text-gray-400">{skill.level}</p>
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </CustomModal>

    );
};

export default SKillsModal;
