import { FadeIn, StaggerChildren, staggerItem } from "@/components/ui/fade-in";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, CheckCircle2, Users, TrendingUp, HardHat } from "lucide-react";
import { motion } from "framer-motion";

import heroImg from "@assets/generated_images/hero-pipeline.jpg";

import { useState } from "react";

// Brand logos — local files (used for the brands showcase grid)
const brands = [
  { name: "SANT Valves",      logo: "/brand-logos/sant.png",        href: "/products?brand=SANT" },
  { name: "Honeywell",        logo: "/brand-logos/honeywell.png",   href: "/products?brand=Honeywell" },
  { name: "Tyco",             logo: "/brand-logos/tyco-new.png",    href: "/products?brand=Tyco" },
  { name: "Resistoflex",      logo: "/brand-logos/resistoflex.png", href: "/products?brand=Resistoflex" },
  { name: "HGuru",            logo: "/brand-logos/hguru.jpg",       href: "/products?brand=HGuru" },
  { name: "Sant Air Systems", logo: "/brand-logos/sant-air.png",    href: "/products?brand=SantAirSystem" },
];

// 7 hero products for carousel (SANT + Honeywell, all with updated images)
const CAROUSEL_PRODUCTS = [
  { name: "Butterfly Valve",          brand: "SANT Valves",  image: "/product-images-new/image10.jpg" },
  { name: "PICV 25 mm",               brand: "Honeywell",    image: "/product-images-new/image97.jpg" },
  { name: "Gate Valve",               brand: "SANT Valves",  image: "/product-images-new/image26.jpg" },
  { name: "Motorised Butterfly Valve",brand: "Honeywell",    image: "/product-images-new/image42.jpg" },
  { name: "Ball Valve",               brand: "SANT Valves",  image: "/product-images-new/image59.jpg" },
  { name: "Damper Actuator",          brand: "Honeywell",    image: "/product-images-new/image58.jpg" },
  { name: "Check Valve",              brand: "SANT Valves",  image: "/product-images-new/image21.jpg" },
];

function BrandLogoCard({ brand }: { brand: typeof brands[0] }) {
  return (
    <Link href={brand.href}>
      <div className="group bg-white border border-border rounded-sm hover:border-secondary hover:shadow-lg transition-all duration-300 cursor-pointer flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8 gap-2 h-36 sm:h-44 lg:h-48 overflow-hidden">
        {/* Logo — white bg + multiply blend makes any white area transparent */}
        <div className="flex items-center justify-center w-full flex-1 min-w-0">
          <img
            src={brand.logo}
            alt={`${brand.name} logo`}
            className="max-h-16 sm:max-h-20 lg:max-h-24 max-w-[110px] sm:max-w-[150px] lg:max-w-[200px] w-auto object-contain group-hover:scale-105 transition-transform duration-300"
            style={{ mixBlendMode: "multiply" }}
          />
        </div>
        <p className="text-[11px] font-bold text-muted-foreground uppercase tracking-widest text-center leading-tight">
          {brand.name}
        </p>
      </div>
    </Link>
  );
}

