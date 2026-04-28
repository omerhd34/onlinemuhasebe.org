const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const pageContentData = [
  {
    page: "home",
    section: "hero",
    key: "subtitle",
    content:
      "Profesyonel muhasebe ve mali danışmanlık hizmetleriyle işletmenizin yanındayız.",
  },
  {
    page: "home",
    section: "services",
    key: "description",
    content:
      "İşletmenizin tüm mali ve muhasebe ihtiyaçları için kapsamlı çözümler sunuyoruz.",
  },
  {
    page: "home",
    section: "cta",
    key: "description",
    content:
      "Profesyonel ekibimiz, işletmenizin mali süreçlerini optimize etmek için hazır. Hemen iletişime geçin, size özel çözümler sunalım.",
  },

  // About Page (Hakkımızda)
  {
    page: "about",
    section: "hero",
    key: "description",
    content:
      "1995 yılından bu yana, Türkiye'nin önde gelen mali müşavirlik firmalarından biri olarak, işletmelerin finansal başarısına katkıda bulunuyoruz. Profesyonel ekibimiz ve yenilikçi yaklaşımımızla, her büyüklükteki işletmeye özel çözümler sunuyoruz.",
  },
  {
    page: "about",
    section: "mission",
    key: "description",
    content:
      "İşletmelerin mali süreçlerini en iyi şekilde yöneterek, onların büyümesine ve başarısına katkıda bulunmak. Müşterilerimize güvenilir, kaliteli ve hızlı hizmet sunarak, iş dünyasında vazgeçilmez bir partner olmak.",
  },
  {
    page: "about",
    section: "team",
    key: "text1",
    content:
      "25 yılı aşkın süredir mali müşavirlik alanında faaliyet gösteren Şahin Demir, sektördeki derin bilgi birikimi ve deneyimiyle, yüzlerce işletmeye profesyonel danışmanlık hizmeti sunmuştur.",
  },
  {
    page: "about",
    section: "team",
    key: "text2",
    content:
      "Eskişehir Üniversitesi İşletme Fakültesi mezunu olan Şahin Demir, mezuniyetinin ardından önde gelen mali müşavirlik firmalarında çalışarak sektördeki tecrübesini artırmış ve 1998 yılında kendi bürosunu kurmuştur.",
  },
  {
    page: "about",
    section: "team",
    key: "text3",
    content:
      "Vergi mevzuatı, muhasebe standartları ve finansal raporlama konularında uzmanlaşmış olan Şahin Demir, müşterilerine sadece muhasebe hizmeti sunmakla kalmayıp, aynı zamanda işletmelerinin stratejik planlamasında da aktif rol almaktadır.",
  },
  {
    page: "about",
    section: "cta",
    key: "description",
    content:
      "Profesyonel ekibimiz, sizin ve işletmenizin mali ihtiyaçları için burada. Hemen iletişime geçin, tanışalım.",
  },

  // Contact Page (İletişim)
  {
    page: "contact",
    section: "info",
    key: "description",
    content:
      "Şahin Demir Mali Müşavirlik olarak siz değerli müşterilerimize finansal ve muhasebe danışmanlığı sunmaktayız. Her türlü vergi, finans ve muhasebe konularında bizimle iletişime geçebilirsiniz.",
  },
];

async function seedPageContent() {
  console.log("🗑️  PageContent tablosu temizleniyor...");
  await prisma.pageContent.deleteMany({});

  let successCount = 0;

  for (const data of pageContentData) {
    try {
      await prisma.pageContent.create({
        data: data,
      });
      successCount++;
      console.log(`✅ ${data.page}/${data.section}/${data.key} eklendi`);
    } catch (error) {
      console.error(
        `❌ ${data.page}/${data.section}/${data.key} eklenirken hata: ${error.message}`
      );
    }
  }

  console.log(
    `\n🎉 ${successCount}/${pageContentData.length} adet içerik başarıyla eklendi!`
  );
}

async function main() {
  try {
    await seedPageContent();
  } catch (e) {
    console.error("❌ Hata:", e);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

main();
