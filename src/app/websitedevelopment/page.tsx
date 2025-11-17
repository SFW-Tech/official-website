import type { Metadata } from "next";
import StructuredData from "../components/Seo/StructuredData";
import Herosection from "../components/Websitedevelopmentpage/Herosection";
import Websitesolutions from "../components/Websitedevelopmentpage/Websitesolutions";
import Expertcustomwebsite from "../components/Websitedevelopmentpage/Expertcustomwebsite";
import Whychooseus from "../components/Websitedevelopmentpage/Whychooseus";
import Whatwedo from "../components/Websitedevelopmentpage/Whatwedo";


const weburl = process.env.NEXT_PUBLIC_webUrl!;

// ✅ PAGE METADATA
export const metadata: Metadata = {
  title: "Softworks Technologies | Website Development Company in Coimbatore",
  description:
    "Softworks Technologies provides custom website development services in Coimbatore. We build responsive, SEO-friendly, and high-performance websites using Next.js, React, and Node.js.",
  keywords: [
    "Website Development",
    "Web Design Company Coimbatore",
    "Responsive Web Development",
    "Custom Website Development",
    "Corporate Website Design",
    "E-commerce Website Development",
    "Next.js Website Development",
    "React.js Web Development",
    "Website Developers in Coimbatore",
    "Professional Web Design Company",
    "Softworks Technologies Website Development",
    "Best Website Development Company in India",
  ],
  openGraph: {
    type: "website",
    url: `${weburl}/websitedevelopment`,
    title: "Softworks Technologies | Website Development Company in Coimbatore",
    description:
      "Softworks Technologies builds professional, SEO-optimized, and mobile-friendly websites tailored for your business growth.",
    siteName: "Softworks Technologies",
    images: [
      {
        url: `${weburl}/assets/Logo1.png`,
        width: 1200,
        height: 630,
        alt: "Softworks Technologies Website Development",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@softworkstech",
    creator: "@softworkstech",
    title:
      "Softworks Technologies | Website Development Company in Coimbatore",
    description:
      "We specialize in building SEO-friendly, responsive, and scalable websites for businesses using React, Next.js, and Node.js.",
    images: [`${weburl}/assets/Logo1.png`],
  },
  alternates: {
    canonical: `${weburl}/websitedevelopment`,
  },
  metadataBase: new URL(weburl),
};

// ✅ PAGE COMPONENT
export default function WebsiteDevelopmentPage() {
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
          "Softworks Technologies is a top-rated website development company in Coimbatore offering SEO-friendly and responsive web solutions.",
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
            name: "Website Development",
            item: `${weburl}/websitedevelopment`,
          },
        ],
      },

      // 5️⃣ WebPage Schema
      {
        "@type": "WebPage",
        "@id": `${weburl}/websitedevelopment/#webpage`,
        url: `${weburl}/websitedevelopment`,
        name: "Website Development Company in Coimbatore | Softworks Technologies",
        description:
          "Softworks Technologies builds stunning, fast-loading, and SEO-optimized websites using React.js, Next.js, and Node.js tailored to your business goals.",
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
      <Websitesolutions />
      <Expertcustomwebsite />
      <Whychooseus />
      <Whatwedo />
      {/* <Technocarousel /> */}
    </>
  );
}
