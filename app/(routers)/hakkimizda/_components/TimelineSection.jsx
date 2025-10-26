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
   <section className="container mx-auto px-4 md:px-8 py-16">
    <div className="text-center text-muted-foreground">Yükleniyor...</div>
   </section>
  );
 }

 if (timeline.length === 0) {
  return null;
 }

 return (
  <section id="timeline" className="container mx-auto px-4 md:px-8 py-16 bg-muted/30 scroll-mt-24">
   <div className="text-center mb-12">
    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
     Yolculuğumuz
    </h2>
    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
     1995 yılından bu yana mali müşavirlik alanında attığımız önemli adımlar
    </p>
   </div>

   <div className="max-w-5xl mx-auto">
    <div className="relative">
     <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-primary/20 transform -translate-x-1/2 hidden md:block"></div>

     <div className="space-y-12">
      {timeline.map((item, index) => {
       const isEven = index % 2 === 0;

       return (
        <div
         key={item.id || index}
         className="relative"
        >
         <div className="md:hidden flex items-start gap-4">
          <div className="shrink-0 w-16 h-16 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm shadow-lg">
           {item.year}
          </div>

          <div className="flex-1">
           <div className="bg-card p-6 rounded-xl shadow-lg border border-border hover:shadow-xl hover:border-primary/50 transition-all duration-300">
            <h3 className="text-xl font-bold mb-2 text-card-foreground">
             {item.title}
            </h3>
            <p className="text-muted-foreground leading-relaxed">
             {item.description}
            </p>
           </div>
          </div>
         </div>

         <div className="hidden md:block">
          <div className="relative flex items-center justify-center">
           {/* Yıl badge - her zaman ortada */}
           <div className="absolute left-1/2 transform -translate-x-1/2 w-20 h-20 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-base shadow-xl z-10 border-4 border-background">
            {item.year}
           </div>

           <div
            className={`w-5/12 ${isEven ? "mr-auto" : "ml-auto"
             }`}
           >
            <div
             className={`bg-card p-8 rounded-xl shadow-lg border border-border hover:shadow-xl hover:border-primary/50 transition-all duration-300 ${isEven ? "text-right" : "text-left"
              }`}
            >
             <h3 className="text-xl font-bold mb-3 text-card-foreground">
              {item.title}
             </h3>
             <p className="text-muted-foreground leading-relaxed">
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
  </section>
 );
}