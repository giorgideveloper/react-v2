import { Link } from "react-router-dom";
import { Calendar, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const posts = [
  {
    id: 1,
    title: "Understanding Forensic Document Analysis",
    excerpt:
      "An in-depth look at the methods and technologies used in modern document examination and authentication processes.",
    date: "January 15, 2026",
    category: "Forensic Science",
    slug: "understanding-forensic-document-analysis",
  },
  {
    id: 2,
    title: "The Role of Expert Witnesses in Legal Proceedings",
    excerpt:
      "How technical experts contribute to court cases and the standards they must uphold to provide credible testimony.",
    date: "January 10, 2026",
    category: "Legal",
    slug: "expert-witnesses-legal-proceedings",
  },
  {
    id: 3,
    title: "Construction Defects: Identification and Assessment",
    excerpt:
      "A comprehensive guide to identifying common construction defects and the expertise required for proper assessment.",
    date: "January 5, 2026",
    category: "Construction",
    slug: "construction-defects-assessment",
  },
];
const BlogPreview = () => {
  return (
    <section className="section-padding ">
      <div className="container-wide">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="divider-gold" />
              <span className="text-gold text-sm font-semibold uppercase tracking-[0.2em]">
                Latest Updates
              </span>
            </div>
            <h2 className="section-title">News & Insights</h2>
          </div>
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-primary font-semibold uppercase tracking-wider text-sm hover:text-gold transition-colors"
          >
            View All Articles
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card rounded-xl overflow-hidden shadow-corporate card-hover group"
            >
              <div className="h-48 bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <span className="text-2xl font-bold text-primary">
                    {post.id}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Calendar className="w-3 h-3" />
                    {post.date}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-gold transition-colors">
                  <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                </h3>
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {post.excerpt}
                </p>
                <Link
                  to={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-1 mt-4 text-sm font-medium text-primary hover:text-gold hover:gap-2 transition-all"
                >
                  Read More <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;
