import { Mail, Phone, MapPin, Github, Linkedin, Download, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "tiwariayush2507@gmail.com",
      link: "https://mail.google.com/mail/?view=cm&fs=1&to=tiwariayush2507@gmail.com"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+91 79005 17934",
      link: "tel:+917900517934"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Open to Work",
      subtitle: "Currently in Vellore, Tamil Nadu"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      title: "GitHub",
      username: "ayushtiwari-01",
      link: "https://github.com/ayushtiwari-01"
    },
    {
      icon: Linkedin,
      title: "LinkedIn", 
      username: "ayush-tiwariii",
      link: "https://www.linkedin.com/in/ayush-tiwariii/"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="heading-lg text-foreground mb-4">Let's Build the Next Big Thing — Together</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I'm a passionate software developer specializing in building scalable, impactful solutions. 
            Let's collaborate and bring your ideas to life.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="overflow-hidden bg-card border shadow-soft">
            <div className="p-8 lg:p-12">
              <div className="space-y-8">
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-foreground">
                    Contact Information
                  </h3>
                  
                  {/* Response Time Note */}
                  <div className="flex items-center space-x-3 p-4 rounded-xl bg-primary/10 border border-primary/20">
                    <Clock className="w-5 h-5 text-primary" />
                    <p className="text-sm font-medium text-foreground">
                      I usually reply within 24 hours
                    </p>
                  </div>
                </div>

                {/* Contact Methods */}
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="group">
                      {info.link ? (
                        <a
                          href={info.link}
                          className="flex items-center space-x-4 p-4 rounded-xl hover:bg-white/5 hover:shadow-md transition-all duration-300 hover-scale"
                        >
                          <div className="p-3 gradient-primary rounded-xl group-hover:shadow-glow transition-all duration-300">
                            <info.icon className="w-5 h-5 text-white" />
                          </div>
                          <div className="flex-1">
                            <p className="font-semibold text-foreground group-hover:text-primary transition-colors">
                              {info.title}
                            </p>
                            <p className="text-muted-foreground">{info.value}</p>
                          </div>
                        </a>
                      ) : (
                        <div className="flex items-center space-x-4 p-4 rounded-xl">
                          <div className="p-3 gradient-primary rounded-xl">
                            <info.icon className="w-5 h-5 text-white" />
                          </div>
                          <div className="flex-1">
                            <p className="font-semibold text-foreground">{info.title}</p>
                            <p className="text-muted-foreground">{info.value}</p>
                            {info.subtitle && (
                              <p className="text-sm text-muted-foreground/70">{info.subtitle}</p>
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Social Links */}
                <div className="space-y-6 mt-8">
                  <h4 className="text-lg font-semibold text-foreground">Connect With Me</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center space-x-3 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 hover-scale"
                      >
                        <social.icon className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
                        <div>
                          <p className="font-medium text-foreground">{social.title}</p>
                          <p className="text-sm text-muted-foreground">{social.username}</p>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>

                {/* Download Resume Button */}
                <div className="pt-6">
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="w-full border-border hover:bg-muted text-lg py-6" 
                    asChild
                  >
                    <a href="https://drive.google.com/file/d/1IJl7fEL4CRhTFqivCe8BEA19OAoNG6qY/view?usp=drive_link" target="_blank" download>
                      <Download className="w-5 h-5 mr-3" />
                      Download Resume
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>

      </div>
    </section>
  );
};

export default Contact;