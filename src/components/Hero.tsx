
"use client";

import { motion } from "framer-motion";
import { ArrowRight, Linkedin, Mail, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import content from "@/data/siteContent.json";

export function Hero() {
  const p = content.personal;
  const showAnimations = content.siteSettings.showAnimations;

  return (
    <section className="relative min-h-screen flex items-center scientific-grid overflow-hidden">
      {showAnimations && <AnimatedBackground />}
      <div className="container mx-auto px-6 py-24">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium border border-accent/20 mb-6">
              <div className={showAnimations ? "w-2 h-2 rounded-full bg-accent animate-pulse" : "w-2 h-2 rounded-full bg-accent"} />
              <span>{p.location}</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tighter leading-[0.9]">
              {p.firstName} <br />
              <span className="text-muted-foreground">{p.lastName}</span>
            </h1>

            <p className="text-xl md:text-2xl font-medium mb-8 text-muted-foreground max-w-2xl leading-tight">
              {p.tagline}
            </p>

            <p className="text-lg text-muted-foreground/80 mb-10 max-w-xl leading-relaxed border-l-2 border-accent/30 pl-6">
              {p.summary}
            </p>

            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="rounded-full px-8 shadow-xl" asChild>
                <a href="#contact">
                  Work With Me <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="rounded-full px-8" asChild>
                <a href="#publications">View Publications</a>
              </Button>
              
              <div className="flex items-center space-x-2 ml-2">
                <Button size="icon" variant="ghost" className="rounded-full hover:bg-accent/10" asChild>
                  <a href={p.socialLinks.linkedin} target="_blank" rel="noopener noreferrer"><Linkedin className="h-5 w-5" /></a>
                </Button>
                <Button size="icon" variant="ghost" className="rounded-full hover:bg-accent/10" asChild>
                  <a href={p.socialLinks.googleScholar} target="_blank" rel="noopener noreferrer"><GraduationCap className="h-5 w-5" /></a>
                </Button>
                <Button size="icon" variant="ghost" className="rounded-full hover:bg-accent/10" asChild>
                  <a href={`mailto:${p.email}`}><Mail className="h-5 w-5" /></a>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className={showAnimations ? "absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce opacity-40" : "absolute bottom-12 left-1/2 -translate-x-1/2 opacity-40"}>
        <div className="w-0.5 h-12 bg-foreground rounded-full" />
      </div>
    </section>
  );
}
