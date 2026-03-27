import { Layout } from "@/components/layout/Layout";
import { MetaTags } from "@/components/seo/MetaTags";
import { Link } from "wouter";
import { ArrowRight, BookOpen } from "lucide-react";
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

      {/* Resource Library Index */}
      <section className="py-16 bg-background border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div>
              {/* Thin red accent line above eyebrow */}
              <div className="w-10 h-[3px] bg-texas-red rounded-full mb-3" />
              <p className="text-xs font-bold tracking-widest uppercase text-accent mb-2">The resource library</p>
              <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground">
                Guides for Texas parking owners
              </h2>
              <p className="text-muted-foreground text-sm mt-2 max-w-xl leading-relaxed">
                Decision analysis, in-depth operational guides, and market research — organized by topic. These are the questions that come up most often when owners start treating parking as a revenue line.
              </p>
            </div>
            <div className="flex items-center gap-4 flex-shrink-0">
              <span className="text-xs font-semibold text-muted-foreground bg-secondary border border-border px-3 py-1 rounded-full">
                10 guides
              </span>
              <Link
                href="/resources"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-accent transition-colors"
              >
                Full resource hub <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-10">

            {/* Decision Analysis */}
            <div>
              <div className="flex items-center gap-2 mb-5 pb-3 border-b border-border">
                <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Decision Analysis</span>
              </div>
              <div className="space-y-5">
                {Object.entries(decisions).map(([key, item]) => (
                  <Link
                    key={key}
                    href={`/resources/${key}`}
                    className="group flex items-start gap-4"
                  >
                    <ArrowRight className="w-4 h-4 mt-0.5 flex-shrink-0 text-border group-hover:text-accent group-hover:translate-x-0.5 transition-all" />
                    <div>
                      <p className="font-semibold text-sm text-foreground group-hover:text-primary transition-colors leading-snug">
                        {item.title}
                      </p>
                      <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed line-clamp-2">
                        {item.description}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* In-Depth Guides */}
            <div>
              <div className="flex items-center gap-2 mb-5 pb-3 border-b border-border">
                <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">In-Depth Guides</span>
              </div>
              <div className="space-y-5">
                {[
                  {
                    href: "/resources/should-texas-hotels-charge-for-parking",
                    title: "Should a Texas Hotel Charge for Parking?",
                    description: "When paid parking improves hotel NOI and when it creates more friction than it's worth.",
                  },
                  {
                    href: "/resources/self-managed-vs-outsourced-parking-noi",
                    title: "Self-Managed vs. Outsourced Parking: Which Produces More NOI?",
                    description: "A net-NOI comparison — staffing, enforcement, reporting, and what the fee comparison misses.",
                  },
                  {
                    href: "/resources/parking-management-rfp-guide",
                    title: "What Should a Parking Management RFP Include?",
                    description: "How to structure a vendor evaluation that compares operators on substance, not just price.",
                  },
                  {
                    href: "/resources/gated-vs-gateless-parking-roi",
                    title: "Gated vs. Gateless Parking: Where Does the ROI Actually Come From?",
                    description: "Revenue capture, friction, maintenance, and enforcement tradeoffs — by asset type.",
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
                    className="group flex items-start gap-4"
                  >
                    <ArrowRight className="w-4 h-4 mt-0.5 flex-shrink-0 text-border group-hover:text-accent group-hover:translate-x-0.5 transition-all" />
                    <div>
                      <p className="font-semibold text-sm text-foreground group-hover:text-primary transition-colors leading-snug">
                        {article.title}
                      </p>
                      <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed line-clamp-2">
                        {article.description}
                      </p>
                    </div>
                  </Link>
                ))}
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

    </Layout>
  );
}
