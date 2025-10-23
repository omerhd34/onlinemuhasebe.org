const { PrismaClient } = require("../app/generated/prisma");

const prisma = new PrismaClient();
const currentYear = new Date().getFullYear();

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
    year: currentYear,
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
    year: currentYear,
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
    year: currentYear,
  },
];

async function main() {
  console.log("🗑️  Veritabanı temizleniyor...");
  await prisma.practicalInfo.deleteMany({});

  console.log("📝 Veriler ekleniyor...");
  let successCount = 0;

  for (const data of practicalInfoData) {
    try {
      await prisma.practicalInfo.create({
        data: data,
      });
      successCount++;
      console.log(`✅ ${data.title} eklendi`);
    } catch (error) {
      console.error(`❌ ${data.title} eklenirken hata: ${error.message}`);
    }
  }

  console.log(
    `\n🎉 ${successCount}/${practicalInfoData.length} adet veri başarıyla eklendi!`
  );
}

main()
  .catch((e) => {
    console.error("❌ Hata:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
