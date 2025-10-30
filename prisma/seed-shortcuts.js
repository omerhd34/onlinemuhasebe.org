const { PrismaClient } = require("../app/generated/prisma");

const prisma = new PrismaClient();

const shortcutsData = [
  {
    title: "E-Devlet",
    url: "https://www.turkiye.gov.tr/",
    icon: null,
    imageUrl: "/images/edevlet.png",
    order: 0,
    isActive: true,
  },
  {
    title: "E-Defter Girişi",
    url: "https://edefter.gib.gov.tr/global/login",
    icon: null,
    imageUrl: "/images/edefter.png",
    order: 1,
    isActive: true,
  },
  {
    title: "E-Arşiv Fatura",
    url: "https://earsivportal.efatura.gov.tr/intragiris.html",
    icon: null,
    imageUrl: "/images/earsiv.jpg",
    order: 2,
    isActive: true,
  },
  {
    title: "İSMMO",
    url: "https://ismmmo.org.tr/Home",
    icon: null,
    imageUrl: "/images/ismmmo.png",
    order: 3,
    isActive: true,
  },
  {
    title: "Dijital Vergi Dairesi",
    url: "https://dijital.gib.gov.tr/",
    icon: null,
    imageUrl: "/images/gib.png",
    order: 4,
    isActive: true,
  },
  {
    title: "Vergi Takvimi",
    url: "https://gib.gov.tr/vergi-takvimi",
    icon: null,
    imageUrl: "/images/gib.png",
    order: 5,
    isActive: true,
  },
  {
    title: "Gecikme Zammı ve Faizi Hesaplama",
    url: "https://dijital.gib.gov.tr/hesaplamalar/GecikmeZamVeFaizHesaplama",
    icon: null,
    imageUrl: "/images/gib.png",
    order: 6,
    isActive: true,
  },
  {
    title: "Defter Beyan Girişi",
    url: "https://portal.defterbeyan.gov.tr/auth/login",
    icon: null,
    imageUrl: "/images/defterbeyan.png",
    order: 7,
    isActive: true,
  },
  {
    title: "Web Tapu",
    url: "https://webtapu.tkgm.gov.tr/",
    icon: null,
    imageUrl: "/images/tapu.jpg",
    order: 8,
    isActive: true,
  },
  {
    title: "TÜRMOB Mali Takvim",
    url: "https://www.turmob.org.tr/MaliTakvim",
    icon: null,
    imageUrl: "/images/turmob.png",
    order: 9,
    isActive: true,
  },
  {
    title: "SGK",
    url: "https://www.sgk.gov.tr/",
    icon: null,
    imageUrl: "/images/sgk.png",
    order: 10,
    isActive: true,
  },
  {
    title: "Merkez Bankası",
    url: "https://www.tcmb.gov.tr/",
    icon: null,
    imageUrl: "/images/tcmb.png",
    order: 11,
    isActive: true,
  },
  {
    title: "Şirket Kuruluşu",
    url: "https://mersis.ticaret.gov.tr/",
    icon: null,
    imageUrl: "/images/mersis.jpg",
    order: 12,
    isActive: true,
  },
  {
    title: "Hesaplamalar",
    url: "https://www.hesaplama.net/",
    icon: "Calculator",
    imageUrl: null,
    order: 13,
    isActive: true,
  },
];

async function seedShortcuts() {
  console.log("🗑️  Kısayollar temizleniyor...");
  await prisma.shortcut.deleteMany({});

  let successCount = 0;

  for (const data of shortcutsData) {
    try {
      await prisma.shortcut.create({
        data: data,
      });
      successCount++;
      console.log(`✅ ${data.title} eklendi`);
    } catch (error) {
      console.error(`❌ ${data.title} eklenirken hata: ${error.message}`);
    }
  }

  console.log(
    `\n🎉 ${successCount}/${shortcutsData.length} adet kısayol başarıyla eklendi!`
  );
}

async function main() {
  try {
    await seedShortcuts();
  } catch (e) {
    console.error("❌ Hata:", e);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

main();
