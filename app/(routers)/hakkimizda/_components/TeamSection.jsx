"use client"
import { useState } from "react";
export default function TeamSection() {

 const [text1, setText1] = useState("25 yılı aşkın süredir mali müşavirlik alanında faaliyet gösteren Şahin Demir, sektördeki derin bilgi birikimi ve deneyimiyle, yüzlerce işletmeye profesyonel danışmanlık hizmeti sunmuştur.");
 const [text2, setText2] = useState("Eskişehir Üniversitesi İktisat Fakültesi mezunu olan Şahin Demir, mezuniyetinin ardından önde gelen mali müşavirlik firmalarında çalışarak sektördeki tecrübesini artırmış ve 1998 yılında kendi bürosunu kurmuştur.");
 const [text3, setText3] = useState("Vergi mevzuatı, muhasebe standartları ve finansal raporlama konularında uzmanlaşmış olan Şahin Demir, müşterilerine sadece muhasebe hizmeti sunmakla kalmayıp, aynı zamanda işletmelerinin stratejik planlamasında da aktif rol almaktadır.");



 return (
  <section className="container mx-auto px-4 md:px-8 py-16">
   <div className="max-w-4xl mx-auto">
    <div className="text-center mb-12">
     <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Şahin Demir</h2>
     <p className="text-lg text-muted-foreground mb-2">Serbest Muhasebeci Mali Müşavir</p>
     <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-8"></div>
    </div>
    <div className="bg-card rounded-2xl shadow-xl p-8 md:p-10 border border-border">
     <div className="space-y-6 text-muted-foreground leading-relaxed">
      <p>{text1}</p>
      <p>{text2}</p>
      <p>{text3}</p>
      <p className="font-semibold text-foreground">Üyelikler ve Sertifikalar:</p>
      <ul className="list-disc list-inside space-y-2 ml-4">
       <li>İstanbul Serbest Muhasebeci Mali Müşavirler Odası (İSMMO) Üyesi</li>
       <li>TÜRMOB (Türkiye Serbest Muhasebeci Mali Müşavirler ve Yeminli Mali Müşavirler Odaları Birliği) Kayıtlı Üye</li>
       <li>Uluslararası Finansal Raporlama Standartları (UFRS) Sertifikalı</li>
       <li>Kurumsal Yönetim ve Risk Yönetimi Uzmanı</li>
      </ul>
     </div>
    </div>
   </div>
  </section>
 );
}
