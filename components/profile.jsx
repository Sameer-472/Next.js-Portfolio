"use client";

import { useWindowDimensions } from "@/helper/useWindow";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  SiGit,
  SiHtml5,
  SiJavascript,
  SiNextdotjs,
  SiReact,
  SiRedux,
  SiTailwindcss,
} from "react-icons/si";
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
  {
    name: "Next.js",
    icon: SiNextdotjs,
    color: "dark:text-white text-black",
    angle: 51.4,
  },
  {
    name: "JavaScript",
    icon: SiJavascript,
    color: "text-yellow-400",
    angle: 102.8,
  },
  { name: "Redux", icon: SiRedux, color: "text-purple-400", angle: 154.2 },
  { name: "HTML/CSS", icon: SiHtml5, color: "text-orange-500", angle: 205.6 },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    color: "text-teal-400",
    angle: 257,
  },
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
    //       <a href="mailto:msameerkhan407@gmail.com">
    //         <Mail className={"w-6 h-6 transition-transform duration-300 hover:scale-115 hover:text-blue-500"} />
    //       </a>
    //       <a href="https://x.com/Sameerkhan_45" target="_blank" rel="noopener noreferrer">
    //         <X className={"w-6 h-6 transition-transform duration-300 hover:scale-115 hover:text-blue-500"} />
    //       </a>
    //     </div>
    //   </Element>
    // </motion.div>

    <>
      <header className="space-y-2.5">
        <div className="flex flex-col gap-1">
          <h1 className="text-2xl md:text-3xl font-semibold tracking-tight">
            Sameer Khan
          </h1>
          <p className="text-sm text-muted-foreground">Chicago | San Francisco</p>
        </div>
        <div className="text-muted-foreground text-sm">
          <div className="overflow-hidden py-2">
            
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex gap-3">
            <a
              className="w-10 h-10 rounded-lg border border-border bg-background hover:bg-muted flex items-center justify-center transition-colors"
              title="Email"
              href="mailto:kamchybekov.arslan.us@gmail.com"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"></path>
              </svg>
            </a>
            <a
              className="w-10 h-10 rounded-lg border border-border bg-background hover:bg-muted flex items-center justify-center transition-colors"
              target="_blank"
              rel="noopener noreferrer"
              title="Telegram"
              href="https://t.me/kamchybekov7"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"></path>
              </svg>
            </a>
            <a
              className="w-10 h-10 rounded-lg border border-border bg-background hover:bg-muted flex items-center justify-center transition-colors"
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub"
              href="https://github.com/ArslanKamchybekov"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                <path d="M12 .5a12 12 0 0 0-3.79 23.4c.6.11.82-.26.82-.58v-2.02c-3.34.73-4.04-1.61-4.04-1.61-.55-1.41-1.35-1.79-1.35-1.79-1.1-.75.08-.73.08-.73 1.22.09 1.86 1.26 1.86 1.26 1.08 1.85 2.83 1.32 3.52 1.01.11-.79.42-1.32.76-1.62-2.67-.3-5.48-1.34-5.48-5.95 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.16 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.64.25 2.86.12 3.16.77.84 1.24 1.91 1.24 3.22 0 4.62-2.81 5.65-5.49 5.95.43.37.81 1.1.81 2.22v3.29c0 .32.21.7.82.58A12 12 0 0 0 12 .5Z"></path>
              </svg>
            </a>
            <a
              className="w-10 h-10 rounded-lg border border-border bg-background hover:bg-muted flex items-center justify-center transition-colors"
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn"
              href="https://www.linkedin.com/in/arslankamchybekov"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path>
              </svg>
            </a>
          </div>
          <div className="flex items-center gap-2">
            <button
              data-slot="button"
              className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([className*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border bg-background hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-8 px-3 has-[&gt;svg]:px-2.5 gap-2 rounded-sm shadow-none"
              data-cal-namespace="15min"
              data-cal-link="arslan-kamchybekov/15min"
              data-cal-config='{"layout":"month_view"}'
            >
              talk?
            </button>
            <button
              data-slot="button"
              className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([className*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50 h-8 rounded-md gap-1.5 has-[&gt;svg]:px-2.5 w-9 px-0"
            >
              <span className="text-base leading-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-moon"
                  aria-hidden="true"
                >
                  <path d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"></path>
                </svg>
              </span>
              <span className="sr-only">Toggle theme</span>
            </button>
          </div>
        </div>
      </header>
      {/* // version 2 design */}
      <Element
        name="home"
        className="flex flex-col w-full mx-auto px-6 lg:px-32 overflow-clip mt-10"
      >
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
                  I make
                  <Transition /> passionate about building user-friendly and
                  scalable web applications. I specialize in{" "}
                  <span className="text-purple-500">React</span>,{" "}
                  <span className="text-purple-500">JavaScript</span>, and
                  modern UI frameworks.
                </motion.p>

                <motion.p
                  variants={contentVariants}
                  className="text-base leading-relaxed text-gray-600 dark:text-white tracking-normal font-semibold"
                >
                  I focus on crafting high-performance, scalable, and
                  maintainable web applications with clean and efficient code.
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
      </Element>
    </>
  );
}
