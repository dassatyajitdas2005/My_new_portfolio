import { ContactSection } from "@/components/ContactSection";
import { FAQSection } from "@/components/FAQSection";
import { CTASection } from "@/components/CTASection";

export default function ContactPage() {
  return (
    <div className="space-y-16 sm:space-y-24">
      <ContactSection />
      <FAQSection />
      <CTASection />
    </div>
  );
}
