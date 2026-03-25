import { Layout } from "@/components/layout/Layout";
import { MetaTags } from "@/components/seo/MetaTags";
import { Link } from "wouter";
import { ArrowRight, Scale, MapPin, Building2, BookOpen } from "lucide-react";
import { decisions, cities, assets } from "@/data/content";

const resourcesSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Texas Parking Revenue — Resource Hub",
  description:
    "Decision analysis, market guides, and asset-type playbooks for Texas property owners managing parking revenue.",
  url: "https://texasparkingrevenue.com/resources",
  hasPart: Object.entries(decisions).map(([key, d]) => ({
    "@type": "Article",
    name: d.title,
    description: d.description,
    url: `https://texasparkingrevenue.com/resources/${key}`,
  })),
};

export default function Resources() {
  return (
    <Layout>
      <MetaTags
        title="Parking Revenue Resource Hub — Guides for Texas Property Owners"
        description="Decision analysis, Texas market guides, and asset-type playbooks covering parking revenue, NOI strategy, operator selection, and LPR technology."
        path="/resources"
        schema={resourcesSchema}
      />

      {/* Header */}
      <section className="pt-24 pb-14 bg-secondary border-b border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            Resource Hub
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
            Guides, decision frameworks, and market analysis for hotel, healthcare, and commercial real estate owners evaluating parking revenue in Texas. Each piece addresses a specific financial, operational, or strategic question with practical analysis.
          </p>
        </div>
      </section>

      {/* Decision Guides */}
      <section className="py-16 bg-background border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-2">
            <Scale className="w-5 h-5 text-accent" />
            <h2 className="text-2xl font-display font-bold text-foreground">Decision Analysis</h2>
          </div>
          <p className="text-muted-foreground text-sm mb-10 ml-8">
            These are the questions with the biggest operating and financial consequences. Each guide covers the decision framework, typical tradeoffs, and what the answer usually depends on for Texas assets.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {Object.entries(decisions).map(([key, item]) => (
              <Link
                key={key}
                href={`/resources/${key}`}
                className="flex flex-col bg-card rounded-2xl border border-border px-6 py-6 hover:border-accent/30 hover:shadow-md hover:-translate-y-0.5 transition-all group"
              >
                <h3 className="font-bold text-base mb-2 group-hover:text-primary transition-colors leading-snug">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">{item.description}</p>
                <div className="mt-5 flex items-center text-xs font-semibold text-muted-foreground group-hover:text-accent transition-colors">
                  Read analysis <ArrowRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* In-Depth Articles */}
      <section className="py-16 bg-background border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-2">
            <BookOpen className="w-5 h-5 text-accent" />
            <h2 className="text-2xl font-display font-bold text-foreground">In-Depth Guides</h2>
          </div>
          <p className="text-muted-foreground text-sm mb-10 ml-8">
            Longer-form analysis on specific operational and strategic questions for Texas hotel, healthcare, and commercial property owners.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                href: "/resources/should-texas-hotels-charge-for-parking",
                title: "Should a Texas Hotel Charge for Parking?",
                description: "When paid parking improves hotel NOI and when it creates more friction than it's worth.",
              },
              {
                href: "/resources/self-managed-vs-outsourced-parking-noi",
                title: "Self-Managed vs. Outsourced Parking: Which Produces More NOI?",
                description: "A comparison through the lens of net operating income, leakage, staffing, and reporting.",
              },
              {
                href: "/resources/parking-management-rfp-guide",
                title: "What Should a Parking Management RFP Include?",
                description: "How to structure a vendor evaluation process that compares operators on substance, not just price.",
              },
              {
                href: "/resources/gated-vs-gateless-parking-roi",
                title: "Gated vs. Gateless Parking: Where Does the ROI Actually Come From?",
                description: "Comparing gated and gateless systems on revenue capture, friction, maintenance, and enforcement tradeoffs.",
              },
              {
                href: "/resources/when-should-a-hospital-outsource-parking-management",
                title: "When Should a Hospital Outsource Parking Management?",
                description: "A practical guide for healthcare systems weighing outsourced management against in-house operations.",
              },
            ].map((article) => (
              <Link
                key={article.href}
                href={article.href}
                className="flex flex-col bg-card rounded-2xl border border-border px-6 py-6 hover:border-accent/30 hover:shadow-md hover:-translate-y-0.5 transition-all group"
              >
                <h3 className="font-bold text-base mb-2 group-hover:text-primary transition-colors leading-snug">
                  {article.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">{article.description}</p>
                <div className="mt-5 flex items-center text-xs font-semibold text-muted-foreground group-hover:text-accent transition-colors">
                  Read guide <ArrowRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Market Guides + Asset Playbooks */}
      <section className="py-16 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">

            <div>
              <div className="flex items-center gap-3 mb-2">
                <MapPin className="w-5 h-5 text-accent" />
                <h2 className="text-2xl font-display font-bold text-foreground">Texas Market Guides</h2>
              </div>
              <p className="text-sm text-muted-foreground mb-7 ml-8 leading-relaxed">
                Market-specific analysis covering local demand drivers, enforcement realities, seasonal patterns, and owner considerations across active Texas markets.
              </p>
              <div className="space-y-3">
                {Object.entries(cities).map(([key, city]) => (
                  <Link
                    key={key}
                    href={`/texas/${key}-parking-revenue`}
                    className="group block bg-card border border-border hover:border-accent/30 rounded-2xl px-6 py-5 transition-all hover:shadow-sm hover:-translate-y-0.5"
                  >
                    <div className="flex justify-between items-center">
                      <div>
                        <h3 className="font-bold text-sm group-hover:text-primary transition-colors">{city.name} Market Guide</h3>
                        <p className="text-xs text-muted-foreground mt-0.5 line-clamp-1">{city.description}</p>
                      </div>
                      <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-accent group-hover:translate-x-1 transition-all flex-shrink-0 ml-4" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-2">
                <Building2 className="w-5 h-5 text-accent" />
                <h2 className="text-2xl font-display font-bold text-foreground">Asset Playbooks</h2>
              </div>
              <p className="text-sm text-muted-foreground mb-7 ml-8 leading-relaxed">
                Operational guides by property type, covering common constraints, recurring revenue issues, and parking frameworks specific to each asset category.
              </p>
              <div className="space-y-3">
                {Object.entries(assets).map(([key, asset]) => (
                  <Link
                    key={key}
                    href={`/texas/${key}-parking-revenue`}
                    className="group block bg-card border border-border hover:border-accent/30 rounded-2xl px-6 py-5 transition-all hover:shadow-sm hover:-translate-y-0.5"
                  >
                    <div className="flex justify-between items-center">
                      <div>
                        <h3 className="font-bold text-sm group-hover:text-primary transition-colors">{asset.name} Playbook</h3>
                        <p className="text-xs text-muted-foreground mt-0.5 line-clamp-1">{asset.description}</p>
                      </div>
                      <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-accent group-hover:translate-x-1 transition-all flex-shrink-0 ml-4" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>
    </Layout>
  );
}
