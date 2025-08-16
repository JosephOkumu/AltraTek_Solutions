import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";
import brunoSafaris from "@/images/BrunoSafaris.png";
import junubin from "@/images/junubin.png";
import larsfood from "@/images/larsfood.png";
import afyamawinguni from "@/images/afyamawinguni.png";
import redginger from "@/images/redginger.png";
import bigfish from "@/images/bigfish.png";
import ecommerceProject from "@/images/project-ecommerce.jpg";
import dashboardProject from "@/images/project-dashboard.jpg";
import mobileProject from "@/images/project-mobile.jpg";

const Projects = () => {
  const allProjects = [
    {
      id: 1,
      title: "Safari Booking Platform",
      description: "A website that enables safari lovers to search for trips in both Kenya and Tanzania, and make their bookings and payments all in one place.",
      image: brunoSafaris,
      tags: ["React", "Node.js", "Stripe", "MongoDB"],
      url: "https://brunosafaris.com/"
    },
    {
      id: 2,
      title: "Transport and Logistics App",
      description: "A web application for transport and logistics services provider for businesses across Africa. Get your products delivered to your preferred location.",
      image: junubin,
      tags: ["Vue.js", "Python", "D3.js", "PostgreSQL"],
      url: "https://junubinlogistics.com/"
    },
    {
      id: 3,
      title: "Digital Agency Platform",
      description: "A website for a digital agency company that offers digital services such as search engine optimization, website design, and company branding.",
      image: larsfood,
      tags: ["React Native", "Firebase", "Socket.io"],
      url: "https://larscooper.com/"
    },
    {
      id: 4,
      title: "Food Ordering Platform",
      description: "A tap-to-order platform that enables clients to review the menu and make orders to be delivered to their specified location.",
      image: redginger,
      tags: ["Next.js", "GraphQL", "Prisma", "Vercel"],
      url: "https://bit.ly/redgingertaptoorder"
    },
    {
      id: 5,
      title: "Healthcare Portal",
      description: "A healthcare management system for patients and providers with appointment scheduling, medical records, and telehealth capabilities.",
      image: afyamawinguni,
      tags: ["Angular", "Spring Boot", "MySQL", "Docker"],
      url: "http://afyamawinguni.com/"
    },
    {
      id: 6,
      title: "Online Menu Platform",
      description: "A tap-to-order platform that enables clients to review the menu and make orders to be delivered to their specified location.",
      image: bigfish,
      tags: ["React", "Python", "Redis", "Mapbox"],
      url: "https://bit.ly/bigfishtaptoorder"
    }
  ];

  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore some of our recent work and see how we've helped businesses achieve their digital goals
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {allProjects.map((project, index) => (
            <Card 
              key={project.id} 
              className="bg-card/50 backdrop-blur border-border/50 overflow-hidden hover:shadow-elegant transition-all duration-500 group animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="px-3 py-1 text-xs bg-primary/10 text-primary rounded-full border border-primary/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <Button 
                  className="w-full gradient-primary text-primary-foreground hover:shadow-glow transition-all duration-300 group/button"
                  onClick={() => window.open(project.url, '_blank')}
                >
                  Check It Out
                  <ExternalLink className="ml-2 h-4 w-4 group-hover/button:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;