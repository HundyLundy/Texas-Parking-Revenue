import { Layout } from "@/components/layout/Layout";
import { MetaTags } from "@/components/seo/MetaTags";
import { FAQAccordion } from "@/components/shared/FAQAccordion";
import { Link } from "wouter";
import { AlertCircle, BarChart3, Settings, ArrowRight } from "lucide-react";

interface KeyMetric { stat: string; label: string; }
interface PainPoint { issue: string; detail: string; }
interface OperationalNote { heading: string; body: string; }
interface QA { q: string; a: string; }
interface RelatedResource { label: string; href: string; }

interface AssetData {
  name: string;
  title: string;
  description: string;
  context: string;
  keyMetrics: KeyMetric[];
  painPoints: PainPoint[];
  operationalConsiderations: OperationalNote[];
  ownerQuestions: QA[];
  relatedResources: RelatedResource[];
}

interface AssetPageProps {
  id: string;
  data: AssetData;
}

export function AssetPageTemplate({ id, data }: AssetPageProps) {
  const canonicalPath = `/texas/${id}-parking-revenue`;

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: data.ownerQuestions.map((q) => ({
      "@type": "Question",
      name: q.q,
      acceptedAnswer: { "@type": "Answer", text: q.a },
    })),
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: data.title,
    description: data.description,
    about: { "@type": "Thing", name: `${data.name} Parking Management` },
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
        path={canonicalPath}
        type="article"
        schema={[faqSchema, articleSchema]}
      />

      {/* Header */}
      <section className="bg-primary text-primary-foreground pt-28 pb-16 border-b border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-block px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-semibold tracking-widest uppercase mb-6 text-white/70">
            Asset Playbook
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-5 leading-tight">
            {data.title}
          </h1>
          <p className="text-lg text-primary-foreground/75 max-w-2xl leading-relaxed">
            {data.description}
          </p>
        </div>
      </section>

      {/* Key Metrics Bar */}
      <section className="bg-primary/95 border-b border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {data.keyMetrics.map((m, i) => (
              <div key={i} className="text-center">
                <div className="text-2xl md:text-3xl font-display font-bold text-accent">{m.stat}</div>
                <div className="text-xs text-primary-foreground/55 mt-1 leading-snug">{m.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Context */}
      <section className="py-14 bg-background border-b border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-display font-bold text-foreground mb-5">Industry Context</h2>
          <p className="text-base text-foreground/75 leading-relaxed">{data.context}</p>
        </div>
      </section>

      {/* Pain Points */}
      <section className="py-14 bg-secondary border-b border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-display font-bold text-foreground mb-2 flex items-center gap-2">
            <AlertCircle className="w-5 h-5 text-destructive" /> Common Operational Problems
          </h2>
          <p className="text-sm text-muted-foreground mb-8">
            These issues appear consistently across {data.name.toLowerCase()} parking programs in Texas — regardless of asset size or market.
          </p>
          <div className="space-y-4">
            {data.painPoints.map((p, i) => (
              <div key={i} className="bg-card border border-border rounded-2xl p-6">
                <h3 className="font-bold text-foreground mb-2 flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-red-100 text-red-600 flex items-center justify-center text-xs font-bold flex-shrink-0">
                    {i + 1}
                  </span>
                  {p.issue}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed pl-7">{p.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Operational Considerations */}
      <section className="py-14 bg-background border-b border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-display font-bold text-foreground mb-2 flex items-center gap-2">
            <Settings className="w-5 h-5 text-primary" /> Operational Frameworks
          </h2>
          <p className="text-sm text-muted-foreground mb-8">
            How well-managed programs structure the decisions that matter most for {data.name.toLowerCase()} parking.
          </p>
          <div className="grid md:grid-cols-2 gap-5">
            {data.operationalConsiderations.map((note, i) => (
              <div key={i} className="bg-secondary border border-border rounded-2xl p-6">
                <h3 className="font-bold text-foreground mb-3">{note.heading}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{note.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Owner Q&A */}
      <section className="py-14 bg-secondary border-b border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-display font-bold text-foreground mb-2 flex items-center gap-2">
            <BarChart3 className="w-5 h-5 text-accent" /> Owner & Operator Questions
          </h2>
          <p className="text-sm text-muted-foreground mb-8">
            The questions that consistently come up when {data.name.toLowerCase()} owners evaluate parking strategy.
          </p>
          <FAQAccordion
            faqs={data.ownerQuestions.map((q) => ({ question: q.q, answer: q.a }))}
          />
        </div>
      </section>

      {/* Related Resources */}
      <section className="py-12 bg-background border-b border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-lg font-display font-bold text-foreground mb-5">Related Guides</h2>
          <div className="grid sm:grid-cols-3 gap-3">
            {data.relatedResources.map((r, i) => (
              <Link
                key={i}
                href={r.href}
                className="group flex items-center justify-between bg-card border border-border rounded-xl px-5 py-4 hover:border-primary/40 hover:shadow-sm transition-all"
              >
                <span className="text-sm font-medium group-hover:text-primary transition-colors">{r.label}</span>
                <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 transition-all flex-shrink-0" />
              </Link>
            ))}
          </div>
        </div>
      </section>

    </Layout>
  );
}
