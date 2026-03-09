import Layout from "@/components/layout/Layout";
import { Shield, Target, Eye, Users } from "lucide-react";

const values = [
  {
    icon: Shield,
    title: "Integrity",
    description:
      "Maintaining the highest ethical standards in every analysis and report.",
  },
  {
    icon: Target,
    title: "Precision",
    description:
      "Delivering accurate, scientifically sound results that withstand scrutiny.",
  },
  {
    icon: Eye,
    title: "Objectivity",
    description:
      "Providing impartial analysis free from bias or external influence.",
  },
  {
    icon: Users,
    title: "Service",
    description:
      "Dedicated to supporting justice and serving the public interest.",
  },
];

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-primary">
        <div className="container-wide">
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="divider-gold" />
              <span className="text-gold text-sm font-semibold uppercase tracking-[0.2em]">
                About Us
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary-foreground mb-6">
              The Bureau
            </h1>
            {/* <p className="text-xl text-primary-foreground/80 leading-relaxed">
              Advancing justice through scientific excellence since 1985.
            </p> */}
          </div>
        </div>
      </section>

      {/* History */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="section-title mb-6">Our History</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  The National Forensics Bureau was established in 1985 in
                  response to the growing need for a centralized, independent
                  forensic science authority. Our founding mission was to
                  provide objective, scientifically rigorous analysis to support
                  the justice system.
                </p>
                <p>
                  Over four decades, we have grown from a small laboratory with
                  twelve scientists to a comprehensive forensic institution
                  employing over 200 experts across multiple specialized
                  disciplines. Our facilities now span three regional centers,
                  serving law enforcement agencies and courts nationwide.
                </p>
                <p>
                  Today, the Bureau is recognized internationally for our
                  contributions to forensic science, our commitment to quality,
                  and our unwavering dedication to the pursuit of truth and
                  justice.
                </p>
              </div>
            </div>
            <div className="bg-muted p-12 text-center">
              <p className="text-8xl font-display font-bold text-primary/10">
                1985
              </p>
              <p className="text-lg font-semibold text-primary mt-4">
                Year Established
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="section-padding bg-muted">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="section-title mb-8">Our Mission</h2>
            <p className="text-xl text-muted-foreground leading-relaxed mb-12">
              To provide the highest quality forensic science services with
              integrity, objectivity, and scientific excellence, supporting the
              fair administration of justice and protecting the rights of all
              citizens.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <div key={index} className="card-elevated p-6 text-center">
                  <value.icon className="w-10 h-10 text-gold mx-auto mb-4" />
                  <h3 className="font-display font-semibold text-primary mb-2">
                    {value.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Facilities */}
      {/* <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="section-title mb-4">Our Facilities</h2>
            <p className="section-subtitle mx-auto">
              State-of-the-art laboratories equipped with cutting-edge technology.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {["Central Laboratory", "Regional Center North", "Regional Center South"].map(
              (facility, index) => (
                <div key={index} className="card-service">
                  <h3 className="text-xl font-display font-semibold text-primary mb-4">
                    {facility}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Fully equipped forensic facility with specialized units for DNA, chemistry, ballistics, and digital evidence analysis.
                  </p>
                </div>
              )
            )}
          </div>
        </div>
      </section> */}
    </Layout>
  );
};

export default About;
