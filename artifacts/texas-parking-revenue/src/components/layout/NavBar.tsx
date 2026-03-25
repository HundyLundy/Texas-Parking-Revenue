import { Link, useLocation } from "wouter";
import { Menu, X, ArrowRight } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const menuSections = [
  {
    label: "Resource Library",
    links: [
      { name: "All Decision Analysis & Guides", href: "/resources" },
      { name: "Should Texas Hotels Charge for Parking?", href: "/resources/should-texas-hotels-charge-for-parking" },
      { name: "Self-Managed vs. Outsourced Parking: NOI", href: "/resources/self-managed-vs-outsourced-parking-noi" },
      { name: "Parking Management RFP Guide", href: "/resources/parking-management-rfp-guide" },
      { name: "Gated vs. Gateless Parking ROI", href: "/resources/gated-vs-gateless-parking-roi" },
      { name: "When Should a Hospital Outsource Parking?", href: "/resources/when-should-a-hospital-outsource-parking-management" },
    ],
  },
  {
    label: "Texas Markets",
    links: [
      { name: "Houston", href: "/texas/houston-parking-revenue" },
      { name: "Austin", href: "/texas/austin-parking-revenue" },
      { name: "Corpus Christi", href: "/texas/corpus-christi-parking-revenue" },
    ],
  },
  {
    label: "Asset Types",
    links: [
      { name: "Hotel & Hospitality", href: "/texas/hotel-parking-revenue" },
      { name: "Hospital & Healthcare", href: "/texas/hospital-parking-management" },
      { name: "Commercial Real Estate", href: "/texas/commercial-real-estate-parking-revenue" },
    ],
  },
];

const utilityLinks = [
  { name: "Vendor Directory", href: "/directory/vendors" },
  { name: "About This Site", href: "/about" },
];

export function NavBar() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    }
    if (isOpen) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <header ref={ref} className="sticky top-0 z-50 w-full glass-panel border-b border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-primary-foreground font-display font-bold text-xl group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
              TX
            </div>
            <span className="font-display font-bold text-xl text-foreground tracking-tight">
              Parking<span className="text-muted-foreground font-normal">Revenue</span>
            </span>
          </Link>

          {/* Menu toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            className="flex items-center gap-2 px-3 py-2 rounded-lg text-foreground/65 hover:text-foreground hover:bg-secondary transition-colors"
          >
            {isOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mega menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="absolute top-full left-0 right-0 bg-card border-b border-border shadow-xl"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              <div className="grid md:grid-cols-3 gap-8">
                {menuSections.map((section) => (
                  <div key={section.label}>
                    <p className="text-xs font-bold uppercase tracking-widest text-accent mb-4">
                      {section.label}
                    </p>
                    <ul className="space-y-2.5">
                      {section.links.map((link) => (
                        <li key={link.href}>
                          <Link
                            href={link.href}
                            className="group flex items-start gap-2 text-sm text-foreground/70 hover:text-primary transition-colors leading-snug"
                          >
                            <ArrowRight className="w-3.5 h-3.5 mt-0.5 flex-shrink-0 text-border group-hover:text-accent group-hover:translate-x-0.5 transition-all" />
                            {link.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* Utility links */}
              <div className="mt-8 pt-6 border-t border-border flex items-center gap-6">
                {utilityLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-xs font-semibold text-muted-foreground hover:text-primary transition-colors uppercase tracking-wide"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
