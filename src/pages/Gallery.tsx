import Layout from "@/components/layout/Layout";
import { useState } from "react";
import { Link } from "react-router-dom";

const photos = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=600&h=400&fit=crop",
    title: "DNA Analysis Laboratory",
    category: "Facilities",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1576086213369-97a306d36557?w=600&h=400&fit=crop",
    title: "Evidence Processing",
    category: "Operations",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&h=400&fit=crop",
    title: "Digital Forensics Center",
    category: "Facilities",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=600&h=400&fit=crop",
    title: "Microscopy Unit",
    category: "Equipment",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600&h=400&fit=crop",
    title: "Chemical Analysis",
    category: "Operations",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=600&h=400&fit=crop",
    title: "Training Session",
    category: "Events",
  },
];

const categories = ["All", "Facilities", "Operations", "Equipment", "Events"];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredPhotos =
    activeCategory === "All"
      ? photos
      : photos.filter((photo) => photo.category === activeCategory);

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-primary">
        <div className="container-wide">
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="divider-gold" />
              <span className="text-gold text-sm font-semibold uppercase tracking-[0.2em]">
                Media
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary-foreground mb-6">
              Photo Gallery
            </h1>
            {/* <p className="text-xl text-primary-foreground/80 leading-relaxed">
              Explore our facilities, operations, and team in action.
            </p> */}
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-8 bg-muted border-b border-border">
        <div className="container-wide">
          <div className="flex gap-4">
            <Link
              to="/gallery"
              className="px-4 py-2 text-sm font-semibold uppercase tracking-wider bg-primary text-primary-foreground"
            >
              Photos
            </Link>
            <Link
              to="/gallery/video"
              className="px-4 py-2 text-sm font-semibold uppercase tracking-wider text-muted-foreground hover:text-primary transition-colors"
            >
              Videos
            </Link>
          </div>
        </div>
      </section>

      {/* Filters */}
      {/* <section className="py-8 bg-background border-b border-border">
        <div className="container-wide">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 text-sm font-medium transition-colors ${
                  activeCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:text-primary"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section> */}

      {/* Gallery Grid */}
      <section className="mb-40 mt-20 bg-background">
        <div className="container-wide">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPhotos.map((photo) => (
              <div
                key={photo.id}
                className="group relative overflow-hidden aspect-[4/3] cursor-pointer"
              >
                <img
                  src={photo.src}
                  alt={photo.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-navy-dark/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6">
                    <p className="text-gold text-xs uppercase tracking-wider mb-1">
                      {photo.category}
                    </p>
                    <h3 className="text-white font-display font-semibold">
                      {photo.title}
                    </h3>
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

export default Gallery;
