"use client";

import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import { Search, X, Loader2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function SearchModal({ isOpen, onClose }) {
 const [query, setQuery] = useState("");
 const [results, setResults] = useState([]);
 const [loading, setLoading] = useState(false);
 const [error, setError] = useState(null);
 const router = useRouter();

 const handleSearch = useCallback(async (searchQuery) => {
  if (!searchQuery || searchQuery.trim().length < 2) {
   setResults([]);
   return;
  }

  setLoading(true);
  setError(null);

  try {
   const response = await fetch(
    `/api/search?q=${encodeURIComponent(searchQuery)}`
   );
   const data = await response.json();

   if (!response.ok) {
    throw new Error(data.error || "Arama başarısız");
   }

   setResults(data.results || []);
  } catch (err) {
   setError(err.message);
   setResults([]);
  } finally {
   setLoading(false);
  }
 }, []);

 useEffect(() => {
  const debounceTimer = setTimeout(() => {
   if (query.trim()) {
    handleSearch(query);
   } else {
    setResults([]);
   }
  }, 300);

  return () => clearTimeout(debounceTimer);
 }, [query, handleSearch]);

 // handleClose'u useCallback ile sabitle: onClose prop'u değişirse güncellensin
 const handleClose = useCallback(() => {
  onClose();
  setQuery("");
  setResults([]);
  setError(null);
 }, [onClose]);

 const handleResultClick = (result) => {
  // Modal'ı kapat
  handleClose();

  // Eğer section varsa
  if (result.section) {
   // Önce sayfaya git
   router.push(result.url);

   // Sayfa yüklenmesini bekle ve scroll yap
   setTimeout(() => {
    const element = document.getElementById(result.section);
    if (element) {
     // Scroll position'ı hesapla (header yüksekliğini çıkar)
     const headerOffset = 100;
     const elementPosition = element.getBoundingClientRect().top;
     const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

     window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
     });

     // Highlight efekti
     setTimeout(() => {
      element.classList.add("highlight-flash");
      setTimeout(() => {
       element.classList.remove("highlight-flash");
      }, 2000);
     }, 500);
    } else {
     console.warn(`Element bulunamadı: ${result.section}`);
    }
   }, 500);
  } else {
   // Section yoksa sadece sayfaya git
   router.push(result.url);
  }
 };

 useEffect(() => {
  const handleEscape = (e) => {
   if (e.key === "Escape") {
    handleClose();
   }
  };

  if (isOpen) {
   document.addEventListener("keydown", handleEscape);
   // body overflow kontrolünü sadece modal açıldığında uygula
   document.body.style.overflow = "hidden";
  }

  return () => {
   document.removeEventListener("keydown", handleEscape);
   // modal kapansın veya component unmount olsun overflow'u geri al
   document.body.style.overflow = "unset";
  };
 }, [isOpen, handleClose]);

 if (!isOpen) return null;

 return (
  <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4">
   {/* Backdrop */}
   <div
    className="absolute inset-0 bg-black/50 backdrop-blur-sm"
    onClick={handleClose}
   />

   {/* Modal Content */}
   <div className="relative w-full max-w-2xl bg-card rounded-xl shadow-2xl border border-border overflow-hidden">
    {/* Header */}
    <div className="flex items-center gap-3 p-4 border-b border-border">
     <Search className="w-5 h-5 text-muted-foreground shrink-0" />
     <Input
      type="text"
      placeholder="Sitede ara... (örn: Vergi Kodları, Kıdem Tazminatı)"
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      className="flex-1 border-none focus-visible:ring-0 text-base"
      autoFocus
     />
     <Button
      size="icon-sm"
      variant="ghost"
      onClick={handleClose}
      className="shrink-0"
     >
      <X className="w-5 h-5" />
     </Button>
    </div>

    {/* Results */}
    <div className="max-h-[60vh] overflow-y-auto">
     {loading && (
      <div className="flex items-center justify-center py-12">
       <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
     )}

     {error && (
      <div className="p-4 text-center text-destructive">
       <p>Hata: {error}</p>
      </div>
     )}

     {!loading && !error && query.trim() && results.length === 0 && (
      <div className="p-8 text-center text-muted-foreground">
       <Search className="w-12 h-12 mx-auto mb-3 opacity-50" />
       <p className="text-lg">Sonuç bulunamadı</p>
       <p className="text-sm mt-2">
        &ldquo;{query}&rdquo; için herhangi bir sonuç bulunamadı
       </p>
      </div>
     )}

     {!loading && !error && results.length > 0 && (
      <div className="p-2">
       <div className="text-sm text-muted-foreground px-3 py-2">
        {results.length} sonuç bulundu
       </div>
       <div className="space-y-1">
        {results.map((result, index) => (
         <button
          key={`${result.type}-${result.id}-${index}`}
          onClick={() => handleResultClick(result)}
          className="w-full text-left p-3 rounded-lg hover:bg-accent transition-colors group"
         >
          <div className="flex items-start gap-3">
           <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
             <span className="text-sm font-medium text-card-foreground group-hover:text-primary transition-colors">
              {result.title}
             </span>
             <span className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary shrink-0">
              {result.type}
             </span>
            </div>
            <p className="text-sm text-muted-foreground line-clamp-2">
             {result.description}
            </p>
           </div>
           <ArrowRight className="w-4 h-4 text-muted-foreground shrink-0 mt-1 opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
         </button>
        ))}
       </div>
      </div>
     )}

     {!loading && !error && !query.trim() && (
      <div className="p-8 text-center text-muted-foreground">
       <Search className="w-12 h-12 mx-auto mb-3 opacity-50" />
       <p className="text-lg">Aramaya başlayın</p>
       <p className="text-sm mt-2">Site içeriğinde arama yapmak için yukarıya yazın</p>
      </div>
     )}
    </div>

    {/* Footer */}
    <div className="flex items-center justify-between p-3 border-t border-border bg-muted/30 text-xs text-muted-foreground">
     <div className="flex items-center gap-4">
      <span>
       <kbd className="px-2 py-1 bg-background rounded border">↵</kbd> Seç
      </span>
      <span>
       <kbd className="px-2 py-1 bg-background rounded border">Esc</kbd> Kapat
      </span>
     </div>
    </div>
   </div>
  </div>
 );
}
