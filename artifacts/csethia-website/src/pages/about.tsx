import { FadeIn, StaggerChildren, staggerItem } from "@/components/ui/fade-in";
import { Building2, History, Target, Users } from "lucide-react";
import { motion } from "framer-motion";
import heroImg from "@assets/generated_images/hero-pipeline.jpg"; // Reusing for aesthetic

export function About() {
  return (
    <div className="w-full">
      {/* Page Header */}
      <section className="bg-primary text-white py-20 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src={heroImg} alt="Background" className="w-full h-full object-cover mix-blend-overlay" />
        </div>
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <FadeIn>
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">Our Legacy</h1>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl font-sans">
              Since 1941, C. Sethia & Co. has stood as a pillar of reliability in India's industrial sector. We don't just supply products; we provide engineered solutions built on eight decades of trust.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            {/* Story */}
            <div className="lg:col-span-7">
              <FadeIn>
                <h2 className="text-3xl font-serif font-bold text-primary mb-8 border-b-2 border-secondary inline-block pb-2">The Company Story</h2>
                <div className="space-y-6 text-muted-foreground text-lg leading-relaxed font-sans">
                  <p>
                    Founded in Kolkata in the year 1941, C. Sethia & Co. began its journey against the backdrop of a rapidly industrializing India. For over 80 years, we have been serving the nation's industrial backbone, adapting to technological shifts while maintaining our core principle of uncompromising quality.
                  </p>
                  <p>
                    As an authorised distributor for globally recognised brands, we possess deep expertise in industrial valves, HVAC components, flow control, and instrumentation. Our comprehensive product portfolio ensures that from a simple factory refit to a massive greenfield infrastructure project, we have the precise components required.
                  </p>
                  <p>
                    Today, we are the trusted partner for EPC contractors, MEP consultants, OEMs, hospitals, commercial developers, and residential builders across India. They rely on us not just for genuine products, but for our technical acumen and steadfast reliability.
                  </p>
                </div>
              </FadeIn>
            </div>

            {/* Values / Info */}
            <div className="lg:col-span-5">
              <StaggerChildren className="space-y-8" delayOrder={0.2}>
                <motion.div variants={staggerItem} className="bg-muted/30 p-8 rounded-sm border-l-4 border-secondary">
                  <div className="flex items-center gap-4 mb-4">
                    <History className="w-8 h-8 text-primary" />
                    <h3 className="text-xl font-bold text-primary">Established 1941</h3>
                  </div>
                  <p className="text-muted-foreground">Operating continuously for over 8 decades, passing down engineering expertise and business integrity through generations.</p>
                </motion.div>

                <motion.div variants={staggerItem} className="bg-muted/30 p-8 rounded-sm border-l-4 border-secondary">
                  <div className="flex items-center gap-4 mb-4">
                    <Target className="w-8 h-8 text-primary" />
                    <h3 className="text-xl font-bold text-primary">Our Mission</h3>
                  </div>
                  <p className="text-muted-foreground">To provide genuine, high-performance industrial and HVAC components with unmatched technical support and reliable delivery schedules.</p>
                </motion.div>

                <motion.div variants={staggerItem} className="bg-muted/30 p-8 rounded-sm border-l-4 border-secondary">
                  <div className="flex items-center gap-4 mb-4">
                    <Users className="w-8 h-8 text-primary" />
                    <h3 className="text-xl font-bold text-primary">Leadership</h3>
                  </div>
                  <p className="text-muted-foreground">Under the guidance of Siddharth Sethia, the company continues to expand its footprint while maintaining the personalized service that built our reputation.</p>
                </motion.div>
              </StaggerChildren>
            </div>

          </div>
        </div>
      </section>

      {/* Stats Ribbon */}
      <section className="bg-primary py-16 border-t border-border/10">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "1941", label: "Year Established" },
              { number: "80+", label: "Years of Excellence" },
              { number: "100%", label: "Genuine Products" },
              { number: "Pan-India", label: "Delivery Network" }
            ].map((stat, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="text-4xl md:text-5xl font-serif font-bold text-secondary mb-2">{stat.number}</div>
                <div className="text-white/80 uppercase tracking-widest text-sm font-semibold">{stat.label}</div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
