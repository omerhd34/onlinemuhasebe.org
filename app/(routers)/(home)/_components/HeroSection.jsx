"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronRight, Mail, Info } from "lucide-react";
import { useState, useEffect } from "react";

export default function HeroSection() {
 const [text1, setText1] = useState("");
 const [loading, setLoading] = useState(true);
 const [error, setError] = useState(null);

 useEffect(() => {
  async function fetchContent() {
   try {
    const response = await fetch(
     "/api/pageContent?page=home&section=hero&key=subtitle"
    );

    if (!response.ok) {
     const errorData = await response.text();
     console.error("HeroSection: API Error:", errorData);
     throw new Error(`İçerik alınamadı: ${response.status}`);
    }

    const data = await response.json();

    if (data) {
     const content = data.content || data[0]?.content || "Varsayılan içerik yüklenemedi";
     setText1(content);
    } else {
     setText1("İçerik bulunamadı");
    }
   } catch (error) {
    setError(error.message);
    setText1("İçerik yüklenirken bir hata oluştu");
   } finally {
    setLoading(false);
   }
  }
  fetchContent();
 }, []);

 return (
  <section className="container mx-auto px-2 sm:px-4 md:px-8 min-h-screen flex items-center justify-center w-full max-w-full overflow-x-hidden">
   <div className="max-w-7xl mx-auto text-center py-8 sm:py-12 md:py-16 lg:py-24 w-full">
    <div className="border-2 border-primary rounded-xl sm:rounded-2xl md:rounded-3xl p-4 sm:p-6 md:p-10 lg:p-20 bg-blue-200 dark:bg-slate-800 backdrop-blur-sm w-full box-border">
     <h1 className="text-xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold mb-3 sm:mb-4 md:mb-6 text-foreground leading-tight">
      <span className="text-foreground font-extrabold block sm:inline">Şahin Demir</span>{" "}
      <span className="text-primary font-extrabold block sm:inline">Mali Müşavirlik</span>
     </h1>

     <p className="text-xs sm:text-base md:text-lg lg:text-xl xl:text-2xl text-muted-foreground mb-4 sm:mb-6 md:mb-8 px-2">
      {loading ? (
       <span className="inline-block animate-pulse">Yükleniyor...</span>
      ) : error ? (
       <span className="text-destructive text-xs sm:text-sm">Hata: {error}</span>
      ) : (
       text1
      )}
     </p>
     {!loading && !text1 && (
      <p className="text-xs sm:text-sm text-muted-foreground mb-4 sm:mb-6 md:mb-8">
       Debug: APIden veri alınamadı. Lütfen konsolu kontrol edin.
      </p>
     )}
     <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 md:gap-4 justify-center">
      <Button asChild size="lg" className="text-xs sm:text-sm md:text-base lg:text-lg h-9 sm:h-11 md:h-12 lg:h-14 w-full sm:w-auto">
       <Link href="/iletisim" className="flex items-center justify-between w-full">
        <div className="flex items-center gap-1 sm:gap-2">
         <Mail className="w-3 h-3 sm:w-5 sm:h-5" />
         <span className="whitespace-nowrap">Hemen İletişime Geçin</span>
        </div>
        <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
       </Link>
      </Button>
      <Button asChild size="lg" className="text-xs sm:text-sm md:text-base lg:text-lg h-9 sm:h-11 md:h-12 lg:h-14 bg-chart-3 w-full sm:w-auto">
       <Link href="/hakkimizda" className="flex items-center justify-between w-full">
        <div className="flex items-center gap-1 sm:gap-2">
         <Info className="w-3 h-3 sm:w-5 sm:h-5" />
         <span className="whitespace-nowrap">Hakkımızda</span>
        </div>
        <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
       </Link>
      </Button>
     </div>
    </div>
   </div>
  </section>
 );
}
