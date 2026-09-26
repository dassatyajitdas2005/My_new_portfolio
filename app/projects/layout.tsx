import type { Metadata } from "next";
import { profileData } from "@/data/profile";

export const metadata: Metadata = {
  title: "Projects & Health-Tech Innovations",
  description: `Explore innovative projects by ${profileData.name}, including MediTrack (Hospital Internship & Medicine Management Platform), NeedMet, and Rental Bookmipg.`,
  alternates: {
    canonical: "https://satyajitdas.in/projects",
  },
  openGraph: {
    title: `Projects by ${profileData.name} | MediTrack & Digital Platforms`,
    description: `Explore health-tech tools and modern web applications built by ${profileData.name}, including MediTrack, NeedMet, and Bookmipg.`,
    url: "https://satyajitdas.in/projects",
    siteName: `${profileData.name} Portfolio`,
    images: [
      {
        url: "/images/projects/meditrack-banner.svg",
        width: 1200,
        height: 630,
        alt: "MediTrack - Healthcare Management Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `Projects by ${profileData.name} | MediTrack & Digital Platforms`,
    description: `Explore health-tech tools and modern web applications built by ${profileData.name}.`,
    images: ["/images/projects/meditrack-banner.svg"],
  },
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
