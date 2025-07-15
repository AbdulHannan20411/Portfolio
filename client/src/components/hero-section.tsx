import { Button } from "@/components/ui/button";
import { ArrowDown, Code, Mail, Download } from "lucide-react";
import { motion } from "framer-motion";
import { ParticlesBackground } from "@/components/particles-background";
import { TypingAnimation } from "@/components/typing-animation";
import { scrollToSection } from "@/lib/utils";
import hannanPhoto from "@assets/1000463583.png"; // Fixed filename

export function HeroSection() {
  return (
    <section id="home" className="hero-gradient min-h-screen flex items-center justify-center relative overflow-hidden">
      <ParticlesBackground />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center space-y-8"
        >
          {/* Professional photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
           <img
          src="/attached_Assets/1000463583.png"
          alt="Abdul Hannan - Professional Developer"
          className="w-48 h-48 sm:w-56 sm:h-56 rounded-full object-cover border-4 border-white/20 shadow-2xl animate-float"/>

            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/20 to-accent/20" />
          </motion.div>
          
          <div className="space-y-6">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4"
            >
              <span className="block">Hi, I'm Honey —</span>
              <span className="block">
                <TypingAnimation
                  text="Senior Backend .NET Developer"
                  delay={80}
                  className="text-3xl sm:text-4xl lg:text-5xl"
                />
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl sm:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed"
            >
              Specializing in .NET Core backend development, third-party integrations, and cloud solutions.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center mt-8"
            >
              <Button
                size="lg"
                onClick={() => scrollToSection("projects")}
                className="bg-white text-primary hover:bg-gray-100 font-semibold rounded-full px-8 py-4 text-lg"
              >
                <Code className="mr-2 h-5 w-5" />
                View My Work
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => {
                  const link = document.createElement('a');
                  link.href = '/api/resume/download';
                  link.download = 'Abdul_Hannan_Resume.pdf';
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}
                className="border-2 border-white text-white hover:bg-white hover:text-primary font-semibold rounded-full px-8 py-4 text-lg"
              >
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("contact")}
                className="border-2 border-white text-white hover:bg-white hover:text-primary font-semibold rounded-full px-8 py-4 text-lg"
              >
                <Mail className="mr-2 h-5 w-5" />
                Get In Touch
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="scroll-indicator"
      >
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center cursor-pointer"
             onClick={() => scrollToSection("about")}>
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-bounce" />
        </div>
      </motion.div>
    </section>
  );
}