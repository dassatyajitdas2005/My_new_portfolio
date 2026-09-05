import { profileData } from "./profile";
import { projectsData } from "./projects";
import { skillsList } from "./skills";
import { experienceData } from "./experience";
import { educationData } from "./education";
import { awardsData } from "./awards";

export const SYSTEM_PROMPT = `You are "SD AI", the personal interactive AI assistant for Satyajit Das's portfolio.
Your role is to represent Satyajit Das accurately, professionally, and enthusiastically to recruiters, clients, and fellow developers.

### Satyajit's Core Profile:
- **Name**: ${profileData.name} (${profileData.initials})
- **Role**: ${profileData.role}
- **Headline**: ${profileData.headline}
- **Location**: ${profileData.location}
- **Education**: 
  - Diploma in Pharmacy at Haldia Institute of Pharmacy (Final Year, 2024-2026)
  - Bachelor of Business Administration (BBA) at Manipal Academy of Higher Education (MAHE)
- **Email**: ${profileData.email}
- **Phone**: ${profileData.phone}
- **Socials**:
  - LinkedIn: ${profileData.linkedInUrl}
  - GitHub: ${profileData.githubUrl}
  - X / Twitter: ${profileData.twitterUrl}
  - Instagram: ${profileData.instagramUrl}
- **Resume**: Available for viewing and download at /resume.pdf

### Key Projects:
${projectsData
  .map(
    (p) => `- **${p.title}** (${p.year}): ${p.description}. Tech: ${p.tags.join(", ")}. Live: ${p.liveUrl || "Available on request"}, Repo: ${p.githubUrl || "Available on request"}`
  )
  .join("\n")}

### Skills & Tools:
${skillsList.map((s) => s.name).join(", ")}
Specialties: Pharmacy Practice, Health-Tech Systems (MediTrack), Web Development (Next.js, React, TypeScript, JavaScript), Data & Analytics (Python, Pandas, NumPy, MySQL, PostgreSQL, Power BI, MS Excel, Tableau), Design (Figma, Canva).

### Behavioral Guidelines:
1. Speak in first/third person representing Satyajit ("Satyajit is...", "He builds...", "I can tell you that Satyajit...").
2. Respond in the same language as the user: English if asked in English, Hinglish if asked in Hinglish or Hindi.
3. Be concise, friendly, and structured (use bullet points or bold text where appropriate).
4. Direct users to the contact form (/contact) or email (${profileData.email}) if they want to hire or collaborate.
5. If asked something completely unrelated to Satyajit or tech/healthcare, politely steer the conversation back to Satyajit's work and portfolio.`;

/**
 * Intelligent local response engine for when no Gemini API key is configured or offline.
 */
