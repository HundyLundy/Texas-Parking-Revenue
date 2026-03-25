import { Layout } from "@/components/layout/Layout";
import { MetaTags } from "@/components/seo/MetaTags";
import { Link } from "wouter";
import { ArrowRight, BarChart3, Shield, Map, BookOpen } from "lucide-react";
import { motion } from "framer-motion";
import { cities, assets, decisions } from "@/data/content";

const homeSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Texas Parking Revenue — A Resource for Property Owners and Operators",
  description:
    "Guides, market data, and operational frameworks for Texas hotel, hospital, and commercial real estate owners navigating parking revenue, NOI impact, and management strategy.",
  url: "https://texasparkingrevenue.com/",
  speakable: {
    "@type": "SpeakableSpecification",
    cssSelector: ["h1", "h2", ".speakable"],
  },
};

export default function Home() {
  return (
    <Layout>
      <MetaTags
        title="Texas Parking Revenue — Guides for Hotel, Hospital & CRE Owners"
        description="Market guides and decision frameworks for Texas property owners navigating parking revenue, NOI strategy, operator selection, and LPR technology across Houston, Austin, and Corpus Christi."
        path="/"
        schema={homeSchema}
      />

      {/* Hero */}
      <section className="relative pt-20 pb-20 lg:pt-28 lg:pb-28 overflow-hidden">
        <div
          className="absolute inset-0 z-[-1]"
          style={{
            backgroundImage: `url('${import.meta.env.BASE_URL}images/hero-bg.png')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-primary/97 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/80 to-background" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white/80 text-sm mb-7">
              <BookOpen className="w-4 h-4" /> A guide for Texas property owners
            </div>
            <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 leading-tight tracking-tight speakable">
              Parking revenue in Texas, explained for property owners
            </h1>
            <p className="text-lg md:text-xl text-white/75 mb-10 leading-relaxed max-w-2xl">
              Market guides, operating frameworks, and decision analysis for hotel, healthcare, and commercial real estate owners evaluating parking as a real revenue line.
            </p>
            <Link
              href="/resources"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-white text-primary font-bold text-base hover:bg-white/90 transition-all hover:shadow-xl hover:shadow-black/20 hover:-translate-y-0.5"
            >
              Browse the Guides <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* What this resource covers */}
      <section className="py-20 bg-background border-b border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4 speakable">
            What this covers
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-10">
            Parking is one of the most overlooked operating revenue lines in Texas real estate. This site covers the questions owners actually have to answer: whether to self-manage or outsource, which systems hold up in real enforcement conditions, and how parking NOI affects asset value.
          </p>
          <div className="grid sm:grid-cols-3 gap-6">
            <div className="flex gap-3">
              <div className="mt-1 w-9 h-9 flex-shrink-0 rounded-lg bg-accent/15 text-accent flex items-center justify-center">
                <BarChart3 className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-1">NOI & Valuation</h3>
                <p className="text-sm text-muted-foreground">
                  How parking revenue affects cap rate, valuation, and asset performance.
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="mt-1 w-9 h-9 flex-shrink-0 rounded-lg bg-accent/15 text-accent flex items-center justify-center">
                <Shield className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-1">Operations & Enforcement</h3>
                <p className="text-sm text-muted-foreground">
                  Gated vs. gateless operations, LPR, enforcement design, and revenue leakage.
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="mt-1 w-9 h-9 flex-shrink-0 rounded-lg bg-accent/15 text-accent flex items-center justify-center">
                <Map className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-1">Texas Market Context</h3>
                <p className="text-sm text-muted-foreground">
                  City-specific demand drivers, risks, seasonality, and operator considerations across key Texas markets.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Markets & Assets Grid */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <p className="text-xs font-bold tracking-widest uppercase text-accent mb-2">Texas market context</p>
              <h2 className="text-2xl font-display font-bold text-foreground mb-2">Texas Market Guides</h2>
              <p className="text-muted-foreground mb-7 text-sm leading-relaxed">
                Parking strategy in Houston behaves very differently than it does in Austin or Corpus Christi. Each market guide covers local demand drivers, enforcement realities, seasonality, and owner considerations for that city.
              </p>
              <div className="space-y-3">
                {Object.entries(cities).map(([key, city]) => (
                  <Link
                    key={key}
                    href={`/texas/${key}-parking-revenue`}
                    className="group block bg-card border border-border hover:border-accent/40 rounded-2xl px-6 py-5 transition-all hover:shadow-lg hover:-translate-y-1"
                  >
                    <div className="flex justify-between items-center">
                      <div>
                        <h3 className="font-bold text-base group-hover:text-primary transition-colors">
                          {city.name}
                        </h3>
                        <p className="text-sm text-muted-foreground mt-0.5 line-clamp-1">
                          {city.description}
                        </p>
                      </div>
                      <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-accent group-hover:translate-x-1.5 transition-all flex-shrink-0 ml-4" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <p className="text-xs font-bold tracking-widest uppercase text-accent mb-2">For owners evaluating revenue</p>
              <h2 className="text-2xl font-display font-bold text-foreground mb-2">Asset Playbooks</h2>
              <p className="text-muted-foreground mb-7 text-sm leading-relaxed">
                Hotels, hospitals, and commercial real estate each present different parking constraints. Guest experience, staff allocation, visitor access, and after-hours monetization all need different operating models.
              </p>
              <div className="space-y-3">
                {Object.entries(assets).map(([key, asset]) => (
                  <Link
                    key={key}
                    href={`/texas/${key}-parking-revenue`}
                    className="group block bg-card border border-border hover:border-accent/40 rounded-2xl px-6 py-5 transition-all hover:shadow-lg hover:-translate-y-1"
                  >
                    <div className="flex justify-between items-center">
                      <div>
                        <h3 className="font-bold text-base group-hover:text-primary transition-colors">
                          {asset.name}
                        </h3>
                        <p className="text-sm text-muted-foreground mt-0.5 line-clamp-1">
                          {asset.description}
                        </p>
                      </div>
                      <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-accent group-hover:translate-x-1.5 transition-all flex-shrink-0 ml-4" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Decision Guides */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-10">
            <p className="text-xs font-bold tracking-widest uppercase text-accent mb-2">Core operating questions</p>
            <h2 className="text-2xl font-display font-bold text-foreground mb-2 speakable">
              Key decisions for parking owners and operators
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed">
              These are the decisions that most often determine whether parking performs like an amenity, an operational headache, or a revenue-producing asset.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {Object.entries(decisions).slice(0, 3).map(([key, item]) => (
              <Link
                key={key}
                href={`/resources/${key}`}
                className="flex flex-col bg-card rounded-2xl border border-border px-6 py-6 hover:shadow-lg hover:-translate-y-1.5 hover:border-accent/30 transition-all group"
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
          <div className="mt-6 text-center">
            <Link href="/resources" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              View all decision guides →
            </Link>
          </div>
        </div>
      </section>

      {/* Soft bottom CTA */}
      <section className="py-20 bg-secondary border-t border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4">
            Need a property-specific view?
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-8 max-w-xl mx-auto">
            If you want to understand what your specific property may be losing, what is realistically recoverable, and what an operating change would require, request a property-level parking revenue analysis.
          </p>
          <Link
            href="/parking-revenue-analysis"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-semibold text-base hover:bg-primary/90 transition-all hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-0.5"
          >
            Request a Revenue Analysis <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </Layout>
  );
}
