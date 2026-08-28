export interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  period: string;
  location: string;
  highlights?: string[];
  iconType: "graduation" | "pharmacy" | "school" | "book";
}

export const educationData: Education[] = [
  {
    id: "manipal",
    institution: "Manipal Academy of Higher Education",
    degree: "Bachelor of Business Administration (BBA)",
    field: "Business Administration & Management, General",
    period: "Graduating July 2026",
    location: "India",
    highlights: [
      "Core focus on Business Strategy, Operations Management & Entrepreneurship",
      "Digital transformation and market disruption methodologies",
      "Strategic business scaling, financial fundamentals & leadership",
    ],
    iconType: "graduation",
  },
  {
    id: "hip",
    institution: "Haldia Institute of Pharmacy",
    degree: "Pharmacy Program",
    field: "Pharmacy & Pharmaceutical Sciences",
    period: "November 2024 — June 2026",
    location: "Haldia, West Bengal, India",
    highlights: [
      "In-depth study of pharmacology, pharmaceutics, and healthcare systems",
      "Foundation for health-tech application development and medication safety",
      "Active member of CATALYST CLUB HIP for innovation & student initiatives",
    ],
    iconType: "pharmacy",
  },
  {
    id: "sundarar-hs",
    institution: "Sundarar High School (H.S)",
    degree: "Higher Secondary Education (H.S)",
    field: "Science Stream",
    period: "October 2021 — October 2023",
    location: "West Bengal, India",
    highlights: [
      "Completed rigorous pre-university curriculum in Science stream",
      "Strong analytical, scientific, and quantitative problem-solving foundation",
    ],
    iconType: "school",
  },
  {
    id: "wbbse-matric",
    institution: "West Bengal Board of Secondary Education (WBBSE)",
    degree: "Matriculation (10th)",
    field: "Secondary Education",
    period: "Completed March 2021",
    location: "West Bengal, India",
    highlights: [
      "Comprehensive secondary education across foundational sciences & mathematics",
    ],
    iconType: "book",
  },
];
