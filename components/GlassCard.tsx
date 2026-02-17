"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hoverEffect?: boolean;
  glowEffect?: boolean;
}

export function GlassCard({ 
  children, 
  className, 
  hoverEffect = true,
  glowEffect = false 
}: GlassCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={hoverEffect ? { y: -4 } : {}}
      className={cn(
        "relative rounded-2xl p-6",
        "bg-gradient-to-br from-white/10 to-white/5",
        "backdrop-blur-xl border border-white/10",
        "shadow-xl",
        hoverEffect && "transition-all duration-300 hover:border-white/20",
        glowEffect && "glow-effect-hover",
        className
      )}
    >
      {children}
    </motion.div>
  );
}
