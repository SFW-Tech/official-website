import type { Metadata } from "next";
import StructuredData from "../../components/Seo/StructuredData";
import Herosection from "@/app/components/Casestudies/Code-ninja/Herosection";
import Content from "@/app/components/Casestudies/Code-ninja/Content";

const weburl = process.env.NEXT_PUBLIC_webUrl!;

export const metadata: Metadata = {
  title: "Softworks Technologies | Code Ninja Case Study",
  description:
    "Learn how Softworks Technologies built Code Ninja — an interactive coding platform designed to enhance learning, automate challenges, and improve developer engagement.",
  keywords: [
    "Code Ninja case study",
    "interactive coding platform",
    "e-learning development case study",
    "Softworks Technologies projects",
    "education technology software",
  ],
  openGraph: {
    type: "article",
    url: `${weburl}/case-studies/Code-ninja`,
    title: "Softworks Technologies | Code Ninja Case Study",
    description:
      "Discover how Softworks Technologies developed Code Ninja — a powerful coding platform for interactive learning and skill enhancement.",
    siteName: "Softworks Technologies",
    images: [
      {
        url: `${weburl}/assets/Casestudies/Code-Ninja.png`,
        width: 1200,
        height: 630,
        alt: "Code Ninja Case Study - Softworks Technologies",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@softworkstech",
    creator: "@softworkstech",
    title: "Code Ninja Case Study | Softworks Technologies",
    description:
      "Learn how Softworks Technologies designed Code Ninja — an advanced coding learning platform that empowers developers and students.",
    images: [`${weburl}/assets/Casestudies/Code-Ninja.png`],
  },
  alternates: {
    canonical: `${weburl}/case-studies/Code-ninja`,
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
        "@id": `${weburl}/case-studies/Code-ninja/#breadcrumb`,
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
            name: "Code Ninja",
            item: `${weburl}/case-studies/Code-ninja`,
          },
        ],
      },
      {
        "@type": "WebPage",
        "@id": `${weburl}/case-studies/Code-ninja/#webpage`,
        url: `${weburl}/case-studies/Code-ninja`,
        name: "Code Ninja Case Study | Softworks Technologies",
        description:
          "Case study: Softworks Technologies developed Code Ninja — a coding platform that provides interactive challenges and learning features for developers.",
        inLanguage: "en",
        isPartOf: { "@id": `${weburl}/#website` },
        about: { "@id": `${weburl}/#organization` },
      },
      {
        "@type": "Article",
        "@id": `${weburl}/case-studies/Code-ninja/#article`,
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": `${weburl}/case-studies/Code-ninja`,
        },
        headline: "Code Ninja Case Study | Softworks Technologies",
        description:
          "Discover how Softworks Technologies created Code Ninja — an advanced e-learning platform designed for coding challenges, collaboration, and performance tracking.",
        image: `${weburl}/assets/Casestudies/Code-Ninja.png`,
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
        datePublished: "2024-11-15",
        dateModified: "2024-11-15",
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
