"use client";
import { useState, useEffect } from "react";
import ShortcutGrid from "./_components/ShortcutGrid";

export default function ShortcutPage() {
 const [shortcuts, setShortcuts] = useState([]);
 const [loading, setLoading] = useState(true);

 useEffect(() => {
  fetchShortcuts();
 }, []);

 const fetchShortcuts = async () => {
  try {
   setLoading(true);
   const response = await fetch("/api/shortcuts?isActive=true");
   if (!response.ok) throw new Error("API isteği başarısız");
   const data = await response.json();
   setShortcuts(data);
  } catch (error) {
   console.error("Kısayollar alınamadı:", error);
   setShortcuts([]);
  } finally {
   setLoading(false);
  }
 };

 return (
  <div className="min-h-screen bg-background">
   <section className="container mx-auto px-2 sm:px-4 md:px-8 py-8 sm:py-12 md:py-16 w-full max-w-full overflow-x-hidden">
    <div className="max-w-7xl mx-auto bg-card rounded-xl sm:rounded-2xl md:rounded-3xl p-4 sm:p-6 md:p-8 lg:p-12 border border-border/60 dark:border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 my-4 sm:my-6 md:my-8">
     <div className="mb-10 text-center">
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
       Kısayollar
      </h1>
      <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground">
       Sık kullanılan platformlara hızlı erişim için kısayollar
      </p>
     </div>

     {loading ? (
      <div className="flex justify-center items-center min-h-[400px]">
       <div className="text-sm sm:text-base md:text-lg text-muted-foreground">Yükleniyor...</div>
      </div>
     ) : (
      <ShortcutGrid shortcuts={shortcuts} />
     )}
    </div>
   </section>
  </div>
 );
}