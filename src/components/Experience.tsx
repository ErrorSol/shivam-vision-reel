import { Briefcase } from "lucide-react";

const experience = [
  {
    period: "2026 — Present",
    role: "Filmmaker & Content Creator",
    org: "Independent / Freelance",
    description:
      "Creating cinematic content for brands and personal storytelling projects.",
    tags: ["Director", "Cinematographer", "Editor"],
  },
  {
    period: "2023 — 2025",
    role: "Video Producer & Event Coordinator",
    org: "Brand Collaborations",
    description:
      "Led projects from concept development and scripting to final delivery while managing teams and clients. Produced and covered multiple live events, ensuring seamless execution.",
    tags: ["Producer", "Script Dev", "Events"],
  },
  {
    period: "2020 — 2023",
    role: "Social Media Manager",
    org: "Brand Campaigns",
    description:
      "Scaled multiple social media pages organically and executed paid promotional campaigns for brands.",
    tags: ["Organic Growth", "Paid Ads", "Strategy"],
  },
];

const capabilities = [
  "Manage projects from concept to delivery",
  "Script development & directing",
  "Editing, color & sound design",
  "Coordinating clients and teams",
];

export const Experience = () => {
  return (
    <section id="experience" className="relative py-28">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-3 mb-4">
            <Briefcase className="h-4 w-4 text-primary" />
            <span className="text-xs uppercase tracking-[0.3em] text-primary font-medium">Experience</span>
          </div>
          <h2 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl tracking-tighter mb-6">
            <span className="text-gradient">3+ years</span> of building stories.
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 mb-12">
          {experience.map((e, i) => (
            <div
              key={e.role}
              className="relative overflow-hidden rounded-3xl gradient-card border border-border p-7 hover:border-primary/50 transition-all duration-500 hover:-translate-y-1 animate-fade-in"
              style={{ animationDelay: `${i * 0.12}s` }}
            >
              <div className="text-xs uppercase tracking-widest text-primary mb-3">{e.period}</div>
              <h3 className="font-display font-bold text-xl text-foreground mb-1">{e.role}</h3>
              <div className="text-sm text-muted-foreground mb-4">{e.org}</div>
              <p className="text-sm text-muted-foreground/90 leading-relaxed mb-5">{e.description}</p>
              <div className="flex flex-wrap gap-2">
                {e.tags.map((t) => (
                  <span key={t} className="px-3 py-1 rounded-full glass text-xs text-foreground/90">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="glass rounded-3xl p-8">
          <h3 className="font-display font-bold text-2xl text-foreground mb-6">Core Capabilities</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {capabilities.map((c) => (
              <div key={c} className="flex items-start gap-3">
                <div className="mt-1 h-6 w-6 rounded-lg gradient-primary grid place-items-center flex-shrink-0">
                  <svg className="h-3 w-3 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-foreground/90 text-sm leading-relaxed">{c}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
