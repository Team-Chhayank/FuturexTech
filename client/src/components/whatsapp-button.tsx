import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function WhatsAppButton() {
  return (
    <Button
      asChild
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white w-14 h-14 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-50 animate-float"
    >
      <a
        href="https://wa.me/971545321419?text=Hello%2C%20I%27m%20interested%20in%20your%20exhibition%20services."
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-14 h-14"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
    </Button>
  );
}
