const { PrismaClient } = require("../app/generated/prisma");

const prisma = new PrismaClient();

const timelineData = [
  {
    year: "1998",
    title: "Kuruluş",
    description:
      "Şahin Demir Mali Müşavirlik, Şahin Demir tarafından İstanbul'da kuruldu.",
    order: 0,
    isActive: true,
  },
  {
    year: "2005",
    title: "Büyüme ve Gelişim",
    description:
      "Müşteri portföyünü genişleterek KOBİ'lere özel hizmetler sunmaya başladı.",
    order: 1,
    isActive: true,
  },
  {
    year: "2010",
    title: "Dijital Dönüşüm",
    description:
      "Online muhasebe hizmetleri ve dijital raporlama sistemlerine geçiş yapıldı.",
    order: 2,
    isActive: true,
  },
  {
    year: "2015",
    title: "Sektörel Uzmanlık",
    description:
      "Farklı sektörlerde uzmanlaşmış danışmanlık hizmetleri sunmaya başladı.",
    order: 3,
    isActive: true,
  },
  {
    year: "2020",
    title: "Teknoloji Entegrasyonu",
    description:
      "Yapay zeka destekli finansal analiz ve bulut tabanlı sistemlere geçiş.",
    order: 4,
    isActive: true,
  },
  {
    year: "2025",
    title: "Sürdürülebilir Gelecek",
    description:
      "Sürdürülebilir iş modelleri ve ESG raporlaması konularında öncü firma.",
    order: 5,
    isActive: true,
  },
];

async function seedTimeline() {
  console.log("🗑️  Timeline tablosu temizleniyor...");
  await prisma.timeline.deleteMany({});

  let successCount = 0;

  for (const data of timelineData) {
    try {
      await prisma.timeline.create({
        data: data,
      });
      successCount++;
      console.log(`✅ ${data.year} - ${data.title} eklendi`);
    } catch (error) {
      console.error(
        `❌ ${data.year} - ${data.title} eklenirken hata: ${error.message}`
      );
    }
  }

  console.log(
    `\n🎉 ${successCount}/${timelineData.length} adet timeline kaydı başarıyla eklendi!`
  );
}

async function main() {
  try {
    await seedTimeline();
  } catch (e) {
    console.error("❌ Hata:", e);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

main();
