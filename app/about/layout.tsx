import type { Metadata } from "next";
import { profileData } from "@/data/profile";

export const metadata: Metadata = {
  title: "About Me",
  description: `Discover the journey of ${profileData.name} — Pharmacy scholar at Haldia Institute of Pharmacy, BBA at MAHE, creator of MediTrack, and digital healthcare innovator.`,
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: `About ${profileData.name} | Health-Tech Innovator & Pharmacy Scholar`,
    description: profileData.aboutStatement,
    url: "https://satyajitdas.in/about",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
