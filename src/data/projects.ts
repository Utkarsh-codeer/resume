export interface Project {
  slug: string;
  title: string;
  tagline: string;
  category: string;
  description: string;
  features: string[];
  techStack: string[];
  outcome: string;
}

export const projects: Project[] = [
  {
    slug: "zonebud",
    title: "ZoneBud",
    tagline: "Multi-Tenant Workforce & Site Security SaaS Platform",
    category: "SaaS",
    description:
      "A multi-tenant B2B SaaS platform built for logistics and construction companies to efficiently manage workforce operations and enforce on-site security. The system enables organizations to monitor employee check-ins and check-outs, track working hours, and maintain visibility into workforce activity across multiple job sites. The platform is widely used for workforce management, safety compliance, and internal communication.",
    features: [
      "Employee check-in / check-out & work hour tracking",
      "Multi-tenant organization management",
      "Role-based access control",
      "Real-time activity monitoring",
      "Safety & compliance workflows",
    ],
    techStack: ["React", "Capacitor", "TypeScript", "Supabase", "PostgreSQL", "REST APIs"],
    outcome: "Production-ready system supporting real-world business operations.",
  },
  {
    slug: "anishka-collections",
    title: "AnishkaCollections",
    tagline: "Scalable Fashion E-Commerce System",
    category: "E-Commerce",
    description:
      "A full-featured e-commerce platform for a fashion brand enabling seamless product browsing, ordering, and customer management with an admin dashboard for catalog and order control.",
    features: [
      "Product catalog & search",
      "Secure authentication",
      "Order & inventory management",
      "Admin dashboard",
      "Payment integration",
    ],
    techStack: ["React", "TypeScript", "Supabase", "PostgreSQL", "REST APIs"],
    outcome: "Streamlined online sales and improved operational efficiency.",
  },
  {
    slug: "ai-automation",
    title: "AI Automation Systems",
    tagline: "AI-Powered Business Automation Solutions",
    category: "AI/ML",
    description:
      "Designed and deployed AI-driven automation pipelines to eliminate manual work and optimize business operations across lead generation, CRM, data processing, and content workflows.",
    features: [
      "Lead scraping & enrichment",
      "AI content generation",
      "Workflow automation",
      "API & webhook integrations",
      "Error handling & logging",
    ],
    techStack: ["Node.js", "Python", "OpenAI APIs", "n8n / Make", "REST APIs"],
    outcome: "Significant reduction in manual effort and faster business operations.",
  },
  {
    slug: "educontrol-pro",
    title: "EduControl Pro",
    tagline: "Smart Education Management System",
    category: "EdTech",
    description:
      "A centralized platform to manage student records, attendance, performance tracking, and academic workflows with role-based access for administrators, teachers, and students.",
    features: [
      "Student information system",
      "Attendance & grading",
      "Role-based dashboards",
      "Reports & analytics",
    ],
    techStack: ["React", "TypeScript", "Supabase", "PostgreSQL", "REST APIs"],
    outcome: "Simplified school operations and improved visibility into academic performance.",
  },
];
