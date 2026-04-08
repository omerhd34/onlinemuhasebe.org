"use client";

import { createContext, useCallback, useContext, useMemo, useState } from "react";
import { Loader2 } from "lucide-react";

const ClientLoadingContext = createContext(null);

function LoadingOverlay() {
 return (
  <div
   className="fixed inset-0 z-100 flex items-center justify-center p-6"
   role="status"
   aria-live="polite"
   aria-busy="true"
  >
   <div
    className="absolute inset-0 bg-background/65 backdrop-blur-xl dark:bg-background/75"
    aria-hidden
   />
   <div
    className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_75%_55%_at_50%_42%,var(--primary)_0%,transparent_58%)] opacity-[0.14] dark:opacity-[0.22]"
    aria-hidden
   />
   <div
    className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,oklch(0.5_0.08_250/0.08),transparent_55%)]"
    aria-hidden
   />

   <div className="relative w-full max-w-xs animate-in fade-in zoom-in-95 duration-300 ease-out fill-mode-both">
    <div className="flex flex-col items-center gap-6">
     <div className="relative flex h-18 w-18 items-center justify-center">
      <div
       className="absolute inset-0 rounded-full bg-linear-to-br from-primary/20 via-primary/5 to-transparent opacity-80 dark:from-primary/25 dark:via-primary/10"
       aria-hidden
      />
      <div
       className="absolute inset-[3px] rounded-full border border-primary/20 dark:border-primary/30"
       aria-hidden
      />
      <div
       className="absolute inset-[3px] rounded-full border-2 border-transparent border-t-primary border-r-primary/50 animate-spin dark:border-r-primary/40"
       style={{ animationDuration: "1.1s" }}
       aria-hidden
      />
      <Loader2
       className="relative z-10 h-8 w-8 text-primary"
       strokeWidth={2.25}
       aria-hidden
      />
     </div>
    </div>
   </div>
  </div>
 );
}

export function ClientLoadingProvider({ children }) {
 const [pending, setPending] = useState(0);

 const startLoading = useCallback(() => {
  setPending((n) => n + 1);
 }, []);

 const stopLoading = useCallback(() => {
  setPending((n) => Math.max(0, n - 1));
 }, []);

 const value = useMemo(
  () => ({ startLoading, stopLoading }),
  [startLoading, stopLoading]
 );

 return (
  <ClientLoadingContext.Provider value={value}>
   {pending > 0 && <LoadingOverlay />}
   {children}
  </ClientLoadingContext.Provider>
 );
}

export function useClientLoading() {
 const ctx = useContext(ClientLoadingContext);
 if (!ctx) {
  throw new Error("useClientLoading yalnızca ClientLoadingProvider içinde kullanılabilir.");
 }
 return ctx;
}
