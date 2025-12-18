"use client";

import { useWindowDimensions } from "@/helper/useWindow";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { SiBuymeacoffee, SiGit, SiGithub, SiGmail, SiHtml5, SiJavascript, SiLeetcode, SiLinkedin, SiNextdotjs, SiReact, SiRedux, SiTailwindcss, SiTryhackme, SiX, SiYoutube } from "react-icons/si";
import Link from "next/link";
import Transition from "./Transition";
import { Download } from "lucide-react";
import Image from "next/image";

// Define icons and their initial positions
// const icons = [
//   { src: "/assets/react-svg.svg", angle: 0 }, // Top
//   { src: "/assets/javascript.svg", angle: 60 },
//   { src: "/assets/html.svg", angle: 120 },
//   { src: "/assets/css3.svg", angle: 180 },
//   { src: "/assets/redux.svg", angle: 240 },
//   { src: "/assets/next.svg", angle: 300, class: "dark:text-white" },
// ];

// const icons = [
//   { name: "React", icon: SiReact, color: "text-sky-500", angle: 0 },
//   { name: "Next.js", icon: SiNextdotjs, color: "dark:text-white text-black", angle: 51.4 },
//   { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400", angle: 102.8 },
//   { name: "Redux", icon: SiRedux, color: "text-purple-400", angle: 154.2 },
//   { name: "HTML/CSS", icon: SiHtml5, color: "text-orange-500", angle: 205.6 },
//   { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-teal-400", angle: 257 },
//   { name: "Git", icon: SiGit, color: "text-red-500", angle: 308.4 },
// ];

const socialLinks = [
  { href: "https://github.com/Sameer-472", icon: SiGithub, label: "GitHub" },
  { href: "https://www.linkedin.com/in/sameer-khan472/", icon: SiLinkedin, label: "LinkedIn" },
  { href: "https://x.com/Sameerkhan_45", icon: SiX, label: "Twitter/X" },
  { href: "https://leetcode.com/u/Sameer-472/", icon: SiLeetcode, label: "LeetCode" },
  { href: "mailto:msameerkhan407@gmail.com", icon: SiGmail, label: "Email" },
  // { href: "", icon: SiTryhackme, label: "TryHackMe" },
  // { href: "", icon: SiYoutube, label: "YouTube" },
  // { href: "", icon: SiBuymeacoffee, label: "Buy Me a Coffee" },
];


export function Profile() {


  return (
    
    <section className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12 mb-12 md:mb-16">
      {/* Profile Image */}
      <div className="relative group">
        <div className="w-48 h-48 relative flex-shrink-0 rounded-full overflow-hidden shadow-lg ring-4 ring-background group-hover:ring-primary/20 transition-all duration-300">
          <Image
            src="/assets/profile.jpeg"
            alt="Sameer Khan"
            fill
            className="object-cover transition-transform duration-300"
            priority
          />
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col items-center md:items-start space-y-4 flex-1">
        <div className="space-y-2 text-center md:text-left">
          <h1 className="text-2xl md:text-4xl font-bold text-foreground">
            Sameer Khan
          </h1>
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 text-sm md:text-base">
            <span className="text-purple-500"><Transition /></span>
            <span className="text-foreground">•</span>
            <span className="text-purple-500">Open to Work</span>
          </div>
        </div>

        <p className="max-w-2xl text-center md:text-left text-muted-foreground leading-relaxed">
          <span className="text-foreground font-medium">Software Engineer</span> with <span className="text-foreground font-medium">3+ years </span> of experience designing and building scalable, enterprise-grade web applications. Skilled in Backend and Frontend technologies include{' '}
          <span className="text-foreground font-medium">Javascript </span>, and modern frontend frameworks including <span className="text-foreground font-medium"> React, Angular, and Vue.js.</span>{' '}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-3 justify-center md:justify-start">
          <a
            href="mailto:msameerkhan407@gmail.com"
            className="px-6 py-2.5 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all duration-300 font-medium shadow-md hover:shadow-lg focus-ring flex items-center gap-2"
          >
            Get in Touch
          </a>
          <Link
            href="/SWE_Sameer Khan_resume.pdf"
            target="_blank"
            className="px-6 py-2.5 text-secondary-foreground rounded-lg hover:bg-secondary/80 transition-all duration-300 font-medium shadow-md hover:shadow-lg focus-ring flex items-center gap-2 bg-[#800080]"
          >
            <Download size={16} />
            Resume
          </Link>
        </div>

        {/* Social Links */}
        <div className="flex flex-wrap gap-3 justify-center md:justify-start pt-2">
          {socialLinks.map(({ href, icon: Icon, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110 focus-ring rounded-lg p-1"
              aria-label={label}
              title={label}
            >
              <Icon className="w-5 h-5" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
