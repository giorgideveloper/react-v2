import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import Layout from "@/components/layout/Layout";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <Layout>
      <section className="min-h-[calc(100vh-80px)] flex items-center justify-center bg-background">
        <div className="text-center px-4">
          <h1 className="text-8xl md:text-9xl font-display font-bold text-primary/10 mb-4">
            404
          </h1>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-4">
            Page Not Found
          </h2>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">
            The page you are looking for doesn't exist or has been moved.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold uppercase tracking-wider text-sm hover:bg-navy-light transition-colors"
            >
              <Home className="w-4 h-4" />
              Go Home
            </Link>
            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-primary text-primary font-semibold uppercase tracking-wider text-sm hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Go Back
            </button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default NotFound;
