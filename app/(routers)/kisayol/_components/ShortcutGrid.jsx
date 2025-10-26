"use client";
import ShortcutCard from "./ShortcutCard";

export default function ShortcutGrid({ shortcuts }) {
 if (!shortcuts || shortcuts.length === 0) {
  return <div className="text-center text-muted-foreground py-12">Henüz kısayol eklenmemiş.</div>;
 }
 return (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
   {shortcuts.map((shortcut) => (
    <ShortcutCard key={shortcut.id} shortcut={shortcut} />
   ))}
  </div>
 );
}