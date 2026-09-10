import { useState, useEffect } from "react";
import { FadeIn, StaggerChildren, staggerItem } from "@/components/ui/fade-in";
import { productsData } from "@/data/products";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, Filter, Package } from "lucide-react";
import { Link, useLocation } from "wouter";

function BrandLogoImg({ src, name }: { src: string; name: string }) {
  return (
    <img
      src={src}
      alt={`${name} logo`}
      className="max-h-20 max-w-[220px] w-auto object-contain"
      style={{ mixBlendMode: "multiply" }}
    />
  );
}

const PLACEHOLDER_BG = [
  "from-primary/20 to-primary/5",
  "from-secondary/20 to-secondary/5",
  "from-primary/15 to-secondary/10",
];

function ProductCard({ item, idx, large }: { item: { name: string; material?: string; type?: string; remarks?: string; image?: string }; idx: number; large?: boolean }) {
  const [imgError, setImgError] = useState(false);

  return (
    <motion.div
      variants={staggerItem}
      className="bg-white border border-border rounded-sm overflow-hidden hover:border-secondary hover:shadow-md transition-all duration-300 group flex flex-col"
    >
      {/* Image */}
      <div className={`relative ${large ? "h-56" : "h-44"} overflow-hidden bg-muted/30 flex items-center justify-center`}>
        <img
          src={item.image}
          alt={item.name}
          onError={() => setImgError(true)}
          className={`w-full h-full object-contain ${large ? "p-1" : "p-3"} transition-transform duration-500 group-hover:scale-105 ${imgError ? "hidden" : ""}`}
        />
        {imgError && (
          <div className={`w-full h-full flex items-center justify-center bg-gradient-to-br ${PLACEHOLDER_BG[idx % 3]}`}>
            <Package className="w-10 h-10 text-primary/20" />
          </div>
        )}
      </div>

      {/* Info */}
      <div className="p-4 flex flex-col flex-1">
        <h4 className="font-bold text-primary text-sm leading-tight mb-1">{item.name}</h4>
        {item.material && (
          <span className="text-xs text-secondary font-semibold uppercase tracking-wider mb-1">{item.material}</span>
        )}
        {item.type && (
          <span className="text-xs text-muted-foreground mb-1">{item.type}</span>
        )}
        {item.remarks && (
          <span className="mt-auto pt-2 text-xs text-muted-foreground/70 italic">{item.remarks}</span>
        )}
      </div>
    </motion.div>
  );
}

function getBrandFromSearch(search: string, brandKeys: string[]) {
  const q = new URLSearchParams(search).get("brand") ?? "";
  return brandKeys.find((k) => k.toLowerCase() === q.toLowerCase()) ?? brandKeys[0];
}

