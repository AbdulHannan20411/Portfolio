import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/Components/about-section";
import { ProjectsSection } from "@/components/projects-section";
import { ExperienceSection } from "@/components/experience-section";
import { TechStackSection } from "@/components/tech-stack-section";
import { BlogSection } from "@/Components/blog-section";
import { ContactSection } from "@/Components/contact-section";
import { Footer } from "@/components/footer";

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
