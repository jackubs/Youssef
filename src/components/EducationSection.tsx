import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, BookOpen, Target, ArrowRight } from "lucide-react";

const education = [
  {
    id: 1,
    degree: "BTP - Telecommunications & Networks",
    institution: "Hay Khathra",
    status: "Currently Studying",
    description: "Brevet Technicien Professionnel focusing on telecommunications infrastructure and network systems.",
    courses: ["Network Fundamentals", "Telecommunications Systems", "Technical Communication", "Infrastructure Management"],
    icon: BookOpen,
  },
  {
    id: 2,
    degree: "BTS - Computer Networking",
    institution: "Preparation",
    status: "Upcoming",
    description: "Brevet Technicien Supérieur with focus on advanced computer networking and system administration.",
    courses: ["Advanced Networking", "System Administration", "Network Security", "Project Management"],
    icon: Target,
  },
];

export const EducationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="py-24 md:py-32 relative" ref={ref}>
      <div className="absolute inset-0 bg-radial-gradient opacity-30" />
      
      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Education</h2>
          <p className="section-subtitle">Academic background and ongoing learning</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {education.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative group"
            >
              <div className="p-6 rounded-xl bg-card border border-border card-hover h-full">
                {/* Header */}
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <edu.icon className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-2 ${
                      edu.status === "Currently Studying" 
                        ? "bg-primary/20 text-primary" 
                        : "bg-accent/20 text-accent"
                    }`}>
                      {edu.status}
                    </span>
                    <h3 className="font-display font-semibold text-lg text-foreground">
                      {edu.degree}
                    </h3>
                    <p className="text-sm text-muted-foreground">{edu.institution}</p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-muted-foreground mb-6">{edu.description}</p>

                {/* Courses */}
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-muted-foreground mb-3">
                    Key Areas
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {edu.courses.map((course) => (
                      <span
                        key={course}
                        className="px-3 py-1.5 rounded-lg bg-secondary text-sm text-muted-foreground"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Arrow connecting cards on desktop */}
              {index === 0 && (
                <div className="hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2 z-10">
                  <div className="w-8 h-8 rounded-full bg-background border border-border flex items-center justify-center">
                    <ArrowRight className="w-4 h-4 text-primary" />
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Self-Learning Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 p-6 rounded-xl bg-card border border-border max-w-2xl mx-auto text-center"
        >
          <GraduationCap className="w-8 h-8 text-primary mx-auto mb-4" />
          <h3 className="font-display font-semibold text-lg mb-2">Continuous Self-Learning</h3>
          <p className="text-muted-foreground">
            Beyond formal education, I continuously expand my skills through online courses, 
            documentation, game jams, and hands-on projects. Learning never stops in game development!
          </p>
        </motion.div>
      </div>
    </section>
  );
};
