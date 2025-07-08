import { useEffect, useState } from "react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

interface SkillProgressBarProps {
  skill: string;
  percentage: number;
  delay?: number;
}

export function SkillProgressBar({ skill, percentage, delay = 0 }: SkillProgressBarProps) {
  const [ref, isIntersecting] = useIntersectionObserver({
    threshold: 0.1,
    freezeOnceVisible: true,
  });
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    if (isIntersecting && !animated) {
      const timeout = setTimeout(() => {
        setAnimated(true);
      }, delay);

      return () => clearTimeout(timeout);
    }
  }, [isIntersecting, animated, delay]);

  return (
    <div ref={ref} className="skill-item">
      <div className="flex justify-between mb-2">
        <span className="text-gray-700 dark:text-gray-300 font-medium">{skill}</span>
        <span className="text-gray-500 dark:text-gray-400">{percentage}%</span>
      </div>
      <div className="bg-gray-200 dark:bg-gray-700 rounded-full h-2">
        <div
          className={`skill-bar rounded-full ${animated ? "animate" : ""}`}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}
