"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

export default function CTASection() {
 const [text1, setText1] = useState("");
 const [loading, setLoading] = useState(true);

 useEffect(() => {
  async function fetchContent() {
   try {
    const response = await fetch(
     "/api/pageContent?page=home&section=cta&key=description"
    );
    if (!response.ok) throw new Error("İçerik alınamadı");
    const data = await response.json();
    setText1(
     data?.content
    );
   } catch (error) {
    console.error("Content yüklenemedi:", error);
   } finally {
    setLoading(false);
   }
  }
  fetchContent();
 }, []);

 return (
  <section className="container mx-auto px-2 sm:px-4 md:px-8 py-8 sm:py-12 md:py-16 w-full max-w-full overflow-x-hidden">
   <div className="max-w-7xl mx-auto bg-primary rounded-xl sm:rounded-2xl md:rounded-3xl p-4 sm:p-6 md:p-8 lg:p-12 text-center text-primary-foreground shadow-2xl border-2 border-primary/20 dark:border-primary/30 hover:shadow-3xl  transition-all duration-300 my-4 sm:my-6 md:my-8 relative overflow-hidden">
    <div className="absolute inset-0 bg-linear-to-br from-white/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

    <div className="relative">
     <h2 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 sm:mb-5 md:mb-6 px-2">
      Mali Danışmanlık İhtiyacınız mı Var?
     </h2>
     <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl mb-4 sm:mb-5 md:mb-6 opacity-90 max-w-2xl mx-auto px-2">
      {loading ? "Yükleniyor..." : text1}
     </p>
     <Button asChild size="lg" variant="secondary" className="text-xs sm:text-sm md:text-base lg:text-lg font-semibold h-9 sm:h-11 md:h-12 lg:h-14 hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-xl">
      <Link href="/iletisim">Görüşme Talep Edin</Link>
     </Button>
    </div>
   </div>
  </section>
 );
}