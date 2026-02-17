"use client";

import { CommandPalette } from "@/components/CommandPalette";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { GitHubGraph } from "@/components/GitHubGraph";
import { ContactForm } from "@/components/ContactForm";
import { KeyboardHint } from "@/components/KeyboardHint";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <CommandPalette>
      <main className="relative">
        {/* Background gradient effects */}
        <div className="fixed inset-0 -z-10 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        </div>

        <Hero />
        <Projects />
        <Skills />
        <GitHubGraph />
        <ContactForm />
        <Footer />
        <KeyboardHint />
      </main>
    </CommandPalette>
  );
}
