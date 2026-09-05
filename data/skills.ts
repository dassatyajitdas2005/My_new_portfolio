export interface SkillItem {
  name: string;
  category: "dev" | "health" | "media" | "business";
  icon?: string;
  level?: string;
}

export interface ExpertiseArea {
  id: string;
  title: string;
  icon: string;
  tagline: string;
  description: string;
  capabilities: string[];
  tools: string[];
  accent: string;
}

export const skillsList: SkillItem[] = [
  { name: "JavaScript", category: "dev", icon: "/assets/images/skills/JavaScript.svg" },
  { name: "TypeScript", category: "dev", icon: "/assets/images/skills/TypeScript.svg" },
  { name: "React.js", category: "dev", icon: "/assets/images/skills/React.svg" },
  { name: "Next.js", category: "dev", icon: "/assets/images/skills/Next.js.svg" },
  { name: "Node.js", category: "dev", icon: "/assets/images/skills/Node.js.svg" },
  { name: "Express.js", category: "dev", icon: "/assets/images/skills/Express.svg" },
  { name: "MySQL", category: "dev", icon: "/assets/images/skills/MySQL.svg" },
  { name: "PostgreSQL", category: "dev", icon: "/assets/images/skills/PostgresSQL.svg" },
  { name: "MongoDB", category: "dev", icon: "/assets/images/skills/MongoDB.svg" },
  { name: "Pandas", category: "dev", icon: "/assets/images/skills/Pandas.svg" },
  { name: "NumPy", category: "dev", icon: "/assets/images/skills/NumPy.svg" },
  { name: "Power BI", category: "business", icon: "/assets/images/skills/PowerBI.svg" },
  { name: "Tableau", category: "business", icon: "/assets/images/skills/Tableau.svg" },
  { name: "MS Excel", category: "business", icon: "/assets/images/skills/Excel.svg" },
  { name: "VS Code", category: "dev", icon: "/assets/images/skills/VSCode.svg" },
  { name: "Python", category: "dev", icon: "/assets/images/skills/Python.svg" },
  { name: "HTML5", category: "dev", icon: "/assets/images/skills/HTML5.svg" },
  { name: "CSS3", category: "dev", icon: "/assets/images/skills/CSS3.svg" },
  { name: "Tailwind CSS", category: "dev", icon: "/assets/images/skills/TailwindCSS.svg" },
  { name: "Git", category: "dev", icon: "/assets/images/skills/Git.svg" },
  { name: "Figma", category: "media", icon: "/assets/images/skills/Figma.svg" },
  { name: "Jira", category: "business", icon: "/assets/images/skills/Jira.svg" },
  { name: "Docker", category: "dev", icon: "/assets/images/skills/Docker.svg" },
  { name: "Firebase", category: "dev", icon: "/assets/images/skills/Firebase.svg" },
  { name: "Redux", category: "dev", icon: "/assets/images/skills/Redux.svg" },
  { name: "Google Sheets", category: "business", icon: "/assets/images/skills/GoogleSheets.svg" },
  { name: "Canva", category: "media", icon: "/assets/images/skills/Canva.svg" },
  { name: "Health-Tech Systems", category: "health" },
  { name: "Pharmacy Practice", category: "health" },
  { name: "Business Strategy", category: "business" },
  { name: "SEO Copywriting", category: "media" },
];

export const expertiseAreas: ExpertiseArea[] = [
  {
    id: "health-tech",
    title: "Health-Tech & Pharmacy Systems",
    icon: "Activity",
    tagline: "Bridging clinical pharmacy knowledge with digital innovation",
    description:
      "Combining pharmacy coursework with modern software to engineer digital tools that eliminate medication errors, optimize pharmacy inventory, and improve patient adherence.",
    capabilities: [
      "Pharmacy stock & medication tracking systems",
      "Dosage reminder algorithms & schedule management",
      "Healthcare compliance & patient record structuring",
      "Drug information dissemination & digital health campaigns",
    ],
    tools: ["MediTrack Platform", "Pharmacy Management", "Health Informatics"],
    accent: "from-emerald-500/20 to-lime-500/20",
  },
  {
    id: "web-dev",
    title: "Web & Frontend Development",
    icon: "Code",
    tagline: "Building clean, fast, and responsive user experiences",
    description:
      "Creating modern web interfaces with Next.js, React, TypeScript, and Tailwind CSS. Focused on accessible layouts, smooth micro-interactions, and modular codebases.",
    capabilities: [
      "Responsive web application development",
      "Clean TypeScript component architecture",
      "Framer Motion animations & smooth interactions",
      "SEO best practices & high performance web delivery",
    ],
    tools: ["Next.js", "React", "TypeScript", "Tailwind CSS", "HTML5/CSS3", "Git"],
    accent: "from-blue-500/20 to-cyan-500/20",
  },
  {
    id: "media-strategy",
    title: "Creative Strategy & Video Production",
    icon: "Film",
    tagline: "Producing engaging digital media & high-converting content",
    description:
      "Experienced in video editing, promotional poster design, and SEO-optimized copywriting for tech tutorials, career guidance, and business brand building.",
    capabilities: [
      "High-retention promotional video editing",
      "YouTube tech tutorial & career content production",
      "Brand poster, banner & visual asset design",
      "SEO copywriting & digital marketing campaigns",
    ],
    tools: ["CapCut", "Video Editing", "Poster Design", "SEO Copywriting", "Canva"],
    accent: "from-purple-500/20 to-pink-500/20",
  },
  {
    id: "business-ops",
    title: "Business Strategy & Data Operations",
    icon: "TrendingUp",
    tagline: "Driving operational clarity and scalable business growth",
    description:
      "Leveraging BBA coursework in general management to organize business data, optimize operational workflows, and execute market growth strategies.",
    capabilities: [
      "Structured business data listing & verification",
      "Data organization & spreadsheet modeling in Google Sheets",
      "Startup scaling & digital transformation strategy",
      "Market opportunity analysis & operational planning",
    ],
    tools: ["Google Sheets", "Business Strategy", "Data Operations", "Market Analysis"],
    accent: "from-amber-500/20 to-orange-500/20",
  },
];
