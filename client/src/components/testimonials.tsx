import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    id: "epi",
    company: "EPI",
    department: "EPI CEO",
    logo: "EPI",
    logoColor: "bg-primary",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150",
    content: "This email is an inadequate expression of thanks for a job well executed. The final installation was even more impressive than the original PowerPoint. You converted our factory into something special and the event was a complete success.",
    industry: "EPI Manufacturing"
  },
  {
    id: "adaa", 
    company: "ADAA",
    department: "Strategic Communications",
    logo: "ADAA",
    logoColor: "bg-secondary",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150",
    content: "I would like to express our appreciation for the incredible work you did in designing and building our booth at GITEX 2024. This being our first year with our own booth, it was a milestone for us, and ExhibitPro was a great partner.",
    industry: "ADAA Technology"
  },
  {
    id: "takween",
    company: "TAKWEEN", 
    department: "Export Sales Department",
    logo: "TAKWEEN",
    logoColor: "bg-green-600",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150",
    content: "Starting from the design phase your team delivered an exceptional concept that positioned our company in a powerful way. The booth's accessibility from three sides created an open, inviting space that welcomed visitors, making a strong and memorable impression.",
    industry: "Takween Food"
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[hsl(var(--charcoal))] mb-6">
            Voices of Satisfaction and Success
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We take pride in building lasting partnerships and delivering solutions that exceed expectations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="testimonial-card shadow-lg border-0">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className={`w-16 h-16 ${testimonial.logoColor} rounded-full flex items-center justify-center text-white font-bold text-xl mr-4`}>
                    {testimonial.logo}
                  </div>
                  <div>
                    <h4 className="font-bold text-[hsl(var(--charcoal))]">{testimonial.department}</h4>
                    <div className="flex text-yellow-400 text-sm">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 italic mb-6">
                  "{testimonial.content}"
                </p>
                <div className="text-sm text-gray-500">{testimonial.industry}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
