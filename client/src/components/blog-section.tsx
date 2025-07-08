import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PenTool, Clock } from "lucide-react";
import { motion } from "framer-motion";

export function BlogSection() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-foreground mb-4">Blog & Insights</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Sharing my thoughts on technology and development
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Card className="neumorphic border-none max-w-md mx-auto">
            <CardContent className="p-12">
              <div className="w-20 h-20 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                <PenTool className="text-white text-2xl" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-foreground">Coming Soon</h3>
              <p className="text-muted-foreground mb-6">
                I'm working on some exciting articles about .NET, Angular, and cloud architecture. Stay tuned!
              </p>
              <Badge variant="secondary" className="inline-flex items-center px-6 py-3 bg-primary/10 text-primary">
                <Clock className="mr-2 h-4 w-4" />
                In Progress
              </Badge>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
