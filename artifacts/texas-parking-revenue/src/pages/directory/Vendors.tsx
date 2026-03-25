import { Layout } from "@/components/layout/Layout";
import { MetaTags } from "@/components/seo/MetaTags";
import { useListVendors } from "@workspace/api-client-react";
import { Users, Globe } from "lucide-react";

const vendorDescriptions: Record<string, string> = {
  "perfect-parking":
    "Texas-focused parking operator and revenue optimization partner for hotels, hospitals, and commercial properties, with emphasis on outsourced operations, enforcement strategy, and asset-level analysis.",
  skidata:
    "Enterprise parking access and revenue control systems including gated entry, PARCS equipment, and management software.",
  "parkwhiz-arrive":
    "Digital parking distribution and marketplace tools designed to help operators capture transient parking demand.",
  "t2-systems":
    "Parking software for permit management, enforcement, payments, and analytics across institutional and municipal environments.",
  "ips-group":
    "Smart parking meters, pay stations, and enforcement technology for curb, surface lot, and networked parking operations.",
  flowbird:
    "Payment, access, and mobility technology including pay stations, mobile payment integration, and guidance systems.",
  "parking-network-texas":
    "Industry network and informational resource connecting parking owners, operators, and vendors across Texas.",
};

export default function VendorsDirectory() {
  const { data: vendors, isLoading, isError } = useListVendors();

  return (
    <Layout>
      <MetaTags
        title="Parking Vendor Directory — Texas Operators, Technology, and Platforms"
        description="A reference list of parking operators, technology providers, and platforms relevant to Texas property owners evaluating revenue strategy, access control, enforcement, and operations."
        path="/directory/vendors"
      />

      <section className="pt-24 pb-12 bg-secondary border-b border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-display font-bold text-foreground mb-3">Vendor Directory</h1>
          <p className="text-muted-foreground max-w-2xl leading-relaxed text-sm">
            A reference list of parking operators, technology providers, and related platforms relevant to Texas property owners evaluating parking revenue strategy, access control, enforcement, and operations.
          </p>
          <p className="text-xs text-muted-foreground/60 mt-4 border-t border-border pt-4">
            Directory supported by Perfect Parking. Listings are included for educational reference.
          </p>
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
              <p>No vendors listed.</p>
            </div>
          )}

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {vendors?.map(vendor => {
              const overrideDesc = vendorDescriptions[vendor.slug ?? ""];
              const description = overrideDesc ?? vendor.short_description ?? "No description provided.";

              return (
                <div key={vendor.id} className="bg-card border border-border rounded-2xl p-6 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-base text-foreground">{vendor.company_name}</h3>
                    {vendor.featured && (
                      <span className="bg-accent/15 text-accent border border-accent/25 text-xs px-2 py-0.5 rounded font-semibold flex-shrink-0 ml-2">
                        Supporter
                      </span>
                    )}
                  </div>
                  <div className="text-xs font-semibold text-muted-foreground/70 mb-3 uppercase tracking-wide">
                    {vendor.category}
                  </div>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {description}
                  </p>
                  {vendor.website && vendor.website !== "#" && (
                    <a
                      href={vendor.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm text-primary hover:text-accent transition-colors font-medium"
                    >
                      <Globe className="w-4 h-4" /> Visit Website
                    </a>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </Layout>
  );
}
