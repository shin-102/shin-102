"use client";

import { CommandPalette } from "@/components/CommandPalette";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Stats } from "@/components/Stats";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Experience } from "@/components/Experience";
import { CurrentFocus } from "@/components/CurrentFocus";
import { GitHubGraph } from "@/components/GitHubGraph";
import { ContactForm } from "@/components/ContactForm";
import { KeyboardHint } from "@/components/KeyboardHint";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <CommandPalette>
      <main className="relative">
        {/* Enhanced Background Effects */}
        <div className="fixed inset-0 -z-10 overflow-hidden">
          {/* Animated Gradient Orbs */}
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />

          {/* Grid Pattern */}
          <div
            className="absolute inset-0 opacity-[0.02]"
            style={{
              backgroundImage: `
                linear-gradient(to right, #fff 1px, transparent 1px),
                linear-gradient(to bottom, #fff 1px, transparent 1px)
              `,
              backgroundSize: '4rem 4rem'
            }}
          />

          {/* Radial Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-radial from-transparent via-zinc-950/50 to-zinc-950" />
        </div>

        {/* Content Sections */}
        <Hero />
        <Stats />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <CurrentFocus />
        <GitHubGraph />
        <ContactForm />
        <Footer />

        {/* Floating Elements */}
        <KeyboardHint />
      </main>
    </CommandPalette>
  );
}
