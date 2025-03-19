"use client";

import { useWindowDimensions } from "@/helper/useWindow";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, X } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { SiGit, SiHtml5, SiJavascript, SiNextdotjs, SiReact, SiRedux, SiTailwindcss } from "react-icons/si";
import { Element } from "react-scroll";


// Define icons and their initial positions
// const icons = [
//   { src: "/assets/react-svg.svg", angle: 0 }, // Top
//   { src: "/assets/javascript.svg", angle: 60 },
//   { src: "/assets/html.svg", angle: 120 },
//   { src: "/assets/css3.svg", angle: 180 },
//   { src: "/assets/redux.svg", angle: 240 },
//   { src: "/assets/next.svg", angle: 300, class: "dark:text-white" },
// ];

const icons = [
  { name: "React", icon: SiReact, color: "text-sky-500", angle: 0 },
  { name: "Next.js", icon: SiNextdotjs, color: "dark:text-white text-black", angle: 51.4 },
  { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400", angle: 102.8 },
  { name: "Redux", icon: SiRedux, color: "text-purple-400", angle: 154.2 },
  { name: "HTML/CSS", icon: SiHtml5, color: "text-orange-500", angle: 205.6 },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-teal-400", angle: 257 },
  { name: "Git", icon: SiGit, color: "text-red-500", angle: 308.4 },
];


export function Profile() {
  const [rotation, setRotation] = useState(0);

  const { height } = useWindowDimensions();

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation((prev) => prev + 2); // Rotate icons
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <Element name="home" className=" flex flex-col items-center text-center pt-24 mt-5" style={{ height: height - 60 }}>
      {/* Rotating Icons */}
      <div className="relative w-fit h-fit">
        {icons.map(({ icon, angle, color }, index) => {
          const x = 110 * Math.cos((angle + rotation) * (Math.PI / 180));
          const y = 110 * Math.sin((angle + rotation) * (Math.PI / 180));
          const IconComponent = icon;
          return (
            <motion.div
              key={index}
              className="absolute left-20 top-22 w-10 h-10"
              animate={{ x, y }}
              transition={{ repeat: Infinity, ease: "linear", duration: 0.1 }}
            >
              <IconComponent className={`${color} w-8 h-8`} />
            </motion.div>
          );
        })}

        {/* Profile Image */}
        <Image
          src="/assets/profile.jpeg"
          alt="Profile"
          width={200}
          height={200}
          className="rounded-full border-4 border-gray-800 shadow-lg"
        />
      </div>
      {/* Title & Bio */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold my-10 px-4">
        Hi, I&apos;m <span className="text-blue-400">Sameer Khan</span>
      </h1>
      <p className="text-center text-base sm:text-base md:text-lg lg:text-xl text-gray-400 max-w-lg">
        I am Frontend Developer with 2+ years of experience.
        using AI to level up dev efficiency and cut down the grind
      </p>
      <div className="flex space-x-6 my-10">
        <a href="https://github.com/Sameer-472" target="_blank" rel="noopener noreferrer">
          <Github className={"w-6 h-6 md:w-8 md:h-8 transition-transform duration-300 hover:scale-115 hover:text-blue-500"} />
        </a>
        <a href="https://www.linkedin.com/in/sameer-khan472/" target="_blank" rel="noopener noreferrer">
          <Linkedin className={"w-6 h-6 md:w-8 md:h-8 transition-transform duration-300 hover:scale-115 hover:text-blue-500"} />
        </a>
        <a href="mailto:muhammadsameer2016@yahoo.com">
          <Mail className={"w-6 h-6 md:w-8 md:h-8 transition-transform duration-300 hover:scale-115 hover:text-blue-500"} />
        </a>
        <a href="https://x.com/Sameerkhan_45" target="_blank" rel="noopener noreferrer">
          <X className={"w-6 h-6 md:w-8 md:h-8 transition-transform duration-300 hover:scale-115 hover:text-blue-500"} />
        </a>
      </div>
    </Element>
  );
}
