# Mali Müşavir Şahin Demir — Kurumsal Web Sitesi

Profesyonel muhasebe ve mali danışmanlık hizmetlerini tanıtan, içerikleri veritabanından yönetilen modern bir kurumsal site. [Next.js](https://nextjs.org/) App Router, [Prisma](https://www.prisma.io/) ve [MongoDB](https://www.mongodb.com/) ile geliştirilmiştir.

## Özellikler

- **Dinamik içerik:** Özellikler, hizmetler, değerler, zaman çizelgesi, pratik bilgiler ve kısayollar MongoDB üzerinden yönetilir.
- **İletişim formu:** E-posta gönderimi için API route ve Nodemailer entegrasyonu.
- **Tema:** Açık / koyu / sistem teması (`next-themes`).
- **Erişilebilir bileşenler:** Radix UI tabanlı UI bileşenleri.
- **Özel sunucu:** İsteğe bağlı `server.js` ile hostname ve port yapılandırması.

## Sayfalar

| Rota | Açıklama |
|------|----------|
| `/` | Ana sayfa (hero, istatistikler, pratik bilgi özeti, özellikler, hizmetler) |
| `/hakkimizda` | Hakkımızda, ekip, değerler, zaman çizelgesi |
| `/pratik_bilgiler` | Şehir / pratik bilgi içerikleri |
| `/kisayol` | Hızlı erişim kısayolları |
| `/iletisim` | İletişim formu ve bilgiler |

## Teknoloji yığını

- **Çatı:** Next.js 16, React 19
- **Stil:** Tailwind CSS 4, `tw-animate-css`
- **Veri:** Prisma 6, MongoDB
- **E-posta:** Nodemailer

## Gereksinimler

- Node.js 20+ (Next 16 ile uyumlu sürüm önerilir)
- MongoDB bağlantısı (Atlas veya kendi sunucunuz)
- İletişim formu için SMTP erişimi (ör. Gmail uygulama şifresi)

## Kurulum

```bash
git clone <depo-url>
cd sahdem
npm install
```

### Ortam değişkenleri

Proje kökünde `.env` dosyası oluşturun. Örnek:

```env
NODE_ENV=development
HOSTNAME=localhost
PORT=3000
NEXT_TELEMETRY_DISABLED=1

# MongoDB (Prisma)
DATABASE_URL="mongodb+srv://KULLANICI:SIFRE@CLUSTER.mongodb.net/VERITABANI_ADI?retryWrites=true&w=majority"

# SMTP — iletişim formu
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=465
EMAIL_USER=ornek@gmail.com
EMAIL_PASS=uygulama-sifresi
EMAIL_TO=alici@ornek.com
```

> **Not:** `EMAIL_PASS` için e-posta sağlayıcınızın önerdiği yöntemi kullanın (Gmail’de genellikle “uygulama şifresi”). Gerçek kimlik bilgilerini repoya eklemeyin.

### Veritabanı ve seed

```bash
npm run prisma:generate
npm run prisma:push
```

İçerikleri örnek verilerle doldurmak için:

```bash
npm run seed:all
```

Veya tek tek: `seed`, `seed:shortcuts`, `seed:features`, `seed:services`, `seed:values`, `seed:pageContent`, `seed:timeline`

## Geliştirme

```bash
npm run dev
```

Varsayılan adres: [http://localhost:3000](http://localhost:3000)

## Üretim

```bash
npm run build
npm run start
```

İsteğe bağlı olarak özel sunucu ile:

```bash
NODE_ENV=production node server.js
```

`server.js`, `HOSTNAME` ve `PORT` ortam değişkenlerini okur (belirtilmezse `localhost:3000`).

## Yararlı komutlar

| Komut | Açıklama |
|-------|----------|
| `npm run dev` | Geliştirme sunucusu |
| `npm run build` | Üretim derlemesi |
| `npm run start` | Üretim sunucusu (`next start`) |
| `npm run lint` | ESLint |
| `npm run prisma:generate` | Prisma istemcisini üret |
| `npm run prisma:push` | Şemayı veritabanına uygula |
| `npm run seed:all` | Tüm seed betiklerini sırayla çalıştır |

## Proje yapısı (özet)

- `app/` — Sayfalar, layout, API route’ları
- `app/generated/prisma` — Prisma istemci çıktısı (generate sonrası)
- `prisma/` — Şema ve seed betikleri
- `components/` — Ortak bileşenler (header, footer, tema vb.)
- `lib/` — Yardımcılar (ör. Prisma singleton)
- `server.js` — İsteğe bağlı özel HTTP sunucusu

## Lisans

Bu depo `private` olarak işaretlenmiştir; dağıtım ve kullanım kuralları proje sahibine aittir.
