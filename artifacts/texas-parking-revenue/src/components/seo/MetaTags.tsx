import { Helmet } from "react-helmet-async";
import { siteConfig } from "@/config/site";

interface MetaTagsProps {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article";
}

export function MetaTags({ title, description, path, type = "website" }: MetaTagsProps) {
  const url = `${siteConfig.canonicalBase}${path}`;
  const fullTitle = `${title} | ${siteConfig.siteName}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={siteConfig.siteName} />
      
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  );
}
