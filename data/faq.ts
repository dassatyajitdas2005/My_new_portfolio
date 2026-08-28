export interface FAQItem {
  id: string;
  number: string;
  question: string;
  answer: string;
}

export const faqData: FAQItem[] = [
  {
    id: "faq-1",
    number: "01",
    question: "What is your primary focus and background?",
    answer:
      "I am a Pharmacy student at Haldia Institute of Pharmacy and a BBA scholar at Manipal Academy of Higher Education. I specialize in the intersection of healthcare sciences, web technology, and digital business operations, creating practical health-tech tools and data-driven solutions.",
  },
  {
    id: "faq-2",
    number: "02",
    question: "What is MediTrack and how was it developed?",
    answer:
      "MediTrack is my flagship health-tech project — an intelligent medicine and pharmacy management platform. It addresses pharmacy inventory wastage, expiration tracking, prescription cataloging, and patient dosage adherence through real-time notifications and streamlined dashboard workflows.",
  },
  {
    id: "faq-3",
    number: "03",
    question: "What technologies and creative tools do you work with?",
    answer:
      "For web development, I work with modern Next.js, React, TypeScript, Tailwind CSS, HTML5, CSS3, and Node.js. For creative media and operations, I use CapCut for video editing, design tools for poster and graphic creation, SEO copywriting techniques, and Google Sheets for structured data modeling.",
  },
  {
    id: "faq-4",
    number: "04",
    question: "Are you available for health-tech collaborations or internship opportunities?",
    answer:
      "Yes! I am actively looking for collaborative projects, internships, and opportunities in health-tech innovation, pharmacy management systems, digital marketing, and web development. Feel free to connect via the contact form, LinkedIn, or directly by email.",
  },
];
