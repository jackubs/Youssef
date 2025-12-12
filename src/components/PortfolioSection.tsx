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
  url: string; // <---- ADDED
}

const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: "The Maze Killer",
    description: "Teleport, explode, and get lost in endless mazes—good luck finding your way out!",
    category: "games",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=600&q=80",
    tags: ["Godot", "GDScript", "2D Platformer"],
    url: "https://jackubs.github.io/yaakoubi/", // <--- PUT YOUR LINK HERE
  },
  {
    id: 2,
    title: "Blink Out",
    description: "Your Eyes Are the Controller 👁️",
    category: "games",
    image: "public/jackubs logo.png",
    tags: ["Godot", "GDScript", "Puzzle"],
    url: "https://jackubs.github.io/yaakoubi/", // <--- YOUR LINK
  },
  {
  id: 4,
  title: "Gameplay & Video Edits",
  description: "I create short gameplay videos and edit them with custom montages as a hobby I truly enjoy.",
  category: "art",
  image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&q=80",
  tags: ["Gameplay", "Editing", "Montage"],
  url:"https://www.instagram.com/reel/DP67PiUjBrO/", // <--- YOUR LINK
 },

  {
    id: 5,
    title: " My Band ",
    description: "An original soundtrack featuring ambient electronic and acoustic compositions.",
    category: "music",
    image: "public/band.jpg",
    tags: ["Guitar", "Piano", "Electronic"],
    url: "https://www.instagram.com/jawna_behiiii/", // <--- MUSIC LINK
  },
  {
    id: 6,
    title: "Game Soundscapes",
    description: "Original game music compositions spanning various genres and moods.",
    category: "music",
    image: "https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=600&q=80",
    tags: ["OST", "Ambient", "Orchestral"],
    url: "https://www.youtube.com/@jacob.8384", // <--- MUSIC LINK
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

  const filteredItems =
    activeCategory === "all"
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
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Button
                    variant="hero"
                    size="sm"
                    className="gap-2"
                    onClick={() => window.open(item.url, "_blank")}
                  >
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
