"use client";
import { useState, useEffect } from "react";

export default function HeroSection() {
 const [text, setText] = useState("");
 const [loading, setLoading] = useState(true);

 useEffect(() => {
  async function fetchContent() {
   try {
    const response = await fetch(
     "/api/pageContent?page=about&section=hero&key=description"
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
  <section className="container mx-auto px-4 pt-12 mb-5">
   <div className="max-w-4xl mx-auto text-center">
    <h2 className="text-4xl font-bold text-center mb-4 text-gray-800 dark:text-gray-100">
     Hakkımızda
    </h2>
    <p className="text-lg text-center text-gray-600 dark:text-gray-400">
     {loading ? "Yükleniyor..." : text}
    </p>
   </div>
  </section>
 );
}