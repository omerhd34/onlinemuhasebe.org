"use client";
import { Award, Users, Star } from "lucide-react";

const stats = [
 {
  value: "30+",
  label: "Yıl Deneyim",
  icon: Award,
  gradient: "from-blue-500 to-blue-600",
  bgGradient: "from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20",
 },
 {
  value: "1000+",
  label: "Mükellef Hizmeti",
  icon: Users,
  gradient: "from-green-500 to-green-600",
  bgGradient: "from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20",
 },
 {
  value: "%98",
  label: "Müşteri Memnuniyeti",
  icon: Star,
  gradient: "from-amber-500 to-amber-600",
  bgGradient: "from-amber-50 to-amber-100 dark:from-amber-900/20 dark:to-amber-800/20",
 },
];

export default function StatsSection() {
 return (
  <section className="container mx-auto px-2 sm:px-4 md:px-8 py-8 sm:py-12 md:py-16 w-full max-w-full overflow-x-hidden">
   <div className="max-w-7xl mx-auto bg-card rounded-xl sm:rounded-2xl md:rounded-3xl p-4 sm:p-6 md:p-8 lg:p-12 border border-border/60 dark:border-white/20  shadow-lg hover:shadow-xl transition-all duration-300 my-4 sm:my-6 md:my-8 relative">
    <div className="absolute inset-0 bg-linear-to-br from-primary/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-xl sm:rounded-2xl md:rounded-3xl pointer-events-none" />

    <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-8">
     {stats.map((stat, index) => {
      const Icon = stat.icon;
      return (
       <div
        key={index}
        className={`group relative bg-linear-to-br ${stat.bgGradient} rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 lg:p-8 border border-border/60 dark:border-white/20  shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] overflow-hidden`}
       >
        <div className={`absolute top-0 right-0 w-32 h-32 bg-linear-to-br ${stat.gradient} opacity-5 group-hover:opacity-10 rounded-full blur-3xl transition-opacity duration-300 -translate-y-1/2 translate-x-1/2`} />

        <div className="relative z-10 flex flex-col items-center text-center">
         <div className={`mb-3 sm:mb-4 md:mb-5 p-3 sm:p-3.5 md:p-4 rounded-xl sm:rounded-2xl bg-linear-to-br ${stat.gradient} shadow-md group-hover:shadow-lg transition-all duration-300 group-hover:scale-110`}>
          <Icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-white" />
         </div>

         <div className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold bg-linear-to-r ${stat.gradient} bg-clip-text text-transparent mb-2 sm:mb-2.5 md:mb-3 transition-all duration-300 group-hover:scale-105`}>
          {stat.value}
         </div>

         <div className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-medium text-muted-foreground group-hover:text-foreground transition-colors duration-300">
          {stat.label}
         </div>
        </div>
       </div>
      );
     })}
    </div>
   </div>
  </section>
 );
}
