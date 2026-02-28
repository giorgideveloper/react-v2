import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  {
    name: "About",
    href: "/about",
    children: [
      { name: "The Bureau", href: "/about" },
      { name: "Head of Bureau", href: "/about/head" },
    ],
  },
  { name: "Accreditation", href: "/accreditation" },
  {
    name: "Gallery",
    href: "/gallery",
    children: [
      { name: "Photo Gallery", href: "/gallery" },
      { name: "Video Gallery", href: "/gallery/video" },
    ],
  },
  { name: "Vacancies", href: "/vacancies" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setOpenDropdown(null);
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-card/95 backdrop-blur-md shadow-lg border-b border-border/50"
          : "bg-transparent"
      }`}
    >
      <div className="container-wide">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="w-12 h-12 bg-primary rounded-sm flex items-center justify-center">
              <span className="text-primary-foreground font-display font-bold text-xl">
                NFB
              </span>
            </div>
            <div className="hidden sm:block">
              <p className={`text-sm font-semibold tracking-wide ${isScrolled ? 'text-primary' : 'text-white'}`}>
                National Forensics
              </p>
              <p className={`text-xs tracking-wider uppercase ${isScrolled ? 'text-muted-foreground' : 'text-white/70'}`}>
                Bureau
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navigation.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.children && setOpenDropdown(item.name)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  to={item.href}
                  className={`flex items-center gap-1 text-sm font-medium uppercase tracking-wider transition-colors duration-200 ${
                    isScrolled
                      ? "text-foreground/80 hover:text-primary"
                      : "text-white/90 hover:text-white"
                  } ${location.pathname === item.href ? (isScrolled ? "text-primary" : "text-white") : ""}`}
                >
                  {item.name}
                  {item.children && <ChevronDown className="w-3 h-3" />}
                </Link>

                {/* Dropdown */}
                {item.children && openDropdown === item.name && (
                  <div className="absolute top-full left-0 pt-2 animate-fade-in">
                    <div className="bg-card border border-border rounded-sm shadow-xl py-2 min-w-[180px]">
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          to={child.href}
                          className="block px-4 py-2 text-sm text-foreground/80 hover:text-primary hover:bg-muted transition-colors"
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 ${isScrolled ? 'text-foreground' : 'text-white'}`}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="lg:hidden py-4 bg-card border-t border-border animate-slide-up">
            {navigation.map((item) => (
              <div key={item.name}>
                <Link
                  to={item.href}
                  className={`block py-3 px-4 text-sm font-medium uppercase tracking-wider transition-colors ${
                    location.pathname === item.href
                      ? "text-primary bg-muted"
                      : "text-foreground/80 hover:text-primary hover:bg-muted"
                  }`}
                >
                  {item.name}
                </Link>
                {item.children?.map((child) => (
                  <Link
                    key={child.name}
                    to={child.href}
                    className="block py-2 px-8 text-sm text-muted-foreground hover:text-primary"
                  >
                    {child.name}
                  </Link>
                ))}
              </div>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
