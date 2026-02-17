"use client";

import {
  KBarProvider,
  KBarPortal,
  KBarPositioner,
  KBarAnimator,
  KBarSearch,
  useMatches,
  KBarResults,
} from "kbar";
import { ReactNode } from "react";
import { Home, Mail, Github, Linkedin, Sun, Moon } from "lucide-react";

export function CommandPalette({ children }: { children: ReactNode }) {
  const actions = [
    {
      id: "home",
      name: "Home",
      shortcut: ["h"],
      keywords: "home",
      section: "Navigation",
      perform: () => window.scrollTo({ top: 0, behavior: "smooth" }),
      icon: <Home className="w-4 h-4" />,
    },
    {
      id: "projects",
      name: "Projects",
      shortcut: ["p"],
      keywords: "projects work",
      section: "Navigation",
      perform: () => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" }),
      icon: <Github className="w-4 h-4" />,
    },
    {
      id: "contact",
      name: "Contact",
      shortcut: ["c"],
      keywords: "contact email",
      section: "Navigation",
      perform: () => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }),
      icon: <Mail className="w-4 h-4" />,
    },
    {
      id: "github",
      name: "GitHub",
      shortcut: ["g"],
      keywords: "github social",
      section: "Social",
      perform: () => window.open("https://github.com/yourusername", "_blank"),
      icon: <Github className="w-4 h-4" />,
    },
    {
      id: "linkedin",
      name: "LinkedIn",
      shortcut: ["l"],
      keywords: "linkedin social",
      section: "Social",
      perform: () => window.open("https://linkedin.com/in/yourusername", "_blank"),
      icon: <Linkedin className="w-4 h-4" />,
    },
  ];

  return (
    <KBarProvider actions={actions}>
      <KBarPortal>
        <KBarPositioner className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50">
          <KBarAnimator className="max-w-2xl w-full mx-auto mt-32">
            <div className="glass rounded-2xl overflow-hidden shadow-2xl">
              <div className="px-4 py-3 border-b border-white/10">
                <KBarSearch 
                  className="w-full bg-transparent outline-none text-zinc-50 placeholder:text-zinc-500"
                  placeholder="Type a command or search..."
                />
              </div>
              <RenderResults />
            </div>
          </KBarAnimator>
        </KBarPositioner>
      </KBarPortal>
      {children}
    </KBarProvider>
  );
}

function RenderResults() {
  const { results } = useMatches();

  return (
    <KBarResults
      items={results}
      onRender={({ item, active }) =>
        typeof item === "string" ? (
          <div className="px-4 py-2 text-xs font-semibold text-zinc-400 uppercase tracking-wider">
            {item}
          </div>
        ) : (
          <div
            className={`px-4 py-3 flex items-center gap-3 cursor-pointer transition-colors ${
              active ? "bg-white/10" : "bg-transparent"
            }`}
          >
            <div className="text-zinc-400">{item.icon}</div>
            <div className="flex-1">
              <div className="text-sm font-medium text-zinc-50">{item.name}</div>
            </div>
            {item.shortcut && (
              <div className="flex gap-1">
                {item.shortcut.map((key) => (
                  <kbd
                    key={key}
                    className="px-2 py-1 text-xs font-mono bg-zinc-800 border border-zinc-700 rounded"
                  >
                    {key}
                  </kbd>
                ))}
              </div>
            )}
          </div>
        )
      }
    />
  );
}
