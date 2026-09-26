import type { Metadata } from "next";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Navbar } from "@/components/Navbar";
import { MobileNav } from "@/components/MobileNav";
import { Footer } from "@/components/Footer";
import { ScrollObserver } from "@/components/ScrollObserver";
import { profileData } from "@/data/profile";
import { AIChatWidget } from "@/components/AIChat/AIChatWidget";
import "./globals.css";

import { faqData } from "@/data/faq";

const siteUrl = "https://satyajitdas.in";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${profileData.name} | Health-Tech Innovator, Pharmacy Scholar & Web Developer`,
    template: `%s | ${profileData.name}`,
  },
  description:
    "Official portfolio of Satyajit Das — Pharmacy scholar at Haldia Institute of Pharmacy, BBA at MAHE, creator of MediTrack, and developer bridging healthcare sciences with modern web engineering.",
  keywords: [
    "Satyajit Das",
    "Satyajit Das portfolio",
    "satyajitdas.in",
    "Satyajit Das Kharagpur",
    "Satyajit Das MediTrack",
    "Health-Tech Innovator",
    "Pharmacy Scholar",
    "Web Developer Kolkata",
    "React Next.js Developer",
    "MediTrack Health App",
    "Belda Super Speciality Hospital",
    "NeedMet Satyajit Das",
    "Haldia Institute of Pharmacy",
    "Manipal Academy of Higher Education",
    "Healthcare Technology India",
    "Pharmacovigilance",
    "Hospital Pharmacy Trainee",
    "Python SQL Developer",
    "D.Pharm BBA Student",
  ],
  category: "technology",
  classification: "Portfolio, Health-Tech, Software Engineering, Pharmacy",
  authors: [{ name: profileData.name, url: siteUrl }],
  creator: profileData.name,
  publisher: profileData.name,
  alternates: {
    canonical: siteUrl,
    languages: {
      "en-US": siteUrl,
      "en-IN": siteUrl,
    },
  },
  openGraph: {
    type: "profile",
    firstName: "Satyajit",
    lastName: "Das",
    gender: "male",
    username: "dassatyajitdas2005",
    locale: "en_US",
    alternateLocale: ["en_IN"],
    url: siteUrl,
    title: `${profileData.name} | Health-Tech Innovator, Pharmacy Scholar & Web Developer`,
    description: profileData.aboutStatement,
    siteName: `${profileData.name} Portfolio`,
    images: [
      {
        url: "/images/satyajit.jpg",
        width: 800,
        height: 800,
        alt: `${profileData.name} - Health-Tech Innovator & Web Developer`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${profileData.name} | Health-Tech Innovator & Web Developer`,
    description: profileData.aboutStatement,
    creator: "@Satyajit1873526",
    images: ["/images/satyajit.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "D66YiNdMbfkrPDnugtNmltFDlHhCHVn6oXEiWPIRDdA",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
      { url: "/favicon.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  other: {
    "geo.region": "IN-WB",
    "geo.placename": "Kharagpur, Paschim Medinipur",
    "geo.position": "22.3460;87.2320",
    ICBM: "22.3460, 87.2320",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      name: profileData.name,
      alternateName: ["Satyajit", "Satyajit Das Health-Tech", "dassatyajitdas2005"],
      url: siteUrl,
      image: `${siteUrl}/images/satyajit.jpg`,
      jobTitle: "Health-Tech Innovator, Pharmacy Practitioner & Web Developer",
      description: profileData.aboutStatement,
      telephone: "+91-7872624993",
      email: "dassatyajitdas2005@gmail.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Belar, Dhalbelun",
        addressLocality: "Kharagpur, Paschim Medinipur",
        addressRegion: "West Bengal",
        postalCode: "721424",
        addressCountry: "India",
      },
      alumniOf: [
        {
          "@type": "EducationalOrganization",
          name: "Haldia Institute of Pharmacy",
          description: "Diploma in Pharmacy (D.Pharm) - 79.72%",
        },
        {
          "@type": "EducationalOrganization",
          name: "Manipal Academy of Higher Education",
          description: "Bachelor of Business Administration (BBA)",
        },
        {
          "@type": "EducationalOrganization",
          name: "Sundarar High School",
        },
      ],
      hasOccupation: [
        {
          "@type": "Occupation",
          name: "Hospital Pharmacy Trainee",
          occupationLocation: {
            "@type": "AdministrativeArea",
            name: "Belda Super Speciality Hospital, West Bengal",
          },
          description:
            "Hospital pharmacy workflow, prescription handling, medicine dispensing, inventory management, FIFO practices, and pharmaceutical documentation.",
        },
        {
          "@type": "Occupation",
          name: "Listing Executive",
          occupationLocation: {
            "@type": "AdministrativeArea",
            name: "NeedMet, West Bengal",
          },
          description:
            "Business data listing, verification, merchant catalog management, and SEO-oriented copywriting.",
        },
        {
          "@type": "Occupation",
          name: "Health-Tech Developer & Founder",
          description:
            "Founder and developer of MediTrack healthcare management and hospital internship tracking platform.",
        },
      ],
      sameAs: [
        profileData.linkedInUrl,
        profileData.githubUrl,
        profileData.twitterUrl,
        profileData.instagramUrl,
        siteUrl,
      ],
      knowsAbout: [
        "Healthcare Technology",
        "Hospital Pharmacy",
        "Pharmaceutical Documentation",
        "Pharmacovigilance",
        "MedDRA",
        "Patient Counselling",
        "Prescription Handling",
        "Drug Safety & ADR Reporting",
        "MediTrack Platform",
        "Next.js",
        "React",
        "TypeScript",
        "JavaScript",
        "HTML5 & CSS3",
        "Firebase",
        "Python",
        "SQL",
        "Power BI",
        "Data Analytics",
        "SEO & AEO (Answer Engine Optimization)",
        "Digital Marketing",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: `${profileData.name} Portfolio`,
      alternateName: ["Satyajit Das", "Satyajit Das Portfolio", "satyajitdas.in"],
      description: profileData.headline,
      publisher: {
        "@id": `${siteUrl}/#person`,
      },
      inLanguage: "en-US",
    },
    {
      "@type": "ProfilePage",
      "@id": `${siteUrl}/#profilepage`,
      url: siteUrl,
      name: `${profileData.name} - Official Portfolio & Profile`,
      isPartOf: {
        "@id": `${siteUrl}/#website`,
      },
      about: {
        "@id": `${siteUrl}/#person`,
      },
      mainEntity: {
        "@id": `${siteUrl}/#person`,
      },
      dateCreated: "2025-01-01",
      dateModified: "2026-03-26",
    },
    {
      "@type": "SoftwareApplication",
      "@id": `${siteUrl}/#meditrack`,
      name: "MediTrack",
      alternateName: "MediTrack Healthcare Management Platform",
      applicationCategory: "HealthApplication",
      operatingSystem: "Web Browser",
      url: "https://meditrack-bssh.vercel.app/",
      creator: {
        "@id": `${siteUrl}/#person`,
      },
      description:
        "Hospital Internship & Training Management System and healthcare stock platform developed by Satyajit Das.",
    },
    {
      "@type": "FAQPage",
      "@id": `${siteUrl}/#faq`,
      mainEntity: [
        ...faqData.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
        {
          "@type": "Question",
          name: "Who is Satyajit Das?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Satyajit Das is a Pharmacy student at Haldia Institute of Pharmacy and BBA scholar at Manipal Academy of Higher Education who develops health-tech platforms like MediTrack and modern web applications.",
          },
        },
        {
          "@type": "Question",
          name: "Where can I view Satyajit Das's MediTrack project?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "MediTrack is live and accessible at https://meditrack-bssh.vercel.app/.",
          },
        },
        {
          "@type": "Question",
          name: "How can I download Satyajit Das's official resume?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Satyajit Das's official resume is available for viewing and direct PDF download at https://satyajitdas.in/resume.pdf.",
          },
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${siteUrl}/#breadcrumbs`,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: siteUrl,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "About",
          item: `${siteUrl}/about`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Projects",
          item: `${siteUrl}/projects`,
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "Contact",
          item: `${siteUrl}/contact`,
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased selection:bg-highlight selection:text-black">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <ScrollObserver />
          <Navbar />
          <main className="min-h-screen pt-4">{children}</main>
          <Footer />
          <MobileNav />
          <AIChatWidget />
        </ThemeProvider>
      </body>
    </html>
  );
}
