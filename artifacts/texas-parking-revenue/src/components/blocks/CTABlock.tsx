import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

interface CTABlockProps {
  title?: string;
  description?: string;
  buttonText?: string;
}

export function CTABlock({
  title = "Find out what your parking is actually worth.",
  description = "Most properties we audit are leaving $150K to $600K per year uncaptured. The analysis is free, and it only takes one conversation to find out where you stand.",
  buttonText = "Get a Free Revenue Analysis"
}: CTABlockProps) {
  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="bg-primary rounded-3xl p-8 md:p-16 text-center relative overflow-hidden shadow-2xl">
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `url('${import.meta.env.BASE_URL}images/pattern-bg.png')`,
              backgroundSize: "300px",
            }}
          />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/20 rounded-full blur-[100px] pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-primary-foreground leading-tight">
              {title}
            </h2>
            <p className="text-lg text-primary-foreground/80 text-balance">
              {description}
            </p>
            <div className="pt-4">
              <Link
                href="/parking-revenue-analysis"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-accent text-accent-foreground font-bold text-lg hover:bg-accent/90 transition-all hover:shadow-xl hover:shadow-accent/20 hover:-translate-y-1"
              >
                {buttonText} <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <p className="text-sm text-primary-foreground/40">
              Powered by Perfect Parking. If you want help evaluating your property, contact them for a parking revenue analysis.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
