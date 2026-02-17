import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { Code2, Palette, Cpu, Rocket } from "lucide-react";

const highlights = [
  { icon: Code2, label: "Full Stack Dev", desc: "End-to-end product development" },
  { icon: Cpu, label: "AI / ML", desc: "Custom models & intelligent systems" },
  { icon: Palette, label: "Design Thinking", desc: "Functional & visually engaging" },
  { icon: Rocket, label: "Founder Mindset", desc: "From concept to deployed product" },
];

const AboutSection = () => (
  <section id="about" className="section-padding">
    <div className="max-w-6xl mx-auto">
      <SectionHeading label="About" title="Who I Am" />

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-muted-foreground leading-relaxed mb-6">
            I'm a developer and designer driven by a deep passion for technology, creativity, and innovation. 
            My work blends technical precision with design thinking — building digital products that are both 
            functional and visually engaging.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            I have a strong foundation in programming, game and app development, and visual design.
            I love bringing ideas to life from the first concept sketch to the final deployed product.
            For me, technology isn't just about code; it's about crafting experiences that connect people,
            inspire creativity, and move ideas forward.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 gap-4">
          {highlights.map(({ icon: Icon, label, desc }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card glow-border p-5 group hover:border-primary/40 transition-all duration-300"
            >
              <Icon size={24} className="text-primary mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="font-heading font-semibold text-sm mb-1">{label}</h3>
              <p className="text-xs text-muted-foreground">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
