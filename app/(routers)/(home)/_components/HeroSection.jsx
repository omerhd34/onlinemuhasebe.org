import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

export default function HeroSection() {
 return (
  <section className="container mx-auto px-4 md:px-8 min-h-screen flex items-center justify-center">
   <div className="max-w-4xl mx-auto text-center py-16 md:py-24">
    <h1 className="text-4xl md:text-6xl font-extrabold mb-6 text-foreground">
     <span className="text-foreground font-extrabold">Şahin Demir</span>{" "}
     <span className="text-primary font-extrabold">Mali Müşavirlik</span>
    </h1>
    <p className="text-xl md:text-2xl text-muted-foreground mb-8">
     Profesyonel muhasebe ve mali danışmanlık hizmetleriyle işletmenizin
     yanındayız.
    </p>
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
     <Button asChild size="lg" className="text-lg h-14">
      <Link href="/iletisim">
       Hemen İletişime Geçin
       <ChevronRight className="ml-2" />
      </Link>
     </Button>
     <Button asChild size="lg" variant="outline" className="text-lg h-14">
      <Link href="/hakkimizda">Hakkımızda</Link>
     </Button>
    </div>
   </div>
  </section>
 );
}
