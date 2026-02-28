import Layout from "@/components/layout/Layout";
import { Briefcase, MapPin, Clock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const vacancies = [
  {
    id: 1,
    title: "Senior Forensic DNA Analyst",
    department: "DNA Analysis Division",
    location: "Central Laboratory",
    type: "Full-time",
    posted: "January 25, 2026",
  },
  {
    id: 2,
    title: "Digital Forensics Specialist",
    department: "Digital Forensics Unit",
    location: "Central Laboratory",
    type: "Full-time",
    posted: "January 20, 2026",
  },
  {
    id: 3,
    title: "Forensic Document Examiner",
    department: "Questioned Documents Unit",
    location: "Regional Center North",
    type: "Full-time",
    posted: "January 18, 2026",
  },
  {
    id: 4,
    title: "Laboratory Technician",
    department: "Chemistry Division",
    location: "Regional Center South",
    type: "Full-time",
    posted: "January 15, 2026",
  },
  {
    id: 5,
    title: "Quality Assurance Manager",
    department: "Quality Management",
    location: "Central Laboratory",
    type: "Full-time",
    posted: "January 10, 2026",
  },
];

const Vacancies = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-primary">
        <div className="container-wide">
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="divider-gold" />
              <span className="text-gold text-sm font-semibold uppercase tracking-[0.2em]">
                Careers
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary-foreground mb-6">
              Vacancies
            </h1>
            <p className="text-xl text-primary-foreground/80 leading-relaxed">
              Join our team of dedicated forensic professionals and contribute to the pursuit of justice.
            </p>
          </div>
        </div>
      </section>

      {/* Why Work Here */}
      <section className="py-16 bg-muted">
        <div className="container-wide">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="font-display font-semibold text-primary mb-2">Meaningful Work</h3>
              <p className="text-sm text-muted-foreground">
                Make a real difference in the justice system
              </p>
            </div>
            <div className="text-center">
              <h3 className="font-display font-semibold text-primary mb-2">Professional Growth</h3>
              <p className="text-sm text-muted-foreground">
                Continuous training and development opportunities
              </p>
            </div>
            <div className="text-center">
              <h3 className="font-display font-semibold text-primary mb-2">Competitive Benefits</h3>
              <p className="text-sm text-muted-foreground">
                Excellent compensation and government benefits
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <h2 className="section-title mb-8">Current Openings</h2>
          <div className="space-y-4">
            {vacancies.map((job) => (
              <div
                key={job.id}
                className="card-elevated p-6 hover:border-primary/20 transition-all group"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-display font-semibold text-primary mb-2 group-hover:text-gold transition-colors">
                      {job.title}
                    </h3>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Briefcase className="w-4 h-4" />
                        {job.department}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {job.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {job.type}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-sm text-muted-foreground">Posted: {job.posted}</span>
                    <Link
                      to={`/vacancies/${job.id}`}
                      className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground text-sm font-semibold uppercase tracking-wider hover:bg-navy-light transition-colors"
                    >
                      Apply
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Vacancies;
