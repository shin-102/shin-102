"use client";

import { motion } from "framer-motion";
import { Command } from "lucide-react";
import { useKBar } from "kbar";

export function KeyboardHint() {
  const { query } = useKBar();

  return (
    <motion.button
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
      onClick={() => query.toggle()}
      className="fixed bottom-8 right-8 glass glass-hover px-4 py-3 rounded-xl flex items-center gap-2 text-sm z-10 group"
    >
      <Command className="w-4 h-4 text-zinc-400 group-hover:text-zinc-200 transition-colors" />
      <span className="text-zinc-400 group-hover:text-zinc-200 transition-colors">
        Press
      </span>
      <kbd className="px-2 py-1 bg-white/10 rounded text-xs font-mono">⌘K</kbd>
    </motion.button>
  );
}
