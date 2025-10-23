const { PrismaClient } = require("../app/generated/prisma");

const prisma = new PrismaClient();

const practicalInfoData = [
  {
    title: "Demirbaş ve Amortisman Sınırı",
    category: "Amortisman",
    hasTable: false,
    description:
      "Demirbaş, bir işletmenin faaliyetlerinde kullanılan, fiziksel olarak var olan ve genellikle bir yıldan fazla kullanım ömrü olan varlıklardır. Amortisman, bir varlığın zamanla değer kaybetmesini ifade eder. İşletmeler, demirbaşların maliyetini, varlıkların ekonomik ömrü boyunca yıllık olarak gider olarak kaydederler. Bu, varlığın kullanım süresi boyunca maliyetin yayılmasını sağlar.Amortisman sınırı, belirli bir tutarın altındaki demirbaşların amortismanının doğrudan gider olarak kaydedilebileceği anlamına gelir. Türkiye'de bu sınır, Gelir İdaresi Başkanlığı tarafından her yıl belirlenir. Demirbaş ve amortisman sınırı 2025 yılı için 9900 TL olarak belirlenmiştir.",
    afterDescription: null,
    tableData: null,
    image: null,
    year: 2025,
  },
  {
    title: "Emlak Vergisi Oranları",
    category: "Emlak Vergileri",
    hasTable: true,
    description:
      "Emlak vergisi, taşınmaz mallar (arsa, bina, konut, işyeri vb.) üzerinden alınan bir yerel vergidir ve oranları taşınmazın cinsine, bulunduğu bölgeye ve kullanım amacına göre değişir.Türkiye'de 2025 yılı için genel oranlar şu şekildedir:",
    afterDescription: null,
    tableData: {
      headers: [
        "Vergi Türü",
        "Normal Belediyelerde",
        "Büyükşehir Belediyelerinde",
      ],
      rows: [
        ["Mesken Vergisi", "%0,2", "%0,4"],
        ["İşyeri Vergisi", "%0,4", "%0,8"],
        ["Arsa Vergisi", "%0,6", "%1,2"],
      ],
    },
    image: null,
    year: 2025,
  },
  {
    title: "Vergiden Müstesna Yemek Bedeli",
    category: "Vergiden Müstesna Yemek Bedeli",
    hasTable: false,
    description:
      "Vergiden müstesna yemek bedeli, işverenin çalışanına sağladığı ve belirli bir limiti aşmayan yemek yardımı olup, gelir vergisi ve SGK primine tabi değildir. 2025 yılı için bu tutar, Gelir Vergisi 329 Seri Nolu Genel Tebliği'nde açıklanmış olup...",
    afterDescription: null,
    tableData: null,
    image: null,
    year: 2025,
  },
  {
    title: "Emlak Vergisi Değeri Yıllık Artış Oranları",
    category: "Emlak Vergileri",
    hasTable: true,
    description: "",
    afterDescription: null,
    image: null,
    tableData: {
      headers: ["Yıl", "Artış Oranı (%)"],
      rows: [
        ["2020", "11,29"],
        ["2021", "4,555"],
        ["2022", "Genel Beyan Dönemi"],
        ["2023", "61,465"],
        ["2024", "29,23"],
        ["2025", "21,965"],
      ],
    },
    year: 2025,
  },
  {
    title: "Fatura Kesme ve Düzenleme Sınırı",
    category: "Fatura Kesme ve Düzenleme Sınırı",
    hasTable: false,
    description:
      "Fatura kesme ve düzenleme sınırı, Gelir Vergisi ve Katma Değer Vergisi (KDV) mevzuatına göre belirlenen ve küçük işletmeler ile serbest meslek sahiplerinin belirli bir ciroya kadar fatura yerine serbest meslek makbuzu veya perakende satış fişi düzenleyebilmesini sağlayan tutardır. 2025 yılı için bu sınır 9900 TL olarak açıklanmıştır.",
    afterDescription: "null",
    tableData: null,
    year: 2025,
    image: null,
  },
  {
    title: "Bazı Menkul Sermaye İratlarına Uygulanan İndirim Oranları",
    category: "Bazı Menkul Sermaye İratlarına Uygulanan İndirim Oranları",
    hasTable: false,
    description:
      "Bazı Menkul Sermaye İratlarına Uygulanan İndirim Oranları”, kişilerin sahip olduğu menkul kıymetlerden elde ettiği gelirler (faiz, temettü, tahvil gibi) üzerinden vergilendirme yapılırken uygulanabilen indirimleri ifade eder. Bu oranlar sayesinde, belirli menkul sermaye gelirlerinin tamamı yerine yalnızca bir kısmı vergiye tabi tutulur. Amaç, yatırım ve tasarrufu teşvik etmek ve çifte vergilendirmeyi önlemektir. 2025 yılı itibarıyla Türkiye'de menkul sermaye iratlarına uygulanan indirim oranları, Gelir Vergisi Kanunu'na göre belirlenmiştir. Bu indirim oranları, enflasyondan arındırılmış gelir hesaplamasında kullanılır ve vergi matrahının düşürülmesine olanak tanır. 2025 yılı için enflasyondan arındırma amacıyla uygulanan indirim oranı %123,64 olarak belirlenmiştir. . Bu oran, 2024 yılında elde edilen menkul sermaye iratlarının enflasyondan arındırılmasında kullanılır ve vergi matrahının hesaplanmasında dikkate alınır.",
    afterDescription: "null",
    tableData: null,
    year: 2025,
    image: null,
  },
  {
    title:
      "Tevkifata ve İstisnaya Konu Olmayan Menkul ve GMSİ İlişkin Beyan Sınırları",
    category:
      "Tevkifata ve İstisnaya Konu Olmayan Menkul ve GMSİ İlişkin Beyan Sınırları",
    hasTable: false,
    description:
      "Tevkifata ve istisnaya konu olmayan menkul ve gayrimenkul sermaye iratlarına ilişkin beyan sınırı, vergi mevzuatında, tevkifata tabi tutulmamış ve istisna kapsamında olmayan faiz, kira ve benzeri gelirlerin toplamının hangi miktara kadar beyan edilmesine gerek olmadığını belirler. Yani bu sınırın altında gelir elde edenler için gelir vergisi beyannamesi vermek zorunlu değildir. 2025 yılı Türkiye uygulaması: Bu sınır 18.000 TL olarak belirlenmiştir. Eğer gelirleriniz bu tutarı aşarsa, beyanname vermeniz gerekir.",
    afterDescription: "null",
    tableData: null,
    year: 2025,
    image: null,
  },
  {
    title: "Arizi Kazançlar İstisna Tutarları",
    category: "Arizi Kazançlar İstisna Tutarları",
    hasTable: false,
    description:
      "Arizi kazançlar, Gelir Vergisi mevzuatında düzenli olmayan, tek seferlik veya beklenmedik kazançlar anlamına gelir; örneğin hobi olarak yapılan işlerden elde edilen gelir, tesadüfi satış kazançları veya bazı ikramiyeler arizi kazanç sayılır. Arizi kazançlar istisna tutarı ise, bu tür kazançların belirli bir sınırın altında olması durumunda gelir vergisinden muaf tutulmasını ifade eder. Türkiyede 2025 yılı için bu istisna tutarı 280.000 TL olarak belirlenmiştir; yani kazanç bu miktarı aşmıyorsa vergiye tabi değildir.",
    afterDescription: "null",
    tableData: null,
    year: 2025,
    image: null,
  },
  {
    title: "Reeskont ve Avans İşlemlerinde Uygulanan İskonto ve Faiz Oranları",
    category:
      "Reeskont ve Avans İşlemlerinde Uygulanan İskonto ve Faiz Oranları",
    hasTable: false,
    description:
      "Reeskont, iskonto edilmiş yani bedel karşılığı el değiştirmiş kıymetlerin, yeniden bedel karşılığında el değiştirmesi işlemidir. Avans ise senet ve diğer teminatlar karşılığında bankalar tarafından firmalara sağlanan kısa vadeli finansman imkânını ifade eder. Türkiye Cumhuriyet Merkez Bankası (TCMB), reeskont ve avans işlemlerinde uygulanacak iskonto ve faiz oranlarını belirlemekte olup, bu oranlar Merkez Bankası’nın para politikası çerçevesinde ekonomik koşullara göre düzenli olarak güncellenmektedir. En son güncelleme 17 Eylül 2025 tarihinde yapılmış olup, güncel oranlar şöyle belirlenmiştir:",
    afterDescription: "Reeskont Faiz Oranı: %41,25 ve Avans Faiz Oranı: %42,25",
    tableData: null,
    year: 2025,
    image: null,
  },
  {
    title: "Çıraklar İçin Aylık Asgari Ücret Tutarları",
    category: "İş Kanunu ve Ücretler",
    hasTable: true,
    image: null,
    description:
      "2025 yılı itibarıyla Türkiye'de çıraklar için belirlenen maaşlar, mesleki eğitim merkezlerinde okuyan öğrencilerin sınıf düzeyine göre değişiklik göstermektedir. İşte güncel bilgiler:",
    afterDescription: null,
    tableData: {
      items: [
        {
          title: "9, 10 ve 11. Sınıf Çıraklar",
          details: [
            {
              label: "Aylık Ücret",
              value: "Net asgari ücretin %30'u",
            },
            {
              label: "Tutar",
              value: "6.631,40 TL",
            },
          ],
        },
        {
          title: "12. Sınıf Kalfa Öğrencileri",
          details: [
            {
              label: "Aylık Ücret",
              value: "Net asgari ücretin %50'si",
            },
            {
              label: "Tutar",
              value: "11.052,33 TL",
            },
          ],
        },
      ],
    },
    year: 2025,
  },
  {
    id: "11",
    title: "Sigorta Primine Esas Aylık Taban ve Tavan Ücretler",
    category: "SSK ve Sigorta Primleri",
    hasTable: true,
    image: null,
    description:
      "Sigorta Primine Esas Aylık Taban ve Tavan Ücretler, Türkiye'de sosyal güvenlik primlerinin hesaplanmasında kullanılan alt ve üst sınırları ifade eder. Bu sınırlar, 5510 sayılı Sosyal Sigortalar ve Genel Sağlık Sigortası Kanunu'na göre belirlenir ve her yıl güncellenir.",
    afterDescription: null,
    tableData: {
      "Aylık Taban Ücret": "26.005,50 TL",
      "Aylık Tavan Ücret": "195.041,40 TL",
    },
    year: 2025,
  },
  {
    id: "12",
    title:
      "Sigorta Primine Tabi Tutulmayacak Yemek Parası ile Çocuk ve Aile Zammı Tutarları",
    category: "SSK ve Sigorta Primleri",
    hasTable: true,
    image: null,
    description:
      "2025 yılı için Türkiye'de sigorta primine tabi tutulmayacak yemek parası ile çocuk ve aile zammı tutarları aşağıdaki tabloda gösterilmiştir:",
    afterDescription: null,
    tableData: {
      headers: [
        "Ödeme Türü",
        "İstisna Oranı",
        "Aylık İstisna Tutarı (₺)",
        "Açıklama",
      ],
      rows: [
        [
          "Yemek Parası (Günlük)",
          "—",
          "158,00 TL × Fiilen Çalışılan Gün Sayısı",
          "Nakit veya yemek kartı ile yapılan ödemelerde geçerlidir.",
        ],
        [
          "Çocuk Zammı (Aylık)",
          "%2",
          "520,11 TL",
          "Bir çocuk için geçerlidir.",
        ],
        [
          "Aile Zammı (Aylık)",
          "%10",
          "2.600,55 TL",
          "Sigortalıya yapılan aile yardımıdır.",
        ],
      ],
    },
    year: 2025,
  },
  {
    id: "13",
    title: "SSK Prim Oranları",
    category: "SSK ve Sigorta Primleri",
    hasTable: true,
    image: null,
    description:
      "SSK prim oranları, Türkiye’de çalışanların sosyal güvenlik sistemi kapsamında ödenen sigorta primlerinin dağılımını belirleyen yüzdelik değerlerdir. Bu primler, hem işçi hem de işveren tarafından ödenir ve çalışanların emeklilik, sağlık, işsizlik ve diğer sosyal güvenlik haklarını karşılamak amacıyla Sosyal Güvenlik Kurumu’na (SGK) aktarılır.SSK primleri üç ana kategoriye ayrılır: Emeklilik (yaşlılık ve malullük), Sağlık ve İşsizlik. İşçi ve işveren payları ayrı ayrı belirlenmiştir.",
    afterDescription: null,
    tableData: {
      headers: ["Prim Türü", "İşçi Payı (%)", "İşveren Payı (%)", "Toplam (%)"],
      rows: [
        ["Malullük, Yaşlılık, Ölüm", "9", "11", "20"],
        ["Genel Sağlık Sigortası", "5", "7,5", "12,5"],
        ["İşsizlik Sigortası", "1", "2", "3"],
        ["Toplam", "15", "20,5", "35,5"],
      ],
    },
    year: 2025,
  },
  {
    id: "14",
    title: "4857 Sayılı İş Kanunu'na Göre Uygulanacak Para Cezaları",
    category: "İş Kanunu ve Cezaları",
    hasTable: false,
    image: null,
    description:
      "4857 sayılı İş Kanunu’na göre işveren ve çalışanlar açısından belirlenen para cezaları, iş sağlığı ve güvenliği, çalışma koşulları ve işçi haklarının korunması amacıyla uygulanır. 2025 itibarıyla bazı temel cezalar şöyle özetlenebilir:",
    afterDescription:
      "https://www.csgb.gov.tr/Media/1ztby3gm/4857-sayili-is-kanunu-2025-yili-idari-para-cezalari.pdf",
    tableData: null,
    year: 2025,
  },
  {
    id: "15",
    title: "Vergiden Müstesna Harcırah Tavanı",
    category: "Vergi İstisnaları",
    hasTable: true,
    image: null,
    description:
      "2025 yılı için, Gelir Vergisi Kanunu'nun 24. maddesi uyarınca, ticari faaliyetle ilişkili yurt içi ve yurt dışı seyahatlerde ödenen harcırahların gelir vergisinden istisna tutarları aşağıdaki gibidir:\nYurt İçi Harcırah:\n01.01.2025 – 30.06.2025 Dönemi: Brüt aylık ücreti 25.467,70 TL ve üzeri olan çalışanlara ödenecek harcırahın 686 TL'lik kısmı gelir vergisinden istisnadır. \n01.07.2025 – 31.12.2025 Dönemi: Brüt aylık ücreti 29.433,02 TL ve üzeri olan çalışanlara ödenecek harcırahın 686 TL'lik kısmı gelir vergisinden istisnadır. \nYurt Dışı Harcırah:\nYurt dışı seyahatlerde, brüt aylık ücreti 29.433,02 TL ve üzeri olan çalışanlara ödenecek harcırahın 686 TL'lik kısmı gelir vergisinden istisnadır. Ayrıca, her ülke için belirlenen günlük harcırah tutarları da bulunmaktadır. Örneğin:",
    afterDescription: null,
    tableData: {
      countryLimits: [
        {
          country: "ABD",
          amount: "182 USD",
        },
        {
          country: "Fransa",
          amount: "160 EUR",
        },
        {
          country: "İngiltere",
          amount: "115 GBP",
        },
      ],
    },
    year: 2025,
  },
  {
    id: "16",
    title: "Kıdem Tazminatı Tavanı",
    category: "İş Kanunu ve Tazminatlar",
    hasTable: true,
    image: null,
    description:
      "Kıdem tazminatı tavanı, işçinin işten ayrılması veya iş sözleşmesinin sona ermesi durumunda, işverenin ödemekle yükümlü olduğu kıdem tazminatının yasal olarak belirlenmiş maksimum miktarıdır. Yani çalışanın çalıştığı süre ve brüt ücreti ne olursa olsun, ödenecek kıdem tazminatı bu tavanı aşamaz. Tavan, her yıl Çalışma ve Sosyal Güvenlik Bakanlığı tarafından güncellenir ve işçinin bir yıllık kıdemi üzerinden hesaplanan azami tutarı belirler. Türkiye’de 2025 yılı kıdem tazminatı tavanı iki dönem için belirlenmiştir.Örnek: 1 Temmuz 2025’ten sonra işten ayrılan bir çalışan için, bir yıl üzerinden ödenecek en yüksek kıdem tazminatı 53.919,68 TL’dir. Bu tutarın üzerindeki kısmı ödenmez, tavan olarak kabul edilir. Türkiye’de kıdem tazminatı çalışanın brüt maaşı üzerinden ve her tam yıl için 30 günlük ücreti üzerinden hesaplanır. Ama tavan tutarı aşılamaz.",
    afterDescription:
      "Örnek Senaryo: Çalışanın brüt maaşı: 70.000 TL/ay, Çalışma süresi: 3 yıl, Tarih: 1 Temmuz 2025 sonrası. Adım 1: Yıllık kıdem tazminatını brüt maaş üzerinden hesapla: 70.000 * 3 = 210.000 TL. Adım 2: Tavan ile karşılaştır: 1 Temmuz 2025 tavanı: 53.919,68 TL/yıl. 3 yıl için: 53.919,68 * 3 = 161.759,04 TL. Adım 3: Ödenecek kıdem tazminatı: Çalışanın hesaplanan tutarı: 210.000 TL, Tavan sınırı: 161.759,04 TL. Sonuç: İşveren ödeyeceği kıdem tazminatı 161.759,04 TL olacak.",
    tableData: {
      ceilingValues: [
        {
          period: "1 Ocak – 30 Haziran 2025",
          amount: "46.655,43 TL",
        },
        {
          period: "1 Temmuz – 31 Aralık 2025",
          amount: "53.919,68 TL",
        },
      ],
    },
    year: 2025,
  },
  {
    id: "17",
    title: "Geçici Vergi Oranları",
    category: "Vergi Oranları",
    hasTable: false,
    image: null,
    description:
      "Geçici vergi, Türkiye’de kurumlar ve bazı gelir vergisi mükellefleri için yıl içinde elde edilen kazanç üzerinden ara dönemlerde ödenen bir vergidir. Amaç, yıl sonu vergi yükünü dengelemek ve devletin nakit akışını sağlamak. Genellikle üçer aylık dönemler için hesaplanır ve yıl sonunda ödenecek gelir veya kurumlar vergisinden mahsup edilir. Türkiye’de 2025 Geçici Vergi Oranları: Gelir Vergisi mükellefleri için: Gelir vergisi oranları geçici vergiye aynen uygulanır. Türkiye’de gelir vergisi oranları 15%, 20%, 27%, 35% ve 40% dilimlere göre kademelidir. Ancak geçici vergi hesaplamasında genellikle ortalama gelir üzerinden %20 civarı uygulanabilir. Kurumlar Vergisi mükellefleri için: Kurumlar vergisi oranı %25 olarak uygulanır. Geçici vergi de kurum kazançları üzerinden %25 oranında üçer aylık dönemlerde ödenir. Özetle: Geçici vergi, ara ödeme vergisi ve Türkiye’de gelir vergisi dilimlerine veya kurumlar vergisi oranına göre hesaplanır.",
    afterDescription: null,
    tableData: null,
    year: 2025,
  },
  {
    id: "18",
    title: "İşsizlik Sigortası Prim Oranları",
    category: "SSK ve Sigorta Primleri",
    hasTable: true,
    image: null,
    description:
      "İşsizlik sigortası, çalışanların işten ayrılması durumunda belli bir süre gelir kaybını telafi etmek amacıyla devlet tarafından sağlanan bir sosyal güvenlik sistemidir. Bu sistemin finansmanı, hem işveren hem de çalışan tarafından ödenen primlerle sağlanır. İşsizlik sigortası prim oranları, bu primlerin işçi ve işveren tarafından ödenecek yüzdesini belirler. Türkiye’de 2025 yılı için oranlar belirlenmiştir. Bu primler, İşsizlik Sigortası Fonu’na aktarılır ve işten çıkarılan ya da kendi isteği dışında işsiz kalan kişilere ödenecek işsizlik maaşı ve diğer destekler için kullanılır.",
    afterDescription: null,
    tableData: {
      "İşçi payı": "%1",
      "İşveren payı": "%2",
    },
    year: 2025,
  },
  {
    id: "19",
    title: "Vergiden Müstesna Çocuk Yardımı ",
    category: "Vergi İstisnaları",
    hasTable: false,
    image: null,
    description:
      "“Vergiden müstesna çocuk yardımı”, çalışanlara ödenen çocuk yardımı ödemelerinin belirli bir kısmının gelir vergisine tabi olmaması demektir. Yani işverenin çalışanına ödediği çocuk yardımı, belirlenen sınırların altında ise gelir vergisinden muaf tutulur. Bu sayede çalışanlar bu yardımı tam olarak alabilir, vergi kesintisi yapılmaz. Türkiye’de uygulama genellikle Gelir Vergisi Kanunu’nun ilgili maddelerine göre belirlenir ve her yıl asgari ücret veya devletin belirlediği tutarlara göre güncellenir. 2025 yılı sonuna kadar bu tutar 292,55 TL'dir.",
    afterDescription: null,
    tableData: null,
    year: 2025,
  },
  {
    id: "20",
    title: "Aylık Sakatlık İndirim Tutarları",
    category: "Vergi İstisnaları",
    hasTable: true,
    image: null,
    description:
      "Gelir Vergisi Kanunun ilgili maddesinde belirtildiği üzere, asgari çalışma gücünü belli ölçülerde kaybeden çalışanlar için geçerli Engellilik İndirimine ilişkin tutarlar her yıl için ayrı ayrı belirlenmektedir. 2025 yılı itibarıyla Türkiye'de engelli bireyler için uygulanan aylık engellilik indirimi tutarları aşağıdaki gibidir:",
    afterDescription: null,
    tableData: {
      headers: [
        "Engellilik Derecesi",
        "Çalışma Gücü Kaybı Oranı",
        "Aylık İndirim Tutarı (TL)",
      ],
      rows: [
        ["Birinci Derece", "%80 ve üzeri", "9.900 TL"],
        ["İkinci Derece", "%60 - %79", "5.700 TL"],
        ["Üçüncü Derece", "%40 - %59", "2.400 TL"],
      ],
    },
    year: 2025,
  },
  {
    id: "21",
    title: "Beyannamelerini İmzalatmak Zorunda Olanlar & Olmayanlar",
    category: "Vergi Beyannameleri",
    hasTable: true,
    image: null,
    description:
      "Beyannamelerini imzalatmak zorunda olmayanlar, genellikle tek gelir kaynağı olan ve basit gelir elde eden gerçek kişi mükelleflerdir; bu kişiler beyannameyi kendileri imzalayabilir. Beyannamelerini imzalatmak zorunda olanlar ise birden fazla gelir kaynağı olan, gelir veya işletme hacmi belirli sınırları aşan mükellefler ile kurumlar vergisi mükellefleri ve özel denetim kapsamındakilerdir; bu kişiler mali müşavir aracılığıyla imzalatmak zorundadır.",
    afterDescription: null,
    tableData: {
      headers: [
        "Mükellef Türü",
        "Aktif Toplamı",
        "Net Satışlar Toplamı",
        "Beyanname İmzalatılma Zorunluluğu",
      ],
      groups: [
        {
          title: "İmzalatmak Zorunda Olanlar",
          rows: [
            [
              "Kurumlar vergisi mükellefleri",
              "63.786.000 TL'yi aşmayan",
              "127.540.000 TL'yi aşmayan",
              "Yıllık gelir ve kurumlar vergisi beyannameleri, muhtasar beyannameler ve KDV beyannameleri",
            ],
            [
              "Ticari, zirai ve mesleki kazanç nedeniyle gerçek usulde vergilendirilen gelir vergisi mükellefleri",
              "63.786.000 TL'yi aşmayan",
              "127.540.000 TL'yi aşmayan",
              "Yıllık gelir ve kurumlar vergisi beyannameleri, muhtasar beyannameler ve KDV beyannameleri",
            ],
          ],
        },
        {
          title: "İmzalatmak Zorunda Olmayanlar",
          rows: [
            [
              "Serbest meslek faaliyetinde bulunanlar",
              "1.488.000 TL'yi aşmayan",
              "-",
              "Yıllık gelir ve kurumlar vergisi beyannameleri",
            ],
            [
              "II. sınıf tacirlerden alım satım veya imalat faaliyetinde bulunanlar",
              "-",
              "2.138.000 TL'yi aşmayan",
              "Yıllık gelir ve kurumlar vergisi beyannameleri",
            ],
            [
              "II. sınıf tacirlerden yukarıda yazılı olanlar dışındaki işlerle uğraşanlar",
              "-",
              "1.078.000 TL'yi aşmayan",
              "Yıllık gelir ve kurumlar vergisi beyannameleri",
            ],
            [
              "Zirai kazancı işletme hesabı esasına göre tespit edilen çiftçiler",
              "-",
              "2.138.000 TL'yi aşmayan",
              "Yıllık gelir ve kurumlar vergisi beyannameleri",
            ],
            [
              "Noterler",
              "-",
              "-",
              "Yıllık gelir ve kurumlar vergisi beyannameleri",
            ],
            [
              "Özel kanunlarına göre kurulan kooperatifler ile bunların oluşturdukları birlikler",
              "-",
              "-",
              "Yıllık gelir ve kurumlar vergisi beyannameleri",
            ],
            [
              "Gelir ve kurumlar vergisinden muaf olan mükellefler",
              "-",
              "-",
              "Yıllık gelir ve kurumlar vergisi beyannameleri",
            ],
          ],
        },
      ],
    },
    year: 2025,
  },
  {
    id: "22",
    title: "Ücretlere Uygulanacak Gelir Vergisi Tarifesi",
    category: "Gelir Vergisi",
    hasTable: true,
    image: null,
    description:
      "Ücretlere uygulanacak Gelir Vergisi Tarifesi, Türkiye’de gelir vergisinin oranlarını belirler ve genellikle artan oranlı bir sistemdir. Bu sistemde gelir arttıkça vergi oranı da yükselir. 2025 yılı için ücretlere uygulanacak gelir vergisi tarifesi şu şekildedir:",
    afterDescription: null,
    tableData: {
      headers: ["Gelir Dilim(TL)", "Vergi Oranı"],
      rows: [
        ["158.000 TL’ye kadar", "%15"],
        ["330.000 TL’nin 158.000 TL’si için 23.700 TL, fazlası", "%20"],
        ["1.200.000 TL’nin 330.000 TL’si için 58.100 TL, fazlası", "%27"],
        ["4.300.000 TL’nin 1.200.000 TL’si için 293.000 TL, fazlası", "%35"],
        [
          "4.300.000 TL’den fazlasının 4.300.000 TL’si için 1.378.000 TL, fazlası",
          "%40",
        ],
      ],
    },
    year: 2025,
  },
  {
    id: "23",
    title: "Ücret Dışındaki Gelirlere Uygulanacak Gelir Vergisi Tarifesi",
    category: "Gelir Vergisi",
    hasTable: true,
    image: null,
    description:
      "Ücret dışındaki gelirler için Türkiye’de uygulanan Gelir Vergisi Tarifesi, yıllık gelir üzerinden artan oranlı bir sistemle hesaplanır ve ücret gelirlerinden farklı olarak her gelir türüne uygulanır (serbest meslek, kira, menkul sermaye iradı, ticari kazanç vb.). 2025 yılı için tarifesi şu şekildedir:",
    afterDescription: null,
    tableData: {
      headers: ["Gelir Dilimi", "Vergi Oranı"],
      rows: [
        ["158.000 TL’ye kadar", "%15"],
        ["330.000 TL’nin 158.000 TL’si için 23.700 TL, fazlası", "%20"],
        ["800.000 TL’nin 330.000 TL’si için 58.100 TL, fazlası", "%27"],
        ["4.300.000 TL’nin 800.000 TL’si için 185.000 TL, fazlası", "%35"],
        [
          "4.300.000 TL’den fazlasının 4.300.000 TL’si için 1.410.000 TL, fazlası",
          "%40",
        ],
      ],
    },
    year: 2025,
  },
  {
    id: "24",
    title: "Yeniden Değerleme Oranları",
    category: "Vergi Oranları",
    hasTable: false,
    image: null,
    description:
      "Yeniden değerleme oranı, mali değerlerin veya borç-alacakların enflasyon ve fiyat değişiklikleri nedeniyle güncellenmesini sağlayan orandır. Türkiye’de her yıl Gelir İdaresi Başkanlığı (GİB) tarafından Resmî Gazete’de ilan edilir ve vergi, harç, ceza gibi mali kalemlerde uygulanır. 2025 yılı için belirlenen yeniden değerleme oranı %43,93'dür.Bu oran, borç, alacak, vergi ve harçların değerinin %43,93 artırılabileceği anlamına gelir.",
    afterDescription: null,
    tableData: null,
    year: 2025,
  },
  {
    id: "25",
    title: "Ücretlerde Damga Vergisi Nispetleri",
    category: "Vergi Oranları",
    hasTable: true,
    image: null,
    description:
      "Ücretlerde damga vergisi nispeti, çalışanlara ödenen ücretler üzerinden kesilecek damga vergisinin oranını ifade eder. Yani, brüt ücretin ne kadarının damga vergisi olarak alınacağını belirleyen katsayıdır.",
    afterDescription: null,
    tableData: {
      headers: ["Damga Vergisine Tabi Kalem", "Yeni Tutar (TL)"],
      rows: [
        [
          "a) Yabancı memleketlerden gelen posta gönderilerinin gümrüklenmesi için postanelerce gümrüklere verilen liste beyannamelerde yazılı her gönderi maddesi",
          "7,00",
        ],
        ["ba) Yıllık gelir vergisi beyannameleri", "1.000,00"],
        ["bb) Kurumlar vergisi beyannameleri", "1.350,00"],
        ["bc) Katma değer vergisi beyannameleri", "665,00"],
        ["bd) Muhtasar beyannameler", "665,00"],
        [
          "be) Diğer vergi beyannameleri (damga vergisi beyannameleri hariç)",
          "665,00",
        ],
        ["c) Gümrük idarelerine verilen beyannameler", "1.350,00"],
        ["d) Belediye ve il özel idarelerine verilen beyannameler", "495,00"],
        [
          "e) Sosyal güvenlik kurumlarına verilen sigorta prim bildirgeleri",
          "495,00",
        ],
        [
          "f) 5510 sayılı Kanun uyarınca verilen aylık prim ve hizmet belgesi ile muhtasar beyannamenin birleştirilerek verilmesiyle oluşturulan beyannameler",
          "790,00",
        ],
      ],
    },
    year: 2025,
  },
  {
    id: "26",
    title: "Veraset ve İntikal Vergisi Tarifeleri",
    category: "Veraset ve İntikal Vergisi",
    hasTable: true,
    image: null,
    description:
      "Veraset ve İntikal Vergisi, bir kişinin vefatı veya bir malın karşılıksız olarak el değiştirmesi durumunda, mal varlığı üzerinden devlete ödenen bir vergi türüdür. Türkiye’de bu vergi, hem veraset yoluyla intikaller (miras yoluyla geçişler) hem de ivazsız intikaller (bağış, hibe gibi karşılıksız geçişler) için uygulanır. Vergi oranları, miras bırakan ile mirasçı arasındaki yakınlık derecesine ve intikal eden malın değerine göre değişir.",
    afterDescription: null,
    tableData: {
      tables: [
        {
          title: "Veraset Yoluyla İntikaller (Miras Yoluyla Geçiş)",
          headers: ["Sıra", "Matrah (TL)", "Vergi Oranı (%)"],
          rows: [
            ["1", "İlk 2.400.000 TL", "10"],
            ["2", "2.400.001 – 5.700.000 TL", "15"],
            ["3", "5.700.001 – 12.000.000 TL", "20"],
            ["4", "12.000.001 TL ve üzeri", "30"],
          ],
        },
        {
          title: "İvazsız İntikaller (Bağış, Hibe vb.)",
          headers: ["Sıra", "Matrah (TL)", "Vergi Oranı (%)"],
          rows: [
            ["1", "İlk 2.400.000 TL", "15"],
            ["2", "2.400.001 – 5.700.000 TL", "20"],
            ["3", "5.700.001 – 12.000.000 TL", "25"],
            ["4", "12.000.001 TL ve üzeri", "30"],
          ],
        },
      ],
    },
    year: 2025,
  },
  {
    id: "27",
    title: "Usulsüzlük Cezalarına Ait Cetvel",
    category: "Vergi Cezaları",
    hasTable: true,
    image: null,
    description:
      "2025 yılı itibarıyla Vergi Usul Kanunu'na (VUK) göre uygulanacak usulsüzlük cezaları, mükellef gruplarına ve usulsüzlük derecelerine göre belirlenen tutarlara göre uygulanmaktadır. 2025 yılında cezalar, bir önceki yıla göre artırılmıştır ve mükelleflerin faaliyet türlerine göre farklılık göstermektedir.",
    afterDescription: null,
    tableData: {
      headers: [
        "Mükellef Grupları",
        "Birinci Derece Usulsüzlükler İçin (TL)",
        "İkinci Derece Usulsüzlükler İçin (TL)",
      ],
      rows: [
        ["1 - Sermaye Şirketleri", "28.000", "14.000"],
        [
          "2 - Sermaye şirketleri dışında kalan birinci sınıf tüccar ve serbest meslek erbabı",
          "14.000",
          "7.000",
        ],
        ["3 - İkinci sınıf tüccarlar", "7.000", "5.000"],
        [
          "4 - Yukarıdakiler dışında kalıp beyanname usulüyle gelir vergisine tabi olanlar",
          "5.000",
          "3.200",
        ],
        ["5 - Kazancı basit usulde tespit edilenler", "3.200", "2.100"],
        ["6 - Gelir vergisinden muaf esnaf", "2.100", "1.400"],
      ],
    },
    year: 2025,
  },
  {
    id: "28",
    title: "Gecikme Zammı Oranları",
    category: "Faiz Oranları",
    hasTable: true,
    image: null,
    description:
      "2025 yılı itibarıyla Türkiye'de uygulanan gecikme zammı oranları, belirli dönemlere göre değişiklik göstermektedir. Aşağıda, 2025 yılı için geçerli olan gecikme zammı oranları ve ilgili hesaplama yöntemleri özetlenmiştir:",
    afterDescription: null,
    tableData: {
      headers: ["Ay", "Aylık Gecikme Zammı Oranı (%)"],
      rows: [
        ["Ocak", "3,08"],
        ["Şubat", "3,04"],
        ["Nisan", "3,42"],
        ["Mayıs", "3,42"],
        ["Haziran", "3,25"],
        ["Temmuz", "3,09"],
        ["Ağustos", "2,87"],
        ["Eylül", "2,87"],
        ["Ekim", "-"],
        ["Kasım", "-"],
        ["Aralık", "-"],
      ],
    },
    year: 2025,
  },
  {
    id: "29",
    title: "Tecil Faizi Oranları",
    category: "Faiz Oranları",
    hasTable: false,
    image: null,
    description:
      "Tecil faizi oranı, vergi veya diğer kamu alacaklarının ödemesi vadesinde yapılamadığında, borcun taksitlendirilmesi veya ödemesinin ertelenmesi (tecil) durumunda uygulanan faiz oranıdır. Yani borçlu, ödemeyi ertelediğinde veya taksitlendirdiğinde, borç tutarına bu oran üzerinden faiz eklenir. 21 Mayıs 2024 ve sonrası için tecil faizi oranı %48'dir. ",
    afterDescription:
      "Taksit Tutarı × (Yıllık Tecil Faizi Oranı / 100) × (Gün Sayısı / 365)",
    tableData: null,
    year: 2025,
  },
  {
    id: "30",
    title: "SSK Gecikme Zammı Oranları",
    category: "Faiz Oranları",
    hasTable: false,
    image: null,
    description:
      "SSK gecikme zammı oranları, Sosyal Sigortalar Kurumu primlerinin zamanında ödenmemesi durumunda borca eklenen faiz oranlarını ifade eder. Yani, işveren veya sigortalı prim ödemesini vadesinde gerçekleştirmezse, borç tutarına her ay bu oran üzerinden ek ödeme uygulanır. Bu oranlar, 5510 sayılı Sosyal Sigortalar ve Genel Sağlık Sigortası Kanunu ile ilgili yönetmeliklerde belirlenmiştir. 2025 yılı itibarıyla SSK primleri için aylık gecikme zammı oranı yaklaşık %3 olarak uygulanmaktadır.",
    afterDescription: null,
    tableData: null,
    year: 2025,
  },
  {
    id: "31",
    title: "Yatırım İndirimi Uygulaması",
    category: "Vergi Teşvikleri",
    hasTable: false,
    image: null,
    description:
      "Yatırım İndirimi, 193 sayılı Gelir Vergisi Kanunu'nun Geçici 61. maddesi kapsamında, işletmelerin belirli yatırım harcamalarının gelir veya kurumlar vergisi matrahından indirilmesine olanak tanıyan bir vergi teşvikidir. Bu uygulama, üretim kapasitesinin artırılması, istihdamın desteklenmesi ve ekonomik kalkınmanın teşvik edilmesi amacıyla kullanılır. ",
    afterDescription:
      "Uygulama Kapsamı: Yatırım Konuları: Makine, teçhizat, bina, tesis, altyapı gibi üretimle doğrudan ilişkili harcamalar. Uygulama Süresi: Yatırımın yapıldığı takvim yılı ve izleyen 5 yıl. İndirim Oranı: Yatırım tutarının %40'ı oranında.",
    tableData: null,
    year: 2025,
  },
  {
    id: "32",
    title: "Yıllık Ücretli İzinler",
    category: "İş Kanunu",
    hasTable: true,
    image: null,
    description:
      "Yıllık ücretli izin, işçilerin belirli bir süre çalıştıktan sonra ücretli olarak dinlenme hakkını kullanmasıdır. Türkiye’de bu hak, 4857 sayılı İş Kanunu ile düzenlenmiştir ve işçinin kıdemine göre değişir. Amaç, çalışanların iş verimliliğini artırmak ve sağlıklı bir iş yaşam dengesi sağlamaktır. İşçinin aynı işyerinde çalıştığı süreye göre yıllık ücretli izin süreleri aşağıdaki tabloda gösterilmiştir.",
    afterDescription: null,
    tableData: {
      headers: [
        "Kıdem (Aynı İşyerinde Çalışma Süresi)",
        "Yıllık Ücretli İzin Süresi",
      ],
      rows: [
        ["1 yıldan 5 yıla kadar", "14 gün"],
        ["5 yıldan 15 yıla kadar", "20 gün"],
        ["15 yıldan fazla", "26 gün"],
      ],
    },
    year: 2025,
  },
  {
    id: "33",
    title: "Bildirim Süreleri ve İhbar Tazminatı Tutarları",
    category: "İş Kanunu ve Tazminatlar",
    hasTable: true,
    image: null,
    description:
      "Hizmet sözleşmesi sona erdirilirken dikkate alınacak bildirim süreleri ve ihbar tazminatı tutarları, iş hukukunda çalışan ile işveren arasındaki iş sözleşmesinin feshi sürecinde uygulanacak süreleri ve ödenecek tazminatları ifade eder. Yani, iş akdinin sona erdirilmesi durumunda hangi kurallara uyulacağı ve işçinin ne kadar süre önceden bilgilendirilmesi gerektiği ile işverenin veya işçinin ihbar süresine uymaması halinde ödeyeceği tazminat miktarları burada belirlenir.",
    afterDescription: null,
    tableData: {
      headers: ["Çalışma Süresi", "İhbar Süresi"],
      rows: [
        ["6 aya kadar", "2 hafta"],
        ["6 ay – 1,5 yıl", "4 hafta"],
        ["1,5 – 3 yıl", "6 hafta"],
        ["3 yıl ve üzeri", "8 hafta"],
      ],
    },
    year: 2025,
  },
  {
    id: "34",
    title: "Üretici Fiyat Endeksi (ÜFE 2003=100)",
    category: "Enflasyon Endeksleri",
    hasTable: false,
    image: null,
    description:
      "Üretici Fiyat Endeksi(ÜFE) (2003=100), üreticilerin ürettikleri mal ve hizmetlerin yurt içi satış fiyatlarında zaman içinde meydana gelen ortalama değişimi ölçen bir fiyat endeksidir.2003 yılı, bu endeksin baz yılıdır.2003 yılında endeks değeri 100 olarak kabul edilmiştir. Sonraki yıllardaki değişimler bu baz yıla göre hesaplanır. ÜFE tarım, madencilik, imalat, elektrik, gaz ve su üretimi gibi üretim sektörlerini kapsar. Üretim sürecinde malın üretici tarafından satış fiyatı esas alınır (KDV, nakliye, bayi kârı vb. hariçtir). 2025 yılı Eylül ayı itibarıyla ÜFE’nin yıllık artış oranı %26,59 ve aylık artış oranı %2.52 olarak açıklanmıştır.",
    afterDescription: null,
    tableData: null,
    year: 2025,
  },
  {
    id: "35",
    title: "Tüketici Fiyat Endeksi (TÜFE 2003=100)",
    category: "Enflasyon Endeksleri",
    hasTable: false,
    image: null,
    description:
      "TÜFE; bir ekonomide hanehalkının tükettiği mal ve hizmetlerin fiyat seviyesinde zaman içinde yaşanan ortalama değişimi ölçen bir endekstir. Bu endeks, tüketicilerin satın aldığı ürün ve hizmetlerin yurt içindeki perakende satış fiyatları üzerinden hesaplanır. Türkiye'de endeksin referans yılı 2003=100 olarak belirlenmişti.Yani 2003 yılına göre fiyat düzeyinin ne yönde değiştiğini gösterir. 2025 yılı Eylül ayı itibarıyla ÜFE'nin yıllık artış oranı %33.29 ve aylık artış oranı %3.23 olarak açıklanmıştır.",
    afterDescription: null,
    tableData: null,
    year: 2025,
  },
  {
    id: "36",
    title: "Toptan Eşya Fiyat Endeksi (1994=100)",
    category: "Enflasyon Endeksleri",
    hasTable: false,
    image: null,
    description:
      "Toptan Eşya Fiyat Endeksi (TEFE) (1994=100), Türkiye’de üretici fiyat hareketlerini izlemek amacıyla kullanılan eski bir fiyat endeksidir.1994 yılı bu endeksin baz yılıdır. 1994’te endeks 100 kabul edilmiştir. Toptan Eşya Fiyat Endeksi (TEFE – 1994=100) serisinde, 2025 yılı Ekim ayı değeri 333.596,08 olarak görülmektedir.",
    afterDescription: null,
    tableData: null,
    year: 2025,
  },
  {
    id: "37",
    title: "Üretici Enflasyon Oranları(2003=100)",
    category: "Enflasyon Endeksleri",
    hasTable: true,
    image: null,
    description:
      "Türkiye'de Yurt İçi Üretici Fiyat Endeksi (Yİ-ÜFE), 2003 yılı baz alınarak hesaplanmaktadır. Bu endeks, üretici fiyatlarındaki değişimi ve dolayısıyla üretim maliyetlerindeki artışları gösterir.Aşağıda, 2025 yılına ait bazı aylık Yİ-ÜFE verileri özetlenmiştir:",
    afterDescription: null,
    tableData: {
      headers: [
        "Ay",
        "Aylık Artış (%)",
        "Yıllık Artış (%)",
        "Yıllık Aralık Ayına Göre Artış (%)",
      ],
      rows: [
        ["Ocak 2025", "-", "-", "-"],
        ["Mart 2025", "%1,88", "%23,50", "%7,23"],
        ["Nisan 2025", "%2,76", "-", "%10,19"],
        ["Mayıs 2025", "-", "-", "-"],
        ["Haziran 2025", "%2,46", "-", "%15,71"],
        ["Temmuz 2025", "%1,73", "-", "%17,70"],
        ["Ağustos 2025", "%2,48", "-", "%20,62"],
        ["Eylül 2025", "%2,52", "-", "%23,66"],
      ],
    },
    year: 2025,
  },
  {
    id: "38",
    title: "Tüketici Enflasyon Oranları(2003=100)",
    category: "Enflasyon Endeksleri",
    hasTable: true,
    image: null,
    description:
      "Türkiye'de Tüketici Fiyat Endeksi (TÜFE), 2003 yılı baz alınarak hesaplanmaktadır. Aşağıda, 2025 yılına ait bazı aylık TÜFE verileri özetlenmiştir:",
    afterDescription: null,
    tableData: {
      headers: [
        "Ay",
        "Aylık Artış (%)",
        "Yıllık Artış (%)",
        "Yıllık Aralık Ayına Göre Artış (%)",
      ],
      rows: [
        ["Ocak 2025", "%5,03", "%42,12", "%5,03"],
        ["Şubat 2025", "%2,27", "%39,05", "%7,42"],
        ["Mart 2025", "%2,46", "%37,66", "%10,06"],
        ["Nisan 2025", "%3,00", "%35,41", "%13,36"],
        ["Mayıs 2025", "%1,53", "%33,29", "%15,71"],
        ["Haziran 2025", "%1,37", "%31,67", "%16,67"],
        ["Temmuz 2025", "%2,06", "%29,08", "%19,08"],
        ["Ağustos 2025", "%2,04", "%27,50", "%21,50"],
        ["Eylül 2025", "%3,23", "%25,43", "%23,66"],
      ],
    },
    year: 2025,
  },
  {
    id: "39",
    title: "KKTC'ye Yapılacak Yolculuklarda Verilecek Gündelikler",
    category: "Harcırahlar",
    hasTable: true,
    image: null,
    description:
      "Yurt dışı gündelikleriyle ilgili Cumhurbaşkanı Kararı 11 Ocak 2025 tarihli Resmî Gazetede yayımlanarak yürürlüğe girmiştir. Bu Kararla, yurt dışı seyahatler nedeniyle verilen gündeliklerin gelir vergisinden müstesna tutulacak kısmı da belirlenmiş olmaktadır.",
    afterDescription: null,
    tableData: {
      headers: [
        "Sıra No",
        "Görev Unvanı / Kadro Derecesi",
        "1/1/2025 - 31/12/2025 Döneminde Verilecek Günlük Tutarlar (TL)",
      ],
      rows: [
        [
          "1",
          "Türkiye Büyük Millet Meclisi Başkanı, Cumhurbaşkanı Yardımcıları",
          "1.766,00",
        ],
        [
          "2",
          "Anayasa Mahkemesi Başkanı, Bakanlar, Genelkurmay Başkanı, Milletvekilleri, Kuvvet Komutanları, Jandarma Genel Komutanı, Sahil Güvenlik Komutanı, Cumhurbaşkanlığı Genel Sekreteri, T.B.M.M. Genel Sekreteri, Orgeneraller, Oramiraller, Yargıtay, Danıştay, Uyuşmazlık Mahkemesi ve Sayıştay Başkanları, Yargıtay Cumhuriyet Başsavcısı, Danıştay Başsavcısı, Bakan Yardımcıları, Kamu Başdenetçisi",
          "1.470,00",
        ],
        [
          "3",
          "Yükseköğretim Kurulu Başkanı, Milli Güvenlik Kurulu Genel Sekreteri, Korgeneral ve Koramiraller, Cumhurbaşkanlığına bağlı kurum ve kuruluşların başkanları, merkezde sürekli görevde bulunanlar dışındaki Büyükelçiler",
          "1.294,00",
        ],
        [
          "4a",
          "Yukarıdakiler dışında kalan memur ve hizmetlilerden; Aylık/kadro derecesi 1 olanlar",
          "1.120,00",
        ],
        [
          "4b",
          "Yukarıdakiler dışında kalan memur ve hizmetlilerden; Aylık/kadro derecesi 2-4 olanlar",
          "942,00",
        ],
        [
          "4c",
          "Yukarıdakiler dışında kalan memur ve hizmetlilerden; Aylık/kadro derecesi 5-15 olanlar",
          "766,00",
        ],
      ],
    },
    year: 2025,
  },
  {
    id: "40",
    title: "Yurtdışı Gündelikleri",
    category: "Harcırahlar",
    hasTable: true,
    image: null,
    description:
      "Türkiye’de kamu görevlilerinin yurtdışına yapacakları görevli seyahatlerde ödenecek gündelikler, 6245 sayılı Harcırah Kanunu ve ilgili Cumhurbaşkanlığı kararlarıyla belirlenir. Yurtdışı gündelikleri, ülkenin risk durumu, yaşam maliyeti ve konaklama giderleri dikkate alınarak kademelendirilir. Aşağıda 2025 yılı için geçerli yurtdışı gündelikleri özetlenmiştir:",
    afterDescription: null,
    tableData: {
      headers: [
        "Sıra No",
        "Ülke / Bölge Grubu",
        "1/1/2025 – 31/12/2025 Gündelik (USD)",
        "Açıklama",
      ],
      rows: [
        [
          "1",
          "I. Grup Ülkeler",
          "195 USD",
          "ABD, Almanya, İngiltere, Fransa gibi gelişmiş ülkeler",
        ],
        [
          "2",
          "II. Grup Ülkeler",
          "155 USD",
          "Ortadoğu, Doğu Avrupa ülkeleri vb.",
        ],
        ["3", "III. Grup Ülkeler", "120 USD", "Asya, Afrika ülkeleri vb."],
        ["4", "IV. Grup Ülkeler", "85 USD", "Yaşam maliyeti düşük ülkeler"],
      ],
    },
    year: 2025,
  },
  {
    id: "41",
    title: "Yurtdışına Çıkış Yasağı Konulmasını Gerektiren Borç Miktarı",
    category: "Yasal Süreçler",
    hasTable: true,
    image: null,
    description:
      "Türkiye’de yurtdışına çıkış yasağı, borçların ödenmemesi durumunda mahkemeler veya icra daireleri tarafından uygulanabilir. Borç miktarının alt sınırı, İcra ve İflas Kanunu ve ilgili uygulamalara göre belirlenir. 2025 yılı itibarıyla durum şu şekildedir:",
    afterDescription: null,
    tableData: {
      headers: ["Tür", "Borç Miktarı (TL)", "Açıklama"],
      rows: [
        [
          "İcra Takibi veya Ödeme Emirleri",
          "30.000 TL ve üzeri",
          "İcra takibi başlatılmış ve ödenmemiş borçlar için yurtdışına çıkış yasağı uygulanabilir.",
        ],
        [
          "Vergi Borçları",
          "30.000 TL ve üzeri",
          "Gelir İdaresi Başkanlığı tarafından tebliğ edilen ve ödenmemiş vergi borçları.",
        ],
        [
          "SGK Prim Borçları",
          "30.000 TL ve üzeri",
          "Sosyal Güvenlik Kurumu’nun tespit ettiği ve ödenmemiş prim borçları.",
        ],
      ],
    },
    year: 2025,
  },
  {
    id: "42",
    title: "Yıllara Göre Mükellefin Vergi Yükü",
    category: "Vergi Oranları",
    hasTable: true,
    image: null,
    description:
      "“Yıllara göre mükellefin vergi yükü” ifadesi genellikle bir mükellefin, kazançlarına veya gelirlerine göre ödediği vergi oranları ve miktarlarının yıllar itibarıyla değişimini ifade eder. Türkiye’de bu, başta Gelir Vergisi, Kurumlar Vergisi ve Katma Değer Vergisi (KDV) üzerinden hesaplanır.Aşağıda 2020–2025 dönemi için gelir vergisi yükü örnek tablo verilmiştir. Bu tablo, yıllık gelir üzerinden ödenen vergi ve efektif vergi oranını göstermektedir:",
    afterDescription: null,
    tableData: {
      headers: [
        "Yıl",
        "Gelir Vergisi Tarifesi (%)",
        "Ortalama Vergi Yükü (%)",
        "Açıklama",
      ],
      rows: [
        [
          "2020",
          "15 – 40",
          "~22",
          "Gelir vergisi dilimleri: 22.000 TL’ye kadar %15, 22.000-49.000 %20 vb.",
        ],
        [
          "2021",
          "15 – 40",
          "~23",
          "Artan enflasyon ve yeniden değerleme ile efektif vergi yükü artışı",
        ],
        [
          "2022",
          "15 – 40",
          "~24",
          "Yüksek enflasyon döneminde artan vergi dilimleri",
        ],
        ["2023", "15 – 35", "~22", "Yeni tarife ile üst sınır %35’e düşürüldü"],
        [
          "2024",
          "15 – 35",
          "~21",
          "Gelir dilimleri yeniden değerlemeye tabi tutuldu",
        ],
        [
          "2025",
          "15 – 27",
          "~20",
          "Ücret dışındaki gelirler için yeni vergi tarifesi uygulanıyor",
        ],
      ],
    },
    year: 2025,
  },
  {
    id: "43",
    title: "Vergi Kodları",
    category: "Vergi Kodları",
    hasTable: true,
    description:
      "Türkiye’de vergi uygulamaları, her bir vergi türünü tanımlayan vergi kodları (VKN veya resmi kodlar) ile takip edilir. Bu kodlar, hem mükelleflerin sınıflandırılmasında hem de beyanname ve ödeme işlemlerinde kullanılır. Aşağıda bazı temel vergi türleri ve kodları verilmiştir:",
    afterDescription: "https://intvrg.gib.gov.tr/vergi_turleri_tr.html",
    tableData: {
      headers: ["Vergi Kodu", "Vergi Adı"],
      rows: [
        ["0001", "YILLIK GELİR VERGİSİ"],
        ["0002", "ZIRAİ KAZANÇ GELİR VERGİSİ"],
        ["0003", "GELİR VERGİSİ S. (MUHTASAR)"],
        ["0004", "GELİR GÖTÜRÜ TİCARİ KAZANÇ"],
        ["0005", "GELİR GÖTÜRÜ SERBEST MESLEK KAZANCI"],
        ["0006", "GELİR GÖTÜRÜ ÜCRET"],
        ["0007", "DAĞITILMAYAN KAR STOPAJI"],
        ["0010", "KURUMLAR VERGİSİ"],
        [".", "."],
        [".", "."],
        [".", "."],
      ],
    },
    year: 2025,
    image: null,
  },
];

async function main() {
  console.log("Veritabanı temizleniyor...");
  await prisma.practicalInfo.deleteMany({});

  console.log("Veriler ekleniyor...");
  for (const data of practicalInfoData) {
    await prisma.practicalInfo.create({
      data: data,
    });
  }

  console.log(`${practicalInfoData.length} adet veri başarıyla eklendi!`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
