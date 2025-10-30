'use client';
import { useRouter } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function NotFoundPage() {
 const router = useRouter();

 return (
  <div className="min-h-screen bg-background flex items-start justify-center px-4 pt-20 md:pt-32">
   <div className="max-w-2xl w-full text-center space-y-8">
    <div className="relative">
     <h1 className="text-[100px] sm:text-[120px] md:text-[150px] lg:text-[200px] font-bold text-primary/10 select-none">
      404
     </h1>
     <div className="absolute inset-0 flex items-center justify-center">
      <div className="space-y-2">
       <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground">
        Sayfa Bulunamadı
       </h2>
       <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-muted-foreground">
        Aradığınız sayfa mevcut değil veya taşınmış olabilir.
       </p>
      </div>
     </div>
    </div>

    <div className="flex justify-center pt-4">
     <Button
      size="lg"
      variant="outline"
      className="w-full max-w-xs"
      onClick={() => router.back()}
     >
      <ArrowLeft className="mr-2 h-5 w-5" />
      Geri Dön
     </Button>
    </div>
   </div>
  </div>
 );
}