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
        // Path: json.user.calendar.contributionCalendar.weeks
        const calendar = json.user?.calendar?.contributionCalendar;
        const rawWeeks = calendar?.weeks;

        if (!rawWeeks || rawWeeks.length === 0) {
          console.warn("Calendar data not found at path: user.calendar.contributionCalendar.weeks");
          setLoading(false);
          return;
        }

        const colorToLevel: Record<string, number> = {
          "#ebedf0": 0,
          "#9be9a8": 1,
          "#40c463": 2,
          "#30a14e": 3,
          "#216e39": 4,
        };

        const formattedWeeks = rawWeeks.map((week: any, wIndex: number) => {
          return week.contributionDays.map((day: any, dIndex: number) => {
            // FIX 1: The JSON days don't have a `date` field — only `color`.
            // Use a generated key as fallback (always, not just when date is missing).
            return {
              date: day.date ?? `w${wIndex}-d${dIndex}`,
              level: colorToLevel[day.color] ?? 0,
            };
          });
        });

        setWeeks(formattedWeeks);

        // FIX 2: The total is under json.user.contributionsCollection, not json.contributionsCollection
        const totalPublic  = json.user?.contributionsCollection?.totalCommitContributions ?? 0;
        const totalPrivate = json.user?.contributionsCollection?.restrictedContributionsCount ?? 0;
        setTotal(totalPublic + totalPrivate);

        setLoading(false);
      })
      .catch((err) => {
        console.error("Fetch error:", err);
        setLoading(false);
      });
  }, []);

  const getColor = (level: number | string) => {
    const colors: Record<string, string> = {
      "0": "bg-zinc-800",
      "1": "bg-emerald-900/40",
      "2": "bg-emerald-700/60",
      "3": "bg-emerald-500/80",
      "4": "bg-emerald-400",
    };
    return colors[level.toString()] || "bg-zinc-800";
  };

  if (loading) {
    return (
      <div className="py-20 px-4 max-w-7xl mx-auto text-center">
        <div className="h-48 w-full animate-pulse bg-white/5 rounded-3xl border border-white/10" />
        <p className="mt-4 text-zinc-500 text-sm">Fetching your GitHub stats...</p>
      </div>
    );
  }

  if (weeks.length === 0) return null;

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
        </motion.div>

        <GlassCard className="overflow-x-auto p-6 bg-zinc-900/30 backdrop-blur-md">
          <div className="min-w-max">
            <div className="flex gap-[4px]">
              {weeks.map((week, weekIndex) => (
                <div key={weekIndex} className="flex flex-col gap-[4px]">
                  {week.map((day, dayIndex) => (
                    <motion.div
                      key={day.date}
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{
                        type: "spring",
                        stiffness: 260,
                        damping: 20,
                        delay: weekIndex * 0.003,
                      }}
                      whileHover={{ scale: 1.4, zIndex: 10 }}
                      className={`w-3 h-3 rounded-[2px] ${getColor(day.level)} transition-colors cursor-default`}
                      title={day.date}
                    />
                  ))}
                </div>
              ))}
            </div>

            <div className="flex items-center gap-3 mt-8 text-[10px] text-zinc-500 font-medium uppercase tracking-tighter">
              <span>Less</span>
              <div className="flex gap-1">
                {[0, 1, 2, 3, 4].map((lvl) => (
                  <div key={lvl} className={`w-2.5 h-2.5 rounded-[1px] ${getColor(lvl)}`} />
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
