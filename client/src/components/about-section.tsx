import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { SkillProgressBar } from "@/components/skill-progress-bar";

const skills = [
  { name: "C# & .NET Core", percentage: 95 },
  { name: "SQL Server & MySQL", percentage: 90 },
  { name: "JavaScript & TypeScript", percentage: 85 },
  { name: "Azure & AWS Cloud", percentage: 88 },
  { name: "Docker & DevOps", percentage: 82 },
  { name: "Redis & Caching", percentage: 80 },
];

const achievements = [
  "Backend development with .NET Core 6/8",
  "Third-party service integration",
  "RESTful API optimization and performance",
  "Cloud infrastructure with Azure/AWS",
  "Hospital management systems",
  "SaaS application development",
];

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-foreground mb-4">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Senior Backend .NET Developer with 2.5+ years of experience in building enterprise-grade 
            applications, optimizing APIs, and implementing cloud solutions.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="neumorphic border-none">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold mb-4 text-foreground">My Journey</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    With over 2.5 years of experience as a .NET Core backend developer, I specialize in 
                    integrating third-party services, optimizing RESTful APIs, enhancing performance, and 
                    ensuring seamless data communication to meet complex business and technical requirements.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="neumorphic border-none">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold mb-4 text-foreground">What I Do</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    {achievements.map((achievement, index) => (
                      <li key={index} className="flex items-center">
                        <CheckCircle className="text-primary mr-3 h-5 w-5" />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold mb-8 text-foreground">Technical Skills</h3>
            
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <SkillProgressBar
                  key={skill.name}
                  skill={skill.name}
                  percentage={skill.percentage}
                  delay={index * 100}
                />
              ))}
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
              className="mt-8 pt-6 border-t border-border/20"
            >
              <Button
                size="lg"
                onClick={() => {
                  const link = document.createElement('a');
                  link.href = '/api/resume/download';
                  link.download = 'Abdul_Hannan_Resume.pdf';
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}
                className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white font-semibold rounded-full px-8 py-4 text-lg transition-all duration-300 transform hover:scale-105"
              >
                <Download className="mr-2 h-5 w-5" />
                Download My Resume
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
