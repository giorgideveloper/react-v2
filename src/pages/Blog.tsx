import Layout from "@/components/layout/Layout";
import { Calendar, ArrowRight, User } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";

const posts = [
  {
    id: 1,
    title: "Understanding Forensic Document Analysis",
    excerpt:
      "An in-depth look at the methods and technologies used in modern document examination and authentication processes. Learn how experts identify forgeries and verify authenticity.",
    date: "January 15, 2026",
    author: "Dr. John Doe",
    category: "Forensic Science",
    slug: "understanding-forensic-document-analysis",
  },
  {
    id: 2,
    title: "The Role of Expert Witnesses in Legal Proceedings",
    excerpt:
      "How technical experts contribute to court cases and the standards they must uphold to provide credible testimony. Understanding the legal framework and professional responsibilities.",
    date: "January 10, 2026",
    author: "Jane Smith",
    category: "Legal",
    slug: "expert-witnesses-legal-proceedings",
  },
  {
    id: 3,
    title: "Construction Defects: Identification and Assessment",
    excerpt:
      "A comprehensive guide to identifying common construction defects and the expertise required for proper assessment. From structural issues to material failures.",
    date: "January 5, 2026",
    author: "Michael Brown",
    category: "Construction",
    slug: "construction-defects-assessment",
  },
  {
    id: 4,
    title: "Advances in Digital Forensics",
    excerpt:
      "Exploring the latest developments in digital forensics and how they are being applied in modern investigations and legal cases.",
    date: "December 28, 2025",
    author: "Dr. John Doe",
    category: "Technology",
    slug: "advances-digital-forensics",
  },
  {
    id: 5,
    title: "Fire Investigation: Origin and Cause Determination",
    excerpt:
      "The science behind fire investigation and how experts determine the origin and cause of fires for insurance and legal purposes.",
    date: "December 20, 2025",
    author: "Robert Wilson",
    category: "Fire Investigation",
    slug: "fire-investigation-origin-cause",
  },
  {
    id: 6,
    title: "Quality Management in Forensic Laboratories",
    excerpt:
      "Understanding the importance of quality management systems and accreditation in maintaining the integrity of forensic analysis.",
    date: "December 15, 2025",
    author: "Jane Smith",
    category: "Quality",
    slug: "quality-management-forensic-labs",
  },
];

const categories = [
  "All",
  "Technology",
  "Digital Forensics",
  "Research",
  "Legal",
  "News",
  "Accreditation",
];

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = posts.filter((post) => {
    const matchesCategory =
      activeCategory === "All" || post.category === activeCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-primary mb-8">
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
            {/* <p className="text-xl text-primary-foreground/80 leading-relaxed">
              Stay updated with the latest news, research, and developments in
              forensic science.
            </p> */}
          </div>
        </div>
      </section>

      <div className="section-container mb-7">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Main Posts */}

          {posts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card rounded-xl overflow-hidden shadow-corporate card-hover group"
            >
              {/* Post Thumbnail */}
              <Link
                to={`/blog/${post.slug}`}
                className="hover:text-gold transition-colors"
              >
                <div className="h-48 bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center">
                    <span className="text-2xl font-bold text-primary">
                      {post.id}
                    </span>
                  </div>
                </div>
              </Link>

              {/* Post Content */}
              <div className="p-6">
                <div className="flex flex-wrap items-center gap-4 mb-4">
                  {/* <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                    {post.category}
                  </span> */}
                </div>

                <h2 className="text-xl font-semibold text-foreground mb-3 group-hover:text-gold transition-colors">
                  <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                </h2>

                <p className="text-muted-foreground mb-4">{post.excerpt}</p>

                <Link
                  to={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:gap-2 transition-all hover:text-gold "
                >
                  Read More <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Blog;
