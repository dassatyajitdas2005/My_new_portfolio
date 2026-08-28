export interface Experience {
  id: string;
  role: string;
  company: string;
  companyUrl?: string;
  period: string;
  duration: string;
  location: string;
  description: string;
  achievements: string[];
  skills: string[];
}

export const experienceData: Experience[] = [
  {
    id: "needmet-data",
    role: "Data Listing Executive",
    company: "NeedMet",
    companyUrl: "#",
    period: "June 2026 — July 2026",
    duration: "2 months",
    location: "Haldia, West Bengal",
    description:
      "Managed business data listing with precision and attention to detail. Verified, structured, and maintained critical online business listings and customer-facing catalogs.",
    achievements: [
      "Ensured high data integrity across business listings and verification pipelines",
      "Maintained updated merchant catalogs and digital information records",
      "Streamlined listing turnaround time with structured validation checks",
    ],
    skills: ["Google Sheets", "Data Verification", "Data Operations", "Business Listing"],
  },
  {
    id: "needmet-video",
    role: "Video Editor",
    company: "NeedMet",
    companyUrl: "#",
    period: "April 2026 — June 2026",
    duration: "3 months",
    location: "Haldia, West Bengal",
    description:
      "Edited business videos for branding, social outreach, and marketing campaigns. Created engaging, high-quality promotional content with professional transitions and sound design.",
    achievements: [
      "Produced multi-platform marketing video assets for brand outreach",
      "Enhanced brand consistency and visual storytelling across campaigns",
      "Delivered high-retention video formats optimized for digital platforms",
    ],
    skills: ["CapCut", "Video Editing", "Creative Strategy", "Digital Marketing"],
  },
  {
    id: "catalyst-club",
    role: "Member",
    company: "CATALYST CLUB HIP",
    companyUrl: "#",
    period: "February 2025 — July 2026",
    duration: "1 year 6 months",
    location: "Haldia, West Bengal",
    description:
      "Active member at Catalyst Club, Haldia Institute of Pharmacy. Participated in healthcare innovation initiatives, student leadership, technical events, and pharmaceutical workshops.",
    achievements: [
      "Collaborated on academic and healthcare innovation initiatives",
      "Co-organized club events, knowledge sharing sessions, and student activities",
      "Fostered peer discussions around emerging health-tech and pharmacy systems",
    ],
    skills: ["Leadership", "Healthcare Innovation", "Collaboration", "Event Coordination"],
  },
  {
    id: "youtube-creator",
    role: "Content Creator & Video Editor",
    company: "YouTube (Tech IT & Mr. Career)",
    companyUrl: "#",
    period: "November 2024 — November 2025",
    duration: "1 year 1 month",
    location: "India",
    description:
      "Produced and edited engaging technology tutorials for 'Tech IT' and career-focused educational video content for 'Mr. Career' to guide students in tech and career pathways.",
    achievements: [
      "Created structured video modules explaining technological concepts clearly",
      "Scripted, edited, and formatted educational videos to maximize viewer retention",
      "Built an audience of student learners seeking career guidance and tech knowledge",
    ],
    skills: ["Tech Content Creation", "Educational Media", "SEO Copywriting", "Video Editing"],
  },
  {
    id: "bookmipg-media",
    role: "Video Editor & Graphic Designer",
    company: "Rental | Bookmipg",
    companyUrl: "#",
    period: "February 2025 — September 2025",
    duration: "8 months",
    location: "Haldia, West Bengal",
    description:
      "Designed marketing graphics, posters, and edited high-converting promotional videos for rental business marketing, accelerating customer inquiries and brand awareness.",
    achievements: [
      "Designed visual identity assets, promotional posters, and social media flyers",
      "Produced engaging video tours and property walkthroughs for rental listings",
      "Helped enhance brand recognition in the local Haldia student & professional market",
    ],
    skills: ["Graphic Design", "Poster Design", "Video Editing", "Branding Strategy"],
  },
];
