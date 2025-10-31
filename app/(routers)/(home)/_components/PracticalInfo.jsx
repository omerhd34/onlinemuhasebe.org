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
 const [windowWidth, setWindowWidth] = useState(
  typeof window !== "undefined" ? window.innerWidth : 768
 );

 useEffect(() => {
  const handleResize = () => {
   setItemsPerSlide(getItemsPerSlide());
   setWindowWidth(window.innerWidth);
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
  router.push(`/pratik_bilgiler#pratik-bilgi-${id}`);
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

 // Dot sayısını responsive olarak sınırla
 const getMaxVisibleDots = () => {
  if (windowWidth >= 768) return slides.length;
  if (windowWidth >= 500) return Math.min(slides.length, 5);
  return Math.min(slides.length, 3);
 };

 const getVisibleDotIndices = () => {
  const maxVisibleDots = getMaxVisibleDots();

  if (slides.length <= maxVisibleDots) {
   return slides.map((_, i) => i);
  }

  const half = Math.floor(maxVisibleDots / 2);
  let start = Math.max(0, currentSlideIndex - half);
  let end = Math.min(slides.length - 1, start + maxVisibleDots - 1);

  if (end - start + 1 < maxVisibleDots) {
   start = Math.max(0, end - maxVisibleDots + 1);
  }

  return Array.from({ length: end - start + 1 }, (_, i) => start + i);
 };

 const visibleDotIndices = getVisibleDotIndices();

 return (
  <section className="container mx-auto px-2 sm:px-4 md:px-8 py-8 sm:py-12 md:py-16 w-full max-w-full overflow-x-hidden">
   <div className="max-w-7xl mx-auto rounded-xl sm:rounded-2xl md:rounded-3xl p-4 sm:p-6 md:p-8 lg:p-12 shadow-2xl my-4 sm:my-6 md:my-8 scroll-mt-24 bg-blue-200 text-gray-900 dark:bg-linear-to-br dark:from-slate-800 dark:to-slate-900 dark:text-gray-50 border-2 border-blue-300/50 dark:border-slate-600/50 hover:border-blue-400/70 dark:hover:border-blue-500/60 hover:shadow-3xl transition-all duration-300 relative overflow-hidden">
    <div className="absolute inset-0 bg-linear-to-br from-white/10 to-transparent dark:from-blue-500/5 dark:to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

    <div className="relative">
     <div className="text-center mb-6 sm:mb-8 md:mb-10">
      <h2 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 sm:mb-5 md:mb-6 px-2">
       Pratik Bilgiler
      </h2>
      <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl mb-4 sm:mb-5 md:mb-6 text-blue-800 dark:text-blue-300 dark:opacity-90 px-2">
       İlgilendiğiniz konuya hızlıca ulaşın.
      </p>
     </div>

     <div className="relative group" onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}>
      <div className="overflow-hidden rounded-2xl">
       <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentSlideIndex * 100}%)` }}
       >
        {slides.map((slide, slideIndex) => (
         <div key={slideIndex} className="w-full shrink-0 px-0.5 sm:px-1">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3 md:gap-4">
           {slide.map((info, itemIndex) => (
            <button
             key={info.id}
             onClick={() => handleNavClick(info.id)}
             className="group relative h-full p-3 sm:p-4 md:p-6 bg-white/80 dark:bg-slate-700/90 dark:text-gray-50 border border-border/60 dark:border-slate-500/40 rounded-lg sm:rounded-xl 
                      hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 text-left flex flex-col hover:border-primary/40 dark:hover:border-blue-400/60"
            >
             <div className="absolute inset-0 bg-linear-to-br from-primary/5 to-transparent dark:from-blue-500/10 dark:to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg sm:rounded-xl" />

             <span className="relative shrink-0 w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 bg-blue-200 text-blue-900 dark:bg-blue-500 dark:text-white 
                           rounded-lg flex items-center justify-center text-xs sm:text-sm md:text-base lg:text-lg font-bold mb-2 sm:mb-3 md:mb-4 shadow-sm dark:shadow-md group-hover:shadow-md dark:group-hover:shadow-lg group-hover:scale-110 transition-all duration-300">
              {slideIndex * itemsPerSlide + itemIndex + 1}
             </span>
             <span className="relative text-xs sm:text-sm md:text-base lg:text-lg font-semibold leading-snug line-clamp-3 grow transition-colors duration-300 dark:text-gray-100">
              {info.title}
             </span>
             <div className="relative mt-2 sm:mt-3 md:mt-4 flex items-center justify-end">
              <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 transition-all duration-300 transform group-hover:translate-x-1 text-primary dark:text-blue-300 dark:group-hover:text-blue-400" />
             </div>
            </button>
           ))}
          </div>
         </div>
        ))}
       </div>
      </div>

      <div className="flex justify-center items-center gap-2 sm:gap-3 md:gap-4 lg:gap-5 mt-4 sm:mt-6 md:mt-8">
       <button
        onClick={goToPreviousSlide}
        className="p-1.5 sm:p-2 md:p-2.5 lg:p-3 rounded-full bg-white dark:bg-slate-600 dark:text-gray-100 shadow-md hover:shadow-lg hover:bg-blue-500 dark:hover:bg-blue-500 hover:text-white dark:hover:text-white transition-all duration-300 border border-border/20 dark:border-slate-500/40 shrink-0"
       >
        <ChevronLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5" />
       </button>
       <div className="flex gap-2 sm:gap-2.5 md:gap-3 items-center justify-center px-2 sm:px-3 flex-1 max-w-xs sm:max-w-sm md:max-w-md">
        {visibleDotIndices.map((index) => (
         <button
          key={index}
          onClick={() => {
           setIsPaused(true);
           setCurrentSlideIndex(index);
          }}
          className={`rounded-full transition-all duration-300 ease-in-out shrink-0 ${currentSlideIndex === index
           ? "bg-blue-500 dark:bg-blue-400 dark:shadow-lg h-2.5 w-6 sm:h-3 sm:w-8 md:h-3.5 md:w-10 shadow-sm"
           : "bg-blue-300/60 dark:bg-slate-500/60 h-2.5 w-2.5 sm:h-3 sm:w-3 md:h-3.5 md:w-3.5 hover:bg-blue-400/80 dark:hover:bg-slate-400/80"
           }`}
          aria-label={`Slide ${index + 1}`}
         />
        ))}
       </div>
       <button
        onClick={goToNextSlide}
        className="p-1.5 sm:p-2 md:p-2.5 lg:p-3 rounded-full bg-white dark:bg-slate-600 dark:text-gray-100 shadow-md hover:shadow-lg hover:bg-blue-500 dark:hover:bg-blue-500 hover:text-white dark:hover:text-white transition-all duration-300 border border-border/20 dark:border-slate-500/40 shrink-0"
       >
        <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5" />
       </button>
      </div>
     </div>
    </div>
   </div>
  </section>

 );
};

export default PracticalInfoNavbar;