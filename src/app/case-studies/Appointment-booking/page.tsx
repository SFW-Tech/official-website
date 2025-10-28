import type { Metadata } from "next";
import StructuredData from "../../components/Seo/StructuredData";
import Herosection from "@/app/components/Casestudies/Appointment-booking/Herosection";
import Content from "@/app/components/Casestudies/Appointment-booking/Content";

const weburl = process.env.NEXT_PUBLIC_webUrl!;

export const metadata: Metadata = {
  title: "Softworks Technologies | Appointment Booking System Case Study",
  description:
    "Explore how Softworks Technologies developed an efficient Appointment Booking System that simplified scheduling, automated reminders, and improved client satisfaction.",
  keywords: [
    "Appointment Booking System case study",
    "online scheduling system",
    "automated booking platform",
    "Softworks Technologies case study",
    "appointment management software",
  ],
  openGraph: {
    type: "article",
    url: `${weburl}/case-studies/Appointment-booking`,
    title: "Softworks Technologies | Appointment Booking System Case Study",
    description:
      "Discover how Softworks Technologies designed a powerful Appointment Booking System that streamlined scheduling and enhanced customer experience.",
    siteName: "Softworks Technologies",
    images: [
      {
        url: `${weburl}/assets/Casestudies/Appointment-booking.png`,
        width: 1200,
        height: 630,
        alt: "Appointment Booking System Case Study - Softworks Technologies",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@softworkstech",
    creator: "@softworkstech",
    title: "Appointment Booking System Case Study | Softworks Technologies",
    description:
      "Learn how Softworks Technologies built a robust Appointment Booking System that improved scheduling efficiency and reduced manual tasks.",
    images: [`${weburl}/assets/Casestudies/Appointment-Booking.png`],
  },
  alternates: {
    canonical: `${weburl}/case-studies/Appointment-booking`,
  },
  metadataBase: new URL(weburl),
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${weburl}/#website`,
        url: weburl,
        name: "Softworks Technologies",
        description:
          "Softworks Technologies — a global IT company delivering web, ERP, Odoo, AI and cloud solutions from Coimbatore and Dubai.",
        publisher: { "@id": `${weburl}/#organization` },
        inLanguage: "en",
        potentialAction: {
          "@type": "SearchAction",
          target: `${weburl}/?s={search_term_string}`,
          "query-input": "required name=search_term_string",
        },
      },
      {
        "@type": "Organization",
        "@id": `${weburl}/#organization`,
        name: "Softworks Technologies",
        legalName: "Softworks Technologies Pvt. Ltd.",
        url: weburl,
        logo: `${weburl}/assets/Sfw-Logo1.svg`,
        foundingDate: "2019",
        description:
          "Softworks Technologies provides web, mobile, ERP, Odoo, AI and cloud software solutions for businesses worldwide.",
        sameAs: [
          "https://www.facebook.com/softworkstech19",
          "https://www.linkedin.com/company/softworks-technologies",
          "https://www.instagram.com/softworkstech19/",
          "https://x.com/softworkstech",
         
        ],
        contactPoint: [
          {
            "@type": "ContactPoint",
            contactType: "Customer Support",
            email: "info@sfwtechnologies.com",
            telephone: "+91-9894113103",
            areaServed: { "@type": "Place", name: "Worldwide" },
            availableLanguage: ["English"],
          },
        ],
        address: [
          {
            "@type": "PostalAddress",
            streetAddress:
              "7/2A, Shreesha Building, First Floor, Central Studio Road, Dhanalakshmi Puram South, Singanallur",
            addressLocality: "Coimbatore",
            addressRegion: "Tamil Nadu",
            postalCode: "641005",
            addressCountry: "IN",
          },
        ],
      },
      {
        "@type": "LocalBusiness",
        "@id": `${weburl}/#localbusiness`,
        name: "Softworks Technologies",
        image: `${weburl}/assets/Sfw-Logo1.svg`,
        url: weburl,
        telephone: "+91-9894113103",
        priceRange: "$$",
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
        openingHours: "Mo-Fr 09:30-18:30",
        sameAs: [
          "https://www.facebook.com/softworkstech19",
          "https://www.linkedin.com/company/softworks-technologies",
          "https://www.instagram.com/softworkstech19/",
          "https://x.com/softworkstech",
        ],
        description:
          "Top IT company in Coimbatore offering Web, ERP, Odoo, AI, SAP and Cloud solutions.",
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${weburl}/case-studies/Appointment-booking/#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: weburl },
          {
            "@type": "ListItem",
            position: 2,
            name: "Case Studies",
            item: `${weburl}/case-studies`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Appointment Booking System",
            item: `${weburl}/case-studies/Appointment-booking`,
          },
        ],
      },
      {
        "@type": "WebPage",
        "@id": `${weburl}/case-studies/Appointment-booking/#webpage`,
        url: `${weburl}/case-studies/Appointment-booking`,
        name: "Appointment Booking System Case Study | Softworks Technologies",
        description:
          "Case study: Softworks Technologies created an Appointment Booking System to simplify scheduling, automate tasks, and improve business efficiency.",
        inLanguage: "en",
        isPartOf: { "@id": `${weburl}/#website` },
        about: { "@id": `${weburl}/#organization` },
      },
      {
        "@type": "Article",
        "@id": `${weburl}/case-studies/Appointment-booking/#article`,
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": `${weburl}/case-studies/Appointment-booking`,
        },
        headline:
          "Appointment Booking System Case Study | Softworks Technologies",
        description:
          "Discover how Softworks Technologies developed a high-performance Appointment Booking System to optimize scheduling and automate reminders.",
        image: `${weburl}/assets/Casestudies/Appointment-Booking.png`,
        author: {
          "@type": "Organization",
          name: "Softworks Technologies",
          url: weburl,
        },
        publisher: {
          "@type": "Organization",
          name: "Softworks Technologies",
          logo: { "@type": "ImageObject", url: `${weburl}/assets/Sfw-Logo1.svg` },
        },
        datePublished: "2024-11-05",
        dateModified: "2024-11-05",
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
