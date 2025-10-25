"use client";
import { useState, useEffect } from "react";
import CityCard from "./CityCard";

const CityCarousel = () => {
 const [practicalInfos, setPracticalInfos] = useState([]);
 const [loading, setLoading] = useState(true);

 useEffect(() => {
  const fetchPracticalInfos = async () => {
   try {
    setLoading(true);
    const response = await fetch("/api/practical-info");
    if (!response.ok) throw new Error("API isteği başarısız");

    const data = await response.json();
    setPracticalInfos(Array.isArray(data.data) ? data.data : []);
   } catch (error) {
    console.error("Veriler alınamadı:", error);
    setPracticalInfos([]);
   } finally {
    setLoading(false);
   }
  };

  fetchPracticalInfos();
 }, []);

 if (loading) {
  return (
   <div className="max-w-6xl mx-auto px-4 py-16 text-center">
    <h2 className="text-4xl font-bold mb-4 text-foreground">
     Mesleki Pratik Bilgiler
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

 return (
  <div className="max-w-6xl mx-auto px-4 py-16">
   <h2 className="text-4xl font-bold text-center mb-4 text-foreground">
    Mesleki Pratik Bilgiler
   </h2>
   <p className="text-lg text-center text-muted-foreground mb-12">
    Günlük iş hayatında yardımcı olabilecek mesleki pratik bilgiler
   </p>

   {!practicalInfos.length ? (
    <div className="text-center text-muted-foreground py-20">
     Henüz pratik bilgi eklenmemiş.
    </div>
   ) : (
    <div className="grid gap-8 ">
     {practicalInfos.map((info) => (
      <CityCard
       key={info.id}
       image={info.image}
       title={info.title}
       description={info.description}
       afterDescription={info.afterDescription}
       table={info.tableData}
       link={info.link}
      />
     ))}
    </div>
   )}
  </div>
 );
};

export default CityCarousel;
