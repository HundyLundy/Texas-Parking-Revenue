import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Loader2, CheckCircle2 } from "lucide-react";
import { useSubmitLead } from "@workspace/api-client-react";
import { siteConfig } from "@/config/site";

const leadFormSchema = z.object({
  name: z.string().min(2, "Name is required"),
  company: z.string().optional(),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  portfolio_name: z.string().optional(),
  city: z.string().min(1, "Please select a primary city"),
  property_type: z.string().min(1, "Please select a property type"),
  message: z.string().optional(),
});

type LeadFormValues = z.infer<typeof leadFormSchema>;

export function LeadForm() {
  const [isSuccess, setIsSuccess] = useState(false);
  const { mutate, isPending } = useSubmitLead();

  const form = useForm<LeadFormValues>({
    resolver: zodResolver(leadFormSchema),
    defaultValues: {
      name: "", company: "", email: "", phone: "", portfolio_name: "", city: "", property_type: "", message: ""
    }
  });

  const onSubmit = (data: LeadFormValues) => {
    mutate({ data }, {
      onSuccess: () => setIsSuccess(true),
      onError: (err) => console.error("Lead submission failed", err)
    });
  };

  if (isSuccess) {
    return (
      <div className="bg-card border border-border rounded-2xl p-12 text-center shadow-lg">
        <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="w-10 h-10" />
        </div>
        <h3 className="text-2xl font-display font-bold text-foreground mb-3">Request Received</h3>
        <p className="text-muted-foreground max-w-md mx-auto">
          Thank you for reaching out. An analyst from our partner team at Perfect Parking will review your details and contact you shortly with insights tailored to your portfolio.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="bg-card border border-border rounded-2xl p-8 shadow-xl shadow-black/5 space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground">Full Name *</label>
          <input 
            {...form.register("name")} 
            className="w-full px-4 py-3 rounded-xl bg-background border border-input focus:ring-2 focus:ring-ring focus:border-ring outline-none transition-all" 
            placeholder="Jane Doe"
          />
          {form.formState.errors.name && <p className="text-destructive text-xs">{form.formState.errors.name.message}</p>}
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground">Company Name</label>
          <input 
            {...form.register("company")} 
            className="w-full px-4 py-3 rounded-xl bg-background border border-input focus:ring-2 focus:ring-ring focus:border-ring outline-none transition-all" 
            placeholder="Acme Properties"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground">Email Address *</label>
          <input 
            type="email"
            {...form.register("email")} 
            className="w-full px-4 py-3 rounded-xl bg-background border border-input focus:ring-2 focus:ring-ring focus:border-ring outline-none transition-all" 
            placeholder="jane@example.com"
          />
          {form.formState.errors.email && <p className="text-destructive text-xs">{form.formState.errors.email.message}</p>}
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground">Phone Number</label>
          <input 
            {...form.register("phone")} 
            className="w-full px-4 py-3 rounded-xl bg-background border border-input focus:ring-2 focus:ring-ring focus:border-ring outline-none transition-all" 
            placeholder="(555) 123-4567"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground">Primary City *</label>
          <select 
            {...form.register("city")} 
            className="w-full px-4 py-3 rounded-xl bg-background border border-input focus:ring-2 focus:ring-ring focus:border-ring outline-none transition-all appearance-none"
          >
            <option value="">Select a city...</option>
            <option value="Houston">Houston</option>
            <option value="Dallas">Dallas</option>
            <option value="Austin">Austin</option>
            <option value="San Antonio">San Antonio</option>
            <option value="Other">Other Texas City</option>
          </select>
          {form.formState.errors.city && <p className="text-destructive text-xs">{form.formState.errors.city.message}</p>}
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground">Property Type *</label>
          <select 
            {...form.register("property_type")} 
            className="w-full px-4 py-3 rounded-xl bg-background border border-input focus:ring-2 focus:ring-ring focus:border-ring outline-none transition-all appearance-none"
          >
            <option value="">Select property type...</option>
            <option value="Hotel">Hotel / Hospitality</option>
            <option value="Hospital">Hospital / Healthcare</option>
            <option value="Commercial RE">Commercial Real Estate</option>
            <option value="Mixed Use">Mixed Use</option>
            <option value="Other">Other</option>
          </select>
          {form.formState.errors.property_type && <p className="text-destructive text-xs">{form.formState.errors.property_type.message}</p>}
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium text-foreground">Additional Details (Optional)</label>
        <textarea 
          {...form.register("message")} 
          rows={4}
          className="w-full px-4 py-3 rounded-xl bg-background border border-input focus:ring-2 focus:ring-ring focus:border-ring outline-none transition-all resize-none" 
          placeholder="Tell us about your current parking setup..."
        />
      </div>

      <button
        type="submit"
        disabled={isPending}
        className="w-full py-4 rounded-xl bg-primary text-primary-foreground font-bold text-lg hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 hover:-translate-y-0.5 active:translate-y-0"
      >
        {isPending && <Loader2 className="w-5 h-5 animate-spin" />}
        {isPending ? "Submitting..." : "Get Free Revenue Analysis"}
      </button>
      
      <p className="text-xs text-center text-muted-foreground">
        Your information is secure. We only share this data with our trusted operating partner, {siteConfig.perfectParkingName}.
      </p>
    </form>
  );
}
