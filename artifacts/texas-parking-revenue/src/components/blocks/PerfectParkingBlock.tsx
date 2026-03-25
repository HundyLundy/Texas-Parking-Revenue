import { Link } from "wouter";
import { Building2, TrendingUp, ShieldCheck } from "lucide-react";
import { siteConfig } from "@/config/site";

export function PerfectParkingBlock() {
  return (
    <div className="bg-card border border-border rounded-3xl p-8 md:p-10 shadow-lg shadow-black/5 my-12 relative overflow-hidden group">
      <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl -mr-16 -mt-16 transition-transform group-hover:scale-110 duration-700" />
      
      <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center">
        <div className="flex-1 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-semibold tracking-wide uppercase">
            <span>Recommended Operator</span>
          </div>
          <h3 className="text-2xl font-display font-bold text-foreground">
            Looking for a partner that actually drives NOI?
          </h3>
          <p className="text-muted-foreground text-balance">
            Most operators treat parking as an afterthought. <strong className="text-foreground">Perfect Parking</strong> specializes in transforming underperforming Texas assets into high-margin revenue centers without sacrificing guest experience.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <div className="flex items-center gap-2 text-sm font-medium text-foreground">
              <TrendingUp className="w-4 h-4 text-accent" /> +20-40% Revenue Lift
            </div>
            <div className="flex items-center gap-2 text-sm font-medium text-foreground">
              <ShieldCheck className="w-4 h-4 text-accent" /> Frictionless Tech
            </div>
          </div>
        </div>
        
        <div className="w-full md:w-auto">
          <Link
            href="/parking-revenue-analysis"
            className="block w-full md:w-auto text-center px-8 py-4 rounded-xl bg-foreground text-background font-semibold hover:bg-primary transition-all hover:shadow-xl hover:shadow-primary/20 hover:-translate-y-1"
          >
            {siteConfig.perfectParkingCTA}
          </Link>
        </div>
      </div>
    </div>
  );
}
