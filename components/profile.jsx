"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, X } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

// Define icons and their initial positions
const icons = [
  { src: "/assets/react-svg.svg", angle: 0 }, // Top
  { src: "/assets/javascript.svg", angle: 60 },
  { src: "/assets/html.svg", angle: 120 },
  { src: "/assets/css3.svg", angle: 180 },
  { src: "/assets/redux.svg", angle: 240 },
  { src: "/assets/next.svg", angle: 300 },
];

export function Profile() {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation((prev) => prev + 2); // Rotate icons
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className=" flex flex-col items-center text-center pt-24 mt-5">
      {/* Rotating Icons */}
      <div className="relative w-fit h-fit">
        {icons.map(({ src, angle }, index) => {
          const x = 110 * Math.cos((angle + rotation) * (Math.PI / 180));
          const y = 110 * Math.sin((angle + rotation) * (Math.PI / 180));
          return (
            <motion.div
              key={index}
              className="absolute left-20 top-22 w-10 h-10"
              animate={{ x, y }}
              transition={{ repeat: Infinity, ease: "linear", duration: 0.1 }}
            >
              <Image src={src} alt="Icon" width={32} height={32} />
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
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold my-5">
        Hi, I&apos;m <span className="text-blue-400">Sameer Khan</span>
      </h1>
      <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-400 mt-2 max-w-lg">
        AI-Enhanced Frontend Developer with 4+ years of experience.
      </p>
      <div className="flex space-x-6 my-5">
        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
          <Github className={"w-8 h-8 transition-transform duration-300 hover:scale-125 hover:text-blue-500"} />
        </a>
        <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
          <Linkedin className={"w-8 h-8 transition-transform duration-300 hover:scale-125 hover:text-blue-500"} />
        </a>
        <a href="mailto:your@email.com">
          <Mail className={"w-8 h-8 transition-transform duration-300 hover:scale-125 hover:text-blue-500"} />
        </a>
        <a href="https://twitter.com/yourhandle" target="_blank" rel="noopener noreferrer">
          <X className={"w-8 h-8 transition-transform duration-300 hover:scale-125 hover:text-blue-500"} />
        </a>
      </div>
    </div>
  );
}
