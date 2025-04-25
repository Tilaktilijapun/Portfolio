
import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center pt-16 bg-black">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-playfair font-bold mb-6 animate-neon-pulse text-white">
            Frontend Developer & <br />
            Graphics Designer
          </h1>
          <p className="text-lg md:text-xl text-gray-400 mb-8 animate-slide-in">
            Hi, I'm Tilak Tilija Pun. I craft beautiful web experiences and create stunning visual designs.
          </p>
          <div className="flex gap-4 justify-center mb-12 animate-slide-in">
            <Button 
              variant="default" 
              className="bg-primary hover:bg-primary/80 text-white shadow-lg shadow-primary/25"
              asChild
            >
              <a href="#portfolio">View My Work</a>
            </Button>
            <Button 
              variant="outline" 
              className="border-primary text-primary hover:bg-primary/10"
              asChild
            >
              <a href="#contact">Get in Touch</a>
            </Button>
          </div>
          <div className="flex gap-6 justify-center animate-fade-in">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white hover:text-primary transition-colors"
            >
              <Github className="h-6 w-6" />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white hover:text-primary transition-colors"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a 
              href="mailto:contact@example.com" 
              className="text-white hover:text-primary transition-colors"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
