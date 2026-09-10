import { FadeIn } from "@/components/ui/fade-in";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  company: z.string().optional(),
  phone: z.string().min(10, "Valid phone number required"),
  email: z.string().email("Valid email required"),
  projectType: z.string().min(1, "Please select a project type"),
  products: z.string().optional(),
  message: z.string().min(10, "Please provide some details"),
});

export function Contact() {
  const { toast } = useToast();
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      company: "",
      phone: "",
      email: "",
      projectType: "",
      products: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: "Enquiry Sent",
      description: "Thank you. Our sales team will contact you shortly.",
      className: "bg-primary text-white border-secondary",
    });
    form.reset();
  }

  return (
    <div className="w-full bg-white">
      {/* Header */}
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4 md:px-8">
          <FadeIn>
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Contact Us</h1>
            <p className="text-white/80 max-w-2xl text-lg font-sans">
              Reach out to our technical sales team for quotations, product data sheets, and project consultation.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
            
            {/* Contact Info */}
            <div className="lg:w-5/12">
              <FadeIn>
                <div className="mb-10">
                  <h2 className="text-3xl font-serif font-bold text-primary mb-2">C. Sethia & Co.</h2>
                  <p className="text-secondary font-semibold uppercase tracking-wider text-sm">Industrial Distributors Est. 1941</p>
                </div>

                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-muted/50 rounded-sm flex items-center justify-center shrink-0">
                      <MapPin className="text-primary w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-primary mb-1">Corporate Office</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        40, Strand Road, Model House,<br />
                        Ground Floor, Suite 76-77,<br />
                        Kolkata – 700001
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-muted/50 rounded-sm flex items-center justify-center shrink-0">
                      <Phone className="text-primary w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-primary mb-1">Direct Lines</h3>
                      <p className="text-muted-foreground">Contact Person: Siddharth Sethia</p>
                      <a href="tel:+917003251089" className="block text-primary hover:text-secondary font-semibold mt-1">+91 7003251089</a>
                      <a href="tel:+919903912416" className="block text-primary hover:text-secondary font-semibold mt-0.5">+91 9903912416</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-muted/50 rounded-sm flex items-center justify-center shrink-0">
                      <Mail className="text-primary w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-primary mb-1">Email</h3>
                      <a href="mailto:sales@csethia.com" className="block text-muted-foreground hover:text-primary">sales@csethia.com</a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-muted/50 rounded-sm flex items-center justify-center shrink-0">
                      <Clock className="text-primary w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-primary mb-1">Business Details</h3>
                      <p className="text-muted-foreground text-sm">GSTIN: 19ALAPS8336E1ZW</p>
                      <p className="text-muted-foreground text-sm">MSME Reg: UDYAMWB100005622</p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>

            {/* Contact Form */}
            <div className="lg:w-7/12">
              <FadeIn delay={0.2} className="bg-muted/10 p-8 md:p-10 border border-border rounded-sm">
                <h3 className="text-2xl font-serif font-bold text-primary mb-6">Request a Quote</h3>
                
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-primary font-semibold">Name *</FormLabel>
                            <FormControl>
                              <Input placeholder="Full Name" {...field} className="bg-white rounded-sm border-muted-foreground/30 focus-visible:ring-secondary" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="company"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-primary font-semibold">Company</FormLabel>
                            <FormControl>
                              <Input placeholder="Company Name" {...field} className="bg-white rounded-sm border-muted-foreground/30 focus-visible:ring-secondary" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-primary font-semibold">Email *</FormLabel>
                            <FormControl>
                              <Input type="email" placeholder="Email Address" {...field} className="bg-white rounded-sm border-muted-foreground/30 focus-visible:ring-secondary" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-primary font-semibold">Phone *</FormLabel>
                            <FormControl>
                              <Input type="tel" placeholder="Phone Number" {...field} className="bg-white rounded-sm border-muted-foreground/30 focus-visible:ring-secondary" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="projectType"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-primary font-semibold">Project Type *</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="bg-white rounded-sm border-muted-foreground/30 focus:ring-secondary">
                                <SelectValue placeholder="Select industry/project type" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="industrial">Industrial & Manufacturing</SelectItem>
                              <SelectItem value="commercial">Commercial Building</SelectItem>
                              <SelectItem value="residential">Residential Project</SelectItem>
                              <SelectItem value="epc">EPC / MEP Contractor</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="products"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-primary font-semibold">Products Required (Optional)</FormLabel>
                          <FormControl>
                            <Input placeholder="e.g. SANT Butterfly Valves, Honeywell Sensors" {...field} className="bg-white rounded-sm border-muted-foreground/30 focus-visible:ring-secondary" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-primary font-semibold">Message / Enquiry Details *</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Please provide details about your requirements, sizes, specifications..." 
                              className="min-h-[120px] bg-white rounded-sm border-muted-foreground/30 focus-visible:ring-secondary" 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button type="submit" className="w-full bg-secondary hover:bg-secondary/90 text-primary font-bold h-12 rounded-sm text-lg flex items-center gap-2">
                      <Send size={18} />
                      Send Enquiry
                    </Button>
                  </form>
                </Form>
              </FadeIn>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
