"use client";
import { Github, Linkedin, Mail, X } from "lucide-react";
import React, { useEffect } from "react";

const Footer = () => {
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  var lastScrollY = window.scrollY;
  // Show/hide back to top button based on scroll position
  window.addEventListener("scroll", function () {

    lastScrollY = window.scrollY;
  });

  useEffect(() => {
     const offset = window.pageYOffset || document.documentElement.scrollTop;
      if (offset > 300) {
        console.log("true");
      } else {
        console.log("false");
      }
    
  }, [window.pageYOffset])
  

  return (
    <>
      <div className="text-white mt-10 p-6 bg-[#18181B] w-full flex justify-center">
        <div className="max-w-5xl w-full flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-4">
          {/* Copyright Text */}
          <div>@ 2025 Sameer Khan, All rights reserved</div>

          {/* Social Media Links */}
          <div>
            <div className="flex space-x-4 justify-center md:justify-end">
              <a
                href="https://github.com/Sameer-472"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-6 h-6 transition-transform duration-300 hover:text-blue-500" />
              </a>
              <a
                href="https://www.linkedin.com/in/sameer-khan472/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="w-6 h-6 transition-transform duration-300 hover:text-blue-500" />
              </a>
              <a href="mailto:msameerkhan407@gmail.com">
                <Mail className="w-6 h-6 transition-transform duration-300 hover:text-blue-500" />
              </a>
              <a
                href="https://x.com/Sameerkhan_45"
                target="_blank"
                rel="noopener noreferrer"
              >
                <X className="w-6 h-6 transition-transform duration-300 hover:text-blue-500" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* <button
        onClick={() => {
          scrollToTop();
        }}
        class="hidden md:flex fixed bottom-[18%] right-[9px] w-12 h-12 rounded-full cursor-pointer items-center justify-center
           text-white shadow-lg transition-all duration-300 ease-in-out z-[1000]
           from-[#060062] to-[#383381]
           hover:from-[#514d91] hover:to-[#383381] hover:-translate-y-0.5 hover:shadow-xl"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          class="w-5 h-5"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
      </button> */}
    </>
  );
};

export default Footer;
