const { PrismaClient } = require("../app/generated/prisma");

const prisma = new PrismaClient();

const valuesData = [
  {
    title: "Güvenilirlik",
    description:
      "Müşterilerimizin mali bilgilerini en yüksek güvenlik standartlarıyla koruyoruz.",
    icon: "Shield",
    order: 0,
    isActive: true,
  },
  {
    title: "Profesyonellik",
    description:
      "Alanında uzman kadromuzla, en güncel mevzuat ve uygulamalara göre hizmet veriyoruz.",
    icon: "CheckCircle",
    order: 1,
    isActive: true,
  },
  {
    title: "Müşteri Memnuniyeti",
    description:
      "Müşterilerimizin başarısı bizim başarımızdır. Onların hedeflerine ulaşmaları için çalışıyoruz.",
    icon: "Heart",
    order: 2,
    isActive: true,
  },
  {
    title: "İnovasyon",
    description:
      "Teknolojik gelişmeleri yakından takip ederek, süreçlerimizi sürekli geliştiriyoruz.",
    icon: "Lightbulb",
    order: 3,
    isActive: true,
  },
  {
    title: "Şeffaflık",
    description:
      "Tüm süreçlerimizde açık ve net iletişim kurarak, tam şeffaflık sağlıyoruz.",
    icon: "HandshakeIcon",
    order: 4,
    isActive: true,
  },
  {
    title: "Sürekli Gelişim",
    description:
      "Eğitim ve gelişime önem vererek, her zaman en iyi hizmeti sunmayı hedefliyoruz.",
    icon: "TrendingUp",
    order: 5,
    isActive: true,
  },
];

async function seedValues() {
  console.log("🗑️  Values tablosu temizleniyor...");
  await prisma.value.deleteMany({});

  let successCount = 0;

  for (const data of valuesData) {
    try {
      await prisma.value.create({
        data: data,
      });
      successCount++;
      console.log(`✅ ${data.title} eklendi`);
    } catch (error) {
      console.error(`❌ ${data.title} eklenirken hata: ${error.message}`);
    }
  }

  console.log(
    `\n🎉 ${successCount}/${valuesData.length} adet değer başarıyla eklendi!`
  );
}

async function main() {
  try {
    await seedValues();
  } catch (e) {
    console.error("❌ Hata:", e);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

main();
