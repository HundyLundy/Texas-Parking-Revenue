import { Layout } from "@/components/layout/Layout";
import { MetaTags } from "@/components/seo/MetaTags";
import { LeadForm } from "@/components/blocks/LeadForm";
import { CheckCircle2 } from "lucide-react";

const whatToExpect = [
  { label: "Property review", detail: "We look at your asset type, location, space count, and current management structure." },
  { label: "Market benchmarking", detail: "Your asset is compared against comparable properties in the same Texas market and asset class." },
  { label: "Revenue gap estimate", detail: "We identify the realistic recoverable revenue based on current pricing, enforcement, and utilization patterns." },
  { label: "Operational recommendation", detail: "You receive a clear summary of what would need to change and what that change involves operationally." },
];

export default function LeadCapture() {
  return (
    <Layout>
      <MetaTags
        title="Request a Parking Revenue Analysis — Texas Property Owners"
        description="Submit your property details for a no-obligation parking revenue analysis. We'll benchmark your asset against comparable Texas properties and identify recoverable NOI."
        path="/parking-revenue-analysis"
      />

      <section className="bg-secondary border-b border-border pt-24 pb-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-block px-3 py-1 rounded-full bg-primary/8 border border-primary/15 text-xs font-semibold tracking-widest uppercase mb-5 text-primary">
            No Obligation
          </div>
          <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4 max-w-2xl leading-tight">
            Request a Parking Revenue Analysis
          </h1>
          <p className="text-muted-foreground leading-relaxed max-w-xl">
            Submit your property details below. A parking operations specialist will review your asset and provide a property-specific revenue estimate — what's currently being captured, what's likely leaking, and what a corrected program would look like.
          </p>
        </div>
      </section>

      <section className="py-14 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-14 items-start">

            <div className="lg:col-span-2 space-y-10">
              <div>
                <h2 className="text-lg font-display font-bold text-foreground mb-5">What the analysis covers</h2>
                <div className="space-y-5">
                  {whatToExpect.map((item, i) => (
                    <div key={i} className="flex gap-3">
                      <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <div>
                        <h3 className="font-semibold text-sm text-foreground">{item.label}</h3>
                        <p className="text-sm text-muted-foreground mt-0.5 leading-relaxed">{item.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-secondary border border-border rounded-2xl p-6">
                <h3 className="font-bold text-foreground text-sm mb-3">Who handles this</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Analyses are conducted by <strong className="text-foreground">Perfect Parking</strong>, a Texas-based parking management operator that works with hotel, hospital, and commercial real estate owners across the state. There's no obligation to engage them after the review.
                </p>
              </div>

              <div className="text-xs text-muted-foreground leading-relaxed border-t border-border pt-6">
                Typical response time is 1–2 business days. We don't share your information with third parties or add you to marketing lists.
              </div>
            </div>

            <div className="lg:col-span-3">
              <div className="bg-card border border-border rounded-3xl p-8 shadow-sm">
                <LeadForm />
              </div>
            </div>

          </div>
        </div>
      </section>
    </Layout>
  );
}
