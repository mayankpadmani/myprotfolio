"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="relative w-full px-6 py-24 flex justify-center items-center text-black overflow-hidden "
    >
      

      <div className="relative z-10 max-w-6xl w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-16">
          
          {/* Left - Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8 text-center md:text-left"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-black via-black-300 to-black text-transparent bg-clip-text tracking-tight">
              About Me
            </h2>
            
            <p className="text-black-300 text-[1.05rem] leading-8 tracking-wide max-w-[90%] md:max-w-full mx-auto md:mx-0">
  I'm <span className="font-semibold text-black">Mayank Padmani</span> — an AI Systems Builder, Machine Learning Enthusiast & Full-Stack Web Developer driven by innovation, automation, and intelligent design.
  Over the years, I’ve blended artificial intelligence, data-driven systems, and modern web development to build applications that are smart, scalable, and user-focused.
</p>

<p className="text-black-300 text-[1.05rem] leading-8 tracking-wide max-w-[90%] md:max-w-full mx-auto md:mx-0">
  From developing intelligent AI agents and training machine learning models, to building responsive web applications using <span className="text-black font-semibold">React</span>, <span className="text-black font-semibold">Next.js</span>, and <span className="text-black font-semibold">Node.js</span> — I design, develop, and optimize every layer of the system.
  My work isn’t about following trends; it’s about engineering smart solutions that solve real-world problems efficiently and effectively.
</p>

<p className="text-black-300 text-[1.05rem] leading-8 tracking-wide max-w-[90%] md:max-w-full mx-auto md:mx-0">
  <span className="font-semibold text-black">What drives me:</span> 
  <span className="italic text-black">Building intelligent, data-driven systems and high-performance web applications that merge automation, usability, and smart design.</span>
</p>


            {/* Skills */}
            <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-4">
              {[
                "🎯 React, Next.js, Node.js, Tailwind",
                "🚀 Deployment & Optimization"
              ].map((skill, i) => (
                <span
                  key={i}
                  className="inline-flex items-center px-5 py-2 rounded-full border border-black/10 bg-gradient-to-r from-black/10 to-black/5 text-black-200 text-sm md:text-base font-medium shadow-[0_0_10px_rgba(255,255,255,0.05)] backdrop-blur-sm hover:scale-105 hover:shadow-[0_0_18px_rgba(255,255,255,0.15)] transition duration-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right - Quote */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex justify-center md:justify-end"
          >
            <div className="text-black-300 text-lg md:text-xl italic p-8 rounded-2xl border border-black/10 bg-black/5 backdrop-blur-xl shadow-[0_0_25px_rgba(255,255,255,0.05)] max-w-md leading-relaxed">
              "Art and code aren’t separate — together they shape worlds, tell stories, and spark imagination. Every pixel, every frame, every line matters."
              <span className="mt-4 block text-right text-black font-semibold">— Mayank Padmani</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
