import { motion } from "framer-motion";
import { TimelineItem } from "@/components/timeline-item";

const experiences = [
  {
    title: "Senior Backend Engineer",
    company: "Root Pointers",
    period: "June 2024 - Present",
    responsibilities: [
      "Developed RoomRound SaaS application for hospital operations",
      "Engineered Vinciio social matchmaking app with geolocation",
      "Improved query performance by 20% using better indexing",
      "Implemented automated push notifications and real-time features",
    ],
    color: "bg-primary",
  },
  {
    title: "Software Engineer",
    company: "Xeven Solutions",
    period: "June 2023 - June 2024",
    responsibilities: [
      "Developed online healthcare platform for Buch Hospital",
      "Implemented Service-Oriented Architecture (SOA)",
      "Developed high-performance API Gateway",
      "Honored as 'Most Hardworking Employee'",
    ],
    color: "bg-secondary",
  },
  {
    title: "Associate Software Engineer",
    company: "Technoid",
    period: "February 2023 - April 2023",
    responsibilities: [
      "Worked on OnBatch e-commerce platform",
      "Developed scalable multi-tenant architecture",
      "Implemented secure data handling for multiple tenants",
      "Integrated appointment scheduling and e-commerce features",
    ],
    color: "bg-accent",
  },
  {
    title: "Bachelor of Information Technology",
    company: "University of the Education",
    period: "2019 - 2023",
    responsibilities: [
      "GPA: 3.37",
      "Specialized in Software Development",
      "Focused on backend technologies and systems",
    ],
    color: "bg-gradient-to-r from-primary to-secondary",
  },
];

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-foreground mb-4">Experience & Education</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            My professional journey and academic background
          </p>
        </motion.div>
        
        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary to-secondary"></div>
          
          {experiences.map((experience, index) => (
            <TimelineItem
              key={index}
              title={experience.title}
              company={experience.company}
              period={experience.period}
              responsibilities={experience.responsibilities}
              isLeft={index % 2 === 0}
              color={experience.color}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
