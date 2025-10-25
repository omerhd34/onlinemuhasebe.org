"use client"
import { Calculator, FileText, TrendingUp, Users, Shield, Briefcase } from "lucide-react";
import { useState } from "react";

const services = [
 {
  icon: Calculator,
  title: "Muhasebe Hizmetleri",
  description: "Günlük muhasebe işlemlerinden mali tablolara kadar tüm muhasebe süreçlerinizi profesyonelce yönetiyoruz.",
 },
 {
  icon: FileText,
  title: "Vergi Danışmanlığı",
  description: "Vergi mevzuatını yakından takip ederek, işletmeniz için en uygun vergi planlamasını yapıyoruz.",
 },
 {
  icon: TrendingUp,
  title: "Finansal Analiz",
  description: "İşletmenizin finansal durumunu detaylı analiz ederek stratejik kararlarınıza destek oluyoruz.",
 },
 {
  icon: Users,
  title: "Şirket Kuruluşu",
  description: "Şirket kuruluş süreçlerinizi baştan sona yöneterek, hukuki ve mali danışmanlık sağlıyoruz.",
 },
 {
  icon: Shield,
  title: "SGK İşlemleri",
  description: "Sosyal güvenlik işlemlerinizi eksiksiz takip ederek, SGK mevzuatına tam uyum sağlıyoruz.",
 },
 {
  icon: Briefcase,
  title: "İşletme Danışmanlığı",
  description: "İşletmenizi büyütmek ve verimliliği artırmak için profesyonel iş danışmanlığı sunuyoruz.",
 },
];

export default function ServicesSection() {

 const [text1, setText1] = useState("İşletmenizin tüm mali ve muhasebe ihtiyaçları için kapsamlı çözümler sunuyoruz.");


 return (
  <section className="container mx-auto px-4 md:px-8 py-16 bg-card rounded-3xl my-8">
   <div className="text-center mb-12">
    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Hizmetlerimiz</h2>
    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
     {text1}
    </p>
   </div>
   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {services.map((service, index) => (
     <div key={index} className="group p-6 bg-card rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-border hover:border-primary hover:-translate-y-1">
      <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary transition-colors duration-300">
       <service.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
      </div>
      <h3 className="text-xl font-semibold mb-3 text-card-foreground group-hover:text-primary transition-colors duration-300">
       {service.title}
      </h3>
      <p className="text-muted-foreground">{service.description}</p>
     </div>
    ))}
   </div>
  </section>
 );
}
