const Footer = () => (
  <footer className="py-8 px-6 border-t border-glass-border">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
      <p className="text-sm text-muted-foreground">
        © {new Date().getFullYear()} Utkarsh Lakhotia. All rights reserved.
      </p>
      <p className="text-xs text-muted-foreground">
        Built with passion & precision
      </p>
    </div>
  </footer>
);

export default Footer;
