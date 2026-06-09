export const SITE_URL = "https://onlinemuhasebe.org";
export const SITE_NAME = "Mali Müşavir Şahin Demir";
export const AUTHOR = "Şahin Demir";

export const DEFAULT_DESCRIPTION =
  "İstanbul merkezli Mali Müşavir Şahin Demir; muhasebe, vergi danışmanlığı ve mali müşavirlik hizmetleriyle işletmenizin yanında. Profesyonel destek için hemen iletişime geçin.";

export const KEYWORDS = [
  "mali müşavir",
  "muhasebe",
  "vergi danışmanlığı",
  "mali müşavirlik",
  "Şahin Demir",
  "İstanbul mali müşavir",
  "serbest muhasebeci",
  "muhasebe hizmetleri",
  "finansal danışmanlık",
];

export const OG_IMAGE = {
  url: "/images/sahdem.png",
  width: 1921,
  height: 911,
  alt: "Mali Müşavir Şahin Demir — Şahin Demir Mali Müşavirlik",
};

export function absoluteUrl(path = "") {
  return new URL(path, SITE_URL).toString();
}

export function createPageMetadata({
  title,
  description = DEFAULT_DESCRIPTION,
  path = "/",
  noIndex = false,
} = {}) {
  const url = absoluteUrl(path);
  const ogTitle = title ? `${title} | ${SITE_NAME}` : `${SITE_NAME} | İstanbul`;

  return {
    ...(title ? { title } : {}),
    description,
    keywords: KEYWORDS,
    authors: [{ name: AUTHOR, url: SITE_URL }],
    creator: AUTHOR,
    publisher: AUTHOR,
    alternates: {
      canonical: url,
    },
    robots: noIndex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
          },
        },
    openGraph: {
      title: ogTitle,
      description,
      url,
      siteName: SITE_NAME,
      locale: "tr_TR",
      type: "website",
      images: [OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description,
      images: [OG_IMAGE.url],
    },
  };
}

export const rootMetadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | İstanbul`,
    template: `%s | ${SITE_NAME}`,
  },
  description: DEFAULT_DESCRIPTION,
  keywords: KEYWORDS,
  authors: [{ name: AUTHOR, url: SITE_URL }],
  creator: AUTHOR,
  publisher: AUTHOR,
  applicationName: SITE_NAME,
  category: "finance",
  alternates: {
    canonical: SITE_URL,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: `${SITE_NAME} | İstanbul`,
    description: DEFAULT_DESCRIPTION,
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: "tr_TR",
    type: "website",
    images: [OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} | İstanbul`,
    description: DEFAULT_DESCRIPTION,
    images: [OG_IMAGE.url],
  },
  icons: {
    icon: "/images/turmob.png",
    apple: "/images/turmob.png",
  },
  other: {
    "geo.region": "TR-34",
    "geo.placename": "İstanbul",
  },
};

export function getOrganizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "AccountingService",
        "@id": `${SITE_URL}/#organization`,
        name: SITE_NAME,
        url: SITE_URL,
        image: absoluteUrl(OG_IMAGE.url),
        description: DEFAULT_DESCRIPTION,
        founder: {
          "@type": "Person",
          name: AUTHOR,
        },
        address: {
          "@type": "PostalAddress",
          addressLocality: "İstanbul",
          addressCountry: "TR",
        },
        telephone: "+902163307770",
        email: "sahin@onlinemuhasebe.org",
        areaServed: {
          "@type": "Country",
          name: "Türkiye",
        },
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: SITE_NAME,
        description: DEFAULT_DESCRIPTION,
        inLanguage: "tr-TR",
        publisher: { "@id": `${SITE_URL}/#organization` },
      },
    ],
  };
}
