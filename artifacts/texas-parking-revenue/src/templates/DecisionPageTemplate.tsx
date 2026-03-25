import { Layout } from "@/components/layout/Layout";
import { MetaTags } from "@/components/seo/MetaTags";
import { Link } from "wouter";
import { CheckCircle2, XCircle, AlertCircle, ArrowRight } from "lucide-react";

interface KeyFactor { factor: string; detail: string; }

interface DecisionData {
  title: string;
  description: string;
  pros: string[];
  cons: string[];
  analysis: string[];
  keyFactors: KeyFactor[];
  bottomLine: string;
}

interface DecisionPageProps {
  id: string;
  data: DecisionData;
}

export function DecisionPageTemplate({ id, data }: DecisionPageProps) {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: data.title,
        acceptedAnswer: { "@type": "Answer", text: data.analysis.join(" ") },
      },
    ],
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: data.title,
    description: data.description,
    about: { "@type": "Thing", name: "Parking Revenue Strategy" },
    publisher: {
      "@type": "Organization",
      name: "Texas Parking Revenue",
      url: "https://texasparkingrevenue.com",
    },
  };

  return (
    <Layout>
      <MetaTags
        title={data.title}
        description={data.description}
        path={`/resources/${id}`}
        type="article"
        schema={[faqSchema, articleSchema]}
      />

      {/* Header */}
      <section className="bg-primary text-primary-foreground pt-28 pb-14 border-b border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-block px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-semibold tracking-widest uppercase mb-6 text-white/70">
            Decision Analysis
          </div>
          <h1 className="text-3xl md:text-5xl font-display font-bold text-white mb-5 leading-tight">
            {data.title}
          </h1>
          <p className="text-lg text-primary-foreground/75 max-w-2xl leading-relaxed">
            {data.description}
          </p>
        </div>
      </section>

      {/* Summary Comparison */}
      <section className="py-12 bg-background border-b border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-display font-bold text-foreground mb-6">At a Glance</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-green-50/60 border border-green-100 rounded-2xl p-6">
              <h3 className="font-bold text-green-800 mb-4 flex items-center gap-2 text-sm uppercase tracking-widest">
                <CheckCircle2 className="w-4 h-4" /> Advantages
              </h3>
              <ul className="space-y-3">
                {data.pros.map((p, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-foreground/80">
                    <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-red-50/60 border border-red-100 rounded-2xl p-6">
              <h3 className="font-bold text-red-800 mb-4 flex items-center gap-2 text-sm uppercase tracking-widest">
                <XCircle className="w-4 h-4" /> Limitations & Risks
              </h3>
              <ul className="space-y-3">
                {data.cons.map((c, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-foreground/80">
                    <XCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Analysis */}
      <section className="py-14 bg-secondary border-b border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-display font-bold text-foreground mb-8">In-Depth Analysis</h2>
          <div className="space-y-6">
            {data.analysis.map((para, i) => (
              <p key={i} className="text-base text-foreground/75 leading-relaxed">
                {para}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Key Factors */}
      <section className="py-14 bg-background border-b border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-display font-bold text-foreground mb-2">
            Factors That Should Drive This Decision
          </h2>
          <p className="text-sm text-muted-foreground mb-8">
            These are the variables that matter most — not as a checklist, but as a framework for evaluating your specific situation.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {data.keyFactors.map((f, i) => (
              <div key={i} className="bg-secondary border border-border rounded-xl p-5">
                <h3 className="font-bold text-foreground text-sm mb-2">{f.factor}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom Line */}
      <section className="py-12 bg-primary text-primary-foreground border-b border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-accent/20 border border-accent/30 flex items-center justify-center flex-shrink-0 mt-0.5">
              <AlertCircle className="w-5 h-5 text-accent" />
            </div>
            <div>
              <h2 className="text-lg font-display font-bold text-white mb-2">Bottom Line</h2>
              <p className="text-primary-foreground/80 leading-relaxed">{data.bottomLine}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Soft CTA */}
      <section className="py-16 bg-secondary">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-display font-bold text-foreground mb-3">
            How does this apply to your property?
          </h2>
          <p className="text-muted-foreground mb-7 leading-relaxed max-w-lg mx-auto text-sm">
            General frameworks are useful. But the right answer depends on your specific asset, user mix, lease structure, and market. A property-level revenue analysis can give you a clearer picture.
          </p>
          <Link
            href="/parking-revenue-analysis"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:bg-primary/90 transition-all hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-0.5"
          >
            Request a Revenue Analysis <ArrowRight className="w-4 h-4" />
          </Link>
          <p className="mt-3 text-xs text-muted-foreground">Powered by Perfect Parking. If you want help evaluating your property, contact them for a parking revenue analysis.</p>
        </div>
      </section>
    </Layout>
  );
}
