import type { Metadata } from "next";
import StructuredData from "../components/Seo/StructuredData";
import Herosection from "../components/Aipage/Herosection";
import Content from "../components/Aipage/Content";

const weburl = process.env.NEXT_PUBLIC_webUrl!;

// ✅ PAGE METADATA
export const metadata: Metadata = {
  title: "AI Development Coimbatore",
  description:
    "Softworks Technologies is a leading AI development company in Coimbatore offering AI-powered solutions, machine learning models, chatbots, automation, and predictive analytics for businesses.",
  keywords: [
    "AI Development Company in Coimbatore",
    "Artificial Intelligence Solutions",
    "Machine Learning Development",
    "AI Chatbot Development",
    "AI Automation Services",
    "Predictive Analytics Development",
    "Custom AI Solutions",
    "Deep Learning Applications",
    "AI Software Development",
    "Softworks Technologies AI Development",
    "AI Company in India",
  ],
  openGraph: {
    type: "website",
    url: `${weburl}/ai`,
    title: "AI Development Company | SFW",
    description:
      "Softworks Technologies delivers intelligent AI and machine learning solutions that automate business processes and enhance decision-making.",
    siteName: "Softworks Technologies",
    images: [
      {
        url: `${weburl}/assets/Sfw-Logo1.svg`,
        width: 1200,
        height: 630,
        alt: "Softworks Technologies AI Development",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@softworkstech",
    creator: "@softworkstech",
    title: "AI Development Company | SFW",
    description:
      "Softworks Technologies creates AI-driven business solutions including chatbots, ML models, and predictive analytics tools.",
    images: [`${weburl}/assets/Sfw-Logo1.svg`],
  },
};

// ✅ PAGE COMPONENT
export default function AIDevelopmentPage() {
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
          "Softworks Technologies provides AI and machine learning development in Coimbatore to automate workflows and boost productivity.",
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
            name: "AI Development",
            item: `${weburl}/ai`,
          },
        ],
      },

      // 5️⃣ WebPage Schema
      {
        "@type": "WebPage",
        "@id": `${weburl}/ai/#webpage`,
        url: `${weburl}/ai`,
        name: "AI Development Company in Coimbatore | Softworks Technologies",
        description:
          "Softworks Technologies offers custom AI development services including automation tools, machine learning models, chatbots, and data-driven insights.",
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
