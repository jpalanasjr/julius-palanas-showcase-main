import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import StackingCard from "./StackingCard";

const Portfolio = () => {
  const projects = [
    {
      title: "Support Ticket Management System",
      description: "Developed a comprehensive ticket tracking system using React and Jira API integration for efficient customer support management.",
      tags: ["React", "Jira API", "TypeScript"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop",
    },
    {
      title: "QA Testing Dashboard",
      description: "Created an automated testing dashboard to track bug reports, test cases, and software quality metrics across multiple projects.",
      tags: ["Next.js", "Testing", "Analytics"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop",
    },
    {
      title: "Customer Support Portal",
      description: "Built a self-service customer portal with knowledge base, live chat integration, and ticket submission functionality.",
      tags: ["React", "CRM", "REST API"],
      image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&auto=format&fit=crop",
    },
    {
      title: "IT Service Desk Application",
      description: "Designed and implemented an internal service desk application for handling IT requests and incident management.",
      tags: ["JavaScript", "ServiceNow", "Office 365"],
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&auto=format&fit=crop",
    },
  ];

  return (
    <section id="portfolio" className="py-20 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 animate-fade-in">
            PORTFOLIO
          </h2>

          <div className="relative" style={{ paddingBottom: `${projects.length * 100}px` }}>
            {projects.map((project, index) => (
              <StackingCard key={index} index={index}>
                <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 group ripple cursor-pointer">
                  <div className="relative h-48 overflow-hidden bg-muted">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center gap-4 pb-4">
                      <button className="p-2 bg-card rounded-full hover:bg-primary hover:text-primary-foreground transition-colors">
                        <Github className="h-5 w-5" />
                      </button>
                      <button className="p-2 bg-card rounded-full hover:bg-primary hover:text-primary-foreground transition-colors">
                        <ExternalLink className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <Badge key={tagIndex} variant="secondary">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </Card>
              </StackingCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
