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
  <section className="container mx-auto px-4 md:px-8 py-16 bg-muted/30">
   <div className="text-center mb-12">
    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
     Yolculuğumuz
    </h2>
    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
     1998 yılından bu yana mali müşavirlik alanında attığımız önemli adımlar
    </p>
   </div>
   <div className="max-w-5xl mx-auto">
    <div className="relative">
     <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/20 transform md:-translate-x-1/2"></div>

     <div className="space-y-12">
      {timeline.map((item, index) => (
       <div
        key={item.id || index}
        className={`relative flex items-center ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
         } flex-row`}
       >
        <div className="shrink-0 w-16 h-16 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm z-10 md:absolute md:left-1/2 md:transform md:-translate-x-1/2 shadow-lg">
         {item.year}
        </div>

        <div
         className={`flex-1 ml-6 md:ml-0 ${index % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16 md:text-left"
          }`}
        >
         <div className="bg-card p-6 rounded-xl shadow-lg border border-border hover:shadow-xl hover:border-primary/50 transition-all duration-300">
          <h3 className="text-xl font-bold mb-2 text-card-foreground">
           {item.title}
          </h3>
          <p className="text-muted-foreground leading-relaxed">{item.description}</p>
         </div>
        </div>
       </div>
      ))}
     </div>
    </div>
   </div>
  </section>
 );
}