import { Layout } from "@/components/layout/Layout";
import { MetaTags } from "@/components/seo/MetaTags";
import { useListProperties } from "@workspace/api-client-react";
import { Building2, MapPin } from "lucide-react";

const editorialNames: Record<string, { title: string; useCase: string }> = {
  "downtown-houston-hotel-district": {
    title: "Downtown Hotel Parking Profile",
    useCase: "Guest parking + transient capture",
  },
  "texas-medical-center-campus": {
    title: "Medical Campus Parking Profile",
    useCase: "Patient access, staff allocation, and validation reform",
  },
  "uptown-dallas-office-campus": {
    title: "Urban Office Campus Parking Profile",
    useCase: "Monthly tenant permits + after-hours transient monetization",
  },
  "dallas-medical-district-hospital": {
    title: "Hospital Parking Profile",
    useCase: "Healthcare access + enforcement balance",
  },
  "south-congress-austin-mixed-use": {
    title: "Mixed-Use District Parking Profile",
    useCase: "Mixed-use daytime + evening monetization",
  },
  "austin-domain-retail-center": {
    title: "Retail Center Parking Profile",
    useCase: "Validation-heavy operations with event-driven pricing",
  },
  "houston-airport-area-hotel-portfolio": {
    title: "Airport Hotel Parking Profile",
    useCase: "Park-and-fly demand capture with shuttle integration",
  },
};

export default function PropertiesDirectory() {
  const { data: properties, isLoading, isError } = useListProperties();

  return (
    <Layout>
      <MetaTags
        title="Example Property Profiles — Texas Parking Operating Scenarios"
        description="Illustrative Texas parking operating profiles by asset type, location pattern, and management model. Examples for planning and comparison."
        path="/directory/properties"
      />

      <section className="pt-24 pb-12 bg-secondary border-b border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-display font-bold text-foreground mb-3">Example Property Profiles</h1>
          <p className="text-muted-foreground max-w-2xl leading-relaxed text-sm">
            These illustrative profiles show common Texas parking operating scenarios by asset type, location pattern, and management model. They are examples for planning and comparison, not live property listings.
          </p>
        </div>
      </section>

      <section className="py-12 min-h-[60vh]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {isLoading && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map(i => (
                <div key={i} className="h-52 bg-secondary animate-pulse rounded-2xl" />
              ))}
            </div>
          )}

          {isError && (
            <div className="bg-red-50 text-red-600 p-6 rounded-xl border border-red-100">
              Failed to load profiles. Please try again later.
            </div>
          )}

          {properties && properties.length === 0 && (
            <div className="text-center py-20 text-muted-foreground">
              <Building2 className="w-16 h-16 mx-auto mb-4 opacity-20" />
              <p>No profiles available.</p>
            </div>
          )}

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {properties?.map(prop => {
              const editorial = editorialNames[prop.slug ?? ""];
              const displayTitle = editorial?.title ?? prop.property_name;
              const useCase = editorial?.useCase;

              return (
                <div
                  key={prop.id}
                  className="bg-card border border-border rounded-2xl p-6 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all"
                >
                  <h3 className="font-bold text-base text-foreground mb-1 leading-snug">{displayTitle}</h3>
                  {useCase && (
                    <p className="text-xs text-accent font-semibold mb-3">{useCase}</p>
                  )}
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                    <MapPin className="w-4 h-4 flex-shrink-0" /> {prop.city}, TX
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Asset type</span>
                      <span className="font-medium">{prop.property_type}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Model</span>
                      <span className="font-medium">{prop.management_model || 'Unknown'}</span>
                    </div>
                    {prop.estimated_revenue_potential && (
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Revenue range</span>
                        <span className="font-medium text-xs text-right max-w-[55%]">{prop.estimated_revenue_potential}</span>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </Layout>
  );
}
