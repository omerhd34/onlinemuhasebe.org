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
   <section className="container mx-auto px-4 md:px-8 py-16">
    <div className="text-center text-muted-foreground">Yükleniyor...</div>
   </section>
  );
 }
 return (
  <section className="container mx-auto px-4 md:px-8 py-16">
   <div className="max-w-4xl mx-auto">
    <div className="text-center mb-12">
     <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Şahin Demir</h2>
     <p className="text-lg text-muted-foreground mb-2">Serbest Muhasebeci Mali Müşavir</p>
     <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-8"></div>
    </div>
    <div className="bg-card rounded-2xl shadow-xl p-8 md:p-10 border border-border">
     <div className="space-y-6 text-muted-foreground leading-relaxed">
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
  </section>
 );
}