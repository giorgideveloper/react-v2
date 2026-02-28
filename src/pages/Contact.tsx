import Layout from "@/components/layout/Layout";
import ContactSection from "@/components/home/ContactSection";

const Contact = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-primary">
        <div className="container-wide">
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="divider-gold" />
              <span className="text-gold text-sm font-semibold uppercase tracking-[0.2em]">
                Get in Touch
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary-foreground mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-primary-foreground/80 leading-relaxed">
              We're here to assist with your forensic science needs. Reach out to our team.
            </p>
          </div>
        </div>
      </section>

      <ContactSection />

      {/* Map Placeholder */}
      <section className="h-96 bg-muted">
        <div className="h-full flex items-center justify-center">
          <div className="text-center">
            <p className="text-muted-foreground">Interactive Map</p>
            <p className="text-sm text-muted-foreground/60">123 Justice Avenue, Capital City</p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
