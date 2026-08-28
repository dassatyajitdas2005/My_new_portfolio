export interface AwardItem {
  id: string;
  title: string;
  organization: string;
  date: string;
  category: string;
}

export const awardsData: AwardItem[] = [
  {
    id: "catalyst-leadership",
    title: "Active Leadership & Innovation Member",
    organization: "CATALYST CLUB — Haldia Institute of Pharmacy",
    date: "2025 — 2026",
    category: "Organization & Leadership",
  },
  {
    id: "youtube-milestone",
    title: "1+ Year Educational Tech & Career Content Creator",
    organization: "Tech IT & Mr. Career Channels",
    date: "2024 — 2025",
    category: "Digital Media & Outreach",
  },
  {
    id: "needmet-excellence",
    title: "Data Listing & Creative Video Execution Milestone",
    organization: "NeedMet Operations",
    date: "2026",
    category: "Professional Contribution",
  },
  {
    id: "academic-duality",
    title: "Dual Degree Scholar: Pharmacy (HIP) & BBA (Manipal)",
    organization: "Haldia Institute of Pharmacy & Manipal Academy",
    date: "2024 — 2026",
    category: "Academic Achievement",
  },
];
