
"use client";

import { motion } from "framer-motion";
import { BookOpen, ExternalLink, Award } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import content from "@/data/siteContent.json";

export function Publications() {
  return (
    <section id="publications" className="py-24">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-bold mb-4 flex items-center">
              <span className="text-accent mr-4">04.</span> Publications
            </h2>
            <p className="text-muted-foreground text-lg">
              Peer-reviewed contributions to materials science, focusing on functional surfaces and polymer innovation.
            </p>
          </div>
          <Button variant="outline" className="rounded-full" asChild>
            <a href={content.personal.socialLinks.googleScholar} target="_blank" rel="noopener noreferrer">
              Google Scholar Profile <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>

        <div className="grid gap-6">
          {content.publications.map((pub, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-8 rounded-2xl border bg-card hover:border-accent/50 transition-all"
            >
              <div className="flex flex-col md:flex-row gap-6">
                <div className="hidden md:flex flex-col items-center justify-center w-24 h-24 rounded-xl bg-muted group-hover:bg-accent/10 transition-colors shrink-0">
                  <span className="text-sm font-bold text-muted-foreground uppercase">{pub.year}</span>
                  <BookOpen className="w-6 h-6 text-muted-foreground mt-1 group-hover:text-accent" />
                </div>
                
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <Badge variant="secondary" className="rounded-full">{pub.type}</Badge>
                    {pub.featured && (
                      <Badge variant="default" className="rounded-full bg-accent hover:bg-accent flex items-center gap-1">
                        <Award className="w-3 h-3" /> Featured
                      </Badge>
                    )}
                  </div>
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-accent transition-colors">{pub.title}</h3>
                  <p className="text-muted-foreground font-medium mb-1">{pub.authors}</p>
                  <p className="text-accent/80 font-semibold mb-4 italic">{pub.journal}, {pub.year}</p>
                  
                  <div className="flex items-center gap-4">
                    <Button variant="link" size="sm" className="p-0 h-auto text-accent" asChild>
                      <a href={`https://doi.org/${pub.doi}`} target="_blank" rel="noopener noreferrer">View DOI <ExternalLink className="ml-2 h-3 w-3" /></a>
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
