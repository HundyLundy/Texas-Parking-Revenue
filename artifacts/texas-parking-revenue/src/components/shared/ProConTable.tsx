import { Check, X } from "lucide-react";

interface ProConTableProps {
  title: string;
  prosTitle?: string;
  consTitle?: string;
  pros: string[];
  cons: string[];
}

export function ProConTable({ 
  title, 
  prosTitle = "Advantages", 
  consTitle = "Disadvantages", 
  pros, 
  cons 
}: ProConTableProps) {
  return (
    <div className="my-8 rounded-2xl overflow-hidden border border-border shadow-sm">
      <div className="bg-secondary px-6 py-4 border-b border-border">
        <h4 className="font-display font-bold text-foreground m-0">{title}</h4>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-border bg-card">
        <div className="p-6">
          <h5 className="flex items-center gap-2 font-semibold text-green-700 mb-4">
            <Check className="w-5 h-5" /> {prosTitle}
          </h5>
          <ul className="space-y-3">
            {pros.map((pro, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-foreground/80">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-1.5 flex-shrink-0" />
                {pro}
              </li>
            ))}
          </ul>
        </div>
        <div className="p-6">
          <h5 className="flex items-center gap-2 font-semibold text-red-700 mb-4">
            <X className="w-5 h-5" /> {consTitle}
          </h5>
          <ul className="space-y-3">
            {cons.map((con, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-foreground/80">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-1.5 flex-shrink-0" />
                {con}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
