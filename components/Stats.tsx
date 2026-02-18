"use client";

import { motion } from "framer-motion";
import { Code2, Users, Trophy, Zap } from "lucide-react";
import { projects, skills } from "@/lib/data";

export function Stats() {
  const stats = [
    {
      icon: Code2,
      value: projects.length,
      label: "Projects Completed",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Zap,
      value: skills.length,
      label: "Technologies",
      color: "from-emerald-500 to-green-500",
    },
    {
      icon: Users,
      value: "10+",
      label: "Happy Clients",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Trophy,
      value: "2+",
      label: "Years Experience",
      color: "from-orange-500 to-yellow-500",
    },
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.05 }}
              className="group"
            >
              <div className="relative h-full p-6 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-500">
                {/* Animated Background Gradient */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

                <div className="relative">
                  {/* Icon */}
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${stat.color} mb-4`}>
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>

                  {/* Value */}
                  <div className={`text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-br ${stat.color} bg-clip-text text-transparent`}>
                    {stat.value}
                  </div>

                  {/* Label */}
                  <div className="text-sm text-zinc-400">
                    {stat.label}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
