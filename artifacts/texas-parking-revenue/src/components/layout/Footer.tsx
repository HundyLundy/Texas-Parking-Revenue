import { Link } from "wouter";
import { siteConfig } from "@/config/site";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground border-t border-white/10">
      <div className="pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Top row: brand + columns */}
          <div className="grid grid-cols-2 md:grid-cols-6 gap-10 mb-12">

            {/* Brand */}
            <div className="col-span-2">
              <Link href="/" className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center text-accent-foreground font-display font-bold text-xl">
                  TX
                </div>
                <span className="font-display font-bold text-xl tracking-tight">
                  ParkingRevenue
                </span>
              </Link>
              <p className="text-primary-foreground/60 text-sm leading-relaxed mb-5 max-w-xs">
                Market guides, decision frameworks, and operational analysis for Texas hotel, healthcare, and commercial real estate owners evaluating parking as a revenue line.
              </p>
              <p className="text-xs text-primary-foreground/40 leading-relaxed">
                Supported by{" "}
                <a
                  href={siteConfig.perfectParkingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:underline"
                >
                  {siteConfig.perfectParkingName}
                </a>
                {" "}— a Texas parking management company. Content is for general information only and is not legal, tax, or investment advice.
              </p>
            </div>

            {/* In-Depth Guides */}
            <div>
              <h3 className="font-semibold text-xs uppercase tracking-widest mb-5 text-primary-foreground/45">
                In-Depth Guides
              </h3>
              <ul className="space-y-2.5 text-sm text-primary-foreground/65">
                <li>
                  <Link href="/resources/should-texas-hotels-charge-for-parking" className="hover:text-accent transition-colors leading-snug block">
                    Should Hotels Charge for Parking?
                  </Link>
                </li>
                <li>
                  <Link href="/resources/self-managed-vs-outsourced-parking-noi" className="hover:text-accent transition-colors leading-snug block">
                    Self-Managed vs. Outsourced: NOI
                  </Link>
                </li>
                <li>
                  <Link href="/resources/parking-management-rfp-guide" className="hover:text-accent transition-colors leading-snug block">
                    Parking Management RFP Guide
                  </Link>
                </li>
                <li>
                  <Link href="/resources/gated-vs-gateless-parking-roi" className="hover:text-accent transition-colors leading-snug block">
                    Gated vs. Gateless ROI
                  </Link>
                </li>
                <li>
                  <Link href="/resources/when-should-a-hospital-outsource-parking-management" className="hover:text-accent transition-colors leading-snug block">
                    Hospital Parking Outsourcing
                  </Link>
                </li>
              </ul>
            </div>

            {/* Decision Analysis */}
            <div>
              <h3 className="font-semibold text-xs uppercase tracking-widest mb-5 text-primary-foreground/45">
                Decision Analysis
              </h3>
              <ul className="space-y-2.5 text-sm text-primary-foreground/65">
                <li>
                  <Link href="/resources/self-managed-vs-outsourced-parking" className="hover:text-accent transition-colors leading-snug block">
                    Self-Managed vs. Outsourced
                  </Link>
                </li>
                <li>
                  <Link href="/resources/gated-vs-gateless-parking" className="hover:text-accent transition-colors leading-snug block">
                    Gated vs. Gateless Systems
                  </Link>
                </li>
                <li>
                  <Link href="/resources/how-parking-revenue-impacts-property-value" className="hover:text-accent transition-colors leading-snug block">
                    Parking & Property Value
                  </Link>
                </li>
                <li>
                  <Link href="/resources/parking-enforcement-revenue-vs-friction" className="hover:text-accent transition-colors leading-snug block">
                    Enforcement vs. Friction
                  </Link>
                </li>
                <li>
                  <Link href="/resources/when-paid-parking-makes-sense" className="hover:text-accent transition-colors leading-snug block">
                    When Paid Parking Makes Sense
                  </Link>
                </li>
              </ul>
            </div>

            {/* Texas Markets */}
            <div>
              <h3 className="font-semibold text-xs uppercase tracking-widest mb-5 text-primary-foreground/45">
                Texas Markets
              </h3>
              <ul className="space-y-2.5 text-sm text-primary-foreground/65">
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
                  <Link href="/texas/dallas-parking-revenue" className="hover:text-accent transition-colors">
                    Dallas
                  </Link>
                </li>
                <li>
                  <Link href="/texas/san-antonio-parking-revenue" className="hover:text-accent transition-colors">
                    San Antonio
                  </Link>
                </li>
                <li>
                  <Link href="/texas/corpus-christi-parking-revenue" className="hover:text-accent transition-colors">
                    Corpus Christi
                  </Link>
                </li>
              </ul>

              <h3 className="font-semibold text-xs uppercase tracking-widest mt-8 mb-5 text-primary-foreground/45">
                Asset Types
              </h3>
              <ul className="space-y-2.5 text-sm text-primary-foreground/65">
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

            {/* Site */}
            <div>
              <h3 className="font-semibold text-xs uppercase tracking-widest mb-5 text-primary-foreground/45">
                Site
              </h3>
              <ul className="space-y-2.5 text-sm text-primary-foreground/65">
                <li>
                  <Link href="/resources" className="hover:text-accent transition-colors">
                    All Resources
                  </Link>
                </li>
                <li>
                  <Link href="/directory/vendors" className="hover:text-accent transition-colors">
                    Vendor Directory
                  </Link>
                </li>
                <li>
                  <Link href="/directory/properties" className="hover:text-accent transition-colors">
                    Property Profiles
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-accent transition-colors">
                    About This Site
                  </Link>
                </li>
                <li>
                  <Link href="/parking-revenue-analysis" className="hover:text-accent transition-colors">
                    Revenue Analysis
                  </Link>
                </li>
              </ul>
            </div>

          </div>

          {/* Bottom bar */}
          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-primary-foreground/35">
            <p>
              &copy; {currentYear} {siteConfig.siteName}. All rights reserved.
            </p>
            <div className="flex gap-6 items-center">
              <span>Updated March 2026</span>
              <span className="text-primary-foreground/20">·</span>
              <span>Texas Parking Revenue is not affiliated with any municipality or regulatory body.</span>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}
