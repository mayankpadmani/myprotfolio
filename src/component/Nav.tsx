"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const pages = [
  { title: "Home", href: "#home" },
  { title: "About", href: "#about" },
  { title: "Skills", href: "#skills" },
  { title: "Projects", href: "#projects" },
  { title: "Contact", href: "#contact" },
];

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-black/0 md:bg-black/0 backdrop-blur-xs">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-3">
        {/* Logo */}
        <h1 className="text-3xl font-extrabold text-black tracking-tight">
          <Image src="/photo1.png" alt="prince" height={50} width={50}/>
        </h1>

        {/* Desktop Nav */}
        <ul className="hidden sm:flex gap-8 text-black-200 text-lg font-medium">
          {pages.map((item) => (
            <li
              key={item.title}
              onClick={() => handleScroll(item.href.slice(1))}
              className="relative group cursor-pointer transition duration-200"
            >
              <span className="text-black hover:text-black transition-colors">
                {item.title}
              </span>
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-black transition-all group-hover:w-full"></span>
            </li>
          ))}
        </ul>

        {/* Action Button + Mobile Toggle */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="sm:hidden p-2 text-black"
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>

          <button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="hidden sm:block bg-white hover:bg-black-200 transition-all px-5 py-2.5 rounded-lg shadow-lg text-sm font-semibold text-black tracking-wide cursor-pointer"
          >
            Let’s Talk
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="sm:hidden text-center text-black mt-4 space-y-4 font-medium pb-4"
          >
            {pages.map((item) => (
              <li
                key={item.title}
                onClick={() => handleScroll(item.href.slice(1))}
                className="hover:text-white transition cursor-pointer"
              >
                {item.title}
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
}