'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Home, Info, Lightbulb, Link as LinkIcon, Mail, Sun, Moon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useTheme } from 'next-themes';
import { useState } from 'react';

const navLinks = [
 { href: '/', label: 'Anasayfa', icon: Home },
 { href: '/hakkimizda', label: 'Hakkımızda', icon: Info },
 { href: '/pratik_bilgiler', label: 'Pratik Bilgiler', icon: Lightbulb },
 { href: '/kisayol', label: 'Kısayollar', icon: LinkIcon },
 { href: '/iletisim', label: 'İletişim', icon: Mail },
];

const ThemeToggle = () => {
 const { theme, setTheme } = useTheme();
 return (
  <button
   onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
   className="relative w-14 h-8 bg-gray-200 dark:bg-gray-700 rounded-full p-1 flex items-center transition-colors"
  >
   <span
    className={cn(
     'absolute w-6 h-6 bg-white rounded-full shadow-md transform transition-transform flex items-center justify-center',
     theme === 'dark' ? 'translate-x-6' : 'translate-x-0'
    )}
   >
    {theme === 'dark' ? <Moon className="w-4 h-4 text-gray-800" /> : <Sun className="w-4 h-4 text-yellow-400" />}
   </span>
  </button>
 );
};

export default function Header() {
 const pathname = usePathname();
 const [mounted] = useState(true);

 if (!mounted) return null;

 return (
  <header className="w-full border-b border-border bg-card/95 backdrop-blur-md sticky top-0 z-50">
   <div className="container mx-auto flex items-center justify-between py-4 px-4 md:px-8">
    {/* Logo */}
    <Link href="/" className="text-xl font-semibold">
     <span className="text-primary">Şahin Demir </span>
     <span className="text-foreground">Mali Müşavir</span>
    </Link>

    {/* Masaüstü Menü */}
    <nav className="hidden md:flex items-center space-x-8">
     {navLinks.map((link) => (
      <Link
       key={link.href}
       href={link.href}
       className={cn(
        'text-base font-medium transition-colors hover:text-primary flex items-center gap-1',
        pathname === link.href ? 'text-primary' : 'text-muted-foreground'
       )}
      >
       <link.icon className="w-4 h-4" />
       {link.label}
      </Link>
     ))}
    </nav>

    {/* Sağ kısım */}
    <div className="hidden md:flex items-center gap-4">
     <ThemeToggle />
     <Button asChild>
      <Link href="/iletisim">Danışma Al</Link>
     </Button>
    </div>

    {/* Mobil Menü */}
    <div className="md:hidden flex items-center gap-3">
     <ThemeToggle />
     <Sheet>
      <SheetTrigger asChild>
       <Button variant="outline" size="icon">
        <Menu className="h-5 w-5" />
       </Button>
      </SheetTrigger>
      <SheetContent side="right" className="p-6 bg-card text-card-foreground">
       <nav className="flex flex-col gap-4 mt-6">
        {navLinks.map((link) => (
         <Link
          key={link.href}
          href={link.href}
          className={cn(
           'text-lg font-medium transition-colors hover:text-primary flex items-center gap-2',
           pathname === link.href ? 'text-primary' : 'text-muted-foreground'
          )}
         >
          <link.icon className="w-5 h-5" />
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
