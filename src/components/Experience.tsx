import { Briefcase, GraduationCap } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Software Support Engineer II",
      company: "Emapta",
      period: "April 2025 – Present",
      responsibilities: [
        "Provide Tier 2 software support to clients through Jira",
        "Conduct software testing on fresh releases based on QA test cases",
        "Verify bug resolutions and communicate results to development teams",
      ],
    },
    {
      title: "Software Support Representative",
      company: "Tyler Technologies",
      period: "February 2024 – April 2025",
      responsibilities: [
        "Guided clients on software functionality through CRM and Jira",
        "Created detailed support tickets and bug reports",
        "Delivered accurate and timely resolutions",
      ],
    },
    {
      title: "IT Service Desk Analyst",
      company: "Unisys",
      period: "January 2023 – February 2024",
      responsibilities: [
        "Provided technical support for Office 365 and infrastructure",
        "Logged incidents in ServiceNow",
        "Ensured efficient problem resolution",
      ],
    },
    {
      title: "Back Office",
      company: "Everise",
      period: "February 2022 – January 2023",
      responsibilities: [
        "Accurately processed data into internal systems",
        "Maintained data integrity",
      ],
    },
    {
      title: "Customer Service Chat Representative",
      company: "TeleTech",
      period: "March 2021 – January 2022",
      responsibilities: [
        "Handled inbound chat support for customers",
        "Ensured customer satisfaction",
      ],
    },
  ];

  const education = [
    {
      degree: "Bachelor of Science in Information Technology",
      school: "STI College Muñoz",
      period: "December 2024",
    },
    {
      degree: "High School Diploma",
      school: "Roosevelt College Cubao",
      period: "March 2010",
    },
  ];

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Experience Column */}
          <div className="animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-12">
              EXPERIENCE
            </h2>
            
            <div className="space-y-8 relative before:absolute before:left-0 before:top-0 before:bottom-0 before:w-px before:bg-border">
              {experiences.map((exp, index) => (
                <div key={index} className="relative pl-8">
                  <div className="absolute left-0 top-2 w-3 h-3 rounded-full bg-primary -translate-x-1/2"></div>
                  <div className="flex items-start gap-3 mb-2">
                    <Briefcase className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-lg text-foreground">{exp.company}</h3>
                      <p className="text-primary font-medium">{exp.title}</p>
                      <p className="text-sm text-muted-foreground mb-3">{exp.period}</p>
                    </div>
                  </div>
                  <ul className="space-y-1 text-sm text-foreground/80">
                    {exp.responsibilities.map((resp, idx) => (
                      <li key={idx}>• {resp}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education Column */}
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h2 className="text-3xl md:text-4xl font-bold mb-12">
              EDUCATION
            </h2>
            
            <div className="space-y-8">
              {education.map((edu, index) => (
                <div key={index} className="border-l-2 border-primary pl-6 py-4">
                  <div className="flex items-start gap-3">
                    <GraduationCap className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-lg text-foreground mb-1">
                        {edu.degree}
                      </h3>
                      <p className="text-foreground/80">{edu.school}</p>
                      <p className="text-sm text-muted-foreground mt-2">{edu.period}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Technical Skills Summary */}
            <div className="mt-12 p-6 bg-card rounded-lg border border-border">
              <h3 className="text-xl font-bold mb-4 text-primary">Technical Proficiency</h3>
              <div className="space-y-3 text-sm">
                <div>
                  <span className="font-semibold text-foreground">Languages & Frameworks:</span>
                  <p className="text-foreground/80">HTML, CSS, JavaScript (React / Next.js)</p>
                </div>
                <div>
                  <span className="font-semibold text-foreground">Tools:</span>
                  <p className="text-foreground/80">Jira, ServiceNow, CRM systems, GitHub</p>
                </div>
                <div>
                  <span className="font-semibold text-foreground">Automation:</span>
                  <p className="text-foreground/80">Zapier, N8n,Go High level, Make</p>
                </div>
                <div>
                  <span className="font-semibold text-foreground">Other:</span>
                  <p className="text-foreground/80">QA Testing, Bug Reporting, Customer Support</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
