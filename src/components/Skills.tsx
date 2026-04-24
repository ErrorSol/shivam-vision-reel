import { useEffect, useRef, useState } from "react";

const skills = [
  { name: "Video Shooting", level: 95, note: "Short & long form" },
  { name: "Storytelling", level: 92, note: "Concept to delivery" },
  { name: "Post Production", level: 90, note: "Editing & grading" },
  { name: "Social Media Management", level: 85, note: "Strategy & growth" },
  { name: "iPhone Cinematography", level: 96, note: "Mobile-first craft" },
  { name: "Lighting & Composition", level: 88, note: "Cinematic frames" },
];

export const Skills = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="relative py-28" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <div className="flex items-center gap-3 mb-4">
              <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
              <span className="text-xs uppercase tracking-[0.3em] text-primary font-medium">Skills</span>
            </div>
            <h2 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl tracking-tighter mb-6">
              The <span className="text-gradient">craft</span> behind every frame.
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Skills sharpened across 50+ projects — combining technical precision with creative
              instinct to deliver visuals that move people.
            </p>
          </div>

          <div className="lg:col-span-7 space-y-6">
            {skills.map((s, i) => (
              <div key={s.name} className="glass rounded-2xl p-6 hover:border-primary/40 transition-colors">
                <div className="flex items-baseline justify-between mb-1">
                  <h3 className="font-display font-semibold text-lg text-foreground">{s.name}</h3>
                  <span className="font-display font-bold text-primary">{s.level}%</span>
                </div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground mb-4">{s.note}</div>
                <div className="h-2 rounded-full bg-secondary overflow-hidden">
                  <div
                    className="h-full gradient-primary rounded-full transition-all duration-1000 ease-out"
                    style={{
                      width: visible ? `${s.level}%` : "0%",
                      transitionDelay: `${i * 100}ms`,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
