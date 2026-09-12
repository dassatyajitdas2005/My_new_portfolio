import type { Metadata } from "next";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Navbar } from "@/components/Navbar";
import { MobileNav } from "@/components/MobileNav";
import { Footer } from "@/components/Footer";
import { ScrollObserver } from "@/components/ScrollObserver";
import { profileData } from "@/data/profile";
import { AIChatWidget } from "@/components/AIChat/AIChatWidget";
import "./globals.css";

const siteUrl = "https://satyajitdas.in";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${profileData.name} | Health-Tech Innovator, Pharmacy Scholar & Web Developer`,
    template: `%s | ${profileData.name}`,
  },
  description: `${profileData.name}'s personal portfolio. Pharmacy & BBA scholar passionate about health-tech development (MediTrack), modern web engineering, digital strategy, and scalable healthcare solutions.`,
  keywords: [
    "Satyajit Das",
    "Satyajit Das portfolio",
    "satyajitdas.in",
    "Satyajit Das MediTrack",
    "Health-Tech Innovator",
    "Pharmacy Scholar",
    "Web Developer Kolkata",
    "React Next.js Developer",
    "MediTrack Health App",
    "Haldia Institute of Pharmacy",
    "Manipal Academy of Higher Education",
    "Healthcare Technology India",
  ],
  authors: [{ name: profileData.name, url: siteUrl }],
  creator: profileData.name,
  publisher: profileData.name,
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title: `${profileData.name} | Health-Tech Innovator & Web Developer`,
    description: profileData.headline,
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
    description: profileData.headline,
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
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      name: profileData.name,
      url: siteUrl,
      image: `${siteUrl}/images/satyajit.jpg`,
      jobTitle: "Health-Tech Innovator & Pharmacy Scholar",
      description: profileData.aboutStatement,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Paschim Medinipur",
        addressRegion: "West Bengal",
        postalCode: "721424",
        addressCountry: "India",
      },
      alumniOf: [
        {
          "@type": "EducationalOrganization",
          name: "Haldia Institute of Pharmacy",
        },
        {
          "@type": "EducationalOrganization",
          name: "Manipal Academy of Higher Education",
        },
      ],
      sameAs: [
        profileData.linkedInUrl,
        profileData.githubUrl,
        profileData.twitterUrl,
        profileData.instagramUrl,
      ],
      knowsAbout: [
        "Health-Tech",
        "Pharmaceutical Science",
        "MediTrack",
        "Web Development",
        "Next.js",
        "React",
        "TypeScript",
        "Digital Strategy",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: `${profileData.name} Portfolio`,
      description: profileData.headline,
      publisher: {
        "@id": `${siteUrl}/#person`,
      },
      inLanguage: "en-US",
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
