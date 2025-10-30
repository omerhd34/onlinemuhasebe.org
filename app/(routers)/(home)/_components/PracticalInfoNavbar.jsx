"use client";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

const PracticalInfoNavbar = () => {
 const [practicalInfos, setPracticalInfos] = useState([]);
 const [loading, setLoading] = useState(true);
 const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
 const [isPaused, setIsPaused] = useState(false);
 const intervalRef = useRef(null);
 const router = useRouter();

 const getItemsPerSlide = () => {
  if (typeof window !== "undefined") {
   if (window.innerWidth >= 1024) return 6;
   if (window.innerWidth >= 768) return 4;
  }
  return 2;
 };

 const [itemsPerSlide, setItemsPerSlide] = useState(getItemsPerSlide());

 useEffect(() => {
  const handleResize = () => {
   setItemsPerSlide(getItemsPerSlide());
   setCurrentSlideIndex(0);
  };
  window.addEventListener("resize", handleResize);
  return () => window.removeEventListener("resize", handleResize);
 }, []);

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

 useEffect(() => {
  if (practicalInfos.length <= itemsPerSlide || isPaused) {
   if (intervalRef.current) clearInterval(intervalRef.current);
   return;
  }
  intervalRef.current = setInterval(() => {
   setCurrentSlideIndex((prevIndex) => {
    const maxIndex = Math.ceil(practicalInfos.length / itemsPerSlide) - 1;
    return prevIndex >= maxIndex ? 0 : prevIndex + 1;
   });
  }, 2500);

  return () => {
   if (intervalRef.current) clearInterval(intervalRef.current);
  };
 }, [practicalInfos.length, itemsPerSlide, isPaused]);

 const handleNavClick = (id) => {
  setIsPaused(true);
  router.push("/pratik_bilgiler");
 };

 const goToPreviousSlide = () => {
  setIsPaused(true);
  const maxIndex = Math.ceil(practicalInfos.length / itemsPerSlide) - 1;
  setCurrentSlideIndex((prevIndex) => (prevIndex === 0 ? maxIndex : prevIndex - 1));
 };

 const goToNextSlide = () => {
  setIsPaused(true);
  const maxIndex = Math.ceil(practicalInfos.length / itemsPerSlide) - 1;
  setCurrentSlideIndex((prevIndex) => (prevIndex >= maxIndex ? 0 : prevIndex + 1));
 };

 if (loading) {
  return (
   <section className="w-full py-16">
    <div className="max-w-4xl mx-auto px-4 text-center">
     <div className="animate-spin rounded-full h-8 w-8 border-4 border-primary border-t-transparent mx-auto"></div>
    </div>
   </section>
  );
 }

 if (!practicalInfos.length) return null;

 const slides = [];
 for (let i = 0; i < practicalInfos.length; i += itemsPerSlide) {
  slides.push(practicalInfos.slice(i, i + itemsPerSlide));
 }

 return (
  <section className="container mx-auto px-4 md:px-8 py-16">
   <div className="rounded-3xl p-8 md:p-12 shadow-2xl my-8 scroll-mt-24 bg-blue-200 text-gray-900 dark:bg-blue-900 dark:text-gray-100">
    <div className="max-w-6xl mx-auto">
     <div className="text-center mb-10">
      <h2 className="text-3xl lg:text-4xl font-bold mb-2">
       Pratik Bilgiler
      </h2>
      <p className="text-lg mb-4 text-blue-800 dark:text-blue-200">
       İlgilendiğiniz konuya hızlıca ulaşın.
      </p>
     </div>

     <div
      className="relative group"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
     >
      <div className="overflow-hidden rounded-2xl">
       <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentSlideIndex * 100}%)` }}
       >
        {slides.map((slide, slideIndex) => (
         <div key={slideIndex} className="w-full shrink-0 px-1">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
           {slide.map((info, itemIndex) => (
            <button
             key={info.id}
             onClick={() => handleNavClick(info.id)}
             className="h-full p-6 bg-white/80 dark:bg-blue-400 border border-border/50 rounded-xl 
                      hover:shadow-xl hover:scale-105 transition-all duration-300 text-left flex flex-col"
            >
             <span className="shrink-0 w-10 h-10 bg-blue-200 text-blue-900 dark:bg-blue-700 dark:text-blue-100 
                            rounded-lg flex items-center justify-center text-lg font-bold mb-4">
              {slideIndex * itemsPerSlide + itemIndex + 1}
             </span>
             <span className="text-base font-semibold leading-snug line-clamp-3 grow">
              {info.title}
             </span>
             <div className="mt-4 flex items-center justify-end">
              <ArrowRight className="w-5 h-5 transition-all duration-300 transform group-hover:translate-x-1" />
             </div>
            </button>
           ))}
          </div>
         </div>
        ))}
       </div>
      </div>

      <div className="flex justify-center items-center gap-4 mt-8">
       <button
        onClick={goToPreviousSlide}
        className="p-3 rounded-full bg-white dark:bg-blue-700 shadow-md hover:shadow-lg hover:bg-blue-500 dark:hover:bg-blue-600 hover:text-white transition-all duration-300 border border-border/20"
       >
        <ChevronLeft className="w-5 h-5" />
       </button>

       <div className="flex gap-2">
        {slides.map((_, index) => (
         <button
          key={index}
          onClick={() => setCurrentSlideIndex(index)}
          className={`h-2 rounded-full transition-all duration-300 ${currentSlideIndex === index
           ? "bg-blue-500 dark:bg-blue-300 w-8"
           : "bg-blue-300/50 dark:bg-blue-700/50 w-2"
           }`}
         />
        ))}
       </div>

       <button
        onClick={goToNextSlide}
        className="p-3 rounded-full bg-white dark:bg-blue-700 shadow-md hover:shadow-lg hover:bg-blue-500 dark:hover:bg-blue-600 hover:text-white transition-all duration-300 border border-border/20"
       >
        <ChevronRight className="w-5 h-5" />
       </button>
      </div>
     </div>
    </div>
   </div>
  </section>

 );
};

export default PracticalInfoNavbar;
