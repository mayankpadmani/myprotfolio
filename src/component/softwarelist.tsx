"use client";
import { motion } from "framer-motion";
import {
  SiUnrealengine,
  SiBlender,
  SiNextdotjs,
  SiVercel,
  SiReact,
  SiVite,
  SiTailwindcss,
  SiNodedotjs,
  SiAdobeaftereffects,
  SiAdobephotoshop,
  SiNuke,
  SiFastapi,
  SiPython,
} from "react-icons/si";
import React from "react";

// Store icon components, not JSX elements
const categories = [
  {
    title: "Web Development Tools",
    items: [
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Node.js", icon: SiNodedotjs },
      { name: "React", icon: SiReact },
      { name: "Vite", icon: SiVite },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Vercel", icon: SiVercel },
      { name: "FastAPI", icon: SiFastapi },
      { name: "Python", icon: SiPython },
    ],
  },
];

export default function SoftwareList() {
  return (
    <section className="w-full px-6 py-20 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-16">
          {categories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: catIndex * 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold mb-8 text-gray-300 text-center">
                {category.title}
              </h3>
              <div className="flex flex-wrap justify-center gap-10">
                {category.items.map((software) => {
                  const Icon = software.icon;
                  return (
                    <motion.div
                      key={software.name}
                      whileHover={{ scale: 1.08 }}
                      className="flex flex-col items-center space-y-3 group cursor-pointer"
                    >
                      <div className="flex items-center justify-center w-20 h-20 text-gray-300 group-hover:text-white transition-colors">
                        <Icon size={64} />
                      </div>
                      <p className="text-gray-400 group-hover:text-gray-200 text-sm transition-colors">{software.name}</p>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
