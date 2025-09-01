import { ExternalLink, Github, Brain, TrendingUp, Globe, DollarSign, User } from "lucide-react";
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
      period: "Jan 2024 - Present",
      technologies: ["Python", "TensorFlow", "React.js", "Flask", "Pandas", "Scikit-learn"],
      metrics: [
        { label: "Target Accuracy", value: "90%" },
        { label: "Dataset Size", value: "15K+ samples" },
        { label: "Processing Time", value: "<2s" }
      ],
      features: [
        "Real-time behavioral analysis",
        "Interactive data visualization", 
        "Ensemble ML models",
        "Healthcare professional dashboard",
        "Detailed reporting system",
        "Developing advanced ensemble methods for improved accuracy",
        "Expanding dataset with diverse behavioral patterns"
      ],
      github: "/adhd-ongoing",
      demo: "/adhd-ongoing",
      status: "Ongoing"
    },
    {
      id: 2, 
      title: "StockVision - LSTM Price Prediction",
      description: "Sophisticated LSTM neural network model for predicting stock prices with backtesting and technical analysis integration.",
      longDescription: "A comprehensive stock prediction platform using Long Short-Term Memory networks with backtesting capabilities and multiple technical indicators for enhanced accuracy.",
      image: "📈",
      category: "Machine Learning",
      role: "Data Scientist & Developer",
      period: "Jan 2025 - Feb 2025",
      technologies: ["Python", "TensorFlow", "Keras", "Pandas", "NumPy", "Streamlit"],
      metrics: [
        { label: "Prediction Accuracy", value: "78%" },
        { label: "CAGR", value: "15.2%" },
        { label: "Sharpe Ratio", value: "1.8" }
      ],
      features: [
        "LSTM neural network architecture",
        "Backtesting on 100+ trading sessions",
        "5+ technical indicators integration",
        "Real-time prediction updates",
        "Interactive prediction charts",
        "Achieved 78% prediction accuracy with 2+ years of data",
        "Backtested strategies across 3 major stocks"
      ],
      github: "https://github.com/ayushtiwari-01/StockVision",
      demo: "https://stockvision-demo.vercel.app",
      status: "Completed"
    },
    {
      id: 3,
      title: "TrimLink - URL Shortener",
      description: "High-performance URL shortening service with real-time analytics, click tracking, and enterprise-grade reliability.",
      longDescription: "A scalable URL shortening platform built with modern web technologies, featuring real-time analytics, custom aliases, and comprehensive click tracking with 99% uptime.",
      image: "🔗",
      category: "Full-Stack Web",
      role: "Full-Stack Developer",
      period: "Jul 2025 - Aug 2025",
      technologies: ["React.js", "Tailwind CSS", "Shadcn UI", "Supabase", "PostgreSQL", "Vercel"],
      metrics: [
        { label: "Daily Redirects", value: "500+" },
        { label: "Uptime", value: "99%" },
        { label: "Query Latency", value: "-40%" }
      ],
      features: [
        "Real-time CRUD operations",
        "Click analytics and tracking",
        "Custom URL aliases",
        "PostgreSQL optimization",
        "CI/CD pipeline automation",
        "Handles 500+ daily redirects at 99% uptime",
        "Reduced query latency by 40% with optimizations"
      ],
      github: "https://github.com/ayushtiwari-01/TrimLink",
      demo: "https://trimlink-live.vercel.app",
      status: "Completed"
    },
    {
      id: 4,
      title: "BlogSpace - Full-Stack Blog Platform",
      description: "Modern, scalable blog platform with advanced content management, JWT authentication, and performance optimization.",
      longDescription: "A feature-rich blog application built with the MERN stack. Includes advanced text editing, user authentication, and optimized performance with reduced load times.",
      image: "📝",
      category: "Full-Stack Web",
      role: "Full-Stack Developer",
      period: "May 2024 - Jun 2024",
      technologies: ["MongoDB", "Express.js", "React.js", "Node.js", "JWT", "GitHub Actions"],
      metrics: [
        { label: "Users", value: "100+" },
        { label: "Load Time", value: "1.3s" },
        { label: "API Endpoints", value: "8+" }
      ],
      features: [
        "JWT-based authentication system",
        "CRUD operations for posts",
        "User profile management",
        "RESTful API endpoints",
        "CI/CD pipeline integration",
        "Reduced load times by 40% (2.1s → 1.3s)",
        "Enhanced query efficiency across 8+ endpoints"
      ],
      github: "https://github.com/ayushtiwari-01/BlogSpace",
      demo: "https://blog-app-mern.vercel.app",
      status: "Completed"
    },
    {
      id: 5,
      title: "Personal Portfolio Website",
      description: "Modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS showcasing projects and professional experience.",
      longDescription: "A sleek and modern portfolio website featuring responsive design, smooth animations, and interactive elements. Built with cutting-edge web technologies for optimal performance and user experience.",
      image: "👤",
      category: "Frontend Web",
      role: "Frontend Developer",
      period: "2024 - 2025",
      technologies: ["React.js", "TypeScript", "Tailwind CSS", "Vite", "Shadcn UI", "Vercel"],
      metrics: [
        { label: "Performance", value: "95+" },
        { label: "Load Time", value: "<1s" },
        { label: "Responsive", value: "100%" }
      ],
      features: [
        "Fully responsive design",
        "Modern UI with smooth animations",
        "Interactive project showcases",
        "Optimized performance",
        "TypeScript for type safety",
        "Deployed on Vercel with CI/CD",
        "Mobile-first responsive design approach"
      ],
      github: "https://github.com/ayushtiwari-01/MyPortfolio",
      demo: "https://ayushtiwariportfolio.vercel.app/",
      status: "Completed"
    },
    {
      id: 6,
      title: "Currency Converter",
      description: "Real-time currency conversion application with live exchange rates, historical data, and intuitive user interface.",
      longDescription: "A responsive currency converter built with React.js featuring real-time exchange rates, multiple currency support, and clean user interface design.",
      image: "💱",
      category: "Frontend Web",
      role: "Frontend Developer",
      period: "2024",
      technologies: ["React.js", "JavaScript", "CSS3", "Exchange Rate API", "Responsive Design"],
      metrics: [
        { label: "Currencies", value: "150+" },
        { label: "Response Time", value: "<1s" },
        { label: "Accuracy", value: "99.9%" }
      ],
      features: [
        "Real-time exchange rate fetching",
        "150+ currency support",
        "Responsive design across devices",
        "Clean and intuitive UI",
        "Fast conversion calculations",
        "Live API integration for accurate rates",
        "Mobile-optimized user experience"
      ],
      github: "https://github.com/ayushtiwari-01/Currency-Converter",
      demo: "https://ayush-currconverter.vercel.app/",
      status: "Completed"
    }
  ];

  const ProjectCard = ({ project }: { project: typeof projects[0] }) => (
    <Card className="flex flex-col h-full overflow-hidden hover-lift gradient-card group">
      <div className="flex-1 flex flex-col p-6 pb-4">
        <div className="flex items-start justify-between mb-4">
          <div className="text-4xl mb-4">{project.image}</div>
          <Badge
            variant={project.status === "Completed" ? "default" : project.status === "Ongoing" ? "destructive" : "secondary"}
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

        {/* Metrics */}
        <div className="grid grid-cols-3 gap-4 mb-4">
          {project.metrics.map((metric, index) => (
            <div key={index} className="text-center">
              <div className="text-lg font-bold text-primary">{metric.value}</div>
              <div className="text-xs text-muted-foreground">{metric.label}</div>
            </div>
          ))}
        </div>

        {/* Technologies */}
        <div className="mb-4">
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
        <div>
          <h4 className="font-medium text-foreground mb-2 text-sm">Key Features & Achievements</h4>
          <ul className="space-y-1 flex-1">
            {project.features.slice(0, 4).map((feature, index) => (
              <li key={index} className="flex items-start text-xs">
                <div className="w-1 h-1 gradient-primary rounded-full mt-1.5 mr-2 flex-shrink-0"></div>
                <span className="text-muted-foreground">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Buttons container at bottom */}
      <div className="px-6 pb-6">
        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="flex-1" asChild>
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
              <Github className="w-4 h-4 mr-2" />
              Code
            </a>
          </Button>
          <Button variant="default" size="sm" className="flex-1" asChild>
            <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
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
