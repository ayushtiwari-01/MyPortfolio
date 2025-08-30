import { Heart, Github, Linkedin, Mail, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const quickLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" }
  ];

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/ayushtiwari-01",
      label: "GitHub"
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/ayush-tiwariii/",
      label: "LinkedIn"
    },
    {
      icon: Mail,
      href: "mailto:tiwariayush2507@gmail.com",
      label: "Email"
    }
  ];

  return (
    <footer className="bg-foreground text-background relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4 text-gradient">
              Ayush Tiwari
            </h3>
            <p className="text-background/80 mb-6 leading-relaxed max-w-md">
              Passionate software developer specializing in MERN stack development and AI-driven solutions. 
              Always excited to work on innovative projects that make a real impact.
            </p>
            
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-background/10 rounded-lg hover:bg-background/20 transition-all duration-300 hover:scale-110"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-background/80 hover:text-background transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Get In Touch</h4>
            <div className="space-y-3 text-background/80">
              <p>📧 tiwariayush2507@gmail.com</p>
              <p>📱 +91 79005 17934</p>
              <p>📍 Vellore, Tamil Nadu, India</p>
              <p>🎓 VIT University</p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-background/20"></div>

        {/* Bottom Footer */}
        <div className="py-6 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 text-background/80 mb-4 md:mb-0">
            <span>© {currentYear} Ayush Tiwari.</span>
          </div>
            
          <Button
            variant="ghost"
            size="sm"
            onClick={scrollToTop}
            className="text-background/80 hover:text-background hover:bg-background/10"
          >
            <ArrowUp className="w-4 h-4 mr-2" />
            Back to Top
          </Button>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-1 gradient-primary"></div>
    </footer>
  );
};

export default Footer;