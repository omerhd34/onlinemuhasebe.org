"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

export default function CTASection() {
 const [text1, setText1] = useState("");
 const [loading, setLoading] = useState(true);

 useEffect(() => {
  async function fetchContent() {
   try {
    const response = await fetch(
     "/api/pageContent?page=home&section=cta&key=description"
    );
    if (!response.ok) throw new Error("İçerik alınamadı");
    const data = await response.json();
    setText1(
     data?.content
    );
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
   <div className="bg-primary rounded-3xl p-8 md:p-12 text-center text-primary-foreground shadow-2xl">
    <h2 className="text-3xl md:text-4xl font-bold mb-4">
     Mali Danışmanlık İhtiyacınız mı Var?
    </h2>
    <p className="text-lg md:text-xl mb-8 opacity-90 max-w-2xl mx-auto">
     {loading ? "Yükleniyor..." : text1}
    </p>
    <Button asChild size="lg" variant="secondary" className="text-lg font-semibold">
     <Link href="/iletisim">Ücretsiz Görüşme Talep Edin</Link>
    </Button>
   </div>
  </section>
 );
}