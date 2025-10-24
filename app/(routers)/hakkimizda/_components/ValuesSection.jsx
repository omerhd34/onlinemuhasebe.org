import { Shield, CheckCircle, Heart, Lightbulb, HandshakeIcon, TrendingUp } from "lucide-react";

const values = [
 { icon: Shield, title: "Güvenilirlik", description: "Müşterilerimizin mali bilgilerini en yüksek güvenlik standartlarıyla koruyoruz." },
 { icon: CheckCircle, title: "Profesyonellik", description: "Alanında uzman kadromuzla, en güncel mevzuat ve uygulamalara göre hizmet veriyoruz." },
 { icon: Heart, title: "Müşteri Memnuniyeti", description: "Müşterilerimizin başarısı bizim başarımızdır. Onların hedeflerine ulaşmaları için çalışıyoruz." },
 { icon: Lightbulb, title: "İnovasyon", description: "Teknolojik gelişmeleri yakından takip ederek, süreçlerimizi sürekli geliştiriyoruz." },
 { icon: HandshakeIcon, title: "Şeffaflık", description: "Tüm süreçlerimizde açık ve net iletişim kurarak, tam şeffaflık sağlıyoruz." },
 { icon: TrendingUp, title: "Sürekli Gelişim", description: "Eğitim ve gelişime önem vererek, her zaman en iyi hizmeti sunmayı hedefliyoruz." },
];

export default function ValuesSection() {
 return (
  <section className="container mx-auto px-4 md:px-8 py-16">
   <div className="text-center mb-12">
    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Değerlerimiz</h2>
    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
     Çalışma prensiplerimiz ve kurumsal değerlerimiz, her zaman müşterilerimize en iyi hizmeti sunmamızı sağlar.
    </p>
   </div>
   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
    {values.map((value, index) => (
     <div key={index} className="group bg-card p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-border hover:border-primary">
      <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary transition-colors duration-1000 ease-in-out">
       <value.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-1000 ease-in-out" />
      </div>
      <h3 className="text-xl font-semibold mb-3 text-card-foreground group-hover:text-primary transition-colors duration-300">{value.title}</h3>
      <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
     </div>
    ))}
   </div>
  </section>
 );
}
