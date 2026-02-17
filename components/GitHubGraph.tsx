// "use client";

// import { motion } from "framer-motion";
// import { GlassCard } from "./GlassCard";

// export function GitHubGraph() {
//   // Generate mock contribution data
//   const generateContributions = () => {
//     const contributions = [];
//     const weeksToShow = 52;
//     const daysPerWeek = 7;

//     for (let week = 0; week < weeksToShow; week++) {
//       const weekData = [];
//       for (let day = 0; day < daysPerWeek; day++) {
//         const level = Math.floor(Math.random() * 5); // 0-4 contribution levels
//         weekData.push(level);
//       }
//       contributions.push(weekData);
//     }
//     return contributions;
//   };

//   const contributions = generateContributions();

//   const getColor = (level: number) => {
//     const colors = [
//       "bg-zinc-800",
//       "bg-emerald-900/50",
//       "bg-emerald-700/70",
//       "bg-emerald-500/90",
//       "bg-emerald-400",
//     ];
//     return colors[level];
//   };

//   return (
//     <section className="py-20 px-4">
//       <div className="max-w-7xl mx-auto">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="text-center mb-12"
//         >
//           <h2 className="text-3xl md:text-4xl font-bold mb-4">GitHub Activity</h2>
//           <p className="text-zinc-400">Contributions over the past year</p>
//         </motion.div>

//         <GlassCard className="overflow-x-auto">
//           <div className="min-w-max">
//             <div className="flex gap-[3px]">
//               {contributions.map((week, weekIndex) => (
//                 <div key={weekIndex} className="flex flex-col gap-[3px]">
//                   {week.map((level, dayIndex) => (
//                     <motion.div
//                       key={`${weekIndex}-${dayIndex}`}
//                       initial={{ scale: 0, opacity: 0 }}
//                       whileInView={{ scale: 1, opacity: 1 }}
//                       viewport={{ once: true }}
//                       transition={{ delay: (weekIndex * 7 + dayIndex) * 0.001 }}
//                       whileHover={{ scale: 1.2 }}
//                       className={`w-3 h-3 rounded-sm ${getColor(level)} transition-transform cursor-pointer`}
//                       title={`${level} contributions`}
//                     />
//                   ))}
//                 </div>
//               ))}
//             </div>

//             <div className="flex items-center gap-2 mt-6 text-xs text-zinc-500">
//               <span>Less</span>
//               <div className="flex gap-1">
//                 {[0, 1, 2, 3, 4].map((level) => (
//                   <div
//                     key={level}
//                     className={`w-3 h-3 rounded-sm ${getColor(level)}`}
//                   />
//                 ))}
//               </div>
//               <span>More</span>
//             </div>
//           </div>
//         </GlassCard>
//       </div>
//     </section>
//   );
// }

"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { GlassCard } from "./GlassCard";

export function GitHubGraph() {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    // We fetch the raw file directly from your repo's main branch
    fetch("https://raw.githubusercontent.com/shin-102/shin-102/main/github-metrics.json")
      .then(res => res.json())
      .then(json => {
        // Map the metrics.yml JSON structure to your grid
        setData(json.plugins.isocalendar);
      })
      .catch(err => console.error("Error loading GitHub data:", err));
  }, []);

  const getColor = (level: number | string) => {
      // Mapping for both numeric levels (0-4) and string levels
      const colors: Record<string, string> = {
        "0": "bg-zinc-800",
        "1": "bg-emerald-900/50",
        "2": "bg-emerald-700/70",
        "3": "bg-emerald-500/90",
        "4": "bg-emerald-400",
        "NONE": "bg-zinc-800",
        "LOW": "bg-emerald-900/50",
        "MEDIUM": "bg-emerald-700/70",
        "HIGH": "bg-emerald-500/90",
        "MAX": "bg-emerald-400",
      };

      return colors[level.toString().toUpperCase()] || "bg-zinc-800";
    };

  if (!data) return null;

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">GitHub Activity</h2>
          <p className="text-zinc-400">{data.totalContributions} contributions in the last year</p>
        </motion.div>

        <GlassCard className="overflow-x-auto p-6">
          <div className="min-w-max">
            <div className="flex gap-[3px]">
              {data.weeks.map((week: any, weekIndex: number) => (
                <div key={weekIndex} className="flex flex-col gap-[3px]">
                  {week.contributionDays.map((day: any, dayIndex: number) => (
                    <motion.div
                      key={day.date}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: (weekIndex) * 0.005 }}
                      whileHover={{ scale: 1.5, zIndex: 10 }}
                      className={`w-3 h-3 rounded-sm ${getColor(day.contributionLevel)} transition-colors cursor-pointer`}
                      title={`${day.date}: ${day.contributionLevel}`}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>
        </GlassCard>
      </div>
    </section>
  );
}
