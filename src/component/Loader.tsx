"use client";

import { motion } from "framer-motion";

export default function Loading() {
  return (
    <div className="fixed top-0 left-0 w-full h-full z-[9999] bg-[#0b0617] flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="text-center"
      >
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-3xl sm:text-5xl font-bold bg-gradient-to-r from-[#7f3afc] to-[#a867fc] text-transparent bg-clip-text"
        >
          Awakening Interface
        </motion.h1>
        <motion.div
          className="mt-6 w-48 h-1 bg-gradient-to-r from-[#7f3afc] to-[#a867fc] rounded-full"
          initial={{ width: 0 }}
          animate={{ width: "12rem" }}
          transition={{ delay: 0.6, duration: 1.2, ease: "easeInOut" }}
        />
      </motion.div>
    </div>
  );
}
