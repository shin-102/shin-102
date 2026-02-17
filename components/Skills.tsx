"use client";

import { motion } from "framer-motion";
import { GlassCard } from "./GlassCard";
import { skills } from "@/lib/data";
import Image from "next/image";

export function Skills() {
  const categories = {
    frontend: skills.filter(s => s.category === "frontend"),
    backend: skills.filter(s => s.category === "backend"),
    tools: skills.filter(s => s.category === "tools"),
    others: skills.filter(s => s.category === "other"),
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
          <p className="text-zinc-400 text-lg">Technologies I work with</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <SkillCategory title="Frontend" skills={categories.frontend} />
          <SkillCategory title="Backend" skills={categories.backend} />
          <SkillCategory title="Tools" skills={categories.tools} />
          <SkillCategory title="Others" skills={categories.others} />
        </div>
      </div>
    </section>
  );
}

function SkillCategory({ title, skills }: { title: string; skills: any[] }) {
  return (
    <GlassCard>
      <h3 className="text-xl font-semibold mb-6 text-zinc-200">{title}</h3>
      <div className="space-y-3">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="flex items-center gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
          >
            <div className="relative w-6 h-6 shrink-0">
              <Image
                src={skill.icon}
                alt={skill.name}
                fill
                className="object-contain"
              />
            </div>
            <span className="text-zinc-300">{skill.name}</span>
          </motion.div>
        ))}
      </div>
    </GlassCard>
  );
}
