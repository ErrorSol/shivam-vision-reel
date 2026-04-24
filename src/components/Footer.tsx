export const Footer = () => {
  return (
    <footer className="relative border-t border-border py-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="h-7 w-7 rounded-md gradient-primary grid place-items-center font-display font-bold text-primary-foreground text-sm">
              S
            </span>
            <span className="font-display font-semibold text-foreground">Shivam Chaudhary</span>
          </div>
          <p className="text-sm text-muted-foreground text-center">
            © {new Date().getFullYear()} · Crafted with cinematic intent.
          </p>
        </div>
      </div>
    </footer>
  );
};
