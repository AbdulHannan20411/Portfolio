import { Card, CardContent } from "@/components/ui/card";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { motion } from "framer-motion";

interface TimelineItemProps {
  title: string;
  company: string;
  period: string;
  responsibilities: string[];
  isLeft?: boolean;
  color?: string;
}

export function TimelineItem({
  title,
  company,
  period,
  responsibilities,
  isLeft = false,
  color = "bg-primary",
}: TimelineItemProps) {
  const [ref, isIntersecting] = useIntersectionObserver({
    threshold: 0.1,
    freezeOnceVisible: true,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
      animate={isIntersecting ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6 }}
      className={`timeline-item mb-12 flex items-center ${isLeft ? "" : "flex-row-reverse"}`}
    >
      <div className={`w-1/2 ${isLeft ? "pr-8 text-right" : "pl-8"}`}>
        <Card className="neumorphic border-none">
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
              {title}
            </h3>
            <p className="text-primary font-medium mb-2">{company}</p>
            <p className="text-gray-500 text-sm mb-3">{period}</p>
            <ul className="text-gray-600 dark:text-gray-300 text-sm space-y-1">
              {responsibilities.map((responsibility, index) => (
                <li key={index}>• {responsibility}</li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
      <div className={`absolute left-1/2 transform -translate-x-1/2 w-8 h-8 ${color} rounded-full border-4 border-background`} />
      <div className="w-1/2" />
    </motion.div>
  );
}
