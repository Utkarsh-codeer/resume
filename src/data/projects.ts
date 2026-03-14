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
  {
    slug: "rfspectron",
    title: "RFSpectron",
    tagline: "Modular SaaS for Operations, Analytics & Automation",
    category: "SaaS",
    description:
      "A scalable business management platform designed to centralize operations, analytics, and automation for growing companies. The system provides configurable modules for data management, reporting, and workflow automation, enabling organizations to streamline internal processes and make data-driven decisions.",
    features: [
      "Modular dashboard architecture",
      "Role-based access control",
      "Workflow automation & task management",
      "Real-time analytics & reporting",
      "Secure multi-tenant architecture",
    ],
    techStack: ["React", "TypeScript", "Supabase", "PostgreSQL", "REST APIs"],
    outcome: "Improved operational visibility and reduced manual overhead for internal teams.",
  },
  {
    slug: "private-hire-club",
    title: "Private Hire Club",
    tagline: "End-to-End Private Hire & Chauffeur Service System",
    category: "Transport",
    description:
      "A premium booking and management platform for private hire and chauffeur services, enabling customers to book rides seamlessly while providing operators with tools to manage drivers, vehicles, schedules, and payments.",
    features: [
      "Customer booking & journey management",
      "Driver & vehicle management system",
      "Admin dashboard with analytics",
      "Secure payments & invoicing",
      "Role-based access",
    ],
    techStack: ["React", "TypeScript", "Supabase", "PostgreSQL", "REST APIs"],
    outcome: "Streamlined operations and enhanced customer booking experience.",
  },
  {
  slug: "mnist-neural-network",
  title: "MNIST Digit Classifier",
  tagline: "Feedforward Neural Network Built from Scratch — No ML Frameworks",
  category: "AI / ML",
  description:
    "A fully functional feedforward neural network trained on 70,000 handwritten digit images, implemented entirely from first principles in Python and NumPy. Every component — forward propagation, cross-entropy loss, backpropagation via the chain rule, and mini-batch gradient descent — was written without TensorFlow, PyTorch, or any ML framework. Training loss fell from 2.3026 (the theoretical random baseline for a 10-class classifier) to 0.0101 over 20 epochs.",
  features: [
    "Forward propagation with ReLU (hidden) and Softmax (output) activations",
    "Cross-entropy loss with numerical stability via log-clipping",
    "Backpropagation from scratch using the chain rule, layer by layer",
    "Mini-batch gradient descent with epoch shuffling (batch size 64, lr 0.1)",
    "Training visualisation — loss curves, accuracy curves, sample predictions",
    "Full technical documentation of every mathematical and engineering decision",
  ],
  techStack: ["Python", "NumPy", "Matplotlib"],
  outcome: "97.85% test accuracy on 10,000 unseen images. No ML frameworks used at any stage.",
  },
];
