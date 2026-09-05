import type { Metadata } from "next";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Navbar } from "@/components/Navbar";
import { MobileNav } from "@/components/MobileNav";
import { Footer } from "@/components/Footer";
import { ScrollObserver } from "@/components/ScrollObserver";
import { profileData } from "@/data/profile";
import { AIChatWidget } from "@/components/AIChat/AIChatWidget";
import "./globals.css";

export const metadata: Metadata = {
  title: `${profileData.name} | Portfolio - Pharmacy, Health-Tech & Web Innovation`,
  description: `${profileData.name}'s personal portfolio. Pharmacy & BBA student passionate about health-tech development (MediTrack), digital strategy, and scalable web solutions.`,
  keywords: [
    "Satyajit Das",
    "Portfolio",
    "MediTrack",
    "Health-Tech",
    "Pharmacy",
    "Web Developer",
    "Next.js",
    "React",
    "Haldia Institute of Pharmacy",
    "Manipal Academy of Higher Education",
  ],
  authors: [{ name: profileData.name, url: profileData.portfolioUrl }],
  creator: profileData.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: profileData.portfolioUrl,
    title: `${profileData.name} | Portfolio`,
    description: profileData.headline,
    siteName: `${profileData.name} Portfolio`,
  },
  twitter: {
    card: "summary_large_image",
    title: `${profileData.name} | Portfolio`,
    description: profileData.headline,
    creator: "@Satyajit1873526",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
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
