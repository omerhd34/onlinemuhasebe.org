const { PrismaClient } = require("../app/generated/prisma");

const prisma = new PrismaClient();

const shortcutsData = [
  {
    title: "Dijital Vergi Dairesi",
    url: "https://dijital.gib.gov.tr/",
    icon: "FileText",
    description: "Online vergi işlemleri",
    order: 1,
    isActive: true,
  },
  {
    title: "Şirket Kuruluşu",
    url: "https://mersis.ticaret.gov.tr/",
    icon: "Building2",
    description: "MERSİS sistemi",
    order: 2,
    isActive: true,
  },
  {
    title: "İSMMO",
    url: "https://ismmmo.org.tr/Home",
    icon: "Users",
    description: "İstanbul SMMM Odası",
    order: 3,
    isActive: true,
  },
  {
    title: "E-Defter Girişi",
    url: "https://edefter.gib.gov.tr/global/login",
    icon: "BookOpen",
    description: "Elektronik defter sistemi",
    order: 4,
    isActive: true,
  },
  {
    title: "Web Tapu",
    url: "https://webtapu.tkgm.gov.tr/",
    icon: "Home",
    description: "Tapu sorgu sistemi",
    order: 5,
    isActive: true,
  },
  {
    title: "Defter Beyan Girişi",
    url: "https://portal.defterbeyan.gov.tr/auth/login",
    icon: "ScrollText",
    description: "Beyan portalı",
    order: 6,
    isActive: true,
  },
  {
    title: "E-Arşiv Fatura",
    url: "https://earsivportal.efatura.gov.tr/intragiris.html",
    icon: "Receipt",
    description: "E-Arşiv fatura sistemi",
    order: 7,
    isActive: true,
  },
  {
    title: "Hesaplamalar",
    url: "https://www.hesaplama.net/",
    icon: "Calculator",
    description: "Çeşitli hesaplama araçları",
    order: 8,
    isActive: true,
  },
  {
    title: "Vergi Takvimi",
    url: "https://gib.gov.tr/vergi-takvimi",
    icon: "Calendar",
    description: "GİB vergi takvimi",
    order: 9,
    isActive: true,
  },
  {
    title: "TÜRMOB Mali Takvim",
    url: "https://www.turmob.org.tr/MaliTakvim",
    icon: "CalendarDays",
    description: "TÜRMOB mali takvim",
    order: 10,
    isActive: true,
  },
  {
    title: "Yapılandırma Kanunları",
    url: "https://gib.gov.tr/vergi-konulari/1_bireysel/21_yapilandirma_kanunlari/21",
    icon: "Scale",
    description: "Vergi yapılandırma bilgileri",
    order: 11,
    isActive: true,
  },
  {
    title: "İdari Para Cezaları",
    url: "https://gib.gov.tr/vergi-konulari/1_bireysel/5_idari_para_cezalari/5",
    icon: "AlertCircle",
    description: "Ceza miktarları ve bilgileri",
    order: 12,
    isActive: true,
  },
  {
    title: "Binek Otomobil Giderleri",
    url: "https://gib.gov.tr/vergi-konulari/2_isletme_ve_girisimci/18_binek_otomobillerde_gider_ve_amortismanlarin_vergi_matrahindan_indirimi/18",
    icon: "Car",
    description: "Araç gider ve amortisman",
    order: 13,
    isActive: true,
  },
  {
    title: "Merkez Bankası Döviz Kurları",
    url: "https://www.tcmb.gov.tr/kurlar/kurlar_tr.html",
    icon: "DollarSign",
    description: "Güncel döviz kurları",
    order: 14,
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
