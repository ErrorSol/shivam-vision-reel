import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const links = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "portfolio", label: "Portfolio" },
  { id: "services", label: "Services" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled ? "py-3" : "py-5"
      )}
    >
      <div className={cn("container mx-auto px-6", scrolled && "")}>
        <nav
          className={cn(
            "flex items-center justify-between rounded-2xl px-5 py-3 transition-all duration-500",
            scrolled ? "glass shadow-card" : "bg-transparent"
          )}
        >
          <button onClick={() => go("home")} className="flex items-center gap-2 group">
            <span className="h-8 w-8 rounded-lg gradient-primary glow-sm grid place-items-center font-display font-bold text-primary-foreground">
              S
            </span>
            <span className="font-display font-semibold tracking-tight text-foreground hidden sm:inline">
              Shivam Chaudhary
            </span>
          </button>

          <ul className="hidden lg:flex items-center gap-1">
            {links.map((l) => (
              <li key={l.id}>
                <button
                  onClick={() => go(l.id)}
                  className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-secondary/50"
                >
                  {l.label}
                </button>
              </li>
            ))}
          </ul>

          <button
            onClick={() => go("contact")}
            className="hidden lg:inline-flex items-center gap-2 px-5 py-2.5 rounded-xl gradient-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-all hover:scale-105 glow-sm"
          >
            Let's talk
          </button>

          <button
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden h-10 w-10 grid place-items-center rounded-lg glass"
            aria-label="Menu"
          >
            <div className="space-y-1.5">
              <span className={cn("block h-0.5 w-5 bg-foreground transition-all", open && "translate-y-2 rotate-45")} />
              <span className={cn("block h-0.5 w-5 bg-foreground transition-all", open && "opacity-0")} />
              <span className={cn("block h-0.5 w-5 bg-foreground transition-all", open && "-translate-y-2 -rotate-45")} />
            </div>
          </button>
        </nav>

        {open && (
          <div className="lg:hidden mt-2 glass rounded-2xl p-4 animate-fade-in">
            <ul className="flex flex-col gap-1">
              {links.map((l) => (
                <li key={l.id}>
                  <button
                    onClick={() => go(l.id)}
                    className="w-full text-left px-4 py-3 text-foreground hover:bg-secondary/50 rounded-lg"
                  >
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};
