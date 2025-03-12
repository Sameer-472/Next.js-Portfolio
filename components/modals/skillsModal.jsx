"use client"

import React from 'react'
import { CustomModal } from '../customModal'
import useModalStore from '@/store/useModalStore';
import { SiReact, SiNextdotjs, SiJavascript, SiHtml5, SiTypescript, SiTailwindcss, SiDocker, SiJira , SiGit, SiPython, SiNodedotjs } from "react-icons/si";

const SKillsModal = () => {

    const { isOpen, type, closeModal } = useModalStore();
    console.log("isOpen", isOpen, type);

    const skills = [
        { name: "React", level: "Expert", icon: <SiReact className="text-sky-500" size={28} /> },
        { name: "Next.js", level: "Expert", icon: <SiNextdotjs className="text-white" size={28} /> },
        { name: "JavaScript", level: "Expert", icon: <SiJavascript className="text-yellow-400" size={28} /> },
        { name: "HTML/CSS", level: "Expert", icon: <SiHtml5 className="text-orange-500" size={28} /> },
        { name: "TypeScript", level: "Professional", icon: <SiTypescript className="text-blue-500" size={28} /> },
        { name: "Tailwind CSS", level: "Professional", icon: <SiTailwindcss className="text-teal-400" size={28} /> },
        { name: "Docker", level: "Professional", icon: <SiDocker className="text-sky-400" size={28} /> },
        { name: "Jira", level: "Professional", icon: <SiJira className="text-blue-400" size={28} /> },
        { name: "Git", level: "Professional", icon: <SiGit className="text-red-500" size={28} /> },
        { name: "Python", level: "Beginner", icon: <SiPython className="text-blue-400" size={28} /> },
        { name: "Node.js", level: "Professional", icon: <SiNodedotjs className="text-green-500" size={28} /> },
    ];

    return (
        <CustomModal open={isOpen} title={"My Skills"} onClose={closeModal}>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-6 overflow-y-auto max-h-[70vh]">
                {skills.map((skill, index) => (
                    <div
                        key={index}
                        className="flex items-center gap-4 p-4 bg-neutral-700 rounded-lg shadow-inner"
                    >
                        {skill.icon}
                        <div>
                            <h4 className="text-white font-medium">{skill.name}</h4>
                            <p className="text-sm text-gray-300">{skill.level}</p>
                        </div>
                    </div>
                ))}
            </div>
        </CustomModal>
    )
}

export default SKillsModal