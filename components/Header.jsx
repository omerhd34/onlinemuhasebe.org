/* eslint-disable react-hooks/set-state-in-effect */
'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import {
 Sheet,
 SheetContent,
 SheetTrigger,
 SheetHeader,
 SheetTitle,
} from '@/components/ui/sheet';
import {
 Menu,
 Home,
 Info,
 Lightbulb,
 Link as LinkIcon,
 Mail,
 Sun,
 Moon,
 Search,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';
import SearchModal from './SearchModal';

const navLinks = [
 { href: '/', label: 'Anasayfa', icon: Home },
 { href: '/hakkimizda', label: 'Hakkımızda', icon: Info },
 { href: '/pratik_bilgiler', label: 'Pratik Bilgiler', icon: Lightbulb },
 { href: '/kisayol', label: 'Kısayollar', icon: LinkIcon },
 { href: '/iletisim', label: 'İletişim', icon: Mail },
];

const Logo = () => (
 <div className="flex items-center space-x-2 text-xl sm:text-2xl font-bold tracking-tight text-primary transition-all duration-300">
  <span>Şahin DEMİR</span>
 </div>
);

const ThemeToggle = ({ className }) => {
 const { theme, setTheme } = useTheme();
 const [mounted, setMounted] = useState(false);
 useEffect(() => setMounted(true), []);
 if (!mounted) return null;

 return (
  <Button
   variant="ghost"
   size="icon"
   onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
   className={cn('hover:bg-primary/10 transition-colors', className)}
   aria-label="Tema Değiştir"
  >
   {theme === 'dark' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
  </Button>
 );
};

const getCurrentYear = () => new Date().getFullYear();

export default function Header() {
 const pathname = usePathname();
 const [searchOpen, setSearchOpen] = useState(false);
 const [isSheetOpen, setIsSheetOpen] = useState(false);

 return (
  <>
   <header className="w-full border-b border-border bg-background/80 backdrop-blur-md sticky top-0 z-50 shadow-sm">
    <div className="container mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 h-14 sm:h-16">
     {/* Logo */}
     <Link href="/" className="shrink-0">
      <Logo />
     </Link>

     {/* Masaüstü Menü */}
     <nav className="hidden lg:flex items-center space-x-1">
      {navLinks.map((link) => (
       <Link
        key={link.href}
        href={link.href}
        className={cn(
         'text-sm font-medium transition-all duration-200 hover:text-primary px-3 py-2 rounded-md flex items-center gap-2',
         pathname === link.href
          ? 'text-primary bg-primary/10'
          : 'text-muted-foreground hover:bg-muted/50'
        )}
       >
        <link.icon className="w-4 h-4" />
        {link.label}
       </Link>
      ))}
     </nav>

     {/* Sağ ikonlar */}
     <div className="flex items-center gap-1 sm:gap-2">
      <Button
       variant="ghost"
       size="icon"
       onClick={() => setSearchOpen(true)}
       className="hover:bg-primary/10 transition-colors"
       aria-label="Arama"
      >
       <Search className="h-5 w-5" />
      </Button>

      <ThemeToggle />

      <Button asChild className="hidden md:inline-flex ml-1">
       <Link href="/iletisim">Danışma Al</Link>
      </Button>

      {/* Hamburger */}
      <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
       <SheetTrigger asChild className="lg:hidden">
        <Button variant="outline" size="icon" aria-label="Menü Aç">
         <Menu className="h-5 w-5" />
        </Button>
       </SheetTrigger>

       <SheetContent
        side="right"
        className="p-6 bg-background text-foreground w-[85vw] max-w-sm sm:w-[350px] flex flex-col justify-between"
       >
        <div>
         <SheetHeader className="mb-6">
          <SheetTitle className="sr-only">Menü</SheetTitle>
          <div className="flex justify-start items-center">
           <Logo />
          </div>
         </SheetHeader>

         <nav className="flex flex-col gap-1">
          {navLinks.map((link) => (
           <Link
            key={link.href}
            href={link.href}
            onClick={() => setIsSheetOpen(false)}
            className={cn(
             'text-base font-medium transition-all duration-200 flex items-center gap-3 p-3 rounded-md hover:pl-4',
             pathname === link.href
              ? 'text-primary bg-primary/10'
              : 'text-foreground hover:bg-muted/50'
            )}
           >
            <link.icon className="w-5 h-5" />
            {link.label}
           </Link>
          ))}
         </nav>

         {/* Arama & Tema butonları */}
         <div className="flex justify-center gap-3 mt-6">
          <Button
           variant="outline"
           size="icon"
           onClick={() => {
            setSearchOpen(true);
            setIsSheetOpen(false);
           }}
           aria-label="Arama"
          >
           <Search className="h-5 w-5" />
          </Button>

          <ThemeToggle />
         </div>

         <Button
          asChild
          className="mt-6 w-full"
          onClick={() => setIsSheetOpen(false)}
         >
          <Link href="/iletisim">Danışma Al</Link>
         </Button>
        </div>

        <div className="mt-8 border-t pt-4 text-center text-sm text-muted-foreground">
         © {getCurrentYear()}
        </div>
       </SheetContent>
      </Sheet>
     </div>
    </div>
   </header>

   <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
  </>
 );
}
