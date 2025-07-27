import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const projects = [
  {
    id: "edge",
    title: "EDGE",
    category: "Design & Build",
    type: "Technology Showcase",
    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=800"
  },
  {
    id: "drift-x",
    title: "Drift X",
    category: "Event Planning and Setup",
    type: "Automotive Event",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=800"
  },
  {
    id: "clarins",
    title: "Clarins",
    category: "Design & Build", 
    type: "Beauty & Cosmetics",
    image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=800"
  },
  {
    id: "dewa",
    title: "DEWA IBN Batuta Mall",
    category: "Interior Design and Fit-Out",
    type: "Corporate Space",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=800"
  }
];

export default function Portfolio() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="portfolio" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[hsl(var(--charcoal))] mb-6">
            Case Studies: Showcasing Our Impact
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how we've transformed ideas into extraordinary experiences for leading brands and organizations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((project) => (
            <Card 
              key={project.id} 
              className="group relative overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border-0"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image}
                  alt={`${project.title} Case Study`}
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--charcoal))]/80 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-sm opacity-90 mb-2">{project.category}</p>
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-secondary rounded-full mr-2" />
                    <span className="text-sm">{project.type}</span>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            onClick={scrollToContact}
            className="bg-primary hover:bg-primary/90 px-8 py-4 text-lg font-semibold h-auto"
          >
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
}
