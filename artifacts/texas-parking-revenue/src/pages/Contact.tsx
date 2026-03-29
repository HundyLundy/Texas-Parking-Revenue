import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { MetaTags } from "@/components/seo/MetaTags";

const WEBHOOK_URL =
  "https://services.leadconnectorhq.com/hooks/ZF2Qjd4J1GmT9w5XbinN/webhook-trigger/Upp1pos3mL7UjdCVKsJp";

const PROPERTY_TYPES = [
  "Hotel",
  "Hospital",
  "Commercial Real Estate",
  "Other",
];

interface FormState {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  propertyType: string;
  message: string;
}

const empty: FormState = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  propertyType: "",
  message: "",
};

export default function Contact() {
  const [form, setForm] = useState<FormState>(empty);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg("");

    try {
      await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, source: "texas-parking-revenue" }),
      });
      setStatus("success");
      setForm(empty);
    } catch {
      setStatus("error");
      setErrorMsg("Something went wrong. Please try again or email us directly.");
    }
  }

  return (
    <Layout>
      <MetaTags
        title="Contact — Texas Parking Revenue"
        description="Get more information about parking revenue management for your Texas property."
        path="/contact"
      />

      <section className="pt-32 pb-20 bg-background">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-bold tracking-widest uppercase text-muted-foreground mb-4">
            Get in touch
          </p>
          <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Request More Information
          </h1>
          <p className="text-muted-foreground text-base leading-relaxed mb-10 max-w-xl">
            Fill out the form below and someone will follow up with information relevant to your property and market.
          </p>

          {status === "success" ? (
            <div className="bg-secondary border border-border rounded-2xl px-8 py-12 text-center">
              <p className="text-foreground font-semibold text-lg mb-2">Request received.</p>
              <p className="text-muted-foreground text-sm">
                We'll be in touch with information relevant to your property.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5" htmlFor="firstName">
                    First Name
                  </label>
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    required
                    value={form.firstName}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 transition"
                    placeholder="Jane"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5" htmlFor="lastName">
                    Last Name
                  </label>
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    required
                    value={form.lastName}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 transition"
                    placeholder="Smith"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5" htmlFor="email">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 transition"
                    placeholder="jane@company.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5" htmlFor="phone">
                    Phone
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={form.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 transition"
                    placeholder="(512) 555-0100"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5" htmlFor="propertyType">
                  Property Type
                </label>
                <select
                  id="propertyType"
                  name="propertyType"
                  required
                  value={form.propertyType}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 transition"
                >
                  <option value="" disabled>Select one…</option>
                  {PROPERTY_TYPES.map((t) => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 transition resize-none"
                  placeholder="Tell us a bit about your property and what you're trying to figure out."
                />
              </div>

              {status === "error" && (
                <p className="text-sm text-red-600">{errorMsg}</p>
              )}

              <button
                type="submit"
                disabled={status === "submitting"}
                className="px-7 py-3 bg-primary text-primary-foreground text-sm font-semibold rounded-lg hover:bg-primary/90 transition disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === "submitting" ? "Sending…" : "Send Request"}
              </button>
            </form>
          )}
        </div>
      </section>
    </Layout>
  );
}
