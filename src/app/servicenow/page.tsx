import type { Metadata } from "next";
import StructuredData from "../components/Seo/StructuredData";
import Herosection from "../components/Servicenowpage/Herosection";
import Contentsection from "../components/Servicenowpage/Contentsection";

const weburl = process.env.NEXT_PUBLIC_webUrl!;

// ✅ PAGE METADATA
export const metadata: Metadata = {
  title: "ServiceNow Development Company in Coimbatore",
  description:
    "Softworks Technologies is a leading ServiceNow development company in Coimbatore offering ServiceNow implementation, integration, and workflow automation solutions for enterprises.",
  keywords: [
    "ServiceNow Development Company in Coimbatore",
    "ServiceNow Implementation Coimbatore",
    "ServiceNow Integration Services",
    "ITSM Automation Experts",
    "ServiceNow Consulting India",
    "Workflow Automation with ServiceNow",
    "ServiceNow Custom Application Development",
    "Softworks Technologies ServiceNow Solutions",
    "Enterprise IT Service Management Coimbatore",
    "Best ServiceNow Partner India",
  ],
  openGraph: {
    type: "website",
    url: `${weburl}/servicenow`,
    title: "ServiceNow Development Company | SFW",
    description:
      "Softworks Technologies provides ServiceNow implementation, automation, and integration services to enhance enterprise workflow efficiency.",
    siteName: "Softworks Technologies",
    images: [
      {
        url: `${weburl}/assets/Sfw-Logo1.svg`,
        width: 1200,
        height: 630,
        alt: "Softworks Technologies ServiceNow Development",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@softworkstech",
    creator: "@softworkstech",
    title: "ServiceNow Development Company | SFW",
    description:
      "Softworks Technologies delivers customized ServiceNow development and automation solutions for modern enterprises.",
    images: [`${weburl}/assets/Sfw-Logo1.svg`],
  },
};

// ✅ PAGE COMPONENT
export default function ServiceNowPage() {
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
          "Softworks Technologies provides ServiceNow development, automation, and integration services in Coimbatore for enterprises and IT organizations.",
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
            name: "ServiceNow Development",
            item: `${weburl}/servicenow`,
          },
        ],
      },

      // 5️⃣ WebPage Schema
      {
        "@type": "WebPage",
        "@id": `${weburl}/servicenow/#webpage`,
        url: `${weburl}/servicenow`,
        name: "ServiceNow Development Company in Coimbatore | Softworks Technologies",
        description:
          "Softworks Technologies offers end-to-end ServiceNow development, workflow automation, and integration services to streamline IT operations for global enterprises.",
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
      <Contentsection />
    </>
  );
}
