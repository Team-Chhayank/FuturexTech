import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Phone, Mail, Clock, MessageSquare } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertContactInquirySchema } from "@shared/schema";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

type ContactFormData = z.infer<typeof insertContactInquirySchema>;

export default function Contact() {
  const { toast } = useToast();
  const [selectedService, setSelectedService] = useState<string>("");

  const form = useForm<ContactFormData>({
    resolver: zodResolver(insertContactInquirySchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      service: "",
      projectDetails: "",
    },
  });

  const submitInquiry = useMutation({
    mutationFn: async (data: ContactFormData) => {
      const response = await apiRequest("POST", "/api/contact", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Inquiry Submitted Successfully",
        description: "Thank you for your inquiry! We will get back to you soon.",
      });
      form.reset();
      setSelectedService("");
    },
    onError: () => {
      toast({
        title: "Submission Failed",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: ContactFormData) => {
    submitInquiry.mutate(data);
  };

  const services = [
    { value: "exhibition", label: "Exhibition Design" },
    { value: "event", label: "Event Setup" },
    { value: "carpentry", label: "Carpentry & Build" },
    { value: "interior", label: "Interior Design" },
    { value: "visual", label: "Visual Merchandising" },
    { value: "museum", label: "Museum & Expo" },
  ];

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-primary to-blue-900 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Bring Your Vision to Life?
          </h2>
          <p className="text-xl opacity-90">
            Let's create something extraordinary together. Get in touch to discuss your next project.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-white">Get Your Free Quote</h3>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName" className="text-white">First Name</Label>
                    <Input
                      id="firstName"
                      {...form.register("firstName")}
                      placeholder="John"
                      className="bg-white/20 border-white/30 text-white placeholder:text-white/60 focus:border-secondary"
                    />
                    {form.formState.errors.firstName && (
                      <p className="text-red-300 text-sm mt-1">{form.formState.errors.firstName.message}</p>
                    )}
                  </div>
                  <div>
                    <Label htmlFor="lastName" className="text-white">Last Name</Label>
                    <Input
                      id="lastName"
                      {...form.register("lastName")}
                      placeholder="Doe"
                      className="bg-white/20 border-white/30 text-white placeholder:text-white/60 focus:border-secondary"
                    />
                    {form.formState.errors.lastName && (
                      <p className="text-red-300 text-sm mt-1">{form.formState.errors.lastName.message}</p>
                    )}
                  </div>
                </div>
                <div>
                  <Label htmlFor="email" className="text-white">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    {...form.register("email")}
                    placeholder="john@company.com"
                    className="bg-white/20 border-white/30 text-white placeholder:text-white/60 focus:border-secondary"
                  />
                  {form.formState.errors.email && (
                    <p className="text-red-300 text-sm mt-1">{form.formState.errors.email.message}</p>
                  )}
                </div>
                <div>
                  <Label htmlFor="phone" className="text-white">Phone</Label>
                  <Input
                    id="phone"
                    type="tel"
                    {...form.register("phone")}
                    placeholder="+1 (555) 123-4567"
                    className="bg-white/20 border-white/30 text-white placeholder:text-white/60 focus:border-secondary"
                  />
                  {form.formState.errors.phone && (
                    <p className="text-red-300 text-sm mt-1">{form.formState.errors.phone.message}</p>
                  )}
                </div>
                <div>
                  <Label htmlFor="service" className="text-white">Service Required</Label>
                  <Select 
                    value={selectedService} 
                    onValueChange={(value) => {
                      setSelectedService(value);
                      form.setValue("service", value);
                    }}
                  >
                    <SelectTrigger className="bg-white/20 border-white/30 text-white focus:border-secondary">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      {services.map((service) => (
                        <SelectItem key={service.value} value={service.value}>
                          {service.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {form.formState.errors.service && (
                    <p className="text-red-300 text-sm mt-1">{form.formState.errors.service.message}</p>
                  )}
                </div>
                <div>
                  <Label htmlFor="projectDetails" className="text-white">Project Details</Label>
                  <Textarea
                    id="projectDetails"
                    {...form.register("projectDetails")}
                    rows={4}
                    placeholder="Tell us about your project requirements..."
                    className="bg-white/20 border-white/30 text-white placeholder:text-white/60 focus:border-secondary resize-none"
                  />
                  {form.formState.errors.projectDetails && (
                    <p className="text-red-300 text-sm mt-1">{form.formState.errors.projectDetails.message}</p>
                  )}
                </div>
                <Button 
                  type="submit" 
                  disabled={submitInquiry.isPending}
                  className="w-full bg-secondary hover:bg-secondary/90 text-white font-semibold py-4 h-auto"
                >
                  {submitInquiry.isPending ? "Sending..." : "Send Inquiry"}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="text-secondary h-6 w-6 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Our Location</h4>
                    <p className="opacity-90">Business Bay, Dubai, UAE</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="text-secondary h-6 w-6 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Phone</h4>
                    <p className="opacity-90">+971 54 532 1419</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="text-secondary h-6 w-6 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Email</h4>
                    <p className="opacity-90">info@exhibitpro.com</p>
                  </div>
                </div>
              </div>
            </div>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-6">
                <h4 className="text-xl font-bold mb-4 text-white">Quick Contact</h4>
                <p className="opacity-90 mb-6">Need immediate assistance? Chat with us on WhatsApp for instant support.</p>
                <Button asChild className="bg-green-600 hover:bg-green-700 text-white">
                  <a 
                    href="https://wa.me/971545321419?text=Hello%2C%20I%27m%20interested%20in%20your%20exhibition%20services."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center"
                  >
                    <MessageSquare className="mr-3 h-5 w-5" />
                    Chat on WhatsApp
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-6">
                <h4 className="text-xl font-bold mb-4 text-white">Business Hours</h4>
                <div className="space-y-2 opacity-90">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>8:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span>9:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
