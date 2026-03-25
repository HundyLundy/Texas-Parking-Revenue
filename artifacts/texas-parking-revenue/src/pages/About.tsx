import { Layout } from "@/components/layout/Layout";
import { MetaTags } from "@/components/seo/MetaTags";
import { CTABlock } from "@/components/blocks/CTABlock";
import { siteConfig } from "@/config/site";
import { Link } from "wouter";

const schema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "About Texas Parking Revenue",
  description:
    "How and why this resource was built — plus the operator behind it.",
  url: `${siteConfig.canonicalBase}/about`,
  publisher: {
    "@type": "Organization",
    name: siteConfig.siteName,
    url: siteConfig.canonicalBase,
    sponsor: { "@type": "LocalBusiness", name: "Perfect Parking" },
  },
};

export default function About() {
  return (
    <Layout>
      <MetaTags
        title="About This Site"
        description="Texas Parking Revenue is an independent resource backed by Perfect Parking — a Texas operator that actually runs parking programs for hotels, hospitals, and CRE owners."
        path="/about"
        schema={schema}
      />

      <section className="pt-24 pb-16 bg-secondary">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
            About This Site
          </h1>
          <p className="text-xl text-muted-foreground">
            Parking in Texas is a real business — and most property owners are running it like an afterthought. We built this to fix that.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-lg text-foreground/80">
          <h2>Why this site exists</h2>
          <p>
            There's no shortage of generic "parking management" advice online. What's missing is honest, market-specific guidance for Texas property owners — the hotel GM in Houston trying to figure out if they should rip out their gate system, the hospital CFO in Corpus Christi who keeps hearing complaints about parking but doesn't know if the revenue model is even fixable.
          </p>
          <p>
            That's the gap we're filling. No fluff, no vendor-speak — just straight answers about what works, what doesn't, and what it'll cost you to find out.
          </p>

          <h2>How we build our guides</h2>
          <p>
            Everything here is built from actual field experience in Texas parking operations — not aggregated blog content or generic "industry reports." We look at real assets, real enforcement challenges, and real revenue numbers from markets like the Texas Medical Center, the Corpus Christi waterfront, and downtown Austin.
          </p>
          <p>
            We keep everything through the lens of Net Operating Income. If a strategy sounds good but doesn't move NOI, we say so. If it has real downside risk (and a lot of parking strategies do), we'll tell you that too.
          </p>

          <h2>The operator behind this: {siteConfig.perfectParkingName}</h2>
          <p>
            This site is supported by <strong>{siteConfig.perfectParkingName}</strong>, a Texas-based parking management company. That's worth being transparent about. We built this resource because {siteConfig.perfectParkingName} works with property owners every day who come in under-informed — and the conversations go better when owners already understand the basics.
          </p>
          <p>
            So yes, there's a business interest here. But the research is real, the problems are real, and if you read this site and never call us, that's fine. You'll still be better equipped to run your parking than you were before.
          </p>
          <p>
            If you do want to talk,{" "}
            <Link href="/parking-revenue-analysis" className="text-primary font-semibold hover:underline">
              reach out here
            </Link>
            . No pitch decks, no high-pressure sales process — just a conversation about your property.
          </p>
        </div>
      </section>

      <CTABlock
        title="You've read enough. Let's talk numbers."
        description="Perfect Parking offers a free initial audit for Texas properties. Takes about 30 minutes. You'll leave knowing exactly where you stand."
        buttonText="Schedule a Free Audit"
      />
    </Layout>
  );
}
