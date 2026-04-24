import { GraduationCap, Sparkles } from "lucide-react";

const education = [
  {
    year: "2023 — 2025",
    title: "MBA in Event Management",
    school: "NAEMD",
    description: "Advanced study in event production, brand storytelling, and creative project management.",
  },
  {
    year: "2020 — 2023",
    title: "Bachelor of Business Administration",
    school: "IMS Noida",
    description: "Foundation in marketing, business strategy, and creative communication.",
  },
];

export const About = () => {
  return (
    <section id="about" className="relative py-28">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-3 mb-4">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-xs uppercase tracking-[0.3em] text-primary font-medium">About Me</span>
          </div>
          <h2 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl tracking-tighter mb-6">
            Where <span className="text-gradient">storytelling</span> meets the lens of an iPhone.
          </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-10">
          {/* Bio */}
          <div className="lg:col-span-7 space-y-6 text-muted-foreground leading-relaxed text-lg">
            <p>
              I'm a creative and detail-oriented cinematic video creator with a strong foundation in
              marketing and event management. My craft lives at the intersection of storytelling and
              technology — proving that a phone in the right hands can rival any cinema rig.
            </p>
            <p>
              I specialize in <span className="text-foreground">iPhone filmmaking</span>, with deep
              expertise in shooting angles, lighting, transitions, and editing using premium mobile
              applications. Every frame I capture is intentional. Every cut, motivated.
            </p>
            <p>
              My passion is to engage audiences with bold visuals and authentic narratives — whether
              it's a 15-second reel or a long-form brand film. I believe great storytelling doesn't
              need a budget; it needs a vision.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-6">
              {[
                { k: "Specialty", v: "iPhone Filmmaking" },
                { k: "Approach", v: "Story-first" },
                { k: "Strengths", v: "Light & Motion" },
                { k: "Vibe", v: "Cinematic" },
              ].map((i) => (
                <div key={i.k} className="glass rounded-2xl p-5">
                  <div className="text-xs uppercase tracking-widest text-muted-foreground mb-1">{i.k}</div>
                  <div className="font-display font-semibold text-foreground">{i.v}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Education timeline */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-2 mb-6">
              <GraduationCap className="h-5 w-5 text-primary" />
              <h3 className="font-display font-semibold text-xl text-foreground">Education</h3>
            </div>
            <div className="relative space-y-4">
              <div className="absolute left-5 top-2 bottom-2 w-px bg-gradient-to-b from-primary via-accent to-transparent" />
              {education.map((e) => (
                <div key={e.title} className="relative pl-14">
                  <div className="absolute left-2 top-6 h-6 w-6 rounded-full gradient-primary glow-sm grid place-items-center">
                    <div className="h-2 w-2 rounded-full bg-primary-foreground" />
                  </div>
                  <div className="glass rounded-2xl p-6 hover:border-primary/50 transition-all">
                    <div className="text-xs uppercase tracking-widest text-primary mb-2">{e.year}</div>
                    <h4 className="font-display font-bold text-lg text-foreground mb-1">{e.title}</h4>
                    <div className="text-sm text-muted-foreground mb-3">{e.school}</div>
                    <p className="text-sm text-muted-foreground/80 leading-relaxed">{e.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
