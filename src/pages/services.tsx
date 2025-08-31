import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import WhatsAppButton from "@/components/whatsapp-button";
import { 
  Compass, 
  Calendar, 
  Hammer, 
  Palette, 
  Store, 
  Landmark, 
  CheckCircle, 
  ArrowRight,
  Clock,
  Award,
  Users,
  Target
} from "lucide-react";

const services = [
  {
    id: "exhibition",
    title: "Exhibition Design & Build",
    icon: Compass,
    heroImage: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600",
    shortDescription: "Award-winning exhibition stands that captivate and convert",
    fullDescription: "Step into the exhibition floor with confidence, knowing your stand will shine with our award-winning design and build expertise. We create a perfect blend of artistry, functionality, and professionalism that elevates your brand presence from conceptualization to execution.",
    features: [
      "Custom booth design & conceptualization",
      "3D visualization & virtual walkthroughs", 
      "Professional installation & dismantling",
      "Project management & logistics",
      "Audio-visual integration",
      "Storage & furniture solutions"
    ],
    benefits: [
      "Increased brand visibility and recognition",
      "Higher visitor engagement and lead generation",
      "Professional project execution",
      "Cost-effective solutions"
    ],
    process: [
      "Initial consultation & requirements gathering",
      "Design concept & 3D visualization",
      "Technical drawings & material selection",
      "Manufacturing & quality control",
      "On-site installation & setup",
      "Post-event dismantling & storage"
    ],
    deliveryTime: "2-4 weeks",
    startingPrice: "AED 15,000"
  },
  {
    id: "event",
    title: "Event Setup & Management",
    icon: Calendar,
    heroImage: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600",
    shortDescription: "Complete event solutions that create memorable experiences",
    fullDescription: "Experience unforgettable moments with our expert event setup and management. Our team crafts intelligent and captivating environments that spark meaningful connections and forge lifelong bonds between your brand and audience.",
    features: [
      "Stage design & construction",
      "Audio visual setup & management",
      "Lighting design & atmosphere creation",
      "Registration & reception areas",
      "Catering space arrangement",
      "Security & crowd management"
    ],
    benefits: [
      "Seamless event execution",
      "Enhanced attendee experience",
      "Professional event coordination",
      "Stress-free planning process"
    ],
    process: [
      "Event planning & timeline creation",
      "Venue assessment & layout design",
      "Equipment sourcing & setup",
      "Rehearsals & testing",
      "Live event management",
      "Post-event breakdown & cleanup"
    ],
    deliveryTime: "1-3 weeks",
    startingPrice: "AED 25,000"
  },
  {
    id: "carpentry",
    title: "Carpentry & Custom Build",
    icon: Hammer,
    heroImage: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600",
    shortDescription: "Expert craftsmanship for stunning custom structures",
    fullDescription: "Expert craftsmanship meets innovative design. Our skilled carpenters and builders create stunning custom structures that bring your vision to life with precision, quality, and attention to detail that exceeds industry standards.",
    features: [
      "Custom display structures & showcases",
      "Premium finishing & detailing work",
      "Installation & on-site assembly",
      "Maintenance & repair services",
      "Material sourcing & selection",
      "Quality assurance & testing"
    ],
    benefits: [
      "Unique, custom-built solutions",
      "High-quality craftsmanship",
      "Durable and long-lasting structures",
      "Expert installation services"
    ],
    process: [
      "Design consultation & measurements",
      "Material selection & sourcing",
      "Workshop fabrication & assembly",
      "Quality control & finishing",
      "Delivery & installation",
      "Final inspection & handover"
    ],
    deliveryTime: "2-6 weeks",
    startingPrice: "AED 8,000"
  },
  {
    id: "interior",
    title: "Interior Design & Fit-Out",
    icon: Palette,
    heroImage: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600",
    shortDescription: "Transform spaces into unforgettable experiences",
    fullDescription: "Transform your space into an unforgettable experience. Our expert interior designers craft unique environments that touch hearts and minds, perfectly tailored to your vision and brand identity while creating lasting impressions on visitors.",
    features: [
      "Complete space planning & design",
      "Color schemes & material selection",
      "Furniture sourcing & placement",
      "Lighting design & installation",
      "Complete fit-out services",
      "Project coordination & management"
    ],
    benefits: [
      "Optimized space utilization",
      "Enhanced brand representation",
      "Improved visitor experience",
      "Professional design execution"
    ],
    process: [
      "Space assessment & requirements",
      "Design concept development",
      "Material & furniture selection",
      "Detailed drawings & specifications",
      "Fit-out execution & installation",
      "Final styling & completion"
    ],
    deliveryTime: "3-8 weeks",
    startingPrice: "AED 20,000"
  },
  {
    id: "visual",
    title: "Visual Merchandising & Displays",
    icon: Store,
    heroImage: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600",
    shortDescription: "Captivating displays where art meets technology",
    fullDescription: "Create captivating displays where art meets technology. Our bespoke visual merchandising solutions blend style and innovation to create unforgettable retail experiences that drive engagement and sales.",
    features: [
      "Window display design & setup",
      "Product presentation & styling",
      "Seasonal campaign development",
      "In-store experience design",
      "Digital integration & technology",
      "Brand storytelling through displays"
    ],
    benefits: [
      "Increased customer engagement",
      "Higher conversion rates",
      "Enhanced brand perception",
      "Improved product visibility"
    ],
    process: [
      "Brand analysis & target research",
      "Concept development & visualization",
      "Display creation & production",
      "Installation & arrangement",
      "Performance monitoring",
      "Regular updates & maintenance"
    ],
    deliveryTime: "1-2 weeks",
    startingPrice: "AED 5,000"
  },
  {
    id: "museum",
    title: "Museum & Expo Experiences",
    icon: Landmark,
    heroImage: "https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600",
    shortDescription: "Immersive experiences with cutting-edge technology",
    fullDescription: "Transform museum exhibitions and expo displays with cutting-edge technology and sustainable design. We create immersive experiences that spark connection, discovery, and learning through innovative presentation techniques.",
    features: [
      "Interactive display systems",
      "Digital integration & multimedia",
      "Educational environment design",
      "Accessibility considerations",
      "Sustainable design practices",
      "Visitor journey optimization"
    ],
    benefits: [
      "Enhanced visitor engagement",
      "Educational impact",
      "Technology integration",
      "Sustainable solutions"
    ],
    process: [
      "Content analysis & visitor research",
      "Experience design & flow planning",
      "Technology integration & testing",
      "Interactive element development",
      "Installation & commissioning",
      "Staff training & handover"
    ],
    deliveryTime: "4-12 weeks",
    startingPrice: "AED 35,000"
  }
];

