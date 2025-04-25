
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-sm z-50 border-b border-neon/20">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="text-xl font-playfair font-bold text-white animate-neon-pulse">
          Tilak.dev
        </Link>
        <div className="hidden md:flex gap-8">
          <Link to="/movies" className="text-white hover:text-primary transition-colors">Movies</Link>
          <a href="#about" className="text-white hover:text-primary transition-colors">About</a>
          <a href="#skills" className="text-white hover:text-primary transition-colors">Skills</a>
          <a href="#portfolio" className="text-white hover:text-primary transition-colors">Portfolio</a>
          <a href="#contact" className="text-white hover:text-primary transition-colors">Contact</a>
        </div>
        <Button variant="ghost" size="icon" className="md:hidden text-white hover:text-primary">
          <Menu className="h-6 w-6" />
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
