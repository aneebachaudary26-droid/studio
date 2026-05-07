
"use client";

import Link from "next/link";
import content from "@/data/siteContent.json";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t bg-card/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <Link href="/" className="text-2xl font-headline font-bold">
              {content.siteSettings.siteName}
            </Link>
            <p className="text-muted-foreground mt-2 max-w-sm">
              Designing Advanced Functional Coatings for Sustainable Materials Innovation.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end gap-2">
            <p className="text-sm text-muted-foreground">
              © {currentYear} {content.personal.name}. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm text-muted-foreground/80">
              <Link href="#" className="hover:text-accent transition-colors">Privacy Policy</Link>
              <Link href="#" className="hover:text-accent transition-colors">Sitemap</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
