import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Calculator,
  FileText,
  TrendingUp,
  Users,
  CheckCircle,
  Briefcase,
  Shield,
  Clock,
  Award,
  Target,
  ChevronRight,
} from "lucide-react";

export default function HomePage() {
  const services = [
    {
      icon: Calculator,
      title: "Muhasebe Hizmetleri",
      description:
        "Günlük muhasebe işlemlerinden mali tablolara kadar tüm muhasebe süreçlerinizi profesyonelce yönetiyoruz.",
    },
    {
      icon: FileText,
      title: "Vergi Danışmanlığı",
      description:
        "Vergi mevzuatını yakından takip ederek, işletmeniz için en uygun vergi planlamasını yapıyoruz.",
    },
    {
      icon: TrendingUp,
      title: "Finansal Analiz",
      description:
        "İşletmenizin finansal durumunu detaylı analiz ederek stratejik kararlarınıza destek oluyoruz.",
    },
    {
      icon: Users,
      title: "Şirket Kuruluşu",
      description:
        "Şirket kuruluş süreçlerinizi baştan sona yöneterek, hukuki ve mali danışmanlık sağlıyoruz.",
    },
    {
      icon: Shield,
      title: "SGK İşlemleri",
      description:
        "Sosyal güvenlik işlemlerinizi eksiksiz takip ederek, SGK mevzuatına tam uyum sağlıyoruz.",
    },
    {
      icon: Briefcase,
      title: "İşletme Danışmanlığı",
      description:
        "İşletmenizi büyütmek ve verimliliği artırmak için profesyonel iş danışmanlığı sunuyoruz.",
    },
  ];

  const features = [
    {
      icon: CheckCircle,
      title: "15+ Yıl Deneyim",
      description: "Mali müşavirlik alanında uzun yıllara dayanan tecrübe",
    },
    {
      icon: Clock,
      title: "Hızlı Destek",
      description:
        "İhtiyacınız olduğunda hızlı ve çözüm odaklı hizmet anlayışı",
    },
    {
      icon: Award,
      title: "Profesyonel Ekip",
      description: "Alanında uzman ve sürekli gelişen kadromuz",
    },
    {
      icon: Target,
      title: "Müşteri Odaklı",
      description: "İşletmenizin ihtiyaçlarına özel çözümler",
    },
  ];

  return (
    <div className="min-h-screen bg-linear-to-b from-gray-50 to-white dark:from-background dark:to-muted/20">
      <section className="container mx-auto px-4 md:px-8 min-h-screen flex items-center justify-center dark:bg-black/80">
        <div className="max-w-4xl mx-auto text-center py-16 md:py-24">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 dark:text-white">
            <span className="text-black dark:text-white font-extrabold">
              Şahin Demir
            </span>{" "}
            {}
            <span className="bg-linear-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent font-extrabold">
              Mali Müşavirlik
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            Profesyonel muhasebe ve mali danışmanlık hizmetleriyle işletmenizin
            yanındayız.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="text-lg h-14">
              <Link href="/iletisim">
                Hemen İletişime Geçin
                <ChevronRight className="ml-2" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="text-lg h-14"
            >
              <Link href="/hakkimizda">Hakkımızda</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 md:px-8 py-16 bg-white dark:bg-muted/10 rounded-3xl my-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Hizmetlerimiz</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            İşletmenizin tüm mali ve muhasebe ihtiyaçları için kapsamlı çözümler
            sunuyoruz.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-6 bg-linear-to-br from-white to-gray-50 dark:from-card dark:to-muted/20 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-border hover:border-primary dark:hover:border-primary hover:-translate-y-1"
            >
              <div className="w-14 h-14 bg-primary/10 dark:bg-primary/20 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary dark:group-hover:bg-primary transition-colors duration-300">
                <service.icon className="w-7 h-7 text-primary dark:text-primary group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-semibold mb-3 group-hover:text-primary dark:group-hover:text-primary transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 md:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Neden Bizi Tercih Etmelisiniz?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Müşteri memnuniyeti odaklı yaklaşımımız ve profesyonel
            hizmetlerimizle fark yaratıyoruz
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center p-6 bg-white dark:bg-card rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="w-16 h-16 bg-primary/10 dark:bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-8 h-8 text-primary dark:text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 md:px-8 py-16">
        <div className="bg-linear-to-r from-primary to-blue-600 rounded-3xl p-8 md:p-12 text-center text-white shadow-2xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Mali Danışmanlık İhtiyacınız mı Var?
          </h2>
          <p className="text-lg md:text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Profesyonel ekibimiz, işletmenizin mali süreçlerini optimize etmek
            için hazır. Hemen iletişime geçin, size özel çözümler sunalım.
          </p>
          <Button
            asChild
            size="lg"
            variant="secondary"
            className="text-lg font-semibold"
          >
            <Link href="/iletisim">Ücretsiz Görüşme Talep Edin</Link>
          </Button>
        </div>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-4xl md:text-5xl font-bold text-primary dark:text-primary mb-2">
              15+
            </div>
            <div className="text-muted-foreground">Yıl Deneyim</div>
          </div>
          <div>
            <div className="text-4xl md:text-5xl font-bold text-primary dark:text-primary mb-2">
              500+
            </div>
            <div className="text-muted-foreground">Mutlu Müşteri</div>
          </div>
          <div>
            <div className="text-4xl md:text-5xl font-bold text-primary dark:text-primary mb-2">
              %98
            </div>
            <div className="text-muted-foreground">Müşteri Memnuniyeti</div>
          </div>
        </div>
      </section>
    </div>
  );
}
