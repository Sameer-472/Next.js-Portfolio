"use client"
import { Github, Linkedin, Mail, X } from 'lucide-react'
import React from 'react'

const Footer = () => {
    return (
        <div className='text-white mt-10 p-6 bg-[#1e293b] w-full flex justify-center'>
            <div className='max-w-5xl w-full flex justify-between items-center'>
                <div>@ 2025 Sameer Khan, All right reserved</div>
                <div>
                    <div className="flex space-x-4">
                        <a href="https://github.com/Sameer-472" target="_blank" rel="noopener noreferrer">
                            <Github className={"w-6 h-6 transition-transform duration-300 hover:text-blue-500"} />
                        </a>
                        <a href="https://www.linkedin.com/in/sameer-khan472/" target="_blank" rel="noopener noreferrer">
                            <Linkedin className={"w-6 h-6 transition-transform duration-300 hover:text-blue-500"} />
                        </a>
                        <a href="mailto:muhammadsameer2016@yahoo.com">
                            <Mail className={"w-6 h-6 transition-transform duration-300 hover:text-blue-500"} />
                        </a>
                        <a href="https://x.com/Sameerkhan_45" target="_blank" rel="noopener noreferrer">
                            <X className={"w-6 h-6 transition-transform duration-300 hover:text-blue-500"} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer