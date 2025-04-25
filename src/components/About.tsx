
import { Award, Code, Palette } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-playfair font-bold text-center mb-12">About Me</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center mx-auto mb-4">
              <Code className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-bold mb-2">Frontend Development</h3>
            <p className="text-gray-600">Creating responsive and interactive web applications with modern technologies.</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center mx-auto mb-4">
              <Palette className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-bold mb-2">Graphics Design</h3>
            <p className="text-gray-600">Designing compelling visual experiences that communicate and inspire.</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center mx-auto mb-4">
              <Award className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-bold mb-2">Experience</h3>
            <p className="text-gray-600">Years of experience delivering high-quality digital solutions.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
