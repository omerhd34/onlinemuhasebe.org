"use client";
import { useState, useEffect } from "react";
import { useClientLoading } from "@/components/ClientLoadingProvider";

export default function HeroSection() {
 const [text, setText] = useState("");
 const { startLoading, stopLoading } = useClientLoading();

 useEffect(() => {
  startLoading();
  let completed = false;
  const finish = () => {
   if (!completed) {
    completed = true;
    stopLoading();
   }
  };

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
    finish();
   }
  }
  fetchContent();
  return finish;
 }, [startLoading, stopLoading]);

 return (
  <section className="container mx-auto px-4 pt-12 mb-5">
   <div className="max-w-4xl mx-auto text-center">
    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4 text-gray-800 dark:text-gray-100">
     Hakkımızda
    </h2>
    <p className="text-sm sm:text-base md:text-lg lg:text-xl text-center text-gray-600 dark:text-gray-400 min-h-[1.5em]">
     {text}
    </p>
   </div>
  </section>
 );
}
