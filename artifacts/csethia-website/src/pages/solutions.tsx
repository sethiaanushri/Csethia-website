import { FadeIn, StaggerChildren, staggerItem } from "@/components/ui/fade-in";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

const industries = [
  {
    title: "Industrial Facilities & Manufacturing",
    desc: "Robust valves, strainers, and measurement tools designed for high-stress manufacturing environments and process plants.",
    image: "/sector-images/factory.jpg",
  },
  {
    title: "Hospitals & Healthcare",
    desc: "Precision HVAC controls, PICV valves, and balancing valves ensuring critical temperature and air quality management.",
    image: "/sector-images/hospital.jpg",
  },
  {
    title: "Commercial Buildings",
    desc: "Complete flow control and climate management systems for corporate offices, malls, and IT parks.",
    image: "/sector-images/commercial.jpg",
  },
  {
    title: "Infrastructure & Utilities",
    desc: "Heavy-duty cast steel and iron valves for water treatment, power distribution, and municipal utilities.",
    image: "/sector-images/infrastructure.jpg",
  },
  {
    title: "EPC Contractors",
    desc: "End-to-end supply of genuine components for turnkey engineering, procurement, and construction projects.",
    image: "/sector-images/construction.jpg",
  },
  {
    title: "MEP Consultants",
    desc: "Detailed technical data and reliable product availability to support complex mechanical and plumbing designs.",
    image: "/sector-images/manufacturing.jpg",
  },
  {
    title: "Process Plants",
    desc: "Specialised steam traps, pressure reducing valves, and bellows for chemical and processing industries.",
    image: "/sector-images/process-plant.jpg",
  },
  {
    title: "Residential Projects",
    desc: "Quality water meters, check valves, and plumbing components for large-scale residential developments.",
    image: "/sector-images/residential.jpg",
  },
];

export function Solutions() {
  return (
    <div className="w-full">
      {/* Header */}
      <section className="bg-primary text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="/sector-images/manufacturing.jpg"
            alt="Industrial Environment"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/60" />
        </div>
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <FadeIn>
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Industries Served</h1>
            <p className="text-white/80 max-w-2xl text-lg font-sans">
              Delivering precision engineering components to sectors where reliability is non-negotiable. Our solutions power India's most critical infrastructure.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Grid Section */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4 md:px-8">
          <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" delayOrder={0.1}>
            {industries.map((ind, i) => (
              <motion.div
                key={i}
                variants={staggerItem}
                className="group relative overflow-hidden rounded-sm border border-border bg-white hover:border-secondary hover:shadow-lg transition-all duration-300 cursor-pointer"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={ind.image}
                    alt={ind.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-base font-bold text-primary mb-2 leading-snug group-hover:text-secondary transition-colors">
                    {ind.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{ind.desc}</p>
                </div>
              </motion.div>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <FadeIn>
            <h2 className="text-2xl md:text-3xl font-serif font-bold mb-4">
              Serving Your Industry for Over 80 Years
            </h2>
            <p className="text-white/70 max-w-xl mx-auto mb-8">
              Contact us to discuss your project requirements and get a customised quotation.
            </p>
            <a href="/contact" className="inline-flex items-center gap-2 bg-secondary hover:bg-secondary/90 text-primary font-bold px-8 py-4 rounded-none transition-colors">
              Get in Touch <ArrowRight size={18} />
            </a>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
