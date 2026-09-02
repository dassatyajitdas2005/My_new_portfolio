export interface Project {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  fullOverview: string;
  problemStatement: string;
  solutionStatement: string;
  category: "Health-Tech" | "Development" | "Media & Strategy";
  tags: string[];
  year: string;
  featured: boolean;
  image: string;
  role: string;
  features: string[];
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export const projectsData: Project[] = [
  {
    id: "meditrack",
    slug: "meditrack",
    title: "MediTrack",
    subtitle: "Intelligent Healthcare & Pharmacy Management Platform",
    description:
      "A comprehensive pharmacy and medicine tracking platform designed to streamline medication inventory, dosage schedules, prescription management, and stock alert analytics for clinics and pharmacies.",
    fullOverview:
      "MediTrack bridges the gap between pharmaceutical science and modern web technology. Built from first-hand healthcare insight at Haldia Institute of Pharmacy, it delivers an intuitive dashboard for managing medicine stocks, automated dosage reminder schedules, prescription record logs, and critical low-stock safety notifications.",
    problemStatement:
      "Pharmacies, caregivers, and patients struggle with medication mismanagement, inventory expiration wastage, dosage non-compliance, and fragmented paper-based prescription logs.",
    solutionStatement:
      "MediTrack provides an all-in-one digital system featuring real-time stock monitoring, automated batch expiration tracking, patient dosage reminders, and structured digital prescription records.",
    category: "Health-Tech",
    tags: ["Health-Tech", "Development", "Featured"],
    year: "2026",
    featured: true,
    image: "/images/projects/meditrack-banner.svg",
    role: "Founder & Lead Developer",
    features: [
      "Real-time pharmaceutical inventory and stock monitoring",
      "Interactive dosage reminders & adherence schedules",
      "Digital prescription storage and patient medication records",
      "Batch expiration tracking with proactive safety alerts",
      "Pharmacy analytics on fast-moving vs. slow-moving medicines",
      "Clean, accessible responsive dashboard for mobile & desktop",
    ],
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "Firebase",
      "EmailJS",
    ],
    githubUrl: "https://github.com/dassatyajitdas2005",
    liveUrl: "https://dassatyajitdas2005.github.io/my_portfolio/",
  },
  {
    id: "developer-portfolio",
    slug: "developer-portfolio",
    title: "Personal Portfolio Website",
    subtitle: "High-Performance Editorial Developer Portfolio",
    description:
      "A bespoke, minimalist developer portfolio designed with Next.js App Router, Tailwind CSS, Framer Motion animations, dynamic theme toggles, and data-driven architecture.",
    fullOverview:
      "An editorial, modern web portfolio showcasing Satyajit Das's journey across Pharmacy, Business Administration, Health-Tech development, and digital marketing. Emphasizes clean typography, smooth page transitions, responsive layout, and dark/light modes.",
    problemStatement:
      "Traditional portfolios often lack refined editorial aesthetics, smooth responsiveness, and distinct professional identity across multi-disciplinary domains.",
    solutionStatement:
      "Built with modern Next.js 15, rich animations, curated typography tokens, accessible mobile-first navigation, and verified data architecture.",
    category: "Development",
    tags: ["Development", "Design", "Featured"],
    year: "2026",
    featured: true,
    image: "/images/projects/portfolio-banner.svg",
    role: "Designer & Developer",
    features: [
      "Next.js 15 App Router with TypeScript & Tailwind CSS",
      "Custom floating desktop header & bottom mobile navigation",
      "Interactive accordions for experience & specialties with live preview",
      "Next-themes light & dark mode switcher with persistent state",
      "Framer motion scroll reveals & animated marquee strips",
      "Full SEO optimization, OpenGraph cards & accessibility support",
    ],
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Lucide React",
    ],
    githubUrl: "https://github.com/dassatyajitdas2005",
    liveUrl: "https://dassatyajitdas2005.github.io/my_portfolio/",
  },
  {
    id: "needmet-business-data",
    slug: "needmet-business-data",
    title: "NeedMet Business Listing & Operations",
    subtitle: "Enterprise Business Data & Verification System",
    description:
      "Managed verified business directory listings with precision data entry, quality assurance workflows, online presence optimization, and marketing video assets.",
    fullOverview:
      "During tenure at NeedMet, executed high-accuracy business data listing, verified merchant information, maintained structured catalogs, and produced promotional brand videos to accelerate online business discovery.",
    problemStatement:
      "Businesses require accurate, verified digital cataloging to maintain customer trust, local SEO visibility, and smooth transactional workflows.",
    solutionStatement:
      "Structured systematic data listing protocols, performed verification audits, and created branded marketing video content.",
    category: "Media & Strategy",
    tags: ["Media & Strategy", "Business"],
    year: "2026",
    featured: true,
    image: "/images/projects/needmet-banner.svg",
    role: "Data Listing Executive & Video Editor",
    features: [
      "High-accuracy business data listing & structured verification",
      "Online catalog maintenance and record updates",
      "Promotional video editing for brand positioning",
      "SEO copywriting and digital presence optimization",
    ],
    technologies: [
      "Google Sheets",
      "Data Listing Systems",
      "CapCut",
      "SEO Copywriting",
      "Digital Marketing",
    ],
  },
  {
    id: "rental-bookmipg",
    slug: "rental-bookmipg",
    title: "Rental | Bookmipg Media & Branding",
    subtitle: "Property Rental Marketing & Digital Creative Direction",
    description:
      "Produced engaging video marketing campaigns, promotional graphics, and tenant engagement content for property rental operations in Haldia.",
    fullOverview:
      "Led graphic design and video editing initiatives at Rental | Bookmipg for 8 months. Created polished promotional videos, high-converting social creatives, and rental listing presentations.",
    problemStatement:
      "Rental property businesses face high customer acquisition friction due to poor visual presentation and unengaging listing media.",
    solutionStatement:
      "Engineered professional video walkthroughs, visual branding banners, and structured digital marketing assets.",
    category: "Media & Strategy",
    tags: ["Media & Strategy", "Design"],
    year: "2025",
    featured: true,
    image: "/images/projects/bookmipg-banner.svg",
    role: "Video Editor & Graphic Designer",
    features: [
      "High-impact property marketing video editing",
      "Social media banner and poster design",
      "Visual storytelling for student & professional rentals",
      "Brand asset consistency across marketing channels",
    ],
    technologies: [
      "CapCut",
      "Graphic Design",
      "Poster Design",
      "Video Editing",
      "Brand Strategy",
    ],
  },
  {
    id: "tech-it-youtube",
    slug: "tech-it-youtube",
    title: "Tech IT & Mr. Career YouTube Platform",
    subtitle: "Educational Tech Content & Career Guidance Video Production",
    description:
      "Created, edited, and published high-engagement educational technology tutorials and career-focused guidance videos for students and aspiring professionals.",
    fullOverview:
      "Directed tech-focused content creation for over a year across Tech IT and Mr. Career initiatives. Delivered structured career counseling media, programming overviews, and technological insights for student audiences.",
    problemStatement:
      "Students often lack accessible, clear, and engaging video explanations of modern technology pathways and career opportunities.",
    solutionStatement:
      "Produced structured video series combining technical tutorials, career roadmap breakdowns, and engaging motion editing.",
    category: "Media & Strategy",
    tags: ["Media & Strategy", "Development"],
    year: "2025",
    featured: false,
    image: "/images/projects/youtube-banner.svg",
    role: "Content Creator & Video Producer",
    features: [
      "Tech tutorial production and curriculum structuring",
      "Career roadmaps and educational video series for students",
      "Motion graphics, audio enhancement, and pacing optimization",
      "Audience engagement analytics and content strategy",
    ],
    technologies: [
      "Video Editing",
      "CapCut",
      "SEO Copywriting",
      "Tech Education",
      "Content Innovation",
    ],
  },
];
