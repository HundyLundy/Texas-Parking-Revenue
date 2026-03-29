import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { MetaTags } from "@/components/seo/MetaTags";

const WEBHOOK_URL =
  "https://services.leadconnectorhq.com/hooks/ZF2Qjd4J1GmT9w5XbinN/webhook-trigger/fyMY2vLUwscH0iJsDeER";

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

  function set(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("submitting");
    try {
      await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: form.firstName,
          lastName: form.lastName,
          email: form.email,
          phone: form.phone,
          propertyType: form.propertyType,
          message: form.message,
          source: "texas-parking-revenue",
          division: "parking",
        }),
      });
      setStatus("success");
      setForm(empty);
    } catch {
      setStatus("error");
    }
  }

  const inputClass =
    "w-full px-4 py-2.5 rounded-lg border border-white/15 bg-white/5 text-white text-sm placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent/50 transition";

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
            Get More Information
          </h1>
          <p className="text-muted-foreground text-base leading-relaxed mb-10 max-w-xl">
            Fill out the form and someone from the Perfect Parking team will follow up with information relevant to your property.
          </p>

          {status === "success" ? (
            <div className="bg-primary rounded-2xl px-8 py-12 text-center">
              <p className="text-white font-semibold text-lg mb-2">Request received.</p>
              <p className="text-white/60 text-sm leading-relaxed">
                We'll be in touch with information relevant to your property and market.
              </p>
            </div>
          ) : (
            <div className="bg-primary rounded-2xl p-8 shadow-lg">
              <form onSubmit={handleSubmit} className="space-y-6">

                {/* Row 1: First / Last */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-white/80 mb-1.5" htmlFor="firstName">
                      First Name
                    </label>
                    <input
                      id="firstName" name="firstName" type="text" required
                      value={form.firstName} onChange={set}
                      className={inputClass} placeholder="Jane"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-white/80 mb-1.5" htmlFor="lastName">
                      Last Name
                    </label>
                    <input
                      id="lastName" name="lastName" type="text" required
                      value={form.lastName} onChange={set}
                      className={inputClass} placeholder="Smith"
                    />
                  </div>
                </div>

                {/* Row 2: Email / Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-white/80 mb-1.5" htmlFor="email">
                      Email
                    </label>
                    <input
                      id="email" name="email" type="email" required
                      value={form.email} onChange={set}
                      className={inputClass} placeholder="jane@company.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-white/80 mb-1.5" htmlFor="phone">
                      Phone
                    </label>
                    <input
                      id="phone" name="phone" type="tel"
                      value={form.phone} onChange={set}
                      className={inputClass} placeholder="(512) 555-0100"
                    />
                  </div>
                </div>

                {/* Property Type */}
                <div>
                  <label className="block text-sm font-medium text-white/80 mb-1.5" htmlFor="propertyType">
                    Property Type
                  </label>
                  <select
                    id="propertyType" name="propertyType" required
                    value={form.propertyType} onChange={set}
                    className={inputClass}
                  >
                    <option value="" disabled>Select one…</option>
                    <option value="Hotel / Hospitality">Hotel / Hospitality</option>
                    <option value="Hospital / Healthcare">Hospital / Healthcare</option>
                    <option value="Commercial Real Estate">Commercial Real Estate</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-white/80 mb-1.5" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    id="message" name="message" rows={4}
                    value={form.message} onChange={set}
                    className={`${inputClass} resize-none`}
                    placeholder="Tell us a bit about your property and what you're trying to figure out."
                  />
                </div>

                {status === "error" && (
                  <p className="text-sm text-red-400">
                    Something went wrong. Please try again or email us directly.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="px-7 py-3 bg-accent text-accent-foreground text-sm font-semibold rounded-lg hover:bg-accent/90 transition disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === "submitting" ? "Sending…" : "Send Request"}
                </button>
              </form>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
}
