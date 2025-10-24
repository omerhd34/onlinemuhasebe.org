import CTASection from "./_components/CTASection";
import HeroSection from "./_components/HeroSection";
import TeamSection from "./_components/TeamSection";
import TimelineSection from "./_components/TimelineSection";
import ValuesSection from "./_components/ValuesSection";
import VisionMissionSection from "./_components/VisionMissionSection";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <VisionMissionSection />
      <ValuesSection />
      <TimelineSection />
      <TeamSection />
      <CTASection />
    </div>
  );
}
