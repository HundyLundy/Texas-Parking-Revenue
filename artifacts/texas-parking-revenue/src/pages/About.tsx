import { Layout } from "@/components/layout/Layout";
import { MetaTags } from "@/components/seo/MetaTags";
import { siteConfig } from "@/config/site";

const schema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "About Texas Parking Revenue",
  description:
    "Why this resource exists, what it covers, how the information is evaluated, and who supports it.",
  url: `${siteConfig.canonicalBase}/about`,
  publisher: {
    "@type": "Organization",
    name: siteConfig.siteName,
    url: siteConfig.canonicalBase,
  },
};

export default function About() {
  return (
    <Layout>
      <MetaTags
        title="About This Site — Texas Parking Revenue"
        description="Why Texas Parking Revenue was built, what it covers, how the content is evaluated, and a transparent note on who supports it."
        path="/about"
        schema={schema}
      />

      <section className="pt-24 pb-12 bg-secondary border-b border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            About This Site
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            A reference guide to parking revenue for Texas property owners — covering the financial, operational, and market questions that matter most.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-lg text-foreground/80">

          <h2>Why this site exists</h2>
          <p>
            Most publicly available parking information is either vendor marketing or generic operational content written for municipal operators. Neither is particularly useful to a hotel GM trying to decide whether to remove gate arms, or a hospital CFO trying to understand why parking complaints keep showing up in patient satisfaction data.
          </p>
          <p>
            This site focuses on the questions Texas commercial property owners actually face: how parking revenue is structured, what it's worth at the asset level, what separates well-run programs from underperforming ones, and how the decision-making differs across Houston, Austin, and Corpus Christi.
          </p>

          <h2>What it covers</h2>
          <p>
            The site is organized around three types of content:
          </p>
          <ul>
            <li><strong>Texas market guides</strong> — city-specific analysis covering local demand drivers, enforcement dynamics, seasonal patterns, and owner considerations for Houston, Austin, and Corpus Christi.</li>
            <li><strong>Asset playbooks</strong> — operational frameworks by property type (hotel, hospital, commercial real estate), covering common structural problems and how well-run programs address them.</li>
            <li><strong>Decision guides</strong> — analysis of the choices with the biggest financial consequences: self-management vs. outsourcing, gated vs. gateless systems, how parking NOI flows to property value, and when transitioning to paid parking makes sense.</li>
          </ul>

          <h2>How the content is evaluated</h2>
          <p>
            Every guide is evaluated through the lens of net operating income. If a strategy sounds reasonable but doesn't improve NOI under realistic conditions, it gets noted. If a common approach carries meaningful downside risk — enforcement friction, tenant relationship damage, patient satisfaction exposure — that's part of the analysis too.
          </p>
          <p>
            The goal is to be useful whether you're running one surface lot or managing a large mixed-use portfolio. The analysis tries to stay specific enough to be actionable and honest enough to be worth reading.
          </p>

          <h2>Who supports this site</h2>
          <p>
            Texas Parking Revenue is supported by <strong>Perfect Parking</strong>, a Texas-based parking management company that works with hotels, hospitals, and commercial real estate owners across the state. That relationship is disclosed here because transparency matters.
          </p>
          <p>
            The content is written to be useful regardless of who manages your parking. If you read through the guides and handle everything in-house, that's a reasonable outcome. If you want a property-level analysis from Perfect Parking directly, that option is available on the <a href="/parking-revenue-analysis" className="text-primary hover:underline">contact page</a>.
          </p>

        </div>
      </section>
    </Layout>
  );
}
