const TechStack = () => {
  const technologies = [
    { 
      name: "N8N", 
      logo: "https://n8n.io/favicon.ico",
      category: "Automation"
    },
    { 
      name: "Go High Level", 
      logo: "https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48175265739/original/PAUWak17_5otrZlX-2umd5Eisu-X_cq0fw.jpg",
      category: "CRM"
    },
    { 
      name: "Zapier", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Zapier_logo.svg",
      category: "Automation"
    },
    { 
      name: "Make.com", 
      logo: "https://www.make.com/favicon.ico",
      category: "Automation"
    },
    { 
      name: "WordPress", 
      logo: "https://wordpress.org/favicon.ico",
      category: "CMS"
    },
    { 
      name: "HTML", 
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      category: "Frontend"
    },
    { 
      name: "CSS", 
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      category: "Frontend"
    },
    { 
      name: "JavaScript", 
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      category: "Frontend"
    },
    { 
      name: "React", 
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      category: "Frontend"
    },
    { 
      name: "ServiceNow", 
      logo: "https://www.servicenow.com/favicon.ico",
      category: "ITSM"
    },
    { 
      name: "Jira", 
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg",
      category: "Project Management"
    },
    { 
      name: "GitHub", 
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
      category: "Version Control"
    },
  ];

  return (
    <section id="tech-stack" className="py-20 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 animate-fade-in">
          TECH STACK
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-8">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="group flex flex-col items-center justify-center p-6 rounded-lg bg-card border border-border hover:border-primary transition-all duration-300 hover:scale-110 hover:shadow-lg animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 mb-4 flex items-center justify-center">
                <img
                  src={tech.logo}
                  alt={`${tech.name} logo`}
                  className="w-full h-full object-contain transition-transform duration-300 group-hover:rotate-12"
                  onError={(e) => {
                    e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(tech.name)}&background=random&size=64`;
                  }}
                />
              </div>
              <h3 className="text-sm font-semibold text-center mb-1">{tech.name}</h3>
              <p className="text-xs text-muted-foreground text-center">{tech.category}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
