"use client";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useState, useEffect } from "react";

const infoItems = [
 { icon: MapPin, title: "Konum", text: "İstanbul/Türkiye" },
 { icon: Phone, title: "Telefon", text: "0216 330 77 70" },
 { icon: Mail, title: "Email", text: "sahin@onlinemuhasebe.org" },
 { icon: Clock, title: "Çalışma Saatleri", text: "Pazartesi - Cuma, 09:00 - 18:00" },
];

export default function ContactInfo() {
 const [text1, setText1] = useState("");
 const [loading, setLoading] = useState(true);

 useEffect(() => {
  async function fetchContent() {
   try {
    const response = await fetch(
     "/api/pageContent?page=contact&section=info&key=description"
    );
    if (!response.ok) throw new Error("İçerik alınamadı");
    const data = await response.json();
    setText1(data?.content);
   } catch (error) {
    console.error("Content yüklenemedi:", error);
   } finally {
    setLoading(false);
   }
  }
  fetchContent();
 }, []);

 return (
  <div className="bg-card dark:bg-card rounded-xl shadow-lg p-4 sm:p-6 md:p-8 border border-border/60 dark:border-2 dark:border-border/80 hover:shadow-xl transition-all duration-300 h-full">
   <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold mb-4 sm:mb-6 text-foreground dark:text-foreground">
    İletişim Bilgileri
   </h1>
   <p className="text-xs sm:text-sm md:text-base lg:text-lg text-muted-foreground dark:text-muted-foreground mb-6 sm:mb-8">
    {loading ? "Yükleniyor..." : text1}
   </p>
   <div className="space-y-4 sm:space-y-5">
    {infoItems.map((item, idx) => (
     <div className="flex items-start" key={idx}>
      <item.icon className="text-primary dark:text-primary mr-3 mt-1 shrink-0" size={20} />
      <div>
       <h3 className="text-sm sm:text-base md:text-lg font-semibold text-foreground dark:text-foreground">{item.title}:</h3>
       <p className="text-xs sm:text-sm md:text-base text-muted-foreground dark:text-muted-foreground">{item.text}</p>
      </div>
     </div>
    ))}
   </div>
  </div>
 );
}