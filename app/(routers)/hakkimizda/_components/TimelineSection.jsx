const timeline = [
 { year: "1995", title: "Kuruluş", description: "Şahin Demir Mali Müşavirlik, iki kişilik bir ofisle hizmet vermeye başladı." },
 { year: "2005", title: "Genişleme", description: "Büyüyen müşteri portföyümüz ile ekibimizi genişlettik ve yeni ofisimize taşındık." },
 { year: "2010", title: "Dijital Dönüşüm", description: "Tüm süreçlerimizi dijitalleştirerek, müşterilerimize çevrimiçi hizmet sunmaya başladık." },
 { year: "2015", title: "1000+ Müşteri", description: "Güvenilir hizmetimizle 1000'den fazla müşteriye ulaştık ve ekibimizi güçlendirdik." },
 { year: "2025", title: "Lider Konumda", description: "Bölgede lider mali müşavirlik firmalarından biri haline geldik ve büyümeye devam ediyoruz." },
];

export default function TimelineSection() {
 return (
  <section className="container max-w-6xl mx-auto px-4 md:px-8 py-16 bg-card rounded-3xl my-8 border border-border">
   <div className="text-center mb-12">
    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Yolculuğumuz</h2>
    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Kuruluşumuzdan bugüne kadar olan başarı hikayemiz</p>
   </div>
   <div className="max-w-4xl mx-auto space-y-8">
    {timeline.map((item, index) => (
     <div key={index} className="flex gap-6 items-start group">
      <div className="flex flex-col items-center">
       <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary transition-colors duration-1000 shrink-0">
        <span className="text-xl font-bold text-primary group-hover:text-primary-foreground transition-colors duration-1000">{item.year}</span>
       </div>
       {index !== timeline.length - 1 && <div className="w-0.5 h-full bg-border mt-2"></div>}
      </div>
      <div className="flex-1 pb-8">
       <h3 className="text-xl font-semibold mb-2 text-foreground group-hover:text-primary transition-colors duration-300">{item.title}</h3>
       <p className="text-muted-foreground">{item.description}</p>
      </div>
     </div>
    ))}
   </div>
  </section>
 );
}
