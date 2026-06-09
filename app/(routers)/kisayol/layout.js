import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Kısayollar",
  description:
    "GİB, SGK, e-Devlet ve diğer resmi platformlara hızlı erişim kısayolları. Mali Müşavir Şahin Demir.",
  path: "/kisayol",
});

export default function ShortcutLayout({ children }) {
  return children;
}
