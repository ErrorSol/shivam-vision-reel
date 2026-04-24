import { useState } from "react";
import { Mail, Phone, Send, Instagram, Linkedin, Youtube, MapPin } from "lucide-react";
import { toast } from "sonner";

export const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill in all fields");
      return;
    }
    toast.success("Message sent! I'll get back to you shortly.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="relative py-28">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-primary/15 blur-[150px]" />
      </div>

      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-4">
            <Mail className="h-4 w-4 text-primary" />
            <span className="text-xs uppercase tracking-[0.3em] text-primary font-medium">Contact</span>
          </div>
          <h2 className="font-display font-bold text-4xl sm:text-5xl lg:text-7xl tracking-tighter mb-6">
            Let's create something <span className="text-gradient">cinematic</span> together.
          </h2>
          <p className="text-lg text-muted-foreground">
            Have a story to tell? A brand to elevate? Let's turn your vision into a frame.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
          {/* Info */}
          <div className="lg:col-span-2 space-y-4">
            <a
              href="mailto:chaudharyshivam193@gmail.com"
              className="flex items-start gap-4 p-6 glass rounded-2xl hover:border-primary/50 transition-all group"
            >
              <div className="h-12 w-12 rounded-xl gradient-primary grid place-items-center glow-sm flex-shrink-0">
                <Mail className="h-5 w-5 text-primary-foreground" />
              </div>
              <div className="min-w-0">
                <div className="text-xs uppercase tracking-widest text-muted-foreground mb-1">Email</div>
                <div className="font-display font-medium text-foreground group-hover:text-primary transition-colors break-all">
                  chaudharyshivam193@gmail.com
                </div>
              </div>
            </a>

            <a
              href="tel:+919717589581"
              className="flex items-start gap-4 p-6 glass rounded-2xl hover:border-primary/50 transition-all group"
            >
              <div className="h-12 w-12 rounded-xl gradient-primary grid place-items-center glow-sm flex-shrink-0">
                <Phone className="h-5 w-5 text-primary-foreground" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground mb-1">Phone</div>
                <div className="font-display font-medium text-foreground group-hover:text-primary transition-colors">
                  +91 97175 89581
                </div>
              </div>
            </a>

            <div className="flex items-start gap-4 p-6 glass rounded-2xl">
              <div className="h-12 w-12 rounded-xl gradient-primary grid place-items-center glow-sm flex-shrink-0">
                <MapPin className="h-5 w-5 text-primary-foreground" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground mb-1">Based in</div>
                <div className="font-display font-medium text-foreground">India · Available worldwide</div>
              </div>
            </div>

            <div className="flex gap-3 pt-2">
              {[Instagram, Youtube, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="h-12 w-12 grid place-items-center rounded-xl glass hover:gradient-primary hover:text-primary-foreground transition-all hover:scale-110"
                  aria-label="Social link"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Form */}
          <form onSubmit={onSubmit} className="lg:col-span-3 glass rounded-3xl p-8 space-y-5">
            <div>
              <label htmlFor="name" className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">
                Your Name
              </label>
              <input
                id="name"
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-5 py-4 rounded-xl bg-secondary/50 border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30 text-foreground transition-all"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full px-5 py-4 rounded-xl bg-secondary/50 border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30 text-foreground transition-all"
                placeholder="hello@example.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">
                Tell me about your project
              </label>
              <textarea
                id="message"
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-5 py-4 rounded-xl bg-secondary/50 border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30 text-foreground transition-all resize-none"
                placeholder="I'm working on..."
              />
            </div>
            <button
              type="submit"
              className="group inline-flex items-center justify-center gap-2 w-full px-7 py-4 rounded-xl gradient-primary text-primary-foreground font-medium glow-sm hover:scale-[1.02] transition-all"
            >
              Send Message
              <Send className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
