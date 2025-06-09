"use client"
import { Element } from "react-scroll";
import ProjectCard from "./projectCard";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { useState } from "react";

export default function Projects() {

    const reactProjects = [
        {
            name: "Risk Management System",
            details: "A Risk Management System (RMS) is a structured framework that identifies, assesses, risks to safeguard an organization’s objectives.",
            overview: "ERMVare is a next-generation ERM solution perfectly aligned with COSO guidelines & ISO 31000 standards. It enables you to control the full lifecycle of your ERM framework, ensuring real-time updates, dynamic approvals, efficient risk treatment, & customized reports. ERMVare lets you",
            img: "/assets/ermvare.png",
            problemStatement: "Organizations face a wide range of risks that can impact their operations, financial stability, and reputation. These risks may arise from regulatory compliance issues, cybersecurity threats, operational failures, or external market changes. Traditional risk management approaches are often fragmented, lack real-time monitoring, and fail to provide proactive risk mitigation strategies.",
            solution: "A Risk Management System addresses these challenges by offering a centralized platform to identify, assess, mitigate, and monitor risks effectively. By integrating real-time analytics, automated workflows, and compliance tracking, the system helps organizations make data-driven decisions, minimize potential losses, and ensure business continuity.",
            demo: "https://r3.ermvare.com/app/register",
            sourceCodeEnable: false,
            tech: [, "React", "Material UI", "Redux toolkit", "Antd V2 Plot"]
        },

        // {
        //     name: "Full Stack Discord Clone",
        //     details: "Using Next.js building a fullstack discord clone with realtime messaging , Server and channel creation , perform audio and video call",
        //     demo: "https://lonely-bedroom.surge.sh/",
        //     code: "https://github.com/Sameer-472/expense-tracker-rebuild",
        //     isPending: true,
        //     sourceCodeEnable: true,
        //     tech: ["Typescript", "Next.js", "Socket.io", "Shade Cn", "Zod", "Clerk"]
        // },
        // {
        //     name: "React Quiz App",
        //     details: "made this Quiz app with React and Typscript",
        //     demo: "https://wary-airplane.surge.sh/",
        //     code: "https://github.com/Sameer-472/Quiz-app-",
        //     sourceCodeEnable: true,
        //     tech: ["Typescript", "React", "Material UI", "Redux"]
        // },

    ]

    const web3Projects = [
        {
            name: "Decentralize Exchanger",
            details: "A simple clone of uniswap for swapping two tokens",
            demo: "https://profound-bombolone-bc9b48.netlify.app/",
            code: "https://github.com/Sameer-472/Decentralize-Exchanger",
            overview: "The Decentralized Exchange (DEX) Clone is a blockchain-based trading platform that allows users to swap cryptocurrencies securely without relying on intermediaries. Built on smart contracts, it ensures transparent and trustless transactions while offering liquidity pools, token swaps, and wallet integrations. The platform prioritizes security, efficiency, and user control over assets, eliminating the need for a central authority.",
            img: "/assets/decExchanger.png",
            tech: ["JavaScript", "React", "Ether.js", "Node.js", "Express", "1inch Aggregator"],
            sourceCodeEnable: true,
        },
        {
            name: "Web3.0 Ethereum transfer app",
            details: "A decentralized Ethereum transfer app that allows users to securely send Ether with low gas fees",
            overview: "The Web3.0 Ethereum Transfer App is a decentralized platform that enables users to send Ether to any wallet address with minimal gas fees. Built on blockchain technology, it leverages smart contracts for secure, transparent, and efficient transactions. The app integrates with MetaMask and other Web3 wallets, ensuring seamless user experience while maintaining decentralization. Its modern UI, powered by React, offers an intuitive interface for smooth crypto transfers.",
            img: "/assets/ethSender.png",
            demo: "https://etherblockchain.netlify.app/",
            code: "https://github.com/Sameer-472/Web-3.0-blockchain-project",
            tech: ["Javascript", "React", "Ether.js", "Openzepline", "Hardhat", "Solidity"],
            sourceCodeEnable: true,
        },
    ]

    const nextProjects = [
        {
            name: "Full Stack Discord Clone",
            details: "Using Next.js building a fullstack discord clone with realtime messaging , Server and channel creation , perform audio and video call",
            overview: "The Discord Clone aims to provide a real-time, feature-rich communication platform where users can engage in voice, video, and text conversations. Designed for online communities, it supports seamless server creation, role-based permissions, and interactive messaging.",
            img: "/assets/discord-image.jpg",
            demo: "https://github.com/Sameer-472/Discord-Clone",
            code: "https://github.com/Sameer-472/Discord-Clone",
            sourceCodeEnable: true,
            tech: ["Typescript", "Next.js", "Socket.io", "Zod", "Clerk"]
        },
        {
            name: "Next.js Authentication",
            details: "Build the Next auth toolkit using the newest Next Auth v5 (Auth.js).Worked on Two Factor Authentication (2FA), Forgot Password functionality, Email Verification functionality, Credential Login, OAuth (Google & Github) Login and much more.",
            overview: "Build the Next auth toolkit using the newest Next Auth v5 (Auth.js).Worked on Two Factor Authentication (2FA), Forgot Password functionality, Email Verification functionality, Credential Login, OAuth (Google & Github) Login and much more",
            img: "/assets/Next auth.png",
            demo: "https://github.com/Sameer-472/Next.js-Authentication",
            code: "https://github.com/Sameer-472/Next.js-Authentication",
            sourceCodeEnable: true,
            tech: ["Typescript", "Next.js", "Next.js Auth", "Zod", "Prisma DB" , "Neon"]
        },
    ]

    const [projects, setProjects] = useState(reactProjects);
    const [status, setStatus] = useState("reactProject")


    return (
        <motion.div initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 100 }}
            viewport={{ once: true }}>
            <Element name="projects" className="flex items-center justify-center flex-col my-10">
                <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold mb-2 dark:text-white text-gray-800">Showcasing My Work 💡</h2>
                <p className="dark:text-gray-400 text-gray-500 mb-8 text-center px-6">A glimpse into my personal and professional projects—where ideas turn into reality.</p>
                <div className="flex justify-between gap-2 mb-5">
                    <Button onClick={() => {
                        setProjects(reactProjects)
                        setStatus("reactProject")
                    }} variant={status == "reactProject" ? "default" : "outline"}>React Projects</Button>
                    <Button variant={status == "nextProject" ? "default" : "outline"} onClick={() => {
                        setProjects(nextProjects)
                        setStatus("nextProjects")
                    }} >Next.js Projects</Button>
                    <Button variant={status == "web3Project" ? "default" : "outline"} onClick={() => {
                        setProjects(web3Projects)
                        setStatus("web3Project")
                    }} >Web 3 Projects</Button>
                </div>
                <div className="relative w-full mx-auto grid grid-cols-12 gap-6 px-6 lg:px-32">
                    {projects.map((item, index) => (
                        <div key={index} className="col-span-12 md:col-span-6">
                            <ProjectCard
                                key={index}
                                title={item.name}
                                description={item.details}
                                tags={item.tech}
                                img={item?.img}
                                link={item.demo}
                                item={item}
                            />
                        </div>
                    ))}
                </div>
            </Element>
        </motion.div>
    );
}
