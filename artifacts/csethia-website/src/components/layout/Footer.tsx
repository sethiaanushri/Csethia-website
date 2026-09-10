import { Link } from "wouter";
import { Mail, MapPin, Phone, ArrowRight } from "lucide-react";
import csLogo from "@assets/9A268E6A-5A9D-4C92-A106-83ECD05648BE_(1)_1783339064249.png";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white border-t-4 border-secondary">
      <div className="container mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Col */}
          <div className="space-y-6">
            <div className="bg-white inline-block p-3 rounded-sm">
              <img src={csLogo} alt="C. Sethia & Co. Logo" className="h-12 w-auto" />
            </div>
            <p className="text-white/80 text-sm leading-relaxed pr-4">
              Equipping India's industry since 1941. Authorised distributor for globally recognised brands in industrial valves, HVAC components, and flow control.
            </p>
            <div className="flex items-center gap-4 text-sm font-semibold text-secondary">
              <span>GSTIN: 19ALAPS8336E1ZW</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-xl font-bold mb-6 text-white border-b border-white/20 pb-3">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: "Home", path: "/" },
                { name: "About Us", path: "/about" },
                { name: "Products", path: "/products" },
                { name: "Industries Served", path: "/solutions" },
                { name: "Authorised Brands", path: "/brands" },
                { name: "Contact Us", path: "/contact" },
              ].map((link) => (
                <li key={link.path}>
                  <Link href={link.path} className="text-white/80 hover:text-secondary transition-colors text-sm flex items-center gap-2 group">
                    <ArrowRight size={14} className="text-secondary/50 group-hover:text-secondary group-hover:translate-x-1 transition-all" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Brands */}
          <div>
            <h3 className="font-serif text-xl font-bold mb-6 text-white border-b border-white/20 pb-3">Our Brands</h3>
            <ul className="space-y-3">
              {["SANT Valves", "Honeywell", "Tyco", "Resistoflex", "HGuru"].map((brand) => (
                <li key={brand}>
                  <Link href={`/products?brand=${brand.toLowerCase().replace(' ', '-')}`} className="text-white/80 hover:text-secondary transition-colors text-sm flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-secondary"></div>
                    {brand}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-serif text-xl font-bold mb-6 text-white border-b border-white/20 pb-3">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="text-secondary mt-1 shrink-0" size={18} />
                <span className="text-white/80 text-sm leading-relaxed">
                  40, Strand Road, Model House,<br />
                  Ground Floor, Suite 76-77,<br />
                  Kolkata – 700001
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-secondary shrink-0" size={18} />
                <div className="flex flex-col gap-1 text-white/80 text-sm">
                  <a href="tel:+917003251089" className="hover:text-white transition-colors">+91 7003251089</a>
                  <a href="tel:+919903912416" className="hover:text-white transition-colors">+91 9903912416</a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-secondary shrink-0" size={18} />
                <div className="flex flex-col gap-1 text-white/80 text-sm">
                  <a href="mailto:sales@csethia.com" className="hover:text-white transition-colors">sales@csethia.com</a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="bg-primary-foreground/5 py-4 border-t border-white/10">
        <div className="container mx-auto px-4 md:px-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/60">
          <p>&copy; {currentYear} C. Sethia & Co. All rights reserved.</p>
          <div className="flex gap-4">
            <span className="hover:text-white transition-colors cursor-pointer">MSME Reg. No.: UDYAMWB100005622</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
