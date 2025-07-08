import { useState } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ProjectCard } from "@/components/project-card";

const projects = [
  {
    id: 1,
    title: "Buch Hospital Management System",
    description: "Comprehensive hospital management system with patient flow, operations, and healthcare functions using Service Oriented Architecture.",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    technologies: [".NET Core 6", "SOA", "API Gateway", "AWS S3", "Twilio", "Ocelot"],
    githubUrl: "https://github.com/AbdulHannan",
    liveUrl: "#",
    category: "dotnet",
  },
  {
    id: 2,
    title: "Vinciio - Social Matchmaking App",
    description: "Feature-rich friend matchmaking app with real-time chat, geolocation, OpenAI integration, and automated push notifications.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    technologies: [".NET Core 8", "OpenAI", "Redis", "Twilio", "Firebase", "Serilog"],
    githubUrl: "https://github.com/AbdulHannan",
    liveUrl: "#",
    category: "dotnet",
  },
  {
    id: 3,
    title: "Room Round - Hospital SaaS",
    description: "SaaS-based application for hospitals to streamline staff management and task assignments with role-based access and automation.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    technologies: [".NET Core 8", "Entity Framework", "Hangfire", "SMTP", "Serilog"],
    githubUrl: "https://github.com/AbdulHannan",
    liveUrl: "#",
    category: "saas",
  },
  {
    id: 4,
    title: "Door Cut - Barber Appointment App",
    description: "Online barber appointment booking app with payment integration, QR codes, and service rating system.",
    image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    technologies: [".NET Core 6", "MySQL", "Stripe", "QR Code", "AWS EC2", "AWS S3"],
    githubUrl: "https://github.com/AbdulHannan",
    liveUrl: "#",
    category: "fullstack",
  },
  {
    id: 5,
    title: "OnBatch - E-Commerce Platform",
    description: "Scalable multi-tenant e-commerce platform allowing sellers to create stores with secure authentication and payment processing.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    technologies: [".NET Core 6", "Entity Framework", "JWT", "Stripe", "Identity Framework"],
    githubUrl: "https://github.com/AbdulHannan",
    liveUrl: "#",
    category: "fullstack",
  },
];

const filterOptions = [
  { value: "all", label: "All Projects" },
  { value: "dotnet", label: ".NET Core" },
  { value: "saas", label: "SaaS" },
  { value: "fullstack", label: "Full Stack" },
];

export function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-foreground mb-4">Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Here are some of my recent projects showcasing my skills in full-stack development
          </p>
        </motion.div>
        
        {/* Project filtering */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {filterOptions.map((option) => (
            <Button
              key={option.value}
              variant={activeFilter === option.value ? "default" : "outline"}
              onClick={() => setActiveFilter(option.value)}
              className="rounded-full px-6 py-3 font-medium transition-all duration-300"
            >
              {option.label}
            </Button>
          ))}
        </motion.div>
        
        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <ProjectCard
                title={project.title}
                description={project.description}
                image={project.image}
                technologies={project.technologies}
                githubUrl={project.githubUrl}
                liveUrl={project.liveUrl}
                category={project.category}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
