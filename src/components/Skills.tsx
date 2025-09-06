import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("programming");

  const skillCategories = {
    programming: {
      title: "Programming",
      skills: [
        { name: "Java" },
        { name: "C" },
        { name: "C++" },
        { name: "Python" },
        { name: "JavaScript (ES6+)" }
      ],
    },
    web: {
      title: "Web Development",
      skills: [
        { name: "React.js" },
        { name: "Node.js" },
        { name: "Express.js" },
        { name: "REST APIs" },
        { name: "Supabase" },
        { name: "MongoDB" },
        { name: "SQL" }
      ],
    },
    ui: {
      title: "UI / Styling",
      skills: [
        { name: "HTML5" },
        { name: "CSS3" },
        { name: "Tailwind CSS" },
        { name: "Bootstrap" },
        { name: "Material UI" },
        { name: "Shadcn UI" }
      ],
    },
    ml: {
      title: "Machine Learning",
      skills: [
        { name: "TensorFlow" },
        { name: "Keras" },
        { name: "Neural Networks" },
        { name: "Pandas" },
        { name: "NumPy" }
      ],
    },
    devops: {
      title: "DevOps & Tools",
      skills: [
        { name: "Git" },
        { name: "GitHub" },
        { name: "GitHub Actions" },
        { name: "Postman" },
        { name: "CI/CD" },
        { name: "Agile Development" }
      ],
    },
    cloud: {
      title: "Cloud & Deployment",
      skills: [
        { name: "AWS" },
        { name: "Vercel" },
        { name: "Render" }
      ],
    },
    cs: {
      title: "Core CS",
      skills: [
        { name: "Data Structures and Algorithms" },
        { name: "Object-Oriented Programming" },
        { name: "Computer Networks" },
        { name: "DBMS" }
      ],
    }
  };

  const categories = Object.keys(skillCategories);

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
            {skillCategories[activeCategory].title}
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {skillCategories[activeCategory].skills.map((skill, index) => (
              <Card 
                key={index} 
                className="group relative overflow-hidden hover:shadow-xl transition-all duration-500 hover:scale-105 cursor-pointer animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="p-6 relative z-10">
                  <span className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                    {skill.name}
                  </span>
                </div>
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
              "CI/CD", "Agile Development", "Data Structures", 
              "Algorithms", "Object-Oriented Programming", "Computer Networks", "DBMS"
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
