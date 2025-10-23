import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { ThemeProvider } from "../../components/theme-provider";
import "../globals.css";

export const metadata = {
  title: "Serbest Muhasebeci Mali Müşavir Şahin Demir",
  description: "Profesyonel muhasebe ve mali danışmanlık hizmetleri.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <body className="min-h-screen flex flex-col bg-background text-foreground">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
