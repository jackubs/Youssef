import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Gamepad2, Palette, Music, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

type Category = "all" | "games" | "art" | "music";

interface PortfolioItem {
  id: number;
  title: string;
  description: string;
  category: "games" | "art" | "music";
  image: string;
  tags: string[];
}

const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: "Neon Horizon",
    description: "A cyberpunk-themed action platformer with dynamic combat and synthwave aesthetics.",
    category: "games",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=600&q=80",
    tags: ["Godot", "GDScript", "2D Platformer"],
  },
  {
    id: 2,
    title: "Echo Chamber",
    description: "A puzzle game where sound waves reveal hidden paths and unlock mysteries.",
    category: "games",
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=600&q=80",
    tags: ["Unity", "C#", "Puzzle"],
  },
  {
    id: 3,
    title: "Dreamscape Visuals",
    description: "Concept art and visual designs for immersive game environments.",
    category: "art",
    image: "https://images.unsplash.com/photo-1634017839464-5c339bbe3c86?w=600&q=80",
    tags: ["Concept Art", "Environment", "Digital"],
  },
  {
    id: 4,
    title: "UI Design Collection",
    description: "Modern and intuitive user interface designs for games and applications.",
    category: "art",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&q=80",
    tags: ["UI/UX", "Game UI", "Design"],
  },
  {
    id: 5,
    title: "Midnight Echoes EP",
    description: "An original soundtrack featuring ambient electronic and acoustic compositions.",
    category: "music",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&q=80",
    tags: ["Guitar", "Piano", "Electronic"],
  },
  {
    id: 6,
    title: "Game Soundscapes",
    description: "Original game music compositions spanning various genres and moods.",
    category: "music",
    image: "https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=600&q=80",
    tags: ["OST", "Ambient", "Orchestral"],
  },
];

const categories: { value: Category; label: string; icon: typeof Gamepad2 }[] = [
  { value: "all", label: "All Work", icon: Palette },
  { value: "games", label: "Games", icon: Gamepad2 },
  { value: "art", label: "Art & Design", icon: Palette },
  { value: "music", label: "Music", icon: Music },
];

export const PortfolioSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState<Category>("all");

  const filteredItems = activeCategory === "all"
    ? portfolioItems
    : portfolioItems.filter((item) => item.category === activeCategory);

  return (
    <section id="portfolio" className="py-24 md:py-32 bg-card/30" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="section-title">Portfolio</h2>
          <p className="section-subtitle">A showcase of my creative work</p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((cat) => (
            <Button
              key={cat.value}
              variant={activeCategory === cat.value ? "hero" : "outline"}
              size="sm"
              onClick={() => setActiveCategory(cat.value)}
              className="gap-2"
            >
              <cat.icon size={16} />
              {cat.label}
            </Button>
          ))}
        </motion.div>

        {/* Portfolio Grid */}
        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-xl bg-card border border-border card-hover"
            >
              {/* Image */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-60" />
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm ${
                    item.category === "games" ? "bg-primary/20 text-primary" :
                    item.category === "art" ? "bg-accent/20 text-accent" :
                    "bg-skill-music/20 text-skill-music"
                  }`}>
                    {item.category.charAt(0).toUpperCase() + item.category.slice(1)}
                  </span>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Button variant="hero" size="sm" className="gap-2">
                    {item.category === "music" ? <Play size={16} /> : <ExternalLink size={16} />}
                    {item.category === "music" ? "Listen" : "View Project"}
                  </Button>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="font-display font-semibold text-lg text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {item.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 rounded-md bg-secondary text-xs text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
