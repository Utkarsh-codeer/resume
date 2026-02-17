import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const skillCategories = [
  {
    title: "Languages & Frameworks",
    skills: ["Python", "JavaScript", "TypeScript", "React", "Node.js", "C#", "Unity"],
  },
  {
    title: "AI & Machine Learning",
    skills: ["TensorFlow", "ML Model Training", "AI Chatbots", "NLP", "Computer Vision"],
  },
  {
    title: "Web & Backend",
    skills: ["Full Stack Dev", "REST APIs", "Microservices", "Database Design", "Security"],
  },
  {
    title: "Tools & Design",
    skills: ["Git", "Docker", "Figma", "Sound Design", "Process Automation"],
  },
];

const SkillsSection = () => (
  <section id="skills" className="section-padding">
    <div className="max-w-6xl mx-auto">
      <SectionHeading
        label="Skills"
        title="My Tech Stack"
        description="Technologies and tools I use to bring ideas to life"
      />

      <div className="grid md:grid-cols-2 gap-6">
        {skillCategories.map((cat, ci) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: ci * 0.1 }}
            className="glass-card p-6"
          >
            <h3 className="font-heading font-semibold text-sm text-primary mb-4">{cat.title}</h3>
            <div className="flex flex-wrap gap-2">
              {cat.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 text-xs font-medium rounded-full bg-secondary text-secondary-foreground border border-glass-border hover:border-primary/40 hover:text-primary transition-all duration-200 cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SkillsSection;
