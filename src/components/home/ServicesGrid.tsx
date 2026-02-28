import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Dna,
  FileText,
  Monitor,
  Target,
  FlaskConical,
  Fingerprint,
  Microscope,
  Scale,
} from "lucide-react";

const services = [
  {
    icon: Dna,
    title: "Forensic Analysis",
    description:
      "Comprehensive forensic examination and analysis services for legal proceedings and investigations.",
  },
  {
    icon: FileText,
    title: "Construction Expertise",
    description:
      "Technical assessment of construction quality, damages, and compliance with building regulations.",
  },
  {
    icon: Monitor,
    title: "Document Examination",
    description:
      "Expert analysis of questioned documents, handwriting verification, and authenticity assessment.",
  },
  {
    icon: Target,
    title: "Legal Expertise",
    description:
      "Professional expert witness services and technical opinions for court proceedings.",
  },
  {
    icon: FlaskConical,
    title: "Trace Evidence",
    description:
      "Detailed examination and analysis of physical trace evidence and material samples.",
  },
  {
    icon: Fingerprint,
    title: "Valuation Services",
    description:
      "Professional valuation of assets, properties, and damages for insurance and legal purposes.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const ServicesGrid = () => {
  return (
    <section className="section-padding bg-muted">
      <div className="container-wide section-container ">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="divider-gold" />
            <span className="text-gold text-sm font-semibold uppercase tracking-[0.2em]">
              Our Expertise
            </span>
            <div className="divider-gold" />
          </div>
          <h2 className="section-title mb-4">Forensic Services</h2>
          <p className="section-subtitle mx-auto">
            Comprehensive forensic analysis and expert services delivered with
            precision and integrity.
          </p>
        </div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              className="bg-card rounded-xl p-8 shadow-corporate card-hover group"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <service.icon className="w-7 h-7 text-primary group-hover:text-gold  transition-colors" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold uppercase tracking-wider text-sm hover:bg-navy-light transition-colors"
          >
            View All Services
            <span className="text-lg">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
