import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "İletişim",
  description:
    "Mali Müşavir Şahin Demir ile iletişime geçin. İstanbul ofisi: 0216 330 77 70 · sahin@onlinemuhasebe.org",
  path: "/iletisim",
});

export default function ContactLayout({ children }) {
  return children;
}
