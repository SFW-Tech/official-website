import type { Metadata } from "next";
import StructuredData from "../components/Seo/StructuredData";
import Herosection from "../components/mobiledevelopmentpage/Herosection";
import Businessbenefits from "../components/mobiledevelopmentpage/Businessbenefits";
import Applicationtypessection from "../components/mobiledevelopmentpage/Applicationtypessection";

const weburl = process.env.NEXT_PUBLIC_webUrl!;

// ✅ PAGE METADATA
export const metadata: Metadata = {
  title: "Softworks Technologies | Mobile App Development Company in Coimbatore",
  description:
    "Softworks Technologies offers custom mobile app development services in Coimbatore. We build Android, iOS, and cross-platform apps with React Native and Flutter for businesses worldwide.",
  keywords: [
    "Mobile App Development",
    "Android App Development",
    "iOS App Development",
    "Cross Platform App Development",
    "React Native Developers Coimbatore",
    "Flutter App Development",
    "Mobile App Development Company in Coimbatore",
    "Custom Mobile App Solutions",
    "Best App Developers India",
    "Enterprise Mobile Apps",
    "App Development Services",
    "Softworks Technologies Mobile App Development",
  ],
  openGraph: {
    type: "website",
    url: `${weburl}/mobileapplications`,
    title: "Softworks Technologies | Mobile App Development Company in Coimbatore",
    description:
      "Softworks Technologies specializes in mobile app development for Android, iOS, and cross-platform solutions using React Native and Flutter.",
    siteName: "Softworks Technologies",
    images: [
      {
        url: `${weburl}/assets/Sfw-Logo1.svg`,
        width: 1200,
        height: 630,
        alt: "Softworks Technologies Mobile App Development",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@softworkstech",
    creator: "@softworkstech",
    title:
      "Softworks Technologies | Mobile App Development Company in Coimbatore",
    description:
      "Build powerful Android, iOS, and cross-platform mobile apps with Softworks Technologies — trusted app development company in Coimbatore.",
    images: [`${weburl}/assets/Sfw-Logo1.svg`],
  },
  alternates: {
    canonical: `${weburl}/mobileapplications`,
  },
  metadataBase: new URL(weburl),
};

// ✅ PAGE COMPONENT
export default function MobileDevelopmentPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      // 1️⃣ Website Schema
      {
        "@type": "WebSite",
        "@id": `${weburl}/#website`,
        url: weburl,
        name: "Softworks Technologies",
        publisher: { "@id": `${weburl}/#organization` },
        inLanguage: "en",
      },

      // 2️⃣ Organization Schema
      {
        "@type": "Organization",
        "@id": `${weburl}/#organization`,
        name: "Softworks Technologies",
        legalName: "Softworks Technologies Pvt. Ltd.",
        url: weburl,
        logo: `${weburl}/assets/Sfw-Logo1.svg`,
        sameAs: [
          "https://www.facebook.com/softworkstech19",
          "https://www.linkedin.com/company/softworks-technologies",
          "https://www.instagram.com/softworkstech19/",
          "https://x.com/softworkstech",
        ],
      },

      // 3️⃣ LocalBusiness Schema
      {
        "@type": "LocalBusiness",
        "@id": `${weburl}/#localbusiness`,
        name: "Softworks Technologies",
        image: `${weburl}/assets/Sfw-Logo1.svg`,
        url: weburl,
        telephone: "+91-9894113103",
        address: {
          "@type": "PostalAddress",
          streetAddress:
            "7/2A, Shreesha Building, First Floor, Central Studio Road, Dhanalakshmi Puram South, Singanallur",
          addressLocality: "Coimbatore",
          addressRegion: "Tamil Nadu",
          postalCode: "641005",
          addressCountry: "IN",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: "10.9927472",
          longitude: "77.0121149",
        },
        description:
          "Softworks Technologies is a professional mobile app development company in Coimbatore specializing in Android, iOS, and cross-platform app development.",
      },

      // 4️⃣ Breadcrumb Schema
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: weburl,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Mobile App Development",
            item: `${weburl}/mobileapplications`,
          },
        ],
      },

      // 5️⃣ WebPage Schema
      {
        "@type": "WebPage",
        "@id": `${weburl}/mobileapplications/#webpage`,
        url: `${weburl}/mobileapplications`,
        name: "Mobile App Development Company in Coimbatore | Softworks Technologies",
        description:
          "Softworks Technologies develops secure, feature-rich, and high-performance mobile applications using React Native, Flutter, and native Android/iOS frameworks.",
        inLanguage: "en",
        image: `${weburl}/assets/Sfw-Logo1.svg`,
        isPartOf: { "@id": `${weburl}/#website` },
        about: { "@id": `${weburl}/#organization` },
      },
    ],
  };

  return (
    <>
      <StructuredData data={jsonLd} />

      <Herosection />
      <Businessbenefits />
      <Applicationtypessection />
    </>
  );
}
