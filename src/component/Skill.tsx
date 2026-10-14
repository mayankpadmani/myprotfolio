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
      className="relative w-full px-6 py-20 flex justify-center items-center text-white overflow-hidden"
    >
      <div className="relative z-10 max-w-6xl w-full space-y-16">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center bg-gradient-to-r from-white via-gray-100 to-gray-400 text-transparent bg-clip-text"
        >
          Skills & Tools
        </motion.h2>

        {/* Web Dev Skills */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h3 className="text-2xl font-semibold text-center text-gray-200">
            Web Development & Engineering
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {webDevSkills.map((skill) => (
              <motion.span
                key={skill}
                variants={itemVariants}
                className="px-6 py-3 rounded-xl bg-white/5 text-gray-200 text-sm md:text-base font-medium shadow-[0_0_15px_rgba(255,255,255,0.05)] backdrop-blur-md hover:scale-105 hover:bg-white/10 hover:text-white border border-white/10 hover:border-white/30 transition duration-300 cursor-pointer"
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
