"use client";
import { Target, Eye } from "lucide-react";
import { useState, useEffect } from "react";

export default function VisionMissionSection() {
 const [text1, setText1] = useState("");
 const [text2, setText2] = useState("");
 const [loading, setLoading] = useState(true);

 useEffect(() => {
  async function fetchContent() {
   try {
    const [missionRes, visionRes] = await Promise.all([
     fetch("/api/pageContent?page=about&section=mission&key=description"),
     fetch("/api/pageContent?page=about&section=vision&key=description"),
    ]);

    if (!missionRes.ok || !visionRes.ok) {
     throw new Error("İçerik alınamadı");
    }

    const missionData = await missionRes.json();
    const visionData = await visionRes.json();

    setText1(missionData?.content);
    setText2(visionData?.content);
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
   <section className="container mx-auto px-4 md:px-8 py-12 mb-25">
    <div className="text-center text-muted-foreground">Yükleniyor...</div>
   </section>
  );
 }

 return (
  <section className="container mx-auto px-4 md:px-8 py-12 mb-25">
   <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
    <div className="bg-card p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-border">
     <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
      <Target className="w-8 h-8 text-primary" />
     </div>
     <h2 className="text-2xl font-bold mb-4 text-card-foreground">Misyonumuz</h2>
     <p className="text-muted-foreground leading-relaxed">{text1}</p>
    </div>
    <div className="bg-card p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-border">
     <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
      <Eye className="w-8 h-8 text-primary" />
     </div>
     <h2 className="text-2xl font-bold mb-4 text-card-foreground">Vizyonumuz</h2>
     <p className="text-muted-foreground leading-relaxed">{text2}</p>
    </div>
   </div>
  </section>
 );
}