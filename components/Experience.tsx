"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";
import { GlassCard } from "./GlassCard";
import { experiences } from "@/lib/data";

export function Experience() {
  return (
    <section id="experience" className="py-20 px-4 relative">
      {/* Increased from max-w-5xl to max-w-7xl to widen the entire section layout */}
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Work History</h2>
          <p className="text-zinc-400 text-lg">My professional journey</p>
        </motion.div>

        <div className="relative">
          {/* Vertical Timeline Line - Kept perfectly centered on desktop */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-zinc-700 to-transparent" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline Dot - Kept perfectly centered on desktop */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 -ml-2 rounded-full bg-zinc-700 border-4 border-zinc-950 z-10">
                  <div className="absolute inset-0 rounded-full bg-cyan-500 animate-ping opacity-75" />
                  <div className="relative w-full h-full rounded-full bg-cyan-500" />
                </div>

                {/*
                  Content Card: Back to your alternating structure.
                  Increased from md:w-5/12 (41%) to md:w-[47%] to maximize width
                  while leaving just a small 6% gap in the center for the timeline line.
                */}
                <div className="ml-20 md:ml-0 w-full md:w-[47%]">
                  <GlassCard className="group p-6 md:p-8">
                    <div className="flex items-start gap-3 mb-4">
                      <div className="p-2 rounded-lg bg-cyan-500/10 group-hover:bg-cyan-500/20 transition-colors shrink-0">
                        <Briefcase className="w-5 h-5 text-cyan-500" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-zinc-100 mb-1">
                          {exp.position}
                        </h3>
                        <p className="text-cyan-500 font-medium mb-2">
                          {exp.company}
                        </p>
                        <div className="flex items-center gap-2 text-sm text-zinc-500">
                          <Calendar className="w-4 h-4" />
                          <span>{exp.period}</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-zinc-400 leading-loose text-sm md:text-base space-y-3">
                      {exp.description
                        .trim()
                        .split(/•\s*/) // Splits globally at every single bullet point + trailing space
                        .map((block, blockIndex) => {
                          const trimmedBlock = block.trim();

                          // Skip empty strings (like the chunk before the very first bullet point)
                          if (!trimmedBlock) return null;

                          return (
                            <div key={blockIndex} className="flex items-start">
                              <span className="inline-flex w-3 h-3 me-3 bg-cyan-500 rounded-full animate-glow duration-200 mt-1.5 shrink-0" />
                              <span className="flex-1 whitespace-pre-line">{trimmedBlock}</span>
                            </div>
                          );
                        })}
                    </div>
                  </GlassCard>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
