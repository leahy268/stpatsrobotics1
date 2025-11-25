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
  { id: "sponsors", label: "Our Sponsors", to: "/sponsors" },
  { id: "about", label: "About St Patrick's", to: "/about" },
  { id: "contact", label: "Contact Us", to: "/contact" }
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
    name: "Mrs Tudehope",
    role: "Head Coach",
    description:
      "Manages and instructs robotics at St Patricks and organises events for the club.",
    image: {
      src: "/assets/team-mrstudehope.jpg",
      alt: "Mrs Tudehope coaching the team"
    }
  },
  {
    name: "Mrs Moy",
    role: "Support Coach",
    description:
      "Brings good vibes and overwhelming support to the team during practices and competitions.",
    image: {
      src: "/assets/team-mrsmoy.jpg",
      alt: "Mrs Moy supporting the team"
    }
  },
  
  {
    name: "Maddox Takken",
    role: "Lead Programmer & Builder",
    description:
      "Codes and constructs the robot so every mission run delivers high performance and reliability.",
    image: {
      src: "/assets/team-maddox.jpg",
      alt: "Maddox Takken working on the robot"
    }
  },
  {
    name: "Zachary Leahy",
    role: "Team Manager",
    description:
      "Oversees coordination, time management, and match strategy to keep the team operating smoothly.",
    image: {
      src: "/assets/team-zachary.jpg",
      alt: "Zachary Leahy presenting project notes"
    }
  },
  {
    name: "Logan Sanders",
    role: "Lead Innovator",
    description:
      "Drives the creative process, developing new solutions for team projects and presentations.",
    image: {
      src: "/assets/team-logan.jpg",
      alt: "Logan Sanders showcasing a prototype"
    }
  },
  {
    name: "Elessa Sales",
    role: "Innovation Specialist",
    description:
      "Provides research and design expertise that refines the team's presentations and supporting materials.",
    image: {
      src: "/assets/team-elessa.jpg",
      alt: "Elessa Sales preparing presentation boards"
    }
  },
  {
    name: "Kyan Woods",
    role: "Course Planner & Builder",
    description:
      "Focuses on navigation and obstacle challenges, ensuring the robot handles every course with precision.",
    image: {
      src: "/assets/team-kyan.jpg",
      alt: "Kyan Woods aligning course elements"
    }
  },
  {
    name: "Elijah Johnson",
    role: "Team Support",
    description:
      "Provides essential assistance and motivation that keeps the team energised throughout competition days.",
    image: {
      src: "/assets/team-elijah.jpg",
      alt: "Elijah Johnson supporting team prep"
    }
  }
];

export type Sponsor = {
  name: string;
  tier: string;
  description: string;
  website?: string;
  logo?: {
    src: string;
    alt: string;
  };
};

