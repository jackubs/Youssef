import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Sparkles, Target, Lightbulb, Heart } from "lucide-react";

const highlights = [
  {
    icon: Sparkles,
    title: "Creative Vision",
    description: "Transforming ideas into immersive digital experiences",
  },
  {
    icon: Target,
    title: "Technical Skills",
    description: "GDScript, C++, Godot, Unity, and web technologies",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Always exploring new mechanics and storytelling methods",
  },
  {
    icon: Heart,
    title: "Passion",
    description: "Dedicated to crafting memorable player experiences",
  },
];

export const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 md:py-32 relative" ref={ref}>
      <div className="absolute inset-0 bg-radial-gradient opacity-50" />
      
      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">The story behind the creations</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Bio */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="relative">
              <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-accent to-skill-music rounded-full" />
              <div className="pl-6 space-y-4">
                <p className="text-lg text-foreground leading-relaxed">
                  I am Yaakoubi Youssef an <span className="text-primary font-semibold">indie game developer</span> passionate 
                  about creating original gameplay, unique mechanics, and immersive experiences. I work 
                  with <span className="text-accent font-semibold">GDScript, C++</span>, and multiple game engines.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Beyond coding, I design visuals, compose original melodies, and create full soundtracks 
                  using guitar and piano, including writing lyrics. This multidisciplinary approach allows 
                  me to craft cohesive experiences where every element—from gameplay to audio—tells a unified story.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  I consider myself a <span className="text-primary">multidisciplinary artist</span>: 
                  programmer, designer, musician, and creative storyteller. My goal is to push the boundaries 
                  of interactive entertainment and create games that leave lasting impressions.
                </p>
              </div>
            </div>

            {/* Languages */}
            <div className="pt-4">
              <h3 className="text-sm uppercase tracking-wider text-muted-foreground mb-3">Languages</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  { lang: "Arabic", level: "Native" },
                  { lang: "French", level: "Fluent" },
                  { lang: "English", level: "Advanced" },
                  { lang: "Russian", level: "Learning" },
                  { lang: "Spanish", level: "Learning" },
                ].map((item) => (
                  <span
                    key={item.lang}
                    className="px-3 py-1.5 rounded-full bg-secondary border border-border text-sm"
                  >
                    {item.lang} <span className="text-muted-foreground">• {item.level}</span>
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right - Highlight Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-2 gap-4"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                className="group p-5 rounded-xl bg-card border border-border card-hover"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-foreground mb-1">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
