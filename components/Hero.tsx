"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { MagneticButton } from "./MagneticButton";
import { portfolio } from "@/lib/data";

export function Hero() {
  const socialLinks = [
    { icon: Github, href: portfolio.github, label: "GitHub" },
    { icon: Linkedin, href: portfolio.linkedin, label: "LinkedIn" },
    // { icon: Twitter, href: portfolio.twitter, label: "Twitter" },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-zinc-50 to-zinc-400 bg-clip-text text-transparent">
            {portfolio.name}
          </h1>
          <p className="text-xl md:text-2xl text-zinc-400 mb-4">
            {portfolio.title}
          </p>
          <p className="text-lg text-zinc-500 max-w-2xl mx-auto mb-12">
            {portfolio.bio}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap gap-4 justify-center mb-12"
        >
          <MagneticButton
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="group"
          >
            <span className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              Get in touch
            </span>
          </MagneticButton>
          <MagneticButton
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            className="bg-transparent hover:bg-white/10"
          >
            View projects
          </MagneticButton>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex gap-4 justify-center"
        >
          {socialLinks.map((social, index) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -4 }}
              className="p-3 glass glass-hover rounded-xl transition-all"
              aria-label={social.label}
            >
              <social.icon className="w-5 h-5 text-zinc-400" />
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
