import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const experiences = [
  {
    role: "Senior Software Engineer — Full Stack & AI Infrastructure",
    company: "Transcendi",
    period: "2024 – Present",
    location: "Edinburgh, UK",
    desc: "Leading 5+ projects in the UK B2B market. Diversified skill set across projects, learned industry standards, and ensured client and company goals are met on point.",
  },
  {
    role: "Freelance Developer",
    company: "Freelancing",
    period: "Jun 2022 – Aug 2025",
    location: "Remote",
    desc: "Worked across diverse roles and companies, building communication skills and understanding client needs. Developed products for various people in diverse roles.",
  },
  {
    role: "Senior Developer & Co-Founder",
    company: "Shadow Labs",
    period: "2020 – 2025",
    location: "Remote",
    desc: "Co-founded a company creating Discord AI chatbots and custom AI bots. Worked as a Python senior dev, creating ML training sets and training proprietary AI models.",
  },
  {
    role: "Web App Developer",
    company: "Insanity Crew",
    period: "Jun 2023 – Aug 2023",
    location: "Rai Bareli, UP",
    desc: "Built a full web app with backend, client-side and server-side microservices, and thorough security audits.",
  },
  {
    role: "Senior Game Developer",
    company: "SpyDown",
    period: "2020 – 2021",
    location: "Remote",
    desc: "Senior Game Developer in Unity, working with multiple clients and gaining deep knowledge of the gaming industry.",
  },
];

const ExperienceSection = () => (
  <section id="experience" className="section-padding">
    <div className="max-w-4xl mx-auto">
      <SectionHeading label="Experience" title="Where I've Worked" />

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-4 md:left-6 top-0 bottom-0 w-px bg-border" />

        <div className="space-y-10">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative pl-12 md:pl-16"
            >
              {/* Dot */}
              <div className="absolute left-2.5 md:left-4.5 top-1.5 w-3 h-3 rounded-full bg-primary glow-dot" />

              <div className="glass-card p-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                  <h3 className="font-heading font-semibold text-base">{exp.role}</h3>
                  <span className="text-xs text-muted-foreground">{exp.period}</span>
                </div>
                <p className="text-sm text-primary font-medium mb-2">
                  {exp.company} · {exp.location}
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">{exp.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default ExperienceSection;
