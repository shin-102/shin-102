"use client";

import { motion } from "framer-motion";
import { Sparkles, Heart, Rocket } from "lucide-react";
import { GlassCard } from "./GlassCard";
import { portfolio } from "@/lib/data";

export function About() {
  const highlights = [
    {
      icon: Sparkles,
      title: "Creative Problem Solver",
      description: "I blend design thinking with technical expertise to create solutions that look great and work flawlessly.",
    },
    {
      icon: Heart,
      title: "Brand-Focused",
      description: "Every project strengthens brand identity and builds lasting customer relationships.",
    },
    {
      icon: Rocket,
      title: "Growth Mindset",
      description: "Constantly learning and adapting to new technologies and industry trends.",
    },
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
          <p className="text-zinc-400 text-lg">Building digital experiences with purpose</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Bio Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <GlassCard className="h-full">
              <h3 className="text-2xl font-bold mb-4 text-emerald-400">Who I Am</h3>
              <div className="space-y-4 text-zinc-300 leading-relaxed">
                {portfolio.bio.trim().split('\n\n').map((paragraph, index) => (
                  <p key={index}>{paragraph.trim()}</p>
                ))}
              </div>
            </GlassCard>
          </motion.div>

          {/* What I Do */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <GlassCard className="h-full">
              <h3 className="text-2xl font-bold mb-4 text-emerald-400">What I Do</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-zinc-200 mb-2">💻 Web Development</h4>
                  <p className="text-sm text-zinc-400">Building responsive, performant applications with React, Next.js, and modern web technologies.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-zinc-200 mb-2">🎨 Brand Design</h4>
                  <p className="text-sm text-zinc-400">Creating cohesive visual identities using Figma, Affinity Designer, and Adobe Creative Suite.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-zinc-200 mb-2">📈 Digital Marketing</h4>
                  <p className="text-sm text-zinc-400">Developing strategies that combine technical expertise with marketing insights for measurable growth.</p>
                </div>
              </div>
            </GlassCard>
          </motion.div>
        </div>

        {/* Highlights Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {highlights.map((highlight, index) => (
            <motion.div
              key={highlight.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <GlassCard className="text-center h-full">
                <div className="inline-flex p-4 rounded-full bg-emerald-500/10 mb-4">
                  <highlight.icon className="w-8 h-8 text-emerald-400" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-zinc-100">
                  {highlight.title}
                </h3>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  {highlight.description}
                </p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
