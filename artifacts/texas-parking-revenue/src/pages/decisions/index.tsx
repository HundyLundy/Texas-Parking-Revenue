import { DecisionPageTemplate } from "@/templates/DecisionPageTemplate";
import { decisions } from "@/data/content";

export function DecisionPage({ params }: { params: { slug: string } }) {
  const data = decisions[params.slug as keyof typeof decisions];
  
  if (!data) return <div>Not found</div>; // Route matching should prevent this, or let NotFound handle it
  
  return <DecisionPageTemplate id={params.slug} data={data} />;
}
