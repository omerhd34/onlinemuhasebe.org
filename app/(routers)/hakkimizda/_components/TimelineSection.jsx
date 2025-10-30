"use client";
import { useState, useEffect } from "react";

export default function TimelineSection() {
 const [timeline, setTimeline] = useState([]);
 const [loading, setLoading] = useState(true);

 useEffect(() => {
  async function fetchTimeline() {
   try {
    const response = await fetch("/api/timeline");
    if (!response.ok) throw new Error("Veri alınamadı");
    const data = await response.json();
    setTimeline(data);
   } catch (error) {
    console.error("Timeline yüklenemedi:", error);
   } finally {
    setLoading(false);
   }
  }
  fetchTimeline();
 }, []);

 if (loading) {
  return (
   <section className="container mx-auto px-2 sm:px-4 md:px-8 py-8 sm:py-12 md:py-16 w-full max-w-full overflow-x-hidden">
    <div className="max-w-7xl mx-auto bg-card rounded-xl sm:rounded-2xl md:rounded-3xl p-4 sm:p-6 md:p-8 lg:p-12 border border-border/60 dark:border-white/20 shadow-lg">
     <div className="text-center text-sm sm:text-base text-muted-foreground">Yükleniyor...</div>
    </div>
   </section>
  );
 }

 if (timeline.length === 0) {
  return null;
 }

 return (
  <section id="timeline" className="container mx-auto px-2 sm:px-4 md:px-8 py-8 sm:py-12 md:py-16 w-full max-w-full overflow-x-hidden scroll-mt-24">
   <div className="max-w-7xl mx-auto bg-card rounded-xl sm:rounded-2xl md:rounded-3xl p-4 sm:p-6 md:p-8 lg:p-12 border border-border/60 dark:border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 my-4 sm:my-6 md:my-8">
    <div className="absolute inset-0 bg-linear-to-br from-primary/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-xl sm:rounded-2xl md:rounded-3xl pointer-events-none" />

    <div className="relative text-center mb-6 sm:mb-8 md:mb-12">
     <h2 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-2 sm:mb-3 md:mb-4 text-foreground px-2">
      Yolculuğumuz
     </h2>
     <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-muted-foreground max-w-2xl mx-auto px-2">
      1995 yılından bu yana mali müşavirlik alanında attığımız önemli adımlar
     </p>
    </div>

    <div className="relative max-w-5xl mx-auto">
     <div className="relative">
      <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-primary/20 transform -translate-x-1/2 hidden md:block"></div>

      <div className="space-y-12">
       {timeline.map((item, index) => {
        const isEven = index % 2 === 0;

        return (
         <div
          key={item.id || index}
          id={`timeline-${item.id}`}
          className="relative scroll-mt-24"
         >
          <div className="md:hidden flex items-start gap-4">
           <div className="shrink-0 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-xs sm:text-sm shadow-lg">
            {item.year}
           </div>

           <div className="flex-1">
            <div className="bg-card p-4 sm:p-5 md:p-6 rounded-xl shadow-lg border border-border hover:shadow-xl hover:border-primary/50 transition-all duration-300">
             <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2 text-card-foreground">
              {item.title}
             </h3>
             <p className="text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed">
              {item.description}
             </p>
            </div>
           </div>
          </div>

          <div className="hidden md:block">
           <div className="relative flex items-center justify-center">
            {/* Yıl badge - her zaman ortada */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-16 h-16 md:w-20 md:h-20 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-xs sm:text-sm md:text-base lg:text-lg shadow-xl z-10 border-4 border-background">
             {item.year}
            </div>

            <div
             className={`w-5/12 ${isEven ? "mr-auto" : "ml-auto"
              }`}
            >
             <div
              className={`bg-card p-5 md:p-6 lg:p-8 rounded-xl shadow-lg border border-border hover:shadow-xl hover:border-primary/50 transition-all duration-300 ${isEven ? "text-right" : "text-left"
               }`}
             >
              <h3 className="text-lg md:text-xl lg:text-2xl font-bold mb-3 text-card-foreground">
               {item.title}
              </h3>
              <p className="text-sm md:text-base lg:text-lg text-muted-foreground leading-relaxed">
               {item.description}
              </p>
             </div>
            </div>
           </div>
          </div>
         </div>
        );
       })}
      </div>
     </div>
    </div>
   </div>
  </section>
 );
}