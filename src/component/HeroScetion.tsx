"use client";
import Image from "next/image";
import axios from "axios";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import CountUp from "react-countup";

interface Project {
  name: string;
  description: string;
  tech: string[];
  live: string;
}

export default function Hero() {
  const [projects, setProjects] = useState<Project[]>([]);

useEffect(() => {
  const fetchProjects = async () => {
    try {
      const response = await fetch("/projects.json"); // ✅ Reads from public/projects.json
      const data = await response.json();

      if (data && data.length > 0) {
        setProjects(
          data.map((project: any) => ({
            name: project.name,
            description: project.description,
            tech: project.techStack || [],
            live: project.liveLink,
          }))
        );
      }
    } catch (error) {
      console.error("Error fetching projects:", error);
    }
  };

  fetchProjects();
}, []);

console.log("Projects fetched:", projects.length);

  return (
    <section id="home" className="text-black relative min-h-[calc(100vh-4rem)] w-full  text-white px-6 py-20 md:py-0 overflow-hidden">

      

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12 min-h-[calc(100vh-4rem)]">

        {/* Left Block */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="space-y-6 md:pr-10 text-center md:text-left"
        >
          <p className="text-xl md:text-2xl text-black">Hey there, I'm</p>
              <h1 className="text-4xl md:text-6xl font-bold text-black
t bg-clip-text">
  Mayank Padmani
</h1>





          <p className="text-black text-base md:text-lg leading-relaxed">
            AI Developer, Machine Learning Engineer & Full-Stack Developer building intelligent digital systems. 
            Blending smart automation with scalable web architecture to create high-performance, real-world solutions.
          </p>

          {/* Tags */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="flex flex-wrap text-black justify-center md:justify-start gap-4 pt-6"
          >
            {/* <span className="inline-flex items-center px-5 py-2 rounded-full border border-white bg-white/10 text-black-200 text-sm md:text-base font-medium shadow-[0_0_10px_rgba(255,255,255,0.3)] backdrop-blur-sm transition duration-300 hover:scale-105">
              🧠 2+ Years Experience
            </span> */}
            <span className="inline-flex items-center px-5 py-2 rounded-full border border-black bg-black/10 text-black-200 text-sm md:text-base font-medium shadow-[0_0_10px_rgba(255,255,255,0.3)] backdrop-blur-sm transition duration-300 hover:scale-105">
              🚀&nbsp; <CountUp end={projects.length} duration={2.5} /> &nbsp; Projects Completed
            </span>

          </motion.div>
        </motion.div>

        {/* Right Block - Image */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeInOut", delay: 0.3 }}
          className="flex justify-center md:justify-end"
        >
          {/* <Image
          src="/hero.webp"
          alt="Rut"
          className="rounded-full border-4 border-white shadow-xl shadow-white/20"
          width={300}
          height={300}
          priority
        /> */}
          <Image
            src="/photo1.png"
            alt="Mayank Padmani"
            width={400}
            height={400}
            priority
          />
        </motion.div>
      </div>
    </section>
  );
}
