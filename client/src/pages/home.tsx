import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/hero-section";
import { ProjectsSection } from "@/components/projects-section";
import { ExperienceSection } from "@/components/experience-section";
import { TechStackSection } from "@/components/tech-stack-section";
import { Footer } from "@/components/footer";
import { BlogSection } from "@/components/blog-section";
import { ContactSection } from "@/components/contact-section";
import { AboutSection } from "@/components/AboutSection";


export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ExperienceSection />
      <TechStackSection />
      <BlogSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
