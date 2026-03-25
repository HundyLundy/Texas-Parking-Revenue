import { Layout } from "@/components/layout/Layout";
import { MetaTags } from "@/components/seo/MetaTags";
import { CTABlock } from "@/components/blocks/CTABlock";
import { siteConfig } from "@/config/site";

export default function About() {
  return (
    <Layout>
      <MetaTags title="About" description="Our methodology and editorial principles at Texas Parking Revenue." path="/about" />
      
      <section className="pt-24 pb-16 bg-secondary">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
            About Texas Parking Revenue
          </h1>
          <p className="text-xl text-muted-foreground">
            The leading data-driven resource for maximizing parking asset value in the Lone Star State.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-lg text-foreground/80">
          <h2>Our Mission</h2>
          <p>
            For too long, commercial real estate owners, hoteliers, and hospital administrators have viewed parking strictly as a necessary evil or a minor cost center. Our mission is to re-educate the market: parking is a highly monetizable asset that directly influences property value and cap rates.
          </p>
          
          <h2>Methodology</h2>
          <p>
            Our guides and resources are built on aggregated data, interviews with top asset managers, and on-the-ground operational expertise in Texas's major metros. We look at everything through the lens of Net Operating Income (NOI) while strictly protecting the end-user (guest/patient/tenant) experience.
          </p>
          
          <h2>Our Partner: {siteConfig.perfectParkingName}</h2>
          <p>
            While we provide independent research and analysis, we proudly partner with <strong>{siteConfig.perfectParkingName}</strong> as our recommended operating partner. When readers require execution—moving from theory to actually driving revenue—{siteConfig.perfectParkingName} provides the boots on the ground and the tech stack to make it happen without the typical operator friction.
          </p>
        </div>
      </section>

      <CTABlock />
    </Layout>
  );
}
