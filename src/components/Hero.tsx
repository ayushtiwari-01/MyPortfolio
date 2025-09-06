import { useState, useEffect } from "react";
import { Mail, Github, Linkedin, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";


const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const roles = [
    "MERN Stack Developer",
    "Problem Solver",
    "Tech Innovator"
  ];


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);


  const scrollToProjects = () => {
    document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
  };


  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };


  const openResume = () => {
    window.open("https://drive.google.com/file/d/1IJl7fEL4CRhTFqivCe8BEA19OAoNG6qY/view?usp=sharing", "_blank");
  };


  return (
    <section id="home" className="min-h-screen flex items-center justify-center gradient-hero relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent"></div>


      {/* Floating particles background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-2 h-2 bg-primary/30 rounded-full animate-float-1"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-blue-400/20 rounded-full animate-float-2"></div>
        <div className="absolute bottom-32 left-20 w-1 h-1 bg-primary/40 rounded-full animate-float-3"></div>
        <div className="absolute top-60 left-1/3 w-1.5 h-1.5 bg-blue-300/40 rounded-full animate-float-1"></div>
        <div className="absolute bottom-40 right-1/3 w-2.5 h-2.5 bg-sky-400/30 rounded-full animate-float-2"></div>
      </div>


      {/* Geometric shapes background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-primary rotate-45 animate-spin-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-gradient-to-r from-primary to-blue-500 rounded-full blur-xl animate-pulse-slow"></div>
        <div className="absolute top-1/2 right-1/3 w-16 h-16 border-2 border-sky-500 rounded-full animate-bounce-slow"></div>
      </div>


      {/* Dot pattern background */}
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, rgba(59, 130, 246, 0.3) 1px, transparent 0)`,
        backgroundSize: '20px 20px'
      }}></div>


      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="text-center animate-fade-in">
          {/* Profile Image with rotating rings */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <img
                src="/lovable-uploads/60d2a83e-fb69-4b85-8c96-e93d6b7c109d.png"
                alt="Ayush Tiwari"
                className="w-32 h-32 md:w-40 md:h-40 rounded-full shadow-large hover-glow transition-all duration-500 border-4 border-white animate-pulse-slow"
              />
              <div className="absolute -inset-4 border-2 border-primary/30 rounded-full animate-spin-slow"></div>
              <div className="absolute -inset-6 border border-blue-400/20 rounded-full animate-spin-reverse-slow"></div>
              <div className="absolute -inset-1 gradient-primary rounded-full opacity-20 animate-float"></div>
            </div>
          </div>


          {/* Main Heading with animated underline */}
          <h1 className="heading-xl text-foreground mb-6 relative">
            Hi, I'm <span className="text-gradient relative">
              Ayush Tiwari
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary to-blue-500 animate-pulse"></span>
            </span>
          </h1>


          {/* Animated Tagline with typewriter effect */}
          <div className="mb-8">
            <p className="text-xl md:text-2xl text-muted-foreground mb-4">
              Aspiring Software Developer
            </p>
            <div className="h-8 flex items-center justify-center">
              <span className="text-lg md:text-xl font-semibold text-primary typewriter">
                {roles[currentRole]}
              </span>
            </div>
          </div>


          {/* Description */}
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
            Passionate about building innovative web applications with modern technologies.
            Specializing in MERN stack development and exploring the exciting world of AI and machine learning.
          </p>


          {/* CTA Buttons with glassmorphism and hover effects */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button
              variant="hero"
              size="lg"
              onClick={scrollToProjects}
              className="text-lg px-8 py-3 backdrop-blur-md bg-white/10 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:-translate-y-1"
            >
              View Projects
            </Button>
            <Button
              variant="outline-hero"
              size="lg"
              onClick={scrollToContact}
              className="text-lg px-8 py-3 backdrop-blur-md bg-white/10 border border-white/20 hover:bg-white/20 hover:text-foreground transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:-translate-y-1"
            >
              Contact Me
            </Button>
            <Button
              variant="outline-hero"
              size="lg"
              onClick={openResume}
              className="text-lg px-8 py-3 backdrop-blur-md bg-white/10 border border-white/20 hover:bg-white/20 hover:text-foreground transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:-translate-y-1"
            >
              Resume
            </Button>
          </div>


          {/* Enhanced Social Links with interactive hover effects */}
          <div className="flex justify-center space-x-6 mb-12">
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=tiwariayush2507@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Email Ayush Tiwari"
              className="group p-4 rounded-full bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm border border-white/20 hover:from-white/20 hover:to-white/10 transition-all duration-300 hover:scale-110 hover:-translate-y-1 hover:shadow-xl"
            >
              <Mail className="w-6 h-6 text-primary group-hover:text-foreground transition-colors duration-300" />
            </a>
            <a
              href="https://github.com/ayushtiwari-01"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="group p-4 rounded-full bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm border border-white/20 hover:from-white/20 hover:to-white/10 transition-all duration-300 hover:scale-110 hover:-translate-y-1 hover:shadow-xl"
            >
              <Github className="w-6 h-6 text-primary group-hover:text-foreground transition-colors duration-300" />
            </a>
            <a
              href="https://www.linkedin.com/in/ayush-tiwariii/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="group p-4 rounded-full bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm border border-white/20 hover:from-white/20 hover:to-white/10 transition-all duration-300 hover:scale-110 hover:-translate-y-1 hover:shadow-xl"
            >
              <Linkedin className="w-6 h-6 text-primary group-hover:text-foreground transition-colors duration-300" />
            </a>
          </div>


          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className="w-6 h-6 text-primary" />
          </div>
        </div>
      </div>
    </section>
  );
};


export default Hero;

