import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Compass, Calendar, Hammer, Palette, Store, Landmark, CheckCircle } from "lucide-react";

const services = [
  {
    id: "exhibition",
    title: "Exhibition Design",
    icon: Compass,
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    description: "Step into the exhibition floor with confidence. Our award-winning design and build expertise creates stands that shine with perfect blend of artistry and functionality.",
    features: [
      "Custom booth design & build",
      "3D visualization & planning", 
      "Installation & dismantling"
    ]
  },
  {
    id: "event",
    title: "Event Setup",
    icon: Calendar,
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    description: "Experience unforgettable moments with our expert event setup. We craft intelligent and captivating environments that spark meaningful connections.",
    features: [
      "Stage design & construction",
      "Audio visual setup",
      "Lighting & atmosphere"
    ]
  },
  {
    id: "carpentry",
    title: "Carpentry & Build",
    icon: Hammer,
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    description: "Expert craftsmanship meets innovative design. Our skilled carpenters and builders create stunning custom structures that bring your vision to life.",
    features: [
      "Custom structures & displays",
      "Quality finishing work",
      "Installation & maintenance"
    ]
  },
  {
    id: "interior",
    title: "Interior Design",
    icon: Palette,
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    description: "Transform your space into an unforgettable experience. Our expert designers craft unique environments that touch hearts and minds, tailored to your vision.",
    features: [
      "Space planning & design",
      "Color schemes & materials",
      "Complete fit-out services"
    ]
  },
  {
    id: "visual",
    title: "Visual Merchandising",
    icon: Store,
    image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    description: "Create captivating displays where art meets technology. Our bespoke visual merchandising solutions blend style and innovation for unforgettable experiences.",
    features: [
      "Window display design",
      "Product presentation",
      "Seasonal campaigns"
    ]
  },
  {
    id: "museum",
    title: "Museum & Expo",
    icon: Landmark,
    image: "https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    description: "Transform exhibitions with cutting-edge technology and sustainable design. We create immersive experiences that spark connection and discovery.",
    features: [
      "Interactive displays",
      "Digital integration",
      "Educational environments"
    ]
  }
];

export default function Services() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[hsl(var(--charcoal))] mb-6">
            Our Premium Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From exhibition design to complete event management, we deliver exceptional experiences 
            that elevate your brand and captivate your audience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <Card key={service.id} className="service-card overflow-hidden shadow-lg border-0">
                <div className="relative">
                  <img 
                    src={service.image}
                    alt={`${service.title} Service`}
                    className="w-full h-64 object-cover"
                  />
                </div>
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    <IconComponent className="text-primary h-6 w-6 mr-3" />
                    <h3 className="text-2xl font-bold text-[hsl(var(--charcoal))]">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-600">
                        <CheckCircle className="text-primary h-4 w-4 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button 
                    variant="link" 
                    onClick={scrollToContact}
                    className="text-primary hover:text-secondary p-0 h-auto font-semibold"
                  >
                    Learn More →
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
