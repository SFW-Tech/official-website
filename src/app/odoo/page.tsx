import type { Metadata } from "next";
import StructuredData from "../components/Seo/StructuredData";
import Herosection from "../components/odoopage/Herosection";
import Introduction from "../components/odoopage/Introduction";
import OurIndustryservice from "../components/odoopage/OurIndustryservice";

const weburl = process.env.NEXT_PUBLIC_webUrl!;

// ✅ PAGE METADATA
export const metadata: Metadata = {
  title: "Odoo ERP Development Company in Coimbatore",
  description:
    "Softworks Technologies is a leading Odoo ERP development company in Coimbatore providing customized Odoo implementation, integration, and support services for businesses of all sizes.",
  keywords: [
    "Odoo ERP Development Company in Coimbatore",
    "Odoo Implementation Coimbatore",
    "Odoo Customization Services",
    "Odoo Integration Experts",
    "ERP Software Development Coimbatore",
    "Odoo Module Development",
    "Odoo Support and Maintenance",
    "Business Automation using Odoo",
    "Odoo ERP Solutions India",
    "Softworks Technologies Odoo Development",
  ],
  openGraph: {
    type: "website",
    url: `${weburl}/odoo`,
    title: "Softworks Technologies | Odoo ERP Development Company in Coimbatore",
    description:
      "Softworks Technologies offers professional Odoo ERP development, customization, and integration solutions to streamline your business operations.",
    siteName: "Softworks Technologies",
    images: [
      {
        url: `${weburl}/assets/Sfw-Logo1.svg`,
        width: 1200,
        height: 630,
        alt: "Softworks Technologies Odoo ERP Development",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@softworkstech",
    creator: "@softworkstech",
    title: "Softworks Technologies | Odoo ERP Development Company in Coimbatore",
    description:
      "Softworks Technologies delivers end-to-end Odoo ERP implementation, integration, and customization services for efficient business management.",
    images: [`${weburl}/assets/Sfw-Logo1.svg`],
  },
};

// ✅ PAGE COMPONENT
export default function OdooPage() {
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
          "Softworks Technologies provides Odoo ERP development and integration services in Coimbatore for small, medium, and large-scale enterprises.",
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
            name: "Odoo ERP Development",
            item: `${weburl}/odoo`,
          },
        ],
      },

      // 5️⃣ WebPage Schema
      {
        "@type": "WebPage",
        "@id": `${weburl}/odoo/#webpage`,
        url: `${weburl}/odoo`,
        name: "Odoo ERP Development Company in Coimbatore | Softworks Technologies",
        description:
          "Softworks Technologies offers complete Odoo ERP solutions including customization, integration, and support to enhance your business performance.",
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
      <Introduction />
      <OurIndustryservice />
    </>
  );
}
