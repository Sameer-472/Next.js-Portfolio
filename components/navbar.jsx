"use client";

import { ThemeToggle } from "@/components/theme-toggle";
import { X } from "lucide-react";
import { Menu } from "lucide-react";
import { useState } from "react";
import { Link } from "react-scroll";

export function Navbar() {

  const items = [
    {
      title: "Home",
      key: "home",
    },
    {
      title: "Experience",
      key: "experience",
    },
    {
      title: "Contact",
      key: "contact",
    },
    {
      title: "Projects",
      key: "projects",
    },
  ]

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Work', href: '#work' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];
  return (
    <nav className="z-50 fixed top-4 left-1/2 transform -translate-x-1/2 bg-white dark:bg-gray-700/50 backdrop-blur-md px-6 py-4 rounded-full flex items-center gap-6 shadow-lg dark:text-white text-gray-800 text-sm leading-none max-w-[600px]">
      {items.map(({ title, key }) => (
        <Link
          key={key}
          to={key}
          duration={800}
          className="relative cursor-pointer text-gray-800 dark:text-white transition-all duration-300 hover:text-blue-500 dark:hover:text-blue-400 hover:scale-110 leading-none"
        >
          {title}
        </Link>
      ))}
      {/* <ThemeToggle /> */}
    </nav>
    // <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-md border-b border-border">
    //   <div className="max-w-full mx-12 py-4">
    //     <div className={`flex items-center justify-between`}>
    //       {/* Logo/Name */}
    //       <div className="text-xl font-medium text-foreground">
    //         {/* {`<Frontend Developer/>`} */}

    //       </div>

    //       {/* Desktop Navigation */}
    //       <div className="hidden md:flex items-center justify-center space-x-8">
    //         {items.map(({ title, key }) => (
    //           <Link
    //             key={title}
    //             to={key}
    //             className="cursor-pointer text-[#fffff] hover:text-foreground transition-colors duration-200 text-base relative group font-semibold"
    //           >
    //             {title}
    //             <span className="absolute -bottom-1 left-0 w-0 h-px bg-foreground transition-all duration-200 group-hover:w-full"></span>
    //           </Link>
    //         ))}
    //       </div>

    //       {/* Mobile Menu Button */}
    //       <button
    //         onClick={() => setIsMenuOpen(!isMenuOpen)}
    //         className="md:hidden p-2 text-[#ffff] hover:text-foreground transition-colors font-semibold"
    //         aria-label="Toggle menu"
    //       >
    //         {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
    //       </button>
    //     </div>

    //     {/* Mobile Navigation */}
    //     {isMenuOpen && (
    //       <div className="md:hidden mt-4 pb-4 border-t border-border pt-4">
    //         <div className="flex flex-col space-y-3">
    //           {items.map(({ title, key }) => (
    //             <Link
    //               key={title}
    //               to={key}
    //               onClick={() => setIsMenuOpen(false)}
    //               className="cursor-pointer text-[#ffff] hover:text-foreground transition-colors duration-200 text-sm font-medium py-2"
    //             >
    //               {title}
    //             </Link>
    //           ))}
    //         </div>
    //       </div>
    //     )}
    //   </div>
    // </nav>

  );
}
