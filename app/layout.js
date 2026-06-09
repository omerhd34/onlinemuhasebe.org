import Footer from "../components/Footer";
import Header from "../components/Header";
import JsonLd from "../components/JsonLd";
import { ClientLoadingProvider } from "../components/ClientLoadingProvider";
import { ThemeProvider } from "../components/theme-provider";
import ScrollToTopButton from "../components/ScrollToTopButton";
import { getOrganizationJsonLd, rootMetadata } from "@/lib/seo";
import "./globals.css";

export const metadata = rootMetadata;

export default function RootLayout({ children }) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <body className="min-h-screen flex flex-col bg-background text-foreground w-full max-w-full overflow-x-hidden">
        <JsonLd data={getOrganizationJsonLd()} />
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <ClientLoadingProvider>
            <Header />
            <main className="flex-1 w-full max-w-full overflow-x-hidden">
              {children}
            </main>
            <Footer />
            <ScrollToTopButton />
          </ClientLoadingProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
