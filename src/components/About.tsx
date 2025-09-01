import { GraduationCap, Target, Code, Brain } from "lucide-react";
import { Card } from "@/components/ui/card";


const About = () => {
  const education = [
    {
      degree: "B.Tech in Electronics and Communication Engineering",
      institution: "VIT University",
      period: "2022 - 2026",
      grade: "CGPA: 8.58/10",
      description: "Focusing on software development, data structures, and emerging technologies."
    },
    {
      degree: "Higher Secondary Education (12th)",
      institution: "CBSE Board",
      period: "2022",
      grade: "87.2%",
      description: "Mathematics, Physics, Chemistry"
    },
    {
      degree: "Secondary Education (10th)",
      institution: "CBSE Board", 
      period: "2020",
      grade: "94%",
      description: "All subjects with distinction"
    }
  ];

  const highlights = [
    {
      icon: Code,
      title: "Full-Stack Development",
      description: "Proficient in MERN stack with hands-on experience building scalable web applications"
    },
    {
      icon: Brain,
      title: "AI & Machine Learning",
      description: "Passionate about AI technologies, working on projects involving ML models and data analysis"
    },
    {
      icon: Target,
      title: "Problem Solving",
      description: "Strong analytical skills with a focus on creating efficient and user-friendly solutions"
    }
  ];

  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="heading-lg text-foreground mb-4">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A passionate developer driven by curiosity and the desire to create meaningful digital experiences
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Profile Section */}
          <div className="space-y-6">
            <h3 className="heading-md text-foreground mb-6">
              Hello! I'm Ayush Tiwari
            </h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I'm a passionate software developer currently pursuing my B.Tech in Electronics and Communication Engineering at VIT University. My journey in technology began with curiosity about how things work, which evolved into a deep passion for creating digital solutions.
              </p>
              <p>
                With a strong foundation in the MERN stack and growing expertise in AI/ML, I enjoy tackling complex problems and turning ideas into reality. I believe in writing clean, efficient code and creating user experiences that make a difference.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or learning about the latest developments in artificial intelligence and web development.
              </p>
            </div>
          </div>

          {/* Highlights */}
          <div className="space-y-6">
            {highlights.map((highlight, index) => (
              <Card key={index} className="p-6 gradient-card hover-lift">
                <div className="flex items-start space-x-4">
                  <div className="p-3 gradient-primary rounded-lg">
                    <highlight.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-2">
                      {highlight.title}
                    </h4>
                    <p className="text-muted-foreground">
                      {highlight.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Education Timeline */}
        <div>
          <h3 className="heading-md text-center text-foreground mb-12">
            Education Journey
          </h3>
          <div className="space-y-8">
            {education.map((edu, index) => (
              <Card key={index} className="p-6 hover-lift gradient-card">
                <div className="flex items-start space-x-4">
                  <div className="p-3 gradient-primary rounded-lg flex-shrink-0">
                    <GraduationCap className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                      <h4 className="text-lg font-semibold text-foreground">
                        {edu.degree}
                      </h4>
                      <span className="text-primary font-medium">
                        {edu.grade}
                      </span>
                    </div>
                    <p className="text-muted-foreground font-medium mb-2">
                      {edu.institution} • {edu.period}
                    </p>
                    <p className="text-muted-foreground">
                      {edu.description}
                    </p>
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

export default About;