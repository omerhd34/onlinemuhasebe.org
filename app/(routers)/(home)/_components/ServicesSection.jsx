"use client";
import { useEffect, useState } from "react";
import * as Icons from "lucide-react";

export default function ServicesSection() {
 const [services, setServices] = useState([]);
 const [text1, setText1] = useState("");
 const [loading, setLoading] = useState(true);

 useEffect(() => {
  async function fetchData() {
   try {
    const [servicesRes, contentRes] = await Promise.all([
     fetch("/api/services"),
     fetch("/api/pageContent?page=home&section=services&key=description"),
    ]);

    if (!servicesRes.ok || !contentRes.ok) {
     throw new Error("Veri alınamadı");
    }

    const servicesData = await servicesRes.json();
    const contentData = await contentRes.json();

    setServices(servicesData);
    setText1(contentData?.content);
   } catch (error) {
    console.error("Veriler yüklenemedi:", error);
   } finally {
    setLoading(false);
   }
  }
  fetchData();
 }, []);

 if (loading) {
  return (
   <section className="container mx-auto px-4 md:px-8 py-16 bg-card rounded-3xl my-8">
    <div className="text-center text-muted-foreground">Yükleniyor...</div>
   </section>
  );
 }

 return (
  <section id="services" className="container mx-auto px-4 md:px-8 py-16 bg-card rounded-3xl my-8 scroll-mt-24">
   <div className="text-center mb-12">
    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
     Hizmetlerimiz
    </h2>
    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{text1}</p>
   </div>
   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {services.map((service) => {
     const Icon = Icons[service.icon] || Icons.Briefcase;
     return (
      <div
       key={service.id}
       className="group p-6 bg-card rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-border hover:border-primary hover:-translate-y-1"
      >
       <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary transition-colors duration-300">
        <Icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
       </div>
       <h3 className="text-xl font-semibold mb-3 text-card-foreground group-hover:text-primary transition-colors duration-300">
        {service.title}
       </h3>
       <p className="text-muted-foreground">{service.description}</p>
      </div>
     );
    })}
   </div>
  </section>
 );
}