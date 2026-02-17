import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import SectionHeading from "./SectionHeading";
import { ArrowRight, ExternalLink } from "lucide-react";
import { projects } from "@/data/projects";

const categories = ["All", ...Array.from(new Set(projects.map((p) => p.category)))];

const ProjectsSection = () => {
  const [active, setActive] = useState("All");
  const navigate = useNavigate();

  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="projects" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          label="Projects"
          title="Selected Work"
          description="Real-world products I've designed, built, and shipped"
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
            className="grid md:grid-cols-2 gap-6"
          >
            {filtered.map((project, i) => (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                onClick={() => navigate(`/project/${project.slug}`)}
                className="glass-card p-6 group hover:border-primary/30 transition-all duration-300 cursor-pointer"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                  <ArrowRight
                    size={16}
                    className="text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all duration-200"
                  />
                </div>

                <h3 className="font-heading font-semibold text-xl mb-1 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-primary/70 font-medium mb-3">{project.tagline}</p>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.techStack.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="text-xs text-muted-foreground bg-muted px-2.5 py-1 rounded-md border border-glass-border"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 4 && (
                    <span className="text-xs text-muted-foreground bg-muted px-2.5 py-1 rounded-md border border-glass-border">
                      +{project.techStack.length - 4}
                    </span>
                  )}
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
