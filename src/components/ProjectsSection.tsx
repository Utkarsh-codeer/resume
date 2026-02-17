import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { ExternalLink, ArrowRight } from "lucide-react";

const projects = [
  {
    title: "AI Chatbot Platform",
    category: "AI/ML",
    desc: "Built and trained proprietary AI models for Discord chatbots serving diverse customer needs with custom ML training sets.",
    tags: ["Python", "ML", "NLP", "Discord API"],
  },
  {
    title: "B2B SaaS Solutions",
    category: "Full Stack",
    desc: "Leading multiple projects in the UK B2B market with full-stack architecture, meeting industry standards and client expectations.",
    tags: ["React", "Node.js", "TypeScript", "Cloud"],
  },
  {
    title: "Secure Web Application",
    category: "Web Dev",
    desc: "Full web app with backend, client-side and server-side microservices. Thorough security audit ensuring secure data handling.",
    tags: ["Microservices", "Security", "Backend", "API"],
  },
  {
    title: "Unity Game Projects",
    category: "Game Dev",
    desc: "Senior game developer creating interactive experiences in Unity, working with multiple clients in the gaming industry.",
    tags: ["Unity", "C#", "Game Design", "3D"],
  },
  {
    title: "Process Automation Tools",
    category: "AI/ML",
    desc: "Designed intelligent automation solutions to streamline workflows and reduce manual processes across organizations.",
    tags: ["Python", "Automation", "AI", "Scripting"],
  },
];

const categories = ["All", ...Array.from(new Set(projects.map((p) => p.category)))];

const ProjectsSection = () => {
  const [active, setActive] = useState("All");

  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="projects" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          label="Projects"
          title="Selected Work"
          description="A curated selection of projects that showcase my skills"
        />

        {/* Filter */}
        <div className="flex justify-center gap-3 mb-12 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-4 py-2 text-sm rounded-full font-medium transition-all duration-200 ${
                active === cat
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                  : "bg-secondary text-muted-foreground hover:text-foreground border border-glass-border"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filtered.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="glass-card p-6 group hover:border-primary/30 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                  <ExternalLink size={16} className="text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <h3 className="font-heading font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{project.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ProjectsSection;
