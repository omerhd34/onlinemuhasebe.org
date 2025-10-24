import { Target, Eye } from "lucide-react";

export default function VisionMissionSection() {
 return (
  <section className="container mx-auto px-4 md:px-8 py-12 mb-25">
   <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
    <div className="bg-card p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-border">
     <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
      <Target className="w-8 h-8 text-primary" />
     </div>
     <h2 className="text-2xl font-bold mb-4 text-card-foreground">Misyonumuz</h2>
     <p className="text-muted-foreground leading-relaxed">
      İşletmelerin mali süreçlerini en iyi şekilde yöneterek, onların
      büyümesine ve başarısına katkıda bulunmak. Müşterilerimize güvenilir,
      kaliteli ve hızlı hizmet sunarak, iş dünyasında vazgeçilmez bir partner olmak.
     </p>
    </div>

    <div className="bg-card p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-border">
     <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
      <Eye className="w-8 h-8 text-primary" />
     </div>
     <h2 className="text-2xl font-bold mb-4 text-card-foreground">Vizyonumuz</h2>
     <p className="text-muted-foreground leading-relaxed">
      Türkiye&apos;nin en güvenilir ve tercih edilen mali müşavirlik
      firması olmak. İnovasyon ve teknolojiye yatırım yaparak, sektörde
      öncü bir konumda bulunmak ve müşterilerimize en ileri düzeyde hizmet sunmak.
     </p>
    </div>
   </div>
  </section>
 );
}
