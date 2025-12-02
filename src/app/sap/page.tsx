import type { Metadata } from "next";
import StructuredData from "../components/Seo/StructuredData";
import Herosection from "../components/sappage/Herosection";
import Content from "../components/sappage/Content";

const weburl = process.env.NEXT_PUBLIC_webUrl!;

// ✅ PAGE METADATA
export const metadata: Metadata = {
  title: "Softworks Technologies | SAP Implementation & Development Company in Coimbatore",
  description:
    "Softworks Technologies provides professional SAP implementation, customization, and integration services in Coimbatore to help businesses automate and scale efficiently.",
  keywords: [
    "SAP Implementation Company in Coimbatore",
    "SAP Development Services",
    "SAP Integration Experts",
    "SAP Consulting Coimbatore",
    "SAP ERP Solutions India",
    "SAP Customization Services",
    "Enterprise Software Solutions Coimbatore",
    "Business Automation using SAP",
  ],
  openGraph: {
    type: "website",
    url: `${weburl}/sap`,
    title:
      "Softworks Technologies | SAP Implementation & Development Company in Coimbatore",
    description:
      "Softworks Technologies offers end-to-end SAP development, integration, and consulting services for enterprises of all sizes.",
    siteName: "Softworks Technologies",
    images: [
      {
        url: `${weburl}/assets/Sfw-Logo1.svg`,
        width: 1200,
        height: 630,
        alt: "Softworks Technologies SAP Development",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@softworkstech",
    creator: "@softworkstech",
    title:
      "Softworks Technologies | SAP Implementation & Development Company in Coimbatore",
    description:
      "We provide complete SAP ERP consulting, customization, and support services to streamline your business processes.",
    images: [`${weburl}/assets/Sfw-Logo1.svg`],
  },
  alternates: {
    canonical: `${weburl}/sap`,
  },
  metadataBase: new URL(weburl),
};

// ✅ PAGE COMPONENT
export default function SAPPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      // 1️ Website Schema
      {
        "@type": "WebSite",
        "@id": `${weburl}/#website`,
        url: weburl,
        name: "Softworks Technologies",
        publisher: { "@id": `${weburl}/#organization` },
        inLanguage: "en",
      },

      // 2️ Organization Schema
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
          "Softworks Technologies offers SAP consulting, customization, and integration services in Coimbatore for enterprises seeking scalable ERP solutions.",
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
            name: "SAP Development",
            item: `${weburl}/sap`,
          },
        ],
      },

      // 5️⃣ WebPage Schema
      {
        "@type": "WebPage",
        "@id": `${weburl}/sap/#webpage`,
        url: `${weburl}/sap`,
        name: "SAP Implementation & Development Company in Coimbatore | Softworks Technologies",
        description:
          "Softworks Technologies provides high-quality SAP implementation, customization, and support services to optimize and automate business processes.",
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
      <Content />
    </>
  );
}
