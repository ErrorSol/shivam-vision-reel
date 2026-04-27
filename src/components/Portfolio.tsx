import { useState } from "react";
import { Play, ArrowUpRight } from "lucide-react";
import p1 from "@/assets/portfolio-1.jpg";
import p2 from "@/assets/portfolio-2.jpg";
import p3 from "@/assets/portfolio-3.jpg";
import p4 from "@/assets/portfolio-4.jpg";
import p5 from "@/assets/portfolio-5.jpg";
import p6 from "@/assets/portfolio-6.jpg";
import { cn } from "@/lib/utils";

type Category = "all" | "brand" | "personal" | "social";

const projects = [
  {
    id: 1,
    title: "Studio Brand Film",
    description: "Cinematic product film captured entirely on iPhone with custom lighting design.",
    role: "Director · Cinematographer · Editor",
    category: "brand" as Category,
    image: p1,
    video: "https://res.cloudinary.com/dkqpecoxh/video/upload/v1777291118/brand-film_c28ucb.mp4",
    type: "Brand Film",
  },
  {
    id: 2,
    title: "Short Film",
    description: "Short film made with iPhone.",
    role: "Director · Editor",
    category: "personal" as Category,
    image: p2,
    video: "https://res.cloudinary.com/dkqpecoxh/video/upload/v1777291118/short-film_byeq15.mp4",
    type: "Short Film",
  },
  {
    id: 3,
    title: "Eye Catching Content",
    description: "",
    role: "Cinematographer · Editor",
    category: "social" as Category,
    video: "https://res.cloudinary.com/dkqpecoxh/video/upload/v1777290685/eyecatch_ryizoy.mp4",
    image: p3,
    type: "Reel",
  },
  {
    id: 4,
    title: "Live Event Coverage",
    description: "Live Event Coverage film delivering Live content.",
    role: "Director · Producer",
    category: "brand" as Category,
    video: "https://res.cloudinary.com/dkqpecoxh/video/upload/v1777290672/Live_l83jsa.mp4",
    image: p4,
    type: "Event",
  },
  {
    id: 5,
    title: "Lifestyle UGC Series",
    description: "Authentic creator-style content for a lifestyle product launch.",
    role: "Creator · Editor",
    category: "social" as Category,
    video: "https://res.cloudinary.com/dkqpecoxh/video/upload/v1777290683/ugc_jwhoy1.mp4",
    image: p5,
    type: "UGC",
  },
  {
    id: 6,
    title: "Promotional Reels",
    description: "Promotional reels delivering quality reels",
    role: "Director · Cinematographer",
    category: "personal" as Category,
    video: "https://res.cloudinary.com/dkqpecoxh/video/upload/v1777290673/promotion_xmw6bq.mp4",
    image: p6,
    type: "Travel",
  },
];

const filters: { id: Category; label: string }[] = [
  { id: "all", label: "All Work" },
  { id: "brand", label: "Brand / Client" },
  { id: "personal", label: "Personal" },
  { id: "social", label: "Social Media" },
];

export const Portfolio = () => {
  const [active, setActive] = useState<Category>("all");
  const filtered = active === "all" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="portfolio" className="relative py-28">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-12">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
              <Play className="h-4 w-4 text-primary fill-primary" />
              <span className="text-xs uppercase tracking-[0.3em] text-primary font-medium">Portfolio</span>
            </div>
            <h2 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl tracking-tighter">
              Selected <span className="text-gradient">work</span> & stories.
            </h2>
          </div>

          <div className="flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f.id}
                onClick={() => setActive(f.id)}
                className={cn(
                  "px-4 py-2 rounded-full text-sm transition-all",
                  active === f.id
                    ? "gradient-primary text-primary-foreground glow-sm"
                    : "glass text-muted-foreground hover:text-foreground"
                )}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((p, i) => (
            <article
              key={p.id}
              className="group relative overflow-hidden rounded-3xl gradient-card border border-border hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 hover:glow-sm animate-fade-in"
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              <div className="aspect-[4/5] overflow-hidden relative">
                {p.video ? (
                  <video
                    src={p.video}
                    poster={p.image}
                    controls
                    playsInline
                    preload="metadata"
                    className="h-full w-full object-cover bg-card"
                  />
                ) : (
                  <img
                    src={p.image}
                    alt={p.title}
                    loading="lazy"
                    width={800}
                    height={1000}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                )}
                {!p.video && (
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent opacity-90 pointer-events-none" />
                )}
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full glass text-xs text-foreground pointer-events-none">
                  {p.type}
                </div>
                {!p.video && (
                  <>
                    <div className="absolute top-4 right-4 h-10 w-10 rounded-full glass grid place-items-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <ArrowUpRight className="h-4 w-4 text-foreground" />
                    </div>
                    <div className="absolute inset-0 grid place-items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="h-16 w-16 rounded-full gradient-primary glow-primary grid place-items-center">
                        <Play className="h-6 w-6 text-primary-foreground fill-primary-foreground ml-1" />
                      </div>
                    </div>
                  </>
                )}
              </div>
              <div className="p-6">
                <h3 className="font-display font-bold text-xl text-foreground mb-2">{p.title}</h3>
                <p className="text-sm text-muted-foreground mb-3 leading-relaxed">{p.description}</p>
                <div className="text-xs uppercase tracking-widest text-primary">{p.role}</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
