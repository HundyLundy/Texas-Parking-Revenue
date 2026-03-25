import { Layout } from "@/components/layout/Layout";
import { MetaTags } from "@/components/seo/MetaTags";
import { LeadForm } from "@/components/blocks/LeadForm";

export default function LeadCapture() {
  return (
    <Layout>
      <MetaTags title="Free Parking Revenue Analysis" description="Request a custom revenue analysis for your Texas parking assets." path="/parking-revenue-analysis" />
      
      <section className="py-20 bg-secondary min-h-[calc(100vh-200px)]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-5 gap-12 items-start">
            
            <div className="md:col-span-2 space-y-8">
              <div>
                <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
                  Find out exactly how much NOI you're missing.
                </h1>
                <p className="text-lg text-muted-foreground">
                  Our analysts will review your current setup and provide a free, no-obligation projection of your hidden revenue potential.
                </p>
              </div>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold flex-shrink-0">1</div>
                  <div>
                    <h3 className="font-bold text-foreground">Submit Details</h3>
                    <p className="text-sm text-muted-foreground">Tell us about your property type and location.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold flex-shrink-0">2</div>
                  <div>
                    <h3 className="font-bold text-foreground">Data Analysis</h3>
                    <p className="text-sm text-muted-foreground">We compare your asset against local market comps.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-accent/20 text-accent flex items-center justify-center font-bold flex-shrink-0">3</div>
                  <div>
                    <h3 className="font-bold text-foreground">Get Your Report</h3>
                    <p className="text-sm text-muted-foreground">Receive a custom NOI projection and strategy roadmap.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:col-span-3">
              <LeadForm />
            </div>

          </div>
        </div>
      </section>
    </Layout>
  );
}
