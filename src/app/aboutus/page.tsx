import type { Metadata } from "next";
import StructuredData from "../components/Seo/StructuredData";
import Herosection from "../components/Aboutuspage/Herosection";
import Ourvision from "../components/Aboutuspage/Ourvision";
import Quotessection from "../components/Aboutuspage/Quotessection";
import Agendasection from "../components/Aboutuspage/Agendasection";
import Experiencesection from "../components/Aboutuspage/Experiencesection";
import Leaderssection from "../components/Aboutuspage/Leaderssection";
import Techstack from "../components/Aboutuspage/Techstack";
import Jointeamsection from "../components/Aboutuspage/Jointeamsection";


const weburl = process.env.NEXT_PUBLIC_webUrl!;

export const metadata: Metadata = {
  title: "Softworks Technologies | Web, ERP, E-Commerce & Mobile App Experts",
  description:
    "Learn about Softworks Technologies, a global leader in web, mobile app, ERP, AI, and cloud development. We specialize in Odoo, SAP, e-commerce, and staff augmentation solutions.",
  keywords: [
    "Softworks Technologies",
    "About Softworks",
    "Web Development Company Coimbatore",
    "ERP Software Company",
    "Odoo Developers Dubai",
    "Mobile App Development",
    "Custom Software Solutions",
    "E-Commerce Development",
    "Staff Augmentation Services",
    "AI and Machine Learning",
    "SAP Implementation",
    "Cloud Solutions",
    "Next.js Development",
    "Node.js Experts",
    "Software Outsourcing",
    "Tech Partner Coimbatore",
  ],
  openGraph: {
    type: "website",
    url: `${weburl}/about`,
    title: "Softworks Technologies | Web, ERP, AI & Cloud Experts",
    description:
      "Softworks Technologies offers web, mobile app, ERP, Odoo, AI, SAP, and cloud development with offices in Coimbatore and Dubai.",
    siteName: "Softworks Technologies",
    images: [
      {
        url: `${weburl}/assets/og-about.jpg`,
        width: 1200,
        height: 630,
        alt: "Softworks Technologies About Us",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@softworkstech",
    creator: "@softworkstech",
    title: "Softworks Technologies | E-Commerce, AI & Cloud Experts",
    description:
      "Softworks Technologies delivers innovative solutions in web, mobile, ERP, Odoo, AI, SAP, and cloud technologies.",
    images: [`${weburl}/assets/og-about.jpg`],
  },
};

export default function AboutPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [

      {
        "@type": "AboutPage",
        "@id": `${weburl}/about#aboutpage`,
        url: `${weburl}/about`,
        name: "About Softworks Technologies",
        headline: "About Softworks Technologies - Web, ERP, AI & Cloud Development Experts",
        description:
          "Softworks Technologies is a trusted technology partner offering web, mobile, ERP, Odoo, SAP, and AI-powered solutions for global businesses.",
        image: `${weburl}/assets/og-about.jpg`,
        inLanguage: "en",
        mainEntity: {
          "@type": "Organization",
          name: "Softworks Technologies",
          legalName: "Softworks Technologies Pvt. Ltd.",
          url: weburl,
          logo: `${weburl}/assets/Sfw-Logo1.svg`,
          foundingDate: "2019",
          foundingLocation: {
            "@type": "Place",
            name: "Coimbatore, India",
          },
          address: {
            "@type": "PostalAddress",
            streetAddress: "7/2A, Shreesha Building, First Floor, Central Studio Road, Dhanalakshmi Puram South, Singanallur",
            addressLocality: "Coimbatore",
            addressRegion: "Tamil Nadu",
            postalCode: "641005",
            addressCountry: "IN",
          },
          sameAs: [
            "https://www.facebook.com/softworkstech19",
            "https://www.linkedin.com/company/softworks-technologies",
            "https://www.instagram.com/softworkstech19/",
          ],
          contactPoint: {
            "@type": "ContactPoint",
            contactType: "Customer Support",
            email: "info@sfwtechnologies.com",
            telephone: "+91-9894113103",
            areaServed: {
              "@type": "Place",
              name: "Worldwide",
            },
            availableLanguage: ["English"],
          },
          knowsAbout: [
            "Web Development",
            "Mobile App Development",
            "E-Commerce Development",
            "ERP Solutions",
            "Odoo Development",
            "Staff Augmentation",
            "AI & Machine Learning",
            "Cloud Solutions",
            "SAP Integration",
            "Software Outsourcing",
            "Next.js & React Development",
            "Custom Software Solutions",
          ],
          serviceType: [
            "Web App Development",
            "Mobile App Development",
            "ERP & Odoo Implementation",
            "E-Commerce Solutions",
            "AI & Data Analytics",
            "Cloud Deployment",
            "SAP Customization",
            "Staff Augmentation Services",
          ],
        },
        publisher: {
          "@type": "Organization",
          name: "Softworks Technologies",
          logo: {
            "@type": "ImageObject",
            url: `${weburl}/assets/Sfw-Logo1.svg`,
          },
        },
      },

      // BreadcrumbList schema
      {
        "@type": "BreadcrumbList",
        "@id": `${weburl}/about#breadcrumb`,
        "itemListElement": [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: `${weburl}/`
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "About Us",
            item: `${weburl}/about`
          }
        ]
      }
    ]
  };


  return (
    <>
      <StructuredData data={jsonLd} />

      <Herosection />
      <Ourvision />
      <Quotessection />
      <Agendasection />
      <Experiencesection />
      <Leaderssection />
      <Techstack />
      <Jointeamsection />

    </>
  );
}
