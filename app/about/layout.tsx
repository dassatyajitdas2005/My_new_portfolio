import type { Metadata } from "next";
import { profileData } from "@/data/profile";

export const metadata: Metadata = {
  title: "About Me",
  description: `Discover the journey of ${profileData.name} — Pharmacy scholar at Haldia Institute of Pharmacy, BBA at MAHE, creator of MediTrack, and digital healthcare innovator.`,
  alternates: {
    canonical: "https://satyajitdas.in/about",
  },
  openGraph: {
    title: `About ${profileData.name} | Health-Tech Innovator & Pharmacy Scholar`,
    description: profileData.aboutStatement,
    url: "https://satyajitdas.in/about",
    siteName: `${profileData.name} Portfolio`,
    images: [
      {
        url: "/images/satyajit.jpg",
        width: 800,
        height: 800,
        alt: `About ${profileData.name}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `About ${profileData.name} | Health-Tech Innovator & Pharmacy Scholar`,
    description: profileData.aboutStatement,
    images: ["/images/satyajit.jpg"],
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
