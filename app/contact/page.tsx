import type { Metadata } from "next";
import { ContactSection } from "@/components/ContactSection";
import { FAQSection } from "@/components/FAQSection";
import { CTASection } from "@/components/CTASection";
import { profileData } from "@/data/profile";

export const metadata: Metadata = {
  title: "Contact & Collaboration",
  description: `Get in touch with ${profileData.name} for health-tech projects, web development, collaborations, or general inquiries.`,
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: `Contact ${profileData.name} | Connect & Collaborate`,
    description: `Let's connect for healthcare technology innovations, web development projects, or speaking opportunities.`,
    url: "https://satyajitdas.in/contact",
  },
};

export default function ContactPage() {
  return (
    <div className="space-y-16 sm:space-y-24">
      <ContactSection />
      <FAQSection />
      <CTASection />
    </div>
  );
}
