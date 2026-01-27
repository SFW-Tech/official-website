import type { Metadata } from "next";
import StructuredData from "../components/Seo/StructuredData";
import Herosection from "../components/Casestudies/All-Case-Studies/Herosection";
import Content from "../components/Casestudies/All-Case-Studies/Content";

const weburl = process.env.NEXT_PUBLIC_webUrl!;

//  PAGE METADATA
export const metadata: Metadata = {
  title:
    "Case Studies | Web & App Development Success Stories",
  description:
    "Explore how Softworks Technologies helps businesses through innovative web applications, mobile apps, AI, and enterprise software solutions.",
  keywords: [
    "Case Studies Softworks Technologies",
    "Web App Development Case Study",
    "Mobile App Development Coimbatore",
    "AI Development Case Study",
    "Digital Transformation Projects",
    "Enterprise Software Solutions",
    "Custom Web Application Examples",
    "Technology Success Stories",
    "Coimbatore IT Company Case Studies",
  ],
  openGraph: {
    type: "website",
    url: `${weburl}/case-studies`,
    title:
      "Softworks Technologies | Case Studies | Web & App Development Success Stories",
    description:
      "Discover real-world case studies showcasing our expertise in web, mobile, and AI solutions for businesses worldwide.",
    siteName: "Softworks Technologies",
    images: [
      {
        url: `${weburl}/assets/Sfw-Logo1.svg`,
        width: 1200,
        height: 630,
        alt: "Softworks Technologies Case Studies",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@softworkstech",
    creator: "@softworkstech",
    title:
      "Softworks Technologies | Case Studies | Web & App Development Success Stories",
    description:
      "Explore how Softworks Technologies delivered impactful solutions across multiple industries with modern technologies.",
    images: [`${weburl}/assets/Sfw-Logo1.svg`],
  },
};

// PAGE COMPONENT
export default function CaseStudiesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      // 1️ WebSite Schema
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

      // 3️ Breadcrumb Schema
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
            name: "Case Studies",
            item: `${weburl}/case-studies`,
          },
        ],
      },

      // 4️ WebPage Schema
      {
        "@type": "WebPage",
        "@id": `${weburl}/case-studies/#webpage`,
        url: `${weburl}/case-studies`,
        name: "Case Studies | Web & App Development Success Stories | Softworks Technologies",
        description:
          "Softworks Technologies showcases real-world success stories in web development, app design, AI solutions, and enterprise software.",
        inLanguage: "en",
        isPartOf: { "@id": `${weburl}/#website` },
        about: { "@id": `${weburl}/#organization` },
      },

      // 5️ ItemList Schema (All Case Studies)
      {
        "@type": "ItemList",
        "@id": `${weburl}/case-studies/#itemlist`,
        url: `${weburl}/case-studies`,
        name: "Softworks Technologies Case Studies",
        itemListOrder: "Ascending",
        numberOfItems: 9,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            url: `${weburl}/case-studies/Digital-transformation`,
            name: "Digital Transformation",
          },
          {
            "@type": "ListItem",
            position: 2,
            url: `${weburl}/case-studies/Reverse-logistics`,
            name: "Reverse Logistics",
          },
          {
            "@type": "ListItem",
            position: 3,
            url: `${weburl}/case-studies/Appointment-booking`,
            name: "Appointment Booking System",
          },
          {
            "@type": "ListItem",
            position: 4,
            url: `${weburl}/case-studies/Application-system`,
            name: "Application System",
          },
          {
            "@type": "ListItem",
            position: 5,
            url: `${weburl}/case-studies/Food-application`,
            name: "Food App Project",
          },
          {
            "@type": "ListItem",
            position: 6,
            url: `${weburl}/case-studies/Code-ninja`,
            name: "Code Ninja",
          },
          {
            "@type": "ListItem",
            position: 7,
            url: `${weburl}/case-studies/Kiosk`,
            name: "Kiosk",
          },
          {
            "@type": "ListItem",
            position: 8,
            url: `${weburl}/case-studies/Field-Service-Management`,
            name: "Field Service Management",
          },
          {
            "@type": "ListItem",
            position: 9,
            url: `${weburl}/case-studies/Token-management`,
            name: "Token Management",
          },
        ],
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
