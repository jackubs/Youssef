import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Gamepad2, Music, Phone, Users } from "lucide-react";

interface Experience {
  id: number;
  title: string;
  company?: string;
  period: string;
  description: string;
  icon: typeof Briefcase;
  highlights: string[];
}

const experiences: Experience[] = [
  {
    id: 1,
    title: "Indie Game Developer",
    period: "2020 - Present",
    description: "Creating original games and interactive experiences from concept to completion.",
    icon: Gamepad2,
    highlights: [
      "Developed multiple indie games and tech prototypes",
      "Designed unique gameplay mechanics and systems",
      "Created full game soundtracks and visual assets",
      "Managed complete game development lifecycle",
    ],
  },
  {
    id: 2,
    title: "Music Band Leader",
    period: "2019 - 2022",
    description: "Founded and led a music band, handling creative direction and composition.",
    icon: Music,
    highlights: [
      "Composed original music and wrote lyrics",
      "Coordinated band members and rehearsals",
      "Performed live and recorded studio sessions",
      "Managed creative vision and band identity",
    ],
  },
  {
    id: 3,
    title: "Call Center Agent",
    company: "Hay Khathra Elka Consulting",
    period: "Work Experience",
    description: "Customer service and telecommunications support role.",
    icon: Phone,
    highlights: [
      "Handled customer inquiries and support",
      "Developed strong communication skills",
      "Worked in fast-paced environment",
      "Multi-language customer support",
    ],
  },
  {
    id: 4,
    title: "Collaborative Projects",
    period: "Ongoing",
    description: "Worked with various teams and individuals on creative and technical projects.",
    icon: Users,
    highlights: [
      "Collaborated with artists and developers",
      "Participated in game jams and hackathons",
      "Contributed to open-source projects",
      "Built network of creative professionals",
    ],
  },
];

export const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-24 md:py-32 bg-card/30" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Experience</h2>
          <p className="section-subtitle">My journey and professional background</p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-skill-music hidden md:block" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline Dot */}
                <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary glow-primary" />

                {/* Content Card */}
                <div className={`flex-1 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                  <div className="relative p-6 rounded-xl bg-card border border-border card-hover">
                    {/* Icon */}
                    <div className="absolute -top-4 left-6 w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                      <exp.icon className="w-6 h-6 text-primary" />
                    </div>

                    <div className="pt-6">
                      {/* Header */}
                      <div className="flex flex-wrap items-start justify-between gap-2 mb-4">
                        <div>
                          <h3 className="font-display font-semibold text-lg text-foreground">
                            {exp.title}
                          </h3>
                          {exp.company && (
                            <p className="text-sm text-primary">{exp.company}</p>
                          )}
                        </div>
                        <span className="px-3 py-1 rounded-full bg-secondary text-xs text-muted-foreground">
                          {exp.period}
                        </span>
                      </div>

                      {/* Description */}
                      <p className="text-muted-foreground mb-4">{exp.description}</p>

                      {/* Highlights */}
                      <ul className="space-y-2">
                        {exp.highlights.map((highlight, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                            <span className="text-muted-foreground">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Spacer for opposite side */}
                <div className="hidden md:block flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
