"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { GlassCard } from "./GlassCard";

export function GitHubGraph() {
  const [svg, setSvg] = useState<string>("");
  const [total, setTotal] = useState(0);
  const [streak, setStreak] = useState<{ max: number; current: number } | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://raw.githubusercontent.com/shin-102/shin-102/main/github-metrics.json")
      .then((res) => res.json())
      .then((json) => {
        // The isocalendar plugin outputs a rendered SVG — use that directly
        const rawSvg = json.plugins?.isocalendar?.svg ?? "";
        setSvg(rawSvg);

        // Streak data
        const streakData = json.plugins?.isocalendar?.streak;
        if (streakData) setStreak(streakData);

        // Total = public commits + restricted (private) contributions
        const pub  = json.user?.contributionsCollection?.totalCommitContributions ?? 0;
        const priv = json.user?.contributionsCollection?.restrictedContributionsCount ?? 0;
        setTotal(pub + priv);

        setLoading(false);
      })
      .catch((err) => {
        console.error("Fetch error:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="py-20 px-4 max-w-7xl mx-auto text-center">
        <div className="h-48 w-full animate-pulse bg-white/5 rounded-3xl border border-white/10" />
        <p className="mt-4 text-zinc-500 text-sm">Fetching your GitHub stats...</p>
      </div>
    );
  }

  if (!svg) return null;

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">GitHub Activity</h2>
          <p className="text-zinc-400">{total} contributions in the last year</p>
          {streak && (
            <p className="text-zinc-500 text-sm mt-1">
              🔥 Current streak: {streak.current} days &nbsp;·&nbsp; Longest: {streak.max} days
            </p>
          )}
        </motion.div>

        <div className="p-6 bg-zinc-900/5 backdrop-blur-md">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="min-w-max mx-auto"
            dangerouslySetInnerHTML={{ __html: svg }}
          />
        </div>
      </div>
    </section>
  );
}
