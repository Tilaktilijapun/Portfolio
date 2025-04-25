
import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center pt-16 bg-gradient-to-b from-secondary to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-playfair font-bold mb-6 animate-fade-in">
            Frontend Developer & <br />
            Graphics Designer
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 animate-slide-in">
            Hi, I'm Tilak Tilija Pun. I craft beautiful web experiences and create stunning visual designs.
          </p>
          <div className="flex gap-4 justify-center mb-12 animate-slide-in">
            <Button variant="default" asChild>
              <a href="#portfolio">View My Work</a>
            </Button>
            <Button variant="outline" asChild>
              <a href="#contact">Get in Touch</a>
            </Button>
          </div>
          <div className="flex gap-6 justify-center animate-fade-in">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
              <Github className="h-6 w-6" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
              <Linkedin className="h-6 w-6" />
            </a>
            <a href="mailto:contact@example.com" className="hover:text-primary transition-colors">
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
