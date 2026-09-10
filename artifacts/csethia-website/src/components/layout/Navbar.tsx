import { Link, useLocation } from "wouter";
import { Menu, X, Phone, Mail } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import csLogo from "@assets/9A268E6A-5A9D-4C92-A106-83ECD05648BE_(1)_1783339064249.png";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Products", path: "/products" },
  { name: "Solutions", path: "/solutions" },
  { name: "Brands", path: "/brands" },
  { name: "Contact", path: "/contact" },
];

export function Navbar() {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="bg-primary text-white text-xs py-2 px-4 sm:px-8 flex flex-col sm:flex-row justify-between items-center gap-2">
        <div className="flex items-center gap-4">
          <a href="mailto:sales@csethia.com" className="flex items-center gap-1.5 hover:text-secondary transition-colors">
            <Mail size={14} />
            sales@csethia.com
          </a>
          <span className="opacity-40 hidden sm:inline">|</span>
          <a href="tel:+917003251089" className="flex items-center gap-1.5 hover:text-secondary transition-colors">
            <Phone size={14} />
            +91 7003251089
          </a>
          <span className="opacity-40 hidden sm:inline">|</span>
          <a href="tel:+919903912416" className="flex items-center gap-1.5 hover:text-secondary transition-colors">
            +91 9903912416
          </a>
        </div>
        <div className="text-white/80 hidden sm:block">
          Authorised Industrial Valve & HVAC Distributors Est. 1941
        </div>
      </div>
      
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          isScrolled ? "bg-white shadow-md py-3" : "bg-white py-4"
        }`}
      >
        <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 relative z-50">
            <img src={csLogo} alt="C. Sethia & Co. Logo" className="h-16 md:h-20 w-auto drop-shadow-sm" />
            <div className="hidden sm:block">
              <h1 className="font-serif font-bold text-primary text-2xl leading-tight">C. Sethia & Co.</h1>
              <p className="text-[11px] text-muted-foreground uppercase tracking-widest font-semibold">Since 1941</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-6">
              {navLinks.map((link) => {
                const isActive = location === link.path;
                return (
                  <li key={link.path}>
                    <Link
                      href={link.path}
                      className={`text-sm font-semibold transition-colors hover:text-primary ${
                        isActive ? "text-primary border-b-2 border-secondary pb-1" : "text-foreground"
                      }`}
                    >
                      {link.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <a href="/contact" className="inline-flex items-center justify-center bg-secondary hover:bg-secondary/90 text-primary font-bold rounded-none px-6 h-10 text-sm transition-colors">
              Get a Quote
            </a>
          </nav>

          {/* Mobile Toggle */}
          <button
            className="md:hidden relative z-50 p-2 text-primary"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden absolute top-full left-0 w-full bg-white border-b border-border shadow-lg overflow-hidden"
            >
              <ul className="flex flex-col px-4 py-4 space-y-2">
                {navLinks.map((link) => {
                  const isActive = location === link.path;
                  return (
                    <li key={link.path}>
                      <Link
                        href={link.path}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`block px-4 py-3 text-sm font-semibold rounded-md ${
                          isActive
                            ? "bg-primary/5 text-primary border-l-4 border-secondary"
                            : "text-foreground hover:bg-muted"
                        }`}
                      >
                        {link.name}
                      </Link>
                    </li>
                  );
                })}
                <li className="pt-2">
                  <a href="/contact" onClick={() => setMobileMenuOpen(false)} className="flex items-center justify-center w-full bg-secondary hover:bg-secondary/90 text-primary font-bold rounded-none h-11 text-sm transition-colors">
                    Get a Quote
                  </a>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