export default function Services() {
  const scrollToContact = () => {
    window.location.href = "/#contact";
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 bg-gradient-to-br from-primary to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Our Premium Services
            </h1>
            <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto mb-8">
              From exhibition design to complete event management, we deliver exceptional experiences 
              that elevate your brand and captivate your audience.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="secondary" className="px-4 py-2 text-lg">
                <Award className="w-4 h-4 mr-2" />
                Award Winning
              </Badge>
              <Badge variant="outline" className="px-4 py-2 text-lg border-white text-white">
                <Users className="w-4 h-4 mr-2" />
                20+ Years Experience
              </Badge>
              <Badge variant="outline" className="px-4 py-2 text-lg border-white text-white">
                <Target className="w-4 h-4 mr-2" />
                500+ Projects
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              const isEven = index % 2 === 0;
              
              return (
                <div key={service.id} className={`grid lg:grid-cols-2 gap-12 items-center ${!isEven ? 'lg:grid-flow-col-dense' : ''}`}>
                  <div className={`${!isEven ? 'lg:col-start-2' : ''}`}>
                    <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                      <img 
                        src={service.heroImage}
                        alt={`${service.title} Service`}
                        className="w-full h-96 object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      <div className="absolute bottom-6 left-6 text-white">
                        <div className="flex items-center mb-2">
                          <IconComponent className="w-6 h-6 mr-2" />
                          <Badge variant="secondary" className="bg-secondary/90">
                            Starting from {service.startingPrice}
                          </Badge>
                        </div>
                        <div className="flex items-center text-sm opacity-90">
                          <Clock className="w-4 h-4 mr-2" />
                          Delivery: {service.deliveryTime}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className={`${!isEven ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                    <div className="flex items-center mb-4">
                      <IconComponent className="text-primary h-8 w-8 mr-3" />
                      <h2 className="text-3xl md:text-4xl font-bold text-[hsl(var(--charcoal))]">
                        {service.title}
                      </h2>
                    </div>
                    
                    <p className="text-xl text-gray-600 mb-6">
                      {service.fullDescription}
                    </p>

                    {/* Features */}
                    <div className="mb-8">
                      <h3 className="text-lg font-semibold text-[hsl(var(--charcoal))] mb-4">What's Included:</h3>
                      <div className="grid md:grid-cols-2 gap-2">
                        {service.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center text-gray-600">
                            <CheckCircle className="text-primary h-4 w-4 mr-2 flex-shrink-0" />
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Benefits */}
                    <div className="mb-8">
                      <h3 className="text-lg font-semibold text-[hsl(var(--charcoal))] mb-4">Key Benefits:</h3>
                      <div className="flex flex-wrap gap-2">
                        {service.benefits.map((benefit, idx) => (
                          <Badge key={idx} variant="outline" className="px-3 py-1">
                            {benefit}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button 
                        onClick={scrollToContact}
                        className="bg-primary hover:bg-primary/90 px-8 py-3 text-lg font-semibold h-auto"
                      >
                        Get Quote
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                      <Button 
                        variant="outline"
                        onClick={scrollToContact}
                        className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 text-lg font-semibold h-auto"
                      >
                        Learn More
                      </Button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[hsl(var(--charcoal))] mb-6">
              Our Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From initial consultation to final delivery, we follow a proven process that ensures 
              exceptional results and client satisfaction.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Consultation",
                description: "We begin with understanding your vision, requirements, and objectives",
                icon: Users
              },
              {
                step: "02", 
                title: "Design & Planning",
                description: "Our team creates detailed designs and comprehensive project plans",
                icon: Compass
              },
              {
                step: "03",
                title: "Production",
                description: "Expert craftsmen bring your vision to life with precision and quality",
                icon: Hammer
              },
              {
                step: "04",
                title: "Installation",
                description: "Professional setup and installation at your chosen venue",
                icon: Target
              },
              {
                step: "05",
                title: "Support",
                description: "Ongoing support throughout your event and beyond",
                icon: CheckCircle
              },
              {
                step: "06",
                title: "Follow-up",
                description: "Post-event analysis and future planning discussions",
                icon: Award
              }
            ].map((process, index) => {
              const IconComponent = process.icon;
              return (
                <Card key={index} className="relative overflow-hidden shadow-lg border-0 hover:shadow-xl transition-shadow">
                  <CardContent className="p-8">
                    <div className="absolute top-4 right-4 text-6xl font-bold text-gray-100">
                      {process.step}
                    </div>
                    <IconComponent className="text-primary h-12 w-12 mb-4" />
                    <h3 className="text-xl font-bold text-[hsl(var(--charcoal))] mb-3">
                      {process.title}
                    </h3>
                    <p className="text-gray-600">
                      {process.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-primary to-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl opacity-90 mb-8">
            Let's discuss how we can bring your vision to life with our premium exhibition and event services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={scrollToContact}
              className="bg-secondary hover:bg-secondary/90 text-white px-8 py-4 text-lg font-semibold h-auto"
            >
              Get Free Consultation
            </Button>
            <Button 
              variant="outline"
              onClick={() => window.location.href = "/#portfolio"}
              className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg font-semibold h-auto"
            >
              View Our Work
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    
    </div>
  );
}