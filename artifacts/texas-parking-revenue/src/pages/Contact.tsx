import { Layout } from "@/components/layout/Layout";
import { MetaTags } from "@/components/seo/MetaTags";

export default function Contact() {
  return (
    <Layout>
      <MetaTags
        title="Contact — Texas Parking Revenue"
        description="Get more information about parking revenue management for your Texas property."
        path="/contact"
      />

      <section className="pt-32 pb-20 bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-bold tracking-widest uppercase text-muted-foreground mb-4">
            Get in touch
          </p>
          <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Request More Information
          </h1>
          <p className="text-muted-foreground text-base leading-relaxed mb-10 max-w-xl">
            Fill out the form below and someone will follow up with information relevant to your property and market.
          </p>

          {/* GoHighLevel embed — paste iframe or script snippet here */}
          <div className="bg-secondary border border-border rounded-2xl p-8 min-h-[400px] flex items-center justify-center">
            <p className="text-sm text-muted-foreground text-center">
              Contact form will be embedded here.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
