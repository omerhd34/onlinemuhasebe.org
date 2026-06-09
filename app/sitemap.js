import { SITE_URL } from "@/lib/seo";

export default function sitemap() {
 const routes = [
  { path: "", priority: 1, changeFrequency: "weekly" },
  { path: "/hakkimizda", priority: 0.9, changeFrequency: "monthly" },
  { path: "/pratik_bilgiler", priority: 0.8, changeFrequency: "weekly" },
  { path: "/kisayol", priority: 0.7, changeFrequency: "monthly" },
  { path: "/iletisim", priority: 0.8, changeFrequency: "monthly" },
 ];

 return routes.map(({ path, priority, changeFrequency }) => ({
  url: `${SITE_URL}${path}`,
  lastModified: new Date(),
  changeFrequency,
  priority,
 }));
}
