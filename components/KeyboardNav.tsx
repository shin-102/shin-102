"use client";

import { useEffect, useState } from "react";

// Map out the sections you want keys for, matching their respective HTML element IDs
const NAV_KEYS = [
  { label: "H", id: "hero", name: "Home" },
  { label: "A", id: "about", name: "About" },
  { label: "P", id: "projects", name: "Projects" },
  { label: "S", id: "skills", name: "Skills" },
  { label: "E", id: "experience", name: "Experience" },
  { label: "C", id: "contact", name: "Contact" },
];

export function KeyboardNav() {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-30% 0px -60% 0px", // Triggers active state when section occupies mid-viewport
      threshold: 0,
    };

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    // Track each target section element on the page
    NAV_KEYS.forEach((key) => {
      const element = document.getElementById(key.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="fixed hidden right-6 top-1/2 -translate-y-1/2 z-50 md:flex flex-col gap-3 items-end group/pad">
      {/* Optional helper context text that appears when hovering near the pad */}
      <span className="text-[10px] font-mono text-zinc-500 tracking-widest uppercase opacity-0 group-hover/pad:opacity-100 transition-opacity duration-300 pr-1">
        Navigation Pad
      </span>

      <div className="flex flex-col gap-2.5 p-2 rounded-2xl bg-zinc-950/40 border border-white/5 backdrop-blur-md shadow-2xl">
        {NAV_KEYS.map((key) => {
          const isActive = activeSection === key.id;

          return (
            <button
              key={key.id}
              onClick={() => handleScroll(key.id)}
              className="relative group/key flex items-center justify-center outline-none"
              aria-label={`Scroll to ${key.name}`}
            >
              {/* Tooltip Label */}
              <span className="absolute right-14 px-2 py-1 rounded bg-zinc-900 border border-zinc-800 text-zinc-400 text-xs font-mono font-medium opacity-0 group-hover/key:opacity-100 pointer-events-none transition-all duration-200 translate-x-2 group-hover/key:translate-x-0 whitespace-nowrap shadow-md">
                {key.name}
              </span>

              {/* Physical Keyboard Key Visual */}
              <div
                className={`w-10 h-10 rounded-lg flex items-center justify-center font-mono font-bold text-sm transition-all duration-150 select-none
                  ${
                    isActive
                      ? "bg-emerald-500 text-zinc-950 border-b-0 translate-y-[3px] shadow-[0_0_15px_rgba(16,185,129,0.4)]"
                      : "bg-zinc-900 text-zinc-400 border-b-[3px] border-zinc-950 hover:text-zinc-200 active:translate-y-[2px] active:border-b-[1px]"
                  }
                `}
              >
                {key.label}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
