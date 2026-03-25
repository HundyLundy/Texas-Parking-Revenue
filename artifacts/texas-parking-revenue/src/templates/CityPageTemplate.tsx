import { Layout } from "@/components/layout/Layout";
import { MetaTags } from "@/components/seo/MetaTags";
import { FAQAccordion } from "@/components/shared/FAQAccordion";
import { Link } from "wouter";
import { MapPin, Building, TrendingUp, AlertTriangle, DollarSign, ArrowRight, Calendar } from "lucide-react";
import { siteConfig } from "@/config/site";

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
  localContextNote?: string;
  relatedAssets?: { label: string; href: string }[];
  lastUpdated?: string;
}

interface CityPageProps {
  id: string;
  data: CityData;
}

export function CityPageTemplate({ id, data }: CityPageProps) {
  const canonicalPath = `/texas/${id}-parking-revenue`;

  const schemas: object[] = [];

  if (data.ownerQuestions && data.ownerQuestions.length > 0) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: data.ownerQuestions.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: { "@type": "Answer", text: item.a },
      })),
    });
  }

  schemas.push({
    "@context": "https://schema.org",
    "@type": "Article",
    headline: data.title,
    description: data.description,
    about: {
      "@type": "Thing",
      name: `Parking Revenue in ${data.name}, Texas`,
    },
    areaServed: { "@type": "City", name: data.name, containedInPlace: { "@type": "State", name: "Texas" } },
    dateModified: data.lastUpdated ?? "2026-03",
    publisher: {
      "@type": "Organization",
      name: "Texas Parking Revenue",
      url: "https://texasparkingrevenue.com",
    },
  });

  // City-specific accent scheme:
  // Dallas → Cowboys silver only (no red)
  // Houston → Texans red only (no silver)
  // Others → mixed default
  const isDallas  = id === "dallas";
  const isHouston = id === "houston";

  const snapshotBorder  = isDallas ? "border-l-texas-silver" : "border-l-texas-red";
  const snapshotLabel   = isDallas ? "text-texas-silver"     : "text-texas-red/80";
  const demandsDivider  = isDallas ? "border-t-texas-silver/50"
                        : isHouston ? "border-t-texas-red/35"
                        : "border-t-texas-silver/30";
  const contextDivider  = isDallas ? "border-t-[3px] border-t-texas-silver/35"
                        : "border-t-[3px] border-t-texas-red/20";

  return (
    <Layout>
      <MetaTags
        title={data.title}
        description={data.description}
        path={canonicalPath}
        type="article"
        schema={schemas}
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
            <div className={`bg-accent/10 border border-accent/20 border-l-4 ${snapshotBorder} rounded-2xl px-6 py-4 mb-8 text-sm text-foreground/80 font-medium`}>
              <span className={`font-bold ${snapshotLabel}`}>Market snapshot: </span>
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
      <section className={`py-16 bg-secondary border-b border-border border-t-2 ${demandsDivider}`}>
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

      {/* Why Local Context Matters */}
      {data.localContextNote && (
        <section className={`py-16 bg-background border-b border-border ${contextDivider}`}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-display font-bold text-foreground mb-4">
              Why Local Context Matters in {data.name}
            </h2>
            <p className="text-lg text-foreground/75 leading-relaxed">
              {data.localContextNote}
            </p>
          </div>
        </section>
      )}

      {/* Related Assets */}
      {data.relatedAssets && data.relatedAssets.length > 0 && (
        <section className="py-14 bg-secondary border-b border-border">
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

      {/* Sponsored Listing — Perfect Parking */}
      <section className="py-12 bg-secondary/40 border-t border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground/40 mb-3 text-center">
            Sponsored Listing
          </p>
          <div className="bg-card border border-border rounded-2xl shadow-sm overflow-hidden">
            <div className="px-8 py-6 flex flex-col sm:flex-row sm:items-center gap-6">
              {/* Logo */}
              <div className="flex-shrink-0">
                <img
                  src={`${import.meta.env.BASE_URL}images/perfect-parking-logo.webp`}
                  alt="Perfect Parking"
                  className="h-14 w-auto object-contain rounded-lg"
                />
              </div>
              {/* Description */}
              <div className="flex-1 min-w-0">
                <p className="font-bold text-foreground text-base">
                  {siteConfig.perfectParkingName}
                </p>
                <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
                  Texas-based parking management company serving hotels, hospital campuses, and commercial real estate owners. Specializes in outsourced operations, enforcement programs, and property-specific revenue analysis.
                </p>
              </div>
              {/* CTA */}
              <div className="flex-shrink-0">
                <Link
                  href="/parking-revenue-analysis"
                  className="inline-flex items-center gap-2 px-5 py-3 bg-primary text-primary-foreground text-sm font-semibold rounded-xl hover:bg-primary/90 transition-colors shadow-sm whitespace-nowrap"
                >
                  Get your free revenue analysis
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
