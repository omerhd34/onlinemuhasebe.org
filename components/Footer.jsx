'use client';
import Link from 'next/link';
import { Separator } from '@/components/ui/separator';
import { Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
 const year = new Date().getFullYear();

 return (
  <footer className="w-full border-t border-border bg-card mt-16">
   <div className="container mx-auto py-10 px-4 md:px-8">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-30 max-w-7xl mx-auto">
     <div className="text-center md:text-left">
      <h3 className="font-semibold mb-3 text-lg text-card-foreground">Serbest Muhasebeci Mali Müşavir</h3>
      <p className="text-sm text-muted-foreground">
       Profesyonel muhasebe, vergi danışmanlığı ve mali müşavirlik hizmetleriyle yanınızdayız.
      </p>
     </div>

     <div className="text-center md:text-left md:pl-8">
      <h3 className="font-semibold mb-3 text-lg text-card-foreground">İletişim</h3>
      <ul className="space-y-2 text-sm text-muted-foreground">
       <li className="flex items-center gap-2 justify-center md:justify-start">
        <MapPin size={16} className="text-primary shrink-0" />
        <span>İstanbul, Türkiye</span>
       </li>
       <li className="flex items-center gap-2 justify-center md:justify-start">
        <Phone size={16} className="text-primary shrink-0" />
        <span>0216 330 77 70</span>
       </li>
       <li className="flex items-center gap-2 justify-center md:justify-start">
        <Mail size={16} className="text-primary shrink-0" />
        <span>sahin@onlinemuhasebe.org</span>
       </li>
      </ul>
     </div>

     <div className="text-center md:text-left">
      <h3 className="font-semibold mb-3 text-lg text-card-foreground">Hızlı Linkler</h3>
      <ul className="space-y-2 text-sm text-muted-foreground">
       <li><Link href="/" className="hover:text-primary transition-colors">Ana Sayfa</Link></li>
       <li><Link href="/hakkimizda" className="hover:text-primary transition-colors">Hakkımızda</Link></li>
       <li><Link href="/pratik_bilgiler" className="hover:text-primary transition-colors">Pratik Bilgiler</Link></li>
       <li><Link href="/kisayol" className="hover:text-primary transition-colors">Kısayollar</Link></li>
       <li><Link href="/iletisim" className="hover:text-primary transition-colors">İletişim</Link></li>
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