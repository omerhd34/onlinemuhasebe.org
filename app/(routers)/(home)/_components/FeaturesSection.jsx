import { CheckCircle, Clock, Award, Target } from "lucide-react";

const features = [
 { icon: CheckCircle, title: "25+ Yıl Deneyim", description: "Mali müşavirlik alanında uzun yıllara dayanan tecrübe" },
 { icon: Clock, title: "Hızlı Destek", description: "İhtiyacınız olduğunda hızlı ve çözüm odaklı hizmet anlayışı" },
 { icon: Award, title: "Profesyonel Ekip", description: "Alanında uzman ve sürekli gelişen kadromuz" },
 { icon: Target, title: "Müşteri Odaklı", description: "İşletmenizin ihtiyaçlarına özel çözümler" },
];

export default function FeaturesSection() {
 return (
  <section className="container mx-auto px-4 md:px-8 py-16">
   <div className="text-center mb-12">
    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Neden Bizi Tercih Etmelisiniz?</h2>
    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
     Müşteri memnuniyeti odaklı yaklaşımımız ve profesyonel hizmetlerimizle fark yaratıyoruz
    </p>
   </div>
   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
    {features.map((feature, index) => (
     <div key={index} className="text-center p-6 bg-card rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-border">
      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
       <feature.icon className="w-8 h-8 text-primary" />
      </div>
      <h3 className="text-lg font-semibold mb-2 text-card-foreground">{feature.title}</h3>
      <p className="text-sm text-muted-foreground">{feature.description}</p>
     </div>
    ))}
   </div>
  </section>
 );
}
