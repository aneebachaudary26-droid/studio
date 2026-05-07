
"use client";

import { motion } from "framer-motion";
import { Briefcase, MapPin, Calendar } from "lucide-react";
import content from "@/data/siteContent.json";

export function Experience() {
  return (
    <section id="experience" className="py-24 bg-card/30">
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold mb-4">Professional Experience</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            A career built on industrial production, applied research, and advanced academic investigation.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-12">
          {content.experience.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative pl-8 md:pl-0"
            >
              {/* Vertical line for desktop */}
              <div className="hidden md:block absolute top-0 bottom-0 left-[50%] w-px bg-border -translate-x-1/2" />
              
              <div className={`md:flex items-center gap-12 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                <div className="md:w-1/2 space-y-4">
                  <div className={`p-6 rounded-2xl border bg-card shadow-sm hover:shadow-md transition-shadow relative ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                    <div className={`absolute top-6 w-4 h-4 rounded-full bg-accent border-4 border-background hidden md:block ${index % 2 === 0 ? "-right-[34px]" : "-left-[34px]"}`} />
                    
                    <div className={`flex items-center gap-2 text-accent font-bold mb-1 ${index % 2 === 0 ? "md:justify-end" : "md:justify-start"}`}>
                      <Calendar className="w-4 h-4" />
                      <span>{exp.period}</span>
                    </div>
                    <h3 className="text-2xl font-bold">{exp.role}</h3>
                    <div className={`flex items-center gap-2 text-muted-foreground mb-4 font-medium ${index % 2 === 0 ? "md:justify-end" : "md:justify-start"}`}>
                      <Briefcase className="w-4 h-4" />
                      <span>{exp.organization}</span>
                    </div>
                    <p className="text-muted-foreground mb-4">{exp.description}</p>
                    <ul className={`space-y-2 text-sm text-muted-foreground/80 ${index % 2 === 0 ? "md:items-end flex flex-col" : "md:items-start flex flex-col"}`}>
                      {exp.achievements.map((ach, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-accent mt-1.5">•</span>
                          <span>{ach}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="hidden md:block md:w-1/2" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
