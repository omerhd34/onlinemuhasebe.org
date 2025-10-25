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
  <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow duration-300 h-full">
   <h1 className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-100">
    İletişim Bilgileri
   </h1>
   <p className="text-gray-500 dark:text-gray-300 mb-8">
    {loading ? "Yükleniyor..." : text1}
   </p>
   <div className="space-y-5">
    {infoItems.map((item, idx) => (
     <div className="flex items-start" key={idx}>
      <item.icon className="text-primary mr-3 mt-1 shrink-0" size={20} />
      <div>
       <h3 className="font-semibold text-gray-800 dark:text-gray-100">{item.title}:</h3>
       <p className="text-gray-500 dark:text-gray-300">{item.text}</p>
      </div>
     </div>
    ))}
   </div>
  </div>
 );
}