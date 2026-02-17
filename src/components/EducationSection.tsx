import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { GraduationCap, Award } from "lucide-react";

const EducationSection = () => (
  <section id="education" className="section-padding">
    <div className="max-w-4xl mx-auto">
      <SectionHeading label="Education & Certifications" title="Learning Journey" />

      <div className="grid md:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass-card p-6"
        >
          <GraduationCap size={24} className="text-primary mb-4" />
          <h3 className="font-heading font-semibold mb-1">Tagore Public School & College</h3>
          <p className="text-sm text-muted-foreground mb-2">Allahabad</p>
          <p className="text-xs text-muted-foreground">2015 – 2029</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="glass-card p-6"
        >
          <GraduationCap size={24} className="text-primary mb-4" />
          <h3 className="font-heading font-semibold mb-1">Google Digital Garage</h3>
          <p className="text-sm text-muted-foreground">Digital Marketing</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="glass-card p-6"
        >
          <Award size={24} className="text-primary mb-4" />
          <h3 className="font-heading font-semibold mb-1">Google Certifications</h3>
          <p className="text-sm text-muted-foreground">Professional Certification</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="glass-card p-6"
        >
          <Award size={24} className="text-primary mb-4" />
          <h3 className="font-heading font-semibold mb-1">GDG Hackathon</h3>
          <p className="text-sm text-muted-foreground">Hackathon Achievement</p>
        </motion.div>
      </div>
    </div>
  </section>
);

export default EducationSection;
