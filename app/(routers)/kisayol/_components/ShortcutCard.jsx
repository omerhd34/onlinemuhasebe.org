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
   className="scroll-mt-24"
  >
   <Link
    href={shortcut.url}
    target="_blank"
    rel="noopener noreferrer"
    className="group bg-card rounded-lg shadow-md hover:shadow-xl transition-all duration-300 p-6 flex flex-col items-center text-center border border-border hover:border-primary hover:-translate-y-1"
   >
    <div className="mb-4 w-20 h-20 flex items-center justify-center">
     {hasImage ? (
      <div className="relative w-full h-full rounded-lg overflow-hidden bg-card p-2">
       <Image
        src={shortcut.imageUrl}
        alt={shortcut.title}
        fill
        className="object-contain"
        sizes="100px"
        onError={(e) => {
         const target = e.currentTarget;
         target.style.display = "none";
         const fallback = target.nextElementSibling;
         if (fallback) fallback.style.display = "flex";
        }}
       />
       <div
        style={{ display: "none" }}
        className="absolute inset-0 w-full h-full bg-primary/10 rounded-lg items-center justify-center group-hover:bg-primary transition-colors duration-300"
       >
        <Icon className="w-10 h-10 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
       </div>
      </div>
     ) : (
      <div className="w-full h-full bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
       <Icon className="w-10 h-10 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
      </div>
     )}
    </div>
    <h3 className="text-lg font-semibold mb-2 text-card-foreground group-hover:text-primary transition-colors duration-300">
     {shortcut.title}
    </h3>
    <p className="text-sm text-muted-foreground">{shortcut.description}</p>
   </Link>
  </div>
 );
}