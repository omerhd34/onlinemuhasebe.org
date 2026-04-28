const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const featuresData = [
  {
    title: "30+ Yıl Deneyim",
    description: "Mali müşavirlik alanında uzun yıllara dayanan tecrübe",
    icon: "CheckCircle",
    order: 0,
    isActive: true,
  },
  {
    title: "Hızlı Destek",
    description: "İhtiyacınız olduğunda hızlı ve çözüm odaklı hizmet anlayışı",
    icon: "Clock",
    order: 1,
    isActive: true,
  },
  {
    title: "Profesyonel Ekip",
    description: "Alanında uzman ve sürekli gelişen kadromuz",
    icon: "Award",
    order: 2,
    isActive: true,
  },
  {
    title: "Müşteri Odaklı",
    description: "İşletmenizin ihtiyaçlarına özel çözümler",
    icon: "Target",
    order: 3,
    isActive: true,
  },
];

async function seedFeatures() {
  console.log("🗑️  Features tablosu temizleniyor...");
  await prisma.feature.deleteMany({});

  let successCount = 0;

  for (const data of featuresData) {
    try {
      await prisma.feature.create({
        data: data,
      });
      successCount++;
      console.log(`✅ ${data.title} eklendi`);
    } catch (error) {
      console.error(`❌ ${data.title} eklenirken hata: ${error.message}`);
    }
  }

  console.log(
    `\n🎉 ${successCount}/${featuresData.length} adet özellik başarıyla eklendi!`
  );
}

async function main() {
  try {
    await seedFeatures();
  } catch (e) {
    console.error("❌ Hata:", e);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

main();
