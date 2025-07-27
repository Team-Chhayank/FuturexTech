import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Building2 } from "lucide-react";
import { Link, useLocation } from "wouter";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();

  const scrollToSection = (sectionId: string) => {
    if (location !== "/") {
      window.location.href = `/#${sectionId}`;
      return;
    }
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  const navLinks = [
    { name: "Home", id: "home", type: "scroll" },
    { name: "Services", id: "/services", type: "link" },
    { name: "Portfolio", id: "portfolio", type: "scroll" },
    { name: "Testimonials", id: "testimonials", type: "scroll" },
    { name: "Contact", id: "contact", type: "scroll" },
  ];

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-primary flex items-center">
              <Building2 className="mr-2 h-8 w-8" />
              ExhibitPro
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              link.type === "link" ? (
                <Link
                  key={link.id}
                  href={link.id}
                  className="text-gray-700 hover:text-primary transition-colors"
                >
                  {link.name}
                </Link>
              ) : (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="text-gray-700 hover:text-primary transition-colors"
                >
                  {link.name}
                </button>
              )
            ))}
            <Button 
              onClick={() => scrollToSection("contact")}
              className="bg-primary hover:bg-primary/90"
            >
              Get Quote
            </Button>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col space-y-4 mt-8">
                  {navLinks.map((link) => (
                    link.type === "link" ? (
                      <Link
                        key={link.id}
                        href={link.id}
                        onClick={() => setIsOpen(false)}
                        className="text-left text-lg text-gray-700 hover:text-primary transition-colors py-2"
                      >
                        {link.name}
                      </Link>
                    ) : (
                      <button
                        key={link.id}
                        onClick={() => scrollToSection(link.id)}
                        className="text-left text-lg text-gray-700 hover:text-primary transition-colors py-2"
                      >
                        {link.name}
                      </button>
                    )
                  ))}
                  <Button 
                    onClick={() => scrollToSection("contact")}
                    className="bg-primary hover:bg-primary/90 mt-4"
                  >
                    Get Quote
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