export function Products() {
  const [location] = useLocation();
  const brandKeys = Object.keys(productsData);
  const [activeBrand, setActiveBrand] = useState(() =>
    getBrandFromSearch(window.location.search, brandKeys)
  );

  // Sync activeBrand when the URL query string changes (e.g. in-app navigation)
  useEffect(() => {
    const brand = getBrandFromSearch(window.location.search, brandKeys);
    setActiveBrand(brand);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  const brandData = productsData[activeBrand as keyof typeof productsData];

  return (
    <div className="w-full bg-muted/20 min-h-screen">
      {/* Page Header */}
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4 md:px-8">
          <FadeIn>
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Product Catalogue</h1>
            <p className="text-white/80 max-w-2xl text-lg">
              Comprehensive range of industrial valves, HVAC controls, and instrumentation from world-leading manufacturers.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col lg:flex-row gap-10">

            {/* Sidebar */}
            <div className="lg:w-1/5">
              <FadeIn className="bg-white rounded-sm border border-border p-6 sticky top-28">
                <div className="flex items-center gap-2 mb-6 text-primary font-bold border-b border-border pb-4">
                  <Filter size={18} />
                  <span>Select Brand</span>
                </div>
                <div className="flex flex-col gap-2">
                  {brandKeys.map((brand) => (
                    <button
                      key={brand}
                      onClick={() => setActiveBrand(brand)}
                      className={`text-left px-4 py-3 rounded-sm text-sm font-semibold transition-all flex items-center justify-between ${
                        activeBrand === brand
                          ? "bg-primary text-white"
                          : "bg-muted/30 text-foreground hover:bg-muted"
                      }`}
                    >
                      {productsData[brand].name}
                      {activeBrand === brand && <ChevronRight size={16} className="text-secondary" />}
                    </button>
                  ))}
                </div>
                <div className="mt-8 pt-6 border-t border-border">
                  <p className="text-sm text-muted-foreground mb-4">Need technical specs or custom requirements?</p>
                  <a href="/contact" className="flex items-center justify-center w-full border border-primary text-primary hover:bg-primary hover:text-white rounded-none h-10 text-sm font-semibold transition-colors">
                    Request Datasheets
                  </a>
                </div>
              </FadeIn>
            </div>

            {/* Product Display */}
            <div className="lg:w-4/5">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeBrand}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Brand header */}
                  <div className="mb-8 bg-white border border-border border-l-4 border-l-secondary rounded-sm overflow-hidden flex flex-col sm:flex-row">
                    {/* Logo panel — white bg required for mix-blend-mode:multiply */}
                    <div className="sm:w-64 shrink-0 flex items-center justify-center p-10 bg-white border-b sm:border-b-0 sm:border-r border-border min-h-[140px]">
                      <BrandLogoImg src={brandData.logo} name={brandData.name} />
                    </div>
                    {/* Text */}
                    <div className="p-8 flex flex-col justify-center">
                      <h2 className="text-3xl font-serif font-bold text-primary mb-3">{brandData.name}</h2>
                      <p className="text-muted-foreground text-lg">{brandData.description}</p>
                    </div>
                  </div>

                  {/* Brand catalogue banner (e.g. Tyco product overview image) */}
                  {brandData.banner && (
                    <div className="mb-8 border border-border rounded-sm overflow-hidden shadow-sm">
                      <img
                        src={brandData.banner}
                        alt={`${brandData.name} product catalogue`}
                        className="w-full h-auto object-contain"
                      />
                    </div>
                  )}

                  {/* Categories */}
                  <div className="space-y-10">
                    {brandData.categories.map((category, catIdx) => {
                      const withImage = category.items.filter((it) => it.image);
                      const withoutImage = category.items.filter((it) => !it.image);
                      return (
                        <div key={catIdx}>
                          <div className="bg-primary/5 px-6 py-4 border border-border border-l-4 border-l-secondary rounded-sm mb-4">
                            <h3 className="text-xl font-bold text-primary">{category.name}</h3>
                          </div>

                          {withImage.length > 0 && (
                            <StaggerChildren
                              className={`grid grid-cols-2 gap-4 ${activeBrand === "SANT" ? "sm:grid-cols-2 lg:grid-cols-3" : "sm:grid-cols-3 lg:grid-cols-4"}`}
                              delayOrder={0.05}
                            >
                              {withImage.map((item, i) => (
                                <ProductCard key={i} item={item} idx={i} large={activeBrand === "SANT"} />
                              ))}
                            </StaggerChildren>
                          )}

                        </div>
                      );
                    })}
                  </div>

                  {brandData.endNote && (
                    <div className="mt-6 px-5 py-3 bg-secondary/10 border border-secondary/30 rounded-sm">
                      <p className="text-sm font-semibold text-primary/80 italic">{brandData.endNote}</p>
                    </div>
                  )}

                  <div className="mt-10 p-6 bg-primary text-white rounded-sm flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div>
                      <p className="font-bold text-lg">Need pricing or availability?</p>
                      <p className="text-white/70 text-sm">All products available on demand. Contact us for a quote.</p>
                    </div>
                    <a href="/contact" className="inline-flex items-center justify-center bg-secondary hover:bg-secondary/90 text-primary font-bold rounded-none whitespace-nowrap h-10 px-5 text-sm transition-colors">
                      Get a Quote
                    </a>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
