"use client";
import { useState, useEffect } from "react";
import ShortcutGrid from "./_components/ShortcutGrid";

export default function ShortcutPage() {
  const [shortcuts, setShortcuts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchShortcuts();
  }, []);

  const fetchShortcuts = async () => {
    try {
      setLoading(true);
      const response = await fetch("/api/shortcuts?isActive=true");
      if (!response.ok) throw new Error("API isteği başarısız");
      const data = await response.json();
      setShortcuts(data);
    } catch (error) {
      console.error("Kısayollar alınamadı:", error);
      setShortcuts([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4 md:px-8">
        <div className="mb-10 text-center">
          <h1 className="text-4xl font-bold mb-4 text-foreground">
            Kısayollar
          </h1>
          <p className="text-lg text-muted-foreground">
            Sık kullanılan platformlara hızlı erişim için kısayollar
          </p>
        </div>

        {loading ? (
          <div className="flex justify-center items-center min-h-[400px]">
            <div className="text-lg text-muted-foreground">Yükleniyor...</div>
          </div>
        ) : (
          <ShortcutGrid shortcuts={shortcuts} />
        )}
      </div>
    </div>
  );
}
