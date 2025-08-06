"use client";

import { useWindowDimensions } from "@/helper/useWindow";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { SiGit, SiHtml5, SiJavascript, SiNextdotjs, SiReact, SiRedux, SiTailwindcss } from "react-icons/si";
import useModalStore from "@/store/useModalStore";
import BentoGrid from "./BentoGrid";
import Link from "next/link";
import { Element } from "react-scroll";
import Transition from "./Transition";
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

  const { openModal } = useModalStore();

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation((prev) => prev + 2); // Rotate icons
    }, 50);
    return () => clearInterval(interval);
  }, []);

  const contentContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.23,
      },
    },
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        ease: "easeOut",
        duration: 0.3,
      },
    },
  };

  return (
    // <motion.div
    //   initial={{ opacity: 0, y: 50 }}
    //   whileInView={{ opacity: 1, y: 0 }}
    //   transition={{ duration: 1 }}
    //   viewport={{ once: true }}
    // >
    //   <Element name="home" className=" flex flex-col justify-center items-center text-center pt-24 mt-5" style={{ height: height - 30 }}>
    //     {/* Rotating Icons */}
    //     <div className="relative w-fit h-fit">
    //       {icons.map(({ icon, angle, color }, index) => {
    //         const x = 85 * Math.cos((angle + rotation) * (Math.PI / 180));
    //         const y = 85 * Math.sin((angle + rotation) * (Math.PI / 180));
    //         const IconComponent = icon;
    //         return (
    //           <motion.div
    //             key={index}
    //             className="absolute left-15 top-16 w-8 h-8"
    //             animate={{ x, y }}
    //             transition={{ repeat: Infinity, ease: "linear", duration: 0.6 }}
    //           >
    //             <IconComponent className={`${color} w-6 h-6`} />
    //           </motion.div>
    //         );
    //       })}

    //       {/* Profile Image */}
    //       <Image
    //         src="/assets/profile.jpeg"
    //         alt="Profile"
    //         width={150}
    //         height={150}
    //         className="rounded-full border-4 border-gray-800 shadow-lg"
    //       />
    //     </div>

    //     {/* Title & Bio */}
    //     <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold my-5 px-4">
    //       Hi, I&apos;m <span className="text-blue-400">Sameer Khan</span>
    //     </h1>


    //     <p className="text-center text-base sm:text-base md:text-lg lg:text-xl text-gray-500 dark:text-gray-400 max-w-lg px-3">
    //       I'm a Frontend developer with 2+ years of experience passionate about building sleek UIs.Bringing ideas to life with cutting-edge tech!🚀
    //     </p>

    //     <div className="flex gap-2 my-5">
    //       <Button onClick={() => {
    //         window.open('/SameerKhan.resume.pdf', '_blank');
    //       }}> Get Resume </Button>
    //       <Button onClick={() => openModal("SkillModal")}> My Tech Stack</Button>
    //     </div>
    //     <div className="flex space-x-6 my-5">
    //       <a href="https://github.com/Sameer-472" target="_blank" rel="noopener noreferrer">
    //         <Github className={"w-6 h-6 transition-transform duration-300 hover:scale-115 hover:text-blue-500"} />
    //       </a>
    //       <a href="https://www.linkedin.com/in/sameer-khan472/" target="_blank" rel="noopener noreferrer">
    //         <Linkedin className={"w-6 h-6 transition-transform duration-300 hover:scale-115 hover:text-blue-500"} />
    //       </a>
    //       <a href="mailto:muhammadsameer2016@yahoo.com">
    //         <Mail className={"w-6 h-6 transition-transform duration-300 hover:scale-115 hover:text-blue-500"} />
    //       </a>
    //       <a href="https://x.com/Sameerkhan_45" target="_blank" rel="noopener noreferrer">
    //         <X className={"w-6 h-6 transition-transform duration-300 hover:scale-115 hover:text-blue-500"} />
    //       </a>
    //     </div>
    //   </Element>
    // </motion.div>
    <Element name="home" className="flex flex-col w-full mx-auto px-6 lg:px-32 overflow-clip mt-10">
      <motion.section
        variants={contentContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
        }}
        id="hero-section"
        className="relative w-full flex flex-col items-center justify-between py-10 lg:py-16"
      >
        <div className="flex flex-col lg:flex-row items-center justify-between gap-20 z-10">
          <div className="w-full md:w-1/2">
            <div className="w-full lg:w-10/12">
              <motion.div variants={contentVariants}>
                <Link
                  href="#contact-section"
                  className="inline-flex items-center gap-3 bg-base-300/20 px-3 py-2 rounded-lg cursor-pointer mb-5"
                >
                  <span className="inline-block bg-purple-500 w-2 h-2 rounded-full shadow-2xl shadow-purple-500 animate-pulse" />
                  <span className="text-purple-500 font-bold text-xs uppercase mr-3 mt-px">
                    Open to work
                  </span>
                </Link>
              </motion.div>
              <motion.h1
                variants={contentVariants}
                className="font-display text-gray-800 dark:text-white text-4xl lg:text-5xl leading-snug  font-extrabold mb-8"
              >
                {/* Hi&amp; */}
                I&apos; m Sameer a Frontend developer
              </motion.h1>
              <motion.p
                variants={contentVariants}
                className="text-base leading-relaxed text-gray-600 dark:text-white tracking-normal font-semibold mb-3"
              >
                I make<Transition /> passionate about building user-friendly and scalable web applications.
                I specialize in <span className="text-purple-500">React</span>, <span className="text-purple-500">JavaScript</span>, and modern UI frameworks.
              </motion.p>

              <motion.p
                variants={contentVariants}
                className="text-base leading-relaxed text-gray-600 dark:text-white tracking-normal font-semibold"
              >
                I focus on crafting high-performance, scalable, and maintainable web applications with clean and efficient code.
              </motion.p>

            </div>
          </div>
          <div className="flex w-full lg:w-1/2 justify-center">
            <BentoGrid />
          </div>
        </div>
        <motion.div
          variants={{
            hidden: { opacity: 0, x: -20 },
            visible: { opacity: 1, x: 0 },
          }}
          className="w-full"
        >
          {/* <IconSlider icons={techLogosArrayComplete} /> */}
        </motion.div>
      </motion.section>
    </Element >
  );
}
