'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useTheme } from 'next-themes';
import { Switch } from '@/components/ui/switch';
import { useState, useEffect } from 'react';

const navLinks = [
 { href: '/', label: 'Anasayfa' },
 { href: '/pratik_bilgiler', label: 'Pratik Bilgiler' },
 { href: '/hakkimizda', label: 'Hakkımızda' },
 { href: '/hizmetler', label: 'Hizmetler' },
 { href: '/iletisim', label: 'İletişim' },
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
  <header className="w-full border-b bg-background/80 backdrop-blur-md sticky top-0 z-50">
   <div className="container mx-auto flex items-center justify-between py-4 px-4 md:px-8">
    {/* Logo */}
    <Link href="/" className="text-xl font-semibold">
     <span className="text-primary">Şahin Demir </span>{' '}
     <span className="text-muted-foreground">Mali Müşavir</span>
    </Link>

    {/* Masaüstü Menü */}
    <nav className="hidden md:flex items-center space-x-6">
     {navLinks.map((link) => (
      <Link
       key={link.href}
       href={link.href}
       className={cn(
        'text-sm font-medium transition-colors hover:text-primary',
        pathname === link.href ? 'text-primary' : 'text-muted-foreground'
       )}
      >
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
     <Button asChild>
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
      <SheetContent side="right" className="p-6">
       <nav className="flex flex-col gap-4 mt-6">
        {navLinks.map((link) => (
         <Link
          key={link.href}
          href={link.href}
          className={cn(
           'text-base font-medium transition-colors hover:text-primary',
           pathname === link.href ? 'text-primary' : 'text-muted-foreground'
          )}
         >
          {link.label}
         </Link>
        ))}
        <Button asChild className="mt-4 w-full">
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