export function Home() {
  return (
    <div className="flex flex-col w-full">

      {/* ── HERO ── */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 bg-primary">
          <motion.img
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.4 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            src={heroImg}
            alt="Industrial Pipeline"
            className="w-full h-full object-cover object-center mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent" />
        </div>

        <div className="container relative z-10 mx-auto px-4 md:px-8 mt-16">
          <div className="max-w-3xl">
            <FadeIn delay={0.2}>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-secondary/20 border border-secondary/50 text-secondary text-sm font-semibold rounded-full mb-6">
                <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
                Established 1941 · Kolkata
              </div>
            </FadeIn>
            <FadeIn delay={0.4}>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white leading-[1.1] mb-6">
                Trusted Valves &amp; HVAC Controls{" "}
                <span className="text-secondary">for Every Project.</span>
              </h1>
            </FadeIn>
            <FadeIn delay={0.6}>
              <p className="text-lg md:text-xl text-white/80 font-sans mb-4 max-w-2xl leading-relaxed">
                Authorised distributor of world-class industrial valves, HVAC components, and flow control systems — serving EPC contractors, MEP consultants, factories, and hospitals across India.
              </p>
              <p className="text-base text-secondary/90 font-semibold mb-10 max-w-2xl">
                Authorized distributor for HVAC, fire protection, plumbing, and industrial control systems for projects across Kolkata and East India.
              </p>
            </FadeIn>
            <FadeIn delay={0.8}>
              <div className="flex flex-wrap gap-4">
                <a href="/contact" className="inline-flex items-center justify-center bg-secondary hover:bg-secondary/90 text-primary font-bold h-14 px-8 text-lg rounded-none transition-colors">
                  Enquire Now
                </a>
                <a href="/products" className="inline-flex items-center justify-center border border-white text-white hover:bg-white hover:text-primary h-14 px-8 text-lg rounded-none bg-transparent transition-colors">
                  View Catalogue
                </a>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
            <FadeIn direction="right">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6">
                A Legacy of Precision &amp; Reliability
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                C. Sethia &amp; Co. is the name engineers and procurement managers trust without question. We supply world-class product portfolios with complete reliability — serving EPC contractors, MEP consultants, and major infrastructure developers across India since 1941.
              </p>
              <Link href="/about" className="inline-flex items-center text-primary font-semibold hover:text-secondary transition-colors group">
                Read our story
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </FadeIn>

            <StaggerChildren className="grid grid-cols-2 gap-6" delayOrder={0.2}>
              {[
                { icon: TrendingUp, stat: "80+", label: "Years of Experience" },
                { icon: Users, stat: "1000+", label: "Customers Served" },
                { icon: HardHat, stat: "100+", label: "Products Available" },
                { icon: CheckCircle2, stat: "Pan-India", label: "Distribution Network" },
              ].map((item, i) => (
                <motion.div key={i} variants={staggerItem} className="bg-muted/50 p-6 rounded-sm border border-border/50">
                  <item.icon className="w-8 h-8 text-secondary mb-4" />
                  <div className="text-3xl font-serif font-bold text-primary mb-2">{item.stat}</div>
                  <div className="text-sm text-muted-foreground font-medium uppercase tracking-wider">{item.label}</div>
                </motion.div>
              ))}
            </StaggerChildren>
          </div>
        </div>
      </section>

      {/* ── PRODUCT SHOWCASE CAROUSEL ── */}
      <section className="py-16 bg-muted/30 overflow-hidden">
        <div className="container mx-auto px-4 md:px-8 mb-8">
          <FadeIn>
            <p className="text-xs font-bold tracking-widest text-muted-foreground uppercase mb-1">From Our Catalogue</p>
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary">Featured Products</h2>
          </FadeIn>
        </div>
        <div className="relative">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-muted/30 to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-muted/30 to-transparent pointer-events-none" />
          <motion.div
            className="flex gap-5"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 28, ease: "linear", repeat: Infinity }}
            style={{ width: "max-content" }}
          >
            {[...CAROUSEL_PRODUCTS, ...CAROUSEL_PRODUCTS].map((p, i) => (
              <a
                key={i}
                href={`/products?brand=${p.brand === "SANT Valves" ? "SANT" : "Honeywell"}`}
                className="flex-shrink-0 w-52 bg-white border border-border rounded-sm overflow-hidden group hover:border-secondary hover:shadow-md transition-all duration-300"
              >
                <div className="h-40 bg-muted/20 flex items-center justify-center overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.name}
                    className={`w-full h-full object-contain transition-transform duration-500 ${p.brand === "SANT Valves" ? "p-0 scale-[1.15] group-hover:scale-[1.28]" : "p-3 group-hover:scale-105"}`}
                  />
                </div>
                <div className="p-4">
                  <p className="text-[10px] font-bold tracking-widest text-secondary uppercase mb-1">{p.brand}</p>
                  <p className="text-sm font-bold text-primary leading-tight">{p.name}</p>
                </div>
              </a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── BRANDS WE WORK WITH ── */}
      <section className="py-20 bg-muted/10 border-y border-border">
        <div className="container mx-auto px-4 md:px-8">
          <FadeIn>
            <div className="text-center mb-12">
              <p className="text-xs font-bold tracking-widest text-secondary uppercase mb-2">
                Authorised Distributor For
              </p>
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary mb-3">
                World-Class Brands. Genuine Products.
              </h2>
              <p className="text-muted-foreground text-sm max-w-xl mx-auto">
                Official partner for HVAC, fire protection, plumbing &amp; industrial valve brands — serving Kolkata and East India since 1941.
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {brands.map((brand, i) => (
                <BrandLogoCard key={i} brand={brand} />
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6">The Partner of Choice</h2>
              <p className="text-muted-foreground text-lg">
                Procurement managers and facility teams choose C. Sethia &amp; Co. for our unwavering commitment to quality, authenticity, and technical expertise.
              </p>
            </FadeIn>
          </div>

          <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" delayOrder={0.15}>
            {[
              { title: "Authorised Partner", desc: "Direct manufacturer relationships ensuring 100% genuine products with full warranty." },
              { title: "Technical Expertise", desc: "Deep engineering knowledge to recommend the exact specifications for your application." },
              { title: "Ready Inventory", desc: "Substantial stock holdings allowing for rapid dispatch and minimal project delays." },
              { title: "Legacy of Trust", desc: "Over eight decades of flawless business practices and satisfied institutional clients." },
            ].map((feature, i) => (
              <motion.div key={i} variants={staggerItem} className="bg-white p-8 border border-border shadow-sm hover:border-secondary transition-colors duration-300 rounded-sm">
                <CheckCircle2 className="w-10 h-10 text-secondary mb-6" />
                <h3 className="text-xl font-bold text-primary mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 bg-primary relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-secondary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
        <div className="container mx-auto px-4 md:px-8 relative z-10 text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">
              Ready to source for your next project?
            </h2>
            <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-10">
              Connect with our technical team for detailed catalogues, pricing, and project-specific quotations.
            </p>
            <a href="/contact" className="inline-flex items-center justify-center bg-secondary hover:bg-secondary/90 text-primary font-bold h-14 px-10 text-lg rounded-none shadow-xl shadow-black/20 transition-colors">
              Contact Sales Team
            </a>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
