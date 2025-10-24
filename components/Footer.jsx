'use client';
import Link from 'next/link';
import { Separator } from '@/components/ui/separator';
import { Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
 const year = new Date().getFullYear();

 return (
  <footer className="w-full border-t bg-muted/20 mt-16">
   <div className="container mx-auto py-10 px-4 md:px-8">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
     <div>
      <h3 className="font-semibold mb-3 text-lg">Serbest Muhasebeci Mali Müşavir</h3>
      <p className="text-sm text-muted-foreground">
       Profesyonel muhasebe, vergi danışmanlığı ve mali müşavirlik hizmetleriyle yanınızdayız.
      </p>
     </div>

     <div>
      <h3 className="font-semibold mb-3 text-lg">İletişim</h3>
      <ul className="space-y-2 text-sm text-muted-foreground">
       <li className="flex items-center gap-2">
        <MapPin size={16} /> Ümraniye, İstanbul, Türkiye
       </li>
       <li className="flex items-center gap-2">
        <Phone size={16} />  0216 330 77 70
       </li>
       <li className="flex items-center gap-2">
        <Mail size={16} /> sahin@onlinemuhasebe.org
       </li>
      </ul>
     </div>

     <div>
      <h3 className="font-semibold mb-3 text-lg">Hızlı Linkler</h3>
      <ul className="space-y-2 text-sm text-muted-foreground">
       <li><Link href="/" className="hover:text-primary">Ana Sayfa</Link></li>
       <li><Link href="/hakkimizda" className="hover:text-primary">Hakkımızda</Link></li>
       <li><Link href="/pratik_bilgiler" className="hover:text-primary">Pratik Bilgiler</Link></li>
       <li><Link href="/kisayol" className="hover:text-primary">Kısayollar</Link></li>
       <li><Link href="/iletisim" className="hover:text-primary">İletişim</Link></li>
      </ul>
     </div>
    </div>

    <Separator className="my-6" />

    <div className="text-center text-xs text-muted-foreground">
     © {year} Serbest Muhasebeci Mali Müşavir Şahin Demir. Tüm hakları saklıdır.
    </div>
   </div>
  </footer>
 );
}