import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Briefcase, MapPin, Clock, Send, Paperclip } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const positions = [
  {
    title: "Forensic Document Examiner",
    location: "Main Office",
    type: "Full-time",
    description:
      "We are seeking an experienced forensic document examiner to join our team. The ideal candidate will have expertise in handwriting analysis, document authentication, and ink analysis.",
  },
];

const Vacancies = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast.success(
      "Application submitted successfully! We will review your application and contact you.",
    );
    setFormData({ name: "", email: "", phone: "", message: "" });
    setIsSubmitting(false);
  };
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-primary mb-10">
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
          </div>
        </div>
      </section>

      <div className="section-container mb-10">
        {/* Open Positions */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-foreground mb-8">
              Open Positions
            </h2>
            {positions.map((position, index) => (
              <motion.div
                key={position.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="bg-card rounded-xl p-6 shadow-corporate mb-8"
              >
                <div className={`mb-4 `}>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Briefcase className="w-6 h-6 text-gold" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        {position.title}
                      </h3>
                      <div className="flex flex-wrap gap-4 mb-3">
                        <span className="flex items-center gap-1 text-sm text-muted-foreground">
                          <MapPin className="w-4 h-4" />
                          {position.location}
                        </span>
                        <span className="flex items-center gap-1 text-sm text-muted-foreground">
                          <Clock className="w-4 h-4" />
                          {position.type}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {position.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Application Form */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="max-w-2xl mx-auto">
            <div className="bg-card rounded-2xl p-8 shadow-corporate-lg">
              <h2 className="text-2xl font-bold text-foreground mb-2">
                Apply Now
              </h2>
              <p className="text-muted-foreground mb-8">
                Submit your application and we will get back to you within 5
                business days.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="John Smith"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      required
                      className="h-12"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      required
                      className="h-12"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Phone Number *
                  </label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+1 (234) 567-890"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    required
                    className="h-12"
                  />
                </div>

                <div>
                  <label
                    htmlFor="cv"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Attach CV/Resume
                  </label>
                  <div className="border-2 border-dashed border-border rounded-lg p-6 text-center hover:border-primary/50 transition-colors cursor-pointer">
                    <Paperclip className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                    <p className="text-sm text-muted-foreground">
                      Click to upload or drag and drop
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      PDF, DOC, DOCX (Max 5MB)
                    </p>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Cover Letter / Additional Information
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about yourself and why you'd be a great fit..."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    rows={5}
                    className="resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    "Submitting..."
                  ) : (
                    <>
                      Submit Application{" "}
                      <Send className="ml-2 w-4 h-4 text-gold" />
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </motion.section>
      </div>
    </Layout>
  );
};

export default Vacancies;
