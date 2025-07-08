import { useEffect, useState } from "react";

interface TypingAnimationProps {
  text: string;
  delay?: number;
  className?: string;
}

export function TypingAnimation({ text, delay = 100, className = "" }: TypingAnimationProps) {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, delay);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text, delay]);

  return (
    <span className={`inline-block ${className}`}>
      {displayText}
      <span className="animate-pulse ml-1">|</span>
    </span>
  );
}
