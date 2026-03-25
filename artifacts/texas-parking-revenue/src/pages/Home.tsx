import { Layout } from "@/components/layout/Layout";
import { MetaTags } from "@/components/seo/MetaTags";
import { CTABlock } from "@/components/blocks/CTABlock";
import { PerfectParkingBlock } from "@/components/blocks/PerfectParkingBlock";
import { Link } from "wouter";
import { ArrowRight, BarChart3, Shield, Map, Building2 } from "lucide-react";
import { motion } from "framer-motion";
import { cities, assets, decisions } from "@/data/content";

export default function Home() {
  return (
    <Layout>
      <MetaTags 
        title="Texas Parking Revenue Strategies" 
        description="Maximize parking NOI, improve operational efficiency, and elevate asset value for Texas commercial real estate, hotels, and hospitals."
        path="/"
      />

      {/* Hero Section */}
      <section className="relative pt-24 pb-32 lg:pt-32 lg:pb-40 overflow-hidden">
        <div className="absolute inset-0 z-[-1]" style={{ backgroundImage: `url('${import.meta.env.BASE_URL}images/hero-bg.png')`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
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
            <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6 leading-tight tracking-tight">
              Turn Parking Into a <span className="text-accent">Stronger Revenue Line</span>
            </h1>
            <p className="text-xl text-white/80 mb-10 text-balance leading-relaxed">
              Stop leaving money on the asphalt. Discover data-driven strategies to monetize your lots and garages without sacrificing guest experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/parking-revenue-analysis"
                className="px-8 py-4 rounded-xl bg-accent text-accent-foreground font-bold text-lg hover:bg-accent/90 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-accent/20 flex items-center justify-center gap-2"
              >
                Get Revenue Analysis <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/resources"
                className="px-8 py-4 rounded-xl bg-white/10 text-white font-bold text-lg hover:bg-white/20 backdrop-blur-md transition-all flex items-center justify-center"
              >
                Browse Resources
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Value Prop Section */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">Why Parking Strategy Matters</h2>
            <p className="text-lg text-muted-foreground">It's not just about managing cars. It's about optimizing asset valuation.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card p-8 rounded-3xl border border-border shadow-lg shadow-black/5 hover:-translate-y-1 transition-transform">
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-6">
                <BarChart3 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">Cap Rate Impact</h3>
              <p className="text-muted-foreground">Every $10k in added parking NOI can add $150k+ to your property valuation at standard Texas cap rates.</p>
            </div>
            <div className="bg-card p-8 rounded-3xl border border-border shadow-lg shadow-black/5 hover:-translate-y-1 transition-transform">
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-6">
                <Shield className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">Plugging Leakage</h3>
              <p className="text-muted-foreground">Outdated gated systems and poor enforcement cause up to 30% revenue leakage. We show you how to fix it.</p>
            </div>
            <div className="bg-card p-8 rounded-3xl border border-border shadow-lg shadow-black/5 hover:-translate-y-1 transition-transform">
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-6">
                <Map className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">Frictionless Experience</h3>
              <p className="text-muted-foreground">Modernize to gateless LPR to reduce queues, lower hardware CapEx, and drastically improve tenant satisfaction.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Markets & Assets Grid */}
      <section className="py-24 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Cities */}
            <div>
              <h2 className="text-3xl font-display font-bold text-foreground mb-8">Texas Market Guides</h2>
              <div className="space-y-4">
                {Object.entries(cities).map(([key, city]) => (
                  <Link key={key} href={`/texas/${key}-parking-revenue`} className="group block bg-card border border-border hover:border-primary/50 rounded-2xl p-6 transition-all hover:shadow-md">
                    <div className="flex justify-between items-center">
                      <div>
                        <h3 className="font-bold text-lg group-hover:text-primary transition-colors">{city.name}</h3>
                        <p className="text-sm text-muted-foreground mt-1 line-clamp-1">{city.description}</p>
                      </div>
                      <ArrowRight className="text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
            
            {/* Assets */}
            <div>
              <h2 className="text-3xl font-display font-bold text-foreground mb-8">Asset Playbooks</h2>
              <div className="space-y-4">
                {Object.entries(assets).map(([key, asset]) => (
                  <Link key={key} href={`/texas/${key}-parking-revenue`} className="group block bg-card border border-border hover:border-primary/50 rounded-2xl p-6 transition-all hover:shadow-md">
                    <div className="flex justify-between items-center">
                      <div>
                        <h3 className="font-bold text-lg group-hover:text-primary transition-colors">{asset.name}</h3>
                        <p className="text-sm text-muted-foreground mt-1 line-clamp-1">{asset.description}</p>
                      </div>
                      <ArrowRight className="text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Decisions */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-display font-bold text-foreground mb-10 text-center">Critical Owner Decisions</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(decisions).slice(0,3).map(([key, item]) => (
              <Link key={key} href={`/resources/${key}`} className="flex flex-col bg-card rounded-2xl border border-border p-6 hover:shadow-xl hover:-translate-y-1 transition-all group">
                <div className="h-full">
                  <h3 className="font-bold text-xl mb-3 group-hover:text-primary">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
                <div className="mt-6 flex items-center text-sm font-semibold text-accent group-hover:text-primary transition-colors">
                  Read Analysis <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
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
