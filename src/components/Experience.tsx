import { Briefcase, Calendar, TrendingUp } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Experience = () => {
  const experiences = [
    {
      title: "MERN Stack Web Development Intern",
      company: "Ethnus",
      period: "June 2023 - August 2023",
      type: "Internship",
      description: "Developed full-stack web applications using the MERN stack, focusing on performance optimization and security implementation.",
      achievements: [
        "Built 15+ RESTful APIs for various client applications",
        "Reduced unauthorized access by 35% through improved authentication",
        "Improved application load times by 40% through code optimization",
        "Collaborated with senior developers on 3 major client projects"
      ],
      technologies: ["React.js", "Node.js", "MongoDB", "Express.js", "JWT", "Redux"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="heading-lg text-foreground mb-4">Professional Experience</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Practical experience and hands-on learning that shaped my technical skills
          </p>
        </div>

        {/* Professional Experience */}
        <div>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="p-8 hover-lift gradient-card">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                  <div className="flex items-start space-x-4 mb-4 lg:mb-0">
                    <div className="p-3 gradient-primary rounded-lg">
                      <Briefcase className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-foreground mb-1">
                        {exp.title}
                      </h4>
                      <p className="text-primary font-medium text-lg mb-2">
                        {exp.company}
                      </p>
                      <div className="flex items-center text-muted-foreground mb-2">
                        <Calendar className="w-4 h-4 mr-2" />
                        {exp.period}
                      </div>
                      <Badge variant="secondary">{exp.type}</Badge>
                    </div>
                  </div>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {exp.description}
                </p>

                <div className="mb-6">
                  <h5 className="font-semibold text-foreground mb-4 flex items-center">
                    <TrendingUp className="w-5 h-5 mr-2 text-primary" />
                    Key Achievements
                  </h5>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start">
                        <div className="w-2 h-2 gradient-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-muted-foreground">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h5 className="font-semibold text-foreground mb-3">Technologies Used</h5>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, i) => (
                      <Badge key={i} variant="outline">{tech}</Badge>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;