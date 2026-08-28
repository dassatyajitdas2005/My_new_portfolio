import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { AboutSection } from "@/components/AboutSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ExpertiseAccordion } from "@/components/ExpertiseAccordion";
import { TechMarquee } from "@/components/TechMarquee";
import { FAQSection } from "@/components/FAQSection";
import { CTASection } from "@/components/CTASection";

export default function HomePage() {
  return (
    <div className="space-y-12 sm:space-y-20">
      <Hero />
      <Marquee />
      <AboutSection />
      <ProjectsSection />
      <ExpertiseAccordion />
      <TechMarquee />
      <FAQSection />
      <CTASection />
    </div>
  );
}
