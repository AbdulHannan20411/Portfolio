import { motion } from "framer-motion";
import { TechIcon } from "@/components/tech-icon";

const technologies = [
  { icon: "fab fa-microsoft", name: ".NET Core", color: "text-blue-600" },
  { icon: "fas fa-hashtag", name: "C#", color: "text-green-600" },
  { icon: "fas fa-database", name: "SQL Server", color: "text-orange-600" },
  { icon: "fas fa-database", name: "MySQL", color: "text-blue-500" },
  { icon: "fab fa-aws", name: "AWS", color: "text-orange-500" },
  { icon: "fas fa-cloud", name: "Azure", color: "text-blue-400" },
  { icon: "fab fa-docker", name: "Docker", color: "text-blue-500" },
  { icon: "fas fa-memory", name: "Redis", color: "text-red-500" },
  { icon: "fab fa-git-alt", name: "Git", color: "text-red-500" },
  { icon: "fas fa-code", name: "JavaScript", color: "text-yellow-500" },
  { icon: "fas fa-fire", name: "Firebase", color: "text-orange-400" },
  { icon: "fas fa-cogs", name: "Postman", color: "text-orange-600" },
];

export function TechStackSection() {
  return (
    <section className="py-20 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-foreground mb-4">Technologies & Tools</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            The technologies I work with to build amazing applications
          </p>
        </motion.div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {technologies.map((tech, index) => (
            <TechIcon
              key={tech.name}
              icon={tech.icon}
              name={tech.name}
              color={tech.color}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
