import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import heroLab from "@/assets/hero-lab.jpg";
import heroDocuments from "@/assets/hero-documents.jpg";
import heroTechnology from "@/assets/hero-technology.jpg";

const slides = [
  {
    image: heroLab,
    title: "Precision",
    subtitle: "Scientific Excellence in Every Analysis",
    description: "Our state-of-the-art laboratories employ cutting-edge technology and rigorous methodologies to deliver accurate, reliable forensic results.",
  },
  {
    image: heroDocuments,
    title: "Integrity",
    subtitle: "Unwavering Commitment to Truth",
    description: "Every examination is conducted with the highest ethical standards, ensuring impartial and objective findings that stand up in court.",
  },
  {
    image: heroTechnology,
    title: "Evidence",
    subtitle: "Where Science Meets Justice",
    description: "Transforming physical evidence into conclusive scientific findings that support the pursuit of justice and protect the innocent.",
  },
];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 6000);
    return () => clearInterval(timer);
  }, [currentSlide]);

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setTimeout(() => setIsAnimating(false), 600);
  };

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setTimeout(() => setIsAnimating(false), 600);
  };

  return (
    <section className="relative h-screen min-h-[700px] overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-700 ${
            index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          />
          {/* Overlay */}
          <div className="absolute inset-0 gradient-overlay" />
          <div className="absolute inset-0 bg-navy-dark/30" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-20 h-full flex items-center">
        <div className="container-wide">
          <div className="max-w-3xl">
            {/* Tagline */}
            <div className="flex items-center gap-4 mb-8">
              <div className="divider-gold" />
              <span className="text-gold text-sm font-semibold uppercase tracking-[0.3em]">
                Precision • Integrity • Evidence
              </span>
            </div>

            {/* Title */}
            <h1
              key={currentSlide}
              className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-4 animate-fade-in-up"
            >
              {slides[currentSlide].title}
            </h1>
            <h2
              key={`sub-${currentSlide}`}
              className="text-2xl md:text-3xl font-display font-medium text-white/90 mb-6 animate-fade-in-up"
              style={{ animationDelay: "0.1s" }}
            >
              {slides[currentSlide].subtitle}
            </h2>
            <p
              key={`desc-${currentSlide}`}
              className="text-lg text-white/70 mb-10 max-w-xl leading-relaxed animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              {slides[currentSlide].description}
            </p>

            {/* CTAs */}
            <div
              className="flex flex-wrap gap-4 animate-fade-in-up"
              style={{ animationDelay: "0.3s" }}
            >
              <Link to="/services" className="btn-primary-hero">
                Our Services
              </Link>
              <Link to="/contact" className="btn-secondary-hero">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <div className="absolute bottom-1/2 translate-y-1/2 left-4 md:left-8 z-30">
        <button
          onClick={handlePrev}
          className="w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-gold hover:border-gold hover:text-navy-dark transition-all"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
      </div>
      <div className="absolute bottom-1/2 translate-y-1/2 right-4 md:right-8 z-30">
        <button
          onClick={handleNext}
          className="w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-gold hover:border-gold hover:text-navy-dark transition-all"
          aria-label="Next slide"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-30 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-1 transition-all duration-300 ${
              index === currentSlide
                ? "w-12 bg-gold"
                : "w-6 bg-white/30 hover:bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 hidden md:block">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSlider;
