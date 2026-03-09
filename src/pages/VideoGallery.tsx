import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Play } from "lucide-react";
import { motion } from "framer-motion";
const videos = [
  {
    id: 1,
    title: "Introduction to the Expertise Bureau",
    description:
      "Learn about our organization, mission, and the services we provide.",
    duration: "5:30",
    thumbnail: null,
  },
  {
    id: 2,
    title: "Our Laboratory Facilities",
    description:
      "A tour of our state-of-the-art laboratory and examination facilities.",
    duration: "8:15",
    thumbnail: null,
  },
  {
    id: 3,
    title: "Document Examination Process",
    description:
      "An overview of our document examination methodology and techniques.",
    duration: "12:45",
    thumbnail: null,
  },
  {
    id: 4,
    title: "Expert Witness Services",
    description: "Understanding how our experts support legal proceedings.",
    duration: "7:20",
    thumbnail: null,
  },
  {
    id: 5,
    title: "Quality Assurance in Forensic Analysis",
    description: "Our commitment to quality and accuracy in every examination.",
    duration: "9:55",
    thumbnail: null,
  },
  {
    id: 6,
    title: "Client Testimonials",
    description:
      "Hear from our clients about their experience working with us.",
    duration: "6:40",
    thumbnail: null,
  },
];

const VideoGallery = () => {
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
              Video Gallery
            </h1>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-8 bg-muted border-b border-border">
        <div className="container-wide">
          <div className="flex gap-4">
            <Link
              to="/gallery"
              className="px-4 py-2 text-sm font-semibold uppercase tracking-wider text-muted-foreground hover:text-primary transition-colors"
            >
              Photos
            </Link>
            <Link
              to="/gallery/video"
              className="px-4 py-2 text-sm font-semibold uppercase tracking-wider bg-primary text-primary-foreground"
            >
              Videos
            </Link>
          </div>
        </div>
      </section>

      {/* Video Grid */}
      <section className="mb-40 mt-20 mb-md-10 mt-md-10 bg-background">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videos.map((video, index) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card rounded-xl overflow-hidden shadow-corporate card-hover group cursor-pointer"
              >
                {/* Video Thumbnail */}
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Play className="w-6 h-6 text-primary-foreground ml-1" />
                    </div>
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                    {video.duration}
                  </div>
                </div>

                {/* Video Info */}
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-gold transition-colors">
                    {video.title}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {video.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default VideoGallery;
