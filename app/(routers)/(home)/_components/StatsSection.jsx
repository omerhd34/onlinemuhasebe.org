export default function StatsSection() {
 return (
  <section className="container mx-auto px-4 md:px-8 py-16">
   <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-center">
    <div>
     <div className="text-4xl md:text-5xl font-bold text-primary mb-2">25+</div>
     <div className="text-muted-foreground">Yıl Deneyim</div>
    </div>
    <div>
     <div className="text-4xl md:text-5xl font-bold text-primary mb-2">1000+</div>
     <div className="text-muted-foreground">Mutlu Müşteri</div>
    </div>
    <div>
     <div className="text-4xl md:text-5xl font-bold text-primary mb-2">%98</div>
     <div className="text-muted-foreground">Müşteri Memnuniyeti</div>
    </div>
   </div>
  </section>
 );
}
