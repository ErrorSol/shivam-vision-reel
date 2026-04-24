import { Camera, Film, Share2, Scissors, Sparkles } from "lucide-react";

const services = [
  {
    icon: Sparkles,
    title: "User Generated Content (UGC)",
    description: "Authentic, creator-style content that connects with audiences and converts on social platforms.",
  },
  {
    icon: Camera,
    title: "Video Production",
    description: "End-to-end shooting and directing — from concept and storyboard to final delivery.",
  },
  {
    icon: Share2,
    title: "Social Media Content",
    description: "Reels, shorts, and vertical-first content engineered for engagement and reach.",
  },
  {
    icon: Scissors,
    title: "Post Production & Editing",
    description: "Premium editing, color grading, and sound design that elevates raw footage to cinema.",
  },
];

export const Services = () => {
  return (
    <section id="services" className="relative py-28">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-20 right-10 w-96 h-96 rounded-full bg-primary/10 blur-[120px]" />
      </div>
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-3 mb-4">
            <Film className="h-4 w-4 text-primary" />
            <span className="text-xs uppercase tracking-[0.3em] text-primary font-medium">Services</span>
          </div>
          <h2 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl tracking-tighter mb-6">
            What I bring to <span className="text-gradient">your story</span>.
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            From a single reel to a full brand campaign — every project is treated like a film.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <div
                key={s.title}
                className="group relative overflow-hidden rounded-3xl gradient-card border border-border p-7 hover:border-primary/50 hover:-translate-y-1 transition-all duration-500 animate-fade-in"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-primary/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative">
                  <div className="h-14 w-14 rounded-2xl gradient-primary grid place-items-center mb-6 glow-sm group-hover:scale-110 transition-transform duration-500">
                    <Icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h3 className="font-display font-bold text-xl text-foreground mb-3">{s.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
