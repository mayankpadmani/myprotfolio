"use client";
import axios from "axios";
import { motion } from "framer-motion";
import { ExternalLink, Globe, Instagram, Youtube, ChevronDown, ChevronUp, Bot, Github } from "lucide-react";
import { useEffect, useState } from "react";

interface Project {
  name: string;
  description: string;
  tech: string[];
  live: string;
  type: string;
}

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);
const [visibleCount, setVisibleCount] = useState<number>(4);

useEffect(() => {
  const fetchProjects = async () => {
    try {
      const response = await fetch("/projects.json"); // ✅ Public folder fetch
      const data = await response.json();

      if (data && data.length > 0) {
        setProjects(
          data.map((project: any) => ({
            name: project.name,
            description: project.description,
            tech: project.techStack || [],
            live: project.liveLink,
            type: project.linkType || "website",
          })).reverse()
        );
      }
      
    } catch (error) {
      console.error("Error fetching projects:", error);
    }
  };

  fetchProjects();
}, []);

const handleShowMore = () => {
  setVisibleCount((prev) => Math.min(prev + 4, projects.length));
};

const handleShowLess = () => {
  setVisibleCount(4);
};

const allVisible = visibleCount >= projects.length;


  return (
    <section
      id="projects"
      className="w-full px-6 py-20 flex flex-col justify-center items-center text-black"
    >
      <div className="max-w-6xl w-full">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-black to-black/100 text-transparent bg-clip-text"
        >
          Featured Projects
        </motion.h2>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 gap-10 auto-rows-fr">
          {projects.slice(0, visibleCount).map((project, index) => (
            <a
              key={project.name}
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit ${project.name} on ${project.type}`}
              className="group"
            >
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.7 }}
                viewport={{ once: true }}
                className="h-full flex flex-col justify-between bg-black/5 backdrop-blur-xl border border-black/10 rounded-2xl p-6  transition-shadow cursor-pointer"
              >
                <div>
                  <h3 className="text-xl font-semibold text-black-200 mb-3 group-hover:underline">
                    {project.name}
                  </h3>
                  <p className="text-sm text-black mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={`${project.name}-${tech}-${techIndex}`}
                        className="text-xs px-3 py-1 bg-white/10 border border-white/20 text-black-300 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex gap-2 items-center mt-auto text-sm text-black-300">
                  {project.type === "website" && <Globe className="w-4 h-4" />}
                  {project.type === "instagram" && <Instagram className="w-4 h-4" />}
                  {project.type === "youtube" && <Youtube className="w-4 h-4" />}
                  {project.type === "bot" && <Bot className="w-4 h-4" />}
                  {project.type === "github" && <Github className="w-4 h-4" />}

                  <span>
                    {project.type === "website" && "Live"}
                    {project.type === "instagram" && "Instagram"}
                    {project.type === "youtube" && "YouTube"}
                    {project.type === "bot" && "Bot"}
                    {project.type === "github" && "Github"}

                  </span>
                </div>
              </motion.div>
            </a>
          ))}
        </div>



        {/* Show More / Show Less Button */}
        {projects.length > 4 && (
          <motion.div
            className="mt-12 flex justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.button
              onClick={allVisible ? handleShowLess : handleShowMore}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="px-6 py-2 text-sm flex items-center gap-2 bg-white/10 text-black border border-white/20 rounded-full hover:bg-white/20 transition"
            >
              {allVisible ? (
                <>
                  Show Less <ChevronUp className="w-4 h-4" />
                </>
              ) : (
                <>
                  Show More <ChevronDown className="w-4 h-4" />
                </>
              )}
            </motion.button>
          </motion.div>
        )}
      </div>
    </section>
  );
}
