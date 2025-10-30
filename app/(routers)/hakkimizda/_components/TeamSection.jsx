"use client";
import { useState, useEffect } from "react";

export default function TeamSection() {
 const [text1, setText1] = useState("");
 const [text2, setText2] = useState("");
 const [text3, setText3] = useState("");
 const [loading, setLoading] = useState(true);

 useEffect(() => {
  async function fetchContent() {
   try {
    const [text1Res, text2Res, text3Res] = await Promise.all([
     fetch("/api/pageContent?page=about&section=team&key=text1"),
     fetch("/api/pageContent?page=about&section=team&key=text2"),
     fetch("/api/pageContent?page=about&section=team&key=text3"),
    ]);

    if (!text1Res.ok || !text2Res.ok || !text3Res.ok) {
     throw new Error("İçerik alınamadı");
    }

    const text1Data = await text1Res.json();
    const text2Data = await text2Res.json();
    const text3Data = await text3Res.json();
    setText1(text1Data?.content);
    setText2(text2Data?.content);
    setText3(text3Data?.content);
   } catch (error) {
    console.error("Content yüklenemedi:", error);
   } finally {
    setLoading(false);
   }
  }
  fetchContent();
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
 return (
  <section className="container mx-auto px-2 sm:px-4 md:px-8 py-8 sm:py-12 md:py-16 w-full max-w-full overflow-x-hidden">
   <div className="max-w-7xl mx-auto bg-card rounded-xl sm:rounded-2xl md:rounded-3xl p-4 sm:p-6 md:p-8 lg:p-12 border border-border/60 dark:border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 my-4 sm:my-6 md:my-8">
    <div className="absolute inset-0 bg-linear-to-br from-primary/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-xl sm:rounded-2xl md:rounded-3xl pointer-events-none" />

    <div className="relative max-w-4xl mx-auto">
     <div className="text-center mb-6 sm:mb-8 md:mb-12">
      <h2 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-2 sm:mb-3 md:mb-4 text-foreground px-2">Şahin Demir</h2>
      <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-muted-foreground mb-2 px-2">Serbest Muhasebeci Mali Müşavir</p>
      <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-6 sm:mb-8"></div>
     </div>
     <div className="relative bg-card rounded-xl sm:rounded-2xl shadow-xl p-4 sm:p-5 md:p-6 lg:p-8 xl:p-10 border border-border/60">
      <div className="space-y-6 text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
       <p>{text1}</p>
       <p>{text2}</p>
       <p>{text3}</p>
       <p className="font-semibold text-foreground">Üyelikler ve Sertifikalar:</p>
       <ul className="list-disc list-inside space-y-2 ml-4">
        <li>İstanbul Serbest Muhasebeci Mali Müşavirler Odası (İSMMO) Üyesi</li>
        <li>
         TÜRMOB (Türkiye Serbest Muhasebeci Mali Müşavirler ve Yeminli Mali Müşavirler
         Odaları Birliği) Kayıtlı Üye
        </li>
        <li>Kurumsal Yönetim ve Risk Yönetimi Uzmanı</li>
       </ul>
      </div>
     </div>
    </div>
   </div>
  </section>
 );
}