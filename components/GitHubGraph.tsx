"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { GlassCard } from "./GlassCard";

interface ContributionDay {
  date: string;
  level: number;
}

export function GitHubGraph() {
  const [weeks, setWeeks] = useState<ContributionDay[][]>([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://raw.githubusercontent.com/shin-102/shin-102/main/github-metrics.json")
      .then((res) => res.json())
      .then((json) => {
        const iso = json.plugins?.isocalendar;
        if (!iso || !iso.days) {
          console.error("Isocalendar data not found in JSON");
          return;
        }

        // The metrics plugin provides a flat list of days.
        // We chunk them into groups of 7 to create the "week" columns.
        const days = iso.days as ContributionDay[];
        const chunkedWeeks: ContributionDay[][] = [];
        for (let i = 0; i < days.length; i += 7) {
          chunkedWeeks.push(days.slice(i, i + 7));
        }

        setWeeks(chunkedWeeks);
        setTotal(json.computed?.contributions || 0);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error loading GitHub data:", err);
        setLoading(false);
      });
  }, []);

  const getColor = (level: number | string) => {
    const colors: Record<string, string> = {
      "0": "bg-zinc-800",
      "1": "bg-emerald-900/50",
      "2": "bg-emerald-700/70",
      "3": "bg-emerald-500/90",
      "4": "bg-emerald-400",
    };
    return colors[level.toString()] || "bg-zinc-800";
  };

  if (loading) {
    return (
      <div className="py-20 px-4 max-w-7xl mx-auto">
        <div className="h-48 w-full animate-pulse bg-white/5 rounded-3xl border border-white/10" />
      </div>
    );
  }

  // If loading finished but no data, don't crash the site
  if (weeks.length === 0) return null;

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">GitHub Activity</h2>
          <p className="text-zinc-400">{total} contributions in the last year</p>
        </motion.div>

        <GlassCard className="overflow-x-auto p-6">
          <div className="min-w-max">
            <div className="flex gap-[3px]">
              {weeks.map((week, weekIndex) => (
                <div key={weekIndex} className="flex flex-col gap-[3px]">
                  {week.map((day) => (
                    <motion.div
                      key={day.date}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 20,
                        delay: weekIndex * 0.005
                      }}
                      whileHover={{ scale: 1.5, zIndex: 10 }}
                      className={`w-3 h-3 rounded-sm ${getColor(day.level)} transition-colors cursor-pointer`}
                      title={`${day.date}: Level ${day.level}`}
                    />
                  ))}
                </div>
              ))}
            </div>

            <div className="flex items-center gap-2 mt-6 text-[10px] text-zinc-500 uppercase tracking-widest">
              <span>Less</span>
              <div className="flex gap-1">
                {[0, 1, 2, 3, 4].map((lvl) => (
                  <div key={lvl} className={`w-2.5 h-2.5 rounded-sm ${getColor(lvl)}`} />
                ))}
              </div>
              <span>More</span>
            </div>
          </div>
        </GlassCard>
      </div>
    </section>
  );
}
