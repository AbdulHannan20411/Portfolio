import { motion } from "framer-motion";

interface TechIconProps {
  icon: string;
  name: string;
  color: string;
  delay?: number;
}

export function TechIcon({ icon, name, color, delay = 0 }: TechIconProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="tech-icon text-center p-6 neumorphic rounded-xl hover:shadow-xl transition-all duration-300 cursor-pointer"
    >
      <i className={`${icon} text-4xl ${color} mb-4`} />
      <p className="text-gray-700 dark:text-gray-300 font-medium">{name}</p>
    </motion.div>
  );
}
