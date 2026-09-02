export interface SkillItem {
  name: string;
  category: "dev" | "health" | "media" | "business";
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
  { name: "JavaScript", category: "dev" },
  { name: "Firebase", category: "dev" },
  { name: "EmailJS", category: "dev" },
  { name: "Web Development", category: "dev" },
  { name: "Health-Tech Systems", category: "health" },
  { name: "Pharmacy Practice", category: "health" },
  { name: "Business Strategy", category: "business" },
  { name: "SEO Copywriting", category: "media" },
  { name: "CapCut Video Editing", category: "media" },
  { name: "Poster & Graphic Design", category: "media" },
  { name: "Google Sheets Analytics", category: "business" },
  { name: "Digital Transformation", category: "business" },
  { name: "Entrepreneurship", category: "business" },
  { name: "Creative Problem Solving", category: "business" },
  { name: "Data Listing Operations", category: "business" },
  { name: "React & Next.js", category: "dev" },
  { name: "TypeScript", category: "dev" },
  { name: "HTML5 & CSS3", category: "dev" },
  { name: "Tailwind CSS", category: "dev" },
  { name: "Git & GitHub", category: "dev" },
  { name: "Market Disruption", category: "business" },
  { name: "Content Innovation", category: "media" },
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
