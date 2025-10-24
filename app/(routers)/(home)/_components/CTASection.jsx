import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function CTASection() {
 return (
  <section className="container mx-auto px-4 md:px-8 py-16">
   <div className="bg-primary rounded-3xl p-8 md:p-12 text-center text-primary-foreground shadow-2xl">
    <h2 className="text-3xl md:text-4xl font-bold mb-4">Mali Danışmanlık İhtiyacınız mı Var?</h2>
    <p className="text-lg md:text-xl mb-8 opacity-90 max-w-2xl mx-auto">
     Profesyonel ekibimiz, işletmenizin mali süreçlerini optimize etmek için hazır. Hemen iletişime geçin, size özel çözümler sunalım.
    </p>
    <Button asChild size="lg" variant="secondary" className="text-lg font-semibold">
     <Link href="/iletisim">Ücretsiz Görüşme Talep Edin</Link>
    </Button>
   </div>
  </section>
 );
}
