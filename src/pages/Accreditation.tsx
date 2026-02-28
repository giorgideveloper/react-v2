import Layout from "@/components/layout/Layout";
import { Award, CheckCircle, Globe, FileCheck } from "lucide-react";

const certifications = [
  {
    title: "ISO/IEC 17025:2017",
    description: "General requirements for the competence of testing and calibration laboratories",
    validUntil: "December 2027",
  },
  {
    title: "ISO 9001:2015",
    description: "Quality management systems certification",
    validUntil: "August 2026",
  },
  {
    title: "ANAB Accreditation",
    description: "ANSI National Accreditation Board forensic testing accreditation",
    validUntil: "March 2027",
  },
  {
    title: "FBI Quality Assurance Standards",
    description: "Compliance with FBI DNA Quality Assurance Standards",
    validUntil: "Ongoing",
  },
];

const Accreditation = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-primary">
        <div className="container-wide">
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="divider-gold" />
              <span className="text-gold text-sm font-semibold uppercase tracking-[0.2em]">
                Quality Assurance
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary-foreground mb-6">
              Accreditation
            </h1>
            <p className="text-xl text-primary-foreground/80 leading-relaxed">
              Our commitment to quality is demonstrated through rigorous international accreditation and certification.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="max-w-4xl">
            <h2 className="section-title mb-6">Our Commitment to Quality</h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              The National Forensics Bureau maintains the highest standards of quality and competence through continuous accreditation by internationally recognized bodies. Our laboratories undergo regular assessments to ensure that all analyses meet or exceed global standards for forensic science.
            </p>
            <div className="grid sm:grid-cols-3 gap-6">
              <div className="text-center">
                <Globe className="w-12 h-12 text-gold mx-auto mb-4" />
                <h3 className="font-display font-semibold text-primary mb-2">International Standards</h3>
                <p className="text-sm text-muted-foreground">Compliance with global ISO requirements</p>
              </div>
              <div className="text-center">
                <CheckCircle className="w-12 h-12 text-gold mx-auto mb-4" />
                <h3 className="font-display font-semibold text-primary mb-2">Regular Audits</h3>
                <p className="text-sm text-muted-foreground">Continuous monitoring and assessment</p>
              </div>
              <div className="text-center">
                <FileCheck className="w-12 h-12 text-gold mx-auto mb-4" />
                <h3 className="font-display font-semibold text-primary mb-2">Documentation</h3>
                <p className="text-sm text-muted-foreground">Comprehensive quality management</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="section-padding bg-muted">
        <div className="container-wide">
          <h2 className="section-title text-center mb-12">Current Certifications</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {certifications.map((cert, index) => (
              <div key={index} className="card-elevated p-8">
                <Award className="w-10 h-10 text-gold mb-4" />
                <h3 className="text-xl font-display font-semibold text-primary mb-2">
                  {cert.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {cert.description}
                </p>
                <p className="text-sm">
                  <span className="text-muted-foreground">Valid until:</span>{" "}
                  <span className="font-semibold text-primary">{cert.validUntil}</span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Accreditation;
