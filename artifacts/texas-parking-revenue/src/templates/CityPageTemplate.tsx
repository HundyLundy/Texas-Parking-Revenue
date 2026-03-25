import { Layout } from "@/components/layout/Layout";
import { MetaTags } from "@/components/seo/MetaTags";
import { CTABlock } from "@/components/blocks/CTABlock";
import { PerfectParkingBlock } from "@/components/blocks/PerfectParkingBlock";
import { FAQAccordion } from "@/components/shared/FAQAccordion";
import { Link } from "wouter";
import { MapPin, Building, TrendingUp, AlertTriangle, DollarSign, ArrowRight, Calendar } from "lucide-react";

interface CityData {
  name: string;
  slug?: string;
  title: string;
  description: string;
  drivers: string[];
  overview: string;
  metroSummary?: string;
  monetizationOpportunities?: string[];
  operationalRisks?: string[];
  ownerQuestions?: { q: string; a: string }[];
  relatedAssets?: { label: string; href: string }[];
  lastUpdated?: string;
}

interface CityPageProps {
  id: string;
  data: CityData;
}

export function CityPageTemplate({ id, data }: CityPageProps) {
  const canonicalPath = `/texas/${id}-parking-revenue`;

  return (
    <Layout>
      <MetaTags
        title={data.title}
        description={data.description}
        path={canonicalPath}
      />

      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-primary text-primary-foreground">
        <div
          className="absolute inset-0 opacity-20 mix-blend-overlay"
          style={{
            backgroundImage: `url('${import.meta.env.BASE_URL}images/hero-bg.png')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm mb-6 text-sm font-medium">
            <MapPin className="w-4 h-4 text-accent" /> Texas Market Guide
          </div>
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 max-w-4xl mx-auto text-balance">
            {data.title}
          </h1>
          <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
            {data.description}
          </p>
          {data.lastUpdated && (
            <div className="flex items-center justify-center gap-1.5 mt-6 text-sm text-primary-foreground/50">
              <Calendar className="w-4 h-4" /> Last reviewed: {data.lastUpdated}
            </div>
          )}
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 bg-background border-b border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {data.metroSummary && (
            <div className="bg-accent/10 border border-accent/20 rounded-2xl px-6 py-4 mb-8 text-sm text-foreground/80 font-medium">
              <span className="font-bold text-accent">Market snapshot: </span>
              {data.metroSummary}
            </div>
          )}
          <h2 className="text-3xl font-display font-bold text-foreground mb-4">
            Market Overview: {data.name}
          </h2>
          <p className="text-lg text-foreground/75 leading-relaxed">
            {data.overview}
          </p>
        </div>
      </section>

      {/* Demand Drivers */}
      <section className="py-16 bg-secondary border-b border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-display font-bold text-foreground mb-6 flex items-center gap-2">
            <Building className="w-6 h-6 text-primary" /> Key Demand Drivers
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {data.drivers.map((driver, i) => (
              <div
                key={i}
                className="flex items-center gap-3 bg-card border border-border p-4 rounded-xl shadow-sm"
              >
                <TrendingUp className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="font-semibold text-foreground">{driver}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Monetization + Risks */}
      {(data.monetizationOpportunities || data.operationalRisks) && (
        <section className="py-16 bg-background border-b border-border">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-10">
              {data.monetizationOpportunities && (
                <div>
                  <h2 className="text-xl font-display font-bold text-foreground mb-5 flex items-center gap-2">
                    <DollarSign className="w-5 h-5 text-green-600" /> Monetization Opportunities
                  </h2>
                  <ul className="space-y-3">
                    {data.monetizationOpportunities.map((item, i) => (
                      <li key={i} className="flex gap-3 text-sm text-foreground/80">
                        <span className="mt-0.5 w-5 h-5 rounded-full bg-green-100 text-green-700 flex-shrink-0 flex items-center justify-center text-xs font-bold">
                          {i + 1}
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {data.operationalRisks && (
                <div>
                  <h2 className="text-xl font-display font-bold text-foreground mb-5 flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5 text-amber-500" /> Operational Risks
                  </h2>
                  <ul className="space-y-3">
                    {data.operationalRisks.map((item, i) => (
                      <li key={i} className="flex gap-3 text-sm text-foreground/80">
                        <span className="mt-0.5 w-5 h-5 rounded-full bg-amber-100 text-amber-700 flex-shrink-0 flex items-center justify-center text-xs font-bold">
                          !
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Owner Q&A */}
      {data.ownerQuestions && data.ownerQuestions.length > 0 && (
        <section className="py-16 bg-secondary border-b border-border">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-display font-bold text-foreground mb-8">
              Common Owner Questions for {data.name}
            </h2>
            <FAQAccordion
              faqs={data.ownerQuestions.map((item) => ({
                question: item.q,
                answer: item.a,
              }))}
            />
          </div>
        </section>
      )}

      {/* Local Expertise Note */}
      <section className="py-16 bg-background border-b border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-display font-bold text-foreground mb-4">
            Why Local Expertise Matters in {data.name}
          </h2>
          <p className="text-lg text-foreground/75 leading-relaxed">
            National operators often apply cookie-cutter models to Texas markets. But {data.name} has unique
            zoning conditions, driver behavior patterns, and enforcement sensitivities. A strategy relying
            heavily on aggressive towing might work in some markets, but in {data.name}, gateless LPR combined
            with smart digital citations yields higher net collections and preserves brand reputation.
          </p>

          <div className="mt-10">
            <PerfectParkingBlock />
          </div>
        </div>
      </section>

      {/* Related Assets */}
      {data.relatedAssets && data.relatedAssets.length > 0 && (
        <section className="py-14 bg-secondary">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-xl font-display font-bold text-foreground mb-6">
              Related Guides for {data.name} Owners
            </h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {data.relatedAssets.map((asset, i) => (
                <Link
                  key={i}
                  href={asset.href}
                  className="group flex items-center justify-between bg-card border border-border hover:border-primary/50 rounded-xl p-4 transition-all hover:shadow-md"
                >
                  <span className="font-medium text-sm group-hover:text-primary transition-colors">
                    {asset.label}
                  </span>
                  <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all flex-shrink-0" />
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTABlock />
    </Layout>
  );
}
