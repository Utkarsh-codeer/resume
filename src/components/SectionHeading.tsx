import { motion } from "framer-motion";

interface SectionHeadingProps {
  label: string;
  title: string;
  description?: string;
}

const SectionHeading = ({ label, title, description }: SectionHeadingProps) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6 }}
    className="mb-16 text-center"
  >
    <p className="text-primary text-sm font-medium tracking-widest uppercase mb-3">{label}</p>
    <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">{title}</h2>
    {description && (
      <p className="text-muted-foreground max-w-xl mx-auto">{description}</p>
    )}
  </motion.div>
);

export default SectionHeading;
