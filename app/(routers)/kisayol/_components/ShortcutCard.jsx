"use client";
import Image from "next/image";
import * as Icons from "lucide-react";
import Link from "next/link";

export default function ShortcutCard({ shortcut }) {
 const Icon = Icons[shortcut.icon] || Icons.Link;
 const hasImage = shortcut.imageUrl && shortcut.imageUrl.trim() !== "";

 return (
  <div
   id={`kisayol-${shortcut.id}`}
   className="scroll-mt-24 h-full"
  >
   <Link
    href={shortcut.url}
    target="_blank"
    rel="noopener noreferrer"
    className="group bg-card rounded-lg shadow-md hover:shadow-xl transition-all duration-300 p-4 sm:p-5 md:p-6 flex flex-col items-center text-center border border-border hover:border-primary hover:-translate-y-1 h-full"
   >
    <div className="mb-3 sm:mb-4 w-14 h-14 sm:w-16 sm:h-16 md:w-[72px] md:h-[72px] lg:w-20 lg:h-20 flex items-center justify-center shrink-0">
     {hasImage ? (
      <div className="relative w-full h-full rounded-lg overflow-hidden bg-card p-1 sm:p-1.5 md:p-2">
       <Image
        src={shortcut.imageUrl}
        alt={shortcut.title}
        fill
        className="object-contain"
        sizes="(max-width: 500px) 56px, (max-width: 768px) 64px, (max-width: 1024px) 72px, 80px"
        onError={(e) => {
         const target = e.currentTarget;
         target.style.display = "none";
         const fallback = target.nextElementSibling;
         if (fallback) fallback.style.display = "flex";
        }}
       />
       <div
        style={{ display: "none" }}
        className="absolute inset-0 w-full h-full bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary transition-colors duration-300"
       >
        <Icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
       </div>
      </div>
     ) : (
      <div className="w-full h-full bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
       <Icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
      </div>
     )}
    </div>
    <h3 className="text-xs sm:text-sm md:text-base font-semibold text-card-foreground group-hover:text-primary transition-colors duration-300 line-clamp-2 leading-tight min-h-5 sm:min-h-10 flex items-center justify-center">
     {shortcut.title}
    </h3>
   </Link>
  </div>
 );
}