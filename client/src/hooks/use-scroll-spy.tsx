import { useEffect, useState } from "react";

export function useScrollSpy(sectionIds: string[], offset: number = 0) {
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const sections = sectionIds.map((id) => {
        const element = document.getElementById(id);
        if (!element) return null;
        
        const rect = element.getBoundingClientRect();
        const top = rect.top + scrollY;
        const bottom = top + rect.height;
        
        return {
          id,
          top,
          bottom,
          element,
        };
      }).filter(Boolean);

      const currentSection = sections.find(
        (section) => 
          section && 
          scrollY >= section.top - offset && 
          scrollY < section.bottom - offset
      );

      if (currentSection) {
        setActiveSection(currentSection.id);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial call

    return () => window.removeEventListener("scroll", handleScroll);
  }, [sectionIds, offset]);

  return activeSection;
}
