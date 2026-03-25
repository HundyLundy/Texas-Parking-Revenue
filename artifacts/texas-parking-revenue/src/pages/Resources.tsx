import { Layout } from "@/components/layout/Layout";
import { MetaTags } from "@/components/seo/MetaTags";
import { Link } from "wouter";
import { ArrowRight, Scale, MapPin, Building2 } from "lucide-react";
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
            Guides, decision frameworks, and market analysis for hotel, hospital, and commercial real estate owners navigating parking revenue in Texas. Each piece covers a specific operational or strategic question with relevant data and clear analysis.
          </p>
        </div>
      </section>

      {/* Decision Guides */}
      <section className="py-16 bg-background border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-2">
            <Scale className="w-5 h-5 text-primary" />
            <h2 className="text-2xl font-display font-bold text-foreground">Decision Analysis</h2>
          </div>
          <p className="text-muted-foreground text-sm mb-10 ml-8">
            These are the questions with real financial stakes — each guide covers the decision framework, relevant benchmarks, and what the answer typically looks like for Texas assets.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {Object.entries(decisions).map(([key, item]) => (
              <Link
                key={key}
                href={`/resources/${key}`}
                className="flex flex-col bg-card rounded-2xl border border-border px-6 py-6 hover:border-primary/40 hover:shadow-md transition-all group"
              >
                <h3 className="font-bold text-base mb-2 group-hover:text-primary transition-colors leading-snug">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">{item.description}</p>
                <div className="mt-5 flex items-center text-xs font-semibold text-muted-foreground group-hover:text-primary transition-colors">
                  Read analysis <ArrowRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-0.5 transition-transform" />
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
                <MapPin className="w-5 h-5 text-primary" />
                <h2 className="text-2xl font-display font-bold text-foreground">Texas Market Guides</h2>
              </div>
              <p className="text-sm text-muted-foreground mb-7 ml-8 leading-relaxed">
                Market-specific analysis covering local demand drivers, enforcement dynamics, seasonal patterns, and owner Q&A for each active Texas market.
              </p>
              <div className="space-y-3">
                {Object.entries(cities).map(([key, city]) => (
                  <Link
                    key={key}
                    href={`/texas/${key}-parking-revenue`}
                    className="group block bg-card border border-border hover:border-primary/40 rounded-2xl px-6 py-5 transition-all hover:shadow-sm"
                  >
                    <div className="flex justify-between items-center">
                      <div>
                        <h3 className="font-bold text-sm group-hover:text-primary transition-colors">{city.name} Market Guide</h3>
                        <p className="text-xs text-muted-foreground mt-0.5 line-clamp-1">{city.description}</p>
                      </div>
                      <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 transition-all flex-shrink-0 ml-4" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-2">
                <Building2 className="w-5 h-5 text-primary" />
                <h2 className="text-2xl font-display font-bold text-foreground">Asset Playbooks</h2>
              </div>
              <p className="text-sm text-muted-foreground mb-7 ml-8 leading-relaxed">
                Deep-dive operational guides by property type — covering industry benchmarks, common problems, and operational frameworks specific to each asset category.
              </p>
              <div className="space-y-3">
                {Object.entries(assets).map(([key, asset]) => (
                  <Link
                    key={key}
                    href={`/texas/${key}-parking-revenue`}
                    className="group block bg-card border border-border hover:border-primary/40 rounded-2xl px-6 py-5 transition-all hover:shadow-sm"
                  >
                    <div className="flex justify-between items-center">
                      <div>
                        <h3 className="font-bold text-sm group-hover:text-primary transition-colors">{asset.name} Playbook</h3>
                        <p className="text-xs text-muted-foreground mt-0.5 line-clamp-1">{asset.description}</p>
                      </div>
                      <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 transition-all flex-shrink-0 ml-4" />
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
