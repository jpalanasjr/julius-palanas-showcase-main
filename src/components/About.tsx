import Profile from "@/Projects/Profile - Copy.png";
const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              ABOUT
            </h2>
            
            <p className="text-foreground/90 leading-relaxed mb-6">
              Dedicated and customer-focused Software Support Engineer with over 3 years of experience 
              providing technical assistance, troubleshooting software issues, and ensuring smooth product 
              functionality. Skilled in handling support tickets, testing software releases, and collaborating 
              with development teams to resolve bugs efficiently. Adept at working in fast-paced environments 
              while maintaining excellent communication and problem-solving skills.
            </p>

            
          </div>

          {/* Right Image */}
          <div className="relative animate-scale-in">
            <div className="aspect-square rounded-lg overflow-hidden bg-secondary">
              <img
                src= {Profile}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
