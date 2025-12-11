import { motion } from "framer-motion";
import { ArrowDown, Gamepad2, Music, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30" />
      <div className="absolute inset-0 bg-radial-gradient" />
      
      {/* Floating Icons */}
      <motion.div
        animate={{ y: [-10, 10, -10] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-[10%] text-primary/20"
      >
        <Gamepad2 size={60} />
      </motion.div>
      <motion.div
        animate={{ y: [10, -10, 10] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/3 right-[15%] text-accent/20"
      >
        <Music size={50} />
      </motion.div>
      <motion.div
        animate={{ y: [-5, 15, -5] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/3 left-[20%] text-skill-music/20"
      >
        <Code2 size={45} />
      </motion.div>

      <div className="section-container relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Pre-title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border text-sm text-muted-foreground">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Available for collaborations
            </span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
          >
            Indie Game Developer
            <br />
            <span className="text-gradient">& Creative Artist</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8"
          >
            Crafting immersive gaming experiences through code, design, and music.
            <br className="hidden md:block" />
            Turning creative visions into interactive realities.
          </motion.p>

          {/* Talent Pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-3 mb-10"
          >
            {[
              { icon: Code2, label: "Developer", color: "text-primary" },
              { icon: Gamepad2, label: "Game Designer", color: "text-accent" },
              { icon: Music, label: "Musician", color: "text-skill-music" },
            ].map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.4 + index * 0.1, type: "spring" }}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border"
              >
                <item.icon className={`w-4 h-4 ${item.color}`} />
                <span className="text-sm font-medium">{item.label}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button variant="hero" size="lg" asChild>
              <a href="#portfolio">View My Work</a>
            </Button>
            <Button variant="heroOutline" size="lg" asChild>
              <a href="#contact">Let's Connect</a>
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.a
          href="#about"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <ArrowDown size={20} />
        </motion.a>
      </motion.div>
    </section>
  );
};
