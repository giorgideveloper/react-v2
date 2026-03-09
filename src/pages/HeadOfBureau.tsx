import Layout from "@/components/layout/Layout";
import { Award, BookOpen, Briefcase } from "lucide-react";
import { motion } from "framer-motion";

const HeadOfBureau = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-primary">
        <div className="container-wide">
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="divider-gold" />
              <span className="text-gold text-sm font-semibold uppercase tracking-[0.2em]">
                Leadership
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary-foreground mb-6">
              Head of Bureau
            </h1>
          </div>
        </div>
      </section>

      {/* Profile */}
      <section className="mt-10 mb-20 bg-background">
        <div className="section-container">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Profile Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-1"
            >
              <div className="bg-secondary rounded-2xl p-8 text-center">
                <div className="w-48 h-48 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <span className="text-6xl font-bold text-primary">JD</span>
                </div>
                <h2 className="text-2xl font-bold text-foreground">
                  Dr. John Doe
                </h2>
                <p className="text-muted-foreground mt-1">
                  Director & Chief Expert
                </p>

                <div className="mt-6 pt-6 border-t border-border space-y-3 text-left">
                  <div className="flex items-center gap-3">
                    <Award className="w-5 h-5 text-primary" />
                    <span className="text-sm text-muted-foreground">
                      Ph.D. Forensic Science
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Briefcase className="w-5 h-5 text-primary" />
                    <span className="text-sm text-muted-foreground">
                      30+ Years Experience
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <BookOpen className="w-5 h-5 text-primary" />
                    <span className="text-sm text-muted-foreground">
                      50+ Publications
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Biography */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-2"
            >
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Biography
              </h3>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Dr. John Doe has served as the Director and Chief Expert of
                  the Expertise Bureau since 2005. With over three decades of
                  experience in forensic science and technical expertise, he has
                  established himself as one of the leading authorities in the
                  field.
                </p>
                <p>
                  After completing his Ph.D. in Forensic Science from the State
                  University, Dr. Doe began his career at the National Forensic
                  Laboratory, where he developed innovative methodologies for
                  document examination and material analysis. His work has been
                  instrumental in resolving numerous high-profile cases.
                </p>
                <p>
                  Dr. Doe is a certified forensic examiner, a member of several
                  professional associations, and has published extensively in
                  peer-reviewed journals. He regularly serves as an expert
                  witness in court proceedings and provides consultation to
                  legal professionals on complex technical matters.
                </p>
                <p>
                  Under his leadership, the Expertise Bureau has achieved
                  international accreditation and expanded its services to meet
                  the evolving needs of clients. Dr. Doe remains committed to
                  maintaining the highest standards of professional excellence
                  and ethical conduct.
                </p>
              </div>

              <div className="mt-8 grid md:grid-cols-2 gap-6">
                <div className="bg-card rounded-xl p-6 shadow-corporate">
                  <h4 className="font-semibold text-foreground mb-3">
                    Education
                  </h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Ph.D. Forensic Science, State University</li>
                    <li>• M.Sc. Chemistry, National University</li>
                    <li>• B.Sc. Chemistry, City College</li>
                  </ul>
                </div>
                <div className="bg-card rounded-xl p-6 shadow-corporate">
                  <h4 className="font-semibold text-foreground mb-3">
                    Certifications
                  </h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Certified Forensic Examiner (CFE)</li>
                    <li>• Certified Document Examiner (CDE)</li>
                    <li>• ISO 17025 Lead Assessor</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default HeadOfBureau;
