import Footer from "../components/Footer";
import Header from "../components/Header";
import { ThemeProvider } from "../components/theme-provider";
import ScrollToTopButton from "../components/ScrollToTopButton";
import "./globals.css";

export const metadata = {
  title: "Serbest Muhasebeci Mali Müşavir Şahin Demir",
  description: "Profesyonel muhasebe ve mali danışmanlık hizmetleri.",
  icons: {
    icon: "/images/turmob.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <body className="min-h-screen flex flex-col bg-background text-foreground">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <ScrollToTopButton />
        </ThemeProvider>
      </body>
    </html>
  );
}
