"use client";
import { useEffect, useState } from "react";
import * as Icons from "lucide-react";

export default function ValuesSection() {
 const [values, setValues] = useState([]);
 const [loading, setLoading] = useState(true);

 useEffect(() => {
  async function fetchValues() {
   try {
    const response = await fetch("/api/values");
    if (!response.ok) throw new Error("Veri alınamadı");
    const data = await response.json();
    setValues(data);
   } catch (error) {
    console.error("Değerler yüklenemedi:", error);
   } finally {
    setLoading(false);
   }
  }
  fetchValues();
 }, []);

 if (loading) {
  return (
   <section className="container mx-auto px-4 md:px-8 py-16">
    <div className="text-center text-muted-foreground">Yükleniyor...</div>
   </section>
  );
 }

 return (
  <section id="values" className="container mx-auto px-4 md:px-8 py-16 scroll-mt-24">
   <div className="text-center mb-12">
    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Değerlerimiz</h2>
    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
     Çalışma prensiplerimiz ve kurumsal değerlerimiz, her zaman müşterilerimize en iyi hizmeti sunmamızı sağlar.
    </p>
   </div>
   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
    {values.map((value) => {
     const Icon = Icons[value.icon] || Icons.Heart;
     return (
      <div
       key={value.id}
       className="group bg-card p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-border hover:border-primary"
      >
       <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary transition-colors duration-1000 ease-in-out">
        <Icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-1000 ease-in-out" />
       </div>
       <h3 className="text-xl font-semibold mb-3 text-card-foreground group-hover:text-primary transition-colors duration-300">
        {value.title}
       </h3>
       <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
      </div>
     );
    })}
   </div>
  </section>
 );
}