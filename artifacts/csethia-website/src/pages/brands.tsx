import { FadeIn, StaggerChildren, staggerItem } from "@/components/ui/fade-in";
import { Link } from "wouter";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { productsData } from "@/data/products";

export function Brands() {
  const brandsList = Object.entries(productsData).map(([key, data]) => ({
    id: key,
    name: data.name,
    description: data.description,
    logo: data.logo,
    categories: data.categories.slice(0, 3).map(c => c.name).join(", ") + (data.categories.length > 3 ? " & more." : "."),
    totalProducts: data.categories.reduce((sum, c) => sum + c.items.length, 0),
  }));

  return (
    <div className="w-full bg-white">
      {/* Header */}
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4 md:px-8">
          <FadeIn>
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Authorised Brands</h1>
            <p className="text-white/80 max-w-2xl text-lg font-sans">
              We exclusively partner with the world's most trusted manufacturers to guarantee 100% genuine products, full warranties, and factory-backed technical support.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Brands list — no stagger so all cards show immediately */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <div className="space-y-10">
            {brandsList.map((brand, i) => (
              <FadeIn
                key={brand.id}
                delay={i * 0.05}
                className="bg-white border border-border rounded-sm shadow-sm hover:shadow-md hover:border-secondary/50 transition-all overflow-hidden"
              >
                <div className="flex flex-col md:flex-row">

                  {/* Logo panel — white bg so mix-blend-mode:multiply works */}
                  <div className="md:w-80 shrink-0 flex items-center justify-center p-10 bg-white border-b md:border-b-0 md:border-r border-border min-h-[200px]">
                    <img
                      src={brand.logo}
                      alt={`${brand.name} logo`}
                      className="max-h-32 max-w-[260px] w-auto object-contain"
                      style={{ mixBlendMode: "multiply" }}
                    />
                  </div>

                  {/* Content */}
                  <div className="flex-1 p-8 md:p-10 flex flex-col justify-between">
                    <div>
                      <div className="flex flex-wrap items-center gap-3 mb-4">
                        <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary">
                          {brand.name}
                        </h2>
                        <div className="flex items-center gap-1.5 text-xs font-bold text-secondary bg-secondary/10 px-3 py-1 rounded-full">
                          <ShieldCheck size={13} />
                          Authorised Distributor
                        </div>
                      </div>
                      <p className="text-lg text-primary/80 font-medium mb-5 leading-relaxed">
                        {brand.description}
                      </p>
                      <div className="mb-6">
                        <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider block mb-1.5">
                          Key Supply Lines:
                        </span>
                        <p className="text-muted-foreground text-sm leading-relaxed">{brand.categories}</p>
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-6">
                      <Link
                        href={`/products?brand=${brand.id}`}
                        className="inline-flex items-center text-primary font-bold hover:text-secondary transition-colors group"
                      >
                        View {brand.name} Catalogue
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                      <span className="text-xs text-muted-foreground border border-border px-3 py-1 rounded-full">
                        {brand.totalProducts}+ products
                      </span>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
