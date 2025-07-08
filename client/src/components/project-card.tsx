import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  category: string;
}

export function ProjectCard({
  title,
  description,
  image,
  technologies,
  githubUrl,
  liveUrl,
  category,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="project-card"
      data-category={category}
    >
      <Card className="neumorphic border-none overflow-hidden h-full">
        <div className="aspect-video overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
        <CardContent className="p-6 flex flex-col h-full">
          <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">
            {title}
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">
            {description}
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            {technologies.map((tech) => (
              <Badge
                key={tech}
                variant="secondary"
                className="bg-primary/10 text-primary border-none"
              >
                {tech}
              </Badge>
            ))}
          </div>
          <div className="flex gap-4 mt-auto">
            {githubUrl && (
              <Button
                variant="outline"
                size="sm"
                className="flex items-center gap-2"
                onClick={() => window.open(githubUrl, "_blank")}
              >
                <Github className="w-4 h-4" />
                Code
              </Button>
            )}
            {liveUrl && (
              <Button
                variant="outline"
                size="sm"
                className="flex items-center gap-2"
                onClick={() => window.open(liveUrl, "_blank")}
              >
                <ExternalLink className="w-4 h-4" />
                Live Demo
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
