"use client";

import { useState, useEffect } from "react";
import { LoadingLines } from "@/components/LoadingLines";
import { KeyboardNav } from "@/components/KeyboardNav";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Stats } from "@/components/Stats";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Experience } from "@/components/Experience";
import { CurrentFocus } from "@/components/CurrentFocus";
import { GitHubGraph } from "@/components/GitHubGraph";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Gives your app exactly 3.5 seconds to showcase the animation sequence
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3500);

    return () => clearTimeout(timer);
  }, []);

  // Return ONLY the loader during the initial countdown phase
  if (isLoading) {
    return <LoadingLines />;
  }

  return (
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

      <KeyboardNav />
    </main>
  );
}
