import { Building2, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-[hsl(var(--charcoal))] text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <Building2 className="text-secondary h-8 w-8 mr-2" />
              <span className="text-2xl font-bold">ExhibitPro</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Your trusted partner for unforgettable exhibition experiences. From concept to completion, 
              we craft extraordinary events that captivate and inspire.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-secondary transition-colors">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-secondary transition-colors">
                <Twitter className="h-4 w-4" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-secondary transition-colors">
                <Linkedin className="h-4 w-4" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-secondary transition-colors">
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <button 
                  onClick={() => scrollToSection("services")}
                  className="hover:text-secondary transition-colors text-left"
                >
                  Exhibition Design
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("services")}
                  className="hover:text-secondary transition-colors text-left"
                >
                  Event Setup
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("services")}
                  className="hover:text-secondary transition-colors text-left"
                >
                  Carpentry & Build
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("services")}
                  className="hover:text-secondary transition-colors text-left"
                >
                  Interior Design
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("services")}
                  className="hover:text-secondary transition-colors text-left"
                >
                  Visual Merchandising
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("services")}
                  className="hover:text-secondary transition-colors text-left"
                >
                  Museum & Expo
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="#" className="hover:text-secondary transition-colors">About Us</a>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("portfolio")}
                  className="hover:text-secondary transition-colors text-left"
                >
                  Portfolio
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("testimonials")}
                  className="hover:text-secondary transition-colors text-left"
                >
                  Testimonials
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("contact")}
                  className="hover:text-secondary transition-colors text-left"
                >
                  Contact
                </button>
              </li>
              <li>
                <a href="#" className="hover:text-secondary transition-colors">Careers</a>
              </li>
              <li>
                <a href="#" className="hover:text-secondary transition-colors">Sustainability</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 ExhibitPro. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-secondary text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-secondary text-sm transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-secondary text-sm transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
