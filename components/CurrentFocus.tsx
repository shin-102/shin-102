"use client";

import { motion } from "framer-motion";
import { BookOpen, TrendingUp, Lightbulb } from "lucide-react";
import { GlassCard } from "./GlassCard";

export function CurrentFocus() {
  const focuses = [
    {
      icon: BookOpen,
      title: "Learning",
      items: [
        "Advanced Next.js patterns",
        "TypeScript best practices",
        "Backend with Nest.js",
      ],
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: TrendingUp,
      title: "Building",
      items: [
        "Full-stack SaaS applications",
        "E-commerce solutions",
        "Brand identity systems",
      ],
      color: "from-emerald-500 to-green-500",
    },
    {
      icon: Lightbulb,
      title: "Exploring",
      items: [
        "AI/ML integration in web apps",
        "Advanced animation techniques",
        "Web3 and blockchain",
      ],
      color: "from-purple-500 to-pink-500",
    },
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Current Focus</h2>
          <p className="text-zinc-400 text-lg">What I'm working on right now</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {focuses.map((focus, index) => (
            <motion.div
              key={focus.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <GlassCard className="h-full group hover:border-white/30">
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${focus.color} mb-6`}>
                  <focus.icon className="w-6 h-6 text-white" />
                </div>

                <h3 className="text-2xl font-bold mb-6 text-zinc-100">
                  {focus.title}
                </h3>

                <ul className="space-y-3">
                  {focus.items.map((item, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + idx * 0.05 }}
                      className="flex items-start gap-3"
                    >
                      <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${focus.color} mt-2`} />
                      <span className="text-zinc-400">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
