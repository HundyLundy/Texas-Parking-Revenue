import { ReactNode } from "react";
import { Layout } from "@/components/layout/Layout";
import { MetaTags } from "@/components/seo/MetaTags";
import { Link } from "wouter";

interface Source {
  label: string;
  url?: string;
}

interface ArticlePageProps {
  metaTitle: string;
  metaDescription: string;
  path: string;
  schema?: Record<string, unknown>;
  h1: string;
  lastUpdated: string;
  shortAnswer: ReactNode;
  children: ReactNode;
  sources: Source[];
}

export function ArticlePageTemplate({
  metaTitle,
  metaDescription,
  path,
  schema,
  h1,
  lastUpdated,
  shortAnswer,
  children,
  sources,
}: ArticlePageProps) {
  return (
    <Layout>
      <MetaTags
        title={metaTitle}
        description={metaDescription}
        path={path}
        schema={schema}
      />

      {/* Header */}
      <section className="pt-20 pb-10 bg-secondary border-b border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-4">
            <Link
              href="/resources"
              className="text-xs font-semibold uppercase tracking-widest text-muted-foreground/60 hover:text-primary transition-colors"
            >
              ← Resources
            </Link>
          </div>
          <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-3 leading-tight">
            {h1}
          </h1>
          <p className="text-xs text-muted-foreground/55">Last updated: {lastUpdated}</p>
        </div>
      </section>

      {/* Short answer */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <div className="bg-secondary border border-border rounded-xl px-6 py-5 border-l-4 border-l-texas-red">
          <p className="text-xs font-semibold uppercase tracking-widest text-texas-red/70 mb-2">Short answer</p>
          <div className="text-foreground/85 leading-relaxed text-[0.97rem]">{shortAnswer}</div>
        </div>
      </section>

      {/* Body */}
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 prose prose-lg text-foreground/80">
        {children}
      </article>

      {/* Sources */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-10 border-t-2 border-t-texas-silver/40 pt-8">
        <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground/55 mb-3">Sources</p>
        <ul className="space-y-1">
          {sources.map((s, i) => (
            <li key={i} className="text-sm text-muted-foreground">
              {s.url ? (
                <a href={s.url} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors underline underline-offset-2">
                  {s.label}
                </a>
              ) : (
                s.label
              )}
            </li>
          ))}
        </ul>
      </section>

    </Layout>
  );
}
