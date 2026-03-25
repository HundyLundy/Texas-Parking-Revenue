import { Layout } from "@/components/layout/Layout";
import { MetaTags } from "@/components/seo/MetaTags";
import { CTABlock } from "@/components/blocks/CTABlock";
import { PerfectParkingBlock } from "@/components/blocks/PerfectParkingBlock";
import { Link } from "wouter";
import { ArrowRight, BarChart3, Shield, Map } from "lucide-react";
import { motion } from "framer-motion";
import { cities, assets, decisions } from "@/data/content";

const homeSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Texas Parking Revenue — Strategies for Hotel, Hospital & CRE Owners",
  description:
    "Stop losing money on underperforming parking. Guides, market data, and operator insights for Texas property owners across Houston, Austin, and Corpus Christi.",
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
        title="Texas Parking Revenue Strategies for Hotel, Hospital & CRE Owners"
        description="Most Texas property owners are leaving $150K–$600K in parking revenue on the table. Market guides, operator comparisons, and free audits — built for Houston, Austin, and Corpus Christi."
        path="/"
        schema={homeSchema}
      />

      {/* Hero */}
      <section className="relative pt-24 pb-32 lg:pt-32 lg:pb-40 overflow-hidden">
        <div
          className="absolute inset-0 z-[-1]"
          style={{
            backgroundImage: `url('${import.meta.env.BASE_URL}images/hero-bg.png')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-primary/90 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/50 to-background" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <div className="inline-block px-4 py-1.5 rounded-full bg-accent/20 border border-accent/30 text-accent font-semibold text-sm mb-6">
              For Texas Real Estate Owners & Operators
            </div>
            <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6 leading-tight tracking-tight speakable">
              Your parking lot is a{" "}
              <span className="text-accent">profit center.</span> It's just not
              running like one yet.
            </h1>
            <p className="text-xl text-white/80 mb-10 leading-relaxed max-w-2xl">
              Most Texas property owners are leaving five to six figures on the table every year — not because their parking is bad, but because nobody's actually running it. These guides will change that.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/parking-revenue-analysis"
                className="px-8 py-4 rounded-xl bg-accent text-accent-foreground font-bold text-lg hover:bg-accent/90 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-accent/20 flex items-center justify-center gap-2"
              >
                Get a Free Revenue Audit <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/resources"
                className="px-8 py-4 rounded-xl bg-white/10 text-white font-bold text-lg hover:bg-white/20 backdrop-blur-md transition-all flex items-center justify-center"
              >
                Browse the Guides
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Value Props */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4 speakable">
              Parking isn't glamorous. But the revenue is real.
            </h2>
            <p className="text-lg text-muted-foreground">
              Here's why the owners who take parking seriously end up with better assets.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card p-8 rounded-3xl border border-border shadow-lg shadow-black/5 hover:-translate-y-1 transition-transform">
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-6">
                <BarChart3 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">It moves the cap rate</h3>
              <p className="text-muted-foreground">
                Every $10K you add to parking NOI adds $150K+ to your property's valuation at a standard Texas cap rate. That math compounds fast.
              </p>
            </div>
            <div className="bg-card p-8 rounded-3xl border border-border shadow-lg shadow-black/5 hover:-translate-y-1 transition-transform">
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-6">
                <Shield className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">You're losing ~30% right now</h3>
              <p className="text-muted-foreground">
                Outdated gated systems and under-enforced lots typically leak 25–35% of potential revenue. It's not a maybe — it's nearly guaranteed.
              </p>
            </div>
            <div className="bg-card p-8 rounded-3xl border border-border shadow-lg shadow-black/5 hover:-translate-y-1 transition-transform">
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-6">
                <Map className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">Gateless tech actually works</h3>
              <p className="text-muted-foreground">
                LPR camera systems eliminate gate hardware costs, clear the queue at entry, and let you run digital enforcement that actually sticks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Markets & Assets Grid */}
      <section className="py-24 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-display font-bold text-foreground mb-3">Texas Market Guides</h2>
              <p className="text-muted-foreground mb-8">
                Each market plays differently. Houston's TMC is nothing like Austin's 6th Street or Corpus Christi's waterfront — and your strategy shouldn't be either.
              </p>
              <div className="space-y-4">
                {Object.entries(cities).map(([key, city]) => (
                  <Link
                    key={key}
                    href={`/texas/${key}-parking-revenue`}
                    className="group block bg-card border border-border hover:border-primary/50 rounded-2xl p-6 transition-all hover:shadow-md"
                  >
                    <div className="flex justify-between items-center">
                      <div>
                        <h3 className="font-bold text-lg group-hover:text-primary transition-colors">
                          {city.name}
                        </h3>
                        <p className="text-sm text-muted-foreground mt-1 line-clamp-1">
                          {city.description}
                        </p>
                      </div>
                      <ArrowRight className="text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all flex-shrink-0 ml-4" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-display font-bold text-foreground mb-3">Asset Playbooks</h2>
              <p className="text-muted-foreground mb-8">
                Hotels, hospitals, and office parks have completely different parking problems. We cover each one in detail.
              </p>
              <div className="space-y-4">
                {Object.entries(assets).map(([key, asset]) => (
                  <Link
                    key={key}
                    href={`/texas/${key}-parking-revenue`}
                    className="group block bg-card border border-border hover:border-primary/50 rounded-2xl p-6 transition-all hover:shadow-md"
                  >
                    <div className="flex justify-between items-center">
                      <div>
                        <h3 className="font-bold text-lg group-hover:text-primary transition-colors">
                          {asset.name}
                        </h3>
                        <p className="text-sm text-muted-foreground mt-1 line-clamp-1">
                          {asset.description}
                        </p>
                      </div>
                      <ArrowRight className="text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all flex-shrink-0 ml-4" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Decision Resources */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-display font-bold text-foreground mb-3">
              The decisions that actually move the needle
            </h2>
            <p className="text-muted-foreground">
              Stop debating the wrong things. These are the calls that determine whether your parking makes money or costs you money.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(decisions).slice(0, 3).map(([key, item]) => (
              <Link
                key={key}
                href={`/resources/${key}`}
                className="flex flex-col bg-card rounded-2xl border border-border p-6 hover:shadow-xl hover:-translate-y-1 transition-all group"
              >
                <div className="h-full">
                  <h3 className="font-bold text-xl mb-3 group-hover:text-primary">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
                <div className="mt-6 flex items-center text-sm font-semibold text-accent group-hover:text-primary transition-colors">
                  Read the Analysis <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-16">
            <PerfectParkingBlock />
          </div>
        </div>
      </section>

      <CTABlock />
    </Layout>
  );
}
