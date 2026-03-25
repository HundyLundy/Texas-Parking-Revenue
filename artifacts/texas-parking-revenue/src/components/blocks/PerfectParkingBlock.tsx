import { Link } from "wouter";
import { TrendingUp, ShieldCheck, PhoneCall } from "lucide-react";
import { siteConfig } from "@/config/site";

export function PerfectParkingBlock() {
  return (
    <div className="relative my-12 rounded-3xl overflow-hidden border-2 border-accent/30 bg-gradient-to-br from-primary to-primary/90 text-primary-foreground shadow-2xl shadow-primary/20">
      <div className="absolute top-0 right-0 w-72 h-72 bg-accent/10 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full blur-2xl -ml-12 -mb-12 pointer-events-none" />

      <div className="relative z-10 px-8 md:px-12 py-10 md:py-12">
        <div className="flex flex-col md:flex-row gap-10 items-start md:items-center">
          <div className="flex-1 space-y-5">
            <div className="inline-block px-3 py-1 rounded-full bg-accent/20 border border-accent/30 text-accent text-xs font-bold tracking-widest uppercase">
              Featured Operator &mdash; Texas
            </div>
            <h3 className="text-2xl md:text-3xl font-display font-bold leading-tight">
              Perfect Parking turns your lots into actual revenue.
            </h3>
            <p className="text-primary-foreground/75 text-base leading-relaxed max-w-lg">
              No cookie-cutter contracts. No revenue splits that only benefit the operator. {siteConfig.perfectParkingName} is a Texas-based team that comes in, audits your asset, and builds a program around what <em>your</em> property actually needs — not what's easiest to manage.
            </p>
            <div className="flex flex-wrap gap-5 pt-1">
              <div className="flex items-center gap-2 text-sm font-semibold">
                <TrendingUp className="w-4 h-4 text-accent" /> 20–40% revenue lift, typically
              </div>
              <div className="flex items-center gap-2 text-sm font-semibold">
                <ShieldCheck className="w-4 h-4 text-accent" /> Gateless LPR tech included
              </div>
              <div className="flex items-center gap-2 text-sm font-semibold">
                <PhoneCall className="w-4 h-4 text-accent" /> Free initial audit
              </div>
            </div>
          </div>

          <div className="w-full md:w-auto flex flex-col items-stretch md:items-end gap-3">
            <Link
              href="/parking-revenue-analysis"
              className="block text-center px-8 py-4 rounded-xl bg-accent text-accent-foreground font-bold text-base hover:bg-accent/90 transition-all hover:shadow-xl hover:shadow-accent/30 hover:-translate-y-1 whitespace-nowrap"
            >
              Talk to Perfect Parking
            </Link>
            <p className="text-center text-xs text-primary-foreground/40">
              No commitment. Usually responds same day.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
