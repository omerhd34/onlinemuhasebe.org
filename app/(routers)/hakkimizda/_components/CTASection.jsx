"use client";
import { Users } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function CTASection() {
 const [text, setText] = useState("");
 const [loading, setLoading] = useState(true);

 useEffect(() => {
  async function fetchContent() {
   try {
    const response = await fetch(
     "/api/pageContent?page=about&section=cta&key=description"
    );
    if (!response.ok) throw new Error("İçerik alınamadı");
    const data = await response.json();
    setText(data?.content);
   } catch (error) {
    console.error("Content yüklenemedi:", error);
   } finally {
    setLoading(false);
   }
  }
  fetchContent();
 }, []);

 return (
  <section className="container mx-auto px-4 md:px-8 py-16">
   <div className="bg-primary rounded-3xl p-8 md:p-12 text-center text-primary-foreground shadow-2xl max-w-4xl mx-auto">
    <Users className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mx-auto mb-6 opacity-90" />
    <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4">Birlikte Çalışmaya Hazır mısınız?</h2>
    <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-8 opacity-90 max-w-2xl mx-auto">
     {loading ? "Yükleniyor..." : text}
    </p>
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
     <Link
      href="/iletisim"
      className="inline-flex items-center justify-center px-8 py-3 bg-card text-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity"
     >
      İletişime Geçin
     </Link>
     <Link
      href="tel:02163307770"
      className="inline-flex items-center justify-center px-8 py-3 bg-transparent border-2 border-primary-foreground text-primary-foreground rounded-lg font-semibold hover:bg-primary-foreground/10 transition-colors"
     >
      0216 330 77 70
     </Link>
    </div>
   </div>
  </section>
 );
}