import { Layout } from "@/components/layout/Layout";
import { MetaTags } from "@/components/seo/MetaTags";
import { useListVendors } from "@workspace/api-client-react";
import { Users, Globe } from "lucide-react";

export default function VendorsDirectory() {
  const { data: vendors, isLoading, isError } = useListVendors();

  return (
    <Layout>
      <MetaTags title="Parking Vendors Directory" description="Database of Texas parking operators and tech providers" path="/directory/vendors" />
      
      <section className="py-12 bg-secondary border-b border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-display font-bold text-foreground">Vendor Directory</h1>
        </div>
      </section>

      <section className="py-12 min-h-[60vh]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {isLoading && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3].map(i => (
                <div key={i} className="h-40 bg-secondary animate-pulse rounded-2xl" />
              ))}
            </div>
          )}
          
          {isError && (
            <div className="bg-red-50 text-red-600 p-6 rounded-xl border border-red-100">
              Failed to load vendors. Please try again later.
            </div>
          )}

          {vendors && vendors.length === 0 && (
            <div className="text-center py-20 text-muted-foreground">
              <Users className="w-16 h-16 mx-auto mb-4 opacity-20" />
              <p>No vendors found in the database.</p>
            </div>
          )}

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {vendors?.map(vendor => (
              <div key={vendor.id} className="bg-card border border-border rounded-2xl p-6 shadow-sm hover:shadow-md transition-all">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-lg text-foreground">{vendor.company_name}</h3>
                  {vendor.featured && <span className="bg-accent/20 text-accent text-xs px-2 py-1 rounded font-bold">Featured</span>}
                </div>
                <div className="text-sm font-medium text-primary mb-3">
                  {vendor.category}
                </div>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                  {vendor.short_description || "No description provided."}
                </p>
                {vendor.website && (
                  <a href={vendor.website} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-sm text-primary hover:text-accent transition-colors font-medium">
                    <Globe className="w-4 h-4" /> Visit Website
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
