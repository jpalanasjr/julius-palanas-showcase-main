const Services = () => {
  const skills = [
    { name: "Technical Support", level: 95 },
    { name: "Software Testing", level: 90 },
    { name: "Bug Reporting", level: 88 },
    { name: "CRM Systems (Jira, ServiceNow)", level: 85 },
    { name: "Web Development (React/Next.js)", level: 75 },
    { name: "Automation", level: 90 },
  ];

  const languages = [
    { name: "English", level: 95 },
    { name: "Filipino", level: 100 },
  ];

  return (
    <section id="services" className="py-20 bg-card">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 animate-fade-in">
          SKILLS & EXPERTISE
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Technical Skills */}
          <div className="space-y-6 animate-fade-in">
            <h3 className="text-xl font-semibold mb-6 text-primary">Technical Skills</h3>
            {skills.map((skill, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-foreground/80">{skill.name}</span>
                  <span className="text-muted-foreground">{skill.level}%</span>
                </div>
                <div className="h-2 bg-secondary rounded-full overflow-hidden">
                  <div
                    className="h-full bg-primary rounded-full transition-all duration-1000"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          {/* Languages */}
          <div className="space-y-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-xl font-semibold mb-6 text-primary">Languages</h3>
            {languages.map((lang, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-foreground/80">{lang.name}</span>
                  <span className="text-muted-foreground">{lang.level}%</span>
                </div>
                <div className="h-2 bg-secondary rounded-full overflow-hidden">
                  <div
                    className="h-full bg-primary rounded-full transition-all duration-1000"
                    style={{ width: `${lang.level}%` }}
                  ></div>
                </div>
              </div>
            ))}

            <div className="mt-12 pt-8 border-t border-border">
              <h3 className="text-xl font-semibold mb-4 text-primary">Personal Skills</h3>
              <p className="text-foreground/80">
                Strong communicator • Team player • Customer-first mindset • Quick learner • 
                Passionate about technology and continuous improvement
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
