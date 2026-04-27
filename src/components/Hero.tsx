import profileImg from "@/assets/profile.jpg";
import heroBg from "@/assets/hero-bg.jpg";
import { ArrowRight, Play } from "lucide-react";

export const Hero = () => {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-28 pb-20 overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 -z-10">
        <img
          src={heroBg}
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-40"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
        <div className="absolute top-1/3 -left-20 w-[500px] h-[500px] rounded-full bg-primary/30 blur-[120px] animate-float" />
        <div className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] rounded-full bg-accent/30 blur-[140px] animate-float" style={{ animationDelay: "2s" }} />
      </div>

      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Text */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 animate-fade-in">
              <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
              <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                Available for projects
              </span>
            </div>

            <h1
              className="font-display font-bold text-5xl sm:text-6xl lg:text-7xl xl:text-8xl leading-[0.95] tracking-tighter mb-6 animate-fade-in"
              style={{ animationDelay: "0.1s" }}
            >
              <span className="block text-foreground">Shivam</span>
              <span className="block text-gradient">Chaudhary</span>
            </h1>

            <p
              className="text-lg sm:text-xl text-muted-foreground mb-4 font-light tracking-wide animate-fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              Cinematic Video Creator <span className="text-primary">·</span> Filmmaker{" "}
              <span className="text-primary">·</span> Visual Storyteller
            </p>

            <p
              className="text-base sm:text-lg text-muted-foreground/80 max-w-xl mb-10 leading-relaxed animate-fade-in"
              style={{ animationDelay: "0.3s" }}
            >
              I craft cinematic stories with an iPhone in hand — turning everyday moments into bold,
              scroll-stopping visuals for brands, creators, and personal narratives.
            </p>

            <div
              className="flex flex-wrap items-center gap-4 animate-fade-in"
              style={{ animationDelay: "0.4s" }}
            >
              <button
                onClick={() => scrollTo("portfolio")}
                className="group inline-flex items-center gap-2 px-7 py-4 rounded-xl gradient-primary text-primary-foreground font-medium glow-sm hover:scale-105 transition-all"
              >
                <Play className="h-4 w-4 fill-current" />
                View Portfolio
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
              <button
                onClick={() => scrollTo("contact")}
                className="inline-flex items-center gap-2 px-7 py-4 rounded-xl glass text-foreground font-medium hover:bg-secondary/60 transition-all"
              >
                Contact Me
              </button>
            </div>

            {/* Stats */}
            <div
              className="mt-14 grid grid-cols-3 gap-6 max-w-md animate-fade-in"
              style={{ animationDelay: "0.5s" }}
            >
              {[
                { v: "3+", l: "Years" },
                { v: "50+", l: "Projects" },
                { v: "100%", l: "Mobile" },
              ].map((s) => (
                <div key={s.l}>
                  <div className="text-3xl font-display font-bold text-gradient">{s.v}</div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">
                    {s.l}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Profile image */}
          <div className="lg:col-span-5 order-1 lg:order-2 flex justify-center animate-scale-in">
            <div className="relative">
              {/* Glow rings */}
              <div className="absolute inset-0 rounded-full gradient-primary blur-3xl opacity-50 animate-glow-pulse" />
              <div className="absolute -inset-4 rounded-full border border-primary/30" />
              <div className="absolute -inset-10 rounded-full border border-primary/10" />

              {/* Image frame */}
              <div className="relative h-72 w-72 sm:h-96 sm:w-96 rounded-full overflow-hidden gradient-primary p-1 glow-primary">
                <div className="h-full w-full rounded-full overflow-hidden bg-background">
                  <img
                    src={profileImg}
                    alt="Portrait of Shivam Chaudhary holding an iPhone"
                    className="h-full w-full object-cover"
                    width={1024}
                    height={1024}
                  />
                </div>
              </div>

              {/* Floating badges */}
              <div className="absolute -top-4 -right-4 glass rounded-2xl px-4 py-3 animate-float">
                <div className="text-xs text-muted-foreground">Shot on</div>
                <div className="font-display font-bold text-foreground">iPhone</div>
              </div>
              <div className="absolute -bottom-4 -left-4 glass rounded-2xl px-4 py-3 animate-float" style={{ animationDelay: "1.5s" }}>
                <div className="text-xs text-muted-foreground">Based in</div>
                <div className="font-display font-bold text-foreground">India</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      {/* <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in-slow">
        <div className="flex flex-col items-center gap-2 text-muted-foreground">
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <div className="h-10 w-px bg-gradient-to-b from-primary to-transparent" />
        </div>
      </div> */}
    </section>
  );
};
