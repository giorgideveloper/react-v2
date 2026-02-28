import Layout from "@/components/layout/Layout";
import HeroSlider from "@/components/home/HeroSlider";
import AboutSection from "@/components/home/AboutSection";
import ServicesGrid from "@/components/home/ServicesGrid";
import ContactSection from "@/components/home/ContactSection";
import BlogPreview from "@/components/home/BlogPreview";

const Index = () => {
  return (
    <Layout>
      <HeroSlider />
      <AboutSection />
      <ServicesGrid />
      <BlogPreview />
      <ContactSection />
    </Layout>
  );
};

export default Index;
