import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Gamepad2, Palette, Music, Users, Globe } from "lucide-react";

interface Skill {
  name: string;
  level: number;
  category: "code" | "design" | "music" | "other";
}

interface SkillCategory {
  title: string;
  icon: typeof Code2;
  color: string;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Development",
    icon: Code2,
    color: "skill-code",
    skills: [
      { name: "GDScript", level: 90, category: "code" },
      { name: "C++", level: 75, category: "code" },
      { name: "Godot Engine", level: 90, category: "code" },
      { name: "Unity (Basics)", level: 60, category: "code" },
      { name: "Game Prototyping", level: 85, category: "code" },
    ],
  },
  {
    title: "Game Design",
    icon: Gamepad2,
    color: "accent",
    skills: [
      { name: "Game Mechanics", level: 85, category: "design" },
      { name: "Level Design", level: 80, category: "design" },
      { name: "Storytelling", level: 85, category: "design" },
      { name: "UI/UX Design", level: 70, category: "design" },
    ],
  },
  {
    title: "Art & Music",
    icon: Music,
    color: "skill-music",
    skills: [
      { name: "Guitar", level: 80, category: "music" },
      { name: "Piano", level: 70, category: "music" },
      { name: "Music Composition", level: 75, category: "music" },
      { name: "Visual Design", level: 70, category: "music" },
      { name: "Lyrics Writing", level: 80, category: "music" },
    ],
  },
  {
    title: "Soft Skills",
    icon: Users,
    color: "skill-other",
    skills: [
      { name: "Team Collaboration", level: 85, category: "music" },
      { name: "Communication", level: 90, category: "music" },
      { name: "Problem Solving", level: 85, category: "music" },
      { name: "Project Management", level: 70, category: "music" },
    ],
  },
  {
    title: "Hobbies",
    icon: Users,
    color: "skill-code",
    skills: [
      { name: "Writing Books", level: 90, category: "other" },
      { name: "Playing Chess", level: 85, category: "other" },
    ],
  },


];

const SkillBar = ({ skill, delay, color }: { skill: Skill; delay: number; color: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="mb-4 last:mb-0">
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-sm font-medium text-foreground">{skill.name}</span>
        <span className="text-xs text-muted-foreground">{skill.level}%</span>
      </div>
      <div className="skill-bar">
        {/* <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
          transition={{ duration: 1, delay: delay, ease: "easeOut" }}
          className={`skill-bar-fill bg-${color}`}
        /> */}
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
          transition={{ duration: 1, delay: delay, ease: "easeOut" }}
          className="skill-bar-fill"
          style={{ backgroundColor: `hsl(var(--${color}))` }}
        />

      </div>
    </div>
  );
};

export const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 md:py-32 relative" ref={ref}>
      <div className="absolute inset-0 bg-radial-gradient opacity-30" />

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Skills & Expertise</h2>
          <p className="section-subtitle">The tools and talents I bring to every project</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              className="p-6 rounded-xl bg-card border border-border"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-10 h-10 rounded-lg bg-${category.color}/10 flex items-center justify-center`}>
                  <category.icon className={`w-5 h-5 text-${category.color}`} />
                </div>
                <h3 className="font-display font-semibold text-lg">{category.title}</h3>
              </div>

              <div>
                {category.skills.map((skill, skillIndex) => (
                  <SkillBar
                    key={skill.name}
                    skill={skill}
                    delay={0.2 + catIndex * 0.1 + skillIndex * 0.05}
                    color={category.color}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Languages Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-12 p-6 rounded-xl bg-card border border-border"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <Globe className="w-5 h-5 text-primary" />
            </div>
            <h3 className="font-display font-semibold text-lg">Languages</h3>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {[
              { name: "Arabic", level: "Native", percent: 100 },
              { name: "French", level: "Fluent", percent: 90 },
              { name: "English", level: "Advanced", percent: 85 },
              { name: "Russian", level: "Learning", percent: 30 },
              { name: "Spanish", level: "Learning", percent: 25 },
            ].map((lang, index) => (
              <motion.div
                key={lang.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
                className="text-center p-4 rounded-lg bg-secondary/50"
              >
                <div className="relative w-16 h-16 mx-auto mb-3">
                  <svg className="w-full h-full -rotate-90">
                    <circle
                      cx="32"
                      cy="32"
                      r="28"
                      fill="none"
                      stroke="hsl(var(--muted))"
                      strokeWidth="4"
                    />
                    <motion.circle
                      cx="32"
                      cy="32"
                      r="28"
                      fill="none"
                      stroke="hsl(var(--primary))"
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeDasharray={176}
                      initial={{ strokeDashoffset: 176 }}
                      animate={isInView ? { strokeDashoffset: 176 - (176 * lang.percent) / 100 } : {}}
                      transition={{ duration: 1, delay: 0.7 + index * 0.1 }}
                    />
                  </svg>
                  <span className="absolute inset-0 flex items-center justify-center text-xs font-semibold">
                    {lang.percent}%
                  </span>
                </div>
                <p className="font-medium text-sm">{lang.name}</p>
                <p className="text-xs text-muted-foreground">{lang.level}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
