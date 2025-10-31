"use client";
import { useEffect, useState } from "react";
import * as Icons from "lucide-react";

export default function ServicesSection() {
 const [services, setServices] = useState([]);
 const [text1, setText1] = useState("");
 const [loading, setLoading] = useState(true);

 useEffect(() => {
  let isMounted = true;

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

    if (isMounted) {
     setServices(servicesData);
     setText1(contentData?.content);
    }
   } catch (error) {
    if (isMounted) {
     console.error("Veriler yüklenemedi:", error);
    }
   } finally {
    if (isMounted) {
     setLoading(false);
    }
   }
  }

  fetchData();

  return () => {
   isMounted = false;
  };
 }, []);

 if (loading) {
  return (
   <section className="container mx-auto px-2 sm:px-4 md:px-8 py-8 sm:py-12 md:py-16 w-full max-w-full overflow-x-hidden">
    <div className="max-w-7xl mx-auto bg-card rounded-xl sm:rounded-2xl md:rounded-3xl p-4 sm:p-6 md:p-8 lg:p-12 border border-border/60 dark:border-white/20  shadow-lg">
     <div className="text-center text-muted-foreground">Yükleniyor...</div>
    </div>
   </section>
  );
 }

 return (
  <section id="services" className="container mx-auto px-2 sm:px-4 md:px-8 py-8 sm:py-12 md:py-16 w-full max-w-full overflow-x-hidden">
   <div className="max-w-7xl mx-auto bg-card rounded-xl sm:rounded-2xl md:rounded-3xl p-4 sm:p-6 md:p-8 lg:p-12 border border-border/60 dark:border-white/20  shadow-lg hover:shadow-xl transition-all duration-300 my-4 sm:my-6 md:my-8 scroll-mt-24">
    <div className="absolute inset-0 bg-linear-to-br from-primary/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-xl sm:rounded-2xl md:rounded-3xl pointer-events-none" />

    <div className="relative text-center mb-6 sm:mb-8 md:mb-10">
     <h2 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 sm:mb-5 md:mb-6 text-foreground px-2">
      Hizmetlerimiz
     </h2>
     <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-muted-foreground max-w-3xl mx-auto px-2 mb-4 sm:mb-5 md:mb-6">{text1}</p>
    </div>

    <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-8">
     {services.map((service) => {
      const Icon = Icons[service.icon] || Icons.Briefcase;
      return (
       <div
        key={service.id}
        className="group relative flex flex-col p-4 sm:p-5 md:p-6 bg-card rounded-xl sm:rounded-2xl border border-border/60 dark:border-white/20  hover:border-primary/40 hover:shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
       >
        <div className="absolute inset-0 bg-linear-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl sm:rounded-2xl" />

        <div className="relative w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-primary transition-colors duration-300 shadow-sm group-hover:shadow-md">
         <Icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
        </div>

        <h3 className="relative text-sm sm:text-base md:text-lg lg:text-xl font-semibold mb-2 sm:mb-3 text-card-foreground group-hover:text-primary transition-colors duration-300">
         {service.title}
        </h3>
        <p className="relative text-xs sm:text-sm md:text-base lg:text-lg text-muted-foreground leading-relaxed">{service.description}</p>
       </div>
      );
     })}
    </div>
   </div>
  </section>
 );
}