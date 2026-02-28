import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="container-wide section-padding pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gold rounded-sm flex items-center justify-center">
                <span className="text-navy-dark font-display font-bold text-xl">NFB</span>
              </div>
              <div>
                <p className="text-sm font-semibold tracking-wide">National Forensics</p>
                <p className="text-xs tracking-wider uppercase text-primary-foreground/70">Bureau</p>
              </div>
            </div>
            <p className="text-primary-foreground/70 text-sm leading-relaxed mb-6">
              Delivering precise forensic analysis and expert testimony with unwavering commitment to truth and justice since 1985.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-primary-foreground/10 rounded-sm flex items-center justify-center hover:bg-gold hover:text-navy-dark transition-all">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 bg-primary-foreground/10 rounded-sm flex items-center justify-center hover:bg-gold hover:text-navy-dark transition-all">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 bg-primary-foreground/10 rounded-sm flex items-center justify-center hover:bg-gold hover:text-navy-dark transition-all">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 bg-primary-foreground/10 rounded-sm flex items-center justify-center hover:bg-gold hover:text-navy-dark transition-all">
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {["About Us", "Our Services", "Accreditation", "Vacancies", "Blog", "Contact"].map((link) => (
                <li key={link}>
                  <Link
                    to={`/${link.toLowerCase().replace(" ", "-")}`}
                    className="text-primary-foreground/70 hover:text-gold transition-colors text-sm"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3">
              {[
                "DNA Analysis",
                "Document Examination",
                "Digital Forensics",
                "Ballistics Analysis",
                "Toxicology",
                "Fingerprint Analysis",
              ].map((service) => (
                <li key={service}>
                  <Link
                    to="/services"
                    className="text-primary-foreground/70 hover:text-gold transition-colors text-sm"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" />
                <span className="text-primary-foreground/70 text-sm">
                  123 Justice Avenue<br />
                  Government District<br />
                  Capital City, 10001
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-gold flex-shrink-0" />
                <a href="tel:+1234567890" className="text-primary-foreground/70 hover:text-gold transition-colors text-sm">
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-gold flex-shrink-0" />
                <a href="mailto:info@nfb.gov" className="text-primary-foreground/70 hover:text-gold transition-colors text-sm">
                  info@nfb.gov
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container-wide py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-primary-foreground/50 text-sm">
            © {new Date().getFullYear()} National Forensics Bureau. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to="/privacy" className="text-primary-foreground/50 hover:text-gold text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-primary-foreground/50 hover:text-gold text-sm transition-colors">
              Terms of Service
            </Link>
            <Link to="/accessibility" className="text-primary-foreground/50 hover:text-gold text-sm transition-colors">
              Accessibility
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
