import CTASection from "./_components/CTASection";
import HeroSection from "./_components/HeroSection";
import TeamSection from "./_components/TeamSection";
import TimelineSection from "./_components/TimelineSection";
import ValuesSection from "./_components/ValuesSection";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <ValuesSection />
      <TimelineSection />
      <TeamSection />
      <CTASection />
    </div>
  );
}
