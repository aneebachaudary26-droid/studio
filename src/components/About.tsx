
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import content from "@/data/siteContent.json";

export function About() {
  return (
    <section id="about" className="py-24 bg-card/30">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl z-10 group">
              <Image
                src={content.personal.profileImage || "https://picsum.photos/seed/aneeba/600/600"}
                alt="Aneeba Chaudary"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                data-ai-hint="professional scientist"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
            </div>
            {/* Scientific Decorative Elements */}
            <div className="absolute -top-10 -left-10 w-40 h-40 border-2 border-accent/20 rounded-full animate-spin-slow -z-0" />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent/10 rounded-full blur-2xl" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-8 flex items-center">
              <span className="text-accent mr-4">01.</span> {content.about.heading}
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>{content.about.body}</p>
            </div>
            
            <div className="mt-12 grid grid-cols-2 gap-8 pt-8 border-t border-border">
              <div>
                <h4 className="text-3xl font-bold text-accent mb-1">2027</h4>
                <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">Ph.D. Candidate</p>
              </div>
              <div>
                <h4 className="text-3xl font-bold text-accent mb-1">5+</h4>
                <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">Years R&D</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
