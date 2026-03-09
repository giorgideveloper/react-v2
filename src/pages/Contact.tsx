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
            {/* <p className="text-xl text-primary-foreground/80 leading-relaxed">
              We're here to assist with your forensic science needs. Reach out
              to our team.
            </p> */}
          </div>
        </div>
      </section>

      <ContactSection />

      {/* Map Placeholder */}
      <section className="h-96 bg-muted">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10203.785628287083!2d41.626806994368394!3d41.645177501106915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406786304ea2d221%3A0x7a3053a9e12ea967!2sBatumi!5e0!3m2!1sen!2sge!4v1773061755528!5m2!1sen!2sge"
          className="w-full h-full"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </Layout>
  );
};

export default Contact;
