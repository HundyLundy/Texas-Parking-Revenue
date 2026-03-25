import { Layout } from "@/components/layout/Layout";
import { MetaTags } from "@/components/seo/MetaTags";
import { useListProperties } from "@workspace/api-client-react";
import { Building2, MapPin } from "lucide-react";

export default function PropertiesDirectory() {
  const { data: properties, isLoading, isError } = useListProperties();

  return (
    <Layout>
      <MetaTags title="Parking Properties Directory" description="Database of Texas parking facilities" path="/directory/properties" />
      
      <section className="py-12 bg-secondary border-b border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-display font-bold text-foreground">Property Directory</h1>
        </div>
      </section>

      <section className="py-12 min-h-[60vh]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {isLoading && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map(i => (
                <div key={i} className="h-48 bg-secondary animate-pulse rounded-2xl" />
              ))}
            </div>
          )}
          
          {isError && (
            <div className="bg-red-50 text-red-600 p-6 rounded-xl border border-red-100">
              Failed to load properties. Please try again later.
            </div>
          )}

          {properties && properties.length === 0 && (
            <div className="text-center py-20 text-muted-foreground">
              <Building2 className="w-16 h-16 mx-auto mb-4 opacity-20" />
              <p>No properties found in the database.</p>
            </div>
          )}

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {properties?.map(prop => (
              <div key={prop.id} className="bg-card border border-border rounded-2xl p-6 shadow-sm hover:shadow-md transition-all">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-bold text-lg text-foreground">{prop.property_name}</h3>
                  {prop.featured && <span className="bg-accent/20 text-accent text-xs px-2 py-1 rounded font-bold">Featured</span>}
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                  <MapPin className="w-4 h-4" /> {prop.city}, TX
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between"><span className="text-muted-foreground">Type</span> <span className="font-medium">{prop.property_type}</span></div>
                  <div className="flex justify-between"><span className="text-muted-foreground">Model</span> <span className="font-medium">{prop.management_model || 'Unknown'}</span></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
