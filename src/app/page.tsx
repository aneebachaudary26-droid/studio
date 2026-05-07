
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { ResearchFocus } from "@/components/ResearchFocus";
import { Experience } from "@/components/Experience";
import { Publications } from "@/components/Publications";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Toaster } from "@/components/ui/toaster";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <ResearchFocus />
      <Experience />
      <Publications />
      <Contact />
      <Footer />
      <Toaster />
    </main>
  );
}
