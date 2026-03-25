import { Layout } from "@/components/layout/Layout";
import { MetaTags } from "@/components/seo/MetaTags";
import { CTABlock } from "@/components/blocks/CTABlock";
import { PerfectParkingBlock } from "@/components/blocks/PerfectParkingBlock";
import { MapPin, Building, TrendingUp } from "lucide-react";

interface CityPageProps {
  id: string;
  data: {
    name: string;
    title: string;
    description: string;
    drivers: string[];
    overview: string;
  };
}

export function CityPageTemplate({ id, data }: CityPageProps) {
  return (
    <Layout>
      <MetaTags title={data.title} description={data.description} path={`/texas/${id}-parking-revenue`} />
      
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-primary text-primary-foreground">
        <div className="absolute inset-0 opacity-20 mix-blend-overlay" style={{ backgroundImage: `url('${import.meta.env.BASE_URL}images/hero-bg.png')`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
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
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none text-foreground/80">
            <h2 className="text-3xl font-display font-bold text-foreground mb-6">Market Overview: {data.name}</h2>
            <p className="text-xl leading-relaxed mb-10">{data.overview}</p>
            
            <div className="bg-secondary rounded-2xl p-8 mb-12">
              <h3 className="text-xl font-bold flex items-center gap-2 mb-4 mt-0"><Building className="text-primary" /> Key Demand Drivers</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 list-none pl-0 m-0">
                {data.drivers.map((driver, i) => (
                  <li key={i} className="flex items-center gap-3 bg-card p-4 rounded-xl shadow-sm m-0">
                    <TrendingUp className="w-5 h-5 text-accent" />
                    <span className="font-semibold text-foreground">{driver}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <h3 className="text-2xl font-display font-bold text-foreground">Why Local Expertise Matters</h3>
            <p>
              National operators often apply cookie-cutter models to Texas markets. But {data.name} has unique zoning laws, tax implications, and driver behavior. A strategy relying heavily on aggressive towing might work elsewhere, but in {data.name}, gateless LPR combined with smart digital citations yields higher net collections and preserves brand reputation.
            </p>
          </div>
          
          <PerfectParkingBlock />
        </div>
      </section>

      <CTABlock />
    </Layout>
  );
}
