
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-sm z-50 border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <a href="#" className="text-xl font-playfair font-bold">
          Tilak.dev
        </a>
        <div className="hidden md:flex gap-8">
          <a href="#about" className="hover:text-primary transition-colors">About</a>
          <a href="#skills" className="hover:text-primary transition-colors">Skills</a>
          <a href="#portfolio" className="hover:text-primary transition-colors">Portfolio</a>
          <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
        </div>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-6 w-6" />
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
