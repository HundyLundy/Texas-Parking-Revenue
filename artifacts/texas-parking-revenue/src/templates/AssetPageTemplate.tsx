import { Layout } from "@/components/layout/Layout";
import { MetaTags } from "@/components/seo/MetaTags";
import { CTABlock } from "@/components/blocks/CTABlock";
import { PerfectParkingBlock } from "@/components/blocks/PerfectParkingBlock";
import { AlertCircle, Lightbulb } from "lucide-react";

interface AssetPageProps {
  id: string;
  data: {
    name: string;
    title: string;
    description: string;
    painPoints: string[];
    solution: string;
  };
}

export function AssetPageTemplate({ id, data }: AssetPageProps) {
  return (
    <Layout>
      <MetaTags title={data.title} description={data.description} path={`/texas/${id}-parking-revenue`} />
      
      <section className="bg-secondary pt-24 pb-16 border-b border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
            {data.title}
          </h1>
          <p className="text-xl text-muted-foreground">
            {data.description}
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h3 className="text-2xl font-display font-bold mb-6 flex items-center gap-2">
                <AlertCircle className="text-destructive" /> Common Pain Points
              </h3>
              <ul className="space-y-4">
                {data.painPoints.map((point, i) => (
                  <li key={i} className="flex items-start gap-3 p-4 bg-red-50/50 rounded-xl border border-red-100">
                    <span className="w-6 h-6 rounded-full bg-red-100 text-red-600 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">{i+1}</span>
                    <span className="text-foreground/80">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-2xl font-display font-bold mb-6 flex items-center gap-2">
                <Lightbulb className="text-accent" /> The Modern Solution
              </h3>
              <div className="bg-primary text-primary-foreground p-6 rounded-2xl h-full shadow-xl">
                <p className="text-lg leading-relaxed">{data.solution}</p>
              </div>
            </div>
          </div>

          <PerfectParkingBlock />
        </div>
      </section>

      <CTABlock />
    </Layout>
  );
}
