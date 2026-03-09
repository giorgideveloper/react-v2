import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import {
  Dna,
  FileText,
  Monitor,
  Target,
  FlaskConical,
  Fingerprint,
  Microscope,
  Scale,
  Check,
} from "lucide-react";

const services = [
  {
    icon: Dna,
    title: "DNA Analysis",
    description:
      "Advanced genetic profiling and analysis using state-of-the-art sequencing technology for precise identification.",
    features: [
      "STR and Y-STR profiling",
      "Mitochondrial DNA analysis",
      "Familial DNA searching",
      "Touch DNA recovery",
      "CODIS database searches",
    ],
  },
  {
    icon: FileText,
    title: "Document Examination",
    description:
      "Expert analysis of questioned documents, handwriting verification, and forgery detection.",
    features: [
      "Handwriting comparison",
      "Signature verification",
      "Alterations detection",
      "Ink and paper analysis",
      "Typewriter identification",
    ],
  },
  {
    icon: Monitor,
    title: "Digital Forensics",
    description:
      "Comprehensive recovery and analysis of digital evidence from computers, mobile devices, and networks.",
    features: [
      "Computer forensics",
      "Mobile device analysis",
      "Network investigation",
      "Data recovery",
      "Malware analysis",
    ],
  },
  {
    icon: Target,
    title: "Ballistics Analysis",
    description:
      "Scientific examination of firearms, ammunition, and projectile evidence for criminal investigations.",
    features: [
      "Firearm identification",
      "Bullet comparison",
      "Gunshot residue testing",
      "Trajectory analysis",
      "NIBIN database searches",
    ],
  },
  {
    icon: FlaskConical,
    title: "Toxicology",
    description:
      "Detection and quantification of drugs, poisons, and other substances in biological specimens.",
    features: [
      "Drug screening",
      "Blood alcohol analysis",
      "Poison detection",
      "Post-mortem toxicology",
      "Therapeutic drug monitoring",
    ],
  },
  {
    icon: Fingerprint,
    title: "Fingerprint Analysis",
    description:
      "Latent print development, comparison, and identification using AFIS and expert examination.",
    features: [
      "Latent print development",
      "AFIS searches",
      "Palm print analysis",
      "Footprint comparison",
      "Crime scene processing",
    ],
  },
  {
    icon: Microscope,
    title: "Trace Evidence",
    description:
      "Microscopic analysis of fibers, hair, glass, paint, and other trace materials.",
    features: [
      "Fiber analysis",
      "Hair examination",
      "Glass comparison",
      "Paint analysis",
      "Soil examination",
    ],
  },
  {
    icon: Scale,
    title: "Expert Testimony",
    description:
      "Professional court testimony and expert witness services to support legal proceedings.",
    features: [
      "Court testimony",
      "Deposition support",
      "Case consultation",
      "Report preparation",
      "Legal briefings",
    ],
  },
];

const Services = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-primary">
        <div className="container-wide">
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="divider-gold" />
              <span className="text-gold text-sm font-semibold uppercase tracking-[0.2em]">
                Our Expertise
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary-foreground mb-6">
              Forensic Services
            </h1>
            {/* <p className="text-xl text-primary-foreground/80 leading-relaxed">
              Comprehensive forensic analysis and expert services delivered with
              precision, integrity, and scientific excellence.
            </p> */}
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div
                key={index}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="w-16 h-16 bg-primary/5 rounded-sm flex items-center justify-center mb-6">
                    <service.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h2 className="text-3xl font-display font-bold text-primary mb-4">
                    {service.title}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-3">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <Check className="w-5 h-5 text-gold flex-shrink-0" />
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div
                  className={`bg-muted p-12 ${index % 2 === 1 ? "lg:order-1" : ""}`}
                >
                  <service.icon className="w-32 h-32 text-primary/10 mx-auto" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      {/* <section className="py-20 bg-primary">
        <div className="container-wide text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-foreground mb-6">
            Ready to Submit a Case?
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Contact our team to discuss your forensic analysis needs and learn how we can support your investigation.
          </p>
          <Link
            to="/contact"
            className="btn-primary-hero"
          >
            Contact Us Today
          </Link>
        </div>
      </section> */}
    </Layout>
  );
};

export default Services;
