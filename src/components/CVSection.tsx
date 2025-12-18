import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FileText, Download, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";

const CV_URL = "/cvcv/Youssef Yaakoubi EN.pdf";

export const CVSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const handleDownload = () => {
    toast({
      title: "CV Download",
      description: "Your CV download will start shortly.",
    });

    const link = document.createElement("a");
    link.href = CV_URL;
    link.download = "Youssef_Yaakoubi_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="py-24 md:py-32 bg-card/30" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <div className="relative p-8 md:p-12 rounded-2xl bg-gradient-to-br from-card to-secondary/30 border border-border overflow-hidden">
            
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent/5 rounded-full blur-3xl" />

            <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
              
              {/* Icon */}
              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.2, type: "spring" }}
                className="w-24 h-24 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0"
              >
                <FileText className="w-12 h-12 text-primary" />
              </motion.div>

              {/* Content */}
              <div className="flex-1 text-center md:text-left">
                <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-3">
                  Download My CV
                </h2>
                <p className="text-muted-foreground mb-6">
                  Get a comprehensive overview of my skills, experience, and qualifications.
                  Available in PDF format for easy viewing and sharing.
                </p>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
                  
                  {/* Download */}
                  <Button
                    variant="hero"
                    size="lg"
                    className="gap-2 w-full sm:w-auto"
                    onClick={handleDownload}
                  >
                    <Download className="w-5 h-5" />
                    Download CV
                  </Button>

                  {/* View Online */}
                  <Button
                    asChild
                    variant="heroOutline"
                    size="lg"
                    className="gap-2 w-full sm:w-auto"
                  >
                    <a
                      href={CV_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Eye className="w-5 h-5" />
                      View Online
                    </a>
                  </Button>

                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="relative z-10 mt-10 pt-8 border-t border-border"
            >
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                {[
                  { value: "4+", label: "Years Experience" },
                  { value: "10+", label: "Projects" },
                  { value: "5", label: "Languages" },
                  { value: "∞", label: "Passion" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <div className="font-display text-2xl md:text-3xl font-bold text-primary">
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};
