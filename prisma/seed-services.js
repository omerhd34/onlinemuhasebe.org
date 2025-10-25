const { PrismaClient } = require("../app/generated/prisma");

const prisma = new PrismaClient();

const servicesData = [
  {
    title: "Muhasebe Hizmetleri",
    description:
      "Günlük muhasebe işlemlerinden mali tablolara kadar tüm muhasebe süreçlerinizi profesyonelce yönetiyoruz.",
    icon: "Calculator",
    order: 0,
    isActive: true,
  },
  {
    title: "Vergi Danışmanlığı",
    description:
      "Vergi mevzuatını yakından takip ederek, işletmeniz için en uygun vergi planlamasını yapıyoruz.",
    icon: "FileText",
    order: 1,
    isActive: true,
  },
  {
    title: "Finansal Analiz",
    description:
      "İşletmenizin finansal durumunu detaylı analiz ederek stratejik kararlarınıza destek oluyoruz.",
    icon: "TrendingUp",
    order: 2,
    isActive: true,
  },
  {
    title: "Şirket Kuruluşu",
    description:
      "Şirket kuruluş süreçlerinizi baştan sona yöneterek, hukuki ve mali danışmanlık sağlıyoruz.",
    icon: "Users",
    order: 3,
    isActive: true,
  },
  {
    title: "SGK İşlemleri",
    description:
      "Sosyal güvenlik işlemlerinizi eksiksiz takip ederek, SGK mevzuatına tam uyum sağlıyoruz.",
    icon: "Shield",
    order: 4,
    isActive: true,
  },
  {
    title: "İşletme Danışmanlığı",
    description:
      "İşletmenizi büyütmek ve verimliliği artırmak için profesyonel iş danışmanlığı sunuyoruz.",
    icon: "Briefcase",
    order: 5,
    isActive: true,
  },
];

async function seedServices() {
  console.log("🗑️  Services tablosu temizleniyor...");
  await prisma.service.deleteMany({});

  let successCount = 0;

  for (const data of servicesData) {
    try {
      await prisma.service.create({
        data: data,
      });
      successCount++;
      console.log(`✅ ${data.title} eklendi`);
    } catch (error) {
      console.error(`❌ ${data.title} eklenirken hata: ${error.message}`);
    }
  }

  console.log(
    `\n🎉 ${successCount}/${servicesData.length} adet hizmet başarıyla eklendi!`
  );
}

async function main() {
  try {
    await seedServices();
  } catch (e) {
    console.error("❌ Hata:", e);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

main();
