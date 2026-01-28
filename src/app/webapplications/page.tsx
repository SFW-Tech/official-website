import type { Metadata } from "next";
import StructuredData from "../components/Seo/StructuredData";
import Herosection from "../components/Webapplicationpage/Herosection";
import Applicationtypessection from "../components/Webapplicationpage/Applicationtypessection";
import Ourprocesssection from "../components/Webapplicationpage/Ourprocesssection";

const weburl = process.env.NEXT_PUBLIC_webUrl!;

// ✅ PAGE METADATA
export const metadata: Metadata = {
  title: "Web Application Development",
  description:
    "Softworks Technologies offers high-performance, secure, and scalable web application development services using Next.js, React, Node.js, and MongoDB for businesses worldwide.",
  keywords: [
    "Web Application Development",
    "Custom Web App Development",
    "Full Stack Web Development",
    "Next.js Web App Company",
    "React.js Developers Coimbatore",
    "Enterprise Web Solutions",
    "Web App Developers in Coimbatore",
    "Best Web Development Company India",
    "Business Web Application Development",
    "Cloud-Based Web Applications",
    "Progressive Web Apps",
    "MERN Stack Web Development",
    "Corporate Web Portals",
  ],
  openGraph: {
    type: "website",
    url: `${weburl}/webapplications`,
    title: "Web Application Development | SFW",
    description:
      "We build responsive, scalable, and high-quality web applications with the latest technologies like React, Next.js, and Node.js.",
    siteName: "Softworks Technologies",
    images: [
      {
        url: `${weburl}/assets/Sfw-Logo1.svg`,
        width: 1200,
        height: 630,
        alt: "Softworks Technologies Web Application Development",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@softworkstech",
    creator: "@softworkstech",
    title: "Web Application Development | SFW",
    description:
      "Softworks Technologies creates robust and scalable web applications for global businesses using the latest tech stacks.",
    images: [`${weburl}/assets/Sfw-Logo1.svg`],
  },
};

// ✅ PAGE COMPONENT
export default function WebApplicationPage() {
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
          "Softworks Technologies provides expert web application development services for businesses worldwide.",
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
            name: "Web Application",
            item: `${weburl}/webapplications`,
          },
        ],
      },

      // 5️⃣ WebPage Schema
      {
        "@type": "WebPage",
        "@id": `${weburl}/webapplications/#webpage`,
        url: `${weburl}/webapplications`,
        name: "Web Application Development | Softworks Technologies",
        description:
          "Softworks Technologies develops high-quality, scalable, and secure web applications using modern frameworks and cloud integration.",
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
      <Applicationtypessection />
      <Ourprocesssection />
    </>
  );
}
