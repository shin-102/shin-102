"use client";

import { motion } from "framer-motion";
import { skills } from "@/lib/data";
import Image from "next/image";
import { useState } from "react";

export function Skills() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const categories = {
    frontend: skills.filter(s => s.category === "frontend"),
    backend: skills.filter(s => s.category === "backend"),
    design: skills.filter(s => s.category === "design"),
    tools: skills.filter(s => s.category === "tools"),
    other: skills.filter(s => s.category === "other"),
  };

  const categoryLabels = {
    frontend: "Frontend",
    backend: "Backend",
    design: "Design",
    tools: "Tools",
    other: "Others",
  };

  const categoryColors = {
    frontend: "from-blue-500/20 to-cyan-500/20 border-blue-500/30",
    backend: "from-green-500/20 to-emerald-500/20 border-green-500/30",
    design: "from-purple-500/20 to-pink-500/20 border-purple-500/30",
    tools: "from-orange-500/20 to-yellow-500/20 border-orange-500/30",
    other: "from-zinc-500/20 to-zinc-600/20 border-zinc-500/30",
  };

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Tech Stack</h2>
          <p className="text-zinc-400 text-lg">Technologies I work with daily</p>
        </motion.div>

        {/* Category Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {Object.entries(categories).map(([category, categorySkills], catIndex) => (
            categorySkills.length > 0 && (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: catIndex * 0.1 }}
                onMouseEnter={() => setActiveCategory(category)}
                onMouseLeave={() => setActiveCategory(null)}
                className="group"
              >
                <div className={`relative rounded-2xl p-6 bg-gradient-to-br ${categoryColors[category as keyof typeof categoryColors]} backdrop-blur-xl border transition-all duration-500 ${
                  activeCategory === category ? "scale-[1.02] shadow-2xl" : ""
                }`}>
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className="h-1 w-12 rounded-full bg-gradient-to-r from-zinc-600 to-zinc-400" />
                    <h3 className="text-2xl font-bold text-zinc-100">
                      {categoryLabels[category as keyof typeof categoryLabels]}
                    </h3>
                    <div className="h-1 flex-1 rounded-full bg-gradient-to-r from-zinc-400 to-transparent" />
                  </div>

                  {/* Skills Grid */}
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {categorySkills.map((skill, index) => (
                      <SkillCard key={skill.name} skill={skill} index={index} />
                    ))}
                  </div>
                </div>
              </motion.div>
            )
          ))}
        </div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-xl border border-white/10"
        >
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
            {Object.entries(categories).map(([category, categorySkills]) => (
              categorySkills.length > 0 && (
                <div key={category}>
                  <div className="text-3xl font-bold text-emerald-400 mb-1">
                    {categorySkills.length}
                  </div>
                  <div className="text-sm text-zinc-500 capitalize">
                    {category}
                  </div>
                </div>
              )
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function SkillCard({ skill, index }: { skill: any; index: number }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      whileHover={{ y: -4, scale: 1.05 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative group"
    >
      <div className="relative p-4 rounded-xl bg-zinc-900/50 border border-white/10 hover:border-white/20 hover:bg-zinc-900/70 transition-all duration-300">
        {/* Glow Effect */}
        <motion.div
          animate={{ opacity: isHovered ? 0.3 : 0 }}
          className="absolute inset-0 rounded-xl bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 blur-xl"
        />

        <div className="relative flex flex-col items-center gap-3">
          {/* Icon */}
          {skill.icon && (
            <div className="relative w-12 h-12 rounded-lg overflow-hidden bg-white/5 p-2 group-hover:bg-white/10 transition-colors">
              <Image
                src={skill.icon}
                alt={skill.name}
                fill
                className="object-contain p-1"
              />
            </div>
          )}

          {/* Name */}
          <span className="text-sm font-medium text-zinc-300 text-center leading-tight">
            {skill.name}
          </span>
        </div>
      </div>
    </motion.div>
  );
}
