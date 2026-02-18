"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ExternalLink, InstagramIcon } from "lucide-react";

export default function Organizations() {
    const showRoyalVerse = false;
    const glowVariants = {
        animate: {
            scale: [1, 1.05, 1],
            y: [0, -20, 0],
            x: [0, 20, 0],
            transition: {
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
            },
        },
    };

    return (
        <div className="relative  text-white overflow-hidden">


            {/* --- CINEMATRYX --- */}
            <motion.section
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="min-h-screen relative z-10 flex flex-col items-center justify-center px-4 text-center py-20"
            >
                <Image
                    src="/cinematryxstudio.png"
                    alt="Cinematryx Logo"
                    width={350}
                    height={350}
                    className="mb-6"
                />
                <h1 className="text-4xl sm:text-5xl font-bold mb-4">
                    Cinematryx Studio
                </h1>
                <p className="max-w-2xl text-lg sm:text-xl mb-6 text-black-300">
                    Cinematryx is a high-end VFX and CGI powerhouse fusing cinematic
                    storytelling with real-time workflows. From immersive cutscenes to
                    virtual worlds, we deliver photoreal magic with technical precision.
                </p>

                {/* Tags */}
                <div className="flex flex-wrap justify-center gap-3 mb-8">
                    {[
                        "VFX",
                        "CGI",
                        "Cinematics",
                        "Virtual Production",
                        "Simulation",
                        "Worldbuilding",
                    ].map((tag) => (
                        <motion.span
                            key={tag}
                            whileHover={{ scale: 1.1 }}
                            className="inline-flex items-center px-5 py-2 rounded-full border border-white bg-white/10 text-black-200 text-sm md:text-base font-medium shadow-[0_0_10px_rgba(255,255,255,0.3)] backdrop-blur-sm transition duration-300"
                        >
                            {tag}
                        </motion.span>
                    ))}
                </div>

                {/* Extra Info */}
                <div className="text-black max-w-2xl text-sm md:text-base space-y-2 mb-6">
                    <p>
                        <strong>Mission:</strong> Empower creators with stunning visuals
                        using next-gen real-time pipelines.
                    </p>
                    <p>
                        <strong>What We Do:</strong> Feature film VFX, AAA game trailers,
                        simulations, and cinematic cutscenes.
                    </p>
                    <p>
                        <strong>Vision:</strong> Build the most agile virtual production
                        lab for indie studios & creative teams.
                    </p>
                </div>

                <motion.a
                    href="https://www.instagram.com/cinematryx.studio/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2  rounded-xl text-black-200 font-semibold tracking-wide "
                    whileHover={{ scale: 1.07 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label="Visit Cinematryx Studio on Instagram"
                >
                    Visit Instagram
                    <InstagramIcon size={20} />
                </motion.a>

            </motion.section>

            {/* --- ROYALVERSE --- */}
            {showRoyalVerse && (
    <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="min-h-screen relative z-10 flex flex-col items-center justify-center px-4 text-center py-20"
    >
        <Image
            src="/royalverse.png"
            alt="RoyalVerse Logo"
            width={350}
            height={350}
            className="mb-6"
        />

        <h1 className="text-4xl sm:text-5xl font-bold mb-4">RoyalVerse</h1>

        <p className="max-w-2xl text-lg sm:text-xl mb-6 text-black-300">
            RoyalVerse is a futuristic tech lab where creativity meets code. We
            design gamified ecosystems, AI tools, and web platforms for tomorrow’s
            digital creators and worldbuilders.
        </p>

        <div className="flex flex-wrap justify-center gap-3 mb-8">
            {[
                "AI Tools",
                "Web Platforms",
                "Modular Dev",
                "Game Development",
                "Realtime UX",
                "Digital Ecosystems",
            ].map((tag) => (
                <motion.span
                    key={tag}
                    whileHover={{ scale: 1.1 }}
                    className="inline-flex items-center px-5 py-2 rounded-full border border-white bg-white/10 text-black-200 text-sm md:text-base font-medium shadow-[0_0_10px_rgba(255,255,255,0.3)] backdrop-blur-sm transition duration-300"
                >
                    {tag}
                </motion.span>
            ))}
        </div>

        <div className="text-black max-w-2xl text-sm md:text-base space-y-2 mb-6">
            <p><strong>Mission:</strong> Empower young developers and artists.</p>
            <p><strong>What We Do:</strong> Games, full-stack tools, AI solutions.</p>
            <p><strong>Vision:</strong> One unified creative platform.</p>
        </div>
    </motion.section>
)}
        </div >
    );
}
