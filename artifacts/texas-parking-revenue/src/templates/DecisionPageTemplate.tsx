import { Layout } from "@/components/layout/Layout";
import { MetaTags } from "@/components/seo/MetaTags";
import { CTABlock } from "@/components/blocks/CTABlock";
import { ProConTable } from "@/components/shared/ProConTable";
import { Scale } from "lucide-react";

interface DecisionPageProps {
  id: string;
  data: {
    title: string;
    description: string;
    pros: string[];
    cons: string[];
  };
}

export function DecisionPageTemplate({ id, data }: DecisionPageProps) {
  return (
    <Layout>
      <MetaTags title={data.title} description={data.description} path={`/resources/${id}`} type="article" />
      
      <section className="pt-24 pb-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/20 text-accent mb-6">
            <Scale className="w-8 h-8" />
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
            {data.title}
          </h1>
          <p className="text-xl text-muted-foreground">
            {data.description}
          </p>
        </div>
      </section>

      <section className="pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ProConTable 
            title="Executive Summary Comparison" 
            pros={data.pros} 
            cons={data.cons} 
          />
          
          <div className="prose prose-lg max-w-none text-foreground/80 mt-12">
            <h3>Making the Final Call</h3>
            <p>
              The right decision depends heavily on your property's specific class, geography, and investment horizon. Are you holding for cash flow, or preparing for disposition? 
              A slight adjustment in your parking model can add significant points to your net operating income, translating directly into asset value.
            </p>
          </div>
        </div>
      </section>

      <CTABlock title="Want a custom recommendation?" buttonText="Get Free Portfolio Review" />
    </Layout>
  );
}