export const sponsors: Sponsor[] = [
  {
    name: "RAM Engineering Solutions",
    tier: "STEM Sponsor",
    description:
      "Provides access to real world industry experience and funding for STEM at St Patricks.",
    website: "http://www.ramengineering.com/",
    logo: {
      src: "/assets/sponsor-ram.jpg",
      alt: "RAM Engineering Solutions logo"
    }
  },
  {
    name: "Forge Engineering",
    tier: "Industry Sponsor",
    description:
      "Supports Robotics at St Patrick's with funding and knowledge to help us travel and share our story.",
    website: "https://forgeengineering.com.au/",
    logo: {
      src: "/assets/sponsor-forge.png",
      alt: "Forge Engineering logo"
    }
  },
  {
    name: "Rotary North Mackay",
    tier: "Community Sponsor",
    description:
      "Offers funding to St Patrick' STEM initiatives and community engagement.",
    website: "https://rotarymackay.org.au/index.php/mackay-region/",
    logo: {
      src: "/assets/sponsor-rotary.jpg",
      alt: "Rotary North Mackay logo"
    }
  },
  {
    name: "Dalrymple Bay Coal Terminal",
    tier: "STEM Futures Sponsor",
    description:
      "Invests in regional STEM pathways, helping our team travel, compete, and present our innovation project to new audiences.",
    website: "https://www.dbct.com.au/",
    logo: {
      src: "/assets/sponsor-dalybay.png",
      alt: "Dalrymple Bay Coal Terminal logo"
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
    { src: "/assets/innovation-1.jpg", alt: "Team competing at 2025 regional robotics competition in Mackay" },
    { src: "/assets/innovation-2.jpg", alt: "Team photo at 2025 regional robotics competition in Mackay" }
  ]
};

export type MiningInsight = {
  id: string;
  heading: string;
  body: string;
  detail: string;
  image?: {
    src: string;
    alt: string;
  };
};

export const miningInsights: MiningInsight[] = [
  {
    id: "deep-time-knowledge",
    heading: "Deep time knowledge",
    body: "Indigenous Australian mining stretches back tens of millennia, guided by intimate knowledge of Country and its resources.",
    detail:
      "Indigenous Australian mining stretches back tens of millennia, guided by intimate knowledge of Country and its resources. Archaeological evidence from across the continent reveals carefully managed quarries, ochre pits and stone extraction sites dating back more than 30,000–40,000 years—among the oldest mining activities anywhere on Earth. These practices were not incidental; they reflected a highly developed understanding of geology, stone quality, colour variation, seasonal conditions, and site safety. Through oral tradition, story, songlines and ceremonial teaching, knowledge holders passed down precise information about where to dig, how much to take, and the cultural protocols required before any extraction could occur. Mining was therefore embedded within a broader system of law, identity, and custodianship, demonstrating a time-depth of resource management unparalleled in Australia’s industrial history."
    // image: { src: "/assets/mining-deep-time.jpg", alt: "Ancient mining site" }
  },
  {
    id: "purpose-over-profit",
    heading: "Purpose over profit",
    body: "Materials were extracted for cultural purpose, ceremony, and trade—not mass production—ensuring balance with the environment.",
    detail:
      "For Indigenous Australians, mining was never about maximising output or exploiting the land for material gain. Materials were extracted for cultural purpose, ceremony, exchange and community use, always with a strong ethic of balance and sustainability. Ochre was gathered for law and ceremony, stone was shaped into tools essential for food, hunting and protection, and clays were collected for art, healing, and body decoration. Importantly, extraction occurred only when required and only in accordance with cultural authority. Elders ensured that quarries and pits were not overworked, that sacred areas were respected, and that the integrity of Country was maintained. This contrasts sharply with contemporary mining approaches; rather than large-scale removal, Indigenous extraction was precise, respectful and aligned with reciprocal responsibilities to the land."
    // image: { src: "/assets/mining-purpose.jpg", alt: "Ceremonial ochre use" }
  },
  {
    id: "resource-networks",
    heading: "Resource networks",
    body: "Ochre, flint, stone, and clay travelled across vast trade routes, supporting art, tools, ceremony, and knowledge-sharing.",
    detail:
      "Ochre, flint, stone and clay formed the backbone of sophisticated trade and knowledge networks that stretched across the continent. High-quality materials extracted in one region could travel hundreds or even thousands of kilometres through established trading corridors, with goods exchanged between Nations as part of Diplomacy, kinship relationships and ceremonial obligations. Red ochre from Wilgie Mia, for example, has been found far into the Central Desert, while stone axes from northern Queensland were traded deep into the Gulf and western regions. These resource flows were accompanied by the movement of stories, law, artistry and technology, reinforcing social cohesion and cultural continuity. Mining products were therefore not isolated materials; they were vehicles of connection, identity and shared cultural knowledge.",
      image: { src: "/assets/resource-networks.png", alt: "Ancient trade routes" }
  },
  {
    id: "wilgie-mia-leadership",
    heading: "Wilgie Mia leadership",
    body: "Sites like Western Australia's Wilgie Mia reveal advanced geology, resource management, and cultural stewardship that predate modern mining.",
    detail:
      "Sites such as Wilgie Mia in Western Australia—often cited as the world’s oldest known ochre mine—demonstrate the remarkable sophistication of Indigenous mining long before the arrival of industrial techniques. At Wilgie Mia, miners created deep underground chambers, ventilation pathways, and carefully stabilised extraction zones using only stone tools and cultural engineering knowledge. Strict protocols governed who could access the site, when extraction could occur, and how ochre should be treated and transported. This represents a complex system of geology, resource management, cultural authority and environmental stewardship that predates modern mining principles by tens of thousands of years. Far from being primitive operations, these sites reflect leadership, organisation and expertise that rival early global mining traditions—and continue to hold deep cultural significance to Traditional Owners today.",
    image: { src: "/assets/mining-large.jpg", alt: "Wilgie Mia ochre mine" }
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
    { label: "Robotics Subject", value: "60+ students" },
    { label: "Industry Sponsors", value: "5 partners" },
    { label: "Competitions", value: "2+ annually" }
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
  phone: "(07) 4994 8700",
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
