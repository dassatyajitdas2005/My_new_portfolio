import type { Metadata } from "next";
import { profileData } from "@/data/profile";

export const metadata: Metadata = {
  title: "Projects & Health-Tech Innovations",
  description: `Explore innovative projects by ${profileData.name}, including MediTrack (Medicine Reminder & Inventory App), web applications, and healthcare solutions.`,
  alternates: {
    canonical: "/projects",
  },
  openGraph: {
    title: `Projects by ${profileData.name} | MediTrack & Digital Platforms`,
    description: `Explore health-tech tools and modern web applications built by ${profileData.name}.`,
    url: "https://satyajitdas.in/projects",
  },
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
