import { useState, useEffect, useRef } from "react";
import { X, CheckCircle2 } from "lucide-react";
import { useLocation } from "wouter";

export function LeadPopup() {
  const [location] = useLocation();
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", requirement: "" });
  const firstFieldRef = useRef<HTMLInputElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  // Only show on homepage
  const isHome = location === "/" || location === "";

  useEffect(() => {
    if (!isHome) return;
    const timer = setTimeout(() => {
      if (!sessionStorage.getItem("lead-popup-dismissed")) {
        setOpen(true);
      }
    }, 4000);
    return () => clearTimeout(timer);
  }, [isHome]);

  // Focus first field when popup opens
  useEffect(() => {
    if (open) {
      setTimeout(() => firstFieldRef.current?.focus(), 50);
    }
  }, [open]);

  // Escape key to dismiss
  useEffect(() => {
    if (!open) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") dismiss();
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  function dismiss() {
    sessionStorage.setItem("lead-popup-dismissed", "1");
    setOpen(false);
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(dismiss, 2200);
  }

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="lead-popup-title"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={dismiss}
        aria-hidden="true"
      />

      {/* Panel */}
      <div className="relative bg-white w-full max-w-md shadow-2xl z-10 overflow-hidden">
        {/* Top accent bar */}
        <div className="h-1 w-full bg-secondary" />

        <div className="p-8">
          {/* Close button */}
          <button
            ref={closeRef}
            onClick={dismiss}
            className="absolute top-4 right-4 text-muted-foreground hover:text-primary transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary rounded-sm"
            aria-label="Close enquiry form"
          >
            <X size={20} />
          </button>

          {submitted ? (
            <div className="text-center py-6">
              <CheckCircle2 className="w-12 h-12 text-secondary mx-auto mb-4" />
              <h3 id="lead-popup-title" className="text-2xl font-serif font-bold text-primary mb-2">
                Thank you!
              </h3>
              <p className="text-muted-foreground">Our team will get back to you shortly.</p>
            </div>
          ) : (
            <>
              <p className="text-xs font-bold tracking-widest text-secondary uppercase mb-1">
                Quick Enquiry
              </p>
              <h2 id="lead-popup-title" className="text-2xl font-serif font-bold text-primary mb-1">
                How can we help?
              </h2>
              <p className="text-muted-foreground text-sm mb-6">
                Share your details and we'll reach out with pricing and availability.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                <div>
                  <label htmlFor="popup-name" className="block text-xs font-semibold text-primary mb-1">
                    Your Name <span aria-hidden="true">*</span>
                  </label>
                  <input
                    id="popup-name"
                    ref={firstFieldRef}
                    required
                    type="text"
                    placeholder="e.g. Rajesh Kumar"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full border border-border px-4 py-3 text-sm rounded-sm focus:outline-none focus:border-secondary transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="popup-phone" className="block text-xs font-semibold text-primary mb-1">
                    Contact Number <span aria-hidden="true">*</span>
                  </label>
                  <input
                    id="popup-phone"
                    required
                    type="tel"
                    placeholder="e.g. 9903912416"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full border border-border px-4 py-3 text-sm rounded-sm focus:outline-none focus:border-secondary transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="popup-req" className="block text-xs font-semibold text-primary mb-1">
                    Your Requirement <span aria-hidden="true">*</span>
                  </label>
                  <textarea
                    id="popup-req"
                    required
                    placeholder="e.g. SANT butterfly valves DN50, Honeywell PICV for HVAC project"
                    value={form.requirement}
                    onChange={(e) => setForm({ ...form, requirement: e.target.value })}
                    rows={3}
                    className="w-full border border-border px-4 py-3 text-sm rounded-sm focus:outline-none focus:border-secondary transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-3 rounded-sm transition-colors text-sm tracking-wide focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary"
                >
                  Send Enquiry
                </button>
              </form>

              <p className="text-xs text-muted-foreground/60 text-center mt-4">
                We respect your privacy. No spam, ever.
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
