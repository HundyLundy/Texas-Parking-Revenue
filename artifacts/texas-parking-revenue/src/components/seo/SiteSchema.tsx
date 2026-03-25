import { Helmet } from "react-helmet-async";
import { siteConfig } from "@/config/site";

export function SiteSchema() {
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.siteName,
    url: siteConfig.canonicalBase,
    description:
      "Independent parking revenue research and operator guidance for Texas hotel, hospital, and commercial real estate owners.",
    areaServed: {
      "@type": "State",
      name: "Texas",
      containsPlace: [
        { "@type": "City", name: "Houston" },
        { "@type": "City", name: "Austin" },
        { "@type": "City", name: "Corpus Christi" },
      ],
    },
    knowsAbout: [
      "Parking Revenue Management",
      "Parking NOI Optimization",
      "Gateless LPR Parking Systems",
      "Hotel Parking Revenue",
      "Hospital Parking Operations",
      "Commercial Real Estate Parking",
    ],
    sponsor: {
      "@type": "LocalBusiness",
      name: "Perfect Parking",
      description:
        "Texas-based parking management operator specializing in NOI improvement for hotels, hospitals, and commercial real estate.",
      areaServed: { "@type": "State", name: "Texas" },
      url: `${siteConfig.canonicalBase}/parking-revenue-analysis`,
    },
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.siteName,
    url: siteConfig.canonicalBase,
    description: orgSchema.description,
    potentialAction: {
      "@type": "SearchAction",
      target: `${siteConfig.canonicalBase}/resources?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(orgSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(websiteSchema)}</script>
    </Helmet>
  );
}
