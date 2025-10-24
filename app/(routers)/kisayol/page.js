"use client";

import { useState, useEffect } from "react";
import * as Icons from "lucide-react";

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

      if (!response.ok) {
        throw new Error("API isteği başarısız");
      }

      const data = await response.json();
      setShortcuts(data);
    } catch (error) {
      console.error("Kısayollar alınamadı:", error);
      setShortcuts([]);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-background py-12">
        <div className="container mx-auto px-4 md:px-8">
          <div className="mb-10 text-center">
            <h1 className="text-4xl font-bold mb-4 text-gray-800 dark:text-gray-100">
              Kısayollar
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Sık kullanılan platformlara hızlı erişim için kısayollar
            </p>
          </div>
          <div className="flex justify-center items-center min-h-[400px]">
            <div className="text-lg text-gray-600 dark:text-gray-400">
              Yükleniyor...
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-background py-12">
      <div className="container mx-auto px-4 md:px-8">
        <div className="mb-10 text-center">
          <h1 className="text-4xl font-bold mb-4 text-gray-800 dark:text-gray-100">
            Kısayollar
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Sık kullanılan platformlara hızlı erişim için kısayollar
          </p>
        </div>

        {!shortcuts || shortcuts.length === 0 ? (
          <div className="text-center text-gray-600 dark:text-gray-400 py-12">
            Henüz kısayol eklenmemiş.
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {shortcuts.map((shortcut) => {
              const Icon = Icons[shortcut.icon] || Icons.Link;
              return (
                <a
                  key={shortcut.id}
                  href={shortcut.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-white dark:bg-card rounded-lg shadow-md hover:shadow-xl transition-all duration-300 p-6 flex flex-col items-center text-center border border-gray-200 dark:border-border hover:border-primary dark:hover:border-primary hover:-translate-y-1"
                >
                  <div className="mb-4 p-4 bg-primary/10 dark:bg-primary/20 rounded-full group-hover:bg-primary dark:group-hover:bg-primary transition-colors duration-300">
                    <Icon className="w-8 h-8 text-primary dark:text-primary group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-100 group-hover:text-primary dark:group-hover:text-primary transition-colors duration-300">
                    {shortcut.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {shortcut.description}
                  </p>
                </a>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
