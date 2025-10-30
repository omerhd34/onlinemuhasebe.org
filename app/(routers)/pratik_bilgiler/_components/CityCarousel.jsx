"use client";
import { useState, useEffect } from "react";
import CityCard from "./CityCard";
import { AlertCircle, List } from "lucide-react";

const CityCarousel = () => {
 const [practicalInfos, setPracticalInfos] = useState([]);
 const [loading, setLoading] = useState(true);
 const [error, setError] = useState(null);
 const [isTocExpanded, setIsTocExpanded] = useState(false);
 const [windowWidth, setWindowWidth] = useState(0);

 useEffect(() => {
  const handleResize = () => setWindowWidth(window.innerWidth);
  handleResize();
  window.addEventListener('resize', handleResize);
  return () => window.removeEventListener('resize', handleResize);
 }, []);

 useEffect(() => {
  const fetchPracticalInfos = async () => {
   try {
    setLoading(true);
    setError(null);
    const response = await fetch("/api/practical-info");
    if (!response.ok) throw new Error("API isteği başarısız");

    const data = await response.json();
    setPracticalInfos(Array.isArray(data.data) ? data.data : []);
   } catch (error) {
    console.error("Veriler alınamadı:", error);
    setError(error.message);
    setPracticalInfos([]);
   } finally {
    setLoading(false);
   }
  };

  fetchPracticalInfos();
 }, []);

 useEffect(() => {
  const handleHashScroll = () => {
   const hash = window.location.hash;
   if (hash && hash.startsWith('#pratik-bilgi-')) {
    const id = hash.replace('#pratik-bilgi-', '');
    const element = document.getElementById(`pratik-bilgi-${id}`);
    if (element) {
     const yOffset = -140;
     const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
     window.scrollTo({ top: y, behavior: 'smooth' });
    }
   }
  };

  if (!loading && practicalInfos.length > 0) {
   setTimeout(handleHashScroll, 100);
  }
 }, [loading, practicalInfos]);

 useEffect(() => {
  const handleHashChange = () => {
   const hash = window.location.hash;
   if (hash && hash.startsWith('#pratik-bilgi-')) {
    const id = hash.replace('#pratik-bilgi-', '');
    const element = document.getElementById(`pratik-bilgi-${id}`);
    if (element) {
     const yOffset = -140;
     const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
     window.scrollTo({ top: y, behavior: 'smooth' });
    }
   }
  };

  window.addEventListener('hashchange', handleHashChange);
  return () => window.removeEventListener('hashchange', handleHashChange);
 }, []);

 const handleTocClick = (id) => {
  const element = document.getElementById(`pratik-bilgi-${id}`);
  if (element) {
   const yOffset = -140;
   const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;

   window.scrollTo({ top: y, behavior: 'smooth' });
  }
 };

 const toggleToc = () => {
  setIsTocExpanded(!isTocExpanded);
 };

 const getMaxItems = () => {
  if (!isTocExpanded) {
   if (windowWidth >= 1440) return 9;
   if (windowWidth >= 1024) return 6;
   if (windowWidth >= 768) return 4;
   if (windowWidth >= 500) return 4;
   return 0;
  }
  return practicalInfos.length;
 };

 const shouldShowToc = windowWidth >= 500;


 if (error) {
  return (
   <div className="text-center">
    <div className="flex flex-col items-center justify-center py-20">
     <AlertCircle className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 text-destructive mb-4" />
     <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 text-foreground">Bir Hata Oluştu</h2>
     <p className="text-sm sm:text-base text-muted-foreground mb-6 max-w-md">
      Bilgiler yüklenirken bir sorun oluştu: {error}
     </p>
     <button
      onClick={() => window.location.reload()}
      className="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
     >
      Sayfayı Yenile
     </button>
    </div>
   </div>
  );
 }

 const maxItems = getMaxItems();

 return (
  <div>
   <div className="text-center mb-6 sm:mb-8 md:mb-12">
    <h2 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-2 sm:mb-3 md:mb-4 text-foreground px-2">
     Pratik Bilgiler
    </h2>
    <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-muted-foreground max-w-2xl mx-auto px-2">
     Günlük iş hayatında yardımcı olabilecek mesleki pratik bilgiler
    </p>
   </div>

   {/* İçindekiler - Sadece md (tablet) ve üzeri ekranlarda göster */}
   {practicalInfos.length > 0 && shouldShowToc && (
    <div className="bg-linear-to-br from-primary/10 via-primary/5 to-transparent rounded-2xl p-5 sm:p-6 md:p-7 lg:p-8 mb-10 sm:mb-12 md:mb-14 border border-primary/20 shadow-sm hover:shadow-md transition-shadow duration-300">
     <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-foreground flex items-center gap-2 sm:gap-3">
      <span className="bg-linear-to-r from-foreground to-foreground/80 bg-clip-text">İçindekiler</span>
     </h3>

     <div
      className={`grid grid-cols-2 xl:grid-cols-3 gap-2.5 sm:gap-3 md:gap-3.5 lg:gap-4 mt-5 sm:mt-6 transition-all duration-500 ease-in-out ${isTocExpanded ? 'opacity-100' : 'opacity-100'
       }`}
      style={{
       maxHeight: isTocExpanded ? '2000px' : '500px',
       overflow: 'hidden'
      }}
     >
      {practicalInfos.slice(0, maxItems).map((info, index) => (
       <button
        key={info.id}
        onClick={() => handleTocClick(info.id)}
        className="group relative flex items-center gap-3 sm:gap-3.5 md:gap-4 p-3 sm:p-3.5 md:p-4 text-left rounded-xl bg-background/50 backdrop-blur-sm hover:bg-background/70 transition-all duration-300 border border-primary/20 hover:border-primary/40 hover:shadow-md active:scale-[0.98]"
       >
        <div className="absolute inset-0 bg-linear-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />

        <span className="relative shrink-0 w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 bg-linear-to-br from-primary/20 to-primary/10 text-primary rounded-lg flex items-center justify-center text-sm sm:text-base md:text-lg font-bold shadow-sm group-hover:shadow-md group-hover:scale-105 transition-all duration-300">
         {index + 1}
        </span>

        <span className="relative text-xs sm:text-sm md:text-base lg:text-base font-semibold text-card-foreground line-clamp-2 leading-snug group-hover:text-primary transition-colors duration-300">
         {info.title}
        </span>
       </button>
      ))}
     </div>

     {!isTocExpanded && practicalInfos.length > maxItems && maxItems > 0 && (
      <div className="mt-5 sm:mt-6 pt-5 sm:pt-6 border-t border-border/50">
       <button
        onClick={toggleToc}
        className="w-full py-2.5 sm:py-3 px-4 bg-primary/10 hover:bg-primary/20 text-primary font-semibold rounded-lg transition-all duration-300 hover:shadow-md text-sm sm:text-base"
       >
        + {practicalInfos.length - maxItems} Konu Daha Göster
       </button>
      </div>
     )}
    </div>
   )}

   {!practicalInfos.length ? (
    <div className="text-center text-muted-foreground py-20 flex flex-col items-center">
     <p className="text-sm sm:text-base md:text-lg">Yükleniyor...</p>
    </div>
   ) : (
    <div className="grid gap-6 sm:gap-7 md:gap-8 lg:gap-10">
     {practicalInfos.map((info, index) => (
      <CityCard
       key={info.id}
       id={info.id}
       image={info.image}
       title={info.title}
       description={info.description}
       afterDescription={info.afterDescription}
       table={info.tableData}
       link={info.link}
       order={index + 1}
      />
     ))}
    </div>
   )}
  </div>
 );
};

export default CityCarousel;