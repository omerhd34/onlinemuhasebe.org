'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Home, ArrowLeft, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function NotFoundPage() {
 const router = useRouter();

 return (
  <div className="min-h-screen from-background to-muted/20 flex items-center justify-center px-4">
   <div className="max-w-2xl w-full text-center space-y-8">
    <div className="relative">
     <h1 className="text-[150px] md:text-[200px] font-bold text-primary/10 select-none">
      404
     </h1>
     <div className="absolute inset-0 flex items-center justify-center">
      <div className="space-y-2">
       <h2 className="text-4xl md:text-5xl font-bold">
        Sayfa Bulunamadı
       </h2>
       <p className="text-lg md:text-xl text-muted-foreground">
        Aradığınız sayfa mevcut değil veya taşınmış olabilir.
       </p>
      </div>
     </div>
    </div>

    <div className="space-y-4 pt-8">
     <p className="text-muted-foreground">
      Üzgünüz, aradığınız sayfaya ulaşılamıyor. Lütfen URL&apos;yi kontrol edin
      veya aşağıdaki bağlantılardan birini kullanın.
     </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
     <Button
      size="lg"
      variant="outline"
      className="w-full"
      onClick={() => router.back()}
     >
      <ArrowLeft className="mr-2 h-5 w-5" />
      Geri Dön
     </Button>
     <Button size="lg" asChild className="w-full">
      <Link href="/">
       <Home className="mr-2 h-5 w-5" />
       Ana Sayfa
      </Link>
     </Button>
    </div>

    <div className="pt-8 border-t border-border/50">
     <h3 className="text-sm font-semibold mb-4 text-muted-foreground">
      Popüler Sayfalar
     </h3>
     <div className="flex flex-wrap justify-center gap-3">
      <Button variant="ghost" size="sm" asChild>
       <Link href="/pratik_bilgiler">Pratik Bilgiler</Link>
      </Button>
      <Button variant="ghost" size="sm" asChild>
       <Link href="/kisayol">Kısayollar</Link>
      </Button>
      <Button variant="ghost" size="sm" asChild>
       <Link href="/hakkimizda">Hakkımızda</Link>
      </Button>
      <Button variant="ghost" size="sm" asChild>
       <Link href="/iletisim">
        <Mail className="mr-2 h-4 w-4" />
        İletişim
       </Link>
      </Button>
     </div>
    </div>

    <div className="pt-8 text-sm text-muted-foreground">
     <p>
      Yardıma mı ihtiyacınız var?{' '}
      <Link
       href="/iletisim"
       className="text-primary hover:underline font-medium"
      >
       Bizimle iletişime geçin
      </Link>
     </p>
    </div>
   </div>
  </div>
 );
}