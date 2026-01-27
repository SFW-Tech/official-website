import type { Metadata } from "next";
import StructuredData from "../components/Seo/StructuredData";
import Herosection from "../components/Contactpage/Herosection";
import Contactussection from "../components/Contactpage/Contactussection";
import Map from "../components/Contactpage/Map";
import Footer from "../components/HomePage/Footer";

const weburl = process.env.NEXT_PUBLIC_webUrl!;

export const metadata: Metadata = {
  title: "Contact Us – Coimbatore & Dubai Offices",
  description:
    "Get in touch with Softworks Technologies — leading IT company in Coimbatore and Dubai specializing in Web, ERP, Odoo, AI, and Cloud development solutions.",
  keywords: [
    "Softworks Technologies Contact",
    "Softworks Technologies Coimbatore",
    "Softworks Technologies Dubai",
    "IT Company Coimbatore Contact",
    "Best Software Company in Coimbatore",
    "ERP Development Company Coimbatore",
    "Odoo Developers in Coimbatore",
    "AI Company in Coimbatore",
    "Web Development Company Coimbatore",
    "Softworks Technologies Phone Number",
    "Softworks Technologies Address",
    "IT Services Coimbatore",
    "Custom Software Solutions Coimbatore",
    "Softworks Technologies Email",
    "Contact Softworks Technologies",
    "Web, ERP, Odoo & AI Company Coimbatore",
    "Top IT Companies in Coimbatore",
    "Softworks Technologies Support",
    "Software Company Near Me",
    "Softworks Technologies Location"
  ],

  openGraph: {
    type: "website",
    url: `${weburl}/contact`,
    title: "Softworks Technologies | Contact Us – Coimbatore & Dubai Offices",
    description:
      "Reach out to Softworks Technologies for IT, ERP, Odoo, and AI solutions in Coimbatore & Dubai. Visit our offices or send us a message online.",
    siteName: "Softworks Technologies",
    images: [
      {
        url: `${weburl}/assets/Sfw-Logo1.svg`,
        width: 1200,
        height: 630,
        alt: "Softworks Technologies Contact Page",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@softworkstech",
    creator: "@softworkstech",
    title: "Softworks Technologies | Contact Us – Coimbatore & Dubai Offices",
    description:
      "Reach out to Softworks Technologies for IT, ERP, Odoo, and AI solutions in Coimbatore & Dubai. Visit our offices or send us a message online.",
    images: [`${weburl}/assets/Sfw-Logo1.svg`],
  },
};

export default function ContactPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      // 1️⃣ WebPage Schema
      {
        "@type": "WebPage",
        "@id": `${weburl}/contact/#webpage`,
        url: `${weburl}/contact`,
        name: "Contact Softworks Technologies | Coimbatore & Dubai Offices",
        description:
          "Contact Softworks Technologies — your trusted IT company in Coimbatore and Dubai specializing in Web, ERP, Odoo, AI, and Cloud Solutions.",
        inLanguage: "en",
        isPartOf: { "@id": `${weburl}/#website` },
        about: { "@id": `${weburl}/#organization` },
      },

      // 2️⃣ Breadcrumb Schema
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: `${weburl}`,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Contact Us",
            item: `${weburl}/contact`,
          },
        ],
      },

      // 3️⃣ LocalBusiness Schema (for Google Map + Knowledge Panel)
      {
        "@type": "LocalBusiness",
        "@id": `${weburl}/#localbusiness`,
        name: "Softworks Technologies",
        image: `${weburl}/assets/Sfw-Logo1.svg`,
        url: weburl,
        telephone: "+91 9894113103",
        email: "info@sfwtechnologies.com",
        priceRange: "$$",
        address: {
          "@type": "PostalAddress",
          streetAddress: "7/2A, Shreesha Building, First Floor, Central Studio Road, Dhanalakshmi Puram South, Singanallur",
          addressLocality: "Coimbatore",
          addressRegion: "Tamil Nadu",
          postalCode: "641005",
          addressCountry: "IN",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 10.9927472,
          longitude: 77.0121149,
        },
        openingHours: "Mo-Fr 09:30-18:30",
        sameAs: [
          "https://www.facebook.com/softworkstech19",
          "https://www.linkedin.com/company/softworks-technologies",
          "https://www.instagram.com/softworkstech19/",
          "https://x.com/softworkstech",
        ],
      },

      // 4️⃣ Organization Reference
      {
        "@type": "Organization",
        "@id": `${weburl}/#organization`,
        name: "Softworks Technologies",
        url: weburl,
        logo: `${weburl}/assets/Sfw-Logo1.svg`,
        sameAs: [
          "https://www.facebook.com/softworkstech19",
          "https://www.linkedin.com/company/softworks-technologies",
          "https://www.instagram.com/softworkstech19/",
          "https://x.com/softworkstech",
        ],
      },
    ],
  };

  return (
    <>
      <StructuredData data={jsonLd} />
      <Herosection />
      <Contactussection />
      <Map />

    </>
  );
}
