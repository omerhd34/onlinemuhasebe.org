'use client';
import Link from 'next/link';
import { Separator } from '@/components/ui/separator';
import { Home, Info, Lightbulb, LinkIcon, Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
 const year = new Date().getFullYear();

 return (
  <footer className="w-full max-w-full border-t border-border bg-card mt-16 overflow-x-hidden">
   <div className="container mx-auto px-2 sm:px-4 md:px-8 py-10 w-full max-w-full overflow-x-hidden">
    <div className="max-w-7xl mx-auto">
     <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-10">
      <div className="text-left">
       <h3 className="font-semibold mb-3 text-lg text-card-foreground">Mali Müşavir Şahin Demir</h3>
       <p className="text-sm text-muted-foreground">
        Profesyonel muhasebe, vergi danışmanlığı ve mali müşavirlik hizmetleriyle yanınızdayız.
       </p>
      </div>

      <div className="text-left">
       <h3 className="font-semibold mb-3 text-lg text-card-foreground">İletişim</h3>
       <ul className="space-y-2 text-sm text-muted-foreground">
        <li className="flex items-center gap-2">
         <MapPin size={16} className="text-primary shrink-0" />
         <span>İstanbul, Türkiye</span>
        </li>
        <li className="flex items-center gap-2">
         <Phone size={16} className="text-primary shrink-0" />
         <span>0216 330 77 70</span>
        </li>
        <li className="flex items-center gap-2">
         <Mail size={16} className="text-primary shrink-0" />
         <Link
          href="mailto:sahin@onlinemuhasebe.org"
          className="hover:text-primary transition-colors"
         >
          sahin@onlinemuhasebe.org
         </Link>
        </li>
       </ul>
      </div>

      <div className="text-left">
       <h3 className="font-semibold mb-3 text-lg text-card-foreground">Hızlı Linkler</h3>
       <ul className="space-y-2 text-sm text-muted-foreground">
        <li className="flex items-center gap-2">
         <Home size={16} className="text-primary shrink-0" />
         <Link href="/" className="hover:text-primary transition-colors">Ana Sayfa</Link>
        </li>
        <li className="flex items-center gap-2">
         <Info size={16} className="text-primary shrink-0" />
         <Link href="/hakkimizda" className="hover:text-primary transition-colors">Hakkımızda</Link>
        </li>
        <li className="flex items-center gap-2">
         <Lightbulb size={16} className="text-primary shrink-0" />
         <Link href="/pratik_bilgiler" className="hover:text-primary transition-colors">Pratik Bilgiler</Link>
        </li>
        <li className="flex items-center gap-2">
         <LinkIcon size={16} className="text-primary shrink-0" />
         <Link href="/kisayol" className="hover:text-primary transition-colors">Kısayollar</Link>
        </li>
        <li className="flex items-center gap-2">
         <Mail size={16} className="text-primary shrink-0" />
         <Link href="/iletisim" className="hover:text-primary transition-colors">İletişim</Link>
        </li>
       </ul>
      </div>
     </div>

     <Separator className="my-6" />

     <div className="text-xs text-muted-foreground flex flex-col sm:flex-row justify-between items-center sm:items-start gap-2 sm:gap-0 w-full">
      <p className="text-center sm:text-left">© {year} Serbest Muhasebeci Mali Müşavir Şahin Demir</p>
      <p className="text-center sm:text-right">Tüm hakları saklıdır.</p>
     </div>
    </div>
   </div>
  </footer>
 );
}
