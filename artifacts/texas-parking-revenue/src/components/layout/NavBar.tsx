import { Link, useLocation } from "wouter";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";
import { motion, AnimatePresence } from "framer-motion";

export function NavBar() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Resources", href: "/resources" },
    { name: "Directory", href: "/directory" },
    { name: "About", href: "/about" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full glass-panel border-b border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-primary-foreground font-display font-bold text-xl group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
              TX
            </div>
            <span className="font-display font-bold text-xl text-foreground tracking-tight">
              Parking<span className="text-muted-foreground font-normal">Revenue</span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "text-sm font-semibold transition-colors hover:text-accent",
                  location === link.href ? "text-primary" : "text-foreground/65"
                )}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/parking-revenue-analysis"
              className="px-5 py-2.5 rounded-full bg-primary text-primary-foreground font-semibold text-sm hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20 transition-all hover:-translate-y-0.5 active:translate-y-0"
            >
              Get Revenue Analysis
            </Link>
          </nav>

          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-card border-b border-border overflow-hidden"
          >
            <div className="px-4 py-4 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-base font-medium text-foreground hover:text-accent"
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-2">
                <Link
                  href="/parking-revenue-analysis"
                  onClick={() => setIsOpen(false)}
                  className="block w-full text-center px-5 py-3 rounded-xl bg-primary text-primary-foreground font-semibold"
                >
                  Get Revenue Analysis
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
