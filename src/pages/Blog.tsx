import Layout from "@/components/layout/Layout";
import { Calendar, ArrowRight, Search } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const blogPosts = [
  {
    id: 1,
    title: "Advances in DNA Sequencing Technology",
    excerpt: "Exploring how next-generation sequencing is revolutionizing forensic DNA analysis and identification capabilities.",
    date: "January 28, 2026",
    category: "Technology",
    image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=600&h=400&fit=crop",
  },
  {
    id: 2,
    title: "Digital Forensics in the Age of AI",
    excerpt: "Understanding the challenges and opportunities artificial intelligence presents for digital evidence analysis.",
    date: "January 22, 2026",
    category: "Digital Forensics",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&h=400&fit=crop",
  },
  {
    id: 3,
    title: "Bureau Achieves ISO 17025 Recertification",
    excerpt: "Our continued commitment to quality and international standards in forensic laboratory operations.",
    date: "January 15, 2026",
    category: "Accreditation",
    image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?w=600&h=400&fit=crop",
  },
  {
    id: 4,
    title: "The Role of Forensic Evidence in Court",
    excerpt: "How expert testimony and scientific analysis support the judicial process and protect justice.",
    date: "January 10, 2026",
    category: "Legal",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&h=400&fit=crop",
  },
  {
    id: 5,
    title: "New Fingerprint Analysis Techniques",
    excerpt: "Innovations in latent print development and identification methodologies.",
    date: "January 5, 2026",
    category: "Research",
    image: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=600&h=400&fit=crop",
  },
  {
    id: 6,
    title: "Annual Report 2025 Released",
    excerpt: "Key statistics and achievements from the Bureau's operations over the past year.",
    date: "December 28, 2025",
    category: "News",
    image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=600&h=400&fit=crop",
  },
];

const categories = ["All", "Technology", "Digital Forensics", "Research", "Legal", "News", "Accreditation"];

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = activeCategory === "All" || post.category === activeCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-primary">
        <div className="container-wide">
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="divider-gold" />
              <span className="text-gold text-sm font-semibold uppercase tracking-[0.2em]">
                News & Insights
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary-foreground mb-6">
              Blog
            </h1>
            <p className="text-xl text-primary-foreground/80 leading-relaxed">
              Stay updated with the latest news, research, and developments in forensic science.
            </p>
          </div>
        </div>
      </section>

      {/* Search & Filter */}
      <section className="py-8 bg-muted border-b border-border">
        <div className="container-wide">
          <div className="flex flex-col md:flex-row gap-6 justify-between">
            {/* Search */}
            <div className="relative max-w-md w-full">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-background border border-border focus:outline-none focus:border-primary"
              />
            </div>

            {/* Categories */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 text-sm font-medium transition-colors ${
                    activeCategory === category
                      ? "bg-primary text-primary-foreground"
                      : "bg-background text-muted-foreground hover:text-primary"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          {filteredPosts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <article key={post.id} className="card-elevated overflow-hidden group">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-gold text-navy-dark text-xs font-semibold uppercase tracking-wider">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-muted-foreground text-sm mb-3">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                    <h3 className="text-lg font-display font-semibold text-primary mb-3 group-hover:text-gold transition-colors">
                      <Link to={`/blog/${post.id}`}>{post.title}</Link>
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {post.excerpt}
                    </p>
                    <Link
                      to={`/blog/${post.id}`}
                      className="inline-flex items-center gap-2 text-primary text-sm font-semibold uppercase tracking-wider hover:text-gold transition-colors"
                    >
                      Read More
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No articles found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
