import { ReactNode } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

interface PageLayoutProps {
  children: ReactNode;
  title: string;
  subtitle?: string;
}

export default function PageLayout({
  children,
  title,
  subtitle,
}: PageLayoutProps) {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Page Header */}
        <section className="bg-primary pt-32 pb-16">
          <div className="section-container">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground">
              {title}
            </h1>
            {subtitle && (
              <p className="mt-4 text-lg text-primary-foreground/80 max-w-2xl">
                {subtitle}
              </p>
            )}
          </div>
        </section>

        {/* Page Content */}
        <div className="py-16">{children}</div>
      </main>
      <Footer />
    </div>
  );
}
