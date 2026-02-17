import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle2, Layers, Zap } from "lucide-react";
import { projects } from "@/data/projects";

const ProjectDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="text-2xl font-heading font-bold mb-4">Project not found</h1>
          <button
            onClick={() => navigate("/")}
            className="text-primary hover:underline"
          >
            Go back home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Top bar */}
      <div className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-glass-border">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center gap-4">
          <button
            onClick={() => navigate("/#projects")}
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft size={16} /> Back
          </button>
          <span className="text-sm font-heading font-semibold">{project.title}</span>
        </div>
      </div>

      <div className="pt-28 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
              {project.category}
            </span>
            <h1 className="text-4xl md:text-6xl font-heading font-bold mt-6 mb-3">
              {project.title}
            </h1>
            <p className="text-lg md:text-xl text-primary/80 font-medium">{project.tagline}</p>
          </motion.div>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="glass-card p-8 mb-8"
          >
            <h2 className="font-heading font-semibold text-lg mb-4 flex items-center gap-2">
              <Layers size={18} className="text-primary" /> Overview
            </h2>
            <p className="text-muted-foreground leading-relaxed">{project.description}</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="glass-card p-8"
            >
              <h2 className="font-heading font-semibold text-lg mb-5 flex items-center gap-2">
                <CheckCircle2 size={18} className="text-primary" /> Key Features
              </h2>
              <ul className="space-y-3">
                {project.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0 glow-dot" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Tech + Outcome */}
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.35 }}
                className="glass-card p-8"
              >
                <h2 className="font-heading font-semibold text-lg mb-5">Tech Stack</h2>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 text-xs font-medium rounded-full bg-secondary text-secondary-foreground border border-glass-border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.45 }}
                className="glass-card p-8"
              >
                <h2 className="font-heading font-semibold text-lg mb-3 flex items-center gap-2">
                  <Zap size={18} className="text-primary" /> Outcome
                </h2>
                <p className="text-sm text-muted-foreground leading-relaxed">{project.outcome}</p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
