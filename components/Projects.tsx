"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { GlassCard } from "./GlassCard";
import { projects } from "@/lib/data"; // Changed to use the raw array
import Image from "next/image";

export function Projects() {
  // Identify all featured projects and those that are not
  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Work</h2>
          <p className="text-zinc-400 text-lg">A selection of projects that showcase my expertise</p>
        </motion.div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-[350px]">

          {/* Map through all Featured Projects using your original Large Preview styling */}
          {featuredProjects.map((project) => (
            <GlassCard
              key={project.id}
              className="md:col-span-2 lg:row-span-2 group overflow-hidden"
              glowEffect
            >
              <div className="h-full flex flex-col">
                <div className="relative h-48 md:h-64 w-full mb-4 overflow-hidden rounded-xl border border-white/10">
                  {project.image && (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 to-transparent" />
                </div>

                <div className="flex-1 px-2">
                  <div className="flex items-start justify-between mb-4">
                    <span className="px-3 py-1 text-xs font-semibold bg-purple-500/20 text-purple-300 border border-purple-500/30 rounded-full">
                      Featured Project
                    </span>
                    <div className="flex gap-2">
                      {project.github && (
                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-2 hover:bg-white/10 rounded-lg transition-colors">
                          <Github className="w-4 h-4" />
                        </a>
                      )}
                      {project.link && (
                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="p-2 hover:bg-white/10 rounded-lg transition-colors">
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                  <p className="text-zinc-400 mb-6 text-sm md:text-base line-clamp-2 md:line-clamp-none">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 px-2 pb-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 text-xs bg-white/5 border border-white/10 rounded-lg">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </GlassCard>
          ))}

          {/* Other Projects - Styling preserved exactly */}
          {otherProjects.slice(0, 8).map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: any; index: number }) {
  // Preserved Span Logic
  const span = index === 0 || index === 3 ? "lg:col-span-2" : "";

  return (
    <GlassCard className={`group overflow-hidden ${span}`}>
      <div className="h-full flex flex-col">
        {project.image && (
          <div className="absolute inset-0 z-0 opacity-10 group-hover:opacity-25 transition-opacity duration-500">
            <Image
              src={project.image}
              alt=""
              fill
              className="object-cover"
            />
          </div>
        )}

        <div className="relative z-10 flex-1 flex flex-col p-2">
          <div className="flex items-start justify-between mb-3">
            <h3 className="text-xl font-semibold group-hover:text-purple-300 transition-colors">
              {project.title}
            </h3>
            <div className="flex gap-2 bg-zinc-900/50 backdrop-blur-md rounded-lg p-1">
              {project.github && (
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-1.5 hover:bg-white/10 rounded transition-colors">
                  <Github className="w-4 h-4" />
                </a>
              )}
              {project.link && (
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="p-1.5 hover:bg-white/10 rounded transition-colors">
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>
          <p className="text-sm text-zinc-300 mb-4 line-clamp-3 bg-zinc-900/40 p-2 rounded-lg backdrop-blur-sm">
            {project.description}
          </p>
        </div>

        <div className="relative z-10 flex flex-wrap gap-2 mt-auto p-2">
          {project.tags.slice(0, 3).map((tag: string) => (
            <span key={tag} className="px-2 py-1 text-[10px] uppercase tracking-wider bg-black/50 border border-white/10 rounded text-zinc-300">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </GlassCard>
  );
}
