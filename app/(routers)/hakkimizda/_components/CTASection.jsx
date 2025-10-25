"use client"
import { Users } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function CTASection() {

 const [text, setText] = useState("Profesyonel ekibimiz, sizin ve işletmenizin mali ihtiyaçları için burada. Hemen iletişime geçin, tanışalım.");

 return (
  <section className="container mx-auto px-4 md:px-8 py-16">
   <div className="bg-primary rounded-3xl p-8 md:p-12 text-center text-primary-foreground shadow-2xl max-w-4xl mx-auto">
    <Users className="w-16 h-16 mx-auto mb-6 opacity-90" />
    <h2 className="text-3xl md:text-4xl font-bold mb-4">Birlikte Çalışmaya Hazır mısınız?</h2>
    <p className="text-lg md:text-xl mb-8 opacity-90 max-w-2xl mx-auto">
     {text}
    </p>
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
     <Link href="/iletisim" className="inline-flex items-center justify-center px-8 py-3 bg-card text-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity">
      İletişime Geçin
     </Link>
     <Link href="tel:02163307770" className="inline-flex items-center justify-center px-8 py-3 bg-transparent border-2 border-primary-foreground text-primary-foreground rounded-lg font-semibold hover:bg-primary-foreground/10 transition-colors">
      0216 330 77 70
     </Link>
    </div>
   </div>
  </section>
 );
}
