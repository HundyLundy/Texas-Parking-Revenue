import { Helmet } from "react-helmet-async";
import { siteConfig } from "@/config/site";

interface MetaTagsProps {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article";
  schema?: object | object[];
}

export function MetaTags({ title, description, path, type = "website", schema }: MetaTagsProps) {
  const url = `${siteConfig.canonicalBase}${path}`;
  const fullTitle = `${title} | ${siteConfig.siteName}`;

  const schemas = schema ? (Array.isArray(schema) ? schema : [schema]) : [];

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta name="robots" content="index, follow" />

      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={siteConfig.siteName} />
      <meta property="og:locale" content="en_US" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />

      {schemas.map((s, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(s)}
        </script>
      ))}
    </Helmet>
  );
}
