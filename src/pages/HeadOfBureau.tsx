import Layout from "@/components/layout/Layout";
import { User, Award, BookOpen } from "lucide-react";

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
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Photo */}
            <div className="lg:col-span-1">
              <div className="bg-muted aspect-[3/4] flex items-center justify-center">
                <User className="w-32 h-32 text-primary/20" />
              </div>
            </div>

            {/* Bio */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-display font-bold text-primary mb-2">
                Dr. Alexandra Sterling, PhD
              </h2>
              <p className="text-gold font-semibold uppercase tracking-wider text-sm mb-8">
                Director General
              </p>

              <div className="space-y-4 text-muted-foreground leading-relaxed mb-10">
                <p>
                  Dr. Alexandra Sterling has served as Director General of the National Forensics Bureau since 2018, bringing over 25 years of experience in forensic science and laboratory management.
                </p>
                <p>
                  Prior to her appointment, Dr. Sterling served as Deputy Director of Forensic Services and Director of the DNA Analysis Division. She has been instrumental in modernizing the Bureau's capabilities and expanding its international partnerships.
                </p>
                <p>
                  Dr. Sterling holds a PhD in Molecular Biology from Cambridge University and completed her forensic science training at the FBI Laboratory. She is a Fellow of the American Academy of Forensic Sciences and has published extensively on DNA analysis methodologies.
                </p>
              </div>

              {/* Credentials */}
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="flex items-start gap-4">
                  <Award className="w-8 h-8 text-gold flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-primary mb-1">Qualifications</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>PhD Molecular Biology, Cambridge</li>
                      <li>MSc Forensic Science, UCL</li>
                      <li>FBI Laboratory Fellow</li>
                    </ul>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <BookOpen className="w-8 h-8 text-gold flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-primary mb-1">Memberships</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>American Academy of Forensic Sciences</li>
                      <li>International Association for Identification</li>
                      <li>Society of Forensic Toxicologists</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default HeadOfBureau;
