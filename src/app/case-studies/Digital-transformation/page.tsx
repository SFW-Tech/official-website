import type { Metadata } from "next";
import StructuredData from "../../components/Seo/StructuredData";
import Herosection from "@/app/components/Casestudies/Digital-transformation-page/Herosection";
import Content from "@/app/components/Casestudies/Digital-transformation-page/Content";

const weburl = process.env.NEXT_PUBLIC_webUrl!;

export const metadata: Metadata = {
  title: "Digital Transformation Case Study",
  description:
    "Discover how Softworks Technologies helped a client achieve complete digital transformation — modernizing processes, automating workflows, and boosting overall business efficiency.",
  keywords: [
    "Digital Transformation case study",
    "business process automation",
    "enterprise modernization",
    "Softworks Technologies case study",
    "digital strategy success story",
  ],
  openGraph: {
    type: "article",
    url: `${weburl}/case-studies/Digital-transformation`,
    title: "Softworks Technologies | Digital Transformation Case Study",
    description:
      "Learn how Softworks Technologies delivered a successful digital transformation by integrating modern tools and automating legacy systems.",
    siteName: "Softworks Technologies",
    images: [
      {
        url: `${weburl}/assets/Casestudies/Digital-Transformation.png`,
        width: 1200,
        height: 630,
        alt: "Digital Transformation Case Study - Softworks Technologies",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@softworkstech",
    creator: "@softworkstech",
    title: "Digital Transformation Case Study | Softworks Technologies",
    description:
      "Explore how Softworks Technologies led a client's digital transformation journey — from automation to innovation.",
    images: [`${weburl}/assets/Casestudies/Digital-Transformation.png`],
  },
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
        "@id": `${weburl}/case-studies/Digital-transformation/#breadcrumb`,
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
            name: "Digital Transformation",
            item: `${weburl}/case-studies/Digital-transformation`,
          },
        ],
      },
      {
        "@type": "WebPage",
        "@id": `${weburl}/case-studies/Digital-transformation/#webpage`,
        url: `${weburl}/case-studies/Digital-transformation`,
        name: "Digital Transformation Case Study | Softworks Technologies",
        description:
          "Case study: Softworks Technologies enabled complete digital transformation by integrating AI, automation, and data-driven tools.",
        inLanguage: "en",
        isPartOf: { "@id": `${weburl}/#website` },
        about: { "@id": `${weburl}/#organization` },
      },
      {
        "@type": "Article",
        "@id": `${weburl}/case-studies/Digital-transformation/#article`,
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": `${weburl}/case-studies/Digital-transformation`,
        },
        headline: "Digital Transformation Case Study | Softworks Technologies",
        description:
          "Discover how Softworks Technologies guided a client through a successful digital transformation — upgrading systems, automating operations, and increasing ROI.",
        image: `${weburl}/assets/Casestudies/Digital-Transformation.png`,
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
        datePublished: "2024-12-01",
        dateModified: "2024-12-01",
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