export function getLocalAIResponse(query: string): string {
  const q = query.toLowerCase().trim();

  // Greetings
  if (/^(hi|hello|hey|hii|hola|namaste|helo|sup)\b/i.test(q)) {
    return `Hello! 👋 I am **SD AI**, Satyajit Das's portfolio assistant. 

I can tell you all about Satyajit's:
- 🏥 **Health-Tech & Pharmacy projects** (like *MediTrack*)
- 💻 **Tech Stack** (Next.js, React, Python, SQL, Power BI, etc.)
- 🎓 **Education** (Haldia Institute of Pharmacy & Manipal University)
- 📄 **Resume & Work History**
- 📬 **How to contact him**

What would you like to explore?`;
  }

  // MediTrack / Projects
  if (q.includes("meditrack") || q.includes("project") || q.includes("work") || q.includes("build") || q.includes("app")) {
    const meditrack = projectsData.find((p) => p.id === "meditrack") || projectsData[0];
    return `### 🏥 Featured Project: **${meditrack.title}**
${meditrack.description}

**Key Highlights:**
- **Domain**: Health-Tech & Pharmacy Inventory System
- **Core Features**: Medication expiry tracking, dosage alerts, patient record management, prescription handling.
- **Tech Stack**: Next.js, React, TypeScript, Tailwind CSS, Firebase.

Satyajit has also worked on:
- **PharmaCare Hub**: Clinical Drug Information Portal
- **Business Data Engine**: Quantitative analytics & marketing operations
- **BrandPulse Media**: High-retention promotional digital campaigns

Would you like to know how to view the live demo or code repository?`;
  }

  // Skills / Tech Stack
  if (q.includes("skill") || q.includes("stack") || q.includes("tech") || q.includes("language") || q.includes("python") || q.includes("react") || q.includes("javascript")) {
    return `### ⚡ Satyajit's Technical & Analytical Skills

- **Web Development**: JavaScript, TypeScript, React.js, Next.js, HTML5, CSS3, Tailwind CSS, Node.js, Express.js
- **Databases & Cloud**: MySQL, PostgreSQL, MongoDB, Firebase, Docker
- **Data Science & BI**: Python, Pandas, NumPy, Power BI, MS Excel, Tableau
- **Design & Tools**: Figma, Canva, Git & GitHub, Jira, VS Code
- **Healthcare & Clinical**: Pharmacovigilance, MedDRA, Patient Counselling, GMP, Drug Safety, FIFO Inventory

He uniquely combines **pharmaceutical healthcare expertise** with **modern software development**!`;
  }

  // Education / College / Degree
  if (q.includes("education") || q.includes("college") || q.includes("degree") || q.includes("study") || q.includes("pharmacy") || q.includes("school") || q.includes("bba")) {
    return `### 🎓 Academic Background

1. **Diploma in Pharmacy** (Final Year, 2024–2026)
   - *Haldia Institute of Pharmacy (HIP)*
   - Focus: Drug Safety, Pharmacovigilance, Patient Counseling, GMP, Pharmacology.

2. **Bachelor of Business Administration (BBA)**
   - *Manipal Academy of Higher Education (MAHE)*
   - Focus: Management Strategy, Business Operations, Digital Marketing, Analytics.

This dual discipline enables Satyajit to bridge clinical healthcare insight with scalable business technology!`;
  }

  // Resume / CV
  if (q.includes("resume") || q.includes("cv") || q.includes("download") || q.includes("pdf")) {
    return `### 📄 Satyajit's Resume

You can view and download his complete updated resume here:
👉 [**Download Resume (PDF)**](${profileData.resumeUrl})

It details his clinical knowledge, software development projects, technical skills, and academic achievements.`;
  }

  // Contact / Hire / Email / Phone / Socials
  if (q.includes("contact") || q.includes("hire") || q.includes("email") || q.includes("phone") || q.includes("reach") || q.includes("twitter") || q.includes("linkedin") || q.includes("github")) {
    return `### 📬 Get In Touch With Satyajit

He is currently **Available for Opportunities** (internships, freelance, health-tech collaborations)!

- 📧 **Email**: [${profileData.email}](mailto:${profileData.email})
- 📱 **Phone / WhatsApp**: ${profileData.phone}
- 💼 **LinkedIn**: [Satyajit Das](${profileData.linkedInUrl})
- 🐙 **GitHub**: [github.com/dassatyajitdas2005](${profileData.githubUrl})
- 🐦 **X (Twitter)**: [@Satyajit1873526](${profileData.twitterUrl})
- 📍 **Location**: ${profileData.location}

You can also send a direct message via the [/contact](/contact) page!`;
  }

  // Who is Satyajit / About / Bio
  if (q.includes("who is") || q.includes("about") || q.includes("satyajit") || q.includes("introduce") || q.includes("background")) {
    return `**Satyajit Das** is a Pharmacy scholar at Haldia Institute of Pharmacy and BBA student at Manipal Academy of Higher Education who builds impactful digital solutions at the intersection of healthcare and web technology.

He is best known for creating **MediTrack**, an innovative health-tech inventory and medication tracking platform, while continuously mastering full-stack web development (Next.js, TypeScript, React) and data analytics (Python, SQL, Power BI).`;
  }

  // Default helpful response
  return `That's an interesting question! As Satyajit's AI assistant, I can share detailed insights about his:
- 🏥 **Health-Tech Projects** (like MediTrack)
- 💻 **Programming & BI Tools** (React, Next.js, Python, SQL, Power BI, Excel)
- 🎓 **Pharmacy & Business Education**
- 📄 **Official Resume** (available at [/resume.pdf](/resume.pdf))
- 📬 **Contact & Collaboration Details**

Try asking: *"What is MediTrack?"*, *"What are his top skills?"*, or *"How can I hire Satyajit?"*!`;
}
