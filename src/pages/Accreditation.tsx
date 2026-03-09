import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Award, CheckCircle, Globe, FileCheck } from "lucide-react";
const accreditations = [
  {
    title: "ISO/IEC 17025:2017",
    description:
      "General requirements for the competence of testing and calibration laboratories",
    issuer: "National Accreditation Board",
    validUntil: "December 2027",
  },
  {
    title: "ISO/IEC 17020:2012",
    description:
      "Requirements for the operation of various types of bodies performing inspection",
    issuer: "National Accreditation Board",
    validUntil: "December 2027",
  },
  {
    title: "Forensic Science Provider Certification",
    description:
      "Certification for organizations providing forensic science services",
    issuer: "Forensic Science Accreditation Board",
    validUntil: "June 2026",
  },
];

const certifications = [
  "Document Examination Laboratory",
  "Materials Analysis Laboratory",
  "Construction Assessment Services",
  "Vehicle Accident Reconstruction",
  "Fire Origin and Cause Investigation",
  "Environmental Analysis Services",
];

const Accreditation = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-primary mb-10">
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
            {/* <p className="text-xl text-primary-foreground/80 leading-relaxed">
              Our commitment to quality is demonstrated through rigorous
              international accreditation and certification.
            </p> */}
          </div>
        </div>
      </section>

      <div className="section-container">
        {/* Introduction */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-16"
        >
          <p className="text-muted-foreground mb-4">
            The Expertise Bureau maintains rigorous quality management systems
            and holds accreditation from recognized national and international
            bodies. Our accreditations demonstrate our commitment to meeting the
            highest standards of technical competence, impartiality, and
            consistent operation.
          </p>
          <p className="text-muted-foreground">
            All our laboratory and inspection services are performed in
            accordance with accredited methods and procedures, ensuring that our
            results are reliable, accurate, and legally defensible.
          </p>
        </motion.section>

        {/* Accreditations */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-40"
        >
          <h2 className="text-2xl font-bold text-foreground mb-8 flex items-center gap-3">
            <Award className="w-6 h-6 text-gold" />
            Accreditations
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {accreditations.map((accreditation, index) => (
              <motion.div
                key={accreditation.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="bg-card rounded-xl p-6 shadow-corporate border-l-4 border-gold"
              >
                <h3 className="font-semibold text-foreground mb-2 text-xl">
                  {accreditation.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {accreditation.description}
                </p>
                <div className="space-y-1 text-sm">
                  <p className="text-muted-foreground">
                    <span className="font-medium text-foreground">Issuer:</span>{" "}
                    {accreditation.issuer}
                  </p>
                  <p className="text-muted-foreground">
                    <span className="font-medium text-foreground">
                      Valid Until:
                    </span>{" "}
                    {accreditation.validUntil}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Scope of Accreditation */}
        {/* <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="text-2xl font-bold text-foreground mb-8 flex items-center gap-3">
            <FileCheck className="w-6 h-6 text-primary" />
            Scope of Accreditation
          </h2>
          <div className="bg-secondary rounded-2xl p-8 mb-5">
            <p className="text-muted-foreground mb-6">
              Our accreditation covers the following areas of expertise:
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {certifications.map((cert) => (
                <div
                  key={cert}
                  className="flex items-center gap-3 bg-card rounded-lg p-4"
                >
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-sm text-foreground">{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.section> */}
      </div>
    </Layout>
  );
};

export default Accreditation;
