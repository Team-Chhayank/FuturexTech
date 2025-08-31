import { Button } from "@/components/ui/button";

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')"
        }}
      />
      <div className="absolute inset-0 hero-overlay" />
      
      <div className="relative z-10 text-center text-white max-w-5xl mx-auto px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
          We bring ideas to <span className="text-secondary italic">LIVE</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 opacity-90 animate-slide-up">
          Your trusted partner for unforgettable exhibition experiences. From concept to completion, 
          we craft extraordinary events that captivate and inspire.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
          <Button 
            onClick={() => scrollToSection("services")}
            className="bg-secondary hover:bg-secondary/90 text-white px-8 py-4 text-lg font-semibold h-auto"
          >
            Explore Our Services
          </Button>
          <Button 
            variant="outline"
            onClick={() => scrollToSection("contact")}
            className="border-2 border-white hover:bg-white text-primary hover:text-primary px-8 py-4 text-lg font-semibold h-auto"
          >
            Start Your Project
          </Button>
        </div>
      </div>
    </section>
  );
}
