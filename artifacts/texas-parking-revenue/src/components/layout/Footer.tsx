import { Link } from "wouter";
import { siteConfig } from "@/config/site";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground border-t border-white/10">
      {/* Subtle Perfect Parking attribution */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <p className="text-xs text-primary-foreground/45 text-center">
            Powered by{" "}
            <Link href="/parking-revenue-analysis" className="text-primary-foreground/60 hover:text-accent transition-colors underline underline-offset-2">
              Perfect Parking
            </Link>
            . If you want help evaluating your property, contact them for a parking revenue analysis.
          </p>
        </div>
      </div>

      {/* Main footer links */}
      <div className="pt-14 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-1">
              <Link href="/" className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center text-accent-foreground font-display font-bold text-xl">
                  TX
                </div>
                <span className="font-display font-bold text-xl tracking-tight">
                  ParkingRevenue
                </span>
              </Link>
              <p className="text-primary-foreground/60 text-sm leading-relaxed mb-4">
                Independent research and guides for Texas property owners who want to stop treating parking like an afterthought.
              </p>
              <p className="text-xs text-primary-foreground/40">
                Supported by{" "}
                <a href={siteConfig.perfectParkingUrl} className="text-accent hover:underline">
                  {siteConfig.perfectParkingName}
                </a>
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-sm uppercase tracking-widest mb-5 text-primary-foreground/50">Texas Cities</h3>
              <ul className="space-y-3 text-sm text-primary-foreground/70">
                <li>
                  <Link href="/texas/houston-parking-revenue" className="hover:text-accent transition-colors">
                    Houston
                  </Link>
                </li>
                <li>
                  <Link href="/texas/austin-parking-revenue" className="hover:text-accent transition-colors">
                    Austin
                  </Link>
                </li>
                <li>
                  <Link href="/texas/corpus-christi-parking-revenue" className="hover:text-accent transition-colors">
                    Corpus Christi
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-sm uppercase tracking-widest mb-5 text-primary-foreground/50">Asset Types</h3>
              <ul className="space-y-3 text-sm text-primary-foreground/70">
                <li>
                  <Link href="/texas/hotel-parking-revenue" className="hover:text-accent transition-colors">
                    Hotels & Hospitality
                  </Link>
                </li>
                <li>
                  <Link href="/texas/hospital-parking-management" className="hover:text-accent transition-colors">
                    Hospitals & Healthcare
                  </Link>
                </li>
                <li>
                  <Link href="/texas/commercial-real-estate-parking-revenue" className="hover:text-accent transition-colors">
                    Commercial Real Estate
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-sm uppercase tracking-widest mb-5 text-primary-foreground/50">Resources</h3>
              <ul className="space-y-3 text-sm text-primary-foreground/70">
                <li>
                  <Link href="/resources/self-managed-vs-outsourced-parking" className="hover:text-accent transition-colors">
                    Self-Managed vs. Outsourced
                  </Link>
                </li>
                <li>
                  <Link href="/resources/gated-vs-gateless-parking" className="hover:text-accent transition-colors">
                    Gated vs. Gateless
                  </Link>
                </li>
                <li>
                  <Link href="/directory" className="hover:text-accent transition-colors">
                    Provider Directory
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-accent transition-colors">
                    About
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-primary-foreground/40">
            <p>
              &copy; {currentYear} {siteConfig.siteName}. All rights reserved.
            </p>
            <div className="flex gap-6">
              <span className="hover:text-white cursor-pointer">Privacy Policy</span>
              <span className="hover:text-white cursor-pointer">Terms of Service</span>
              <span>Updated March 2026</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
