import { motion } from "framer-motion";
import { Heart, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-8 border-t border-border bg-card/50">
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-sm text-muted-foreground flex items-center gap-1"
          >
            © {new Date().getFullYear()} Portfolio. Made with
            <Heart className="w-4 h-4 text-skill-music fill-skill-music" />
            and creativity.
          </motion.p>

          {/* Back to Top */}
          <Button
            variant="outline"
            size="sm"
            onClick={scrollToTop}
            className="gap-2"
          >
            <ArrowUp className="w-4 h-4" />
            Back to Top
          </Button>
        </div>
      </div>
    </footer>
  );
};
