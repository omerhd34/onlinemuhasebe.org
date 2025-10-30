import CityCarousel from "./_components/CityCarousel";

const PratikBilgiler = () => {
 return (
  <div className="min-h-screen bg-background text-foreground">
   <section className="container mx-auto px-2 sm:px-4 md:px-8 py-8 sm:py-12 md:py-16 w-full max-w-full overflow-x-hidden">
    <div className="max-w-7xl mx-auto bg-card rounded-xl sm:rounded-2xl md:rounded-3xl p-4 sm:p-6 md:p-8 lg:p-12 border border-border/60 dark:border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 my-4 sm:my-6 md:my-8">
     <CityCarousel />
    </div>
   </section>
  </div>
 );
};

export default PratikBilgiler;