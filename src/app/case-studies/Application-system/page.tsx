import type { Metadata } from "next";
import StructuredData from '../../components/Seo/StructuredData'
import Herosection from '../../components/Casestudies/Application-system/Herosection'
import Content from "../../components/Casestudies/Application-system/Content";

const weburl = process.env.NEXT_PUBLIC_webUrl!;

export const metadata: Metadata = {
  title: "Application System Case Study",
  description:
    "Discover how Softworks Technologies developed a robust Application System to streamline workflows, automate processes, and boost operational efficiency for our client.",
  keywords: [
    "Application System case study",
    "workflow automation case study",
    "Softworks Technologies case study",
    "web application case study",
    "enterprise automation case study",
  ],
  openGraph: {
    type: "article",
    url: `${weburl}/case-studies/application-system`,
    title: "Softworks Technologies | Application System Case Study",
    description:
      "Discover how Softworks Technologies developed a robust Application System to streamline workflows, automate processes, and boost operational efficiency for our client.",
    siteName: "Softworks Technologies",
    images: [
      {
        url: `${weburl}/assets/Casestudies/Application-development.png`,
        width: 1200,
        height: 630,
        alt: "Application System Case Study - Softworks Technologies",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@softworkstech",
    creator: "@softworkstech",
    title: "Application System Case Study | Softworks Technologies",
    description:
      "Discover how Softworks Technologies developed a robust Application System to streamline workflows and boost operational efficiency.",
    images: [`${weburl}/assets/Casestudies/Application-development.png`],
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      // 1. Website
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

      // 2. Organization (with social links)
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

      // 3. LocalBusiness (for local SEO)
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

      // 4. BreadcrumbList
      {
        "@type": "BreadcrumbList",
        "@id": `${weburl}/case-studies/application-system/#breadcrumb`,
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
            name: "Application System",
            item: `${weburl}/case-studies/application-system`,
          },
        ],
      },

      // 5. WebPage
      {
        "@type": "WebPage",
        "@id": `${weburl}/case-studies/application-system/#webpage`,
        url: `${weburl}/case-studies/application-system`,
        name: "Application System Case Study | Softworks Technologies",
        description:
          "Case study: Softworks Technologies built an Application System to automate workflow, improve data handling and boost operational productivity.",
        inLanguage: "en",
        isPartOf: { "@id": `${weburl}/#website` },
        about: { "@id": `${weburl}/#organization` },
      },

      // 6. Article (case study specific)
      {
        "@type": "Article",
        "@id": `${weburl}/case-studies/application-system/#article`,
        mainEntityOfPage: { "@type": "WebPage", "@id": `${weburl}/case-studies/application-system` },
        headline: "Application System Case Study | Softworks Technologies",
        description:
          "Discover how Softworks Technologies developed a robust Application System to streamline workflows, automate tasks, and improve operational efficiency.",
        image: `${weburl}/assets/Casestudies/Application-development.png`,
        author: { "@type": "Organization", name: "Softworks Technologies", url: weburl },
        publisher: {
          "@type": "Organization",
          name: "Softworks Technologies",
          logo: { "@type": "ImageObject", url: `${weburl}/assets/Sfw-Logo1.svg` },
        },
        datePublished: "2024-10-10",
        dateModified: "2024-10-10",
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
