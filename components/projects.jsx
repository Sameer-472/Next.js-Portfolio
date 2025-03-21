"use client"
import { Element } from "react-scroll";
import ProjectCard from "./projectCard";
import { motion } from "framer-motion";




const projects = [
    {
        name: "Risk Management System",
        details: "A Risk Management System (RMS) is a structured framework that identifies, assesses, and mitigates risks to safeguard an organization’s objectives. It enables proactive decision-making and resource allocation, enhancing resilience against potential threats",
        img: "/assets/ermvare.png",
        demo: "https://r3.ermvare.com/app/register",
        sourceCodeEnable: false,
        tech: [, "React", "Material UI", "Redux toolkit", "Antd V2 Plot"]
    },
    {
        name: "Talentvare",
        details: "TalentVare simplify employee lifecycle management. From pre-boarding to off-boarding, automate tasks, manage paperwork, and ensure policy compliance.",
        img: "/assets/talentvare.png",
        demo: "https://best-letter.surge.sh/",
        code: "https://github.com/Sameer-472/Alice-and-the-red-queen",
        sourceCodeEnable: true,
        tech: ["React", "CSS", "RTK", "Antd", "Axios"]
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


export default function Projects() {
    return (
        <motion.div initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 100 }}
            viewport={{ once: true }}>
            <Element name="projects" className="flex items-center justify-center flex-col my-10">
                <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold mb-2 dark:text-white text-gray-800">Recent featured projects</h2>
                <p className="dark:text-gray-400 text-gray-500 mb-8 ">Explore some of my personal and proffesional projects</p>
                <div className="relative w-full max-w-5xl mx-auto grid grid-cols-12 gap-6 px-6">
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
