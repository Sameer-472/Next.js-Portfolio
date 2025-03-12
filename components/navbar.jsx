"use client";

import { ThemeToggle } from "@/components/theme-toggle";

export function Navbar() {
    return (
      <nav className="z-50 fixed top-4 left-1/2 transform -translate-x-1/2 bg-white dark:bg-gray-700/50 backdrop-blur-md px-6 py-2 rounded-full flex items-center gap-6 shadow-lg dark:text-white text-gray-800 text-sm">
        {["Home", "Experience", "Contact", "Projects"].map((item) => (
          <a
            key={item}
            href="#"
            className="relative text-gray-800 dark:text-white transition-all duration-300 hover:text-blue-500 dark:hover:text-blue-400 hover:scale-110"
          >
            {item}
          </a>
        ))}
        <ThemeToggle />
      </nav>
    );
  }
