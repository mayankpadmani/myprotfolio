"use client";
import { motion } from "framer-motion";

export default function Skills() {
  const gameVfxSkills = [
    "3D Modeling",
    "Texturing",
    "Lighting",
    "Cinematic Storytelling",
    "Animation",
    "Scene Composition",
    "Worldbuilding",
  ];

  const webDevSkills = [
    "UI/UX Design",
    "Responsive Design",
    "API Integration",
    "SEO Optimization",
    "Debugging",
    "Creative Coding",
    "Deployment",
  ];

  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="skills"
      className="relative w-full px-6 py-20 flex justify-center items-center text-black overflow-hidden "
    >

      <div className="relative z-10 max-w-6xl w-full space-y-16">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center bg-gradient-to-r from-black to-black/100 text-transparent bg-clip-text"
        >
          Skills & Tools
        </motion.h2>

        {/* 3D & VFX Skills */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="space-y-6"
        >
          {/* <h3 className="text-2xl font-semibold text-center bg-gradient-to-r from-white to-black text-transparent bg-clip-text">
            3D & VFX
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {gameVfxSkills.map((skill) => (
              <motion.span
                key={skill}
                variants={itemVariants}
                className="px-5 py-2 rounded-full bg-white/10 text-black-200 text-sm md:text-base font-medium shadow-[0_0_12px_rgba(255,255,255,0.15)] backdrop-blur-sm hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] transition duration-300"
              >
                {skill}
              </motion.span>
            ))}
          </div> */}
        </motion.div>

        {/* Web Dev Skills */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h3 className="text-2xl font-semibold text-center bg-gradient-to-r from-white to-black text-transparent bg-clip-text">
            Web Development
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {webDevSkills.map((skill) => (
              <motion.span
                key={skill}
                variants={itemVariants}
                className="px-5 py-2 rounded-full bg-white/10 text-black-200 text-sm md:text-base font-medium shadow-[0_0_12px_rgba(255,255,255,0.15)] backdrop-blur-sm hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] transition duration-300"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
