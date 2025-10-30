"use client";
import { useState, useEffect } from "react";
import CityCard from "./CityCard";
import { ChevronDown, AlertCircle } from "lucide-react";

const CityCarousel = () => {
 const [practicalInfos, setPracticalInfos] = useState([]);
 const [loading, setLoading] = useState(true);
 const [error, setError] = useState(null);
 const [isTocExpanded, setIsTocExpanded] = useState(false);

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

 if (loading) {
  return (
   <div className="max-w-6xl mx-auto px-4 py-12 text-center">
    <h2 className="text-4xl font-bold mb-4 text-foreground ">
     Pratik Bilgiler
    </h2>
    <p className="text-muted-foreground mb-10">
     Bilgiler yükleniyor, lütfen bekleyin...
    </p>
    <div className="flex justify-center items-center">
     <div className="animate-spin rounded-full h-10 w-10 border-4 border-primary border-t-transparent" />
    </div>
   </div>
  );
 }

 if (error) {
  return (
   <div className="max-w-6xl mx-auto px-4 py-12 text-center">
    <div className="flex flex-col items-center justify-center py-20">
     <AlertCircle className="w-16 h-16 text-destructive mb-4" />
     <h2 className="text-2xl font-bold mb-2 text-foreground">Bir Hata Oluştu</h2>
     <p className="text-muted-foreground mb-6 max-w-md">
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

 return (
  <div className="max-w-6xl mx-auto px-4 py-12">
   <h2 className="text-4xl font-bold text-center mb-4 text-foreground">
    Pratik Bilgiler
   </h2>
   <p className="text-lg text-center text-muted-foreground mb-10">
    Günlük iş hayatında yardımcı olabilecek mesleki pratik bilgiler
   </p>

   {practicalInfos.length > 0 && (
    <div className="bg-muted/30 rounded-xl p-6 mb-12 border border-border/50">
     <button
      onClick={toggleToc}
      className="w-full flex items-center justify-between text-left hover:bg-muted/50 p-2 -m-2 rounded-lg transition-colors group"
     >
      <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
       <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
       <span>İçindekiler</span>
      </h3>
      <div className="flex items-center gap-2 text-primary">
       <span className="text-sm font-medium">
        {isTocExpanded ? 'Gizle' : 'Tümünü Göster'}
       </span>
       <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${isTocExpanded ? 'rotate-180' : ''}`} />
      </div>
     </button>

     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-4 overflow-hidden transition-all duration-500 ease-in-out">
      {practicalInfos.slice(0, isTocExpanded ? practicalInfos.length : 9).map((info, index) => (
       <button
        key={info.id}
        onClick={() => handleTocClick(info.id)}
        className="flex items-center gap-3 p-3 text-left rounded-lg bg-card hover:bg-muted/60 transition-all duration-200 border border-border/50 hover:shadow-sm hover:scale-[1.02]"
       >
        <span className="shrink-0 w-7 h-7 bg-primary/10 text-primary rounded-md flex items-center justify-center text-sm font-bold">
         {index + 1}
        </span>
        <span className="text-sm font-medium text-card-foreground truncate">
         {info.title}
        </span>
       </button>
      ))}
     </div>
    </div>
   )}

   {!practicalInfos.length ? (
    <div className="text-center text-muted-foreground py-20 flex flex-col items-center">
     <AlertCircle className="w-16 h-16 text-muted-foreground mb-4" />
     <p className="text-lg">Henüz pratik bilgi eklenmemiş.</p>
    </div>
   ) : (
    <div className="grid gap-8 ">
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