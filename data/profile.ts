export interface SocialLink {
  name: string;
  url: string;
  label: string;
}

export interface ProfileData {
  name: string;
  initials: string;
  avatarUrl: string;
  role: string;
  headline: string;
  heroGreeting: string;
  heroHeadline1: string;
  heroHeadlineAccent: string;
  heroHeadline2: string;
  heroDescription: string;
  aboutStatement: string;
  aboutTitle: string;
  aboutDescription: string;
  location: string;
  address: string;
  email: string;
  phone: string;
  portfolioUrl: string;
  linkedInUrl: string;
  githubUrl: string;
  availableForWork: boolean;
  languages: { language: string; proficiency: string }[];
  socialLinks: SocialLink[];
}

export const profileData: ProfileData = {
  name: "Satyajit Das",
  initials: "SD",
  avatarUrl: "/images/satyajit.jpg",
  role: "Pharmacy Student & Business Strategist | Health-Tech Innovator",
  headline: "Pharmacy || Business || Creative Strategist, Poster Design || Passionate About Health - Tech & Content Innovation",
  heroGreeting: "Hey! It's me Satyajit,",
  heroHeadline1: "Building",
  heroHeadlineAccent: "Health-Tech & Digital Solutions,",
  heroHeadline2: "That Inspire.",
  heroDescription: "Pharmacy & Business Management student passionate about merging pharmaceutical science with modern web development, data-driven strategy, and digital innovation to solve real-world healthcare challenges.",
  aboutStatement: "I'm Satyajit — a Pharmacy student at Haldia Institute of Pharmacy and BBA scholar at Manipal Academy of Higher Education who builds impactful health-tech applications like MediTrack, creates data-driven business campaigns, and explores modern web development. With hands-on experience in digital marketing, video production, and business data operations, I bridge healthcare insight with creative and scalable digital solutions. Committed to continuous growth and building ventures that transform healthcare delivery.",
  aboutTitle: "I Build Solutions That Matter.",
  aboutDescription: "I'm Satyajit — a pharmacy student and aspiring entrepreneur driven by innovation at the intersection of healthcare, business strategy, and web technology. From developing intuitive health management applications like MediTrack to crafting high-engagement digital media campaigns, I focus on building practical tools that empower users and streamline health information.",
  location: "Greater Kolkata Area, West Bengal, India",
  address: "Belar, Dhalbelun, Paschim Medinipur, 721424",
  email: "dassatyajitdas2005@gmail.com",
  phone: "+91 7872624993",
  portfolioUrl: "https://dassatyajitdas2005.github.io/my_portfolio/",
  linkedInUrl: "https://www.linkedin.com/in/satyajit-das-7822ab300",
  githubUrl: "https://github.com/dassatyajitdas2005",
  availableForWork: true,
  languages: [
    { language: "Bengali", proficiency: "Full Professional" },
    { language: "Hindi", proficiency: "Professional Working" },
    { language: "English", proficiency: "Professional Working" },
  ],
  socialLinks: [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/satyajit-das-7822ab300",
      label: "LinkedIn",
    },
    {
      name: "GitHub",
      url: "https://github.com/dassatyajitdas2005",
      label: "GitHub",
    },
    {
      name: "Gmail",
      url: "mailto:dassatyajitdas2005@gmail.com",
      label: "Gmail",
    },
    {
      name: "Portfolio",
      url: "https://dassatyajitdas2005.github.io/my_portfolio/",
      label: "Live Site",
    },
  ],
};
