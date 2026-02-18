import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Globe } from "lucide-react";
import NeuralBackground from "@/components/ui/flow-field-background";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Flow field background */}
      <div className="absolute inset-0">
        <NeuralBackground
          className="absolute inset-0"
          color="#2dd4bf"
          trailOpacity={0.1}
          particleCount={600}
          speed={0.8}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
      </div>

      {/* Animated orbs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-[100px] animate-pulse-glow" />
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px] animate-pulse-glow" style={{ animationDelay: "1.5s" }} />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">
            Full Stack Engineer · AI Specialist · Founder
          </p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
          className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold tracking-tight mb-6"
        >
          Utkarsh{" "}
          <span className="gradient-text glow-text">Lakhotia</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Building digital products that blend technical precision with design thinking.
          5+ years delivering innovative solutions across industries.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45, ease: "easeOut" }}
          className="flex items-center justify-center gap-4 mb-12"
        >
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-8 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all duration-200 shadow-lg shadow-primary/20"
          >
            Get in Touch
          </a>
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-8 py-3 rounded-lg border border-glass-border text-foreground hover:border-primary/50 hover:text-primary transition-all duration-200"
          >
            View Work
          </a>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="flex items-center justify-center gap-5"
        >
          {[
            { icon: Linkedin, href: "https://www.linkedin.com/in/utkarsh-lakhotia-3a597a352", label: "LinkedIn" },
            { icon: Globe, href: "https://utkarsh-codeer.github.io/resume", label: "Portfolio" },
            { icon: Github, href: "https://github.com/utkarsh-codeer", label: "GitHub" },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-glass-border text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-200"
              aria-label={label}
            >
              <Icon size={20} />
            </a>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ArrowDown size={20} className="text-muted-foreground" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
