export type NavLink = {
  id: string;
  label: string;
  to: string;
};

export const navLinks: NavLink[] = [
  { id: "home", label: "Home", to: "/" },
  { id: "team", label: "Our Team", to: "/team" },
  { id: "innovation", label: "2025 Innovation", to: "/innovation" },
  { id: "mining", label: "Indigenous Mining", to: "/indigenous-mining" },
  { id: "about", label: "About St Patrick's", to: "/about" },
  { id: "contact", label: "Contact", to: "/contact" }
];

export type HeroContent = {
  eyebrow: string;
  title: string;
  highlight: string;
  description: string;
  primaryCta: {
    label: string;
    to: string;
  };
  secondaryCta: {
    label: string;
    to: string;
  };
  media: {
    src: string;
    alt: string;
  };
};

export const heroContent: HeroContent = {
  eyebrow: "St Patrick's College Mackay",
  title: "FIRST LEGO League",
  highlight: "St Patrick's One Robotics Team",
  description:
    "Championing innovative STEM solutions, community engagement, and Indigenous knowledge to build a brighter future for robotics in Central Queensland.",
  primaryCta: {
    label: "Meet the Team",
    to: "/team"
  },
  secondaryCta: {
    label: "Contact Us",
    to: "/contact"
  },
  media: {
    src: "/assets/hero-team.jpg",
    alt: "St Patrick's One Robotics Team at competition"
  }
};

export type TeamMember = {
  name: string;
  role: string;
  description: string;
  image: {
    src: string;
    alt: string;
  };
};

export const teamMembers: TeamMember[] = [
  {
    name: "Maddox Takken",
    role: "Lead Programmer & Builder",
    description:
      "Architects robust robot code and mechanical solutions that deliver consistent performance on the competition field.",
    image: {
      src: "/assets/team-maddox.jpg",
      alt: "Maddox Takken working on the robot"
    }
  },
  {
    name: "Zachary Leahy",
    role: "Team Manager",
    description:
      "Keeps the team on track with strategic planning, time management, and collaborative leadership.",
    image: {
      src: "/assets/team-zachary.jpg",
      alt: "Zachary Leahy presenting project notes"
    }
  },
  {
    name: "Logan Sanders",
    role: "Lead Innovator",
    description:
      "Drives the research and ideation process behind the team's innovation project and community outreach.",
    image: {
      src: "/assets/team-logan.jpg",
      alt: "Logan Sanders showcasing a prototype"
    }
  },
  {
    name: "Elessa Sales",
    role: "Innovation Specialist",
    description:
      "Transforms research into compelling storytelling for judges, stakeholders, and the wider community.",
    image: {
      src: "/assets/team-elessa.jpg",
      alt: "Elessa Sales preparing presentation boards"
    }
  },
  {
    name: "Kyan Woods",
    role: "Course Planner & Builder",
    description:
      "Engineers navigation strategies that yield reliable mission runs through rigorous testing and iteration.",
    image: {
      src: "/assets/team-kyan.jpg",
      alt: "Kyan Woods aligning course elements"
    }
  },
  {
    name: "Elijah Johnson",
    role: "Team Support",
    description:
      "Bolsters the team with logistics, morale, and pit support so every run has the resources it needs.",
    image: {
      src: "/assets/team-elijah.jpg",
      alt: "Elijah Johnson supporting team prep"
    }
  }
];

export type InnovationProject = {
  title: string;
  summary: string;
  highlights: string[];
  callout: string;
  gallery: Array<{
    src: string;
    alt: string;
  }>;
};

export const innovationProject: InnovationProject = {
  title: "2025 Innovation Project",
  summary:
    "Fusing Indigenous Australian mining knowledge with modern design thinking to inspire sustainable resource education.",
  highlights: [
    "Consulted with cultural and archaeology experts to ground the work in authentic knowledge.",
    "Designed an interactive exhibit concept for Mackay Artspace, emphasising Country-led storytelling.",
    "Developed hands-on learning touchpoints that translate history into future-ready STEM pathways."
  ],
  callout: "Tap into the full project breakdown, research insights, and exhibit concept plan.",
  gallery: [
    { src: "/assets/innovation-1.jpg", alt: "Team collaborating on innovation research" },
    { src: "/assets/innovation-2.jpg", alt: "Storyboard concept for Indigenous mining exhibit" },
    { src: "/assets/innovation-3.jpg", alt: "Prototype artefact display concept" }
  ]
};

export type MiningInsight = {
  heading: string;
  body: string;
};

export const miningInsights: MiningInsight[] = [
  {
    heading: "Tens of thousands of years of expertise",
    body: "Indigenous communities have honed site selection, extraction, and material trade with a deep respect for Country."
  },
  {
    heading: "Sustainable by design",
    body: "Mining approaches prioritised cultural needs over mass extraction, leaving ecosystems and songlines intact."
  },
  {
    heading: "Ochre, flint, and more",
    body: "High-value resources supported art, ceremony, trade networks, and innovative toolmaking across the continent."
  },
  {
    heading: "Wilgie Mia as a global reference",
    body: "One of the world's oldest known mines demonstrates advanced geology, safety, and resource management practices."
  }
];

export type AboutSection = {
  title: string;
  paragraphs: string[];
  stats: Array<{
    label: string;
    value: string;
  }>;
  image: {
    src: string;
    alt: string;
  };
};

export const aboutSection: AboutSection = {
  title: "About St Patrick's College Mackay",
  paragraphs: [
    "St Patrick's College Mackay is a Catholic co-educational secondary school rooted in academic excellence, innovation, and community service.",
    "Students thrive in purpose-built STEM spaces, including a robotics and technologies hub that connects classrooms with industry expertise.",
    "The robotics program empowers builders, coders, and innovators to tackle real-world problems through teamwork and competition."
  ],
  stats: [
    { label: "Robotics Cohort", value: "60+ students" },
    { label: "Industry Mentors", value: "8 partners" },
    { label: "Competitions", value: "6+ annually" }
  ],
  image: {
    src: "/assets/stp-campus.jpg",
    alt: "St Patrick's College Mackay campus exterior"
  }
};

export type ContactInfo = {
  title: string;
  description: string;
  email: string;
  phone: string;
  address: string;
  socials: Array<{
    label: string;
    href: string;
  }>;
};

export const contactInfo: ContactInfo = {
  title: "Contact St Patrick's One",
  description:
    "We welcome collaboration, mentoring, and speaking opportunities. Reach out and let's build something extraordinary together.",
  email: "stpatsonemky@gmail.com",
  phone: "+61 493 881 431",
  address: "St Patrick's College Mackay, 2 Gregory Street, Mackay QLD 4740",
  socials: [
    {
      label: "St Patrick's College Mackay",
      href: "https://www.stpats.qld.edu.au/"
    },
    {
      label: "FIRST LEGO League Australia",
      href: "https://firstaustralia.org/programs/first-lego-league/"
    }
  ]
};
