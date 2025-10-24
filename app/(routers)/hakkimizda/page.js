import {
  Target,
  Eye,
  Award,
  Users,
  TrendingUp,
  Shield,
  CheckCircle,
  Heart,
  Lightbulb,
  HandshakeIcon,
} from "lucide-react";

export default function AboutPage() {
  const values = [
    {
      icon: Shield,
      title: "Güvenilirlik",
      description:
        "Müşterilerimizin mali bilgilerini en yüksek güvenlik standartlarıyla koruyoruz.",
    },
    {
      icon: CheckCircle,
      title: "Profesyonellik",
      description:
        "Alanında uzman kadromuzla, en güncel mevzuat ve uygulamalara göre hizmet veriyoruz.",
    },
    {
      icon: Heart,
      title: "Müşteri Memnuniyeti",
      description:
        "Müşterilerimizin başarısı bizim başarımızdır. Onların hedeflerine ulaşmaları için çalışıyoruz.",
    },
    {
      icon: Lightbulb,
      title: "İnovasyon",
      description:
        "Teknolojik gelişmeleri yakından takip ederek, süreçlerimizi sürekli geliştiriyoruz.",
    },
    {
      icon: HandshakeIcon,
      title: "Şeffaflık",
      description:
        "Tüm süreçlerimizde açık ve net iletişim kurarak, tam şeffaflık sağlıyoruz.",
    },
    {
      icon: TrendingUp,
      title: "Sürekli Gelişim",
      description:
        "Eğitim ve gelişime önem vererek, her zaman en iyi hizmeti sunmayı hedefliyoruz.",
    },
  ];

  const timeline = [
    {
      year: "2010",
      title: "Kuruluş",
      description:
        "Şahin Demir Mali Müşavirlik, tek kişilik bir ofisle hizmet vermeye başladı.",
    },
    {
      year: "2013",
      title: "Genişleme",
      description:
        "Büyüyen müşteri portföyümüz ile ekibimizi genişlettik ve yeni ofisimize taşındık.",
    },
    {
      year: "2017",
      title: "Dijital Dönüşüm",
      description:
        "Tüm süreçlerimizi dijitalleştirerek, müşterilerimize çevrimiçi hizmet sunmaya başladık.",
    },
    {
      year: "2020",
      title: "500+ Müşteri",
      description:
        "Güvenilir hizmetimizle 500'den fazla müşteriye ulaştık ve ekibimizi güçlendirdik.",
    },
    {
      year: "2025",
      title: "Lider Konumda",
      description:
        "Bölgede lider mali müşavirlik firmalarından biri haline geldik ve büyümeye devam ediyoruz.",
    },
  ];

  return (
    <div className="min-h-screen bg-linear-to-b from-gray-50 to-white dark:from-background dark:to-muted/20">
      {/* Hero Section */}
      <section className="container mx-auto px-4 md:px-8 py-16 md:py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-linear-to-r from-primary to-blue-600 bg-clip-text text-transparent">
            Hakkımızda
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            2010 yılından bu yana, Türkiye&apos;nin önde gelen mali müşavirlik
            firmalarından biri olarak, işletmelerin finansal başarısına katkıda
            bulunuyoruz. Profesyonel ekibimiz ve yenilikçi yaklaşımımızla, her
            büyüklükteki işletmeye özel çözümler sunuyoruz.
          </p>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="container mx-auto px-4 md:px-8 py-12">
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="bg-white dark:bg-card p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="w-16 h-16 bg-primary/10 dark:bg-primary/20 rounded-2xl flex items-center justify-center mb-6">
              <Target className="w-8 h-8 text-primary dark:text-primary" />
            </div>
            <h2 className="text-2xl font-bold mb-4">Misyonumuz</h2>
            <p className="text-muted-foreground leading-relaxed">
              İşletmelerin mali süreçlerini en iyi şekilde yöneterek, onların
              büyümesine ve başarısına katkıda bulunmak. Müşterilerimize
              güvenilir, kaliteli ve hızlı hizmet sunarak, iş dünyasında
              vazgeçilmez bir partner olmak.
            </p>
          </div>

          <div className="bg-white dark:bg-card p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="w-16 h-16 bg-primary/10 dark:bg-primary/20 rounded-2xl flex items-center justify-center mb-6">
              <Eye className="w-8 h-8 text-primary dark:text-primary" />
            </div>
            <h2 className="text-2xl font-bold mb-4">Vizyonumuz</h2>
            <p className="text-muted-foreground leading-relaxed">
              Türkiye&apos;nin en güvenilir ve tercih edilen mali müşavirlik firması
              olmak. İnovasyon ve teknolojiye yatırım yaparak, sektörde öncü bir
              konumda bulunmak ve müşterilerimize en ileri düzeyde hizmet
              sunmak.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="container mx-auto px-4 md:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Değerlerimiz</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Çalışma prensiplerimiz ve kurumsal değerlerimiz, her zaman
            müşterilerimize en iyi hizmeti sunmamızı sağlar
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {values.map((value, index) => (
            <div
              key={index}
              className="group bg-white dark:bg-card p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-border hover:border-primary dark:hover:border-primary"
            >
              <div className="w-14 h-14 bg-primary/10 dark:bg-primary/20 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary dark:group-hover:bg-primary transition-colors duration-300">
                <value.icon className="w-7 h-7 text-primary dark:text-primary group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-semibold mb-3 group-hover:text-primary dark:group-hover:text-primary transition-colors duration-300">
                {value.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline Section */}
      <section className="container mx-auto px-4 md:px-8 py-16 bg-white dark:bg-muted/10 rounded-3xl my-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Yolculuğumuz</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Kuruluşumuzdan bugüne kadar olan başarı hikayemiz
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {timeline.map((item, index) => (
              <div key={index} className="flex gap-6 items-start group">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-primary/10 dark:bg-primary/20 rounded-full flex items-center justify-center group-hover:bg-primary dark:group-hover:bg-primary transition-colors duration-300 shrink-0">
                    <span className="text-xl font-bold text-primary dark:text-primary group-hover:text-white transition-colors duration-300">
                      {item.year}
                    </span>
                  </div>
                  {index !== timeline.length - 1 && (
                    <div className="w-0.5 h-full bg-gray-200 dark:bg-border mt-2"></div>
                  )}
                </div>
                <div className="flex-1 pb-8">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary dark:group-hover:text-primary transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="container mx-auto px-4 md:px-8 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Şahin Demir</h2>
            <p className="text-lg text-muted-foreground mb-2">
              Serbest Muhasebeci Mali Müşavir
            </p>
            <div className="w-24 h-1 bg-primary dark:bg-primary mx-auto rounded-full mb-8"></div>
          </div>

          <div className="bg-white dark:bg-card rounded-2xl shadow-xl p-8 md:p-10">
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                15 yılı aşkın süredir mali müşavirlik alanında faaliyet gösteren
                Şahin Demir, sektördeki derin bilgi birikimi ve deneyimiyle,
                yüzlerce işletmeye profesyonel danışmanlık hizmeti sunmuştur.
              </p>
              <p>
                İstanbul Üniversitesi İktisat Fakültesi mezunu olan Şahin Demir,
                mezuniyetinin ardından önde gelen mali müşavirlik firmalarında
                çalışarak sektördeki tecrübesini artırmış ve 2010 yılında kendi
                bürosunu kurmuştur.
              </p>
              <p>
                Vergi mevzuatı, muhasebe standartları ve finansal raporlama
                konularında uzmanlaşmış olan Şahin Demir, müşterilerine sadece
                muhasebe hizmeti sunmakla kalmayıp, aynı zamanda işletmelerinin
                stratejik planlamasında da aktif rol almaktadır.
              </p>
              <p className="font-semibold text-foreground">
                Üyelikler ve Sertifikalar:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  İstanbul Serbest Muhasebeci Mali Müşavirler Odası (İSMMO)
                  Üyesi
                </li>
                <li>
                  TÜRMOB (Türkiye Serbest Muhasebeci Mali Müşavirler ve Yeminli
                  Mali Müşavirler Odaları Birliği) Kayıtlı Üye
                </li>
                <li>
                  Uluslararası Finansal Raporlama Standartları (UFRS)
                  Sertifikalı
                </li>
                <li>Kurumsal Yönetim ve Risk Yönetimi Uzmanı</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 md:px-8 py-16">
        <div className="bg-linear-to-r from-primary to-blue-600 rounded-3xl p-8 md:p-12 text-center text-white shadow-2xl max-w-4xl mx-auto">
          <Users className="w-16 h-16 mx-auto mb-6 opacity-90" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Birlikte Çalışmaya Hazır mısınız?
          </h2>
          <p className="text-lg md:text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Profesyonel ekibimiz, sizin ve işletmenizin mali ihtiyaçları için
            burada. Hemen iletişime geçin, tanışalım.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/iletisim"
              className="inline-flex items-center justify-center px-8 py-3 bg-white text-primary dark:text-primary rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
            >
              İletişime Geçin
            </a>
            <a
              href="tel:02163307770"
              className="inline-flex items-center justify-center px-8 py-3 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-primary dark:hover:text-primary transition-colors duration-300"
            >
              0216 330 77 70
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
