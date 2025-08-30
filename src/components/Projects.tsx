import { ExternalLink, Github, Brain, TrendingUp, Globe } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "AI-Assisted ADHD Detection",
      description: "Advanced machine learning system for early ADHD detection using behavioral pattern analysis and ensemble methods.",
      longDescription: "This comprehensive system combines multiple ML algorithms to analyze behavioral patterns and provide accurate ADHD detection. Features include real-time data processing, interactive dashboards, and detailed analysis reports.",
      image: "🧠",
      category: "Machine Learning",
      role: "Full-Stack Developer & ML Engineer",
      period: "Jan 2024 - Apr 2024",
      technologies: ["Python", "TensorFlow", "React.js", "Flask", "Pandas", "Scikit-learn"],
      metrics: [
        { label: "Accuracy", value: "87%" },
        { label: "Dataset Size", value: "10K+ samples" },
        { label: "Processing Time", value: "<2s" }
      ],
      features: [
        "Real-time behavioral analysis",
        "Interactive data visualization", 
        "Ensemble ML models",
        "Healthcare professional dashboard",
        "Detailed reporting system",
        "Achieved 87% accuracy in ADHD detection using ensemble methods",
        "Processed and analyzed dataset of 10,000+ behavioral samples"
      ],
      github: "https://github.com/ayushtiwari-01/adhd-detection",
      demo: "https://adhd-detection-demo.vercel.app",
      status: "Completed"
    },
    {
      id: 2, 
      title: "Stock Price Prediction (LSTM)",
      description: "Sophisticated LSTM neural network model for predicting stock prices with advanced time-series analysis and real-time updates.",
      longDescription: "A comprehensive stock prediction platform using Long Short-Term Memory networks. Incorporates multiple technical indicators, market sentiment analysis, and provides interactive charts with prediction confidence intervals.",
      image: "📈",
      category: "Data Science",
      role: "Data Scientist & Developer",
      period: "Sep 2023 - Dec 2023",
      technologies: ["Python", "TensorFlow", "Keras", "Matplotlib", "Yahoo Finance API", "Streamlit"],
      metrics: [
        { label: "Prediction Accuracy", value: "82%" },
        { label: "Data Points", value: "5+ years" },
        { label: "Update Frequency", value: "Real-time" }
      ],
      features: [
        "LSTM neural network architecture",
        "Multi-timeframe analysis",
        "Technical indicator integration",
        "Real-time price updates",
        "Interactive prediction charts",
        "Developed LSTM model with 82% prediction accuracy",
        "Analyzed 5+ years of historical stock data"
      ],
      github: "https://github.com/ayushtiwari-01/stock-prediction-lstm",
      demo: "https://stock-predictor-lstm.herokuapp.com",
      status: "Completed"
    },
    {
      id: 3,
      title: "Full-Stack Blog Application",
      description: "Modern, scalable blog platform with advanced content management, user authentication, and performance optimization.",
      longDescription: "A feature-rich blog application built with the MERN stack. Includes advanced text editing, image uploads, comment system, user profiles, and admin dashboard with comprehensive analytics.",
      image: "📝",
      category: "Full-Stack Web",
      role: "Full-Stack Developer",
      period: "May 2023 - Jul 2023",
      technologies: ["React.js", "Node.js", "MongoDB", "Express.js", "JWT", "AWS", "Docker"],
      metrics: [
        { label: "Performance Score", value: "95/100" },
        { label: "Load Time", value: "<1.2s" },
        { label: "Uptime", value: "99.9%" }
      ],
      features: [
        "Rich text editor with media support",
        "JWT-based authentication",
        "Comment system with moderation",
        "User profile management",
        "Admin dashboard with analytics",
        "SEO optimization",
        "Built complete CRUD functionality for posts and comments",
        "Optimized database queries reducing response time by 50%"
      ],
      github: "https://github.com/ayushtiwari-01/fullstack-blog",
      demo: "https://blog-app-mern.vercel.app",
      status: "Live"
    }
  ];

  const ProjectCard = ({ project }: { project: typeof projects[0] }) => (
    <Card className="overflow-hidden hover-lift gradient-card group">
      {/* Project Header */}
      <div className="p-6 pb-4">
        <div className="flex items-start justify-between mb-4">
          <div className="text-4xl mb-4">{project.image}</div>
          <Badge 
            variant={project.status === "Live" ? "default" : "secondary"}
            className="ml-2"
          >
            {project.status}
          </Badge>
        </div>
        
        <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        
        <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
          {project.description}
        </p>

        <div className="flex flex-col gap-2 mb-4">
          <Badge variant="outline">{project.category}</Badge>
          <div className="text-sm text-muted-foreground">
            <span className="font-medium text-primary">{project.role}</span> • {project.period}
          </div>
        </div>
      </div>

      {/* Metrics */}
      <div className="px-6 pb-4">
        <div className="grid grid-cols-3 gap-4 mb-4">
          {project.metrics.map((metric, index) => (
            <div key={index} className="text-center">
              <div className="text-lg font-bold text-primary">{metric.value}</div>
              <div className="text-xs text-muted-foreground">{metric.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Technologies */}
      <div className="px-6 pb-4">
        <h4 className="font-medium text-foreground mb-2 text-sm">Technologies</h4>
        <div className="flex flex-wrap gap-1">
          {project.technologies.map((tech, index) => (
            <Badge key={index} variant="secondary" className="text-xs">
              {tech}
            </Badge>
          ))}
        </div>
      </div>

      {/* Key Features */}
      <div className="px-6 pb-4">
        <h4 className="font-medium text-foreground mb-2 text-sm">Key Features & Achievements</h4>
        <ul className="space-y-1">
          {project.features.slice(0, 4).map((feature, index) => (
            <li key={index} className="flex items-start text-xs">
              <div className="w-1 h-1 gradient-primary rounded-full mt-1.5 mr-2 flex-shrink-0"></div>
              <span className="text-muted-foreground">{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Action Buttons */}
      <div className="px-6 pb-6">
        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="flex-1" asChild>
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              <Github className="w-4 h-4 mr-2" />
              Code
            </a>
          </Button>
          <Button variant="default" size="sm" className="flex-1" asChild>
            <a href={project.demo} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="w-4 h-4 mr-2" />
              Demo
            </a>
          </Button>
        </div>
      </div>
    </Card>
  );

  return (
    <section id="projects" className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="heading-lg text-foreground mb-4">Projects Portfolio</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive showcase of innovative solutions combining modern technologies with real-world applications
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>


      </div>
    </section>
  );
};

export default Projects;