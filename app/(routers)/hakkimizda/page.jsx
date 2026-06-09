import { createPageMetadata } from "@/lib/seo";
import CTASection from "./_components/CTASection";

export const metadata = createPageMetadata({
  title: "Hakkımızda",
  description:
    "1995'ten bu yana İstanbul'da muhasebe, vergi danışmanlığı ve mali müşavirlik hizmetleri sunan Şahin Demir ve ekibi hakkında bilgi edinin.",
  path: "/hakkimizda",
});
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
