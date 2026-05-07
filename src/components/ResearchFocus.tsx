
"use client";

import { motion } from "framer-motion";
import { Microscope, Droplets, Layers, Atom, FlaskConical, Wind, Cog, TestTube } from "lucide-react";
import content from "@/data/siteContent.json";

const iconMap: Record<string, any> = {
  Microscope, Droplets, Layers, Atom, FlaskConical, Wind, Cog, TestTube
};

export function ResearchFocus() {
  return (
    <section id="research" className="py-24">
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-4xl font-bold mb-4 flex items-center">
            <span className="text-accent mr-4">02.</span> Research Focus
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Designing advanced functional coatings through the synergy of polymer chemistry and surface engineering.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {content.researchFocus.map((item, index) => {
            const IconComp = iconMap[item.icon] || Microscope;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group p-8 rounded-2xl border bg-card hover:bg-accent/5 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center text-accent mb-6 group-hover:scale-110 transition-transform">
                  <IconComp className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
