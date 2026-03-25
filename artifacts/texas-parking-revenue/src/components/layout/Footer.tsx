import { Link } from "wouter";
import { siteConfig } from "@/config/site";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground border-t border-white/10 pt-16 pb-8">
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
            <p className="text-primary-foreground/70 text-sm leading-relaxed mb-6">
              The premier resource hub for Texas property owners to maximize parking NOI, improve operational efficiency, and elevate asset value.
            </p>
            <div className="text-xs text-primary-foreground/50">
              Supported by <a href={siteConfig.perfectParkingUrl} className="text-accent hover:underline">{siteConfig.perfectParkingName}</a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Texas Cities</h3>
            <ul className="space-y-3 text-sm text-primary-foreground/70">
              <li><Link href="/texas/houston-parking-revenue" className="hover:text-accent transition-colors">Houston</Link></li>
              <li><Link href="/texas/dallas-parking-revenue" className="hover:text-accent transition-colors">Dallas</Link></li>
              <li><Link href="/texas/austin-parking-revenue" className="hover:text-accent transition-colors">Austin</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Asset Types</h3>
            <ul className="space-y-3 text-sm text-primary-foreground/70">
              <li><Link href="/texas/hotel-parking-revenue" className="hover:text-accent transition-colors">Hotels & Hospitality</Link></li>
              <li><Link href="/texas/hospital-parking-management" className="hover:text-accent transition-colors">Hospitals & Healthcare</Link></li>
              <li><Link href="/texas/commercial-real-estate-parking-revenue" className="hover:text-accent transition-colors">Commercial Real Estate</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Resources</h3>
            <ul className="space-y-3 text-sm text-primary-foreground/70">
              <li><Link href="/resources/self-managed-vs-outsourced-parking" className="hover:text-accent transition-colors">Self-Managed vs Outsourced</Link></li>
              <li><Link href="/resources/gated-vs-gateless-parking" className="hover:text-accent transition-colors">Gated vs Gateless</Link></li>
              <li><Link href="/directory" className="hover:text-accent transition-colors">Provider Directory</Link></li>
              <li><Link href="/about" className="hover:text-accent transition-colors">About Us</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/50">
          <p>© {currentYear} {siteConfig.siteName}. All rights reserved.</p>
          <div className="flex gap-6">
            <span className="hover:text-white cursor-pointer">Privacy Policy</span>
            <span className="hover:text-white cursor-pointer">Terms of Service</span>
            <span>Last Updated: March 2026</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
