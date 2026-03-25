import { Layout } from "@/components/layout/Layout";
import { MetaTags } from "@/components/seo/MetaTags";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { decisions, cities, assets } from "@/data/content";

export default function Resources() {
  return (
    <Layout>
      <MetaTags title="Parking Revenue Resources & Insights" description="Guides and analysis on monetizing commercial parking in Texas." path="/resources" />
      
      <section className="pt-24 pb-16 bg-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
            Resource Hub
          </h1>
          <p className="text-xl text-muted-foreground">
            Everything you need to turn your parking asset from a cost center into a high-margin revenue stream.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="mb-20">
            <h2 className="text-3xl font-display font-bold mb-8">Strategic Decisions</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Object.entries(decisions).map(([key, item]) => (
                <Link key={key} href={`/resources/${key}`} className="flex flex-col bg-card rounded-2xl border border-border p-6 hover:border-primary/50 hover:shadow-lg transition-all group">
                  <div className="h-full">
                    <h3 className="font-bold text-xl mb-3 group-hover:text-primary">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                  <div className="mt-6 font-semibold text-accent flex items-center text-sm">
                    Read Guide <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-display font-bold mb-8">By Market</h2>
              <div className="space-y-4">
                {Object.entries(cities).map(([key, city]) => (
                  <Link key={key} href={`/texas/${key}-parking-revenue`} className="block bg-card rounded-xl border border-border p-5 hover:bg-secondary transition-colors font-medium">
                    {city.name} Market Guide
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-display font-bold mb-8">By Asset Type</h2>
              <div className="space-y-4">
                {Object.entries(assets).map(([key, asset]) => (
                  <Link key={key} href={`/texas/${key}-parking-revenue`} className="block bg-card rounded-xl border border-border p-5 hover:bg-secondary transition-colors font-medium">
                    {asset.name} Strategies
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
