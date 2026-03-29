"use client";

import { motion } from "framer-motion";
import { Music } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-4 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <p className="text-zinc-500 text-sm flex items-center gap-2">
            Built with
            <Music className="w-8 h-8 text-violet-500 animate-pulse" />
            using Next.js, Tailwind & Framer Motion
          </p>
          <p className="text-zinc-500 text-sm">
            © {currentYear} All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
