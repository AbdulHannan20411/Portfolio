import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Twitter, ChevronUp } from "lucide-react";
import { motion } from "framer-motion";

export function Footer() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.pageYOffset > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <h3 className="text-2xl font-bold gradient-text mb-4">Abdul Hannan</h3>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Senior Backend .NET Developer with 2.5+ years of experience specializing in 
                third-party integrations, API optimization, and scalable cloud solutions.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex justify-center space-x-6 mb-8"
            >
              <Button
                variant="ghost"
                size="icon"
                className="text-gray-400 hover:text-white transition-colors"
                onClick={() => window.open("https://github.com/AbdulHannan", "_blank")}
              >
                <Github className="h-6 w-6" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-gray-400 hover:text-white transition-colors"
                onClick={() => window.open("https://linkedin.com/in/abdulhannan/", "_blank")}
              >
                <Linkedin className="h-6 w-6" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-gray-400 hover:text-white transition-colors"
                onClick={() => window.open("https://twitter.com", "_blank")}
              >
                <Twitter className="h-6 w-6" />
              </Button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="border-t border-gray-800 pt-8"
            >
              <p className="text-gray-400">
                &copy; 2024 Abdul Hannan. All rights reserved. Built with ❤️ and lots of coffee.
              </p>
            </motion.div>
          </div>
        </div>
      </footer>

      {/* Back to Top Button */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ 
          opacity: showBackToTop ? 1 : 0,
          scale: showBackToTop ? 1 : 0.8
        }}
        transition={{ duration: 0.3 }}
        className="fixed bottom-8 right-8 z-50"
      >
        <Button
          onClick={scrollToTop}
          size="icon"
          className="w-12 h-12 bg-primary text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
        >
          <ChevronUp className="h-5 w-5" />
        </Button>
      </motion.div>
    </>
  );
}
