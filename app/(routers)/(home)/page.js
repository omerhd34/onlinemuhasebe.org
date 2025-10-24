import CTASection from "./_components/CTASection";
import FeaturesSection from "./_components/FeaturesSection";
import HeroSection from "./_components/HeroSection";
import ServicesSection from "./_components/ServicesSection";
import StatsSection from "./_components/StatsSection";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <ServicesSection />
      <FeaturesSection />
      <CTASection />
      <StatsSection />
    </div>
  );
}
