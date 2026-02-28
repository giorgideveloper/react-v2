import { Shield, Award, Users, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const stats = [
  { icon: Shield, value: "40+", label: "Years of Excellence" },
  { icon: Award, value: "15K+", label: "Cases Analyzed" },
  { icon: Users, value: "200+", label: "Expert Scientists" },
  { icon: Clock, value: "98%", label: "Accuracy Rate" },
];

const AboutSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="divider-gold" />
              <span className="text-gold text-sm font-semibold uppercase tracking-[0.2em]">
                About the Bureau
              </span>
            </div>
            <h2 className="section-title mb-6">
              Advancing Justice Through Scientific Excellence
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              The National Forensics Bureau stands as the nation's premier forensic investigation authority, providing comprehensive scientific analysis and expert testimony to support law enforcement and judicial proceedings across the country.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Since 1985, our team of distinguished scientists and analysts has maintained the highest standards of accuracy, integrity, and professionalism, earning the trust of courts, law enforcement agencies, and legal professionals nationwide.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-primary font-semibold uppercase tracking-wider text-sm hover:text-gold transition-colors"
            >
              Learn More About Us
              <span className="text-lg">→</span>
            </Link>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="card-service text-center"
              >
                <stat.icon className="w-10 h-10 text-gold mx-auto mb-4" />
                <p className="text-4xl font-display font-bold text-primary mb-2">
                  {stat.value}
                </p>
                <p className="text-sm text-muted-foreground uppercase tracking-wider">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
