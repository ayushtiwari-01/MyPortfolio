import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("frontend");

  const skillCategories = {
    frontend: {
      title: "Frontend Development",
      skills: [
        { name: "React.js", level: 90, color: "hsl(216 98% 52%)" },
        { name: "TypeScript", level: 85, color: "hsl(216 98% 52%)" },
        { name: "JavaScript", level: 90, color: "hsl(216 98% 52%)" },
        { name: "HTML/CSS", level: 95, color: "hsl(216 98% 52%)" },
        { name: "Tailwind CSS", level: 88, color: "hsl(216 98% 52%)" },
        { name: "Redux", level: 80, color: "hsl(216 98% 52%)" }
      ]
    },
    backend: {
      title: "Backend Development", 
      skills: [
        { name: "Node.js", level: 85, color: "hsl(271 81% 56%)" },
        { name: "Express.js", level: 90, color: "hsl(271 81% 56%)" },
        { name: "REST APIs", level: 88, color: "hsl(271 81% 56%)" },
        { name: "GraphQL", level: 70, color: "hsl(271 81% 56%)" },
        { name: "JWT Authentication", level: 85, color: "hsl(271 81% 56%)" },
        { name: "API Testing", level: 80, color: "hsl(271 81% 56%)" }
      ]
    },
    database: {
      title: "Databases",
      skills: [
        { name: "MongoDB", level: 88, color: "hsl(142 71% 45%)" },
        { name: "MySQL", level: 80, color: "hsl(142 71% 45%)" },
        { name: "PostgreSQL", level: 75, color: "hsl(142 71% 45%)" },
        { name: "Redis", level: 65, color: "hsl(142 71% 45%)" },
        { name: "Database Design", level: 82, color: "hsl(142 71% 45%)" },
        { name: "Query Optimization", level: 70, color: "hsl(142 71% 45%)" }
      ]
    },
    ml: {
      title: "Machine Learning",
      skills: [
        { name: "Python", level: 85, color: "hsl(45 93% 47%)" },
        { name: "TensorFlow", level: 75, color: "hsl(45 93% 47%)" },
        { name: "Scikit-learn", level: 80, color: "hsl(45 93% 47%)" },
        { name: "Pandas", level: 85, color: "hsl(45 93% 47%)" },
        { name: "NumPy", level: 82, color: "hsl(45 93% 47%)" },
        { name: "Data Analysis", level: 78, color: "hsl(45 93% 47%)" }
      ]
    },
    tools: {
      title: "Tools & DevOps",
      skills: [
        { name: "Git", level: 90, color: "hsl(0 72% 51%)" },
        { name: "Docker", level: 70, color: "hsl(0 72% 51%)" },
        { name: "AWS", level: 75, color: "hsl(0 72% 51%)" },
        { name: "Linux", level: 80, color: "hsl(0 72% 51%)" },
        { name: "VS Code", level: 95, color: "hsl(0 72% 51%)" },
        { name: "Postman", level: 88, color: "hsl(0 72% 51%)" }
      ]
    }
  };

  const categories = Object.keys(skillCategories) as (keyof typeof skillCategories)[];

  return (
    <section id="skills" className="py-20 bg-skill-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="heading-lg text-foreground mb-4">Technical Skills</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit for building modern, scalable applications
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`group relative px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 ${
                activeCategory === category
                  ? "gradient-primary text-white shadow-glow"
                  : "bg-white/80 backdrop-blur-sm text-muted-foreground hover:bg-white hover:text-foreground shadow-medium"
              }`}
            >
              <span className="relative z-10">{skillCategories[category].title}</span>
              {activeCategory !== category && (
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              )}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="animate-fade-in">
          <h3 className="text-2xl font-semibold text-foreground mb-8 text-center">
            {skillCategories[activeCategory as keyof typeof skillCategories].title}
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {skillCategories[activeCategory as keyof typeof skillCategories].skills.map((skill, index) => (
              <Card 
                key={index} 
                className="group relative overflow-hidden hover:shadow-xl transition-all duration-500 hover:scale-105 cursor-pointer animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="p-6 relative z-10">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                      {skill.name}
                    </span>
                    <div className="w-2 h-2 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  
                  {/* Skill level indicator bars */}
                  <div className="mt-4 flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <div 
                        key={i}
                        className={`h-1 flex-1 rounded-full transition-all duration-500 ${
                          i < Math.floor(skill.level / 20) 
                            ? 'bg-primary opacity-100' 
                            : 'bg-muted opacity-30'
                        }`}
                        style={{ 
                          transitionDelay: `${index * 0.1 + i * 0.05}s` 
                        }}
                      />
                    ))}
                  </div>
                </div>
                
                {/* Gradient overlay */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                  style={{
                    background: `linear-gradient(135deg, ${skill.color}20, ${skill.color}10)`
                  }}
                />
                
                {/* Animated border */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/30 rounded-lg transition-colors duration-300" />
              </Card>
            ))}
          </div>
        </div>

        {/* Additional Skills */}
        <div className="mt-16 text-center">
          <h4 className="text-xl font-semibold text-foreground mb-8">
            Additional Technologies & Concepts
          </h4>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Responsive Design", "RESTful APIs", "Microservices", "Agile Development",
              "Test-Driven Development", "CI/CD", "Clean Code", "Data Structures",
              "Algorithms", "Object-Oriented Programming", "Functional Programming"
            ].map((tech, index) => (
              <Badge 
                key={index} 
                variant="outline" 
                className="px-4 py-2 text-sm hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 cursor-pointer hover:scale-105"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;