'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Home, Info, Lightbulb, Link as LinkIcon, Mail } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useTheme } from 'next-themes';
import { Switch } from '@/components/ui/switch';
import { useState, useEffect } from 'react';

const navLinks = [
 { href: '/', label: 'Anasayfa', icon: Home },
 { href: '/hakkimizda', label: 'Hakkımızda', icon: Info },
 { href: '/pratik_bilgiler', label: 'Pratik Bilgiler', icon: Lightbulb },
 { href: '/kisayol', label: 'Kısayollar', icon: LinkIcon },
 { href: '/iletisim', label: 'İletişim', icon: Mail },
];

export default function Header() {
 const pathname = usePathname();
 const { theme, setTheme } = useTheme();

 const [mounted, setMounted] = useState(false);

 useEffect(() => {
  const timer = setTimeout(() => {
   setMounted(true);
  }, 0);

  return () => clearTimeout(timer);
 }, []);

 if (!mounted) return null;

 return (
  <header className="w-full border-b border-gray-700 bg-[#121212]/90 backdrop-blur-md sticky top-0 z-50">
   <div className="container mx-auto flex items-center justify-between py-4 px-4 md:px-8">
    {/* Logo */}
    <Link href="/" className="text-xl font-semibold">
     <span className="text-yellow-500">Şahin Demir </span>
     <span className="text-gray-300">Mali Müşavir</span>
    </Link>

    {/* Masaüstü Menü */}
    <nav className="hidden md:flex items-center space-x-8">
     {navLinks.map((link) => (
      <Link
       key={link.href}
       href={link.href}
       className={cn(
        'text-base font-medium transition-colors hover:text-white flex items-center gap-1',
        pathname === link.href ? 'text-white' : 'text-gray-300'
       )}
      >
       <link.icon className="w-4 h-4" />
       {link.label}
      </Link>
     ))}
    </nav>

    {/* Sağ kısım */}
    <div className="hidden md:flex items-center gap-4">
     <Switch
      checked={theme === 'dark'}
      onCheckedChange={(checked) => setTheme(checked ? 'dark' : 'light')}
     />
     <Button asChild
      className="bg-gray-800 text-white hover:bg-gray-700 focus-visible:bg-gray-700 active:bg-gray-600 transition-colors"
     >
      <Link href="/iletisim">Danışma Al</Link>
     </Button>
    </div>

    {/* Mobil Menü */}
    <div className="md:hidden flex items-center gap-3">
     <Switch
      checked={theme === 'dark'}
      onCheckedChange={(checked) => setTheme(checked ? 'dark' : 'light')}
     />
     <Sheet>
      <SheetTrigger asChild>
       <Button variant="outline" size="icon">
        <Menu className="h-5 w-5" />
       </Button>
      </SheetTrigger>
      <SheetContent side="right" className="p-6 bg-[#121212] text-white">
       <nav className="flex flex-col gap-4 mt-6">
        {navLinks.map((link) => (
         <Link
          key={link.href}
          href={link.href}
          className={cn(
           'text-lg font-medium transition-colors hover:text-white flex items-center gap-2',
           pathname === link.href ? 'text-white' : 'text-gray-300'
          )}
         >
          <link.icon className="w-5 h-5" />
          {link.label}
         </Link>
        ))}
        <Button asChild className="mt-4 w-full bg-gray-800 text-white hover:bg-gray-700 focus-visible:bg-gray-700 active:bg-gray-600 transition-colors">
         <Link href="/iletisim">Danışma Al</Link>
        </Button>
       </nav>
      </SheetContent>
     </Sheet>
    </div>
   </div>
  </header>
 );
}