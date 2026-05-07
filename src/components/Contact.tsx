
"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Linkedin, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import content from "@/data/siteContent.json";

export function Contact() {
  const { toast } = useToast();
  const p = content.personal;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent",
      description: "Thank you for reaching out. I'll get back to you shortly.",
    });
  };

  return (
    <section id="contact" className="py-24 scientific-grid">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl font-bold mb-8 flex items-center">
                <span className="text-accent mr-4">05.</span> Contact Me
              </h2>
              <p className="text-lg text-muted-foreground mb-12">
                I am open to research collaborations, industrial R&D opportunities, and academic inquiries. 
                Feel free to reach out via the form or through my professional networks.
              </p>

              <div className="space-y-8 mb-12">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Email</h4>
                    <p className="text-muted-foreground">{p.email}</p>
                  </div>
                </div>
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Phone</h4>
                    <p className="text-muted-foreground">{p.phone}</p>
                  </div>
                </div>
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Location</h4>
                    <p className="text-muted-foreground">{p.location}</p>
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <Button size="icon" variant="outline" className="rounded-full" asChild>
                  <a href={p.socialLinks.linkedin} target="_blank" rel="noopener noreferrer"><Linkedin className="h-5 w-5" /></a>
                </Button>
                <Button size="icon" variant="outline" className="rounded-full" asChild>
                  <a href={p.socialLinks.github} target="_blank" rel="noopener noreferrer"><Github className="h-5 w-5" /></a>
                </Button>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-card p-10 rounded-3xl border shadow-xl"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Full Name</label>
                    <Input placeholder="John Doe" className="bg-background border-border h-12 rounded-xl" required />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Email Address</label>
                    <Input type="email" placeholder="john@example.com" className="bg-background border-border h-12 rounded-xl" required />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Subject</label>
                  <Input placeholder="Research Collaboration Inquiry" className="bg-background border-border h-12 rounded-xl" required />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Message</label>
                  <Textarea placeholder="How can I help you?" className="bg-background border-border min-h-[150px] rounded-xl" required />
                </div>
                <Button type="submit" className="w-full h-14 rounded-xl text-lg font-bold shadow-lg" size="lg">
                  Send Message <Send className="ml-2 h-5 w-5" />
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
