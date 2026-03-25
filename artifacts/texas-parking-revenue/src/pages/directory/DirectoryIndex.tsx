import { Layout } from "@/components/layout/Layout";
import { MetaTags } from "@/components/seo/MetaTags";
import { Link } from "wouter";
import { Building, Users } from "lucide-react";

export default function DirectoryIndex() {
  return (
    <Layout>
      <MetaTags title="Texas Parking Directory" description="Explore parking properties and vendors in Texas." path="/directory" />
      
      <section className="pt-24 pb-16 bg-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
            Texas Parking Directory
          </h1>
          <p className="text-xl text-muted-foreground">
            Explore our curated databases of commercial parking assets and service providers.
          </p>
        </div>
      </section>

      <section className="py-20 min-h-[50vh]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <Link href="/directory/properties" className="bg-card border border-border rounded-2xl p-8 hover:shadow-xl hover:border-primary/50 transition-all group text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                <Building className="w-8 h-8" />
              </div>
              <h2 className="text-2xl font-bold mb-3">Properties</h2>
              <p className="text-muted-foreground">Browse parking structures, lots, and mixed-use assets across Texas.</p>
            </Link>
            
            <Link href="/directory/vendors" className="bg-card border border-border rounded-2xl p-8 hover:shadow-xl hover:border-primary/50 transition-all group text-center">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6 text-accent group-hover:bg-accent group-hover:text-white transition-colors">
                <Users className="w-8 h-8" />
              </div>
              <h2 className="text-2xl font-bold mb-3">Vendors & Operators</h2>
              <p className="text-muted-foreground">Find trusted technology providers, enforcement partners, and operators.</p>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
