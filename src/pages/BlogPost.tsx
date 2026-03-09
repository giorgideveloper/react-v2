import { motion } from "framer-motion";
import { useParams, Link } from "react-router-dom";
import PageLayout from "@/components/layout/PageLayout";
import { Calendar, User, ArrowLeft, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";

// This would normally come from an API or database
const posts: Record<
  string,
  {
    title: string;
    content: string[];
    date: string;
    author: string;
    category: string;
  }
> = {
  "understanding-forensic-document-analysis": {
    title: "Understanding Forensic Document Analysis",
    content: [
      "Forensic document analysis is a specialized field of forensic science that focuses on the examination of documents to determine their authenticity, detect alterations, and identify the authors of handwritten materials. This discipline plays a crucial role in legal proceedings, fraud investigations, and historical research.",
      "Modern document examination employs a wide range of techniques, from traditional microscopy to advanced spectroscopic analysis. Examiners may analyze the physical characteristics of paper, the chemical composition of inks, and the subtle features of handwriting or machine printing.",
      "One of the primary objectives of document examination is the comparison of questioned documents with known authentic samples. This process requires meticulous attention to detail and a thorough understanding of the natural variation that occurs in handwriting and printing.",
      "Digital technology has revolutionized the field, enabling more precise measurements and the ability to detect alterations that would be invisible to the naked eye. However, it has also created new challenges, as digital documents present their own unique authentication issues.",
      "The conclusions drawn by forensic document examiners are based on scientific methodology and years of training and experience. These experts must adhere to strict ethical standards and be prepared to defend their findings in court.",
    ],
    date: "January 15, 2026",
    author: "Dr. John Doe",
    category: "Forensic Science",
  },
};

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? posts[slug] : null;

  if (!post) {
    return (
      <PageLayout title="Post Not Found" subtitle="">
        <div className="section-container text-center">
          <p className="text-muted-foreground mb-8">
            The requested blog post could not be found.
          </p>
          <Button asChild>
            <Link to="/blog">
              <ArrowLeft className="mr-2 w-4 h-4" /> Back to Blog
            </Link>
          </Button>
        </div>
      </PageLayout>
    );
  }

  return (
    <PageLayout title={post.title} subtitle="">
      <div className="section-container">
        <div className="max-w-3xl mx-auto">
          {/* Back Link */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <ArrowLeft className="w-4 h-4" /> Back to Blog
            </Link>
          </motion.div>

          {/* Article Header */}
          <motion.header
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-8"
          ></motion.header>

          {/* Featured Image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="h-64 md:h-96 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl mb-8 flex items-center justify-center"
          >
            <div className="w-24 h-24 bg-primary/10 rounded-xl flex items-center justify-center">
              <span className="text-4xl font-bold text-primary">EB</span>
            </div>
          </motion.div>

          {/* Article Content */}
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="prose prose-lg max-w-none"
          >
            {post.content.map((paragraph, index) => (
              <p
                key={index}
                className="text-muted-foreground mb-4 leading-relaxed"
              >
                {paragraph}
              </p>
            ))}
          </motion.article>

          {/* Share */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-12 pt-8 border-t border-border flex items-center justify-between"
          >
            <span className="text-sm text-muted-foreground">
              Share this article:
            </span>
            <div className="flex gap-2">
              <Button variant="outline" size="icon">
                <Share2 className="w-4 h-4" />
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </PageLayout>
  );
}
