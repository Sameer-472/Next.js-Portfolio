"use client"
import Image from 'next/image'
import React from 'react'
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import useModalStore from '@/store/useModalStore'

const Sidebar = () => {

    const { openModal } = useModalStore();

    const menuItem = [
        {
            icon: "/assets/coding.png",
            label: "My Skills",
            onClick: () => openModal("SkillModal")
        },
        {
            icon: "/assets/blog-icon.png",
            label: "My Blogs",
        },
        {
            icon: "/assets/resume-icon.png",
            label: "My Resume",
            onClick: () => openModal("ResumeModal")
        },
        {
            icon: "/assets/project-icon.svg",
            label: "My Projects",
        },
    ]
    return (
        <div className="z-50 fixed top-30 left-15 transform -translate-x-1/2 bg-white dark:bg-gray-700/50 backdrop-blur-md px-4 py-2 rounded-full flex flex-col items-center gap-6 shadow-lg dark:text-white text-gray-800 text-sm">
            {menuItem.map((item, index) => (
                <div key={index}>
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger onClick={item.onClick} className="cursor-pointer"><Image src={item.icon} alt='side-icon' width={30} height={30} /></TooltipTrigger>
                            <TooltipContent side="right" sideOffset={10}>
                                <p>{item.label}</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                </div>
            ))}
        </div>
    )
}

export default Sidebar