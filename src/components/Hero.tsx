import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail} from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen relative overflow-hidden bg-card flex items-center">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-transparent z-0"></div>
      
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1920&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      ></div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-2 animate-fade-in">
            JULIUS
          </h1>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <span className="text-foreground">PALANAS</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Software Support Engineer/Automation Specialist
          </p>
          
          <div className="flex gap-4 mb-12 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <Button variant="outline" size="lg" className="ripple">
              Resume
            </Button>
            <Button variant="outline" size="lg" className="ripple">
              Portfolio
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <a href="mailto:jpalanasjr@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
              <Mail className="h-5 w-5" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Github className="h-5 w-5" />
            </a>
           
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
